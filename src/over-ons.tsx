import "./CSS/index.css";
import NavBar from "./NavBar";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="sq-root">
      <NavBar />

      <main>
        <div className="sq-container sq-about-grid">
          <div>
            <h2>{t("about.title")}</h2>
            <p>{t("about.text")}</p>
          </div>
          <div className="sq-about-box">
            <h3>{t("about.why.title")}</h3>
            <ul className="sq-card-list">
              <li>{t("about.why.list.1")}</li>
              <li>{t("about.why.list.2")}</li>
              <li>{t("about.why.list.3")}</li>
              <li>{t("about.why.list.4")}</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutSection;
