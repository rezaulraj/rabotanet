import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function OurClient() {
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

  const caseStudyVariants = {
    hidden: {
      x: -100,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const caseStudyVariantsRight = {
    hidden: {
      x: 100,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const starVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    }),
  };

  const backgroundVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="relative py-20 bg-fixed bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/images/banner.png')" }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 bg-white/30 z-0"
        variants={backgroundVariants}
        animate="animate"
      />

      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1 }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          className="flex flex-col justify-center items-center max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.span
            className="text-[17px] text-primary font-normal font-sans tracking-wider"
            variants={itemVariants}
          >
            {t("homepage.ourCliend.cliendTopHeading")}
          </motion.span>

          <motion.h2
            className="text-[52px] font-bold font-sans mt-4 text-secondary leading-snug"
            variants={itemVariants}
          >
            {t("homepage.ourCliend.cliendHeading1")}{" "}
            <span className="text-primary">
              {t("homepage.ourCliend.cliendHeading2")}
            </span>
          </motion.h2>
          <motion.div
            className="bg-white w-full text-start p-10 max-w-5xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 lg:mt-20 md:mt-10 sm:mt-5 mt-5 border border-gray-100"
            variants={caseStudyVariants}
            whileHover={{
              y: -5,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {t("homepage.ourCliend.cliendHeadhuntingHead")}
            </h1>

            <div className="flex items-start mb-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  className="text-primary text-2xl"
                  custom={i}
                  variants={starVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.3,
                    rotate: 180,
                    transition: { duration: 0.5 },
                  }}
                >
                  ★
                </motion.span>
              ))}
            </div>

            <motion.div
              className="space-y-4 text-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.p
                className="text-gray-700 text-base leading-7 font-medium"
                variants={itemVariants}
              >
                {t("homepage.ourCliend.cliendHeadhuntingPara")}
              </motion.p>
            </motion.div>

            <motion.div
              className="absolute bottom-4 right-4 w-8 h-8 bg-primary/20 rounded-full"
              whileHover={{
                scale: 1.5,
                backgroundColor: "rgba(221, 5, 37, 0.4)",
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>

          <motion.div
            className="bg-white w-full text-start p-10 max-w-5xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 lg:mt-20 md:mt-10 sm:mt-5 mt-5 border border-gray-100"
            variants={caseStudyVariantsRight}
            whileHover={{
              y: -5,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {t("homepage.ourCliend.clientRecuitHead")}
            </h1>

            <div className="flex items-start mb-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  className="text-primary text-2xl"
                  custom={i}
                  variants={starVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.3,
                    rotate: -180,
                    transition: { duration: 0.5 },
                  }}
                >
                  ★
                </motion.span>
              ))}
            </div>

            <motion.div
              className="space-y-4 text-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.p
                className="text-gray-700 text-base leading-7 font-medium"
                variants={itemVariants}
              >
                {t("homepage.ourCliend.clientRecuitPara")}
              </motion.p>
            </motion.div>

            <motion.div
              className="absolute bottom-4 right-4 w-8 h-8 bg-secondary/20 rounded-full"
              whileHover={{
                scale: 1.5,
                backgroundColor: "rgba(25, 44, 51, 0.4)",
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
