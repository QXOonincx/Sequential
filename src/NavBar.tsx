// NavBar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Services", href: "/onze-diensten" },
  { label: "Process", href: "/process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const NavBar: React.FC = () => {
  return (
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
  );
};

export default NavBar;
