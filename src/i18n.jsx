import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import ru from "./locales/ru/translation.json";
import by from "./locales/by/translation.json";
import kz from "./locales/kz/translation.json";
import kg from "./locales/kg/translation.json";
import tj from "./locales/tj/translation.json";
import ge from "./locales/ge/translation.json";
import hy from "./locales/hy/translation.json";

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
    BY: "by",
    KZ: "kz",
    KG: "kg",
    TJ: "tj",
    GE: "ge",
    HY: "hy",
  };

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        ru: { translation: ru },
        by: { translation: by },
        kz: { translation: kz },
        kg: { translation: kg },
        tj: { translation: tj },
        ge: { translation: ge },
        hy: { translation: hy },
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
