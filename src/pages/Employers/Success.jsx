import React from "react";
import { motion } from "framer-motion";

export default function Success() {
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
                Why Headhunting Matters for Your Success
              </motion.h2>
              <motion.p
                className="text-[16px] text-secondary text-normal font-sans mt-4 leading-7"
                variants={itemVariants}
              >
                In today's competitive labour market, attracting and retaining
                top performers is vital. Many of the most talented professionals
                are not actively seeking new roles. Through our headhunting
                services,{" "}
                <strong className="text-primary">RabotaNet Recruitment</strong>{" "}
                enables you to reach beyond traditional channels and connect
                directly with this exceptional talent pool.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
