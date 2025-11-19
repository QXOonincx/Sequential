import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Process: React.FC = () => {
  return (
    <div className="sq-root">
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

      <main>
        <section className="sq-section">
          <div className="sq-container">
            <Link to="/">← Terug naar Home</Link>
            <div className="sq-section-header">
              <h2>Hoe wij werken</h2>
              <p>
                Een helder en eenvoudig proces met regelmatige check-ins, zodat je altijd weet wat de volgende stap is.
              </p>
            </div>

            <ol className="sq-steps">
              <li className="sq-step">
                <span className="sq-step-number">1</span>
                <div>
                  <h3>Ontdekking & requirements</h3>
                  <p>
                    We leren jouw bedrijf, doelgroep en doelen kennen. Samen bepalen we pagina’s, functionaliteiten en stijlrichting.
                  </p>
                </div>
              </li>

              <li className="sq-step">
                <span className="sq-step-number">2</span>
                <div>
                  <h3>Design & content</h3>
                  <p>
                    We maken wireframes en visueel ontwerp. Jij geeft feedback, wij verfijnen. Indien gewenst helpen we ook met contentstructuur en copywriting.
                  </p>
                </div>
              </li>

              <li className="sq-step">
                <span className="sq-step-number">3</span>
                <div>
                  <h3>Development & launch</h3>
                  <p>
                    We bouwen de website, testen deze op moderne browsers en apparaten, en ondersteunen je bij de lancering en overdracht.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Process;
