import Section from './Section';
import Reveal from './Reveal';
import { projects } from '../data';

function ProjectCard({ project, index }) {
  return (
    <div
      data-cursor
      className="glass group relative h-full overflow-hidden rounded-3xl px-9 py-[38px] transition duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-a1 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:-translate-y-2 hover:border-a1/25 hover:shadow-[0_30px_70px_rgba(0,0,0,.5)] hover:before:opacity-100"
    >
      <div className="absolute right-8 top-8 grid h-[38px] w-[38px] place-items-center rounded-full border border-white/[0.07] text-[.9rem] text-muted transition duration-[250ms] group-hover:rotate-45 group-hover:border-a1 group-hover:bg-a1 group-hover:text-white">
        ↗
      </div>

      <div className="mb-5 flex items-center gap-2 font-mono text-[.65rem] tracking-[.08em] text-a1 after:h-px after:flex-1 after:bg-white/[0.07] after:content-['']">
        Project {String(index + 1).padStart(2, '0')}
      </div>

      <div className="mb-3.5 text-2xl font-extrabold leading-[1.1] tracking-[-.03em]">
        {project.title}
      </div>
      <p className="mb-6 text-[.8rem] leading-[1.8] text-muted2">{project.desc}</p>

      <div className="mb-6 flex flex-col gap-2 rounded-xl bg-white/[0.025] p-[18px]">
        {project.features.map((f) => (
          <div key={f} className="flex items-start gap-2.5 text-[.74rem] text-muted2">
            <span className="shrink-0 text-[.8rem] text-a1">→</span>
            {f}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-a1/20 bg-a1/10 px-[11px] py-[5px] font-mono text-[.63rem] tracking-[.04em] text-a1"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've"
      accent="built."
      className="border-b border-white/[0.07] bg-bg1"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 200}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
