"use client";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "../shared/ui/themeToggle";
import { FaArrowAltCircleRight } from "react-icons/fa";

const navlinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    setIsScrolled(window.scrollY > 10);

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navbar-bg/80 backdrop-blur-md shadow-xs "
          : "bg-transparent"
      }`}
    >
      {/* Uses your --max-width and --page-spacing variables */}
      <div className="max-w-[var(--max-width)] mx-auto px-page py-3">
        <div className="flex items-center justify-between w-full">
          {/* Replaced text-gray-500 → text-secondary + hover transition */}
          <div className="flex items-center gap-5 text-sm font-medium text-secondary">
            {navlinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/#contact"
              className="relative inline-flex items-center gap-3 px-3 py-1 rounded-full 
  border border-white/10 overflow-hidden cursor-pointer group
  bg-gradient-to-br from-[#4a4a4b] via-[#3a3a3a] to-[#5f5f5f]
  text-slate-200 text-fluid-sm font-medium tracking-wide
  hover:-translate-y-0.5 hover:border-blue-400/50
  hover:shadow-[0_8px_30px_rgba(99,179,237,0.2),0_0_0_4px_rgba(99,179,237,0.06)]
  transition-all duration-300"
            >
              {/* shimmer sweep */}
              <span
                className="absolute top-0 left-[-60%] w-[40%] h-full 
    bg-gradient-to-r from-transparent via-white/5 to-transparent 
    -skew-x-12 group-hover:left-[130%] transition-all duration-700 ease-in-out"
              />

              {/* glow overlay */}
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
    bg-gradient-to-br from-blue-400/15 to-purple-500/10 transition-opacity duration-300"
              />

              {/* icon circle */}
              <span
                className="relative z-10 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0
    bg-gradient-to-br from-blue-400 to-purple-500
    group-hover:rotate-[20deg] group-hover:scale-110 transition-transform duration-300"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </span>

              <span className="relative z-10">Hire Me</span>

              <span
                className="relative z-10 opacity-50 group-hover:opacity-100 
    group-hover:translate-x-1 transition-all duration-300 text-fluid-sm text-center"
              >
                <FaArrowAltCircleRight />
              </span>
            </Link>
            <div className="flex items-center gap-3 shrink-0">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
