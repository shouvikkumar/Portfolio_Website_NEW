import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [grow, setGrow] = useState(false);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0, raf;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.left = mx + 'px';
        dot.current.style.top = my + 'px';
      }
    };
    const over = (e) => setGrow(!!e.target.closest?.('a,button,[data-cursor]'));
    const loop = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      if (ring.current) {
        ring.current.style.left = rx + 'px';
        ring.current.style.top = ry + 'px';
      }
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    raf = requestAnimationFrame(loop);
    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="[@media(pointer:coarse)]:hidden">
      <div
        ref={dot}
        className={`pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-a1 transition-[width,height] duration-150 ${
          grow ? 'h-4 w-4' : 'h-2 w-2'
        }`}
      />
      <div
        ref={ring}
        className={`pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-a1/50 transition-[width,height] duration-[250ms] ${
          grow ? 'h-[50px] w-[50px]' : 'h-8 w-8'
        }`}
      />
    </div>
  );
}
