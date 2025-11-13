import React from "react";
import { FaUserClock, FaSearchDollar, FaClock } from "react-icons/fa";

export default function Advantages() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="lg:text-[48px] text-secondary md:text-4xl font-bold text-center mb-16">
          Advantages of RabotaNet Recruitment Headhunting
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Advantage */}
          <div className="bg-white p-8 rounded-lg shadow-md text-start hover:border border-secondary cursor-pointer">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary p-4 rounded-full">
                <FaUserClock className="text-primary text-3xl" />
              </div>
            </div>
            <h3 className="lg:text-[21px] md:text-2xl font-display font-medium mb-4">
              Access to passive candidates
            </h3>
            <p className="text-gray-600 text-[14px] font-sans">
              We help you engage with professionals who are not actively
              applying for jobs, giving you the chance to hire rare and
              exceptional talent.
            </p>
          </div>

          {/* Second Advantage */}
          <div className="bg-white p-8 rounded-lg shadow-md text-start hover:border border-secondary cursor-pointer">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary p-4 rounded-full">
                <FaSearchDollar className="text-primary text-3xl" />
              </div>
            </div>
            <h3 className="lg:text-[21px] md:text-2xl font-display font-medium mb-4">
              Industry-specific expertise
            </h3>
            <p className="text-gray-600 text-[14px] font-sans">
              Our headhunters focus on defined industries and functional areas,
              ensuring a deeper understanding of your requirements and more
              precise candidate matches.
            </p>
          </div>

          {/* Third Advantage */}
          <div className="bg-white p-8 rounded-lg shadow-md text-start hover:border border-secondary cursor-pointer">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary p-4 rounded-full">
                <FaClock className="text-primary text-3xl" />
              </div>
            </div>
            <h3 className="lg:text-[21px] md:text-2xl font-display font-medium mb-4">
              Time and resource efficiency
            </h3>
            <p className="text-gray-600 text-[14px] font-sans">
              Outsourcing to our experts saves you valuable time and internal
              resources, while ensuring a professional and discreet search
              process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
