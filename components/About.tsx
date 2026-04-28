import { about } from "@/data/portfolio";

export function About() {
  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          About me
        </h2>

        <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
          {about.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {about.highlights.map((highlight, index) => (
            <div
              key={index}
              className="p-6 border border-foreground/10 rounded-lg hover:border-foreground/30 transition-colors duration-300 hover:animate-pulse"
            >
              <p className="text-foreground font-semibold text-center">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
