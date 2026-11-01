import Section from './Section';
import Reveal from './Reveal';
import { education } from '../data';

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Where I"
      accent="studied."
      className="border-b border-white/[0.07]"
    >
      <Reveal>
        <div
          data-cursor
          className="glass relative grid grid-cols-1 items-center gap-5 overflow-hidden rounded-3xl px-6 py-8 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-gradient-to-b before:from-a1 before:to-a2 before:content-[''] md:grid-cols-[auto_1fr_auto] md:gap-10 md:p-[52px]"
        >
          <div className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-a1/25 bg-gradient-to-br from-a1/20 to-a2/20 text-[2rem]">
            🎓
          </div>
          <div>
            <div className="mb-1.5 text-[1.35rem] font-extrabold tracking-[-.025em]">
              {education.degree}
            </div>
            <div className="mb-1 text-[.82rem] text-muted2">{education.university}</div>
            <div className="flex items-center gap-1.5 text-[.7rem] text-muted">
              📍 {education.location}
            </div>
          </div>
          <div className="md:text-right">
            <span className="grad-text block text-[2.2rem] font-black leading-none tracking-[-.04em]">
              {education.year}
            </span>
            <span className="mt-1 block text-[.62rem] uppercase tracking-[.1em] text-muted">
              Graduated
            </span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
