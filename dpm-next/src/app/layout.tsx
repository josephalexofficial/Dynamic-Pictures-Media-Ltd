import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

/** Clean geometric sans — same family feel as modern product UI type */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Dynamic Pictures Media Ltd | Creative Multimedia",
    template: "%s | Dynamic Pictures Media Ltd",
  },
  description:
    "Professional photography, videography, event coverage, and digital creative services based in Kitengela, Kajiado.",
  icons: {
    icon: "/images/brand/logo.jpg",
    apple: "/images/brand/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased bg-sand text-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
