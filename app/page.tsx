import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
