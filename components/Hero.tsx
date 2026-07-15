import Image from "next/image";

interface HeroProps {
  name: string;
  introText: string;
  imageSrc: string;
  imageAlt: string;
}

export function Hero({ name, introText, imageSrc, imageAlt }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-t from-slate-800 to-background px-4 py-20">
      <div className="container flex flex-col md:flex-row lg:px-20">
        {/* Left side - Text content */}
        <div className="flex-1 text-center md:text-left">
          {/* Main heading with fade-in animation */}
          <div className="transition-all duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              {name}
            </h1>
            {/* Hello title */}
            <h2 className="text-2xl md:text-5xl">Hello!</h2>
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 leading-relaxed">
              {introText}
            </p>
          </div>
        </div>

        {/* Right side - Profile picture */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-sm aspect-square rounded-3xl overflow-hidden bg-foreground/10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={500}
              className="object-cover object-top"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator*/}
      <div className="absolute bottom-8">
        <div className="flex flex-col items-center">
          <svg
            className="w-7 h-7 text-foreground/50 animate-bounce"
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
    </section>
  );
}
