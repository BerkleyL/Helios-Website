import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brokeredbyberk.com"),

  title: {
    default: "Brokered by Berk | Relocation & Real Estate Guidance",
    template: "%s | Brokered by Berk",
  },

  description:
    "Thoughtful real estate and relocation guidance for professionals and families moving to the Greater Seattle area.",

  applicationName: "Brokered by Berk",

 

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Brokered by Berk",
    title: "Brokered by Berk | Relocation & Real Estate Guidance",
    description:
      "Thoughtful real estate and relocation guidance for professionals and families moving to the Greater Seattle area.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Brokered by Berk | Relocation & Real Estate Guidance",
    description:
      "Thoughtful real estate and relocation guidance for professionals and families moving to the Greater Seattle area.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const realEstateAgentJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://brokeredbyberk.com/#real-estate-agent",

  name: "Brokered by Berk",
  url: "https://brokeredbyberk.com",
  description:
    "Thoughtful real estate and relocation guidance for professionals and families moving to the Greater Seattle area.",

  email: "mailto:berkley@brokeredbyberk.com",
  telephone: "+1-206-693-8497",

  address: {
    "@type": "PostalAddress",
    streetAddress: "707 S Grady Way, Suite 730",
    addressLocality: "Renton",
    addressRegion: "WA",
    postalCode: "98057",
    addressCountry: "US",
  },

  areaServed: {
    "@type": "AdministrativeArea",
    name: "Greater Seattle, Washington",
  },

  knowsLanguage: ["en-US", "zh-CN"],

  founder: {
    "@type": "Person",
    "@id": "https://brokeredbyberk.com/#berkley",
    name: "Berkley",
  },

  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Real estate and relocation inquiries",
    telephone: "+1-206-693-8497",
    email: "berkley@brokeredbyberk.com",
    availableLanguage: ["English", "Chinese"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://brokeredbyberk.com/#website",

  name: "Brokered by Berk",
  url: "https://brokeredbyberk.com",
  description:
    "Real estate and relocation guidance for professionals and families moving to the Greater Seattle area.",

  publisher: {
    "@id": "https://brokeredbyberk.com/#real-estate-agent",
  },

  inLanguage: ["en-US", "zh-CN"],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
       <JsonLd data={realEstateAgentJsonLd} />
        <JsonLd data={websiteJsonLd} />

       {children}
      </body>
    </html>
  );
}
