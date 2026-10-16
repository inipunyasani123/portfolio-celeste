'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { projects } from '@/lib/data';

const CATS = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
const MotionLink = motion.create(Link);

export default function WorkPage() {
  const [cat, setCat] = useState('All');
  const reduce = useReducedMotion();
  const list = useMemo(() => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)), [cat]);
  const count = (c) => (c === 'All' ? projects.length : projects.filter((p) => p.category === c).length);

  return (
    <main>
      <PageHeader kicker="Work" title="Selected projects." sub="Six live demo sites: menus and recipe cards, an invitation, and two link pages. Each opens a short case study and the site itself." />
      <section className="px-6 pb-16 pt-4 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap gap-x-6 gap-y-1 md:mb-12" role="group" aria-label="Filter projects">
            {CATS.map((c) => (
              <button key={c} type="button" onClick={() => setCat(c)} aria-pressed={cat === c} className={`min-h-11 border-b text-sm uppercase tracking-[0.15em] transition ${cat === c ? 'border-clay text-clay' : 'border-transparent text-ink/70 hover:text-ink'}`}>
                {c} <sup className="text-[0.7em] tracking-normal">{count(c)}</sup>
              </button>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">{list.length} projects shown</p>
          <motion.div layout={!reduce} className="grid gap-12 md:grid-cols-2">
            <AnimatePresence mode="popLayout" initial={false}>
              {list.map((p) => (
                <MotionLink key={p.slug} href={`/work/${p.slug}`} layout={!reduce} initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, scale: 0.97 }} transition={{ duration: reduce ? 0 : 0.4 }} className="group block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                    <Image src={p.image} alt="" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover object-top transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h2 className="font-serif text-2xl text-ink">{p.title}</h2>
                    <span className="shrink-0 text-xs uppercase tracking-[0.2em] text-ink/70">{p.category} · {p.year}</span>
                  </div>
                  <p className="mt-1 text-ink/75">{p.desc}</p>
                </MotionLink>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
