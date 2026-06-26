import React from "react";

const About = () => {
  return (
    <div className=" max-w-xl mx-auto mb-4 px-2 md:px-0">
      <div
        className="  rounded-md px-6 py-8"
        style={{ backgroundColor: "rgb(30, 34, 43)" }}
      >
        <h2 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-2 md:mb-4">
          About
        </h2>
        <h1 className=" text-white/90 text-base font-normal text-justify">
          Software Developer specializing in backend engineering, system design,
          and full-stack application development. Experienced in architecting
          scalable services, designing efficient database solutions, and
          developing secure APIs using modern technologies. Strong focus on
          software quality, performance, and maintainability, with a proven
          ability to deliver production-ready solutions in fast-paced
          environments. Passionate about continuous improvement, technical
          excellence, and building systems that scale with business growth.
        </h1>
      </div>
    </div>
  );
};

export default About;
