export default function Section({ id, eyebrow, title, accent, className = '', children }) {
  return (
    <section
      id={id}
      className={`relative z-[1] px-5 py-20 md:px-[52px] md:py-[110px] ${className}`}
    >
      <div className="mb-3.5 inline-flex items-center gap-2.5 text-[.65rem] uppercase tracking-[.14em] text-a1 before:h-px before:w-5 before:bg-a1 before:content-['']">
        {eyebrow}
      </div>
      <h2 className="mb-14 text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-.035em]">
        {title} <span className="grad-text">{accent}</span>
      </h2>
      {children}
    </section>
  );
}
