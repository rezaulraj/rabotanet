import React from "react";
import { motion } from "framer-motion";
import {
  FaRegComments,
  FaPencilAlt,
  FaLinkedin,
  FaIdBadge,
  FaUsers,
  FaQuestionCircle,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";



export default function Consultations() {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 40,
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
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8,
      },
    }),
    hover: {
      y: -8,
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
      },
    },
  };

  const rotateVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const items = [
  {
    icon: <FaRegComments className="text-white text-2xl" />,
    title: t("applicant.consultation.consltationService1"),
  },
  {
    icon: <FaPencilAlt className="text-white text-2xl" />,
    title: t("applicant.consultation.consltationService2"),
  },
  {
    icon: <FaLinkedin className="text-white text-2xl" />,
    title: t("applicant.consultation.consltationService3"),
  },
  {
    icon: <FaIdBadge className="text-white text-2xl" />,
    title: t("applicant.consultation.consltationService4"),
  },
  {
    icon: <FaUsers className="text-white text-2xl" />,
    title: t("applicant.consultation.consltationService5"),
  },
  {
    icon: <FaQuestionCircle className="text-white text-2xl" />,
    title: t("applicant.consultation.consltationService6"),
  },
];

  return (
    <motion.section
      className="py-20 bg-[#F4F4F2] overflow-hidden relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div
        className="absolute top-1/2 left-1/3 opacity-10 z-0"
        variants={rotateVariants}
        animate="rotate"
        transition={{ duration: 50 }}
        style={{ width: "150px", height: "150px" }}
      >
        <img
          src="/images/round.png"
          alt="Rotating Background"
          className="w-full h-full object-contain"
        />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 opacity-10 z-0"
        variants={rotateVariants}
        animate="rotate"
        transition={{ duration: 50 }}
        style={{ width: "150px", height: "150px" }}
      >
        <img
          src="/images/round.png"
          alt="Rotating Background"
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-center lg:text-[48px] md:text-2xl font-semibold text-gray-800 mb-12 leading-tight"
          variants={itemVariants}
        >
          {t("applicant.consultation.consltationHeading")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-xl p-6 flex flex-col items-start text-start border-2 border-transparent hover:border-primary/20 relative overflow-hidden cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 shadow-md relative z-10"
                variants={iconVariants}
                whileHover="hover"
              >
                {item.icon}
              </motion.div>

              <motion.p
                className="text-gray-800 font-semibold text-lg leading-6 relative z-10"
                whileHover={{ color: "#dd0525" }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.p>

              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-primary/0 hover:border-primary/30"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
