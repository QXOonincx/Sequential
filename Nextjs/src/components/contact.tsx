"use client";

import React from "react";
import "@/styles/index.css";
import NavBar from "./NavBar";
import ContactForm from "./ContactForm";
import { useTranslation, Trans } from "react-i18next";
// import { Helmet } from "react-helmet-async";


export const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="sq-root">
      {/* <Helmet>
        <title>{t("seo.contact.title", "Contact — Sequential")}</title>
        <meta
          name="description"
          content={t(
            "seo.contact.description",
            "Neem contact op met Sequential voor een vrijblijvende offerte of advies over je website. We reageren snel."
          )}
        />
      </Helmet> */}

      <main>
        <div className="sq-container sq-contact-grid" style={{ marginTop: "3rem" }}>
          <div>
            <h2>{t("contact.title")}</h2>
            <p>{t("contact.text")}</p>
            <p className="sq-contact-note">
              <Trans i18nKey="contact.note">
                
                <a href="mailto:info@sequentialwebsites.com">info@sequentialwebsites.com</a>
              </Trans>
            </p>
          </div>

          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default ContactSection;
