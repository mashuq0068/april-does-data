import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Service3 from "@/components/Service3";
import Service1 from "@/components/Service1";
import Service2 from "@/components/Service2";
import ServicesSection from "@/components/ServicesSection";
import React from "react";
import Service4 from "@/components/Service4";

const Services = () => {
  return (
    <div>
      {/* <Navigation onGetAssessment={() => {}} /> */}
      <Service1 />
      <Service2 />
      <Service3/>
      <Service4/>
      <ServicesSection />
      {/* <Footer onGetAssessment={() => {}} /> */}
    </div>
  );
};

export default Services;
