import { ArrowRight, ExternalLink, Globe } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <div className="px-2 md:px-0">
      <div
        className="max-w-xl mx-auto px-6 py-6 mt-4 rounded-md"
        style={{ backgroundColor: "rgb(30, 34, 43)" }}
      >
        <h2 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-3">
          Projects
        </h2>

        <div className="space-y-6">
          {/* BP Project */}
          <a
            href="https://www.bpdreamschool.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
          >
            <div className="flex-shrink-0">
              <div className=" w-44 md:w-32 aspect-4/3 relative rounded-md">
                <Image
                  src="/Images/Screenshot 2025-07-14 130336.png"
                  alt="BP Dream School thumbnail"
                  fill
                  className="rounded-md"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white mb-1 uppercase">
                  BP Dream School
                </h3>
                <div className="-mt-1 text-orange-500">
                  <Globe size={15} />
                </div>
              </div>
              <p className="text-gray-400 text-sm text-justify">
                An EdTech academic application for students from Class 6 to 10,
                offering regular classes, crash courses, live sessions, chat,
                messaging, comments, doubt clearing, community features,
                archived classes, and live exams...
              </p>
            </div>
          </a>

          {/* Topper Project */}
          <a
            href="https://topperon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
          >
            <div className="flex-shrink-0">
              <div className=" w-44 md:w-32 aspect-4/3 relative rounded-md">
                <Image
                  src="/Images/Screenshot 2025-07-14 130457.png"
                  alt="TopperOn thumbnail"
                  fill
                  className="rounded-md"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white mb-1 uppercase">
                  Topperon
                </h3>
                <div className="-mt-1 text-orange-500">
                  <Globe size={15} />
                </div>
              </div>
              <p className="text-gray-400 text-sm text-justify">
                TopperOn is an EdTech community platform where students can
                purchase courses, join a large educational community, clear
                doubts, routines, access TopFlix content, and buy curated
                courses through partner organizations.
              </p>
            </div>
          </a>

          {/* Boi Project */}
          <a
            href="https://boi.com.bd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
          >
            <div className="flex-shrink-0">
              <div className=" w-44 md:w-32 aspect-4/3 relative rounded-md">
                <Image
                  src="/Images/Screenshot 2025-07-14 135309.png"
                  alt="BOI.BD thumbnail"
                  fill
                  className="rounded-md"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white mb-1">
                  BOI.BD
                </h3>
                <div className="-mt-1 text-orange-500">
                  <Globe size={15} />
                </div>
              </div>
              <p className="text-gray-400 text-sm text-justify">
                A digital platform for Bengali readers offering ebooks,
                audiobooks, and categorized content. Includes romance, short
                stories, poetry, with features like top authors, new arrivals,
                bestsellers, and a reader leaderboard.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
