"use client";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

interface ProjectsCardProps {
  title: string;
  problem: string; // one-liner: what problem it solves
  description: string; // fuller explanation shown when expanded
  image: string;
  liveDemo: string;
  githubLink: string;
  features: string[];
  tech: string[]; // tech stack as pills
}

export const ProjectsCard = ({
  title,
  problem,
  description,
  image,
  liveDemo,
  githubLink,
  features,
  tech,
}: ProjectsCardProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-bg-page hover:border-gray-300 transition-colors">
      <Image
        src={image}
        alt={title}
        width={600}
        height={300}
        className="w-full h-55 object-cover"
      />
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-medium text-primary mb-1">{title}</h3>
            <p className="text-sm text-secondary leading-relaxed">{problem}</p>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="shrink-0 text-fluid-sm text-secondary border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-bg-page text-primary cursor-pointer flex items-center gap-1"
          >
            {open ? "Less" : "Details"}
            <ChevronDown
              className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
            >
              {t}
            </span>
          ))}
        </div>
        {open && (
          <div className="mt-3 border-t border-gray-100 pt-3 space-y-3">
            <ul className="space-y-1.5">
              {features.map((f, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-fluid-sm text-gray-secondary"
                >
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-sm text-secondary leading-relaxed">
              {description}
            </p>
            <div className="flex gap-2 pt-1">
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fluid-sm px-4 py-1.5 bg-bg-page text-primary border border-gray-200 rounded-lg hover:bg-gray-900 flex items-center gap-1.5"
              >
                <CiGlobe className="inline-block mr-2 w-4 h-4" />
                Live demo
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fluid-sm text-primary px-4 py-1.5 border bg-bg-page border-gray-200 rounded-lg hover:bg-gray-900 flex items-center gap-1.5"
              >
                <FaGithub className="inline-block mr-2 w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
