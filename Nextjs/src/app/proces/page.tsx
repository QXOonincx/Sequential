import type { Metadata } from "next";
import Process from "@/components/proces";

export const metadata: Metadata = {
  title: "Ons proces — Sequential",
  description:
    "Ontdek het proces van Sequential: van strategie en design tot ontwikkeling en oplevering. Transparant, snel en gericht op conversie.",
  alternates: {
    canonical: "https://sequentialwebsites.com/proces",
  },
  openGraph: {
    title: "Ons proces — Sequential",
    description:
      "Zo bouwen wij websites die er strak uitzien en converteren.",
    url: "https://sequentialwebsites.com/proces",
    siteName: "Sequential",
    type: "website",
  },
};

export default function Page() {
  return <Process />;
}