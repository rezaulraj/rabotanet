import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MissionAndVission = () => {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 60,
      opacity: 0,
      rotateX: -15,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      rotateY: -20,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const glowVariants = {
    pulse: {
      boxShadow: [
        "0 0 20px rgba(59, 130, 246, 0.1)",
        "0 0 40px rgba(59, 130, 246, 0.2)",
        "0 0 20px rgba(59, 130, 246, 0.1)",
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const missionImage =
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";
  const visionImage =
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="min-h-screen relative overflow-hidden py-20 px-4 bg-primary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-300 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="text-center mb-20" variants={cardVariants}>
          <motion.div
            className="inline-block mb-6"
            variants={floatingVariants}
            animate="float"
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t("about.missionvission.heading1")}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-gray-950">
              {t("about.missionvission.heading2")}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t("about.missionvission.para")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            className="relative order-1 lg:order-1"
            variants={imageVariants}
          >
            <motion.div
              className="absolute -inset-4 bg-linear-to-r from-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-30"
              variants={glowVariants}
              animate="pulse"
            ></motion.div>
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm"
              whileHover={{
                scale: 1.02,
                rotateY: 5,
              }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={missionImage}
                alt="Connecting exceptional talent with extraordinary opportunities"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-sm font-semibold opacity-80">
                  Mission Visualized
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl"
              variants={floatingVariants}
              animate="float"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
          </motion.div>

          <motion.div className="order-2 lg:order-2" variants={cardVariants}>
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-8">
                <motion.div
                  className="w-16 h-16 bg-linear-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </motion.div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">
                    {t("about.missionvission.missionh")}
                  </h2>
                  <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                </div>
              </div>

              <p className="text-lg text-white/90 leading-relaxed mb-8">
                {t("about.missionvission.missionpara")}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  t("about.missionvission.missionstat1"),
                  t("about.missionvission.missionstat2"),
                  t("about.missionvission.missionstat3"),
                  t("about.missionvission.missionstat4"),
                ].map((item) => (
                  <motion.div
                    key={item}
                    className="flex items-center text-white/80"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="font-semibold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div className="order-2 lg:order-1" variants={cardVariants}>
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-8">
                <motion.div
                  className="w-16 h-16 bg-linear-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: -5,
                  }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </motion.div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">
                    {t("about.missionvission.vissionh")}
                  </h2>
                  <div className="w-20 h-1 bg-linear-to-r from-purple-400 to-pink-400 rounded-full"></div>
                </div>
              </div>

              <p className="text-lg text-white/90 leading-relaxed mb-8">
                {t("about.missionvission.vissionpara")}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  t("about.missionvission.vissionstat1"),
                  t("about.missionvission.vissionstat2"),
                  t("about.missionvission.vissionstat3"),
                  t("about.missionvission.vissionstat4"),
                ].map((item) => (
                  <motion.div
                    key={item}
                    className="flex items-center text-white/80"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                    <span className="font-semibold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2"
            variants={imageVariants}
          >
            <motion.div
              className="absolute -inset-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30"
              variants={glowVariants}
              animate="pulse"
            ></motion.div>
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm"
              whileHover={{
                scale: 1.02,
                rotateY: -5,
              }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={visionImage}
                alt="Global recruitment partnership vision"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-sm font-semibold opacity-80">
                  Visionary Future
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center shadow-2xl"
              variants={floatingVariants}
              animate="float"
            >
              <span className="text-2xl">🌍</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="text-center mt-20" variants={cardVariants}>
          <motion.a
            href="/career"
            className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-md rounded-2xl text-white font-bold text-lg border border-white/30 shadow-2xl"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.3)",
            }}
          >
            <span>{t("about.missionvission.btn")}</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                className="w-5 h-5 ml-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MissionAndVission;
