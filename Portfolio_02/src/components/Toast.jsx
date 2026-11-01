export default function Toast({ message, show }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`grad-bg pointer-events-none fixed bottom-7 left-1/2 z-[9999] -translate-x-1/2 whitespace-nowrap rounded-full px-6 py-3 text-[.8rem] font-semibold text-white transition-transform duration-[400ms] ease-[cubic-bezier(.175,.885,.32,1.275)] ${
        show ? 'translate-y-0' : 'translate-y-[70px]'
      }`}
    >
      {message}
    </div>
  );
}
