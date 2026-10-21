# Celeste — Brand Designer & Art Director

Portfolio template for Celeste, a fictional brand designer and art director: quiet editorial case studies that link to six live demo sites, plus essays on menus, recipe cards, and invitations.

**Demo live:** https://portfolio-celeste.pintuweb.id

![Tangkapan layar](public/og.jpg)

> Template portfolio dengan persona fiktif. Semua proyek di dalamnya adalah demo live dari koleksi yang sama; tidak ada klien, testimoni, atau logo merek sungguhan. Formulir kontak hanya demo dan mengatakannya.

## Konsep

Persona fiktif Celeste, desainer merek dan art director. Editorial yang tenang: kertas krem, tinta cokelat tua, aksen terakota, judul serif Playfair Display, dan garis tipis pemisah; mode gelap seperti kertas di bawah lampu redup.

## Isi

- **6 studi kasus** (`/work/[slug]`): tantangan, yang dikerjakan, hasil, dan tautan ke situs live-nya.
- **3 artikel** (`/blog/[slug]`) tentang keputusan desain di proyek-proyek tersebut.
- Angka yang tampil (jumlah proyek, layanan, artikel) dihitung dari isi situs; lama berkarya adalah bagian dari persona fiktif. Tidak ada klaim jumlah klien atau tingkat kepuasan.
- Halaman 404 bergaya sendiri, judul halaman berpola `Halaman — Celeste`, dan sitemap memuat setiap studi kasus dan artikel.

| Studi kasus | Demo live |
| --- | --- |
| Cissy Coffee | https://landing-cissycoffee.pintuweb.id |
| Rasa Nusantara | https://landing-rasanusantara.pintuweb.id |
| CitaRasa Digital | https://landing-citarasa.pintuweb.id |
| Raka & Sinta | https://undangan-wedding.pintuweb.id |
| Dara Puspita | https://linkinbio-arsip.pintuweb.id |
| Kopi Vendra | https://linkinbio-vendra.pintuweb.id |

## Halaman

`/` · `/about` · `/work` · `/work/[slug]` · `/blog` · `/blog/[slug]` · `/contact`

## Gambar & kredit

- `public/images/work/*.webp` — mockup bingkai peramban + ponsel (tiga ponsel untuk halaman tautan dan undangan) berisi
  tangkapan layar demo live di tabel atas, diambil 18 Okt 2026; bingkainya digambar dengan gaya situs ini.
  `public/og/work/*.jpg` adalah versi 1200×630-nya untuk pratinjau tautan.
- `public/images/hero.webp`, `public/images/about.webp` — ilustrasi potret persona fiktif Celeste buatan sendiri
  (gaya cetak risograf dua tinta); sumber SVG-nya di `design/`. Bukan wajah orang sungguhan dan tidak memakai foto stok.
- `public/og.jpg` — tangkapan beranda 1200×630.

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4
- JavaScript
- Framer Motion, Lucide (ikon), next-themes (mode gelap/terang)
- Font: Inter, Playfair Display (next/font)
- SEO: metadata per halaman, Open Graph, JSON-LD (WebSite), sitemap.xml, dan robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk build produksi: `npm run build` lalu `npm start`.

---

Bagian dari koleksi 7 template portfolio personal di [PortalPorto](https://www.pintuweb.id/website-portofolio). Dibuat oleh [PintuWeb](https://www.pintuweb.id), jasa pembuatan website.
