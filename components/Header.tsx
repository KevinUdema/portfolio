import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full flex items-center justify-center px-4 py-6 bg-background/80 backdrop-blur-sm z-50">
      <div className="container flex justify-end lg:px-20">
        <nav className="flex items-center gap-6">
          {/* Back to Top */}
          <Link
            href="#hero"
            className="text-foreground/70 hover:text-foreground transition-colors text-sm md:text-base"
            title="Back to top"
          >
            ↑ Top
          </Link>

          {/* Dark Mode Toggle - maybe use later */}
          {/* <button
            className="text-foreground/70 hover:text-foreground transition-colors text-sm md:text-base"
            title="Toggle dark mode"
            aria-label="Toggle theme"
          >
            🌙
          </button> */}

          {/* Language Toggle - maybe use later*/}
          {/* <button
            className="text-foreground/70 hover:text-foreground transition-colors text-sm md:text-base font-medium"
            title="Toggle language"
            aria-label="Toggle language"
          >
            EN
          </button> */}
        </nav>
      </div>
    </header>
  );
}
