import { ProjectsCard } from "@/src/components/shared/ui/projectsCard";
import image from "/homepage.png"

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
            <p className="uppercase text-primary text-fluid-md font-bold leading-relaxed mt-5">Explore my projects</p>
        <div className="flex flex-col gap-10 mt-6">
          <ProjectsCard
            title="DevBoard"
            problem="Helps solo devs track tasks without Jira overhead."
            description="A lightweight kanban tool built for individual developers who want fast, frictionless task management without the complexity of enterprise project tools."
            image="/homepage.png"
            liveDemo="https://devboard.sudipneupane.com"
            githubLink="https://github.com/sudipneupane/devboard"
            features={[
              "Drag-and-drop kanban with keyboard support",
              "GitHub PR auto-linking to tasks",
              "Daily digest email summary",
              "Offline-first with local sync",
            ]}
            tech={["React", "Node.js", "PostgreSQL", "Tailwind"]}
          />

          <ProjectsCard
            title="PriceLens"
            problem="Tracks e-commerce price drops and sends real-time alerts."
            description="A price monitoring tool that watches your wishlist items across major retailers 24/7 and notifies you the moment a target price is hit — no more manual checking."
            image="/homepage.png"
            liveDemo="https://pricelens.sudipneupane.com"
            githubLink="https://github.com/sudipneupane/pricelens"
            features={[
              "Scrapes 5 major retailers every 30 minutes",
              "90-day price history chart",
              "Email and push notification alerts",
              "Set custom price drop thresholds",
            ]}
            tech={["Python", "FastAPI", "Redis", "Playwright"]}
          />

          <ProjectsCard
            title="FormForge"
            problem="Build and embed custom forms without writing backend code."
            description="A no-code form builder where users design forms visually, share a link or embed snippet, and collect responses with built-in spam protection and CSV export."
            image="/homepage.png"
            liveDemo="https://formforge.sudipneupane.com"
            githubLink="https://github.com/sudipneupane/formforge"
            features={[
              "Drag-and-drop form builder with 12 field types",
              "One-click embed snippet for any website",
              "reCAPTCHA spam protection built in",
              "CSV and JSON response export",
            ]}
            tech={["Next.js", "Prisma", "MongoDB", "TypeScript"]}
          />

          <ProjectsCard
            title="NoteNest"
            problem="A distraction-free Markdown notes app that syncs across devices."
            description="A minimal note-taking app focused on speed and clarity. Write in Markdown, organize with tags, and access your notes from any device with end-to-end encryption."
            image="/homepage.png"
            liveDemo="https://notenest.sudipneupane.com"
            githubLink="https://github.com/sudipneupane/notenest"
            features={[
              "Live Markdown preview side-by-side",
              "Tag-based organization with fuzzy search",
              "End-to-end encrypted cloud sync",
              "Export to PDF or plain text",
            ]}
            tech={["React", "Firebase", "Marked.js", "PWA"]}
          />
        </div>
      </section>
    );
}
