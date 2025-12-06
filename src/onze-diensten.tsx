import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";

export const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="sq-root">
      <NavBar />

      <main>
        <div className="sq-container">
          <div className="sq-section-header">
            <h2>{t("services.title")}</h2>
            <p>{t("services.subtitle")}</p>
          </div>

          <div className="sq-grid-3">
            <div className="sq-card">
              <h3>{t("services.cards.business.title")}</h3>
              <p>{t("services.cards.business.desc")}</p>
              <ul className="sq-card-list">
                <li>{t("services.cards.business.list.1")}</li>
                <li>{t("services.cards.business.list.2")}</li>
                <li>{t("services.cards.business.list.3")}</li>
              </ul>
            </div>

            <div className="sq-card">
              <h3>{t("services.cards.landing.title")}</h3>
              <p>{t("services.cards.landing.desc")}</p>
              <ul className="sq-card-list">
                <li>{t("services.cards.landing.list.1")}</li>
                <li>{t("services.cards.landing.list.2")}</li>
              </ul>
            </div>

            <div className="sq-card">
              <h3>{t("services.cards.redesign.title")}</h3>
              <p>{t("services.cards.redesign.desc")}</p>
              <ul className="sq-card-list">
                <li>{t("services.cards.redesign.list.1")}</li>
                <li>{t("services.cards.redesign.list.2")}</li>
                <li>{t("services.cards.redesign.list.3")}</li>
              </ul>
            </div>
          </div>

          <br />
          <Link to="/proces" className="sq-btn sq-btn-primary">{t("services.link")}</Link>
        </div>
      </main>
    </div>
  );
};

export default ServicesSection;
