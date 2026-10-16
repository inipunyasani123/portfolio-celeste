import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { profile, skills, experience, education } from '@/lib/data';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({ title: 'About', description: "About Celeste, a fictional brand designer and art director: a small, deliberate studio for menus, recipe cards, invitations, and link pages.", path: '/about' });

export default function AboutPage() {
  return (
    <main>
      <PageHeader kicker="About" title="A small, deliberate studio." sub={profile.bioShort} />

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image src={profile.about} alt="" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl italic text-ink">Patience &amp; restraint.</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-ink/70">
              {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm tracking-wide text-cream transition hover:bg-clay">
              Ask for a CV <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="font-serif text-4xl text-ink">Skills &amp; craft</h2></Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 md:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={i * 0.1}>
                <div className="h-full bg-cream p-7">
                  <h3 className="mb-4 font-serif text-xl text-ink">{s.group}</h3>
                  <ul className="space-y-1.5">
                    {s.items.map((it) => <li key={it} className="text-ink/70">{it}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="font-serif text-4xl text-ink">Experience</h2></Reveal>
          <div className="mt-10">
            {experience.map((e, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="grid gap-2 border-t border-ink/10 py-7 md:grid-cols-[200px_1fr]">
                  <span className="text-sm uppercase tracking-[0.15em] text-clay">{e.period}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-ink">{e.role} <span className="text-ink/70">— {e.company}</span></h3>
                    <p className="mt-2 max-w-2xl text-ink/75">{e.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14"><h2 className="font-serif text-4xl text-ink">Education</h2></Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border-t border-ink/10 pt-5">
                  <span className="text-sm uppercase tracking-[0.15em] text-clay">{e.period}</span>
                  <h3 className="mt-2 font-serif text-xl text-ink">{e.degree}</h3>
                  <p className="text-sm text-ink/75">{e.school}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
