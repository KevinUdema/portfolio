import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Skills & expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="flex flex-col hover:animate-pulse"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2 flex-1">
                {skillGroup.items.map((item) => (
                  <li
                    key={item}
                    className="text-foreground/70 hover:text-foreground transition-colors duration-300 cursor-default"
                  >
                    <span className="text-foreground/40">◆</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
