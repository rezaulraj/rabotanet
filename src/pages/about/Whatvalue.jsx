import React from "react";
import { FaMedal, FaSyncAlt, FaHandshake } from "react-icons/fa";

export default function Whatvalue() {
  const values = [
    {
      icon: <FaMedal className="w-6 h-6 text-white" />,
      title: "Quality",
      description:
        "We are committed to delivering recruitment services of the highest standard. Through continuous innovation and process improvement, we aim not only to meet but to exceed client expectations. For us, quality is the cornerstone of long-term success.",
    },
    {
      icon: <FaSyncAlt className="w-6 h-6 text-white" />,
      title: "Flexibility",
      description:
        "In today’s fast-changing world, adaptability is key. We pride ourselves on offering flexible solutions that respond quickly and effectively to each client’s unique needs.",
    },
    {
      icon: <FaHandshake className="w-6 h-6 text-white" />,
      title: "Partnership",
      description:
        "We believe strong, long-term partnerships drive mutual growth. Building trust with clients and business partners is central to our mission, creating a stable foundation for future success.",
    },
  ];

  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="lg:text-[48px] md:text-3xl font-bold text-center mb-12 text-secondary font-sans">
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start text-start"
            >
              <div className="mb-4 p-4 bg-primary rounded-full">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
