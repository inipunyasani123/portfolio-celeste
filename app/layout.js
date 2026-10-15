import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], style: ["normal", "italic"] });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Celeste — Brand Designer & Art Director","description":"Portfolio template for Celeste, a fictional brand designer and art director: quiet editorial case studies that link to six live demo sites, plus essays on menus, recipe cards, and invitations.","inLanguage":"en"};

export const metadata = {
  metadataBase: new URL("https://portfolio-celeste.pintuweb.id"),
  title: { default: "Celeste — Brand Designer & Art Director", template: "%s — Celeste" },
  description: "Portfolio template for Celeste, a fictional brand designer and art director: quiet editorial case studies that link to six live demo sites, plus essays on menus, recipe cards, and invitations.",
  applicationName: "Celeste",
  keywords: ["brand designer", "art director", "editorial design", "brand identity", "portfolio"],
  authors: [{ name: "Celeste" }],
  creator: "Celeste",
  publisher: "Celeste",
  alternates: { canonical: "https://portfolio-celeste.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-celeste.pintuweb.id",
    siteName: "Celeste",
    title: "Celeste — Brand Designer & Art Director",
    description: "Portfolio template for Celeste, a fictional brand designer and art director: quiet editorial case studies that link to six live demo sites, plus essays on menus, recipe cards, and invitations.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Celeste — Brand Designer & Art Director" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Celeste — Brand Designer & Art Director",
    description: "Portfolio template for Celeste, a fictional brand designer and art director: quiet editorial case studies that link to six live demo sites, plus essays on menus, recipe cards, and invitations.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <div className="grain" aria-hidden="true" />
          <Navbar />
          {children}
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="About this demo site" style={{ display: 'block', margin: 0, padding: '12px 76px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          A demo site by PintuWeb — names and content are fictional.{' '}
          <a href="https://www.pintuweb.id/en/contact?demo=celeste" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Get a site like this →</a>
        </aside>
        </body>
    </html>
  );
}
