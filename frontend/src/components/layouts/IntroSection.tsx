import Image from "next/image";
import profile from "@/public/profile.jpg";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { TiDocumentText } from "react-icons/ti";
import { FaPaperPlane } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Tooltip } from "@radix-ui/themes";
import Marquee from "../shared/ui/marquee";

export default function IntroSection() {
  return (
    <section>
      {/* profile image & name */}
      <div className="flex items-center justify-start gap-5">
        <Image
          src={profile}
          alt="Profile Image"
          width={110}
          height={110}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-fluid-4xl font-bold text-gray-800">
            Sudip Neupane
          </p>
          <p className="text-fluid-xs text-gray-500">
            Engineer | Full-Stack Developer | Explorer
          </p>
        </div>
      </div>

      {/* intro */}
      <div className="mt-4">
        <p className="text-fluid-xl py-2">
          Hi! I'm Sudip —{" "}
          <span className="font-bold text-gray-500">
            A Full-Stack Developer.
          </span>
        </p>
        <p className="text-xs text-gray-500 text-justify tracking-tight leading-relaxed">
          I design and build scalable full-stack applications —{" "}
          <span className="inline-flex items-center gap-1 border font-medium border-gray-300 px-2  rounded-xl bg-gray-200">
            <FaReact className="text-blue-500 w-4 h-4" /> React
          </span>{" "}
          and{" "}
          <span className="inline-flex items-center gap-1 border font-medium border-gray-300 px-2  rounded-xl bg-gray-200">
            <RiNextjsFill className="text-gray-800 w-4 h-4" /> Next.js
          </span>{" "}
          on the front,{" "}
          <span className="inline-flex items-center gap-1 border font-medium border-gray-300 px-2  rounded-xl bg-gray-200">
            <FaNodeJs className="text-green-500 w-4 h-4  " /> Node.js
          </span>
          ,{" "}
          <span className="inline-flex items-center gap-1 border font-medium border-gray-300 px-2  rounded-xl bg-gray-200">
            <BiLogoTypescript className="text-blue-600 w-4 h-4" /> TypeScript
          </span>
          , and{" "}
          <span className="inline-flex items-center gap-1 border font-medium border-gray-300 px-2  rounded-xl bg-gray-200">
            <BiLogoPostgresql className="text-blue-700 w-4 h-4" /> PostgreSQL
          </span>{" "}
          on the back, all shipped inside{" "}
          <span className="inline-flex items-center gap-1 border font-medium border-gray-300 px-2  rounded-xl bg-gray-200">
            <FaDocker className="text-blue-400 w-4 h-4" /> Docker
          </span>
          . I focus on writing code that's easy to maintain, fast to run, and
          doesn't wake you up at 3am.
        </p>
      </div>

      {/* get in touch section */}
      <div className="flex mt-5">
        <button className="flex border border-gray-400 text-xs font-medium text-gray-700 px-2 py-1 rounded-lg mt-2 items-center gap-2">
          <TiDocumentText className="w-3 h-4 text-gray-800" />
          <span className="text-xs">Resume/CV</span>
        </button>
        <button className="flex border border-gray-400 text-xs font-medium bg-gray-900 text-gray-200 px-2 py-1 rounded-lg mt-2 items-center gap-2 ml-3">
          <FaPaperPlane className="w-3 h-4 text-gray-200" />
          <span className="text-xs">Get in Touch</span>
        </button>
      </div>

      {/* social links */}
      <div className="flex items-center gap-4 mt-5">
        <Tooltip content="LinkedIn">
          <a
            href="https://www.linkedin.com/in/sudip-neupane/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-5 h-5 text-blue-600" />
          </a>
        </Tooltip>
        <Tooltip content="GitHub">
          <a
            href="https://github.com/sudipneupane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5 text-gray-800" />
          </a>
        </Tooltip>
        <Tooltip content="Gmail">
          <a
            href="https://www.gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail className="w-5 h-5 text-red-500" />
          </a>
        </Tooltip>
        <Tooltip content="Viber">
          <a
            href="https://www.viber.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaViber className="w-5 h-5 text-blue-500" />
          </a>
        </Tooltip>
        <Tooltip content="WhatsApp">
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="w-5 h-5 text-green-600" />
          </a>
        </Tooltip>
      </div>

      <div>
        <Marquee />
      </div>
    </section>
  );
}
