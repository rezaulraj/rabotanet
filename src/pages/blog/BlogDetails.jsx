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
} from "lucide-react";
import blogData from "../../assets/data/blog.json";
import { Helmet } from "react-helmet";

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
    if (name === "cv") {
      setFormData((prev) => ({ ...prev, cv: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
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
      <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all">
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
            className="text-gray-500 hover:text-gray-700 transition-colors p-2"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db4f3c] focus:border-transparent transition-all"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db4f3c] focus:border-transparent transition-all"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db4f3c] focus:border-transparent transition-all"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#db4f3c] focus:border-transparent transition-all"
              placeholder={`Tell us why you're interested in ${job.job_category} position in ${job.target_country}...`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload CV/Resume *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-colors hover:border-[#db4f3c]">
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
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-[#db4f3c] text-white rounded-lg hover:bg-[#c94535] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
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
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
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

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [similarBlogs, setSimilarBlogs] = useState([]);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  useEffect(() => {
    const foundBlog = blogData.find((b) => b.id === parseInt(id));
    setBlog(foundBlog);

    if (foundBlog) {
      const similar = blogData
        .filter(
          (b) =>
            b.id !== foundBlog.id && b.job_category === foundBlog.job_category
        )
        .slice(0, 3);
      setSimilarBlogs(similar);
    }
  }, [id]);

  const handleShare = () => {
    setShowShareOptions(!showShareOptions);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
    setShowShareOptions(false);
  };

  const shareOnTwitter = () => {
    if (!blog) return;
    const text = encodeURIComponent(`Check out this article: ${blog.title}`);
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };

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
      `Thank you for your application for ${blog.job_category} position! We'll contact you soon.`
    );
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

        <meta name="article:section" content={blog.job_category} />
        <meta name="article:tag" content={blog.job_category} />
        <meta name="article:tag" content={blog.target_country} />
        <meta
          name="article:published_time"
          content={new Date().toISOString()}
        />
        <meta name="article:author" content="Recruitment Expert" />

        <link rel="canonical" href={window.location.href} />

        <script type="application/ld+json">
          {JSON.stringify({
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
              name: "Your Recruitment Agency",
              logo: {
                "@type": "ImageObject",
                url: "https://yourdomain.com/logo.png",
              },
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
            timeRequired: "PT8M",
            educationalLevel: "Beginner",
            about: {
              "@type": "Thing",
              name: `${blog.job_category} Recruitment`,
            },
            locationCreated: {
              "@type": "Country",
              name: blog.target_country,
            },
            potentialAction: {
              "@type": "ApplyAction",
              target: window.location.href + "#apply",
              name: "Apply Now",
            },
          })}
        </script>
      </Helmet>

      {showApplicationForm && (
        <ApplicationForm
          job={blog}
          onClose={() => setShowApplicationForm(false)}
          onSubmit={handleSubmitApplication}
        />
      )}

      <div className="min-h-screen bg-[#F4F4F2] py-22">
        <div className="sticky z-30 bg-white/90 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link
              to="/blogs"
              className="flex items-center gap-2 text-gray-700 hover:text-[#DB4F3C] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blogs</span>
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full ${
                  isBookmarked
                    ? "bg-[#DB4F3C]/10 text-[#DB4F3C]"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Bookmark
                  className="w-5 h-5"
                  fill={isBookmarked ? "#DB4F3C" : "none"}
                />
              </button>
              <div className="relative">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                {showShareOptions && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border py-2 z-50">
                    <button
                      onClick={copyToClipboard}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700"
                    >
                      Copy Link
                    </button>
                    <button
                      onClick={shareOnTwitter}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700"
                    >
                      Share on Twitter
                    </button>
                  </div>
                )}
              </div>
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
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src={blog.image}
                    alt={`${blog.job_category} recruitment guide for ${blog.target_country}`}
                    className="w-full h-full object-cover"
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

                  {blog.statistics_to_include && (
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

                  {blog.content_structure && (
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
                      className="px-10 py-4 bg-[#DB4F3C] text-white font-bold text-lg rounded-full hover:bg-[#c53a28] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
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
                  Ready to start your application? Click below to begin.
                </p>
                <button
                  onClick={() => setShowApplicationForm(true)}
                  className="w-full px-6 py-3 bg-[#DB4F3C] text-white font-semibold rounded-lg hover:bg-[#c53a28] transition-colors"
                >
                  Apply Now
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Similar Articles
                </h3>
                <div className="space-y-6">
                  {similarBlogs.map((similarBlog) => (
                    <Link
                      to={`/blog/${similarBlog.id}`}
                      key={similarBlog.id}
                      className="group block"
                    >
                      <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#F4F4F2] transition-colors">
                        <img
                          src={similarBlog.image}
                          alt={similarBlog.job_category}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                          loading="lazy"
                        />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-1 bg-[#DB4F3C]/10 text-[#DB4F3C] text-xs font-semibold rounded">
                              {similarBlog.job_category}
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-[#DB4F3C] transition-colors line-clamp-2">
                            {similarBlog.title.split(":")[0]}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
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
                  Get the latest recruitment insights and job market updates.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#DB4F3C]"
                  />
                  <button className="w-full px-4 py-3 bg-[#DB4F3C] text-white font-semibold rounded-lg hover:bg-[#c53a28] transition-colors">
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
