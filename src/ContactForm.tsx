import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <form
      className="sq-form"
      onSubmit={(event) => {
        event.preventDefault();
        alert(t("contactForm.alert"));
      }}
    >
      <div className="sq-form-row">
        <label>
          {t("contactForm.name")}
          <input
            type="text"
            name="name"
            placeholder={t("contactForm.namePlaceholder")}
            required
          />
        </label>
      </div>

      <div className="sq-form-row">
        <label>
          {t("contactForm.company")}
          <input
            type="text"
            name="company"
            placeholder={t("contactForm.companyPlaceholder")}
          />
        </label>
      </div>

      <div className="sq-form-row">
        <label>
          {t("contactForm.email")}
          <input
            type="email"
            name="email"
            placeholder={t("contactForm.emailPlaceholder")}
            required
          />
        </label>
      </div>


      <div className="sq-form-row">
        <label>
          {t("contactForm.details")}
          <textarea
            name="details"
            rows={4}
            placeholder={t("contactForm.detailsPlaceholder")}
            required
          />
        </label>
      </div>

      <button type="submit" className="sq-btn sq-btn-primary sq-btn-full">
        {t("contactForm.submit")}
      </button>
    </form>
  );
};

export default ContactForm;
