"use client";

import React from "react";
import "@/styles/index.css";
import "@/styles/dots.css"; // ✅ dots background
import NavBar from "./NavBar";
import ContactForm from "./ContactForm";
import { useTranslation, Trans } from "react-i18next";
// import { Helmet } from "react-helmet-async";

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* ✅ Dot pattern background */}
      <div className="sq-bg-dots" aria-hidden="true" />

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

        <main style={{ minHeight: "90vh" }}>
          <div
            className="sq-container sq-contact-grid"
            style={{ marginTop: "3rem" }}
          >
            <div>
              <h2>{t("contact.title")}</h2>
              <p>{t("contact.text")}</p>
              <p className="sq-contact-note">
                <Trans i18nKey="contact.note">
                  Liever mailen? Stuur ons een bericht via
                  <a href="mailto:info@sequentialwebsites.com">
                    info@sequentialwebsites.com
                  </a>
                </Trans>
              </p>
            </div>

            <ContactForm />
          </div>
        </main>

        <footer className="sq-footer">
          <div className="sq-container sq-footer-inner">
            <p>{t("footer.copy", { year: new Date().getFullYear() })}</p>
            <p className="sq-footer-secondary">
              {t("footer.secondary")}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactSection;
