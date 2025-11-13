import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { useLocation, Link } from "react-router-dom"; // React Router
import ModeForm from "./ModeForm";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // ✅ get current route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/employers", label: "Employers" },
    { href: "/applicants", label: "Applicants" },
    { href: "/about", label: "About Us" },
    { href: "/career", label: "Career" },
  ];

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
            <Link
              key={item.href}
              to={item.href}
              className={`font-medium transition-colors ${
                location.pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-gray-800 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ModeForm isOpen={isOpen} setIsOpen={setIsOpen} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden md:inline-block cursor-pointer bg-primary text-white font-bold px-5 py-2 rounded-full hover:bg-secondary"
          >
            Contact Us
          </button>
        </nav>

        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-medium ${
                  location.pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-gray-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:manager@rabotanet.com"
              className="bg-primary text-white font-bold px-5 py-2 rounded-full text-center"
            >
              Contact
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
