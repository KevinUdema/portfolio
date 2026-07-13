"use client";

import { useState } from "react";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="experience" className="w-full py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          My experience
        </h2>

        <div className="flex flex-col gap-4">
          {experiences.map((item) => {
            const isOpen = openId === item.id;

            return (
              <article
                key={item.id}
                className="rounded-3xl border border-foreground/10 bg-foreground/5 transition-shadow duration-300 hover:shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-6"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1">
                    <p className="text-sm uppercase tracking-[0.25em] text-foreground/60 mb-2">
                      {item.where}
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mt-3">
                      {item.timeframe}
                    </p>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-2xl text-foreground/80 transition-colors duration-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-foreground/10 px-6 pt-3 pb-6 text-foreground/80 text-sm leading-relaxed ">
                    {item.details}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
