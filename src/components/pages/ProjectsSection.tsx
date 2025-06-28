import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <div className=" px-2 md:px-0">
      <div
        className="max-w-xl mx-auto px-6 py-6 mt-4 rounded-md"
        style={{ backgroundColor: "rgb(30, 34, 43)" }}
      >
        <h2 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-3">
          Projects
        </h2>

        {/* Projects List */}
        <div className="space-y-6">
          {/* Revo Project */}
          <div className="flex items-center gap-4 p-0 md:p-4 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="flex-shrink-0">
              <div className="w-16 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/placeholder.svg?height=48&width=64"
                  alt="Revo project thumbnail"
                  width={64}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">Revo</h3>
              <p className="text-gray-400 text-sm">Free Framer Template</p>
            </div>

            {/* Arrow Icon */}
            <div className="flex-shrink-0">
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </div>

          {/* Najm Project */}
          <div className="flex items-center gap-4 p-0 md:p-4 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
            {/* Project Thumbnail */}
            <div className="flex-shrink-0">
              <div className="w-16 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/placeholder.svg?height=48&width=64"
                  alt="Najm project thumbnail"
                  width={64}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">Najm</h3>
              <p className="text-gray-400 text-sm">SaaS Framer Template</p>
            </div>

            {/* Arrow Icon */}
            <div className="flex-shrink-0">
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </div>

          {/* Nashra Project */}
          <div className="flex items-center gap-4 p-0 md:p-4 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
            {/* Project Thumbnail */}
            <div className="flex-shrink-0">
              <div className="w-16 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/placeholder.svg?height=48&width=64"
                  alt="Nashra project thumbnail"
                  width={64}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">Nashra</h3>
              <p className="text-gray-400 text-sm">SaaS Framer Template</p>
            </div>

            {/* Arrow Icon */}
            <div className="flex-shrink-0">
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
