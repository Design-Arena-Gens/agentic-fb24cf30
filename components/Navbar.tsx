import Link from "next/link";
import { navigationLinks } from "@/lib/data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-midnight/70 border-b border-white/5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="flex items-center gap-2 font-heading text-lg font-semibold tracking-wide">
          <span className="rounded-lg bg-mint/10 px-2 py-1 text-mint">MW</span>
          Moneywise Academy
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-sand/80 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors duration-200 hover:text-mint focus-visible:text-mint"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="#enroll"
          className="rounded-full bg-mint px-4 py-2 text-sm font-semibold text-midnight shadow-glow transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
        >
          Start Free Lesson
        </Link>
      </nav>
    </header>
  );
}
