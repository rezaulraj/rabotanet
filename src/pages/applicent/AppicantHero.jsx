import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export default function AppicantHero() {
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


  const seoTitle = "Job Seekers & Career Opportunities | Find Your Dream Job";
  const seoDescription =
    "Get career coaching, personality assessments, and job placement assistance. Our recruitment agency helps job seekers find the perfect role with expert guidance.";
  const seoKeywords =
    "job seekers, career opportunities, find jobs, employment assistance, career coaching, personality assessment, job placement, career guidance";
  const canonicalUrl = "https://rabotanet.com/applicants";

  const pageTitle =
    t("applicant.heroApplicant.heroHeading") ||
    "Career Services for Job Seekers";
  const pageDescription =
    "Professional career services including consultations and personality assessments to help you find the right job.";
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
          content="https://rabotanet.com/images/find4.png"
        />
        <meta
          property="og:image:alt"
          content="Career Services for Job Seekers - RabotaNet Recruitment"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta
          name="twitter:image"
          content="https://rabotanet.com/images/find4.png"
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://rabotanet.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Job Seekers",
                  "item": "${canonicalUrl}"
                }
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Career Services for Job Seekers",
              "description": "${seoDescription}",
              "provider": {
                "@type": "EmploymentAgency",
                "name": "RabotaNet",
                "url": "https://rabotanet.com"
              },
              "serviceType": [
                "Career Counseling",
                "Personality Assessment",
                "Job Placement",
                "Resume Review",
                "Interview Coaching"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Multiple Countries"
              },
              "offers": {
                "@type": "Offer",
                "category": "Career Services"
              }
            }
          `}
        </script>
      </Helmet>
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
              {t("applicant.heroApplicant.heroTopHeading")}
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mt-4"
              variants={itemVariants}
            >
              {t("applicant.heroApplicant.heroHeading")}
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
                  {t("applicant.heroApplicant.heroSubHeading1")}
                </h2>
                <p className="text-white text-[15px] font-normal font-sans leading-6">
                  {t("applicant.heroApplicant.heroSubPara1")}
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
                  {t("applicant.heroApplicant.heroSubHeading2")}
                </h2>
                <p className="text-white text-[15px] font-normal font-sans leading-6">
                  {t("applicant.heroApplicant.heroSubPara2")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
