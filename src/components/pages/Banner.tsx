import { Github, Globe, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className=" max-w-xl mx-auto py-4 md:py-7 px-2 md:px-0">
      <section
        className="flex flex-col items-center justify-center px-6 py-8  rounded-md"
        style={{ backgroundColor: "rgb(30, 34, 43)" }}
      >
        <div className="mb-4">
          <div className="w-24 h-24 rounded-md overflow-hidden">
            <Image
              src="/Images/DEV56.jpg"
              alt="Christopher Walker"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Username */}
        <p className="text-gray-400 text-lg mb-2">Prasanjit Sarker</p>

        {/* Main Heading */}
        <h1 className="text-white/80 text-2xl md:text-3xl font-bold mb-6 text-center">
          Full Stack Developer
        </h1>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/prasanjit-sarker-49a0b7220"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
          </div>
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
            <a
              href="https://x.com/Prasanjit_Sarkr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center"
            >
              <Twitter className="w-4 h-4 text-white" />
            </a>
          </div>
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
            <a
              href="https://github.com/prasanjitsarker3"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center"
            >
              <Github className="w-4 h-4 text-white" />
            </a>
          </div>
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
            <Globe className="w-4 h-4 text-white" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
