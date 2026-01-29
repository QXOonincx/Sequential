import type { Metadata } from "next";
import ServicesSection from "@/components/onze-diensten";

export const metadata: Metadata = {
  title: "Onze diensten — Sequential",
  description:
    "Ontdek de diensten van Sequential: professionele websites, conversiegerichte landingspagina’s en redesigns. Snel, modern en resultaatgericht.",
  alternates: {
    canonical: "https://sequentialwebsites.com/onze-diensten",
  },
  openGraph: {
    title: "Onze diensten — Sequential",
    description:
      "Professionele websites, landingspagina’s en redesigns die converteren.",
    url: "https://sequentialwebsites.com/onze-diensten",
    siteName: "Sequential",
    type: "website",
  },
};

export default function Page() {
  return <ServicesSection />;
}