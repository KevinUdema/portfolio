"use client";

import { projects } from "@/data/portfolio";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="w-full py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          My projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col hover:animate-pulse"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg bg-foreground/5 aspect-video">
                {/* SVG Placeholder */}
                <Image
                  src="/window.svg"
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                {project.title}
              </h3>

              <p className="text-foreground/70 mb-4 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technology tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-foreground/10 text-foreground/80 text-xs rounded-full hover:bg-foreground/15 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-foreground/10">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-foreground transition-colors duration-300 text-sm font-medium"
                  >
                    Live demo →
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-foreground transition-colors duration-300 text-sm font-medium"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
