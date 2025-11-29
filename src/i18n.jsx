import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import ru from "./locales/ru/translation.json";

const detectCountry = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    return data.country;
  } catch (error) {
    console.error("Error detecting country:", error);
    return null;
  }
};

const initializeI18n = async () => {
  const country = await detectCountry();

  const languageMap = {
    RU: "ru",
  };

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        ru: { translation: ru },
      },
      lng: languageMap[country] || "en",
      fallbackLng: "en",
      detection: {
        order: [
          "querystring",
          "cookie",
          "localStorage",
          "sessionStorage",
          "navigator",
          "htmlTag",
          "path",
          "subdomain",
        ],
        caches: ["cookie", "localStorage"],
      },
      interpolation: { escapeValue: false },
    });
};

initializeI18n();

export default i18n;
