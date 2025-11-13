import React from "react";

export default function AppicantHero() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mt-12">
          <span className="text-2xl font-bold text-primary">
            Services for Candidates
          </span>
          <h1 className="text-4xl font-bold text-white">
            How to succeed in today’s job market.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="bg-primary rounded-4xl pb-10">
              <img
                src="/images/find4.png"
                alt="Consultations"
                className="object-cover rounded-t-4xl w-full h-auto"
              />
              <div className="px-10 py-5">
                <h2 className="text-[30px] text-white font-bold font-sans">
                  Consultations
                </h2>
                <p className="text-white text-[14px] font-normal font-sans">
                  Our candidate consultations are designed to help you present
                  yourself confidently and professionally. With guidance from
                  experienced consultants, you will improve your interview
                  skills, strengthen your personal brand, and increase your
                  chances of securing the right role.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-primary rounded-4xl pb-10">
              <img
                src="/images/find3.png"
                alt="Personality Assessments"
                className="object-cover rounded-t-4xl w-full h-auto"
              />
              <div className="px-10 py-5">
                <h2 className="text-[30px] text-white font-bold font-sans">
                  Personality Assessments
                </h2>
                <p className="text-white text-[14px] font-normal font-sans">
                  We provide personality assessments that help you and potential
                  employers better understand your strengths, motivations, and
                  ideal work style. These insights allow for better job
                  alignment and stronger career development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
