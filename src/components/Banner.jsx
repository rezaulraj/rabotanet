import React from "react";
import { motion } from "framer-motion";
import { MdOutlineDoneOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Banner() {
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

  const imageVariants = {
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
        stiffness: 80,
        damping: 15,
        duration: 1,
      },
    },
  };

  const contentVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const featureItemVariants = {
    hidden: {
      x: -30,
      opacity: 0,
    },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const checkIconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      backgroundColor: "#192C33",
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
      y: -2,
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

  const floatingImageVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
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
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <motion.div className="col-span-6" variants={imageVariants}>
            <motion.div variants={floatingImageVariants} animate="float">
              <motion.img
                src="/images/bannerb.png"
                alt="RabotaNet Recruitment Banner"
                className="object-cover rounded-r-4xl w-full h-auto "
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.4 },
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="col-span-6 flex flex-col justify-center items-start"
            variants={contentVariants}
          >
            <motion.h2
              className="text-[52px] font-bold font-sans mt-4 text-secondary leading-tight"
              variants={itemVariants}
            >
              {t("homepage.banner.bannertopheading")}
            </motion.h2>

            <motion.span
              className="text-[24px] text-primary font-normal font-sans mt-2"
              variants={itemVariants}
            >
              {t("homepage.banner.bannerservies")}
            </motion.span>

            <motion.h5
              className="text-[17px] font-bold font-sans mt-6 text-secondary leading-relaxed"
              variants={itemVariants}
            >
              {t("homepage.banner.bannerHeading")}
            </motion.h5>

            <motion.p
              className="text-[17px] text-secondary font-sans mt-4 leading-8"
              variants={itemVariants}
            >
              {t("homepage.banner.bannerPara1")}{" "}
              <strong className="text-primary">
                {t("homepage.banner.bannerPara2")}
              </strong>{" "}
              {t("homepage.banner.bannerPara3")}
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full"
              variants={containerVariants}
            >
              {[
                t("homepage.banner.bannerSecHeading"),
                t("homepage.banner.bannerThiHeading"),
                t("homepage.banner.bannerFortHeading"),
                t("homepage.banner.bannerFiftHeading"),
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 group"
                  custom={index}
                  variants={featureItemVariants}
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className="flex justify-center items-center w-7 h-7 rounded-full bg-primary group-hover:shadow-lg"
                    variants={checkIconVariants}
                    whileHover="hover"
                  >
                    <MdOutlineDoneOutline size={14} className="text-white" />
                  </motion.div>
                  <motion.h3
                    className="text-[15px] font-bold font-sans text-secondary group-hover:text-primary transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {item}
                  </motion.h3>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="/services"
              className="text-[20px] font-bold font-sans text-white bg-primary hover:bg-secondary px-12 py-4 rounded-4xl mt-12 shadow-lg hover:shadow-xl relative overflow-hidden"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              <span className="relative z-10">
                {t("homepage.banner.bannerLink")}
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
