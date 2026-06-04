import { skills } from "@/data/portfolio";
import Image from "next/image";

export function Skills() {
  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          Skills
        </h2>

        <div className="flex flex-col gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="flex flex-col md:flex-row gap-8"
            >
              {/* Category Title*/}
              <div className="w-full md:w-2/5 flex-shrink-0">
                <h3 className="text-3xl font-bold text-foreground uppercase tracking-wide">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Items*/}
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
          ))}
        </div>
      </div>
    </section>
  );
}
