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
          I’m a Full Stack Engineer focused on crafting meaningful digital
          experiences where design meets code. With a strong front-end
          development and UX design background, I build scalable UI systems and
          contribute to user-centered products from concept to deployment.
        </h1>
      </div>
    </div>
  );
};

export default About;
