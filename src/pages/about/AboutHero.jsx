import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export default function AboutHero() {
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

  const seoTitle = "About RabotaNet | Trusted Recruitment Agency Since 2010";
  const seoDescription =
    "Learn about RabotaNet - a leading recruitment agency with expertise in connecting employers with top talent. Discover our mission, values, and industry experience.";
  const seoKeywords =
    "about RabotaNet, recruitment agency about us, staffing company history, talent acquisition specialists, employment agency background";
  const canonicalUrl = "https://rabotanet.com/about";
  const foundingDate = "2010";
  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta
          property="og:image"
          content="https://rabotanet.com/images/bannerb.png"
        />
        <meta
          property="og:image:alt"
          content="About RabotaNet Recruitment Agency"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta
          name="twitter:image"
          content="https://rabotanet.com/images/bannerb.png"
        />

        <link rel="canonical" href={canonicalUrl} />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About RabotaNet",
              "description": "${seoDescription}",
              "url": "${canonicalUrl}",
              "publisher": {
                "@type": "EmploymentAgency",
                "@id": "https://rabotanet.com#organization",
                "name": "RabotaNet",
                "description": "Leading recruitment and staffing agency",
                "url": "https://rabotanet.com",
                "logo": "https://rabotanet.com/logo.png",
                "foundingDate": "${foundingDate}",
                "foundingLocation": {
                  "@type": "Place",
                  "name": "City, Country"
                },
                "numberOfEmployees": {
                  "@type": "QuantitativeValue",
                  "value": "50+"
                },
                "knowsAbout": [
                  "Recruitment",
                  "Talent Acquisition",
                  "Executive Search",
                  "Staffing Solutions",
                  "Human Resources"
                ],
                "awards": [
                  "Best Recruitment Agency 2023",
                  "Top Staffing Firm Award"
                ]
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${canonicalUrl}"
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://rabotanet.com#organization",
              "name": "RabotaNet",
              "alternateName": "RabotaNet Recruitment Agency",
              "url": "https://rabotanet.com",
              "logo": "https://rabotanet.com/logo.png",
              "description": "${seoDescription}",
              "foundingDate": "${foundingDate}",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Founder Name"
                }
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Multiple Countries"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "manager@rabotanet.com",
                "contactType": "customer service",
                "availableLanguage": ["English", "Russian", "Georgian", "Armenian", "Azerbaijani", "Romanian", "Turkmen", "Uzbek"]
              },
              "sameAs": [
                "https://www.facebook.com/RabotaNet00",
                "https://www.instagram.com/rabotanet01"
                "http://www.youtube.com/@RabotaNet01"
                "https://x.com/RabotaNet01"
                "https://www.tiktok.com/@rabotanet1"
              ]
            }
          `}
        </script>
      </Helmet>

      <motion.section
        className="py-36 bg-[#F4F4F2] overflow-hidden relative"
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

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div className="flex flex-col" variants={containerVariants}>
              <motion.span
                className="text-[16px] font-sans font-bold text-primary mb-4"
                variants={itemVariants}
              >
                {t("about.heroAbout.heroTopHeading")}
              </motion.span>

              <motion.h1
                className="text-[48px] text-secondary font-sans leading-tight"
                variants={itemVariants}
              >
                {t("about.heroAbout.heroHeading")}
              </motion.h1>

              <motion.p
                className="text-[16px] font-sans text-[#192c33] mt-6 leading-7"
                variants={itemVariants}
              >
                <strong className="text-primary">RabotaNet </strong>{" "}
                {t("about.heroAbout.heroPara2")}
              </motion.p>

              <motion.p
                className="text-[16px] font-sans text-[#192c33] mt-6 leading-7"
                variants={itemVariants}
              >
                {t("about.heroAbout.heroPara3")}
              </motion.p>

              <motion.p
                className="text-[16px] font-sans text-[#192c33] mt-6 leading-7"
                variants={itemVariants}
              >
                {t("about.heroAbout.heroPara4")}
              </motion.p>

              <motion.p
                className="text-[16px] font-sans text-[#192c33] mt-6 leading-7"
                variants={itemVariants}
              >
                {t("about.heroAbout.heroPara5")}
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
                    src="/logo.png"
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
    </>
  );
}
