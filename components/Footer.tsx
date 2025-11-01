import Link from "next/link";
import { navigationLinks } from "@/lib/data";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "YouTube", href: "https://www.youtube.com" },
  { label: "Podcast", href: "https://www.spotify.com" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-midnight/90 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-4">
          <Link href="#top" className="flex items-center gap-2 font-heading text-lg font-semibold text-white">
            <span className="rounded-lg bg-mint/10 px-2 py-1 text-mint">MW</span>
            Moneywise Academy
          </Link>
          <p className="text-sm text-sand/60">
            Your home for empowering financial education rooted in clarity, confidence, and community accountability.
          </p>
          <p className="text-xs text-sand/40">© {new Date().getFullYear()} Moneywise Academy. All rights reserved.</p>
        </div>
        <div className="grid flex-1 gap-10 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-mint/80">Navigate</h4>
            <ul className="mt-4 space-y-3 text-sm text-sand/60">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-mint">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-mint/80">Social</h4>
            <ul className="mt-4 space-y-3 text-sm text-sand/60">
              {socials.map((social) => (
                <li key={social.label}>
                  <Link href={social.href} className="transition hover:text-mint" target="_blank" rel="noreferrer">
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-mint/80">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-sand/60">
              <li>
                <Link href="mailto:hello@moneywise.academy" className="transition hover:text-mint">
                  hello@moneywise.academy
                </Link>
              </li>
              <li className="text-sand/50">Office hours: Wed 6pm ET · Sat 11am ET</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
