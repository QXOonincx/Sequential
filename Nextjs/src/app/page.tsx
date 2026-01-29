import type { Metadata } from "next";
import HomePage from "@/components/index";

export const metadata: Metadata = {
  title: "Sequential — Websites die converteren",
  description:
    "Sequential bouwt snelle, moderne websites die er strak uitzien en klanten oplevert. Vraag een vrijblijvende offerte aan.",
  alternates: {
    canonical: "https://sequentialwebsites.com/",
  },
  openGraph: {
    title: "Sequential — Websites die converteren",
    description:
      "Sequential bouwt snelle, moderne websites die er strak uitzien en leads opleveren.",
    url: "https://sequentialwebsites.com/",
    siteName: "Sequential",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}