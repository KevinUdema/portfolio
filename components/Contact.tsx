"use client";

import { contactLinks } from "@/data/portfolio";

export function Contact() {
  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-pulse">
          Let&apos;s work together
        </h2>

        <p className="text-lg text-foreground/70 mb-12 leading-relaxed">
          I&apos;m always interested in hearing about new projects and
          opportunities. Feel free to reach out if you&apos;d like to
          collaborate or just chat about web development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="px-6 py-3 border border-foreground/30 text-foreground rounded-lg hover:bg-foreground/5 hover:border-foreground/60 transition-all duration-300 font-medium hover:animate-pulse"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
