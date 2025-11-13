import React from "react";
import { FaSearchDollar } from "react-icons/fa";

export default function Personality() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="lg:text-[48px] text-secondary md:text-4xl font-bold text-center mb-16">
          Personality Assessments
        </h2>

        <div className="bg-white p-8 rounded-lg shadow-md text-start hover:border border-secondary cursor-pointer">
          <div className="flex justify-start items-start mb-6">
            <div className="bg-secondary p-4 rounded-full">
              <FaSearchDollar className="text-primary text-3xl" />
            </div>
          </div>

          {/* Optional Heading */}
          {/* <h3 className="lg:text-[21px] md:text-2xl font-display font-medium mb-4">
            DISC test
          </h3> */}

          <p className="text-gray-600 text-[14px] font-sans">
            Our personality assessments provide valuable insights into
            candidates’ behavioural styles and workplace motivations. They help
            reveal whether an individual is more introverted or extroverted,
            whether their drive is focused on achieving goals or building
            relationships, how their traits may develop over time, and any
            potential challenges that could affect long-term performance. These
            insights support smarter hiring decisions and ensure stronger
            alignment between candidates and organisational needs.
          </p>
        </div>
      </div>
    </section>
  );
}
