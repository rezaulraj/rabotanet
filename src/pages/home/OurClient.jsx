import React from "react";

export default function OurClient() {
  return (
    <section
      className="relative py-20 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      {/* Overlay for background opacity */}
      <div className="absolute inset-0 bg-white/30 z-0"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
          <span className="text-[17px] text-primary font-normal font-sans">
            CASE STUDIES & CLIENT REFERENCES
          </span>
          <h2 className="text-[52px] font-bold font-sans mt-4 text-secondary leading-snug">
            How we’ve delivered results for <br /> our clients
          </h2>

          {/* Headhunting Card */}
          <div className="bg-white w-full text-start p-10 max-w-5xl rounded-lg shadow-sm lg:mt-20 md:mt-10 sm:mt-5 mt-5">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Headhunting</h1>
            <div className="flex items-start mb-4">
              <span className="text-primary text-xl"> ★★★★★ </span>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-heading text-sm font-bold">
                A global company faced challenges filling a highly specialised
                role after their previous agency failed to deliver suitable
                candidates. Through a detailed consultation, we discovered that
                overly restrictive technical requirements were limiting the
                search. By refining the criteria and tapping into our extensive
                talent database, we provided three strong shortlisted candidates
                within just two weeks, two of whom proved to be an excellent
                match both technically and culturally.
              </p>
            </div>
          </div>

          {/* Recruiting Card */}
          <div className="bg-white w-full text-start p-10 max-w-5xl rounded-lg shadow-sm lg:mt-20 md:mt-10 sm:mt-5 mt-5">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Recruiting</h1>
            <div className="flex items-start mb-4">
              <span className="text-primary text-xl"> ★★★★★ </span>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-heading text-sm font-bold">
                A company required a proactive sales representative with strong
                industry connections. While the role seemed ideal for
                headhunting, we also deployed a broad recruitment strategy
                combining targeted advertising, marketing campaigns, social
                media outreach, and database searches. Within two weeks, we
                secured a candidate with the right personality profile and
                professional background to excel in the role.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
