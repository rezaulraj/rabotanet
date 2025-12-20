import React from "react";
import { motion } from "framer-motion";
import { FaMedal, FaSyncAlt, FaHandshake } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Whatvalue() {
  const { t } = useTranslation();
  const values = [
    {
      icon: <FaMedal className="w-6 h-6 text-white" />,
      title: t("about.whatValue.valueStatsTitle1"),
      description: t("about.whatValue.valueStatsDescription1"),
    },
    {
      icon: <FaSyncAlt className="w-6 h-6 text-white" />,
      title: t("about.whatValue.valueStatsTitle2"),
      description: t("about.whatValue.valueStatsDescription2"),
    },
    {
      icon: <FaHandshake className="w-6 h-6 text-white" />,
      title: t("about.whatValue.valueStatsTitle3"),
      description: t("about.whatValue.valueStatsDescription3"),
    },
  ];

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
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -5,
      scale: 1.02,
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
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
      <div className="container mx-auto px-4 py-12">
        <motion.h2
          className="lg:text-[48px] md:text-3xl font-bold text-center mb-12 text-secondary font-sans"
          variants={itemVariants}
        >
          {t("about.whatValue.valueHeading")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start text-start"
            >
              <motion.div
                className="mb-4 p-4 bg-primary rounded-full"
                variants={iconVariants}
                whileHover="hover"
              >
                {value.icon}
              </motion.div>

              <motion.h3
                className="text-xl font-semibold mb-4 text-gray-800"
                variants={itemVariants}
              >
                {value.title}
              </motion.h3>

              <motion.p
                className="text-gray-600 leading-6"
                variants={itemVariants}
              >
                {value.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
