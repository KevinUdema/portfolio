import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { heroContent, skills } from "@/data/portfolio";

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
      <Experience />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
