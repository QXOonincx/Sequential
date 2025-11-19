// NavBar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Diensten", href: "/onze-diensten" },
  { label: "Proces", href: "/process" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "#contact" },
];

const NavBar: React.FC = () => {
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
          Vraag offerte aan
        </a>
      </div>
    </header>
  );
};

export default NavBar;
