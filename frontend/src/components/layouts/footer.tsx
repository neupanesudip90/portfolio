"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import * as Tooltip from "@radix-ui/react-tooltip";
import { AnimatedNumber } from "../shared/ui/animatedNumber";
import { useVisitorCount } from "@/src/hooks/useVisitorCount";
import { MdOutlineDocumentScanner } from "react-icons/md";
import chiyaImage from "@/public/chiya.png";
import Image from "next/image";

export const CTASection = () => {
  return (
    <section className="mt-10">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div>
          <h2 className="text-fluid-xl font-bold text-primary mb-4">
            Interested in working together?
          </h2>
          <p className="text-secondary text-fluid-md font-medium">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=neupanesudip90@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
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
            href="https://www.linkedin.com/in/sudipneupane-dev/"
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

          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center  justify-center px-4 py-2 border-2 border-gray-300 text-fluid-sm font-medium rounded-md text-gray-700 bg-white hover:border-purple-600 hover:text-purple-600 transition-all"
          >
            <MdOutlineDocumentScanner className="w-5 h-5 mr-2" />
            View My Resume
          </a>
        </div>

        <p className="text-fluid-sm text-secondary">
          Or email me directly at{" "}
          <a
            href="mailto:sudip@example.com"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            neupanesudip90@gmmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side="top"
          sideOffset={6}
          className="bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-md z-50"
        >
          {label}
          <Tooltip.Arrow className="fill-gray-900" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const count = useVisitorCount();

  return (
    <footer className="mt-10 border-t border-gray-200">
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-primary">Sudip Neupane</h3>
            <p className="text-secondary text-fluid-sm ">
              Open to opportunities, Closed to bad
              <span>
                <Image
                  src={chiyaImage.src}
                  alt="Chiya"
                  width={60}
                  height={60}
                  className="inline-block animate-wave"
                />
              </span>
              tea/coffee.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-flud-md font-semibold text-primary mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-fluid-xs">
              <li>
                <a
                  href="/resume"
                  className="text-secondary hover:text-purple-600  scale-100 hover:scale-120 transform-gpu transition-transform duration-300"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-secondary hover:text-purple-600  scale-100 hover:scale-120 transform-gpu transition-transform duration-300"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* social media links */}
          <div>
            <h4 className="text-fluid-md font-semibold text-primary mb-3">
              Connect with me
            </h4>
            <div className="flex items-center gap-4 mt-5">
              <SocialLink
                href="https://www.linkedin.com/in/sudipneupane-dev/"
                label="LinkedIn"
                icon={<FaLinkedin className="w-5 h-5 text-blue-500" />}
              />
              <SocialLink
                href="https://github.com/neupanesudip90"
                label="GitHub"
                icon={<FaGithub className="w-5 h-5 text-gray-500" />}
              />
              <SocialLink
                href="https://mail.google.com/mail/?view=cm&fs=1&to=neupanesudip90@gmail.com"
                label="Gmail"
                icon={<SiGmail className="w-5 h-5 text-red-500" />}
              />
              <SocialLink
                href="viber://chat?number=%2B9779810268020"
                label="Viber"
                icon={<FaViber className="w-5 h-5 text-purple-700" />}
              />
              <SocialLink
                href="https://wa.me/9866270227"
                label="WhatsApp"
                icon={<FaWhatsapp className="w-5 h-5 text-green-600" />}
              />
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary">
            © {currentYear} Sudip Neupane. All rights reserved.
          </p>

          {count && (
            <p className="text-fluid-sm text-secondary">
              <span className="inline-block animate-wave ">👋</span> You are the{" "}
              <span className="font-bold text-primary">
                <AnimatedNumber value={count} />
              </span>{" "}
              th visitor!, thanks for stopping by!
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};
