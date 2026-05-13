"use client";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "../shared/ui/themeToggle";

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

          <div className="flex items-center gap-3 shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
