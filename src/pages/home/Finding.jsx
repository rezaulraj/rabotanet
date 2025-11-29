import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Finding() {
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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingImageVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
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

  const slideInFromRight = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="py-20 bg-[#F4F4F2] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-between items-center">
          <motion.div
            className="col-span-1 w-full"
            variants={containerVariants}
          >
            <motion.span
              className="text-[17px] text-primary font-normal font-sans block tracking-wider"
              variants={itemVariants}
            >
              {t("homepage.finding.findTopHeading")}
            </motion.span>

            <motion.h2
              className="text-[52px] font-bold font-sans mt-4 text-secondary leading-tight"
              variants={itemVariants}
            >
              {t("homepage.finding.findBig1Heading")}
            </motion.h2>

            <motion.h5
              className="text-[20px] font-bold font-sans mt-6 text-gray-800 leading-relaxed"
              variants={itemVariants}
            >
              {t("homepage.finding.findBig2Heading")}
            </motion.h5>

            <motion.p
              className="text-[16px] text-secondary text-normal font-sans mt-6 leading-7"
              variants={itemVariants}
            >
              <strong className="text-primary">{t("homepage.finding.findParagraph1")}</strong>{" "}
              {t("homepage.finding.findParagraph2")}
            </motion.p>
          </motion.div>

          <motion.div
            className="col-span-1 flex lg:flex-row flex-col md:flex-col justify-center items-center lg:space-x-8 space-y-8 lg:space-y-0"
            variants={slideInFromRight}
          >
            <motion.div
              className="relative"
              variants={floatingImageVariants}
              animate="float"
            >
              <motion.div
                className="p-[4px] w-[200px] max-h-[235px]"
                variants={gradientBorderVariants}
                animate="animate"
              >
                <motion.div
                  className="w-full overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <img
                    src="/images/logo3.png"
                    alt="Finding"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="flex flex-col space-y-8">
              <motion.div
                className="relative"
                variants={floatingImageVariants}
                animate="float"
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <motion.div
                  className="p-[3px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(45deg, #dd0525, transparent, #dd0525)",
                    backgroundSize: "200% 200%",
                  }}
                  variants={gradientBorderVariants}
                  animate="animate"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                    className=" w-[400px]"
                  >
                    <img
                      src="/images/find2.png"
                      alt="Professional"
                      className="rounded-full object-cover bg-white h-full shadow-lg"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative"
                variants={floatingImageVariants}
                animate="float"
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <motion.div
                  className="p-[3px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(45deg, #dd0525, transparent, #dd0525)",
                    backgroundSize: "200% 200%",
                  }}
                  variants={gradientBorderVariants}
                  animate="animate"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: -5,
                      transition: { duration: 0.3 },
                    }}
                    className=" w-[400px]"
                  >
                    <img
                      src="/images/find3.png"
                      alt="Professional"
                      className="rounded-full object-cover bg-white shadow-lg"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
