import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./CSS/index.css";


type NavLink = {
  labelKey: string;
  href: string;
};

const navLinks: NavLink[] = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.services", href: "/onze-diensten" },
  { labelKey: "nav.process", href: "/proces" },
  { labelKey: "nav.about", href: "/over-ons" },
  { labelKey: "nav.contact", href: "/contact" },
];

const NavBar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "nl" ? "en" : "nl");
  };

  const toggleMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  return (
    <header className="sq-header">
      <div className="sq-container sq-header-inner">
        <div className="sq-logo">
          <span className="sq-logo-mark">S</span>
          <span className="sq-logo-text">Sequential</span>
        </div>

        {/* Desktop navigatie */}
        <nav className="sq-nav sq-nav-desktop">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.href} to={link.href} className="sq-nav-link">
                {t(link.labelKey)}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="sq-nav-link">
                {t(link.labelKey)}
              </a>
            )
          )}
        </nav>

        {/* Rechterkant: CTA, taal-knop, hamburger */}
        <div className="sq-header-actions">
          <Link to="/contact" className="sq-nav-cta sq-nav-cta-desktop">
            {t("nav.quote")}
          </Link>

          <button
            className={`sq-lang-btn ${i18n.language}`}
            onClick={toggleLanguage}
          >
            {i18n.language.toUpperCase()}
          </button>

          {/* Hamburger knop (alleen zichtbaar op mobiel in CSS) */}
          <button
            className={`sq-nav-toggle ${isMobileOpen ? "is-open" : ""}`}
            onClick={toggleMenu}
            aria-label="Menu openen of sluiten"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobiel menu – verschijnt onder de header */}
      {isMobileOpen && (
        <nav className="sq-nav-mobile">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                to={link.href}
                className="sq-nav-link"
                onClick={() => setIsMobileOpen(false)}
              >
                {t(link.labelKey)}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="sq-nav-link"
                onClick={() => setIsMobileOpen(false)}
              >
                {t(link.labelKey)}
              </a>
            )
          )}

          <Link
            to="/contact"
            className="sq-nav-cta sq-nav-cta-mobile"
            onClick={() => setIsMobileOpen(false)}
          >
            {t("nav.quote")}
          </Link>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
