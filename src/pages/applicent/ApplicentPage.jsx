import React from "react";
import AppicantHero from "./AppicantHero";
import Opportunity from "./Opportunity";
import Consultations from "./Consultations";
import Improve from "./Improve";
import Personality from "../Employers/Personality";

const ApplicentPage = () => {
  return (
    <div>
      <AppicantHero />
      <Opportunity />
      <Consultations />
      <Improve />
      <Personality />
    </div>
  );
};

export default ApplicentPage;
