import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
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
      x: -50,
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

  const logoVariants = {
    hidden: {
      x: 100,
      opacity: 0,
      scale: 0.8,
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
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: {
        duration: 0.4,
      },
    },
  };

  const rotateVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.section
      className="py-30 bg-[#F4F4F2] overflow-hidden relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div
        className="absolute top-20 right-20 opacity-10 z-0"
        variants={rotateVariants}
        animate="rotate"
        style={{ width: "400px", height: "400px" }}
      >
        <img
          src="/images/round.png"
          alt="Rotating Background"
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="flex flex-col" variants={containerVariants}>
            <motion.span
              className="text-[16px] font-sans font-bold text-primary mb-4"
              variants={itemVariants}
            >
              ABOUT US
            </motion.span>

            <motion.h1
              className="text-[48px] text-secondary font-sans leading-tight"
              variants={itemVariants}
            >
              15 Years of Recruitment Expertise
            </motion.h1>

            <motion.p
              className="text-[16px] font-sans text-[#192c33] mt-6 leading-7"
              variants={itemVariants}
            >
              <strong className="text-primary">RabotaNet </strong> is a
              recognized name in Europe's human resources industry and has
              recently expanded its operations to Belarus. With more than 15
              years of expertise in manpower management, we are committed to
              delivering solutions that address the unique needs of every
              client.
            </motion.p>

            <motion.p
              className="text-[16px] font-sans text-[#192c33] mt-6 leading-7"
              variants={itemVariants}
            >
              We take pride in our ability to match the right talent with the
              right opportunities, drawing on top-tier resources and proven
              industry knowledge. Our team of seasoned professionals brings
              extensive experience in manpower consulting, ensuring exceptional
              service at every stage.
            </motion.p>

            <motion.p
              className="text-[16px] font-sans text-[#192c33] mt-6 leading-7"
              variants={itemVariants}
            >
              Our services are flexible and tailored designed to align with each
              client's specific goals and budget. From temporary placements to
              long-term recruitment, we offer comprehensive human capital
              solutions worldwide.
            </motion.p>

            <motion.p
              className="text-[16px] font-sans text-[#192c33] mt-6 leading-7"
              variants={itemVariants}
            >
              Our vision is to be the trusted HR partner of choice for both
              government and non-government organizations.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex justify-center items-center relative"
            variants={logoVariants}
            whileHover="hover"
          >
            <motion.div
              className="relative p-8 rounded-4xl bg-white shadow-2xl"
              style={{
                background:
                  "linear-gradient(45deg, #dd0525, transparent, #dd0525)",
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                className="bg-white p-12 rounded-3xl shadow-inner"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.img
                  src="/images/logo3.png"
                  alt="RabotaNet Logo"
                  className="w-80 h-80 object-contain"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
