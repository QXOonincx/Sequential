import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "/process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const HomePage: React.FC = () => {
  return (
    <div className="sq-root">
      {/* Top navigation */}
      <header className="sq-header">
        <div className="sq-container sq-header-inner">
          <div className="sq-logo">
            <span className="sq-logo-mark">S</span>
            <span className="sq-logo-text">Sequantial</span>
          </div>

          <nav className="sq-nav">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link key={link.href} to={link.href} className="sq-nav-link">
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className="sq-nav-link">
                  {link.label}
                </a>
              )
            )}
          </nav>

          <a href="#contact" className="sq-nav-cta">
            Get a quote
          </a>
        </div>
      </header>

      <main>
        {/* Hero section */}
        <section className="sq-hero">
          <div className="sq-container sq-hero-grid">
            <div className="sq-hero-text">
              <p className="sq-kicker">Web agency for growing businesses</p>
              <h1>
                Websites that look <span className="sq-highlight">clean</span> and convert.
              </h1>
              <p className="sq-hero-subtitle">
                Sequantial builds fast, modern websites for companies that want
                more leads, better branding, and a smoother online experience.
              </p>

              <div className="sq-hero-actions">
                <a href="#contact" className="sq-btn sq-btn-primary">
                  Schedule a free call
                </a>
                <a href="#work" className="sq-btn sq-btn-ghost">
                  View recent projects
                </a>
              </div>

              <div className="sq-hero-meta">
                <div>
                  <p className="sq-hero-meta-number">50+</p>
                  <p className="sq-hero-meta-label">Websites launched</p>
                </div>
                <div>
                  <p className="sq-hero-meta-number">4.9/5</p>
                  <p className="sq-hero-meta-label">Average client rating</p>
                </div>
                <div>
                  <p className="sq-hero-meta-number">2–4 weeks</p>
                  <p className="sq-hero-meta-label">Typical delivery time</p>
                </div>
              </div>
            </div>

            <div className="sq-hero-card">
              <p className="sq-hero-card-title">What you get with Sequantial</p>
              <ul className="sq-hero-list">
                <li>Custom design, not just a template</li>
                <li>Responsive layouts for mobile & desktop</li>
                <li>Fast load times and SEO-friendly structure</li>
                <li>Easy editing via CMS or hand-off docs</li>
              </ul>
              <p className="sq-hero-card-note">
                Tell us about your company and we’ll propose a structure,
                design direction, and timeline—no commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Process section added to homepage */}
        

        {/* Services */}
        <section id="services" className="sq-section sq-section-alt">
          <div className="sq-container">
            <div className="sq-section-header">
              <h2>Services</h2>
              <p>
                From first draft to launch, we handle every step of your website
                so you can focus on running your business.
              </p>
            </div>

            <div className="sq-grid-3">
              <div className="sq-card">
                <h3>Company websites</h3>
                <p>
                  Professional, modern websites that clearly explain who you
                  are, what you do, and why you're different.
                </p>
                <ul className="sq-card-list">
                  <li>Custom layouts & messaging</li>
                  <li>Contact & lead forms</li>
                  <li>Multi-page or one-page sites</li>
                </ul>
              </div>

              <div className="sq-card">
                <h3>Landing pages</h3>
                <p>
                  High-converting pages for campaigns, product launches, and
                  special offers.
                </p>
                <ul className="sq-card-list">
                  <li>Conversion-focused content</li>
                  <li>Analytics & tracking setup</li>
                  <li>A/B test ready structure</li>
                </ul>
              </div>

              <div className="sq-card">
                <h3>Redesign & optimization</h3>
                <p>
                  Already have a website? We refresh the look and improve
                  performance without losing your content.
                </p>
                <ul className="sq-card-list">
                  <li>UX & UI improvements</li>
                  <li>Speed & SEO clean-up</li>
                  <li>Content restructuring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process section added to homepage */}
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
                  <h3>Development & launch</h3>
                  <p>We bouwen, testen en lanceren de website op een soepele manier.</p>
                </div>
              </li>
            </ol>

            <div className="sq-process-cta" style={{ marginTop: "2rem" }}>
              <Link to="/process" className="sq-btn sq-btn-primary">Bekijk het volledige proces</Link>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="sq-section sq-section-alt">
          <div className="sq-container">
            <div className="sq-section-header">
              <h2>Selected projects</h2>
              <p>
                A small sample of the kind of websites we build. We can adapt
                to your brand, industry, and preferred style.
              </p>
            </div>

            <div className="sq-grid-3">
              <article className="sq-project">
                <div className="sq-project-badge">B2B</div>
                <h3>NovaTech Solutions</h3>
                <p className="sq-project-type">Technology consulting website</p>
                <p className="sq-project-text">
                  Clean, minimal website focused on services, case studies, and
                  lead generation for sales demos.
                </p>
              </article>

              <article className="sq-project">
                <div className="sq-project-badge">Local business</div>
                <h3>GreenLeaf Studio</h3>
                <p className="sq-project-type">Creative studio portfolio</p>
                <p className="sq-project-text">
                  Visual portfolio site with project galleries, social proof,
                  and simple booking form.
                </p>
              </article>

              <article className="sq-project">
                <div className="sq-project-badge">SaaS</div>
                <h3>FlowMetrics</h3>
                <p className="sq-project-type">SaaS product landing page</p>
                <p className="sq-project-text">
                  Single-page landing with pricing, feature highlights, and
                  onboarding flow integrated.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="sq-section">
          <div className="sq-container sq-about-grid">
            <div>
              <h2>About Sequantial</h2>
              <p>
                We're a small team focused on one thing: building websites
                that actually help your business. No buzzwords, no over-complex
                systems—just clear structure, thoughtful design, and solid
                implementation.
              </p>
            </div>
            <div className="sq-about-box">
              <h3>Why clients work with us</h3>
              <ul className="sq-card-list">
                <li>Direct communication with the people doing the work</li>
                <li>Honest timelines and transparent pricing</li>
                <li>Technical stack adapted to your needs</li>
                <li>Long-term support options available</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="sq-section sq-section-alt">
          <div className="sq-container sq-contact-grid">
            <div>
              <h2>Tell us about your project</h2>
              <p>
                Share a few details and we'll get back to you with ideas,
                a rough timeline, and a price range.
              </p>
              <p className="sq-contact-note">
                Prefer email? Reach us at <a href="mailto:hello@sequantial.com">hello@sequantial.com</a>
              </p>
            </div>

            <form
              className="sq-form"
              onSubmit={(event) => {
                event.preventDefault();
                alert("Form submit handler is not connected yet.");
              }}
            >
              <div className="sq-form-row">
                <label>
                  Name
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
              </div>
              <div className="sq-form-row">
                <label>
                  Company
                  <input type="text" name="company" placeholder="Your company" />
                </label>
              </div>
              <div className="sq-form-row">
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@company.com" required />
                </label>
              </div>
              <div className="sq-form-row">
                <label>
                  Budget (optional)
                  <select name="budget" defaultValue="">
                    <option value="" disabled>Select a range</option>
                    <option value="2-5k">€2k – €5k</option>
                    <option value="5-10k">€5k – €10k</option>
                    <option value="10-20k">€10k – €20k</option>
                    <option value="20k+">€20k+</option>
                  </select>
                </label>
              </div>
              <div className="sq-form-row">
                <label>
                  Project details
                  <textarea name="details" rows={4} placeholder="Tell us about your company, your goals, and what you need." required />
                </label>
              </div>
              <button type="submit" className="sq-btn sq-btn-primary sq-btn-full">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="sq-footer">
        <div className="sq-container sq-footer-inner">
          <p>© {new Date().getFullYear()} Sequantial. All rights reserved.</p>
          <p className="sq-footer-secondary">Websites for businesses that want to grow.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
