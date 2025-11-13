import React from "react";

export default function AboutHero() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-2xl flex flex-col mt-12">
          <span className="text-[16px] font-sans font-bold text-primary mb-4">
            ABOUT US
          </span>
          <h1 className="text-[48px] text-secondary font-sans">
            15 Years of Recruitment Expertise
          </h1>
          <p className="text-[16px] font-sans text-[#192c33] mt-4">
            <strong>RabotaNet </strong> is a recognized name in Europe’s human
            resources industry and has recently expanded its operations to
            Belarus. With more than 15 years of expertise in manpower
            management, we are committed to delivering solutions that address
            the unique needs of every client.
          </p>
          <p className="text-[16px] font-sans text-[#192c33] mt-4">
            We take pride in our ability to match the right talent with the
            right opportunities, drawing on top-tier resources and proven
            industry knowledge. Our team of seasoned professionals brings
            extensive experience in manpower consulting, ensuring exceptional
            service at every stage.
          </p>
          <p className="text-[16px] font-sans text-[#192c33] mt-4">
            Our services are flexible and tailored designed to align with each
            client’s specific goals and budget. From temporary placements to
            long-term recruitment, we offer comprehensive human capital
            solutions worldwide.
          </p>
          <p className="text-[16px] font-sans text-[#192c33] mt-4">
            Our vision is to be the trusted HR partner of choice for both
            government and non-government organizations.
          </p>
          {/* 
          <ul className="list-disc ml-10 space-y-3 text-[14px] font-normal font-sans text-[#192c33] mt-10">
            <li>
              We have been providing high-quality headhunting services on the
              market for 20 years.
            </li>
            <li>
              Our teams focus on challenging positions with interesting language
              combinations.
            </li>
            <li>
              We also use AI and modern technologies for faster headhunting and
              direct outreach.
            </li>
            <li>We operate more flexibly online.</li>
            <li>
              We attend networking events and, thanks to partnerships, offer new
              services in the field of education and personal development for
              our clients.
            </li>
          </ul>
          */}
        </div>
      </div>
    </section>
  );
}
