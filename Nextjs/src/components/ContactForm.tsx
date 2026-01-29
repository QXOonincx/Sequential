"use client";

import React, { useRef, useState } from "react";
import "@/styles/index.css";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  return (
    <form
      ref={formRef}
      className="sq-form"
      onSubmit={async (event) => {
        event.preventDefault();
        setLoading(true);
        setStatus("idle");

        try {
          if (!formRef.current) throw new Error("Form not found");

          await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
            publicKey: PUBLIC_KEY,
          });

          formRef.current.reset();
          setStatus("success");
        } catch (err) {
          setStatus("error");
        } finally {
          setLoading(false);
        }
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

      <button type="submit" className="sq-btn sq-btn-primary sq-btn-full" disabled={loading}>
        {loading ? t("contactForm.sending") : t("contactForm.submit")}
      </button>

      {status === "success" && (
        <p style={{ marginTop: 12 }}>{t("contactForm.success")}</p>
      )}
      {status === "error" && (
        <p style={{ marginTop: 12 }}>{t("contactForm.error")}</p>
      )}
    </form>
  );
};

export default ContactForm;
