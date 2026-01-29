import type { Metadata } from "next";
import AboutSection from "@/components/over-ons";

export const metadata: Metadata = {
  title: "Over ons — Sequential",
  description:
    "Maak kennis met Sequential. We bouwen snelle, moderne websites die er strak uitzien én converteren. Lees onze aanpak en waarom klanten voor ons kiezen.",
  alternates: {
    canonical: "https://sequentialwebsites.com/over-ons",
  },
  openGraph: {
    title: "Over ons — Sequential",
    description:
      "Maak kennis met Sequential en ontdek hoe wij websites bouwen die converteren.",
    url: "https://sequentialwebsites.com/over-ons",
    siteName: "Sequential",
    type: "website",
  },
};

export default function Page() {
  return <AboutSection />;
}