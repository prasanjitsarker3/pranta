import React from "react";

const Education = () => {
  return (
    <div className="px-2 md:px-0">
      <div
        className="max-w-xl mx-auto px-6 py-6 rounded-md mt-4"
        style={{ backgroundColor: "rgb(30, 34, 43)" }}
      >
        <h2 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-3">
          EDUCATION
        </h2>

        <div className="space-y-4">
          <div className="mb-2">
            <h3 className="text-base font-semibold text-white/90 mb-1">
              Bachelor's in Information Technology
            </h3>

            <div className="text-sm text-white/90 uppercase tracking-wide mb-3 font-medium">
              MAKAUT • 2019–2023 (Kolkata, India)
            </div>

            <p className=" text-gray-400 leading-relaxed text-sm">
              Studied core areas of Information Technology, including software
              development, database systems, and computer networks. Gained both
              frontend and backend development skills through academic and
              personal projects.
            </p>
          </div>
          <div className="border-t border-gray-600"></div>

          <div className="mb-2">
            <h3 className="text-base font-semibold text-white/90 mb-1">
              Higher Secondary Certificate
            </h3>

            <div className="text-sm text-white/90 uppercase tracking-wide mb-3 font-medium">
              MEH Arif College • Dhaka, Bangladesh
            </div>

            <p className="text-gray-400 leading-relaxed text-sm">
              Completed higher secondary education in science and mathematics,
              building a strong foundation in analytical thinking and
              problem-solving for a tech career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
