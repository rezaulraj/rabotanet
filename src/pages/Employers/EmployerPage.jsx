import React from "react";
import EmployHero from "./EmployHero";
import Headhunting from "./Headhunting";
import Success from "./Success";
import Advantages from "./Advantages";
import Professional from "./Professional";
import WorkRecrui from "./WorkRecrui";
import SuccessSection from "../../components/SuccessSection";
import Personality from "./Personality";
import Banner from "../../components/Banner";

const EmployerPage = () => {
  return (
    <div>
      <EmployHero />
      <Headhunting />
      <Success />
      <Advantages />
      <Professional />
      <WorkRecrui />
      <SuccessSection
        title=" Why Recruiting Is Essential to Business Success"
        description="Recruitment forms the backbone of a motivated and high-performing workforce. RabotaNet Recruitment understands that the right hiring decisions shape employee morale, efficiency, and company culture, which is why we tailor every recruitment process to the unique needs of each employer we partner with."
        image="/images/employee2.png"
        imageAlt="Bob"
      />
      <Personality />
      <Banner />
    </div>
  );
};

export default EmployerPage;
