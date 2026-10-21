// app/page.js
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { profile, stats, services, projects, process } from '@/lib/data';
import loader from '@/image-loader';

// Varian WebP statis untuk <img> potret (bukan next/image karena butuh <picture> art direction).
const srcSetFor = (src, widths) => widths.map((w) => `${loader({ src, width: w })} ${w}w`).join(', ');

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="px-6 pb-12 pt-12 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-end gap-12 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-clay">{profile.role}</p>
              <h1 className="font-serif text-6xl leading-[1.02] text-ink md:text-8xl">
                Timeless<br /><span className="italic text-clay">brands</span>, by design.
              </h1>
              <p className="dropcap mt-7 max-w-md text-lg leading-relaxed text-ink/70">{profile.intro}</p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link href="/work" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-7 text-sm tracking-wide text-cream transition hover:bg-clay active:scale-[0.98]">
                  View Work <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link href="/contact" className="inline-flex min-h-11 items-center text-sm tracking-wide text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-clay">Get in touch</Link>
              </div>
            </div>
            {/* Potret ilustrasi hanya di layar lebar. Di ponsel tipografi yang memimpin; <picture> memberi GIF 1px
                sehingga gambar tidak diunduh dan judul tetap menjadi LCP. */}
            <picture className="relative hidden aspect-[3/4] w-full overflow-hidden rounded-sm md:block">
              <source media="(max-width: 767px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
              <img src={loader({ src: profile.avatar, width: 828 })} srcSet={srcSetFor(profile.avatar, [640, 828, 1080, 1280])} sizes="(min-width: 1200px) 460px, 37vw" alt={profile.avatarAlt} width={1200} height={1600} fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            </picture>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl border-y border-ink/10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`px-6 py-8 text-center ${i < stats.length - 1 ? 'md:border-r md:border-ink/10' : ''}`}>
                <p className="font-serif text-4xl text-ink md:text-5xl">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal><p className="text-xs uppercase tracking-[0.3em] text-clay">What I do</p><h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">A considered practice.</h2></Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="h-full bg-cream p-8">
                  <span className="font-serif text-2xl italic text-clay">0{i + 1}</span>
                  <h3 className="mt-4 font-serif text-2xl text-ink">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/75">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work preview */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <Reveal><h2 className="font-serif text-4xl text-ink md:text-5xl">Selected work.</h2></Reveal>
            <Link href="/work" className="inline-flex min-h-11 shrink-0 items-center gap-1 text-sm tracking-wide text-clay hover:underline">All projects <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {projects.slice(0, 2).map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <Link href={`/work/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                    <Image src={p.image} alt="" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl text-ink">{p.title}</h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-ink/70">{p.category} · {p.year}</span>
                  </div>
                  <p className="mt-1 text-ink/75">{p.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Indeks: enam demo live, satu baris per proyek (bukan daftar klien) */}
      <section className="px-6 py-10 md:py-12">
        <div className="mx-auto max-w-6xl border-y border-ink/10 py-10">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-serif text-3xl text-ink md:text-4xl">The six, in one line each.</h2>
            <p className="text-xs uppercase tracking-[0.3em] text-clay">Live demos · no client logos</p>
          </div>
          <ol className="mt-8 grid gap-x-12 md:grid-cols-2">
            {projects.map((p, i) => (
              <li key={p.slug} className="border-t border-ink/10">
                <Link href={`/work/${p.slug}`} className="group flex items-baseline gap-5 py-4">
                  <span className="w-6 shrink-0 font-serif text-lg italic text-clay">{String(i + 1).padStart(2, '0')}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-xl text-ink transition group-hover:text-clay">{p.title}</span>
                    <span className="mt-0.5 block text-sm text-ink/70">{p.client}</span>
                  </span>
                  <ArrowUpRight size={16} className="shrink-0 text-ink/40 transition group-hover:text-clay" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal><p className="text-xs uppercase tracking-[0.3em] text-clay">How we work</p><h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">A gentle process.</h2></Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <Reveal key={p.step}>
                <div className="h-full bg-cream p-7">
                  <span className="font-serif text-2xl italic text-clay">{p.step}</span>
                  <h3 className="mt-3 font-serif text-xl text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink/75">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
