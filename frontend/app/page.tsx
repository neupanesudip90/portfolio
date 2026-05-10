import IntroSection from "@/src/components/layouts/IntroSection";
import Experience from "@/src/components/layouts/experience";
import Projects from "@/src/components/layouts/projects"; 
import Education from "@/src/components/layouts/education";
export default function Home() {
  return (
    <div>
      <main>
        <IntroSection />
        <Experience />
        <Projects />
        <Education />
      </main>
    </div>
  );
}
