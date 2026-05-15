import { ProjectsCard } from "@/src/components/shared/ui/projectsCard";
import image from "/homepage.png";

export const metadata = {
  title: "Projects - Sudip Neupane",
  description: "Explore my projects and case studies.",
  icons: {
    icon: "/favicon.png",
  },
  keywords:
    "projects, case studies, sudip neupane projects, software engineer projects, web development projects",
};

export default function Projects() {
  return (
    <section>
      <p className="uppercase text-primary text-fluid-md font-bold leading-relaxed mt-5">
        Explore my projects
      </p>
      <div className="flex flex-col gap-10 mt-6">
        <ProjectsCard
          title="Mock API Studio"
          problem="Frontend developers blocked waiting on backend APIs to be ready."
          description="Build and test API endpoints without touching a backend. Define your routes, set your responses, and instantly get a working endpoint that returns real-looking data. No server setup, no configuration — just start building and let your frontend move at its own pace."
          image="/homepage.png"
          liveDemo="https://mock-api-topaz.vercel.app/"
          githubLink="https://github.com/neupanesudip90/mock-api"
          features={[
            "Create custom endpoints with dynamic response templates",
            "Built-in API testing playground for live request and response testing",
            "Project-specific API keys for secure external access",
            "Analytics dashboard tracking endpoint hits, last-hit timestamps, and p95 response times",
            "Auth with JWT, HTTP-only cookies, Redis sessions, OTP verification, and password reset",
          ]}
          tech={[
            "Next.js",
            "TypeScript",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Redis",
            "Zod",
            "TanStack Query",
            "Zustand",
            "Docker",
          ]}
        />
        <ProjectsCard
          title="Clinic Appointment System"
          problem="No simple way for patients to book appointments and doctors to manage them."
          description="A clinic appointment system where patients book appointments by selecting a department and available doctor. Doctors can review incoming requests and accept or reject them based on availability. Admins manage the platform by adding or removing doctors, keeping the roster up to date."
          image="/hospital-web.png"
          liveDemo="https://hospital-web-pi.vercel.app/"
          githubLink="https://github.com/neupanesudip90/hospital-web"
          features={[
            "Three isolated dashboards for patients, doctors, and admins with route guards",
            "Patients filter doctors by department and track appointment status in real time",
            "Doctors manage an approval queue with a 4-state workflow: pending, approved, rejected, cancelled",
            "Status updates reflect on the patient dashboard in under 200ms via optimistic UI",
            "Express Validator sanitizes all incoming payloads at the route layer",
          ]}
          tech={[
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
          ]}
        />
        <ProjectsCard
          title="Unichat"
          problem="Most chat apps are too heavy or don't isolate conversations properly."
          description="A real-time chat app where each conversation runs in an isolated room. Messages persist in MongoDB so history loads on refresh. Auth is handled with HTTP-only cookies, and online presence plus typing indicators update instantly via Socket.io."
          image="/chat-app.png"
          liveDemo="https://user.github.io/repo"
          githubLink="https://github.com/neupanesudip90/chatting-app"
          features={[
            "Each conversation scoped to a dynamic room ID — messages invisible to other connections",
            "Online presence and typing indicators update via Socket.io in under 100ms",
            "Single normalized Redux store for chat, auth, and user state",
            "Messages persisted to MongoDB so history survives page refreshes",
            "HTTP-only cookies for session tokens — credentials never exposed to JavaScript",
          ]}
          tech={[
            "React.js",
            "Node.js",
            "Socket.io",
            "MongoDB",
            "Redux Toolkit",
          ]}
        />
        <ProjectsCard
          title="Student Management System"
          problem="Managing student records manually is slow and error-prone."
          description="A student management system where admins and staff can add, update, and manage student records through a clean dashboard. Includes search and filter to quickly find students, with JWT-secured endpoints and role-based access to keep data protected."
          image="/student.png"
          liveDemo="https://student-management-system-theta-nine.vercel.app/"
          githubLink="https://github.com/neupanesudip90/student-Management-system"
          features={[
            "Role-based access for admins and staff with protected routes",
            "Add, update, and delete student records from a central dashboard",
            "Search and filter students by name, department, or status",
            "JWT-secured API endpoints to protect all data operations",
          ]}
          tech={["React.js", "Node.js", "Express.js", "MongoDB", "JWT"]}
        />
      </div>
    </section>
  );
}
