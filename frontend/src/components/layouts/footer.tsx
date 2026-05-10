"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Tooltip } from "@radix-ui/themes";

import { useVisitorCount } from "@/src/hooks/useVisitorCount";

const getOrdinal = (n: number) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const CTASection = () => {
  return (
    <section className="mt-10">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div>
          <h2 className="text-fluid-xl font-bold text-gray-700 mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-500 text-fluid-md font-medium">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:sudip@example.com"
            className="inline-flex items-center justify-center px-4 py-2 border-2 border-gray-300 text-fluid-sm font-medium rounded-md text-gray-700 bg-white hover:border-purple-600 hover:text-purple-600 transition-all"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Send me an Email
          </a>

          <a
            href="https://linkedin.com/in/sudipneupane"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border-2 border-gray-300 text-fluid-sm font-medium rounded-md text-gray-700 bg-white hover:border-purple-600 hover:text-purple-600 transition-all"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>

        <p className="text-fluid-sm text-gray-500">
          Or email me directly at{" "}
          <a
            href="mailto:sudip@example.com"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            sudip@example.com
          </a>
        </p>
      </div>
    </section>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const count = useVisitorCount();

  return (
    <footer className="mt-10 border-t border-gray-200">
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900">Sudip Neupane</h3>
            <p className="text-gray-600 text-sm">
              Full-Stack Developer building scalable applications that don't
              wake you up at 3am.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-purple-600  scale-100 hover:scale-120 transform-gpu transition-transform duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 hover:text-purple-600  scale-100 hover:scale-120 transform-gpu transition-transform duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-600 hover:text-purple-600  scale-100 hover:scale-120 transform-gpu transition-transform duration-300"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  className="text-gray-600 hover:text-purple-600  scale-100 hover:scale-120 transform-gpu transition-transform duration-300"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* social media links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">
              Connect with me
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sudipneupane"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black  scale-100 hover:scale-120 transform-gpu transition-transform duration-300 "
              >
                <Tooltip content="GitHub" side="top" sideOffset={5}>
                  <FaGithub className="w-7 h-7" />
                </Tooltip>
              </a>
              <a
                href="https://linkedin.com/in/sudipneupane"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 scale-100 hover:scale-120 transform-gpu transition-transform duration-300 "
              >
                <Tooltip content="LinkedIn" side="top" sideOffset={5}>
                  <FaLinkedin className="w-7 h-7" />
                </Tooltip>
              </a>
              <a
                href="mailto:sudip@example.com"
                className="text-gray-600 hover:text-red-600  scale-100 hover:scale-120 transform-gpu transition-transform duration-300"
              >
                <Tooltip content="Gmail" side="top" sideOffset={5}>
                  <SiGmail className="w-7 h-7" />
                </Tooltip>
              </a>
              <a
                href="https://www.viber.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-900  scale-100 hover:scale-120 transform-gpu transition-transform duration-300"
              >
                <Tooltip content="Viber" side="top" sideOffset={5}>
                  <FaViber className="w-7 h-7" />
                </Tooltip>
              </a>
              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-500  scale-100 hover:scale-120 transform-gpu transition-transform duration-300"
              >
                <Tooltip content="WhatsApp" side="top" sideOffset={5}>
                  <FaWhatsapp className="w-7 h-7" />
                </Tooltip>
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © {currentYear} Sudip Neupane. All rights reserved.
          </p>
          <p>
            {count
              ? `👋 You are the ${getOrdinal(count)} visitor. Thanks for stopping by!`
              : "Loading..."}
          </p>
        </div>
      </div>
    </footer>
  );
};
