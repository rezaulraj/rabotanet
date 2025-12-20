import React, { useState } from "react";
import ModeForm from "../../components/ModeForm";
import { useTranslation } from "react-i18next";

export default function Improve() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto text-center px-4 space-y-5">
        <h2 className="text-[33px] font-medium font-sans mt-4 text-secondary">
          {t("applicant.inprove.inproveHeading")}
        </h2>

        <button
          onClick={() => setIsOpen(true)}
          className="text-[20px] cursor-pointer font-bold font-sans text-white bg-primary px-10 py-3 rounded-4xl mt-5 hover:bg-secondary duration-300"
        >
          {t("applicant.inprove.inproveButton")}
        </button>
      </div>
      <ModeForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}
