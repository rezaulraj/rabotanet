import React, { useState } from "react";
import ModeForm from "../../components/ModeForm";

export default function Improve() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-6xl mx-auto text-center px-4 space-y-5">
        <h2 className="text-[33px] font-medium font-sans mt-4 text-secondary">
          We connect skilled and hardworking individuals with employers who
          value dedication, craftsmanship, and reliability. Whether you are
          seeking full-time, part-time, or contract work, our vacancies cover a
          wide range of blue-collar roles across industries.
        </h2>

        <button
          onClick={() => setIsOpen(true)}
          className="text-[20px] cursor-pointer font-bold font-sans text-white bg-primary px-10 py-3 rounded-4xl mt-5 hover:bg-secondary duration-300"
        >
          I want the best people.
        </button>
      </div>

      {/* Modal */}
      <ModeForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}
