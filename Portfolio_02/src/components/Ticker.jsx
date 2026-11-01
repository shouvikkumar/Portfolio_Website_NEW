import { useEffect, useState } from 'react';
import { facts } from '../data';

export default function Ticker({ interval = 3000 }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % facts.length), interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <div className="glass flex items-center gap-3.5 overflow-hidden rounded-[14px] px-5 py-3.5">
      <span className="shrink-0 whitespace-nowrap rounded-full border border-a1/20 bg-a1/[.12] px-2.5 py-1 text-[.6rem] uppercase tracking-[.1em] text-a1">
        Fun fact
      </span>
      <div className="flex-1 overflow-hidden">
        {/* key re-mounts the span so the slide animation replays */}
        <span key={i} className="block animate-tickerSlide text-[.78rem] text-muted2">
          {facts[i]}
        </span>
      </div>
    </div>
  );
}
