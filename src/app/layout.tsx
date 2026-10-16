import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WidowFix } from "@/components/WidowFix";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Canopy Tree Care | ISA Certified Arborist in Madison, WI",
    template: "%s | Canopy Tree Care",
  },
  description:
    "Locally owned tree care in Madison, WI, led by ISA Certified Arborist Josh Knapp. Tree removal, pruning, stump grinding, disease management, and lot clearing across Dane County.",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#14301f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col pb-20 md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-forest-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
        <ScrollToTop />
        <WidowFix />
      </body>
    </html>
  );
}
