import React, { useState } from "react";
import ModeForm from "../../components/ModeForm";

export default function Professional() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-7xl mx-auto text-center px-4">
        <h2 className="text-[33px] font-medium font-sans mt-4 text-secondary">
          By combining our expertise with an extensive network of professional
          headhunters, we help you elevate your recruitment process and secure
          the kind of exceptional talent that drives long-term success. Our goal
          is simple: we connect you with the very best people, the rare
          professionals who truly make a difference.
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="text-[20px] cursor-pointer font-bold font-sans text-white bg-primary px-10 py-3 rounded-4xl mt-5 hover:bg-secondary duration-300"
        >
          I want the best people.
        </button>
      </div>

      {/* Modal */}
      {isOpen && <ModeForm isOpen={isOpen} setIsOpen={setIsOpen} />}
    </section>
  );
}
