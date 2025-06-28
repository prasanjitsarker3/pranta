import { LogsIcon } from "lucide-react";
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
            <div className="flex-shrink-0">
              <div className="w-6 h-6  flex items-center justify-center text-white text-sm font-bold">
                <Image
                  src={"/Images/logo-main.svg"}
                  alt="rubizcode"
                  width={30}
                  height={30}
                  className=""
                />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white/90 mb-0.5 md:mb-1">
                Full Stack Developer
              </h3>

              <div className=" text-[12px] md:text-sm text-gray-300 uppercase tracking-wide mb-1.5 md:mb-3 font-medium">
                ONSITE • FEB 2025 – PRESENT
              </div>

              <p className=" text-gray-400 leading-relaxed text-sm">
                Working at RuzbizCode on backend APIs, system design, database
                schema, and frontend integration using modern web stacks.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-6 h-6 flex items-center justify-center text-white text-sm font-bold">
                <Image
                  src="/Images/WebT.png"
                  alt="RubizCode"
                  width={30}
                  height={30}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white/90 mb-0.5 md:mb-1">
                Junior Software Developer
              </h3>

              <div className="text-[12px] md:text-sm text-gray-300 uppercase tracking-wide mb-1.5 md:mb-3 font-medium">
                March – December 2024
              </div>

              <p className=" text-gray-400 text-sm leading-relaxed">
                Worked on both frontend and backend features using React.js,
                Node.js, and RESTful APIs. Integrated design tokens with Figma &
                Storybook, and contributed to system architecture.
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

              <div className=" text-[12px] text-sm text-gray-300 uppercase tracking-wide mb-1.5 md:mb-3 font-medium">
                September - December • 2023
              </div>

              <p className=" text-gray-400 text-sm leading-relaxed">
                Built responsive UIs using React.js and Next.js for internal
                CRMS at Digicon Technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
