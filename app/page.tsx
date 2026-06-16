import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
