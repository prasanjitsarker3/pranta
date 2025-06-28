import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

export default function Technology() {
  const technologies = [
    {
      name: "TypeScript",
      description: "Programming Language",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      tooltip: "TypeScript - Typed JavaScript at scale",
    },
    {
      name: "JavaScript",
      description: "Programming Language",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      tooltip: "JavaScript - Dynamic programming language",
    },
    {
      name: "Node.js",
      description: "Runtime Environment",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      tooltip: "Node.js - JavaScript runtime for server-side development",
    },
    {
      name: "Nest.js",
      description: "Backend Framework",
      logo: "https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg",
      tooltip: "Nest.js - Progressive Node.js framework",
    },
    {
      name: "SQL",
      description: "Query Language",
      logo: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
      tooltip: "SQL - Structured Query Language for databases",
    },
    {
      name: "DBMS",
      description: "Database Management",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      tooltip: "DBMS - Database Management Systems",
    },
    {
      name: "Redis",
      description: "In-Memory Database",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
      tooltip: "Redis - In-memory data structure store",
    },
    {
      name: "Next.js",
      description: "React Framework",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      tooltip: "Next.js - The React framework for production",
    },
    {
      name: "React.js",
      description: "Frontend Library",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      tooltip: "React.js - JavaScript library for building user interfaces",
    },
  ];

  return (
    <div className="px-2 md:px-0">
      <TooltipProvider>
        <div
          className="max-w-xl mx-auto px-6 py-8 mt-4 rounded-md"
          style={{ backgroundColor: "rgb(30, 34, 43)" }}
        >
          <h2 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-3">
            Technology
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2 p-0  hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className="flex-shrink-0">
                      <div className=" w-6 md:w-8 h-6 md:h-8 flex items-center justify-center overflow-hidden">
                        <Image
                          src={tech.logo || "/placeholder.svg"}
                          alt={`${tech.name} logo`}
                          width={32}
                          height={32}
                          className="w-6 md:w-8 h-6 md:h-8 object-contain"
                          unoptimized
                        />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 ">
                      <h3 className=" text-xs md:text-sm font-semibold text-white  truncate">
                        {tech.name}
                      </h3>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className=" bg-orange-500 text-white"
                >
                  <p>{tech.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
}
