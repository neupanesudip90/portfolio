"use client";
import { Search, Sun } from "lucide-react";
import Link from "next/link";
import React from "react";

const navlinks = [
  { name: "Home", href: "/" },
  { name: "Works", href: "/works" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full bg-white  fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-transparent backdrop-blur-sm shadow-xs" : "bg-transparent"
      }`}
    >
      {/* page-wrapper centers content & matches main content alignment */}
      <div className="page-wrapper !py-3">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-5 text-sm font-medium text-gray-500">
            {navlinks.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button className="flex items-center px-3 py-2 text-sm font-inter text-gray-500 border border-gray-300 rounded-2xl">
              <span className="flex items-center ">
                <Search className="w-4 h-4 " />
              </span>
              <span className="pl-2 text-sm  ">Search</span>
            </button>

            <div>
              <Sun className="ml-4 cursor-pointer text-gray-600" />
            </div>
          </div>
        </div>
      </div>
      
    </nav>
  );
}
