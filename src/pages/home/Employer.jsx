import React from "react";

export default function Employers() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
          <div className="relative">
            <div className="inset-0 z-0 absolute flex justify-center items-center max-w-[500px]">
              <img
                src="/images/round.png"
                alt="Employers"
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
              <img
                src="/images/employe.png"
                alt="Employers"
                className="object-cover"
              />
            </div>
            <div className="absolute rounded-4xl flex flex-col justify-center items-center bottom-0 left-0 p-5 z-10 w-48 h-48 bg-primary">
              <h2 className="text-[40px] font-bold font-sans text-white">
                15 +
              </h2>
              <p className="text-[16px] font-bold font-sans text-white">
                Years of Experience
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start">
            <span className="text-[17px] text-primary font-normal font-sans">
              COMPREHENSIVE HR SERVICE
            </span>
            <h2 className="text-[52px] font-bold font-sans mt-4 text-secondary">
              FOR EMPLOYERS
            </h2>
            <p className="text-[14px] text-secondary text-normal font-sans mt-4">
              We provide comprehensive recruitment solutions designed to secure
              top-tier talent for your business.
            </p>

            <div>
              <div className="bg-white p-4 flex justify-center items-start w-full mt-5">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex justify-center items-center">
                  01
                </span>
                <div className="max-w-[400px] ml-4">
                  <h5 className="text-[20px] font-bold font-sans">
                    Headhunting
                  </h5>
                  <p className="text-[14px] text-secondary text-normal font-sans mt-4">
                    This is more than candidate sourcing; it is the strategic
                    art of identifying and engaging high-calibre professionals
                    who can deliver measurable value and competitive advantage.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 flex justify-center items-start w-full mt-5">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex justify-center items-center">
                  02
                </span>
                <div className="max-w-[400px] ml-4">
                  <h5 className="text-[20px] font-bold font-sans">
                    Recruiting
                  </h5>
                  <p className="text-[14px] text-secondary text-normal font-sans mt-4">
                    A structured process of sourcing, attracting, and selecting
                    candidates for diverse roles within your organisation. Our
                    recruiters use modern tools, targeted outreach, and
                    data-driven strategies to connect you with the right people.
                  </p>
                </div>
              </div>

              <a href="/employers">
                <button className="bg-primary text-white text-[16px] font-sans cursor-pointer rounded-full px-10 py-3 flex justify-center items-center mt-5 hover:bg-secondary duration-300">
                  More Information for Employers
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
