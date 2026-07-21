import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { heroContent, skills, experiences, educations } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Header />
      <Hero
        name={heroContent.name}
        introText={heroContent.introText}
        imageSrc={heroContent.imageSrc}
        imageAlt={heroContent.imageAlt}
      />
      <Skills title="Skills" skillGroups={skills} />
      <section className="relative w-full bg-gradient-to-t from-slate-800 to-background">
        <Experience title="Work experience" xpitem={experiences} />
        <Experience title="Education" xpitem={educations} />
      </section>
      <Projects />
      <Contact />
    </main>
  );
}
