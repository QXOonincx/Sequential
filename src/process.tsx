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
            <Link to="/">← Back to Home</Link>
            <div className="sq-section-header">
              <h2>How we work</h2>
              <p>A clear, simple process with regular check-ins so you always know what happens next.</p>
            </div>

            <ol className="sq-steps">
              <li className="sq-step">
                <span className="sq-step-number">1</span>
                <div>
                  <h3>Discovery & requirements</h3>
                  <p>We learn about your business, target audience, and goals. Together we define pages, features, and style direction.</p>
                </div>
              </li>
              <li className="sq-step">
                <span className="sq-step-number">2</span>
                <div>
                  <h3>Design & content</h3>
                  <p>We prepare wireframes and visual design. You give feedback, we refine. If needed, we help with content structure and copy.</p>
                </div>
              </li>
              <li className="sq-step">
                <span className="sq-step-number">3</span>
                <div>
                  <h3>Development & launch</h3>
                  <p>We build the website, test it on modern browsers and devices, and support you with launch and hand-off.</p>
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
