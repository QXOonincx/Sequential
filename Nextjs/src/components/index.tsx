"use client";

import React from "react";
import "@/styles/index.css";
import Link from "next/link";
// import NavBar from "./NavBar";
import ContactForm from "./ContactForm";
import { useTranslation, Trans } from "react-i18next";
// import { Helmet } from "react-helmet-async";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Full-page animated background (no cards / no extra sections needed) */}
      <div className="sq-bg" aria-hidden="true">
        {/* Soft glows + vignette */}
        <div className="sq-bg-glow" />
        {/* Moving topo lines */}
        <svg
          className="sq-topo"
          viewBox="0 0 1400 900"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <defs>
            {/* Animated turbulence warp (remove seed animation to prevent jumps) */}
            <filter id="warp">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.010"
                numOctaves="2"
                seed="2"
                result="noise"
              >
                <animate
                  attributeName="baseFrequency"
                  dur="7.3s"
                  values="0.008;0.012;0.008"
                  repeatCount="indefinite"
                />
              </feTurbulence>

              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="18"
                xChannelSelector="R"
                yChannelSelector="G"
              >
                <animate
                  attributeName="scale"
                  dur="5.1s"
                  values="14;22;14"
                  repeatCount="indefinite"
                />
              </feDisplacementMap>
            </filter>
          </defs>

          {/* Layer A */}
          <g
            className="layer-a"
            filter="url(#warp)"
            fill="none"
            stroke="rgba(200,255,120,0.10)"
            strokeWidth="1.8"
          >
            <path d="M-80,120 C120,40 240,80 360,40 C520,-10 640,80 760,60 C920,30 1040,-30 1220,60 C1360,130 1500,70 1600,20" />
            <path d="M-120,260 C40,200 160,240 300,200 C460,150 600,250 740,230 C920,200 1020,130 1200,210 C1360,280 1520,220 1640,160" />
            <path d="M-160,420 C0,360 160,420 320,360 C520,280 620,430 780,410 C980,380 1080,300 1240,380 C1400,450 1540,420 1680,330" />
            <path d="M-120,600 C60,520 200,610 360,540 C560,450 720,640 880,600 C1040,570 1140,500 1300,560 C1460,620 1600,590 1740,520" />
            <path d="M-80,760 C120,690 260,760 420,700 C620,620 780,790 940,760 C1100,740 1220,680 1380,720 C1540,770 1660,760 1800,700" />
          </g>

          {/* Layer B */}
          <g
            className="layer-b"
            filter="url(#warp)"
            fill="none"
            stroke="rgba(200,255,120,0.06)"
            strokeWidth="1.4"
          >
            <ellipse cx="980" cy="230" rx="380" ry="270" />
            <ellipse cx="980" cy="230" rx="300" ry="210" />
            <ellipse cx="420" cy="560" rx="340" ry="240" />
            <ellipse cx="420" cy="560" rx="260" ry="180" />
          </g>
        </svg>

        {/* Subtle noise */}
        <div className="sq-bg-noise" />
      </div>

      <div className="sq-root">
        {/* <Helmet> ... </Helmet> */}
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
                  <a href="#contact" className="sq-btn sq-btn-primary">
                    {t("hero.cta1")}
                  </a>
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
                  <p>{t("services.service1.kopje")}</p>
                  <ul className="sq-card-list">
                    <li>{t("services.cards.business.list.1")}</li>
                    <li>{t("services.cards.business.list.2")}</li>
                    <li>{t("services.cards.business.list.3")}</li>
                  </ul>
                </div>

                <div className="sq-card">
                  <h3>{t("services.cards.landing.title")}</h3>
                  <p>{t("services.service2.kopje")}</p>
                  <ul className="sq-card-list">
                    <li>{t("services.cards.landing.list.1")}</li>
                    <li>{t("services.cards.landing.list.2")}</li>
                  </ul>
                </div>

                <div className="sq-card">
                  <h3>{t("services.cards.redesign.title")}</h3>
                  <p>{t("services.service3.kopje")}</p>
                  <ul className="sq-card-list">
                    <li>{t("services.cards.redesign.list.1")}</li>
                    <li>{t("services.cards.redesign.list.2")}</li>
                    <li>{t("services.cards.redesign.list.3")}</li>
                  </ul>
                </div>
              </div>

              <br />

              <Link href="/onze-diensten" className="sq-btn sq-btn-primary">
                {t("services.link")}
              </Link>
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
                <Link href="/proces" className="sq-btn sq-btn-primary">
                  {t("process.cta")}
                </Link>
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
                  <Link href="/over-ons" className="sq-btn sq-btn-primary">
                    {t("about.why.link")}
                  </Link>
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
                    Liever mailen? Stuur ons een bericht via{" "}
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
    </>
  );
};

export default HomePage;
