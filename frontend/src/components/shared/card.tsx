import "./card.css";
import Image from "next/image";
import Link from "next/link";

import { RiJavascriptFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { SiExpressdotcom } from "react-icons/si";

export function Card({
  image,
  title,
  description,
  githubLinks,
  hostingLinks,
}: {
  image: string;
  title: string;
  description: string;
  githubLinks: string;
  hostingLinks: string;
}) {
  const skills = [
    {
      name: "JavaScript",
      icon: (
        <RiJavascriptFill className="text-yellow-500 font-medium  w-4 h-4" />
      ),
    },
    {
      name: "TypeScript",
      icon: <BiLogoTypescript className="text-blue-600 font-medium  w-4 h-4" />,
    },
    {
      name: "Next.js",
      icon: <RiNextjsFill className="text-gray-800 font-medium  w-4 h-4" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 font-medium  w-4 h-4" />,
    },
    {
      name: "Express.js",
      icon: <SiExpressdotcom className="text-gray-700 font-medium  w-4 h-4" />,
    },
    {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql className="text-blue-700 font-medium  w-4 h-4" />,
    },
  ];

  return (
    <div className="card">
      <div className="card-inner  w-full h-full flex flex-col items-center p-1 ">
        <div className="bg-bg-page rounded-xl ">
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="rounded-t-2xl"
          />

          <div className="flex flex-row items-center justify-between w-full px-4 py-3">
            <p className="text-fluid-sm font-bold text-left text-secondary">
              {title}
            </p>

            <div className="gap-3 text-fluid-xs font-medium text-secondary flex">
              <Link
                href={hostingLinks}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiGlobe className="w-4 h-4" />
              </Link>
              <Link
                href={githubLinks}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div>
            <p className="text-fluid-xs  px-4 font-medium text-secondary text-justify tracking-tight leading-relaxed">
              {description}
            </p>
          </div>
          <div className="px-4 flex justify-end">
            <a
              href="/projects"
              className="text-fluid-xs text-secondary border border-gray-300 rounded-md px-3 py-1  font-medium hover:bg-gray-900 hover:text-secondary transition-colors duration-300"
            >
              View Details
            </a>
          </div>
          <div className="w-full flex-cols justify-start px-4 mb-5 mt-1 gap-3">
            <p className="text-secondary font-bold text-fluid-xs">
              Technologies:
            </p>
            <div className="flex  gap-3 ">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-end gap-1 py-1 cursor-pointer text-fluid-xs "
                >
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
