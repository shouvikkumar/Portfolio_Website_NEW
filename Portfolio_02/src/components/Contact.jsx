import { useState } from 'react';
import Section from './Section';
import Reveal from './Reveal';
import { profile } from '../data';

const links = [
  { icon: '✉', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: '📞', label: 'Phone', value: profile.phone, href: profile.phoneHref },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: profile.linkedin.label,
    href: profile.linkedin.href,
    bg: 'bg-gradient-to-br from-[#0077b5] to-[#00a0dc]',
  },
  {
    icon: 'GH',
    label: 'GitHub',
    value: profile.github.label,
    href: profile.github.href,
    bg: 'bg-gradient-to-br from-[#333] to-[#555]',
  },
];

const inputCls =
  'w-full rounded-xl border border-white/[0.07] bg-white/[0.04] px-[18px] py-[13px] font-sans text-[.82rem] text-ink outline-none transition placeholder:text-muted focus:border-a1/45 focus:bg-a1/5';
const labelCls = 'text-[.63rem] uppercase tracking-[.1em] text-muted2';

const empty = { name: '', email: '', subject: '', message: '' };

export default function Contact({ onToast }) {
  const [form, setForm] = useState(empty);
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      onToast('⚠ Please fill all fields!');
      return;
    }
    setSending(true);
    // TODO: replace with a real request (EmailJS, Formspree, your own API…)
    setTimeout(() => {
      setSending(false);
      setForm(empty);
      onToast('✓ Message sent! Reply within 24h 🚀');
    }, 1200);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's work" accent="together." className="bg-bg1">
      <div className="grid grid-cols-1 items-start gap-20 md:grid-cols-2">
        <Reveal>
          <p className="mb-9 text-[.84rem] leading-[1.9] text-muted2">
            I'm actively looking for entry-level front-end opportunities. If you have a project, an
            opening, or just want to talk about web development — I'd love to hear from you.
            Replies within 24 hours. 🚀
          </p>
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="glass flex items-center gap-4 rounded-[14px] px-5 py-4 text-[.8rem] text-ink no-underline transition hover:translate-x-1.5 hover:border-a1/30 hover:bg-a1/[.07]"
              >
                <div
                  className={`grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[10px] text-[.9rem] ${
                    l.bg || 'grad-bg'
                  }`}
                >
                  {l.icon}
                </div>
                <div className="min-w-0">
                  <span className="mb-0.5 block text-[.6rem] uppercase tracking-[.08em] text-muted">
                    {l.label}
                  </span>
                  <span className="block truncate text-[.78rem]">{l.value}</span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <form onSubmit={submit} className="flex flex-col gap-3.5" noValidate>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className={labelCls}>Name</label>
                <input id="name" className={inputCls} placeholder="Your name" value={form.name} onChange={set('name')} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className={labelCls}>Email</label>
                <input id="email" type="email" className={inputCls} placeholder="your@email.com" value={form.email} onChange={set('email')} />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className={labelCls}>Subject</label>
              <input id="subject" className={inputCls} placeholder="Job / Collaboration / Project" value={form.subject} onChange={set('subject')} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className={labelCls}>Message</label>
              <textarea id="message" className={`${inputCls} min-h-[110px] resize-none`} placeholder="Tell me about the opportunity..." value={form.message} onChange={set('message')} />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="grad-bg mt-1 self-start rounded-full px-8 py-3.5 font-sans text-[.88rem] font-bold text-white transition hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(124,109,250,.4)] disabled:opacity-70"
            >
              {sending ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
