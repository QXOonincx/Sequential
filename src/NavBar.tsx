import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./CSS/index.css";
import "./CSS/languageToggle.css";

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

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "nl" ? "en" : "nl");
  };

  return (
    <header className="sq-header">
      <div className="sq-container sq-header-inner">
        <div className="sq-logo">
          <span className="sq-logo-mark">S</span>
          <span className="sq-logo-text">Sequential</span>
        </div>

        <nav className="sq-nav">
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

        {/* CTA Button */}
        <Link to="/contact" className="sq-nav-cta">
          {t("nav.quote")}
        </Link>

        {/* Language Switcher */}
        <button
          className={`sq-lang-btn ${i18n.language}`}
          onClick={toggleLanguage}
          style={{ marginLeft: "1rem" }}
        >
          {i18n.language.toUpperCase()}
        </button>
      </div>
    </header>
  );
};

export default NavBar;
