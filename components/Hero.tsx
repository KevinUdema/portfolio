import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-background to-background px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading with fade-in animation */}
        <div className={`transition-all duration-1000 `}>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Hi, I&apos;m Kevin
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            This is my portfolio, showcasing my work as a front-end developer.
          </p>
        </div>

        {/* CTA Button with staggered animation */}
        <div className={`transition-all duration-1000 delay-300 `}>
          <Link
            href="#projects"
            className="inline-block px-8 py-3 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            View my work
          </Link>
        </div>

        {/* Scroll indicator with gentle animation */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 
        `}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-foreground/50">
              Scroll to explore
            </span>
            <svg
              className="w-5 h-5 text-foreground/50 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
