import React from "react";

const HeroCareer = () => {
  return (
    <section className="relative bg-primary text-white py-30">
      <div className="relative container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <span className="text-lg uppercase font-medium tracking-widest text-gray-900">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Build Your Career with RabotaNet
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl">
            Explore exciting opportunities, connect with top employers, and find
            the perfect role that matches your skills and ambitions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-gray-900 hover:bg-gray-800 text-gray-100 font-semibold px-6 py-3 rounded-full transition duration-300 cursor-pointer">
              Explore Jobs
            </button>
            <button className="border border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-full transition duration-300 cursor-pointer">
              Submit CV
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative w-full max-w-lg">
          <img
            src="/images/career.jpg"
            alt="Career Illustration"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroCareer;
