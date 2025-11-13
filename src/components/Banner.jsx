import React from "react";
import { MdOutlineDoneOutline } from "react-icons/md";

export default function Banner() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="col-span-7">
            <img
              src="/images/bannerb.png"
              alt="RabotaNet Recruitment Banner"
              className="object-cover rounded-r-4xl w-full h-auto"
            />
          </div>
          <div className="col-span-5 flex flex-col justify-center items-start">
            <h2 className="text-[52px] font-bold font-sans mt-4 text-secondary">
              RabotaNet Recruitment Company
            </h2>
            <span className="text-[24px] text-primary font-normal font-sans">
              Fleet Service
            </span>

            <h5 className="text-[17px] font-bold font-sans mt-4 text-secondary">
              Specialised Recruitment Services – Powered by Our Expertise
            </h5>

            <p className="text-[17px] text-secondary font-sans mt-4">
              In addition to standard hiring solutions,{" "}
              <strong>RabotaNet Recruitment</strong> offers specialised
              recruitment support tailored to businesses with unique workforce
              needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {[
                "Expertise across industries",
                "Fast, reliable hiring solutions",
                "Access to diverse talent pools",
                "Long-term support",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex justify-center items-center w-6 h-6 rounded-full bg-primary">
                    <MdOutlineDoneOutline size={10} className="text-white" />
                  </div>
                  <h3 className="text-[14px] font-bold font-sans text-secondary">
                    {item}
                  </h3>
                </div>
              ))}
            </div>

            <a
              href="/about"
              className="text-[20px] font-bold font-sans text-white bg-primary px-10 py-3 rounded-4xl mt-16 hover:bg-secondary duration-300"
            >
              More about the service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
