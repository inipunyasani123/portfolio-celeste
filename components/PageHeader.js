
// Header halaman celeste: editorial, serif besar, label small-caps.
export default function PageHeader({ kicker, title, sub }) {
  return (
    <section className="px-6 pb-10 pt-14 md:pb-12 md:pt-20">
      <div className="mx-auto max-w-6xl">
        <div>
          {kicker && <p className="mb-4 text-xs uppercase tracking-[0.3em] text-clay">{kicker}</p>}
          <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] text-ink md:text-7xl">{title}</h1>
          {sub && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">{sub}</p>}
        </div>
        <div className="rule mt-10" />
      </div>
    </section>
  );
}
