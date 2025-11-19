import "./index.css";
import NavBar from "./NavBar";

import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="sq-root">
        <NavBar />

        <main>

        <div className="sq-container">

      <div className="sq-container sq-about-grid">
        <div>
          <h2>Over Sequential</h2>
          <p>
            We zijn een klein team met één focus: websites bouwen die je bedrijf helpen
            groeien. Geen buzzwords, geen onnodig complexe systemen—maar duidelijke
            structuur, doordacht ontwerp en solide implementatie.
          </p>
        </div>
        <div className="sq-about-box">
          <h3>Waarom klanten met ons werken</h3>
          <ul className="sq-card-list">
            <li>Directe communicatie met de mensen die het werk doen</li>
            <li>Eerlijke tijdlijnen en transparante prijzen</li>
            <li>Technische stack afgestemd op jouw behoeften</li>
            <li>Opties voor langdurige ondersteuning beschikbaar</li>
          </ul>
        </div>
      </div>
      </div>
    </main>
    </div>
  );
};

export default AboutSection;
