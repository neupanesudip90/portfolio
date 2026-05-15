import { Card } from "../shared/card";
import { FaNodeJs } from "react-icons/fa";
import {
  SiExpressdotcom,
  SiMongodb,
  SiSocketdotio,
  SiRedis,
  SiZod,
  SiDocker,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { RiReactjsFill } from "react-icons/ri";

export default function Projects() {
  return (
    <div className="mt-10">
      <p className="text-fluid-xs uppercase tracking-widest text-primary font-semibold mb-6">
        projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          image="/homepage.png"
          title="Mock API"
          description="Build and test API endpoints without touching a backend. Define your routes, set your responses, and instantly get a working endpoint that returns real-looking data. No server setup, no configuration — just start building and let your frontend move at its own pace."
          githubLinks="https://github.com/neupanesudip90/mock-api"
          hostingLinks="https://mock-api-topaz.vercel.app/"
          techStack={[
            {
              name: "Next.js",
              icon: <RiNextjsFill className="text-gray-800 w-4 h-4" />,
            },
            {
              name: "TypeScript",
              icon: <BiLogoTypescript className="text-blue-600 w-4 h-4" />,
            },
            {
              name: "Node.js",
              icon: <FaNodeJs className="text-green-500 w-4 h-4" />,
            },
            {
              name: "Express.js",
              icon: <SiExpressdotcom className="text-gray-700 w-4 h-4" />,
            },
            {
              name: "PostgreSQL",
              icon: <BiLogoPostgresql className="text-blue-700 w-4 h-4" />,
            },
            {
              name: "Redis",
              icon: <SiRedis className="text-red-500 w-4 h-4" />,
            },
            {
              name: "Docker",
              icon: <SiDocker className="text-blue-500 w-4 h-4" />,
            },
          ]}
        />
        <Card
          image="/hospital-web.png"
          title="Clinic Appointment System"
          description="A clinic appointment system where patients book appointments by selecting a department and available doctor. Doctors can review incoming requests and accept or reject them. Admins manage the platform by adding or removing doctors, keeping up to date."
          githubLinks="https://github.com/neupanesudip90/hospital-web"
          hostingLinks="https://hospital-web-pi.vercel.app/"
          techStack={[
            {
              name: "React.js",
              icon: <RiReactjsFill className="text-cyan-400 w-4 h-4" />,
            },
            {
              name: "Node.js",
              icon: <FaNodeJs className="text-green-500 w-4 h-4" />,
            },
            {
              name: "Express.js",
              icon: <SiExpressdotcom className="text-gray-700 w-4 h-4" />,
            },
            {
              name: "MongoDB",
              icon: <SiMongodb className="text-green-600 w-4 h-4" />,
            },
          ]}
        />
        <Card
          image="/chat-app.png"
          title="Unichat"
          description="A real-time chat app where each conversation runs in an isolated room. Messages persist in MongoDB, so history loads on refresh. Auth is handled with HTTP-only cookies, and online presence plus typing indicators update instantly via Socket.io."
          githubLinks="https://github.com/neupanesudip90/chatting-app"
          hostingLinks="https://user.github.io/repo"
          techStack={[
            {
              name: "React.js",
              icon: <RiReactjsFill className="text-cyan-400 w-4 h-4" />,
            },
            {
              name: "Node.js",
              icon: <FaNodeJs className="text-green-500 w-4 h-4" />,
            },
            {
              name: "Socket.io",
              icon: <SiSocketdotio className="text-gray-800 w-4 h-4" />,
            },
            {
              name: "MongoDB",
              icon: <SiMongodb className="text-green-600 w-4 h-4" />,
            },
          ]}
        />
        <Card
          image="/student.png"
          title="Student Management System"
          description="A student management system where admins and staff can add, update, and manage student records through a clean dashboard. Includes search and filter to quickly find students, with JWT-secured endpoints and role-based access to keep data protected."
          githubLinks="https://github.com/neupanesudip90/student-Management-system"
          hostingLinks="https://student-management-system-theta-nine.vercel.app/"
          techStack={[
            {
              name: "React.js",
              icon: <RiReactjsFill className="text-cyan-400 w-4 h-4" />,
            },
            {
              name: "Node.js",
              icon: <FaNodeJs className="text-green-500 w-4 h-4" />,
            },
            {
              name: "Express.js",
              icon: <SiExpressdotcom className="text-gray-700 w-4 h-4" />,
            },
            {
              name: "MongoDB",
              icon: <SiMongodb className="text-green-600 w-4 h-4" />,
            },
          ]}
        />
      </div>
    </div>
  );
}
