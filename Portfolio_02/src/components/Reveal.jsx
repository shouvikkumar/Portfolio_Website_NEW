import useInView from '../hooks/useInView';

/** Fade/slide-in wrapper. Put hover transforms on a child, not here. */
export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-[800ms] ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-9 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
