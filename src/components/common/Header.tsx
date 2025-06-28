"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Code, Folder, Home, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const headerData = [
    { name: "Home", icon: <Home className="w-5 h-5" />, id: "home" },
    { name: "Projects", icon: <Folder className="w-5 h-5" />, id: "projects" },
    {
      name: "Technology",
      icon: <Code className="w-5 h-5" />,
      id: "technology",
    },
    {
      name: "Contact",
      icon: <Mail className="w-5 h-5" />,
      href: "/contact",
    },
  ];

  const handleClick = (item: any) => {
    if (item.href) {
      router.push(item.href);
    } else {
      if (pathname !== "/") {
        router.push("/#" + item.id);
      } else {
        const section = document.getElementById(item.id);
        section?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-sm px-2 md:px-0 pt-2 md:pt-0">
      <div
        className="max-w-xl mx-auto border-none rounded-full md:rounded-md "
        style={{ backgroundColor: "rgb(30, 34, 43)" }}
      >
        <header className="px-6 py-4">
          <nav className="flex justify-center space-x-12 xl:space-x-16">
            <TooltipProvider>
              {headerData.map((item) => (
                <Tooltip key={item.name}>
                  <TooltipTrigger asChild>
                    <div
                      onClick={() => handleClick(item)}
                      className="text-white hover:text-gray-300 cursor-pointer"
                    >
                      {item.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    className="bg-orange-500 text-white"
                  >
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
