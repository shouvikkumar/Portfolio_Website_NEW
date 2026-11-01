import Section from './Section';
import useInView from '../hooks/useInView';
import { skills } from '../data';

function SkillCard({ skill, animate, delay }) {
  return (
    <div className="glass group relative overflow-hidden rounded-[18px] px-[26px] py-[30px] transition duration-300 hover:-translate-y-[7px] hover:border-a1/30 hover:shadow-[0_20px_50px_rgba(124,109,250,.12)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-a1/[.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative mb-3.5 block text-[1.7rem]">{skill.icon}</span>
      <div className="relative mb-1.5 text-[.95rem] font-bold">{skill.name}</div>
      <div className="relative mb-4 text-[.65rem] uppercase tracking-[.1em] text-muted2">
        {skill.level}
      </div>
      <div className="relative h-0.5 overflow-hidden rounded-sm bg-white/[0.06]">
        <div
          className="grad-bg h-full rounded-sm transition-[width] duration-[1400ms] ease-[cubic-bezier(.4,0,.2,1)]"
          style={{ width: animate ? `${skill.pct}%` : 0, transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView(0.3);

  return (
    <Section
      id="skills"
      eyebrow="Core Skills"
      title="What I"
      accent="work with."
      className="border-b border-white/[0.07]"
    >
      <div ref={ref} className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {skills.map((s, i) => (
          <SkillCard key={s.name} skill={s} animate={inView} delay={200 + i * 60} />
        ))}
      </div>
    </Section>
  );
}
