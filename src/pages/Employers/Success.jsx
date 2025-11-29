import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Success() {
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
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rotateVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const imageContainerVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1,
      },
    },
  };

  const gradientBorderVariants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.section
      className="py-20 bg-[#F4F4F2] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12">
          <motion.div
            className="flex justify-center items-center relative"
            variants={imageContainerVariants}
          >
            <motion.div
              className="absolute inset-0 -left-40 -top-36 flex justify-center w-full items-center z-0"
              variants={rotateVariants}
              animate="rotate"
            >
              <img
                src="/images/round.png"
                alt="Rotating Background"
                className="w-full h-full object-contain opacity-70"
              />
            </motion.div>

            <motion.div
              className="relative z-10 p-[4px] rounded-4xl"
              style={{
                background:
                  "linear-gradient(45deg, #dd0525, transparent, #dd0525)",
                backgroundSize: "200% 200%",
              }}
              variants={gradientBorderVariants}
              animate="animate"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="relative aspect-square overflow-hidden w-full rounded-4xl bg-white shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.img
                  src="/images/employee1.png"
                  alt="Success"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div variants={containerVariants}>
            <div className="flex flex-col justify-center items-start">
              <motion.h2
                className="text-[32px] font-medium font-sans text-secondary leading-tight"
                variants={itemVariants}
              >
                {t("employeepage.success.successHeading")}
              </motion.h2>
              <motion.p
                className="text-[16px] text-secondary text-normal font-sans mt-4 leading-7"
                variants={itemVariants}
              >
                {t("employeepage.success.successPara1")}{" "}
                <strong className="text-primary">
                  {t("employeepage.success.successPara2")}
                </strong>{" "}
                {t("employeepage.success.successPara3")}
              </motion.p>
            </div>
            <motion.div
              className="grid grid-cols-3 gap-4 w-full max-w-md mt-10"
              variants={textVariants}
              transition={{ delay: 0.3 }}
            >
              {[
                {
                  number: "98%",
                  label: t("employeepage.success.successtats1"),
                },
                {
                  number: "24/7",
                  label: t("employeepage.success.successtats2"),
                },
                {
                  number: "100+",
                  label: t("employeepage.success.successtats3"),
                },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white rounded-2xl shadow-sm"
                  whileHover={{
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="text-lg font-bold text-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    {metric.number}
                  </motion.div>
                  <div className="text-xs text-gray-600 mt-1">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
