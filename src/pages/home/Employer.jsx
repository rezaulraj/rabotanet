import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Employers() {
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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rotateVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const counterVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  const serviceCardVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
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
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
          <motion.div className="relative" variants={itemVariants}>
            <motion.div
              className="inset-0 z-0 absolute flex justify-center items-center max-w-[500px]"
              variants={rotateVariants}
              animate="rotate"
            >
              <img
                src="/images/round.png"
                alt="Employers Background"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="relative z-10"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src="/images/employe.png"
                alt="Employers"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute rounded-4xl flex flex-col justify-center items-center bottom-0 left-0 p-5 z-10 w-48 h-48 bg-primary shadow-2xl"
              variants={counterVariants}
              whileHover={{
                scale: 1.05,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 },
              }}
            >
              <h2 className="text-[40px] font-bold font-sans text-white">
                15 +
              </h2>
              <p className="text-[16px] font-bold font-sans text-white text-center">
                {t("homepage.employer.employerExaperence")}
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center items-start"
            variants={containerVariants}
          >
            <motion.span
              className="text-[17px] text-primary font-normal font-sans"
              variants={itemVariants}
            >
              {t("homepage.employer.employerHeading1")}
            </motion.span>

            <motion.h2
              className="text-[52px] font-bold font-sans mt-4 text-secondary leading-tight"
              variants={itemVariants}
            >
              {t("homepage.employer.employerHeading2")}
            </motion.h2>

            <motion.p
              className="text-[16px] text-secondary text-normal font-sans mt-4 leading-7"
              variants={itemVariants}
            >
              {t("homepage.employer.employerparagraph")}
            </motion.p>

            <div className="w-full">
              <motion.div
                className="bg-white p-6 flex items-start w-full mt-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={serviceCardVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.span
                  className="bg-primary text-white rounded-full w-12 h-12 flex justify-center items-center text-lg font-bold flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.5 },
                  }}
                >
                  01
                </motion.span>
                <div className="max-w-[400px] ml-6">
                  <h5 className="text-[22px] font-bold font-sans text-gray-800">
                    {t("homepage.employer.section1employerHeading1")}
                  </h5>
                  <p className="text-[15px] text-secondary text-normal font-sans mt-3 leading-6">
                    {t("homepage.employer.section1employeroara")}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-6 flex items-start w-full mt-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={serviceCardVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.span
                  className="bg-primary text-white rounded-full w-12 h-12 flex justify-center items-center text-lg font-bold flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    rotate: -360,
                    transition: { duration: 0.5 },
                  }}
                >
                  02
                </motion.span>
                <div className="max-w-[400px] ml-6">
                  <h5 className="text-[22px] font-bold font-sans text-gray-800">
                    {t("homepage.employer.section2employerHeading1")}
                  </h5>
                  <p className="text-[15px] text-secondary text-normal font-sans mt-3 leading-6">
                    {t("homepage.employer.section2employeroara")}
                  </p>
                </div>
              </motion.div>

              <motion.a href="/employers" variants={itemVariants}>
                <motion.button
                  className="bg-primary hover:bg-secondary text-white text-[16px] font-sans cursor-pointer rounded-full px-10 py-4 flex justify-center items-center mt-8 shadow-lg hover:shadow-xl"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  {t("homepage.employer.employerbutton")}
                </motion.button>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
