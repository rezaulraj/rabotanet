import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { useLocation, Link } from "react-router-dom";
import ModeForm from "./ModeForm";
import { FaStar, FaFire, FaCheck } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeVacancy, setActiveVacancy] = useState(true);
  const [clickedCareer, setClickedCareer] = useState(false);
  const [pulseEffect, setPulseEffect] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
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
    { code: "ru", country: "RU", name: "Russian" },
    { code: "ro", country: "RO", name: "Romanian" },
  ];

  const handleLanguageSelect = (languageCode) => {
    setSelectedLanguage(languageCode);
    setIsLanguageOpen(false);
    // Add your language change logic here
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/employers", label: "Employers" },
    { href: "/applicants", label: "Applicants" },
    { href: "/about", label: "About Us" },
    {
      href: "/career",
      label: "Career",
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
    <a
      href={item.href}
      className={`font-medium transition-colors ${
        location.pathname === item.href
          ? "text-primary font-semibold"
          : "text-gray-800 hover:text-primary"
      }`}
    >
      {item.label}
    </a>
  );

  const RegularCareerLink = ({ item }) => (
    <a
      href={item.href}
      className={`font-medium transition-colors ${
        location.pathname === item.href
          ? "text-primary font-semibold"
          : "text-gray-800 hover:text-primary"
      }`}
    >
      {item.label}
    </a>
  );

  const LanguageDropdown = () => (
    <div className="relative">
      <motion.button
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        className="hidden md:flex items-center gap-2 cursor-pointer bg-primary/30 font-bold px-4 py-2 rounded-md hover:bg-primary/40 transition-colors border-gray-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ReactCountryFlag
          countryCode={
            languages.find((lang) => lang.code === selectedLanguage)?.country
          }
          svg
          style={{
            width: "20px",
            height: "15px",
          }}
        />
        <span className="text-sm">
          {languages.find((lang) => lang.code === selectedLanguage)?.name}
        </span>
      </motion.button>

      <AnimatePresence>
        {isLanguageOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[140px] z-50"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors flex items-center gap-3 ${
                  selectedLanguage === language.code
                    ? "bg-blue-50 text-blue-600"
                    : ""
                }`}
              >
                <ReactCountryFlag
                  countryCode={language.country}
                  svg
                  style={{
                    width: "20px",
                    height: "15px",
                  }}
                />
                <span className="text-sm">{language.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const MobileLanguageDropdown = () => (
    <div className="relative">
      <button
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        className="w-full flex items-center justify-between gap-2 cursor-pointer font-bold px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <ReactCountryFlag
            countryCode={
              languages.find((lang) => lang.code === selectedLanguage)?.country
            }
            svg
            style={{
              width: "20px",
              height: "15px",
            }}
          />
          <span>
            {languages.find((lang) => lang.code === selectedLanguage)?.name}
          </span>
        </div>
      </button>

      <AnimatePresence>
        {isLanguageOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-2 bg-gray-50 rounded-lg border border-gray-200 py-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language.code)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors flex items-center gap-3 ${
                    selectedLanguage === language.code
                      ? "bg-blue-50 text-blue-600"
                      : ""
                  }`}
                >
                  <ReactCountryFlag
                    countryCode={language.country}
                    svg
                    style={{
                      width: "20px",
                      height: "15px",
                    }}
                  />
                  <span>{language.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
      <div className="container max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
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
          <ModeForm isOpen={isOpen} setIsOpen={setIsOpen} />
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden md:inline-block cursor-pointer bg-primary text-white font-bold px-5 py-2 rounded-full hover:bg-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
          <LanguageDropdown />
        </nav>

        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <div key={item.href} className="relative py-2">
                  {item.hasVacancy ? (
                    !userInteracted ? (
                      <CareerButton item={item} isMobile={true} />
                    ) : (
                      <Link
                        to={item.href}
                        className={`font-medium block ${
                          location.pathname === item.href
                            ? "text-primary font-semibold"
                            : "text-gray-800"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  ) : (
                    <Link
                      to={item.href}
                      className={`font-medium block ${
                        location.pathname === item.href
                          ? "text-primary font-semibold"
                          : "text-gray-800"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <a
                href="mailto:manager@rabotanet.com"
                className="bg-primary text-white font-bold px-5 py-2 rounded-full text-center"
              >
                Contact
              </a>
              <MobileLanguageDropdown />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
