import React from "react";
import { motion } from "framer-motion";
import { FaSearchDollar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Personality() {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 40,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.section
      className="py-20 bg-[#F4F4F2]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-4xl px-4">
        <motion.h2
          className="lg:text-[48px] text-secondary md:text-4xl font-bold text-center mb-16 leading-tight"
          variants={itemVariants}
        >
          {t("employeepage.parsonality.parsonalityHeading")}
        </motion.h2>

        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl text-start cursor-pointer border-2 border-transparent hover:border-primary/20 transition-all duration-300"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div
            className="flex justify-start items-start mb-6"
            variants={iconVariants}
            whileHover="hover"
          >
            <div className="bg-secondary p-4 rounded-full shadow-md">
              <FaSearchDollar className="text-primary text-3xl" />
            </div>
          </motion.div>

          <motion.p
            className="text-gray-600 text-[16px] font-sans leading-7"
            variants={itemVariants}
          >
            {t("employeepage.parsonality.parsonalityPara")}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
