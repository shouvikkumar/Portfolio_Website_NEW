import { profile } from '../data';

const delayed = (ms) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  const rows = [
    ['location', 'Tamluk, WB 🇮🇳'],
    ['degree', `BCA · ${profile.gradYear}`],
    ['phone', profile.phone],
    ['focus', 'HTML · CSS · JS'],
  ];

  return (
    <section
      id="hero"
      className="relative z-[1] flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-[60px] pt-[110px] md:px-[52px] md:pb-20 md:pt-[120px]"
    >
      {/* glows */}
      <div className="pointer-events-none absolute -right-[100px] -top-[200px] h-[700px] w-[700px] rounded-full bg-a1/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-[100px] -left-[150px] h-[500px] w-[500px] rounded-full bg-a2/[.12] blur-[120px]" />

      <div className="relative grid grid-cols-1 items-center gap-[60px] lg:grid-cols-[1fr_360px]">
        <div>
          <div
            style={delayed(200)}
            className="glass mb-7 inline-flex w-fit animate-up items-center gap-2 rounded-full px-4 py-[7px] text-[.68rem] uppercase tracking-[.08em] text-muted2 opacity-0"
          >
            <span className="live-dot" /> Open to opportunities · 2025
          </div>

          <h1
            style={delayed(350)}
            className="mb-7 animate-up text-[clamp(3.2rem,7.5vw,7rem)] font-black leading-[.93] tracking-[-.04em] opacity-0"
          >
            <span className="block">SHOUVIK</span>
            <span className="grad-text block">KR. MAITY</span>
            <span className="block text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">
              DEVELOPER
            </span>
          </h1>

          <p
            style={delayed(550)}
            className="mb-10 max-w-[480px] animate-up text-[.9rem] leading-[1.8] text-muted2 opacity-0"
          >
            Aspiring <strong className="font-medium text-ink">Front-End Developer</strong> from
            Tamluk — passionate about crafting clean, interactive web experiences. Fresh{' '}
            <strong className="font-medium text-ink">BCA graduate</strong> with hands-on project
            experience and a hunger to grow fast.
          </p>

          <div style={delayed(750)} className="flex animate-up flex-wrap gap-3.5 opacity-0">
            <a
              href="#projects"
              className="grad-bg rounded-full px-[30px] py-[13px] text-[.82rem] font-semibold text-white no-underline transition hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(124,109,250,.35)]"
            >
              View Projects ↓
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-white/[0.07] px-[30px] py-[13px] text-[.82rem] text-ink no-underline transition hover:border-a1 hover:bg-a1/[.08]"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* profile card */}
        <div
          style={delayed(900)}
          className="glass relative animate-up overflow-hidden rounded-3xl px-8 py-9 opacity-0 shadow-[0_32px_80px_rgba(0,0,0,.5)] backdrop-blur-[20px] before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-a1/[.08] before:to-a2/[.06] before:content-['']"
        >
          <div className="relative mb-6 flex items-center gap-3.5">
            <div className="grad-bg grid h-[52px] w-[52px] shrink-0 place-items-center rounded-[14px] text-[1.3rem] font-black text-white">
              {profile.initials}
            </div>
            <div>
              <div className="text-base font-bold leading-tight">{profile.name}</div>
              <div className="mt-0.5 text-[.68rem] uppercase tracking-[.06em] text-a1">
                // {profile.role}
              </div>
            </div>
          </div>

          <div className="relative mb-5 h-px bg-white/[0.07]" />

          <div className="relative">
            {rows.map(([k, v]) => (
              <div key={k} className="mb-3 flex items-center justify-between text-[.7rem]">
                <span className="font-mono text-muted">{k}</span>
                <span className="font-medium text-ink">{v}</span>
              </div>
            ))}
            <div className="mb-3 flex items-center justify-between gap-3 text-[.7rem]">
              <span className="font-mono text-muted">email</span>
              <span className="truncate text-[.65rem] font-medium text-ink">{profile.email}</span>
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-a3/20 bg-a3/10 px-2.5 py-1 text-[.65rem] text-a3">
              <span className="live-dot" /> Available for work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
