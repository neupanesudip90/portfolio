import IntroSection from "@/src/components/layouts/IntroSection";
import Experience from "@/src/components/layouts/experience";
import Projects from "@/src/components/layouts/projects";
import Education from "@/src/components/layouts/education";



export const metadata = {
  title: "Sudip Neupane Portfolio",
  description: "A showcase of my work and projects.",
  icons: {
    icon: "/favicon.png",
  },
  keywords:
    "portfolio, projects, works, resume, web development, software engineering",
};


export default function Home() {
  return (
    <div className="bg-">
      <main>
        <IntroSection />
        <Experience />
        <Projects />
        <Education />
     
      </main>
    </div>
  );
}
