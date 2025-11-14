import React from "react";
import { motion } from "framer-motion";

export default function AppicantHero() {
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
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.section
      className="py-20 bg-primary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="mt-12" variants={containerVariants}>
          <motion.span
            className="text-2xl font-bold text-secondary block"
            variants={itemVariants}
          >
            Services for Candidates
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mt-4"
            variants={itemVariants}
          >
            How to succeed in today's job market.
          </motion.h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={containerVariants}
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-secondary rounded-4xl pb-10 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src="/images/find4.png"
              alt="Consultations"
              className="object-cover rounded-t-4xl w-full h-auto"
            />
            <div className="px-8 py-6">
              <h2 className="text-[30px] text-white font-bold font-sans mb-4">
                Consultations
              </h2>
              <p className="text-white text-[15px] font-normal font-sans leading-6">
                Our candidate consultations are designed to help you present
                yourself confidently and professionally. With guidance from
                experienced consultants, you will improve your interview skills,
                strengthen your personal brand, and increase your chances of
                securing the right role.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-secondary rounded-4xl pb-10 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src="/images/find3.png"
              alt="Personality Assessments"
              className="object-cover rounded-t-4xl w-full h-auto"
            />
            <div className="px-8 py-6">
              <h2 className="text-[30px] text-white font-bold font-sans mb-4">
                Personality Assessments
              </h2>
              <p className="text-white text-[15px] font-normal font-sans leading-6">
                We provide personality assessments that help you and potential
                employers better understand your strengths, motivations, and
                ideal work style. These insights allow for better job alignment
                and stronger career development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
