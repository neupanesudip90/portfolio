"use client";

import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { IoLogoGitlab } from "react-icons/io5";
import { SiExpressdotcom } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import { SiSwagger } from "react-icons/si";

export default function Marquee() {
  const row1 = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-4 h-4" /> },
    { name: "CSS3", icon: <FaCss className="text-blue-500 w-4 h-4" /> },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill className="text-teal-400 w-4 h-4" />,
    },
    {
      name: "JavaScript",
      icon: <RiJavascriptFill className="text-yellow-500 w-4 h-4" />,
    },
    {
      name: "TypeScript",
      icon: <BiLogoTypescript className="text-blue-600 w-4 h-4" />,
    },
    { name: "React", icon: <FaReact className="text-blue-500 w-4 h-4" /> },
    {
      name: "Next.js",
      icon: <RiNextjsFill className="text-gray-800 w-4 h-4" />,
    },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-4 h-4" /> },
    {
      name: "Express.js",
      icon: <SiExpressdotcom className="text-gray-700 w-4 h-4" />,
    },
    {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql className="text-blue-700 w-4 h-4" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-4 h-4" /> },
  ];

  const row2 = [
    { name: "Redis", icon: <DiRedis className="text-red-500 w-4 h-4" /> },

    {
      name: "Redux",
      icon: <TbBrandRedux className="text-purple-500 w-4 h-4" />,
    },
    { name: "Docker", icon: <FaDocker className="text-blue-400 w-4 h-4" /> },
    { name: "Vercel", icon: <IoLogoVercel className="text-black w-4 h-4" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 w-4 h-4" /> },
    {
      name: "GitLab",
      icon: <IoLogoGitlab className="text-orange-600 w-4 h-4" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-500 w-4 h-4" />,
    },
    {
      name: "Swagger",
      icon: <SiSwagger className="text-blue-500 w-4 h-4" />,
    },
  ];

  const TechItem = ({
    tech,
  }: {
    tech: { name: string; icon: React.ReactNode };
  }) => (
    <div className="flex items-center gap-2 mx-2 px-4 py-1 rounded-xl bg-white shadow-sm border border-gray-100">
      {tech.icon}
      <span className="text-xs font-medium text-gray-700 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 45s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 34s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="bg-white py-10 overflow-hidden">
        <div className="mb-2 text-left">
          <p className="text-fluid-xs uppercase tracking-widest text-gray-500 font-semibold mb-6">
            Tech Stack
          </p>
        </div>

        {/* Row 1 — left to right */}
        <div className="overflow-hidden mb-4 relative">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent z-10" />

          <div className="animate-marquee-left">
            {[...row1, ...row1].map((tech, i) => (
              <TechItem key={i} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="overflow-hidden relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent z-10" />

          <div className="animate-marquee-right">
            {[...row2, ...row2].map((tech, i) => (
              <TechItem key={i} tech={tech} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
