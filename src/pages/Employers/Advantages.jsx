import React from "react";
import { motion } from "framer-motion";
import { FaUserClock, FaSearchDollar, FaClock } from "react-icons/fa";

export default function Advantages() {
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
      y: 60,
      opacity: 0,
      scale: 0.9,
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8,
      },
    }),
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconContainerVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        duration: 0.5,
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

  const advantages = [
    {
      icon: FaUserClock,
      title: "Access to passive candidates",
      description:
        "We help you engage with professionals who are not actively applying for jobs, giving you the chance to hire rare and exceptional talent.",
    },
    {
      icon: FaSearchDollar,
      title: "Industry-specific expertise",
      description:
        "Our headhunters focus on defined industries and functional areas, ensuring a deeper understanding of your requirements and more precise candidate matches.",
    },
    {
      icon: FaClock,
      title: "Time and resource efficiency",
      description:
        "Outsourcing to our experts saves you valuable time and internal resources, while ensuring a professional and discreet search process.",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-[#F4F4F2] overflow-hidden relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.h2
        className="lg:text-[48px] text-secondary md:text-4xl font-bold text-center mb-16 leading-tight"
        variants={itemVariants}
      >
        Advantages of RabotaNet Recruitment Headhunting
      </motion.h2>
      <motion.div
        className="absolute inset-0 flex justify-center items-center z-0"
        variants={rotateVariants}
        animate="rotate"
      >
        <img
          src="/images/round.png"
          alt="Rotating Background"
          className="w-[500px] h-[500px] object-contain opacity-70"
        />
      </motion.div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center relative"
          variants={containerVariants}
        >
          <motion.div
            custom={0}
            variants={cardVariants}
            whileHover="hover"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl text-center cursor-pointer border-2 border-transparent hover:border-primary/20 relative overflow-hidden w-full max-w-md mb-8 lg:mb-12 z-20"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100"
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="flex justify-center mb-6 relative z-10"
              variants={iconContainerVariants}
              whileHover="hover"
            >
              <div className="bg-secondary p-4 rounded-full shadow-lg">
                <FaUserClock className="text-primary text-3xl" />
              </div>
            </motion.div>

            <motion.h3
              className="text-[21px] font-display font-semibold mb-4 text-gray-800 relative z-10"
              whileHover={{ color: "#dd0525" }}
              transition={{ duration: 0.3 }}
            >
              {advantages[0].title}
            </motion.h3>

            <motion.p
              className="text-gray-600 text-[15px] font-sans leading-6 relative z-10"
              variants={itemVariants}
            >
              {advantages[0].description}
            </motion.p>

            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-primary/0 hover:border-primary/30"
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row gap-8 justify-center items-center w-full z-20"
            variants={containerVariants}
          >
            <motion.div
              custom={1}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl text-center cursor-pointer border-2 border-transparent hover:border-primary/20 relative overflow-hidden w-full max-w-md"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="flex justify-center mb-6 relative z-10"
                variants={iconContainerVariants}
                whileHover="hover"
              >
                <div className="bg-secondary p-4 rounded-full shadow-lg">
                  <FaSearchDollar className="text-primary text-3xl" />
                </div>
              </motion.div>

              <motion.h3
                className="text-[21px] font-display font-semibold mb-4 text-gray-800 relative z-10"
                whileHover={{ color: "#dd0525" }}
                transition={{ duration: 0.3 }}
              >
                {advantages[1].title}
              </motion.h3>

              <motion.p
                className="text-gray-600 text-[15px] font-sans leading-6 relative z-10"
                variants={itemVariants}
              >
                {advantages[1].description}
              </motion.p>

              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary/0 hover:border-primary/30"
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              custom={2}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl text-center cursor-pointer border-2 border-transparent hover:border-primary/20 relative overflow-hidden w-full max-w-md"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="flex justify-center mb-6 relative z-10"
                variants={iconContainerVariants}
                whileHover="hover"
              >
                <div className="bg-secondary p-4 rounded-full shadow-lg">
                  <FaClock className="text-primary text-3xl" />
                </div>
              </motion.div>

              <motion.h3
                className="text-[21px] font-display font-semibold mb-4 text-gray-800 relative z-10"
                whileHover={{ color: "#dd0525" }}
                transition={{ duration: 0.3 }}
              >
                {advantages[2].title}
              </motion.h3>

              <motion.p
                className="text-gray-600 text-[15px] font-sans leading-6 relative z-10"
                variants={itemVariants}
              >
                {advantages[2].description}
              </motion.p>

              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary/0 hover:border-primary/30"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
