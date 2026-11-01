import Section from './Section';
import Reveal from './Reveal';
import Ticker from './Ticker';
import { aboutChips, infoItems, profile } from '../data';

const P = ({ children }) => (
  <p className="mb-[18px] text-[.86rem] leading-[1.9] text-muted2">{children}</p>
);
const B = ({ children }) => <strong className="font-medium text-ink">{children}</strong>;

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="The developer"
      accent="behind the code."
      className="border-y border-white/[0.07] bg-bg1"
    >
      <div className="grid grid-cols-1 items-start gap-[72px] md:grid-cols-2">
        <Reveal>
          <P>
            I'm <B>{profile.name}</B>, a fresh Computer Science graduate from{' '}
            <B>Tamralipta Institute of Management and Technology</B>, Kolkata. My journey into web
            development started with curiosity — and turned into a genuine passion for building
            things people enjoy using.
          </P>
          <P>
            I specialise in <B>front-end development</B> — turning ideas into pixel-perfect,
            interactive interfaces using HTML, CSS, and JavaScript. I believe great UI is not just
            about looks; it's about how something <B>feels to use</B>.
          </P>
          <P>
            Through personal projects like a <B>Photo Converter</B> and an{' '}
            <B>API-powered Music Player</B>, I've sharpened my skills in async JS, file handling,
            responsive layouts, and rigorous debugging.
          </P>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {aboutChips.map((c) => (
              <div
                key={c}
                className="glass flex items-center gap-2 rounded-lg px-4 py-2 text-[.72rem] text-muted2 transition hover:-translate-y-0.5 hover:border-a1 hover:text-ink"
              >
                <span className="h-[5px] w-[5px] rounded-full bg-a1" />
                {c}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-col gap-4">
            {/* profile card */}
            <div className="glass relative flex animate-fadeCard items-center gap-4 overflow-hidden rounded-[18px] px-6 py-[22px] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-a1 before:to-a2 before:content-['']">
              <div className="grad-bg grid h-[52px] w-[52px] shrink-0 place-items-center rounded-[14px] text-[1.2rem] font-black text-white shadow-[0_8px_20px_rgba(124,109,250,.35)]">
                {profile.initials}
              </div>
              <div>
                <div className="text-[.95rem] font-bold leading-snug">{profile.name}</div>
                <div className="mt-0.5 text-[.68rem] uppercase tracking-[.06em] text-a1">
                  {profile.role}
                </div>
              </div>
              <div className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full border border-a3/20 bg-a3/10 px-3 py-[5px] text-[.63rem] text-a3">
                <span className="live-dot" /> Open to Work
              </div>
            </div>

            {/* info grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {infoItems.map((it, idx) => (
                <div
                  key={it.label}
                  style={{ animationDelay: `${(idx + 1) * 50}ms` }}
                  className="glass flex animate-fadeCard flex-col gap-1 rounded-[14px] px-[18px] py-4 transition hover:-translate-y-1 hover:border-a1/30 hover:bg-a1/[.06]"
                >
                  <div className="mb-0.5 text-[1.2rem]">{it.icon}</div>
                  <div className="text-[.6rem] uppercase tracking-[.1em] text-muted">{it.label}</div>
                  <div className="text-[.8rem] font-semibold text-ink">{it.value}</div>
                </div>
              ))}
            </div>

            <Ticker />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
