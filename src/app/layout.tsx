import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aces Auto Bodyshop | Brooklyn's Most Trusted Collision Repair",
  description:
    "GEICO ARX Trusted & I-CAR Gold Certified auto body shop in Brooklyn, NY. Serving the community since 2014. Free estimates. Call (718) 676-4600.",
  keywords:
    "auto body shop Brooklyn, collision repair Brooklyn, GEICO certified body shop, I-CAR Gold Brooklyn, car paint Brooklyn, dent repair Brooklyn",
  openGraph: {
    title: "Aces Auto Bodyshop | Brooklyn's Most Trusted Collision Repair",
    description:
      "GEICO ARX Trusted & I-CAR Gold Certified auto body shop in Brooklyn, NY. 11+ years serving the community. Free estimates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0a1628] text-slate-200">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
