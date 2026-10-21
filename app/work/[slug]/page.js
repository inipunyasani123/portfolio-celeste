import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { projects, getProject } from '@/lib/data';
import { pageMeta, caseDesc, SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: 'Project not found' };
  return pageMeta({ title: `Case study: ${p.title}`, description: caseDesc(p), path: `/work/${p.slug}`, image: `/og/work/${p.slug}.jpg` });
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const next = projects[(projects.findIndex((x) => x.slug === slug) + 1) % projects.length];

  const ld = {
    '@context': 'https://schema.org', '@type': 'CreativeWork', name: p.title, headline: `Case study: ${p.title}`, description: caseDesc(p),
    url: `${SITE_URL}/work/${p.slug}`, image: `${SITE_URL}/og/work/${p.slug}.jpg`, dateCreated: p.year, inLanguage: 'en',
    author: { '@id': `${SITE_URL}/#person` }, about: { '@type': 'WebSite', name: p.title, url: p.url },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHeader kicker={`${p.category} · ${p.year}`} title={p.title} sub={p.summary} />
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden border border-ink/10">
            <Image src={p.image} alt={`Screens from the ${p.title} live demo`} fill priority fetchPriority="high" sizes="(max-width:1024px) 100vw, 60vw" className="object-cover object-top" />
          </div>
          <aside className="h-fit border-t border-ink/20 pt-6">
            <dl className="space-y-4 text-sm">
              <div><dt className="text-xs uppercase tracking-[0.25em] text-clay">Project</dt><dd className="mt-1 font-serif text-lg text-ink">{p.client}</dd></div>
              <div><dt className="text-xs uppercase tracking-[0.25em] text-clay">Role</dt><dd className="mt-1 font-serif text-lg text-ink">{p.role}</dd></div>
              <div><dt className="text-xs uppercase tracking-[0.25em] text-clay">Year</dt><dd className="mt-1 font-serif text-lg text-ink">{p.year}</dd></div>
            </dl>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm tracking-wide text-cream transition hover:bg-clay">
              Open the live site <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <p className="mt-3 text-xs text-ink/70">A live demo project. Opens in a new tab.</p>
          </aside>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-serif text-2xl text-ink">The challenge</h2>
            <p className="mt-3 leading-relaxed text-ink/75">{p.challenge}</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-ink">What I did</h2>
            <ul className="mt-3 space-y-3">
              {p.work.map((w) => <li key={w} className="flex gap-2 text-ink/75"><Check size={18} className="mt-0.5 shrink-0 text-clay" aria-hidden="true" />{w}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-ink">Outcome</h2>
            <p className="mt-3 leading-relaxed text-ink/75">{p.outcome}</p>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-8">
          <Link href="/work" className="inline-flex min-h-11 items-center gap-2 text-sm tracking-wide text-ink underline-offset-4 hover:underline"><ArrowLeft size={16} aria-hidden="true" /> All work</Link>
          <Link href={`/work/${next.slug}`} className="inline-flex min-h-11 items-center gap-2 text-sm tracking-wide text-ink underline-offset-4 hover:underline">Next: {next.title} <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
