import React from "react";

export default function Recruiting() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12">
          <div>
            <div className="flex flex-col justify-center items-start">
              <span className="text-[17px] text-primary font-normal font-sans">
                Recruiting
              </span>
              <h2 className="text-[52px] font-medium font-sans mt-4 text-secondary">
                How Recruiting Works at RabotaNet Recruitment
              </h2>
              <p className="text-[14px] text-secondary text-normal font-sans mt-4">
                Our recruitment specialists follow a comprehensive process to
                ensure you hire the right fit. This includes advertising
                vacancies on targeted platforms, carefully screening and
                shortlisting CVs, coordinating interviews, and conducting
                thorough reference checks. We also place strong emphasis on
                ensuring each candidate aligns with your organisation’s values
                and culture. Every step is designed to help you build strong,
                lasting teams that contribute to long-term success.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div>
              <div className="relative p-[3px] rounded-4xl animate-border bg-gradient-to-r from-primary via-transparent to-primary">
                <div className="relative aspect-square overflow-hidden rounded-4xl bg-white">
                  <img
                    src="/images/Recruiting.png"
                    alt="Recruiting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
