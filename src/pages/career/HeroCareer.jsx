import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaUpload, FaCheck, FaSpinner } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const HeroCareer = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    cv: null,
  });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxSize = 5 * 1024 * 1024;

      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a PDF or DOC file");
        return;
      }

      if (file.size > maxSize) {
        alert("File size must be less than 5MB");
        return;
      }

      setFormData((prev) => ({
        ...prev,
        cv: file,
      }));
      simulateUpload(file);
    }
  };

  const simulateUpload = (file) => {
    setIsUploading(true);
    setUploadComplete(false);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      cv: null,
    });
    setUploadProgress(0);
    setUploadComplete(false);
    setIsModalOpen(false);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      cv: null,
    });
    setUploadProgress(0);
    setUploadComplete(false);
    setIsUploading(false);
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const seoTitle = "Career Opportunities & Job Openings | Apply Now";
  const seoDescription =
    "Join our team or find your next career opportunity. Upload your CV and explore job openings with our recruitment agency. We're hiring across multiple industries.";
  const seoKeywords =
    "career opportunities, job openings, apply for jobs, upload CV, career form, employment application, job vacancies";
  const canonicalUrl = "https://rabotanet.com/career";
  const pageH1 = t("career.careerh1") || "Build Your Career With Us";
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
          content="https://rabotanet.com/images/career.jpg"
        />
        <meta
          property="og:image:alt"
          content="Career Opportunities - RabotaNet Recruitment"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta
          name="twitter:image"
          content="https://rabotanet.com/images/career.jpg"
        />

        <link rel="canonical" href={canonicalUrl} />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Career Opportunities",
              "description": "${seoDescription}",
              "url": "${canonicalUrl}",
              "breadcrumb": {
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
                    "name": "Careers",
                    "item": "${canonicalUrl}"
                  }
                ]
              },
              "mainEntity": {
                "@type": "ItemList",
                "name": "Job Openings",
                "description": "Current career opportunities available",
                "numberOfItems": 15,
                "itemListOrder": "https://schema.org/ItemListOrderDescending"
              }
            }
          `}
        </script>

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Job Application Form",
              "url": "${canonicalUrl}",
              "applicationCategory": "JobApplication",
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
              "operatingSystem": "Any",
              "description": "Online job application form for submitting resumes and applying for positions",
              "featureList": [
                "File Upload",
                "Form Validation",
                "Progress Tracking"
              ]
            }
          `}
        </script>
      </Helmet>

      <section className="relative bg-primary text-white py-30">
        <div className="relative container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="text-lg uppercase font-semibold tracking-widest text-gray-900">
              {t("career.careertoph")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
              {t("career.careerh1")}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl">
              {t("career.careerpara")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => {
                  const section = document.querySelector("#jobs");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-gray-900 hover:bg-gray-800 text-gray-100 font-semibold px-6 py-3 rounded-full transition duration-300 cursor-pointer"
              >
                {t("career.careerbtn1")}
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-full transition duration-300 cursor-pointer"
              >
                {t("career.careerbtn2")}
              </button>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-lg">
            <img
              src="/images/career.jpg"
              alt="Career Illustration"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("careerform.heading")}
                </h2>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    resetForm();
                  }}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("careerform.name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("careerform.email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("careerform.phone")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("careerform.subject")}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="e.g., Welder, Constraction Worker"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("careerform.message")}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about yourself and why you're interested in this position..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("careerform.cv")}
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-all hover:border-primary">
                    <input
                      type="file"
                      id="cv-upload"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="cv-upload" className="cursor-pointer">
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <FaUpload className="text-3xl text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-600">
                            <span className="text-primary font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            PDF, DOC, DOCX (Max. 5MB)
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>

                  {formData.cv && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 space-y-2"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-gray-700">
                          {formData.cv.name}
                        </span>
                        {uploadComplete ? (
                          <FaCheck className="text-green-500" />
                        ) : isUploading ? (
                          <FaSpinner className="text-primary animate-spin" />
                        ) : null}
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          initial={{ width: 0 }}
                          animate={{ width: `${uploadProgress}%` }}
                        />
                      </div>

                      <div className="flex justify-between text-xs text-gray-500">
                        <span>
                          {uploadComplete ? "Upload Complete" : "Uploading..."}
                        </span>
                        <span>{uploadProgress}%</span>
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      resetForm();
                    }}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {t("careerform.cancel")}
                  </button>
                  <button
                    type="submit"
                    disabled={
                      !formData.cv ||
                      isUploading ||
                      !formData.name ||
                      !formData.email ||
                      !formData.phone ||
                      !formData.subject
                    }
                    className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {t("careerform.submit")}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroCareer;
