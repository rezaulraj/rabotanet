import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  CalendarDays,
  User,
  MapPin,
  ArrowLeft,
  Share2,
  Bookmark,
  Clock,
  TrendingUp,
  Users,
  Briefcase,
  GraduationCap,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Copy,
  Link as LinkIcon,
  MessageCircle,
} from "lucide-react";
import { Helmet } from "react-helmet";
import blogData from "../../assets/data/blog.json";

const ApplicationForm = ({ job, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    cv: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "cv" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    onSubmit(formData);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Apply for {job.job_category} Position
            </h3>
            <p className="text-gray-600 mt-1">
              {job.target_country} • {job.job_category}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db4f3c] focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db4f3c] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db4f3c] focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Position
              </label>
              <input
                type="text"
                value={job.job_category}
                disabled
                className="w-full px-4 py-3 border border-gray-300 bg-gray-100 rounded-lg text-gray-600 cursor-not-allowed"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cover Letter *
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db4f3c] focus:border-transparent"
              placeholder={`Tell us why you're interested in ${job.job_category} position in ${job.target_country}...`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload CV/Resume *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#db4f3c]">
              <input
                type="file"
                name="cv"
                onChange={handleChange}
                required
                accept=".pdf,.doc,.docx"
                className="hidden"
                id="cv-upload"
              />
              <label htmlFor="cv-upload" className="cursor-pointer">
                <svg
                  className="w-12 h-12 mx-auto text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="mt-2 text-sm text-gray-600">
                  <span className="font-medium text-[#db4f3c]">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  PDF, DOC, DOCX up to 10MB
                </p>
              </label>
            </div>
            {formData.cv && (
              <p className="mt-2 text-sm text-green-600">
                Selected: {formData.cv.name}
              </p>
            )}
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-[#db4f3c] text-white rounded-lg hover:bg-[#c94535] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ShareModal = ({ blog, isOpen, onClose, onShare }) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;
  const shareText = `${blog.title} - Check out this recruitment guide for ${blog.job_category} in ${blog.target_country}`;

  const socialPlatforms = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "bg-[#1877F2] hover:bg-[#166FE5]",
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}&quote=${encodeURIComponent(shareText)}`,
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "bg-[#1DA1F2] hover:bg-[#1A8CD8]",
      shareUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}&url=${encodeURIComponent(currentUrl)}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "bg-[#0A66C2] hover:bg-[#095BAC]",
      shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        currentUrl
      )}`,
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "bg-[#25D366] hover:bg-[#22C55E]",
      shareUrl: `https://wa.me/?text=${encodeURIComponent(
        shareText + " " + currentUrl
      )}`,
    },
    {
      name: "Email",
      icon: Mail,
      color: "bg-gray-600 hover:bg-gray-700",
      shareUrl: `mailto:?subject=${encodeURIComponent(
        blog.title
      )}&body=${encodeURIComponent(shareText + "\n\n" + currentUrl)}`,
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleSocialShare = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
    onShare && onShare();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full animate-in fade-in zoom-in-95">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Share This Guide
            </h3>
            <p className="text-gray-600 mt-1">Share with your network</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mb-4">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-900 text-sm truncate">
                {blog.title}
              </h4>
              <p className="text-gray-500 text-xs truncate">
                {blog.job_category} • {blog.target_country}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3 mb-6">
            {socialPlatforms.map((platform) => (
              <button
                key={platform.name}
                onClick={() => handleSocialShare(platform.shareUrl)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl ${platform.color} text-white transition-all hover:scale-105`}
                title={`Share on ${platform.name}`}
              >
                <platform.icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{platform.name}</span>
              </button>
            ))}
          </div>

          <div className="border-t pt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Or copy link directly
            </label>
            <div className="flex gap-2">
              <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                <LinkIcon className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={currentUrl}
                  readOnly
                  className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 truncate"
                />
              </div>
              <button
                onClick={handleCopyLink}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  copied
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : "bg-[#DB4F3C] text-white hover:bg-[#c53a28]"
                }`}
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500">
          Sharing helps spread valuable recruitment knowledge
        </div>
      </div>
    </div>
  );
};

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [similarBlogs, setSimilarBlogs] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const calculateSimilarityScore = (blogA, blogB) => {
    let score = 0;
    if (blogA.job_category === blogB.job_category) score += 3;
    if (blogA.target_country === blogB.target_country) score += 2;

    const relatedCategories = {
      Construction: [
        "Construction Labor",
        "Carpenter",
        "Mason Plasterer",
        "Plumber",
      ],
      Healthcare: ["Nurse", "Caregiver", "Beautician"],
      Hospitality: ["Chef", "Baker", "Waiter"],
      Technical: [
        "Electrician",
        "HVAC Technician",
        "Machine Operator",
        "Welder",
      ],
      Transport: ["Truck Driver"],
      Beauty: ["Nail Artist", "Beautician"],
    };

    Object.values(relatedCategories).forEach((categories) => {
      if (
        categories.includes(blogA.job_category) &&
        categories.includes(blogB.job_category)
      ) {
        score += 1;
      }
    });

    return score;
  };

  useEffect(() => {
    const foundBlog = blogData.find((b) => b.id === parseInt(id));
    setBlog(foundBlog);

    if (foundBlog) {
      const blogsWithScores = blogData
        .filter((b) => b.id !== foundBlog.id)
        .map((b) => ({
          ...b,
          similarityScore: calculateSimilarityScore(foundBlog, b),
        }))
        .filter((b) => b.similarityScore > 0)
        .sort((a, b) => b.similarityScore - a.similarityScore)
        .slice(0, 3);

      setSimilarBlogs(blogsWithScores);
    }
  }, [id]);

  const handleSubmitApplication = (formData) => {
    if (!blog) return;

    console.log("Application submitted:", {
      ...formData,
      job: blog.job_category,
      country: blog.target_country,
      blogId: blog.id,
      blogTitle: blog.title,
    });

    alert(
      `Thank you for applying for ${blog.job_category}! We'll contact you soon.`
    );
  };

  const handleSocialShare = (platform) => {
    console.log(`Shared on ${platform}`);
  };

  const generateSchema = () => {
    if (!blog) return null;

    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.seo_meta_description,
      image: blog.image,
      author: {
        "@type": "Person",
        name: "Recruitment Expert",
        jobTitle: "Senior Recruitment Specialist",
      },
      publisher: {
        "@type": "Organization",
        name: "Global Recruitment Agency",
      },
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": window.location.href,
      },
      keywords: blog.seo_keywords?.join(", "),
      articleSection: blog.job_category,
      articleBody: blog.full_description || blog.seo_meta_description,
      about: {
        "@type": "Thing",
        name: `${blog.job_category} Recruitment`,
      },
      locationCreated: {
        "@type": "Country",
        name: blog.target_country,
      },
    };
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#F4F4F2] flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-900 mb-4">
            Blog Not Found
          </div>
          <Link to="/blogs" className="text-[#DB4F3C] hover:underline">
            Return to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | Recruitment Guide</title>
        <meta name="description" content={blog.seo_meta_description} />
        <meta name="keywords" content={blog.seo_keywords?.join(", ")} />

        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.seo_meta_description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={blog.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.seo_meta_description} />
        <meta name="twitter:image" content={blog.image} />

        <script type="application/ld+json">
          {JSON.stringify(generateSchema())}
        </script>
      </Helmet>

      {showApplicationForm && (
        <ApplicationForm
          job={blog}
          onClose={() => setShowApplicationForm(false)}
          onSubmit={handleSubmitApplication}
        />
      )}

      <ShareModal
        blog={blog}
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        onShare={handleSocialShare}
      />

      <div className="min-h-screen bg-[#F4F4F2] py-22">
        <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link
              to="/blogs"
              className="flex items-center gap-2 text-gray-700 hover:text-[#DB4F3C]"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blogs</span>
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  setIsBookmarked(!isBookmarked);
                  localStorage.setItem(`bookmarked_${blog.id}`, !isBookmarked);
                }}
                className={`p-2 rounded-full transition-all ${
                  isBookmarked
                    ? "bg-[#DB4F3C]/10 text-[#DB4F3C] animate-pulse"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                title={isBookmarked ? "Remove bookmark" : "Bookmark this guide"}
              >
                <Bookmark
                  className="w-5 h-5"
                  fill={isBookmarked ? "#DB4F3C" : "none"}
                />
              </button>

              <button
                onClick={() => setShowShareModal(true)}
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#DB4F3C] transition-all group"
                title="Share this guide"
              >
                <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-[#DB4F3C] text-white font-semibold rounded-full">
                {blog.job_category}
              </span>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{blog.target_country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  <span>Published Today</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {blog.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-4xl">
              {blog.seo_meta_description}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#DB4F3C] to-orange-500 flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  Recruitment Expert
                </div>
                <div className="text-gray-600">
                  Senior Recruitment Specialist
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src={blog.image}
                    alt={`${blog.job_category} recruitment guide`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/800x400?text=Recruitment+Guide";
                    }}
                  />
                </div>
                <div className="prose prose-lg max-w-none">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Overview
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {blog.full_description || blog.seo_meta_description}
                    </p>
                  </div>

                  {blog.statistics_to_include &&
                    blog.statistics_to_include.length > 0 && (
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                          Key Statistics
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {blog.statistics_to_include.map((stat, index) => (
                            <div
                              key={index}
                              className="bg-[#F4F4F2] rounded-xl p-4"
                            >
                              <div className="flex items-center gap-3">
                                <TrendingUp className="w-5 h-5 text-[#DB4F3C]" />
                                <span className="text-gray-700">{stat}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {blog.content_structure &&
                    blog.content_structure.length > 0 && (
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                          Recruitment Strategy Outline
                        </h2>
                        <div className="space-y-6">
                          {blog.content_structure.map((section, index) => (
                            <div
                              key={index}
                              className="border-l-4 border-[#DB4F3C] pl-4"
                            >
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {section.section}
                              </h3>
                              <ul className="space-y-2">
                                {section.subsections.map(
                                  (subsection, subIndex) => (
                                    <li
                                      key={subIndex}
                                      className="flex items-start gap-2 text-gray-700"
                                    >
                                      <CheckCircle className="w-5 h-5 text-[#DB4F3C] mt-0.5 flex-shrink-0" />
                                      <span>{subsection}</span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Key Recruitment Insights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-[#DB4F3C] text-white rounded-xl p-6">
                        <Users className="w-8 h-8 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Talent Pool</h3>
                        <p>
                          Access to highly skilled professionals with verified
                          certifications
                        </p>
                      </div>
                      <div className="bg-white border-2 border-[#DB4F3C] rounded-xl p-6">
                        <GraduationCap className="w-8 h-8 mb-4 text-[#DB4F3C]" />
                        <h3 className="font-bold text-lg mb-2">
                          Training Standards
                        </h3>
                        <p>
                          Rigorous education system ensuring quality and
                          compliance
                        </p>
                      </div>
                      <div className="bg-white border-2 border-[#DB4F3C] rounded-xl p-6">
                        <Briefcase className="w-8 h-8 mb-4 text-[#DB4F3C]" />
                        <h3 className="font-bold text-lg mb-2">
                          Market Experience
                        </h3>
                        <p>
                          Practical experience in competitive European markets
                        </p>
                      </div>
                      <div className="bg-[#DB4F3C] text-white rounded-xl p-6">
                        <TrendingUp className="w-8 h-8 mb-4" />
                        <h3 className="font-bold text-lg mb-2">
                          Growth Potential
                        </h3>
                        <p>
                          Strong career progression and skill development
                          opportunities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="apply" className="mt-12 pt-8 border-t">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Interested in {blog.job_category} Opportunities in{" "}
                      {blog.target_country}?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                      Apply now to connect with top employers and recruitment
                      agencies seeking skilled professionals like you.
                    </p>
                    <button
                      onClick={() => setShowApplicationForm(true)}
                      className="px-10 py-4 bg-[#DB4F3C] text-white font-bold text-lg rounded-full hover:bg-[#c53a28] shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                    >
                      Apply Now for {blog.job_category} Positions
                    </button>
                  </div>
                </div>
              </article>
            </div>

            <div className="space-y-8">
              <div className="hidden md:block sticky top-16 bg-white rounded-2xl shadow-lg p-6 border-2 border-[#DB4F3C]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quick Apply
                </h3>
                <p className="text-gray-600 mb-4">
                  Ready to start your application?
                </p>
                <button
                  onClick={() => setShowApplicationForm(true)}
                  className="w-full px-6 py-3 bg-[#DB4F3C] text-white font-semibold rounded-lg hover:bg-[#c53a28]"
                >
                  Apply Now
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Similar Recruitment Guides
                </h3>
                {similarBlogs.length > 0 ? (
                  <div className="space-y-4">
                    {similarBlogs.map((similarBlog) => (
                      <Link
                        to={`/blog/${similarBlog.id}`}
                        key={similarBlog.id}
                        className="group block hover:no-underline"
                      >
                        <div className="flex gap-4 p-3 rounded-lg border border-gray-200 hover:border-[#DB4F3C] hover:shadow-md transition-all">
                          <div className="flex-shrink-0">
                            <img
                              src={similarBlog.image}
                              alt={similarBlog.title}
                              className="w-16 h-16 rounded-lg object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  "https://via.placeholder.com/64?text=Guide";
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="px-2 py-1 bg-[#DB4F3C]/10 text-[#DB4F3C] text-xs font-semibold rounded">
                                {similarBlog.job_category}
                              </span>
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                                {similarBlog.target_country}
                              </span>
                            </div>
                            <h4 className="font-semibold text-gray-900 group-hover:text-[#DB4F3C] text-sm line-clamp-2">
                              {similarBlog.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <svg
                      className="w-12 h-12 text-gray-300 mx-auto mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    <p className="text-gray-500">No similar guides found</p>
                  </div>
                )}
              </div>

              <div className="bg-[#DB4F3C] text-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span>Avg. Salary</span>
                    <span className="font-bold">€1,400+</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span>Recruitment Time</span>
                    <span className="font-bold">4-8 weeks</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span>Success Rate</span>
                    <span className="font-bold">92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Certification Rate</span>
                    <span className="font-bold">88%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Stay Updated
                </h3>
                <p className="text-gray-600 mb-4">
                  Get the latest recruitment insights.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#DB4F3C]"
                  />
                  <button className="w-full px-4 py-3 bg-[#DB4F3C] text-white font-semibold rounded-lg hover:bg-[#c53a28]">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
