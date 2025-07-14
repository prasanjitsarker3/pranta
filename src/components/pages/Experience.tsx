import { Globe, LogsIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div className="px-2 md:px-0">
      <div
        className="max-w-xl mx-auto px-6 py-6 rounded-md "
        style={{ backgroundColor: "rgb(30, 34, 43)" }}
      >
        <h2 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-4">
          EXPERIENCE
        </h2>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 flex flex-col items-center py-2">
              {/* Logo */}
              <div className="w-6 h-6 flex items-center justify-center text-white text-sm font-bold">
                <Image
                  src="/Images/logo-main.svg"
                  alt="rubizcode"
                  width={30}
                  height={30}
                  className=""
                />
              </div>

              {/* Vertical Dashed Border */}
              <div className="h-full w-px border-l-2 border-orange-500 border-dashed mt-3"></div>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white/90 mb-0.5 md:mb-1">
                Full Stack Developer
              </h3>

              <div className="text-[12px] md:text-sm text-gray-300 uppercase tracking-wide mb-1.5 md:mb-3 font-medium flex flex-col md:flex-row md:justify-start items-start md:items-center gap-2">
                <div className="text-start">
                  <span className="text-green-500 text-lg leading-none -mt-1">
                    ●
                  </span>
                  <span>Onsite • Feb 2025 – Present </span>
                </div>
                <div className=" flex items-center gap-2">
                  <span className=" text-white/80">( RubizCode)</span>
                  <a
                    href="https://rubizcode.com "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    <Globe size={14} />
                  </a>
                </div>
              </div>

              <p className=" text-gray-400 leading-relaxed text-sm text-justify">
                Working at RuzbizCode as a Full Stack Developer, contributing to
                EdTech projects like BP Dream School, Tooperon, and Testifly. We
                develop applications that help students learn, take online
                exams, and participate in a topper-focused education community.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 flex flex-col items-center py-2">
              <div className="w-6 h-6 flex items-center justify-center text-white text-sm font-bold">
                <Image
                  src="/Images/WebT.png"
                  alt="RubizCode"
                  width={30}
                  height={30}
                  className="h-full w-full object-contain"
                />
              </div>
              {/* Vertical Dashed Border */}
              <div className="h-full w-px border-l-2 border-orange-500 border-dashed mt-3"></div>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white/90 mb-0.5 md:mb-1">
                Junior Software Developer
              </h3>

              <div className="text-[12px] md:text-sm text-gray-300 uppercase tracking-wide mb-1.5 md:mb-3 font-medium flex flex-col md:flex-row items-start md:items-center gap-2">
                <span>March – December 2024</span>
                <div className=" flex items-center gap-2">
                  <span className="text-white/80">(Wevloper)</span>
                  <a
                    href="https://www.wevloper.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    <Globe size={14} />
                  </a>
                </div>
              </div>

              <p className=" text-gray-400 text-sm leading-relaxed text-justify">
                As a full-stack developer, I deliver end-to-end solutions, from
                design to deployment. I build scalable, user-friendly
                applications like Car Service Booking and ERP systems, ready to
                contribute across your entire development lifecycle.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className=" w-6 h-6  md:w-8 md:h-8  flex items-center justify-center text-white text-sm font-bold">
                <Image
                  src="/Images/Digicon-removebg-preview.png"
                  alt="RubizCode"
                  width={30}
                  height={30}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white/90 mb-0.5 md:mb-1">
                Frontend Developer Intern
              </h3>

              <div className=" text-[12px] text-sm text-gray-300 uppercase tracking-wide mb-1.5 md:mb-3 font-medium flex flex-col md:flex-row items-start md:items-center gap-2">
                September - December • 2023{" "}
                <div className=" flex items-center gap-2">
                  <span className=" text-white/80">( Digicon )</span>
                  <a
                    href="https://digicontechnologies.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    <Globe size={14} />
                  </a>
                </div>
              </div>

              <p className=" text-gray-400 text-sm leading-relaxed text-justify">
                I completed an internship at Digicon Technologies, where I
                contributed to the BREB government project by building
                responsive user interfaces using React.js and Next.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
