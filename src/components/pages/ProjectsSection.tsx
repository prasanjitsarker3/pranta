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
          {/* GearON Project */}
          <a
            href="https://gearon.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
          >
            <div className="flex-shrink-0">
              <div className=" w-44 md:w-32 aspect-4/3 relative rounded-md">
                <Image
                  src="/Images/mechanic.webp"
                  alt="GearON thumbnail"
                  fill
                  className="rounded-md"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white mb-1 uppercase">
                  GearON
                </h3>
                <div className="-mt-1 text-orange-500">
                  <Globe size={15} />
                </div>
              </div>
              <p className="text-gray-400 text-sm text-justify">
                On-Demand Car Repair & Roadside Assistance — a two-sided
                automotive platform connecting car owners with verified
                mechanics across Bangladesh. Instant matching, transparent
                pricing, live GPS tracking, AI-assisted diagnostics, in-app
                payments, and an admin portal, with Car Owner & Mechanic apps on
                Android + iOS. Live across Dhaka, Chattogram, and Sylhet.
              </p>
            </div>
          </a>

          {/* GoBNS Project */}
          <a
            href="https://www.gobns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
          >
            <div className="flex-shrink-0">
              <div className=" w-44 md:w-32 aspect-4/3 relative rounded-md">
                <Image
                  src="/Images/gobns.png"
                  alt="GoBNS thumbnail"
                  fill
                  className="rounded-md"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white mb-1 uppercase">
                  GoBNS
                </h3>
                <div className="-mt-1 text-orange-500">
                  <Globe size={15} />
                </div>
              </div>
              <p className="text-gray-400 text-sm text-justify">
                Bangladesh's online car buy-sell-and-pre-order marketplace with
                2000+ listings. Buyers filter by brand, model, city, and budget;
                sellers list with team review and optional certified-mechanic
                inspection (the "GOBNS Verified" badge). Features one-tap
                test-drive booking, an EMI calculator, escrow-protected
                payments, and Japan import/pre-order support.
              </p>
            </div>
          </a>

          {/* Testiphy Project */}
          <a
            href="https://www.testiphy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
          >
            <div className="flex-shrink-0">
              <div className=" w-44 md:w-32 aspect-4/3 relative rounded-md">
                <Image
                  src="/Images/testify.png"
                  alt="Testiphy thumbnail"
                  fill
                  className="rounded-md"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white mb-1 uppercase">
                  Testiphy
                </h3>
                <div className="-mt-1 text-orange-500">
                  <Globe size={15} />
                </div>
              </div>
              <p className="text-gray-400 text-sm text-justify">
                An AI-powered exam & assessment platform that bridges paper and
                digital — scan physical OMR sheets for instant results, or take
                exams via a Digital OMR experience that mimics the offline feel.
                Three result views (OMR, Quick, Solve) with full solutions,
                performance analytics, and a national leaderboard, all synced
                across platforms.
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
        </div>
      </div>
    </div>
  );
}
