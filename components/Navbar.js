'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { nav } from '@/lib/data';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href) => (href === '/' ? pathname === '/' : !!pathname && pathname.startsWith(href));
  const links = nav.slice(0, -1);

  // Esc menutup menu ponsel; pindah halaman juga menutupnya.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/80 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl tracking-tight text-ink">Celeste</Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? 'page' : undefined}
              className={`text-sm tracking-wide transition ${isActive(l.href) ? 'text-clay' : 'text-ink/70 hover:text-ink'}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full border border-ink px-5 py-2 text-sm tracking-wide text-ink transition hover:bg-ink hover:text-cream">
            Contact
          </Link>
        </div>

        <button type="button" className="-mr-2 grid h-11 w-11 place-items-center rounded-xl text-ink md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open} aria-controls="menu-ponsel">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
          <div
            id="menu-ponsel"
            className="menu-in overflow-hidden border-t border-ink/10 bg-cream px-6 py-3 md:hidden"
          >
            {nav.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} aria-current={isActive(l.href) ? 'page' : undefined} className={`block py-2.5 text-sm tracking-wide ${isActive(l.href) ? 'text-clay' : 'text-ink/70'}`}>
                {l.label}
              </Link>
            ))}
          </div>
      )}
    </header>
  );
}
