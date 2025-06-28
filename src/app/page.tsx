import About from "@/components/pages/About";
import Banner from "@/components/pages/Banner";
import Education from "@/components/pages/Education";
import Experience from "@/components/pages/Experience";
import FooterWithSocial from "@/components/pages/Footer";
import ProjectsSection from "@/components/pages/ProjectsSection";
import Technology from "@/components/pages/Technology";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-[#262A33]  border border-[#262A33]">
      <div id="home">
        <Banner />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="technology">
        <Technology />
      </div>
      <FooterWithSocial />
    </div>
  );
};

export default HomePage;
