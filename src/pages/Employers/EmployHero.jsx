import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function EmployHero() {
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

  const cardVariants = {
    hidden: {
      y: 80,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 1.1,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
      },
    },
  };

  const buttonVariants = {
    initial: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.05,
      y: -3,
      boxShadow: "0 20px 40px rgba(221, 5, 37, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.98,
      y: 0,
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

  const staggerCardVariants = {
    hidden: {
      y: 60,
      opacity: 0,
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8,
      },
    }),
  };

  return (
    <motion.section
      className="py-20 bg-primary overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div
        className="absolute top-1/4 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div
        className="absolute bottom-1/3 right-20 w-12 h-12 bg-secondary/20 rounded-full blur-lg"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/5 rounded-full blur-md"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 0.5 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="mt-12" variants={containerVariants}>
          <motion.span
            className="text-2xl font-bold text-secondary block"
            variants={itemVariants}
          >
            {t("employeepage.heroEmployee.heroEmployeeTopHeading")}
          </motion.span>
          <motion.h1
            className="lg:text-[48px] md:text-3xl sm:text-2xl font-sans max-w-2xl mt-4 font-bold text-white leading-tight"
            variants={itemVariants}
          >
            {t("employeepage.heroEmployee.heroEmployeeHeading")}
          </motion.h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
        >
          <motion.div
            custom={0}
            variants={staggerCardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="bg-white p-6 rounded-4xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="overflow-hidden rounded-3xl"
                variants={imageVariants}
              >
                <motion.img
                  src="/images/employee1.png"
                  alt="Headhunting"
                  className="object-cover w-full h-auto"
                  whileHover="hover"
                />
              </motion.div>

              <div className="py-6 flex-grow">
                <motion.h2
                  className="text-[30px] text-secondary font-bold font-sans mb-4"
                  whileHover={{ color: "#dd0525" }}
                  transition={{ duration: 0.3 }}
                >
                  {t("employeepage.heroEmployee.heroHuntingHead")}
                </motion.h2>
                <motion.p
                  className="text-secondary text-[15px] font-normal font-sans leading-6"
                  variants={itemVariants}
                >
                  {t("employeepage.heroEmployee.heroHuntingPara")}
                </motion.p>
              </div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <Link to="/about">
                  <motion.button
                    className="text-[18px] rounded-4xl cursor-pointer font-bold font-sans text-white bg-primary hover:bg-secondary px-8 py-4 w-full hover:shadow-xl relative overflow-hidden"
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">
                      {t("employeepage.heroEmployee.heroHuntingLink")}
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            custom={1}
            variants={staggerCardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="bg-white p-6 rounded-4xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="overflow-hidden rounded-3xl"
                variants={imageVariants}
              >
                <motion.img
                  src="/images/employee2.png"
                  alt="Recruiting"
                  className="object-cover w-full h-auto"
                  whileHover="hover"
                />
              </motion.div>

              <div className="py-6 flex-grow">
                <motion.h2
                  className="text-[30px] text-secondary font-bold font-sans mb-4"
                  whileHover={{ color: "#dd0525" }}
                  transition={{ duration: 0.3 }}
                >
                  {t("employeepage.heroEmployee.heroRecuitHead")}
                </motion.h2>
                <motion.p
                  className="text-secondary text-[15px] font-normal font-sans leading-6"
                  variants={itemVariants}
                >
                  {t("employeepage.heroEmployee.heroRecuitPara")}
                </motion.p>
              </div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <Link to="/about">
                  <motion.button
                    className="text-[18px] rounded-4xl cursor-pointer font-bold font-sans text-white bg-primary hover:bg-secondary px-8 py-4 w-full hover:shadow-xl relative overflow-hidden"
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">
                      {t("employeepage.heroEmployee.heroRecuitLink")}
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
