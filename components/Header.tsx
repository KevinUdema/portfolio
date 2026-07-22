import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full flex items-center justify-center px-4 py-6 bg-background/80 backdrop-blur-sm z-50">
      <div className="container flex justify-end lg:px-20">
        <nav className="flex items-center gap-6">
          <Link
            href="#projects"
            className="text-foreground/70 hover:text-foreground transition-colors text-sm md:text-base"
            title="View my projects"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="text-foreground/70 hover:text-foreground transition-colors text-sm md:text-base"
            title="My experience"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="text-foreground/70 hover:text-foreground transition-colors text-sm md:text-base"
            title="contact me!"
          >
            Contact
          </Link>
          <Link
            href="#hero"
            className="text-foreground/70 hover:text-foreground transition-colors text-sm md:text-base"
            title="Back to top"
          >
            ↑ Top
          </Link>
        </nav>
      </div>
    </header>
  );
}
