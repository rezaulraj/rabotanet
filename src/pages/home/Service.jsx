import React from "react";
import { TiMessages } from "react-icons/ti";
import { FaPen, FaCalendarAlt, FaQuestionCircle } from "react-icons/fa";

export default function Service() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
          <div>
            <div className="flex flex-col justify-center items-start">
              <span className="text-[17px] text-primary font-normal font-sans">
                SERVICES FOR APPLICANTS
              </span>
              <h2 className="text-[52px] font-bold font-sans mt-4 text-secondary leading-snug">
                How to stand out in today’s <br /> job market.
              </h2>
              <p className="text-[14px] text-secondary text-normal font-sans mt-4 max-w-md">
                If you are pursuing a new opportunity, we will help you present
                yourself with confidence and clarity, maximising your chances of
                securing your ideal role.
              </p>
            </div>
            <button className="bg-primary text-white text-[16px] font-sans cursor-pointer rounded-full px-10 py-3 flex justify-center items-center mt-5 hover:bg-secondary duration-300">
              More Information for Applicants
            </button>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 z-0 flex justify-center items-center max-w-[500px] mx-auto">
              <img
                src="/images/round.png"
                alt="Applicants"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[550px]">
              <div className="bg-white p-6 shadow-md rounded-md hover:shadow-xl duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4">
                  <TiMessages size={20} />
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  Interview Preparation
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  We equip you with interview techniques, conduct mock
                  interviews, and build your confidence.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-md hover:shadow-xl duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4">
                  <FaPen size={18} />
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  CV & LinkedIn Profile Enhancement
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  We refine your CV and LinkedIn profile to make a strong first
                  impression.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-md hover:shadow-xl duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4">
                  <FaCalendarAlt size={18} />
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  Labour Market Analysis
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  We analyse your career opportunities across industries and
                  regions, identifying the most suitable positions.
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-md hover:shadow-xl duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4">
                  <FaQuestionCircle size={18} />
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  Personality Assessments
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  We provide assessments that help both you and potential
                  employers understand your strengths and optimal fit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:mt-20 md:mt-10 mt-5 bg-[#192C33] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4 p-10">
            <div>
              <h2 className="text-[40px] font-bold font-sans text-white">
                6,000+
              </h2>
              <p className="text-[16px] font-bold font-sans text-white">
                interviews conducted
              </p>
            </div>
            <div>
              <h2 className="text-[40px] font-bold font-sans text-white">
                1,600+
              </h2>
              <p className="text-[16px] font-bold font-sans text-white">
                verified CVs
              </p>
            </div>
            <div>
              <h2 className="text-[40px] font-bold font-sans text-white">
                180+
              </h2>
              <p className="text-[16px] font-bold font-sans text-white">
                satisfied employers
              </p>
            </div>
            <div>
              <h2 className="text-[40px] font-bold font-sans text-white">
                62+
              </h2>
              <p className="text-[16px] font-bold font-sans text-white">
                professional articles published
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
