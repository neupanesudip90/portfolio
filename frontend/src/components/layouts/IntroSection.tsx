"use client";
import Image from "next/image";
import profile from "@/public/favicon.png";
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
import { TypeAnimation } from "react-type-animation";

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
          <p className="text-fluid-4xl font-bold text-primary ">
            Sudip Neupane
          </p>
          <p className="text-fluid-sm text-secondary tracking-tight leading-snug">
            Engineer | Full-Stack Developer | Explorer
          </p>
        </div>
      </div>

      {/* intro */}
      <div className="mt-4">
        <div>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              "Hi ! I am Sudip - FULL STACK DEVELOPER.", // initially rendered starting point
              1000,
              "Hi ! I am Sudip - I BUILD WEB APPS.",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "1.25em" }}
            repeat={Infinity}
          />
        </div>

        <p className="text-fluid-sm text-secondary text-justify tracking-tight leading-relaxed">
          I design and build scalable full-stack applications —{" "}
          <span className="inline-flex items-center justify-end gap-1 font-medium ">
            <FaReact className="text-blue-500 w-3 h-3" /> React
          </span>{" "}
          /{" "}
          <span className="inline-flex items-center justify-end gap-1 font-medium ">
            <RiNextjsFill className="text-gray-800 w-3 h-3" /> Next.js
          </span>{" "}
          on the front,{" "}
          <span className="inline-flex items-center justify-end gap-1 font-medium ">
            <FaNodeJs className="text-green-500 w-3 h-3  " /> Node.js
          </span>
          ,{" "}
          <span className="inline-flex items-center justify-end gap-1 font-medium ">
            <BiLogoTypescript className="text-blue-600 w-3 h-3" /> TypeScript
          </span>
          , and{" "}
          <span className="inline-flex items-center justify-end gap-1 font-medium ">
            <BiLogoPostgresql className="text-blue-700 w-3 h-3" /> PostgreSQL
          </span>{" "}
          on the back, all shipped inside{" "}
          <span className="inline-flex items-center justify-end gap-1 font-medium ">
            <FaDocker className="text-blue-400 w-3 h-3" /> Docker
          </span>
          . I focus on writing code that's easy to maintain, fast to run, and
          doesn't wake you up at 3am.
        </p>
      </div>

      {/* get in touch section */}
      <div className="flex mt-5">
        <a
          href="/resume"
          className="flex border border-gray-400 text-fluid-xs font-medium text-gray-700 px-2 py-1 rounded-lg mt-2 items-center gap-2"
        >
          <TiDocumentText className="w-3 h-4 text-secondary" />
          <span className="text-fluid-xs text-secondary">Resume/CV</span>
        </a>
        <button className="flex border border-gray-400 text-fluid-xs font-medium bg-gray-900 text-gray-200 px-2 py-1 rounded-lg mt-2 items-center gap-2 ml-3">
          <FaPaperPlane className="w-3 h-4 text-gray-200" />
          <span className="text-xs">Get in Touch</span>
        </button>
      </div>

      {/* social links */}
      <div className="flex items-center gap-4 mt-5">
        <a
          href="https://www.linkedin.com/in/sudipneupane-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip content="LinkedIn">
            <FaLinkedin className="w-5 h-5 text-blue-500" />
          </Tooltip>
        </a>
        <a
          href="https://github.com/neupanesudip90"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip content="GitHub">
            <FaGithub className="w-5 h-5 text-gray-500" />
          </Tooltip>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=neupanesudip90@gmail.com"
          target="_blank"
          rel="noopener noreferrer" //this 
        >
          <Tooltip content="Gmail">
            <SiGmail className="w-5 h-5 text-red-500" />
          </Tooltip>
        </a>
        <a
          href="viber://chat?number=%2B9779810268020"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip content="Viber">
            <FaViber className="w-5 h-5 text-purple-700" />
          </Tooltip>
        </a>
        <a
          href="https://wa.me/9866270227"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip content="WhatsApp">
            <FaWhatsapp className="w-5 h-5 text-green-600" />
          </Tooltip>
        </a>
      </div>

      <div>
        <Marquee />
      </div>
    </section>
  );
}
