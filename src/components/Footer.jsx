import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const socialIconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      rotate: 5,
      backgroundColor: "#ffffff",
      color: "#0f2529",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const linkVariants = {
    hover: {
      x: 5,
      color: "#ef4444",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const addressVariants = {
    hover: {
      scale: 1.02,
      color: "#ef4444",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      rotate: [-1, 1, -1, 0],
      transition: {
        rotate: {
          duration: 0.5,
          ease: "easeInOut",
        },
        scale: {
          duration: 0.3,
        },
      },
    },
  };

  return (
    <footer className="bg-[#0f2529] text-white py-12 overflow-hidden">
      <motion.div
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={itemVariants}>
          <motion.h2
            className="text-2xl font-bold"
            whileHover={{ color: "#ef4444" }}
            transition={{ duration: 0.3 }}
          >
            {t("footer.footerFront")} <span className="text-primary">®</span>
          </motion.h2>
          <motion.p
            className="text-sm text-red-400 mt-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            {t("footer.footerPara")}
          </motion.p>

          <motion.div
            className="mt-6"
            variants={logoVariants}
            whileHover="hover"
          >
            <motion.img
              src="/logo2.png"
              alt="RabotaNet Recruitment"
              width={150}
              height={200}
              className="h-auto w-40 cursor-pointer"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h3
            className="text-2xl font-bold mb-3"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {t("footer.footerContact")}
          </motion.h3>
          <motion.p
            className="flex items-center gap-2 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            📧{" "}
            <motion.a
              href="mailto:manager@rabotanet.com"
              className="hover:underline"
              whileHover={{ color: "#ef4444" }}
            >
              manager@rabotanet.com
            </motion.a>
          </motion.p>

          <div className="flex space-x-3 mt-6">
            {[
              {
                icon: FaFacebookF,
                href: "https://www.facebook.com/RabotaNet00",
              },
              {
                icon: FaInstagram,
                href: "https://www.instagram.com/rabotanet01",
              },
              { icon: FaYoutube, href: "http://www.youtube.com/@RabotaNet01" },
              { icon: FaXTwitter, href: "https://x.com/RabotaNet01" },
              { icon: FaTiktok, href: "https://www.tiktok.com/@rabotanet1" },
              {
                icon: FaPinterest,
                href: "https://www.pinterest.com/dizirabotanet/",
              },
            ].map((SocialIcon, index) => (
              <motion.a
                key={index}
                href={SocialIcon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white rounded relative overflow-hidden"
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
                custom={index}
              >
                <SocialIcon.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h3
            className="text-2xl font-bold mb-3"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {t("footer.footertext")}
          </motion.h3>
          <ul className="space-y-2">
            {[
              { to: "/", label: t("footer.footerLink1") },
              { to: "/services", label: t("nav.service") },
              { to: "/employers", label: t("footer.footerLink2") },
              { to: "/applicants", label: t("footer.footerLink3") },
              { to: "/about", label: t("footer.footerLink4") },
              { to: "/career", label: t("nav.career") },
              { to: "/blogs", label: t("footer.blog") },
            ].map((link, index) => (
              <motion.li key={index} whileHover="hover">
                <motion.div variants={linkVariants}>
                  <Link to={link.to} className="block py-1">
                    {link.label}
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Office Locations */}
        <motion.div className="space-y-5" variants={itemVariants}>
          <motion.h3
            className="text-2xl font-bold mb-3"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {t("footer.footerOffice")}
          </motion.h3>

          {[
            {
              country: "Belarus",
              address:
                "220092, Frunzensky District, Minsk, Beruta st., 3B, Belarus",
              href: "https://www.google.com/maps/search/220092,+Frunzensky+District,+Minsk,+Beruta+st.,+3B,+Belarus/",
            },
            {
              country: "UK",
              address: "Lower Harding St, Northampton NN1 2JL, United Kingdom",
              href: "https://www.google.com/maps/place/Lower+Harding+St,+Northampton,+UK/",
            },
            {
              country: "Romania",
              address: "Str. Sg. Constantin Moise 5 D, SECTORUL 6, BUCHAREST",
              href: "https://www.google.com/maps/search/Str.+Sg.+Constantin+Moise+5+D+BUCURESTI,+Loc.+SECTORUL+6/",
            },
            {
              country: "UAE [Dubai]",
              address: "The One Tower, Fl.24, DUBAI, UAE",
              href: "https://www.google.com/maps/place/The+One+Tower/",
            },
            {
              country: "Dhaka",
              address:
                "Road Number 12, Sector : 6 , Uttara ,Dhaka -1230 Bangladesh",
              href: "https://www.google.com/maps/search/Road+Number+12,+Sector+:+6+,+Uttara+,Dhaka+-1230+Bangladesh/",
            },
          ].map((office, index) => (
            <motion.div
              key={index}
              className="space-y-2"
              whileHover="hover"
              variants={addressVariants}
            >
              <motion.h4
                className="text-[18px] font-semibold"
                whileHover={{ color: "#ef4444" }}
              >
                {office.country}
              </motion.h4>
              <motion.a
                href={office.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] block hover:text-primary leading-relaxed"
                whileHover={{ scale: 1.02 }}
              >
                {office.address}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="border-t border-gray-600 mt-10 pt-6 text-sm text-gray-400 text-center container max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-sm text-center"
          whileHover={{ scale: 1.05, color: "#ffffff" }}
        >
          Copyright © 2025 RabotaNet Recruitment
        </motion.p>
      </motion.div>
    </footer>
  );
}
