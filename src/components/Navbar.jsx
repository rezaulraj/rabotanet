import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { useLocation, Link } from "react-router-dom";
import ModeForm from "./ModeForm";
import { FaStar, FaFire, FaCheck } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeVacancy, setActiveVacancy] = useState(true);
  const [clickedCareer, setClickedCareer] = useState(false);
  const [pulseEffect, setPulseEffect] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hasInteracted = sessionStorage.getItem("careerNavInteracted");
    if (hasInteracted === "true") {
      setUserInteracted(true);
      setActiveVacancy(false);
      setPulseEffect(false);
    }
  }, []);

  useEffect(() => {
    if (userInteracted) return;

    const vacancyInterval = setInterval(() => {
      if (Math.random() > 0.3) {
        setActiveVacancy(true);
        setPulseEffect(true);
      }
    }, 10000);

    return () => clearInterval(vacancyInterval);
  }, [userInteracted]);

  useEffect(() => {
    if (pulseEffect && !userInteracted) {
      const timer = setTimeout(() => setPulseEffect(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [pulseEffect, userInteracted]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCareerClick = () => {
    sessionStorage.setItem("careerNavInteracted", "true");
    setUserInteracted(true);
    setClickedCareer(true);
    setActiveVacancy(false);
    setPulseEffect(false);
    setTimeout(() => setClickedCareer(false), 1500);
  };

  const languages = [
    { code: "en", country: "US", name: "English" },
    { code: "ru", country: "RU", name: "Russian (Russia)" },
    { code: "by", country: "BY", name: "Russian (Belarus)" },
    { code: "kz", country: "KZ", name: "Russian (Kazakhstan)" },
    { code: "kg", country: "KG", name: "Russian (Kyrgyzstan)" },
    { code: "tj", country: "TJ", name: "Russian (Tajikistan)" },
    { code: "ge", country: "GE", name: "Georgian" },
    { code: "hyit", country: "AM", name: "Armenian" },
    { code: "az", country: "AZ", name: "Azerbaijani" },
    { code: "md", country: "MD", name: "Moldova (Romanian)" },
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsLanguageOpen(false);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.service") },
    { href: "/employers", label: t("nav.employers") },
    { href: "/applicants", label: t("nav.applicants") },
    { href: "/about", label: t("nav.about") },
    {
      href: "/career",
      label: t("nav.career"),
      hasVacancy: true,
    },
  ];

  const FloatingParticles = () => (
    <div className="absolute -top-2 -right-2">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            y: [-10, -20, -30],
            x: Math.sin(i * 120) * 10,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );

  const VacancyIndicator = () => (
    <motion.div
      className="absolute -top-1 -right-1"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <motion.div
        className="relative"
        animate={{
          scale: pulseEffect ? [1, 1.2, 1] : 1,
          rotate: pulseEffect ? [0, 10, -10, 0] : 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <FaFire className="text-red-500 text-sm" />
        <motion.div
          className="absolute inset-0 text-red-500"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );

  const CareerButton = ({ item, isMobile = false }) => (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={item.href}
        onClick={item.hasVacancy ? handleCareerClick : undefined}
        className="font-medium relative inline-block"
      >
        <motion.span
          className="block"
          animate={
            !userInteracted && activeVacancy && !clickedCareer
              ? {
                  fontSize: ["16px", "20px", "16px"],
                  fontWeight: ["500", "800", "500"],
                  color: ["#000", "#ef4444", "#000"],
                  scale: [1, 1.2, 1],
                }
              : location.pathname === item.href
              ? {
                  color: "#ef4444",
                  fontWeight: "700",
                }
              : {
                  color: "#1f2937",
                  fontWeight: "500",
                }
          }
          transition={{
            duration: 1.5,
            repeat:
              !userInteracted && activeVacancy && !clickedCareer ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          {item.label}
        </motion.span>

        {!userInteracted &&
          item.hasVacancy &&
          activeVacancy &&
          !clickedCareer && (
            <>
              <VacancyIndicator />
              <FloatingParticles />
            </>
          )}

        <AnimatePresence>
          {clickedCareer && item.hasVacancy && !userInteracted && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-green-500 text-xs"
                  initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [1, 1, 0],
                    x: Math.cos((i * 45 * Math.PI) / 180) * 30,
                    y: Math.sin((i * 45 * Math.PI) / 180) * 30,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                >
                  <FaCheck />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  );

  const RegularNavLink = ({ item }) => (
    <Link
      to={item.href}
      className={`font-medium transition-colors ${
        location.pathname === item.href
          ? "text-primary font-semibold"
          : "text-gray-800 hover:text-primary"
      }`}
    >
      {item.label}
    </Link>
  );

  const RegularCareerLink = ({ item }) => (
    <Link
      to={item.href}
      className={`font-medium transition-colors ${
        location.pathname === item.href
          ? "text-primary font-semibold"
          : "text-gray-800 hover:text-primary"
      }`}
    >
      {item.label}
    </Link>
  );

  const LanguageDropdown = () => (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        onBlur={() => setTimeout(() => setIsLanguageOpen(false), 150)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-primary/50 hover:border-primary transition-colors shadow-sm  cursor-pointer"
      >
        <ReactCountryFlag
          countryCode={currentLanguage.country}
          svg
          style={{
            width: "20px",
            height: "15px",
          }}
          title={currentLanguage.name}
        />
        {/* <span className="text-sm font-medium text-gray-700 hidden lg:block">
          {currentLanguage.name}
        </span> */}
        <HiChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform ${
            isLanguageOpen ? "rotate-180" : ""
          }`}
        />
      </motion.button>

      {isLanguageOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
        >
          {languages.map((lang) => (
            <motion.button
              key={lang.code}
              whileHover={{ backgroundColor: "#f8fafc" }}
              onClick={() => changeLanguage(lang.code)}
              className={`flex items-center gap-3 w-full px-4 py-2 text-left transition-colors cursor-pointer ${
                i18n.language === lang.code
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <ReactCountryFlag
                countryCode={lang.country}
                svg
                style={{
                  width: "20px",
                  height: "15px",
                }}
                title={lang.name}
              />
              <span className="text-sm">{lang.name}</span>
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );

  const MobileLanguageButton = () => (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        onBlur={() => setTimeout(() => setIsLanguageOpen(false), 150)}
        className="flex items-center gap-1 p-2 rounded-lg bg-white border border-gray-200 shadow-sm cursor-pointer"
      >
        <ReactCountryFlag
          countryCode={currentLanguage.country}
          svg
          style={{
            width: "20px",
            height: "15px",
          }}
          title={currentLanguage.name}
        />
        <HiChevronDown
          className={`w-3 h-3 text-gray-500 transition-transform ${
            isLanguageOpen ? "rotate-180" : ""
          }`}
        />
      </motion.button>

      {isLanguageOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
        >
          {languages.map((lang) => (
            <motion.button
              key={lang.code}
              whileHover={{ backgroundColor: "#f8fafc" }}
              onClick={() => changeLanguage(lang.code)}
              className={`flex items-center gap-3 w-full px-3 py-2 text-left transition-colors cursor-pointer ${
                i18n.language === lang.code
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <ReactCountryFlag
                countryCode={lang.country}
                svg
                style={{
                  width: "20px",
                  height: "15px",
                }}
                title={lang.name}
              />
              <span className="text-sm">{lang.name}</span>
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-[#F4F4F2]"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="w-10 h-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.href} className="relative">
              {item.hasVacancy ? (
                !userInteracted ? (
                  <CareerButton item={item} />
                ) : (
                  <RegularCareerLink item={item} />
                )
              ) : (
                <RegularNavLink item={item} />
              )}
            </div>
          ))}

          <div className={`fixed inset-0 ${isOpen ? "block" : "hidden"}`}>
            <ModeForm isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="hidden md:inline-block cursor-pointer bg-primary text-white font-bold px-5 py-2 rounded-full hover:bg-secondary transition-colors"
          >
            {t("nav.contact")}
          </motion.button>

          <LanguageDropdown />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <MobileLanguageButton />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl text-gray-800 p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg border-t"
          >
            <nav className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.hasVacancy ? (
                    !userInteracted ? (
                      <CareerButton item={item} isMobile={true} />
                    ) : (
                      <Link
                        to={item.href}
                        className={`font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                          location.pathname === item.href
                            ? "text-primary font-semibold bg-primary/10"
                            : "text-gray-800 hover:bg-gray-50"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  ) : (
                    <Link
                      to={item.href}
                      className={`font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                        location.pathname === item.href
                          ? "text-primary font-semibold bg-primary/10"
                          : "text-gray-800 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setIsOpen(true);
                  setIsMenuOpen(false);
                }}
                className="bg-primary text-white font-bold py-3 px-4 rounded-full text-center mt-4 hover:bg-secondary transition-colors cursor-pointer"
              >
                {t("nav.contact")}
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
