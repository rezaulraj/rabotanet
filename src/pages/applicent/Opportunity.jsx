import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Opportunity() {
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

  return (
    <motion.section
      className="py-20 bg-[#F4F4F2] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12">
          <motion.div
            className="flex justify-center items-center relative"
            variants={imageContainerVariants}
          >
           
            <motion.div
              className="absolute inset-0 -left-40 -top-36 w-full flex justify-center items-center z-0"
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
                className="relative w-full aspect-square overflow-hidden rounded-4xl bg-white shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.img
                  src="/images/employee1.png"
                  alt="Consultation"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -top-2 -right-2 w-10 h-10 bg-primary/30 rounded-full z-20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-8 h-8 bg-secondary/30 rounded-full z-20"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>

          <motion.div variants={containerVariants}>
            <div className="flex flex-col justify-center items-start">
              <motion.h2
                className="text-[24px] md:text-[32px] font-medium font-sans mt-4 text-secondary leading-tight"
                variants={itemVariants}
              >
                {t("applicant.opertunity.opertunityHeading")}
              </motion.h2>
              <motion.p
                className="text-[14px] md:text-[16px] text-secondary font-sans mt-4 leading-7"
                variants={itemVariants}
              >
                {t("applicant.opertunity.opertunityPara")}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
