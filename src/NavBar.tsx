import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./CSS/index.css";
import logo from "./Images/logo.png";
import { NavLink, Link } from "react-router-dom";

type NavItem = {
  labelKey: string;
  href: string;
};

const navLinks: NavItem[] = [
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
        <Link to="/" className="sq-logo" aria-label="Go to homepage">
          <img src={logo} alt="Sequential" className="sq-logo-image" />
        </Link>

        {/* Desktop navigatie */}
        <nav className="sq-nav sq-nav-desktop">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `sq-nav-link ${isActive ? "is-active" : ""}`
                }
                end={link.href === "/"}
              >
                {t(link.labelKey)}
              </NavLink>
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

          <button className={`sq-lang-btn ${i18n.language}`} onClick={toggleLanguage}>
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
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `sq-nav-link ${isActive ? "is-active" : ""}`
                }
                end={link.href === "/"}
                onClick={() => setIsMobileOpen(false)}
              >
                {t(link.labelKey)}
              </NavLink>
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
