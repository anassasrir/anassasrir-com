import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anass Asrir — Senior SDET Architect & Solutions Digitales",
  description:
    "Portfolio personnel d'Anass Asrir, Senior SDET Architect & Concepteur de solutions digitales. Spécialiste de la qualité logicielle (Shift-Left, automatisation industrielle, IA) et du développement web moderne.",
  keywords: [
    "Anass Asrir",
    "SDET Architect",
    "Quality Assurance",
    "Shift-Left",
    "Automation",
    "Playwright",
    "Cypress",
    "Selenium",
    "Next.js",
    "AI Agents",
  ],
  authors: [{ name: "Anass Asrir", url: "https://anassasrir.com" }],
  creator: "Anass Asrir",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://anassasrir.com",
    title: "Anass Asrir — Senior SDET Architect & Solutions Digitales",
    description:
      "Architecte SDET avec +8 ans d'expérience. Industrialisation de la qualité logicielle, automatisation E2E et architectures web.",
    siteName: "Anass Asrir",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="bg-black text-white selection:bg-white selection:text-black min-h-screen font-mono antialiased">
        {children}
      </body>
    </html>
  );
}
