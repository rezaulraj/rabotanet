import React from "react";
import { motion } from "framer-motion";
import { TiMessages } from "react-icons/ti";
import { FaPen, FaCalendarAlt, FaQuestionCircle } from "react-icons/fa";

export default function Service() {
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
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const serviceCardVariants = {
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
        damping: 10,
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
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

  const statsVariants = {
    hidden: {
      y: 50,
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

  const counterVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
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
      <div className="container max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
          <motion.div variants={containerVariants}>
            <div className="flex flex-col justify-center items-start">
              <motion.span
                className="text-[17px] text-primary font-normal font-sans"
                variants={itemVariants}
              >
                SERVICES FOR APPLICANTS
              </motion.span>

              <motion.h2
                className="text-[52px] font-bold font-sans mt-4 text-secondary leading-snug"
                variants={itemVariants}
              >
                How to stand out in today's <br /> job market.
              </motion.h2>

              <motion.p
                className="text-[16px] text-secondary text-normal font-sans mt-4 max-w-md leading-7"
                variants={itemVariants}
              >
                If you are pursuing a new opportunity, we will help you present
                yourself with confidence and clarity, maximising your chances of
                securing your ideal role.
              </motion.p>
            </div>

            <motion.button
              className="bg-primary hover:bg-secondary text-white text-[16px] font-sans cursor-pointer rounded-full px-10 py-4 flex justify-center items-center mt-8 shadow-lg hover:shadow-xl"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              More Information for Applicants
            </motion.button>
          </motion.div>

          <motion.div
            className="relative flex justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              className="absolute inset-0 z-0 flex justify-center items-center max-w-[500px] mx-auto"
              variants={rotateVariants}
              animate="rotate"
            >
              <img
                src="/images/round.png"
                alt="Applicants Background"
                className="object-cover w-full h-full"
              />
            </motion.div>

            <motion.div
              className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[550px]"
              variants={containerVariants}
            >
              <motion.div
                className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl duration-300 border border-gray-100"
                variants={serviceCardVariants}
                whileHover="hover"
              >
                <motion.div
                  className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <TiMessages size={22} />
                </motion.div>
                <h3 className="text-lg font-semibold text-secondary mb-3">
                  Interview Preparation
                </h3>
                <p className="text-sm text-gray-600 leading-6">
                  We equip you with interview techniques, conduct mock
                  interviews, and build your confidence.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl duration-300 border border-gray-100"
                variants={serviceCardVariants}
                whileHover="hover"
              >
                <motion.div
                  className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FaPen size={20} />
                </motion.div>
                <h3 className="text-lg font-semibold text-secondary mb-3">
                  CV & LinkedIn Profile Enhancement
                </h3>
                <p className="text-sm text-gray-600 leading-6">
                  We refine your CV and LinkedIn profile to make a strong first
                  impression.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl duration-300 border border-gray-100"
                variants={serviceCardVariants}
                whileHover="hover"
              >
                <motion.div
                  className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FaCalendarAlt size={20} />
                </motion.div>
                <h3 className="text-lg font-semibold text-secondary mb-3">
                  Labour Market Analysis
                </h3>
                <p className="text-sm text-gray-600 leading-6">
                  We analyse your career opportunities across industries and
                  regions, identifying the most suitable positions.
                </p>
              </motion.div>
              <motion.div
                className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl duration-300 border border-gray-100"
                variants={serviceCardVariants}
                whileHover="hover"
              >
                <motion.div
                  className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FaQuestionCircle size={20} />
                </motion.div>
                <h3 className="text-lg font-semibold text-secondary mb-3">
                  Personality Assessments
                </h3>
                <p className="text-sm text-gray-600 leading-6">
                  We provide assessments that help both you and potential
                  employers understand your strengths and optimal fit.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="lg:mt-20 md:mt-10 mt-5 bg-[#192C33] w-full rounded-2xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-8 p-12"
            variants={containerVariants}
          >
            {[
              { number: "6,000+", text: "interviews conducted" },
              { number: "1,600+", text: "verified CVs" },
              { number: "180+", text: "satisfied employers" },
              { number: "62+", text: "professional articles published" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={statsVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.h2
                  className="text-[42px] font-bold font-sans text-white mb-2"
                  variants={counterVariants}
                >
                  {stat.number}
                </motion.h2>
                <motion.p
                  className="text-[16px] font-semibold font-sans text-white/90 uppercase tracking-wide"
                  variants={itemVariants}
                >
                  {stat.text}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
