import mindrisersLogo from "@/public/mindrisers-logo.webp";
import Image from "next/image";
import { RiJavascriptFill } from "react-icons/ri";
import {  FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpressdotcom } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";

export default function Experience() {
  const skills = [
    {
      name: "JavaScript",
      icon: (
        <RiJavascriptFill className="text-yellow-500 font-medium  w-4 h-4" />
      ),
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
      name: "Figma",
      icon: <FaFigma className="text-pink-500 font-medium  w-4 h-4" />,
    }
  ];

  return (
    <div>
      <p className="text-fluid-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
        experience
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-around">
          <div>
            <Image
              src={mindrisersLogo}
              alt="Mindrisers Logo"
              width={70}
              height={70}
            />
          </div>
          <div>
            <p className="text-fluid-base font-semibold text-gray-700">
              Mindrisers Technology
            </p>
            <p className="text-fluid-xs font-medium text-gray-500">
              Full Stack Developer Intern
            </p>
          </div>
        </div>
        <div className="text-fluid-xs font-medium text-right text-gray-500">
          <p>Jun 2023 - Aug 2023</p>
          <p>Kathmandu, Nepal (on-site)</p>
        </div>
      </div>
      <div>
        <p className="mt-4 text-sm text-gray-700 font-semibold">
          Technologies & Tools:
        </p>
        <div className="flex items-center gap-4 mt-2 flex-wrap">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-1 cursor-pointer text-fluid-xs text-gray-500 border border-gray-300 px-2 py-1 rounded-lg"
            >
              {skill.icon}
              {skill.name}
            </div>
          ))}
        </div>
      </div>
      <div>
        <ul className="list-disc list-outside mt-4 text-fluid-xs text-gray-500 text-justify tracking-tight leading-relaxed">
          <li>
            Built an admin dashboard with login and role-based access where
            admins could add new users, edit their details, and control what
            user could see or do across the panel.
          </li>
          <li>
            Added file upload with automatic compression and used Zod to
            validate incoming request data, which helped catch bad inputs before
            they reached the database.
          </li>
          <li>
            Organized the backend into a clear folder structure with separate
            layers for routes, controllers, and services, and added centralized
            error handling so API errors returned consistent responses across
            all endpoints.
          </li>

          <li>
            Converted Figma screens into responsive UI — tables, forms, and
            modals — and documented all backend endpoints in Swagger so
            teammates could test and integrate APIs without back and forth.
          </li>
        </ul>
      </div>
    </div>
  );
}
