import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { posts } from '@/lib/data';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({ title: 'Journal', description: "Essays by Celeste on chalk menus brought to the screen, recipe cards as a brand, and wedding invitations that work for guests of every age.", path: '/blog' });

export default function BlogPage() {
  return (
    <main>
      <PageHeader kicker="Journal" title="Notes & essays." sub="Reflections on craft, typography, and the slow art of branding." />
      <section className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <Link href={`/blog/${p.slug}`} className="group flex flex-col justify-between gap-3 border-b border-ink/10 py-8 sm:flex-row sm:items-baseline">
                <div className="max-w-2xl">
                  <div className="mb-2 flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-ink/70">
                    <span className="text-clay">{p.category}</span><span>·</span><span>{p.date}</span><span>·</span><span>{p.read}</span>
                  </div>
                  <h2 className="font-serif text-2xl text-ink transition group-hover:text-clay md:text-3xl">{p.title}</h2>
                  <p className="mt-2 text-ink/75">{p.excerpt}</p>
                </div>
                <ArrowUpRight className="hidden shrink-0 text-ink/70 transition group-hover:translate-x-1 group-hover:text-clay sm:block" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
