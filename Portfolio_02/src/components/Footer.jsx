import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="relative z-[1] flex flex-col items-center gap-2 border-t border-white/[0.07] bg-bg px-5 py-7 text-center text-[.7rem] text-muted md:flex-row md:justify-between md:px-[52px] md:text-left">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>
        Built with <em className="not-italic text-a1">♥</em> using React · Tailwind CSS
      </span>
    </footer>
  );
}
