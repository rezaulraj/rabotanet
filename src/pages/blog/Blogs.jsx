import React, { useState } from "react";

import { Link } from "react-router-dom";
import { CalendarDays, User, ArrowRight, MapPin } from "lucide-react";
import blogData from "../../assets/data/blog.json";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prev) => prev + 6);
  };

  const blogPairs = [];
  for (let i = 0; i < visibleBlogs; i += 2) {
    if (i + 1 < blogData.length) {
      blogPairs.push([blogData[i], blogData[i + 1]]);
    } else {
      blogPairs.push([blogData[i]]);
    }
  }

  const getCardColor = (index) => {
    return index % 2 === 0 ? "bg-white" : "bg-[#DB4F3C]";
  };

  const getTextColor = (index) => {
    return index % 2 === 0 ? "text-gray-800" : "text-white";
  };

  const allKeywords = blogData.reduce((keywords, blog) => {
    return [
      ...keywords,
      ...(blog.seo_keywords || []),
      blog.job_category,
      blog.target_country,
    ];
  }, []);

  const uniqueKeywords = [...new Set(allKeywords)].slice(0, 20);

  return (
    <>
      <Helmet>
        <title>Recruitment Insights & Job Guides</title>
        <meta
          name="description"
          content="Expert recruitment guides and insights for hiring skilled professionals across Europe. Discover best practices, salary benchmarks, and recruitment strategies for construction, healthcare, IT, and more."
        />
        <meta name="keywords" content={uniqueKeywords.join(", ")} />
        <meta property="og:title" content="Recruitment Insights & Job Guides" />
        <meta
          property="og:description"
          content="Expert recruitment guides and insights for hiring skilled professionals across Europe."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Recruitment Insights & Job Guides"
        />
        <meta
          name="twitter:description"
          content="Expert recruitment guides and insights for hiring skilled professionals across Europe."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Recruitment Insights & Job Guides",
            description:
              "Expert recruitment guides and insights for hiring skilled professionals across Europe.",
            url: window.location.href,
            publisher: {
              "@type": "Organization",
              name: "Your Recruitment Agency",
              logo: {
                "@type": "ImageObject",
                url: "https://yourdomain.com/logo.png",
              },
            },
            blogPost: blogData.slice(0, 6).map((blog) => ({
              "@type": "BlogPosting",
              headline: blog.title,
              description: blog.seo_meta_description,
              author: {
                "@type": "Person",
                name: "Recruitment Expert",
              },
              datePublished: new Date().toISOString().split("T")[0],
              keywords: blog.seo_keywords?.join(", "),
              articleSection: blog.job_category,
            })),
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#F4F4F2] py-22 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recruitment Insights & Job Guides
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert guides and insights on recruiting skilled professionals
            across Europe. Discover best practices, salary benchmarks, and
            recruitment strategies.
          </p>
        </div>

        <div className="container mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.slice(0, 6).map((blog, index) => (
              <Link
                to={`/blog/${blog.id}`}
                key={blog.id}
                className="group cursor-pointer"
              >
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={`${blog.job_category} recruitment in ${blog.target_country}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-[#DB4F3C] text-white text-sm font-semibold rounded-full">
                        {blog.job_category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{blog.target_country}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <CalendarDays className="w-4 h-4" />
                        <span>5 min read</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#DB4F3C] transition-colors line-clamp-2">
                      {blog.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.seo_meta_description}
                    </p>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <User className="w-4 h-4 text-gray-600" />
                        </div>
                        <span className="text-sm text-gray-600">
                          Recruitment Expert
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[#DB4F3C] font-semibold group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        <div className="container mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Recruitment Guides
          </h2>

          <div className="space-y-8">
            {blogPairs.map((pair, pairIndex) => (
              <div
                key={pairIndex}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {pair.map((blog, blogIndex) => (
                  <Link
                    to={`/blog/${blog.id}`}
                    key={blog.id}
                    className="group cursor-pointer"
                  >
                    <article
                      className={`${getCardColor(
                        blogIndex
                      )} rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full`}
                    >
                      <div className="flex flex-col lg:flex-row h-full">
                        <div className="lg:w-2/5 relative overflow-hidden">
                          <img
                            src={blog.image}
                            alt={`Recruiting ${blog.job_category} in ${blog.target_country}`}
                            className="w-full h-48 lg:h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute top-4 left-4 z-20">
                            <span
                              className={`px-3 py-1 ${
                                blogIndex % 2 === 0
                                  ? "bg-[#DB4F3C] text-white"
                                  : "bg-white text-[#DB4F3C]"
                              } text-sm font-semibold rounded-full`}
                            >
                              {blog.job_category}
                            </span>
                          </div>
                        </div>

                        <div className="lg:w-3/5 p-6">
                          <div className="flex items-center gap-4 mb-3">
                            <div
                              className={`flex items-center gap-1 text-sm ${getTextColor(
                                blogIndex
                              )}/80`}
                            >
                              <MapPin className="w-4 h-4" />
                              <span>{blog.target_country}</span>
                            </div>
                            <div
                              className={`flex items-center gap-1 text-sm ${getTextColor(
                                blogIndex
                              )}/80`}
                            >
                              <CalendarDays className="w-4 h-4" />
                              <span>5 min read</span>
                            </div>
                          </div>

                          <h2
                            className={`text-xl font-bold mb-3 group-hover:text-${
                              blogIndex % 2 === 0 ? "[#DB4F3C]" : "white/90"
                            } transition-colors line-clamp-2 ${getTextColor(
                              blogIndex
                            )}`}
                          >
                            {blog.title}
                          </h2>

                          <p
                            className={`mb-4 line-clamp-3 ${
                              blogIndex % 2 === 0
                                ? "text-gray-600"
                                : "text-white/90"
                            }`}
                          >
                            {blog.seo_meta_description}
                          </p>

                          <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-8 h-8 rounded-full ${
                                  blogIndex % 2 === 0
                                    ? "bg-gray-100"
                                    : "bg-white/20"
                                } flex items-center justify-center`}
                              >
                                <User
                                  className={`w-4 h-4 ${
                                    blogIndex % 2 === 0
                                      ? "text-gray-600"
                                      : "text-white"
                                  }`}
                                />
                              </div>
                              <span
                                className={`text-sm ${
                                  blogIndex % 2 === 0
                                    ? "text-gray-600"
                                    : "text-white/90"
                                }`}
                              >
                                Recruitment Expert
                              </span>
                            </div>
                            <div
                              className={`flex items-center gap-2 font-semibold group-hover:gap-3 transition-all ${
                                blogIndex % 2 === 0
                                  ? "text-[#DB4F3C]"
                                  : "text-white"
                              }`}
                            >
                              Read More
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {visibleBlogs < blogData.length && (
          <div className="text-center">
            <button
              onClick={loadMoreBlogs}
              className="px-8 py-3 bg-[#DB4F3C] text-white font-semibold rounded-full hover:bg-[#c53a28] transition-colors shadow-lg hover:shadow-xl"
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;
