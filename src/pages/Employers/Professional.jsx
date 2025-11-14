import React, { useState } from "react";
import { motion } from "framer-motion";
import ModeForm from "../../components/ModeForm";

export default function Professional() {
  const [isOpen, setIsOpen] = useState(false);

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

  const buttonVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#192C33",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.section
      className="py-20 bg-[#F4F4F2]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="container max-w-4xl mx-auto text-center px-4">
        <motion.h2
          className="text-[33px] font-medium font-sans mt-4 text-secondary leading-relaxed"
          variants={itemVariants}
        >
          By combining our expertise with an extensive network of professional
          headhunters, we help you elevate your recruitment process and secure
          the kind of exceptional talent that drives long-term success. Our goal
          is simple: we connect you with the very best people, the rare
          professionals who truly make a difference.
        </motion.h2>

        <motion.button
          onClick={() => setIsOpen(true)}
          className="text-[20px] cursor-pointer font-bold font-sans text-white bg-primary px-12 py-4 rounded-4xl mt-8 shadow-lg hover:shadow-xl transition-all duration-300"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          I want the best people.
        </motion.button>

        <motion.p
          className="text-gray-600 text-[16px] font-sans mt-6"
          variants={itemVariants}
        >
          Let's find the exceptional talent your business deserves
        </motion.p>
      </div>

      {isOpen && <ModeForm isOpen={isOpen} setIsOpen={setIsOpen} />}
    </motion.section>
  );
}
