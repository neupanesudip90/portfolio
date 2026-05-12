import IntroSection from "@/src/components/layouts/IntroSection";
import Experience from "@/src/components/layouts/experience";
import Projects from "@/src/components/layouts/projects";
import Education from "@/src/components/layouts/education";
import Quotes from "@/src/components/layouts/quotes";
import {CTASection, Footer} from "@/src/components/layouts/footer";
export default function Home() {
  return (
    <div className="bg-">
      <main>
        <IntroSection />
        <Experience />
        <Projects />
        <Education />
        <Quotes />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
