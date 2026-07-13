import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";

export default function Home() {
  const heroText =
    "Ik ben een front-end developer die er naar streeft om door middel van een sterk probleemoplossend vermogen en veel aandacht voor User Experience de beste gebruikerservaring te realiseren.";
  const heroName = "Kevin Udema";
  const heroImage = {
    src: "/profile2.jpg",
    alt: "Kevin's profile picture",
  };

  return (
    <main className="flex flex-col w-full">
      <Header />
      <Hero
        name={heroName}
        introText={heroText}
        imageSrc={heroImage.src}
        imageAlt={heroImage.alt}
      />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
