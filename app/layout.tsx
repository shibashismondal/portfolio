import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "@/components/ThemeProvider";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shibashis Mondal | Electrical Engineer, MEP Project Execution",
  description:
    "Electrical Engineer with expertise in MEP project execution, power distribution systems, and electrical reliability for industrial and metro rail projects.",
  keywords: [
    "Electrical Engineer",
    "MEP Project Execution",
    "Power Distribution",
    "Metro Rail",
    "Cold Storage",
    "Electrical Maintenance",
  ],
  authors: [{ name: "Shibashis Mondal" }],
  metadataBase: new URL("https://shibashis.in"),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Shibashis Mondal | Electrical Engineer, MEP Project Execution",
    description:
      "Electrical Engineer with expertise in MEP project execution, power distribution systems, and electrical reliability.",
    url: "https://shibashis.in",
    siteName: "Shibashis Mondal Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shibashis Mondal | Electrical Engineer",
    description:
      "Electrical Engineer with expertise in MEP project execution and electrical reliability.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans`}
      >
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <ScrollProgress />
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}