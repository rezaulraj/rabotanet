import React from "react";
import Hero from "./Hero";
import Brand from "./Brand";
import Finding from "./Finding";
import Employers from "./Employer";
import Service from "./Service";
import OurClient from "./OurClient";
import Competitive from "./Competitive";
import Banner from "../../components/Banner";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Brand />
      <Finding />
      <Employers />
      <Service />
      <OurClient />
      <Competitive />
      {/* <BlogHome/> */}
      <Banner />
    </div>
  );
};

export default HomePage;
