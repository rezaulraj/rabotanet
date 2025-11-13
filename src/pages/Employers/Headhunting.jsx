import React from "react";

export default function Headhunting() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12">
          {/* Text Section */}
          <div>
            <div className="flex flex-col justify-center items-start">
              <span className="text-[17px] text-primary font-normal font-sans">
                Headhunting
              </span>
              <h2 className="text-[52px] font-medium font-sans mt-4 text-secondary">
                How Headhunting Works at RabotaNet Recruitment
              </h2>
              <p className="text-[14px] text-secondary text-normal font-sans mt-4">
                Our headhunters specialise in sourcing high-calibre
                professionals currently employed in other organisations. These
                individuals often possess the precise skills and experience your
                business requires. Our approach involves identifying,
                approaching, and engaging them with tailored opportunities that
                align with their career ambitions and your company’s needs.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center">
            <div>
              <div className="relative p-[3px] rounded-4xl animate-border bg-gradient-to-r from-primary via-transparent to-primary">
                <div className="relative aspect-square overflow-hidden rounded-4xl bg-white">
                  <img
                    src="/images/headhunting.png"
                    alt="Headhunting"
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
