import React from "react";

export default function Opportunity() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12">
          <div>
            <div className="relative p-[3px] rounded-4xl animate-border bg-gradient-to-r from-[#dd0525] via-transparent to-[#dd0525]">
              <div className="relative aspect-square overflow-hidden rounded-4xl bg-white">
                <img
                  src="/images/employee1.png"
                  alt="Consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-[24px] font-medium font-sans mt-4 text-secondary">
              Consultations with Candidates – Be Ready for New Opportunities
            </h2>
            <p className="text-[14px] text-secondary text-normal font-sans mt-4">
              Our consultations go beyond interview preparation. We support you
              in refining your CV, optimising your LinkedIn profile, and
              enhancing your visibility to potential employers. By improving
              your presentation skills and professional branding, we help you
              stand out in a competitive market and improve your chances of
              landing your desired role.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
