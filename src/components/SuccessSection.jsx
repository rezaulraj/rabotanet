import React from "react";

export default function SuccessSection({
  title,
  description,
  image,
  imageAlt = "Success Image",
  reverse = false,
}) {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 items-center gap-12 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image with border animation */}
          <div>
            <div className="relative p-[3px] rounded-4xl animate-border bg-gradient-to-r from-[#dd0525] via-transparent to-[#dd0525]">
              <div className="relative aspect-square overflow-hidden rounded-4xl bg-white">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-[24px] md:text-[32px] font-medium font-sans mt-4 text-secondary">
              {title}
            </h2>
            <p className="text-[14px] md:text-[16px] text-secondary font-sans mt-4 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
