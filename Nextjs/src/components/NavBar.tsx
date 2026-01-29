"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import "@/styles/index.css";

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

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const currentLang = i18n?.language || "nl";

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === "nl" ? "en" : "nl");
  };

  const toggleMenu = () => setIsMobileOpen((prev) => !prev);
  const closeMenu = () => setIsMobileOpen(false);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sq-header">
      <div className="sq-container sq-header-inner">
      <Link href="/" className="sq-logo" aria-label="Go to homepage" onClick={closeMenu}>
        <Image
          src="/logo.png"
          alt="Sequential"
          width={140}
          height={40}
          priority
          style={{ height: "auto" }}
        />
      </Link>

        {/* Desktop navigatie */}
        <nav className="sq-nav sq-nav-desktop">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className={`sq-nav-link ${isActive(link.href) ? "is-active" : ""}`}
              >
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
          <Link href="/contact" className="sq-nav-cta sq-nav-cta-desktop" onClick={closeMenu}>
            {t("nav.quote")}
          </Link>

          <button
            className={`sq-lang-btn ${currentLang}`}
            onClick={toggleLanguage}
            type="button"
            aria-label="Change language"
          >
            {currentLang.toUpperCase()}
          </button>

          {/* Hamburger knop (alleen zichtbaar op mobiel in CSS) */}
          <button
            className={`sq-nav-toggle ${isMobileOpen ? "is-open" : ""}`}
            onClick={toggleMenu}
            aria-label="Menu openen of sluiten"
            type="button"
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
                href={link.href}
                className={`sq-nav-link ${isActive(link.href) ? "is-active" : ""}`}
                onClick={closeMenu}
              >
                {t(link.labelKey)}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="sq-nav-link" onClick={closeMenu}>
                {t(link.labelKey)}
              </a>
            )
          )}

          <Link href="/contact" className="sq-nav-cta sq-nav-cta-mobile" onClick={closeMenu}>
            {t("nav.quote")}
          </Link>
        </nav>
      )}
    </header>
  );
}
