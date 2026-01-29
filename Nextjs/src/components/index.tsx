"use client";


import React from "react";
import "@/styles/index.css";
import Link from "next/link";
import NavBar from "./NavBar";
import ContactForm from "./ContactForm";
import { useTranslation, Trans } from "react-i18next";
// import { Helmet } from "react-helmet-async";

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (

    <div className="sq-root">
      {/* <Helmet>
        <title>{t("seo.home.title", "Sequential — Websites die converteren")}</title>
        <meta
          name="description"
          content={t(
            "seo.home.description",
            "Sequential bouwt snelle, moderne websites die er strak uitzien en leads opleveren. Vraag een vrijblijvende offerte aan."
          )}
        />
      </Helmet> */}
      {/* <NavBar /> */}

      <main>
        {/* Hero */}
        <section className="sq-hero">
          <div className="sq-container sq-hero-grid">
            <div className="sq-hero-text">
              <p className="sq-kicker">{t("hero.kicker")}</p>
              <h1>
                <Trans i18nKey="hero.title">
                  Websites die er <span className="sq-highlight">strak</span> uitzien en converteren.
                </Trans>
              </h1>
              <p className="sq-hero-subtitle">{t("hero.subtitle")}</p>

              <div className="sq-hero-actions">
                <a href="#contact" className="sq-btn sq-btn-primary">{t("hero.cta1")}</a>
                {/* <a href="#work" className="sq-btn sq-btn-ghost">{t("hero.cta2")}</a> */}
                {/* deze a tag hierboven kunnen we uncommenten zodra we echt projecten hebben die we kunnen laten zien */}
              </div>

              <div className="sq-hero-meta">
                <div>
                  <p className="sq-hero-meta-number">{t("hero.meta.time")}</p>
                  <p className="sq-hero-meta-label">{t("hero.meta.label")}</p>
                </div>
              </div>
            </div>

            <div className="sq-hero-card">
              <p className="sq-hero-card-title">{t("hero.card.title")}</p>
              <ul className="sq-hero-list">
                <li>{t("hero.card.list.1")}</li>
                <li>{t("hero.card.list.2")}</li>
                <li>{t("hero.card.list.3")}</li>
              </ul>
              <p className="sq-hero-card-note">{t("hero.card.note")}</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="sq-section sq-section-alt">
          <div className="sq-container">
            <div className="sq-section-header">
              <h2>{t("services.title")}</h2>
              <p>{t("services.subtitle")}</p>
            </div>

            <div className="sq-grid-3">
              <div className="sq-card">
                <h3>{t("services.cards.business.title")}</h3>
                <p>Professional, modern websites...</p>
                <ul className="sq-card-list">
                  <li>{t("services.cards.business.list.1")}</li>
                  <li>{t("services.cards.business.list.2")}</li>
                  <li>{t("services.cards.business.list.3")}</li>
                </ul>
              </div>

              <div className="sq-card">
                <h3>{t("services.cards.landing.title")}</h3>
                <p>Effective landing pages...</p>
                <ul className="sq-card-list">
                  <li>{t("services.cards.landing.list.1")}</li>
                  <li>{t("services.cards.landing.list.2")}</li>
                </ul>
              </div>

              <div className="sq-card">
                <h3>{t("services.cards.redesign.title")}</h3>
                <p>Already have a website?</p>
                <ul className="sq-card-list">
                  <li>{t("services.cards.redesign.list.1")}</li>
                  <li>{t("services.cards.redesign.list.2")}</li>
                  <li>{t("services.cards.redesign.list.3")}</li>
                </ul>
              </div>
            </div>
            <br />
            <Link href="/onze-diensten" className="sq-btn sq-btn-primary">{t("services.link")}</Link>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="sq-section">
          <div className="sq-container">
            <div className="sq-section-header">
              <h2>{t("process.title")}</h2>
              <p>{t("process.subtitle")}</p>
            </div>

            <ol className="sq-steps sq-steps-small">
              <li className="sq-step">
                <span className="sq-step-number">1</span>
                <div>
                  <h3>{t("process.step1.title")}</h3>
                  <p>{t("process.step1.desc")}</p>
                </div>
              </li>
              <li className="sq-step">
                <span className="sq-step-number">2</span>
                <div>
                  <h3>{t("process.step2.title")}</h3>
                  <p>{t("process.step2.desc")}</p>
                </div>
              </li>
              <li className="sq-step">
                <span className="sq-step-number">3</span>
                <div>
                  <h3>{t("process.step3.title")}</h3>
                  <p>{t("process.step3.desc")}</p>
                </div>
              </li>
            </ol>

            <div className="sq-process-cta" style={{ marginTop: "2rem" }}>
              <Link href="/proces" className="sq-btn sq-btn-primary">{t("process.cta")}</Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="sq-section sq-section-alt">
          <div className="sq-container sq-about-grid">
            <div>
              <h2>{t("about.title")}</h2>
              <p>{t("about.text")}</p>
              
              <div className="sq-process-cta" style={{ marginTop: "2rem" }}>
                <Link href="/over-ons" className="sq-btn sq-btn-primary">{t("about.why.link")}</Link>
              </div>
            </div>

            <div className="sq-about-box">
              <h3>{t("about.why.title")}</h3>
              <ul className="sq-card-list">
                <li>{t("about.why.list.1")}</li>
                <li>{t("about.why.list.2")}</li>
                <li>{t("about.why.list.3")}</li>
                <li>{t("about.why.list.4")}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="sq-section sq-section-alt">
          <div className="sq-container sq-contact-grid">
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
        </section>
      </main>

      {/* Footer */}
      <footer className="sq-footer">
        <div className="sq-container sq-footer-inner">
          <p>{t("footer.copy", { year: new Date().getFullYear() })}</p>
          <p className="sq-footer-secondary">{t("footer.secondary")}</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
