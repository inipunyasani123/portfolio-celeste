import { pageMeta, SITE_NAME } from '@/lib/seo';

// Judul pakai { default, template } supaya halaman di bawahnya tetap berakhiran " — Celeste".
const meta = pageMeta({ title: 'Work', description: "Six case studies by Celeste: menus, recipe cards, invitations, and link pages, each with the brief, what was made, and a link to the live demo.", path: '/work' });
export const metadata = { ...meta, title: { default: 'Work', template: `%s — ${SITE_NAME}` } };

export default function Layout({ children }) {
  return children;
}
