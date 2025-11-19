import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export const ServicesSection: React.FC = () => (
  <section id="services" className="sq-section sq-section-alt">
    <header className="sq-header">
      <div className="sq-container sq-header-inner">
        <div className="sq-logo">
          <span className="sq-logo-mark">S</span>
          <span className="sq-logo-text">Sequantial</span>
        </div>
        <nav className="sq-nav">
          <Link to="/" className="sq-nav-link">Home</Link>
        </nav>
      </div>
    </header>

    <div className="sq-container">
      <div className="sq-section-header">
        <h2>Diensten</h2>
        <p>
          Van eerste concept tot lancering: wij verzorgen elke stap van je website,
          zodat jij je kunt richten op het runnen van je bedrijf.
        </p>
      </div>

      <div className="sq-grid-3">
        <div className="sq-card">
          <h3>Bedrijfswebsites</h3>
          <p>
            Professionele, moderne websites die duidelijk uitleggen wie je bent,
            wat je doet en waarom je anders bent dan de rest.
          </p>
          <ul className="sq-card-list">
            <li>Aangepaste lay-outs & messaging</li>
            <li>Contact- & leadformulieren</li>
            <li>Meerpagina- of one-page websites</li>
          </ul>
        </div>

        <div className="sq-card">
          <h3>Landingspagina’s</h3>
          <p>
            Hoog converterende pagina’s voor campagnes, productlanceringen
            en speciale aanbiedingen.
          </p>
          <ul className="sq-card-list">
            <li>Conversiegerichte content</li>
            <li>Analytics- & tracking-setup</li>
            <li>Geschikt voor A/B-testen</li>
          </ul>
        </div>

        <div className="sq-card">
          <h3>Redesign & optimalisatie</h3>
          <p>
            Al een website? Wij vernieuwen het design en verbeteren de prestaties
            zonder je bestaande content te verliezen.
          </p>
          <ul className="sq-card-list">
            <li>UX- & UI-verbeteringen</li>
            <li>Snelheids- & SEO-optimalisatie</li>
            <li>Herstructurering van content</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
