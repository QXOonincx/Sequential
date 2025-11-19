import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export const ServicesSection: React.FC = () => (

    <div className="sq-root">
        <NavBar />

    <main>
          <div className="sq-container">
            <div className="sq-section-header">
              <h2>Diensten</h2>
              <p>
                Van eerste concept tot livegang: wij verzorgen elke stap van je website,
                zodat jij je kunt richten op je bedrijf.
              </p>
            </div>

            <div className="sq-grid-3">
              <div className="sq-card">
                <h3>Bedrijfswebsites</h3>
                <p>
                  Professionele, moderne websites die helder uitleggen wie je bent,
                  wat je doet en waarom je anders bent.
                </p>
                <ul className="sq-card-list">
                  <li>Custom layouts & messaging</li>
                  <li>Contact- & leadformulieren</li>
                  <li>Meerdere pagina’s of one-pagers</li>
                </ul>
              </div>

              <div className="sq-card">
                <h3>Landingspagina’s</h3>
                <p>
                    Effectieve landingspagina’s die resultaten leveren voor campagnes,
                     productlanceringen en promoties.
                </p>
                <ul className="sq-card-list">
                  <li>Conversiegerichte content</li>
                  <li>Volledige analytics- en tracking-opzet</li>
                </ul>
              </div>

              <div className="sq-card">
                <h3>Redesign & optimalisatie</h3>
                <p>
                  Al een website? Wij vernieuwen het uiterlijk en verbeteren
                  prestaties zonder inhoud te verliezen.
                </p>
                <ul className="sq-card-list">
                  <li>UX & UI verbeteringen</li>
                  <li>Snelheids- & SEO-optimalisatie</li>
                  <li>Herstructurering van content</li>
                </ul>
              </div>
            </div>
            <br />
            <Link to="/process" className="sq-btn sq-btn-primary">Lees meer →</Link>

          </div>
      </main>
    </div>
);

export default ServicesSection;
