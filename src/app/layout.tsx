import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlueCare Vet Clinic | Caring for Your Family’s Pets",
  description:
    "Professional veterinary care in Una, Bahia, Brazil. Consultations, vaccinations, grooming, and surgery. Book your appointment today.",
  metadataBase: new URL("https://bluecare-vet.example.com"),
  openGraph: {
    title: "BlueCare Vet Clinic",
    description:
      "Professional veterinary care in Una, Bahia, Brazil. Book your appointment today.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
