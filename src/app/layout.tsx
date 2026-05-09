import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

export const metadata: Metadata = {
  title: "Aces Auto Bodyshop | Brooklyn's Most Trusted Collision Repair",
  description:
    "GEICO ARX Trusted & I-CAR Gold Certified auto body shop in Brooklyn, NY. Serving the community since 2014. Free estimates. Call (718) 676-4600.",
  keywords:
    "auto body shop Brooklyn, collision repair Brooklyn, GEICO certified body shop, I-CAR Gold Brooklyn, car paint Brooklyn, dent repair Brooklyn, Gravesend auto body",
  openGraph: {
    title: "Aces Auto Bodyshop | Brooklyn's Most Trusted Collision Repair",
    description:
      "GEICO ARX Trusted & I-CAR Gold Certified auto body shop in Brooklyn, NY. 11+ years serving the community. Free estimates.",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: "Aces Auto Bodyshop",
  url: "https://bespoke-gecko-daaf44.netlify.app",
  telephone: "(718) 676-4600",
  email: "Acesbodyshop718@yahoo.com",
  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
  address: {
    "@type": "PostalAddress",
    streetAddress: "60 Gravesend Neck Rd",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11223",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.5958,
    longitude: -73.9741,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "15:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "400",
    bestRating: "5",
  },
  priceRange: "$$",
  hasMap: "https://maps.google.com/?q=Aces+Auto+Bodyshop+60+Gravesend+Neck+Rd+Brooklyn+NY+11223",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a1628] text-slate-200">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
