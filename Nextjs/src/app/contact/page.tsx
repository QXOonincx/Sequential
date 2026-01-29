import type { Metadata } from "next";
import ContactSection from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact — Sequential",
  description:
    "Neem contact op met Sequential voor een snelle, moderne website die converteert. Vraag een vrijblijvende offerte aan of stel je vraag.",
  alternates: {
    canonical: "https://sequentialwebsites.com/contact",
  },
  openGraph: {
    title: "Contact — Sequential",
    description:
      "Neem contact op met Sequential voor een vrijblijvende offerte of meer informatie.",
    url: "https://sequentialwebsites.com/contact",
    siteName: "Sequential",
    type: "website",
  },
};

export default function Page() {
  return <ContactSection />;
}