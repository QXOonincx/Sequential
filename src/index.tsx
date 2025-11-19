import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import AboutSection from "./over-ons";

const HomePage: React.FC = () => {
  return (
    <div className="sq-root">
      {/* Top navigatie */}
      <NavBar />

      <main>
        {/* Hero sectie */}
        <section className="sq-hero">
          <div className="sq-container sq-hero-grid">
            <div className="sq-hero-text">
              <p className="sq-kicker">Webbureau voor groeiende bedrijven</p>
              <h1>
                Websites die er <span className="sq-highlight">strak</span> uitzien en converteren.
              </h1>
              <p className="sq-hero-subtitle">
                Sequential bouwt snelle, moderne websites voor bedrijven die
                meer leads, sterkere branding en een betere online ervaring willen.
              </p>

              <div className="sq-hero-actions">
                <a href="#contact" className="sq-btn sq-btn-primary">
                  Plan een gratis gesprek
                </a>
                <a href="#work" className="sq-btn sq-btn-ghost">
                  Bekijk recente projecten
                </a>
              </div>

              <div className="sq-hero-meta">
                <div>
                  <p className="sq-hero-meta-number">2–4 weken</p>
                  <p className="sq-hero-meta-label">Typische levertijd</p>
                </div>
              </div>
            </div>

            <div className="sq-hero-card">
              <p className="sq-hero-card-title">Wat je krijgt met Sequential</p>
              <ul className="sq-hero-list">
                <li>Aangepast ontwerp, geen standaard template</li>
                <li>Responsieve layouts voor mobiel & desktop</li>
                <li>Snelle laadtijden en SEO-vriendelijke structuur</li>
              </ul>
              <p className="sq-hero-card-note">
                Vertel ons over je bedrijf en we stellen een structuur, visuele richting
                en tijdlijn voor — geheel vrijblijvend.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="sq-section sq-section-alt">
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
        </section>

        {/* Proces sectie */}
        <section id="process" className="sq-section">
          <div className="sq-container">
            <div className="sq-section-header">
              <h2>Ons proces</h2>
              <p>Een helder en eenvoudig traject, zodat je altijd weet wat de volgende stap is.</p>
            </div>

            <ol className="sq-steps sq-steps-small">
              <li className="sq-step">
                <span className="sq-step-number">1</span>
                <div>
                  <h3>Ontdekking & requirements</h3>
                  <p>We leren jouw bedrijf, doelen en wensen kennen en bepalen samen de projectomvang.</p>
                </div>
              </li>
              <li className="sq-step">
                <span className="sq-step-number">2</span>
                <div>
                  <h3>Design & content</h3>
                  <p>Wireframes, visuele richting en contentstructuur worden uitgewerkt.</p>
                </div>
              </li>
              <li className="sq-step">
                <span className="sq-step-number">3</span>
                <div>
                  <h3>Development & lancering</h3>
                  <p>We bouwen, testen en lanceren de website op een soepele manier.</p>
                </div>
              </li>
            </ol>

            <div className="sq-process-cta" style={{ marginTop: "2rem" }}>
              <Link to="/process" className="sq-btn sq-btn-primary">Bekijk het volledige proces →</Link>
            </div>
          </div>
        </section>

        {/* Over ons */}
        <section id="about" className="sq-section sq-section-alt">
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
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="sq-section sq-section-alt">
          <div className="sq-container sq-contact-grid">
            <div>
              <h2>Vertel ons over je project</h2>
              <p>
                Deel enkele details en we komen bij je terug met ideeën,
                een globale tijdlijn en een prijsindicatie.
              </p>
              <p className="sq-contact-note">
                Liever mailen? Stuur ons een bericht via <a href="mailto:hello@sequential.com">hello@sequential.com</a>
              </p>
            </div>

            <form
              className="sq-form"
              onSubmit={(event) => {
                event.preventDefault();
                alert("Formulierverwerking is nog niet gekoppeld.");
              }}
            >
              <div className="sq-form-row">
                <label>
                  Naam
                  <input type="text" name="name" placeholder="Jouw naam" required />
                </label>
              </div>
              <div className="sq-form-row">
                <label>
                  Bedrijf
                  <input type="text" name="company" placeholder="Jouw bedrijf" />
                </label>
              </div>
              <div className="sq-form-row">
                <label>
                  E-mail
                  <input type="email" name="email" placeholder="jij@bedrijf.com" required />
                </label>
              </div>
              <div className="sq-form-row">
                <label>
                  Budget (optioneel)
                  <select name="budget" defaultValue="">
                    <option value="" disabled>Kies een range</option>
                    <option value="2-5k">€2k – €5k</option>
                    <option value="5-10k">€5k – €10k</option>
                    <option value="10-20k">€10k – €20k</option>
                    <option value="20k+">€20k+</option>
                  </select>
                </label>
              </div>
              <div className="sq-form-row">
                <label>
                  Projectdetails
                  <textarea
                    name="details"
                    rows={4}
                    placeholder="Vertel ons over je bedrijf, je doelen en wat je nodig hebt."
                    required
                  />
                </label>
              </div>
              <button type="submit" className="sq-btn sq-btn-primary sq-btn-full">
                Verstuur bericht
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="sq-footer">
        <div className="sq-container sq-footer-inner">
          <p>© {new Date().getFullYear()} Sequential. Alle rechten voorbehouden.</p>
          <p className="sq-footer-secondary">Websites voor bedrijven die willen groeien.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
