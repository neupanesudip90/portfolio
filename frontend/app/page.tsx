import IntroSection from "@/src/components/layouts/IntroSection";
import Experience from "@/src/components/layouts/experience";
import Projects from "@/src/components/layouts/projects";
import Education from "@/src/components/layouts/education";
import Quotes from "@/src/components/layouts/quotes";

export default function Home() {
  return (
    <div className="bg-">
      <main>
        <IntroSection />
        <Experience />
        <Projects />
        <Education />
        <Quotes />
      </main>
    </div>
  );
}
