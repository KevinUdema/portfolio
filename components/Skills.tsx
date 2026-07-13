// This component has two functions. One to get every category and its skills
// and one to loop over them and render them on the page. Seperated so I can reuse skillgroup if
// I ever want to render a single skillgroup somewhere else. Skills might not be the best name
// but at them moment its all I use it for

import Image from "next/image";
import type { Skill } from "@/data/portfolio";

interface SkillsProps {
  title: string;
  skillGroups: Skill[];
}

interface SkillGroupProps {
  skillGroup: Skill;
}

// Skillgroup component gets every category and its items.
function SkillGroup({ skillGroup }: SkillGroupProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-2/5 flex-shrink-0">
        <h3 className="text-3xl font-bold text-foreground uppercase tracking-wide">
          {skillGroup.category}
        </h3>
      </div>

      <div className="w-full md:w-3/5">
        <ul className="flex flex-wrap gap-4 text-lg">
          {skillGroup.items.map((item) => (
            <li
              key={item.name}
              className="text-foreground/70 hover:text-foreground transition-colors duration-300 cursor-default flex items-center gap-2"
            >
              <Image
                src={item.logo}
                alt={`${item.name} logo`}
                width={25}
                height={25}
                className="brightness-90 invert"
              />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Loops through the skillGroups and renders each SkillGroup component.
export function Skills({ title, skillGroups }: SkillsProps) {
  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          {title}
        </h2>

        <div className="flex flex-col gap-8">
          {skillGroups.map((skillGroup) => (
            <SkillGroup key={skillGroup.category} skillGroup={skillGroup} />
          ))}
        </div>
      </div>
    </section>
  );
}
