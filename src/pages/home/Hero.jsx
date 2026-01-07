import React, { useState, useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export default function Hero() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prevScale) => (prevScale === 1 ? 1.1 : 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const playButtonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.9 },
  };

  const arrowVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const seoTitle =
    "RabotaNet | Leading Recruitment Agency & Job Placement Services";
  const seoDescription =
    "Find top talent or your dream job with RabotaNet - your trusted recruitment partner. We connect employers with qualified candidates across industries.";
  const seoKeywords =
    "recruitment agency, job placement, find employees, hire talent, staffing solutions, career opportunities, employment agency, recuritment agent Russia, recuritment agent Kazakhstan, recuritment agent Belarus, recuritment agent Kazakhstan, recuritment agent Tajikistan, recuritment agent Georgia,recuritment agent Armenia, recuritment agent Azerbaijan, recuritment agent Moldova, recuritment agent Turkmenistan, recuritment agent Uzbekistan";
  const canonicalUrl = "https://rabotanet.com";
  const siteName = "RabotaNet Recruitment Agency";

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="RabotaNet" />
        <meta name="copyright" content="RabotaNet" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content="https://rabotanet.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="RabotaNet Recruitment Agency - Connecting Talent with Opportunities"
        />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RabotaNet" />
        <meta name="twitter:creator" content="@RabotaNet" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="https://rabotanet.com/logo.png" />
        <meta
          name="twitter:image:alt"
          content="RabotaNet Recruitment Services"
        />

        <link rel="canonical" href={canonicalUrl} />
        <meta name="language" content="English" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="revisit-after" content="7 days" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EmploymentAgency",
              "@id": "${canonicalUrl}#organization",
              "name": "RabotaNet",
              "description": "${seoDescription}",
              "url": "${canonicalUrl}",
              "logo": "https://rabotanet.com/logo.png",
              "foundingDate": "2010",
              "sameAs": [
                "https://www.facebook.com/RabotaNet00",
                "https://www.instagram.com/rabotanet01"
                "http://www.youtube.com/@RabotaNet01"
                "https://x.com/RabotaNet01"
                "https://www.tiktok.com/@rabotanet1"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "manager@rabotanet.com",
                "contactType": "customer service",
                "availableLanguage": ["English", "Russian", "Georgian", "Armenian", "Azerbaijani", "Romanian", "Turkmen", "Uzbek"]
              },
              "areaServed": {
                "@type": "Country",
                "name": "Multiple Countries"
              },
              "serviceType": [
                "Permanent Recruitment",
                "Temporary Staffing",
                "Executive Search",
                "Contract Staffing",
                "Workforce Solutions"
              ]
            }
          `}
        </script>
      </Helmet>

      <section className="relative h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ scale }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img
            src="/images/banner.png"
            alt="Hero"
            className="object-cover opacity-60 w-full h-full"
          />
        </motion.div>

        <div className="container mx-auto relative z-10 h-full flex justify-between w-full px-4 py-30">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="col-span-1 w-full">
              <motion.span
                className="text-[17px] text-primary font-normal font-sans block tracking-wider"
                variants={itemVariants}
              >
                {t("homepage.hero.heroTopTitle")}
              </motion.span>

              <motion.h2
                className="text-[52px] font-bold font-sans mt-4 text-secondary leading-16"
                variants={itemVariants}
              >
                {t("homepage.hero.heroBigTitle")}
              </motion.h2>

              <motion.p
                className="text-[14px] text-secondary text-normal font-sans mt-4"
                variants={itemVariants}
              >
                {t("homepage.hero.heropara1")}
                <strong className="text-primary">
                  {t("homepage.hero.heropara2")}
                </strong>{" "}
                {t("homepage.hero.heropara3")}
              </motion.p>

              <motion.a
                href="#brand"
                className="text-primary block font-semibold font-sans mt-4"
                variants={arrowVariants}
                animate="animate"
              >
                <IoArrowDownCircleOutline className="text-6xl" />
              </motion.a>
            </div>

            <motion.div
              className="col-span-1 flex justify-center"
              variants={itemVariants}
            >
              <motion.button
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
                variants={playButtonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <FaPlayCircle className="text-6xl text-primary" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-black rounded-2xl overflow-hidden w-full max-w-6xl relative shadow-2xl"
              initial={{
                scale: 0.8,
                opacity: 0,
                y: 50,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
                y: 50,
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
            >
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 text-white text-3xl z-10 bg-white/20 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255,255,255,0.3)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              <div className="aspect-video">
                <video
                  width="100%"
                  height="100%"
                  controls
                  autoPlay
                  className="rounded-lg"
                  src="https://res.cloudinary.com/dtw7qhd69/video/upload/v1757318262/rabota_website_video_o9rfri.mp4"
                />
              </div>
            </motion.div>

            <div
              className="absolute inset-0 -z-10"
              onClick={() => setIsOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
