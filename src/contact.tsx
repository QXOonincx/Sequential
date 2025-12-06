import React from "react";
import "./index.css";
import NavBar from "./NavBar";
import ContactForm from "./ContactForm";
import { useTranslation, Trans } from "react-i18next";

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="sq-root">
      <NavBar />

      <main>
        <div className="sq-container sq-contact-grid" style={{ marginTop: "3rem" }}>
          <div>
            <h2>{t("contact.title")}</h2>
            <p>{t("contact.text")}</p>
            <p className="sq-contact-note">
              <Trans i18nKey="contact.note">
                Liever mailen? Stuur ons een bericht via{" "}
                <a href="mailto:hello@sequential.com">hello@sequential.com</a>
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
