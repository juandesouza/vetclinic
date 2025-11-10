import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BlueCare Vet Clinic | Caring for Your Family's Pets",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
