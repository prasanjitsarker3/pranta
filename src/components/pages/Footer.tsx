import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function FooterWithSocial() {
  return (
    <footer className="w-full max-w-xl mx-auto px-2 md:px-0 pb-4">
      <div
        className="max-w-xl mx-auto px-6 py-8 text-center mt-4 rounded-md"
        style={{ backgroundColor: "rgb(30, 34, 43)" }}
      >
        <h2 className="text-base md:text-lg font-semibold text-white mb-3 leading-tight">
          Let's create
          <br />
          something together!
        </h2>
        <Link href="/contact">
          <Button
            variant="outline"
            className="bg-transparent border-2 cursor-pointer border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-2 rounded-full transition-all duration-300 font-medium"
          >
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
        </Link>
      </div>

      <div
        className="max-w-4xl mx-auto px-6 space-y-3 mt-4 py-6 rounded-md"
        style={{ backgroundColor: "rgb(30, 34, 43)" }}
      >
        <nav className="flex justify-center space-x-4 md:space-x-8 text-sm md:text-base">
          <a
            href="#home"
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#blog"
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            Blog
          </a>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </Link>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/prasanjit-sarker-49a0b7220"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/Prasanjit_Sarkr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/prasanjitsarker3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:sarkerprasanjit379@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-600"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">sarkerprasanjit379@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
