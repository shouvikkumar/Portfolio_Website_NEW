import { navLinks, profile } from '../data';

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-white/[0.07] bg-bg/75 px-5 py-4 backdrop-blur-[24px] md:px-[52px] md:py-[18px]">
      <a href="#hero" className="text-[1.05rem] font-bold tracking-[-.02em] text-ink no-underline">
        {profile.logo}
        <em className="not-italic text-a1">.</em>DEV
      </a>

      <ul className="hidden list-none gap-7 md:flex">
        {navLinks.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[.72rem] uppercase tracking-[.06em] text-muted2 no-underline transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={`mailto:${profile.email}`}
        className="grad-bg rounded-full px-5 py-2 text-[.72rem] font-semibold tracking-[.04em] text-white no-underline transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,109,250,.4)]"
      >
        Hire Me →
      </a>
    </nav>
  );
}
