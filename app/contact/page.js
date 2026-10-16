'use client';
import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { profile } from '@/lib/data';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const doneRef = useRef(null);
  useEffect(() => { if (sent) doneRef.current?.focus(); }, [sent]);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return; setSent(true); };
  const field = 'w-full border-b border-ink/30 bg-transparent px-1 py-3 text-base text-ink transition placeholder:text-ink/60 focus:border-clay focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay';
  const label = 'block text-xs uppercase tracking-[0.2em] text-ink/70';

  return (
    <main>
      <PageHeader kicker="Contact" title="Let’s begin a conversation." sub="For new projects, collaborations, or a simple hello." />
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <Info icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <Info icon={MapPin} label="Studio" value={profile.location} />
            <div className="border-t border-ink/10 pt-6">
              <p className="font-serif text-xl italic text-ink">A good first note</p>
              <p className="mt-2 leading-relaxed text-ink/75">What you are making, who it is for, and the habit it should keep: the menu board, the recipe card, the invitation. A rough date helps too.</p>
            </div>
          </div>
          <div>
            {sent ? (
              <div className="border border-ink/10 p-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-clay text-cream"><Check size={28} aria-hidden="true" /></div>
                <h2 ref={doneRef} tabIndex={-1} className="mt-5 font-serif text-3xl text-ink outline-none">Thank you.</h2>
                <p className="mt-2 text-ink/75">This is a portfolio template, {form.name}, so your note wasn’t actually sent. In a live version, it arrives straight in the owner’s inbox.</p>
                <button type="button" onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }} className="mt-6 min-h-11 rounded-full border border-ink px-6 py-2.5 text-sm tracking-wide transition hover:bg-ink hover:text-cream">Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-7">
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="f-name" className={label}>Name</label>
                    <input id="f-name" name="name" value={form.name} onChange={handle} autoComplete="name" required className={field} />
                  </div>
                  <div>
                    <label htmlFor="f-email" className={label}>Email</label>
                    <input id="f-email" type="email" name="email" value={form.email} onChange={handle} autoComplete="email" required className={field} />
                  </div>
                </div>
                <div>
                  <label htmlFor="f-message" className={label}>About the project</label>
                  <textarea id="f-message" name="message" value={form.message} onChange={handle} placeholder="A menu, a recipe card, an invitation…" rows={5} required className={`${field} resize-none`} />
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <button type="submit" className="min-h-12 rounded-full bg-ink px-8 py-3.5 text-sm tracking-wide text-cream transition hover:bg-clay">Send message →</button>
                  <p className="text-xs text-ink/70">Demo form: nothing is sent or stored.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 text-clay"><Icon size={20} aria-hidden="true" /></span>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-ink/70">{label}</p>
        <p className="mt-1 font-serif text-xl text-ink">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
