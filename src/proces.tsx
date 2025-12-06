import React from "react";
import "./CSS/index.css";
import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";

const Process: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="sq-root">
      <NavBar />
      <main>
        <div className="sq-container">
          <div className="sq-section-header">
            <h2>{t("process.title")}</h2>
            <p>{t("process.subtitle")}</p>
          </div>

          <ol className="sq-steps">
            <li className="sq-step">
              <span className="sq-step-number">1</span>
              <div>
                <h3>{t("process.step1.title")}</h3>
                <p>{t("process.step1.desc")}</p>
              </div>
            </li>

            <li className="sq-step">
              <span className="sq-step-number">2</span>
              <div>
                <h3>{t("process.step2.title")}</h3>
                <p>{t("process.step2.desc")}</p>
              </div>
            </li>

            <li className="sq-step">
              <span className="sq-step-number">3</span>
              <div>
                <h3>{t("process.step3.title")}</h3>
                <p>{t("process.step3.desc")}</p>
              </div>
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
};

export default Process;
