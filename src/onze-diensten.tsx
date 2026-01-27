import React from "react";
import "./CSS/index.css";
import NavBar from "./NavBar";
import { useTranslation } from "react-i18next";

const OnzeDiensten: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="sq-root">
      <NavBar />

      <main>
        <section className="sq-section">
          <div className="sq-container">
            {/* Header */}
            <div className="sq-section-header">
              <h2>{t("services.title")}</h2>
              <p>{t("services.subtitle")}</p>
            </div>

            {/* Intro */}
            <p className="sq-process-intro">
              {t("services.intro")}
            </p>

            {/* Diensten als steps/cards */}
            <ol className="sq-steps sq-process-steps">
              {/* Dienst 1 */}
              <li className="sq-step sq-process-step">
                <div className="sq-process-step-header">
                  <span className="sq-step-number">1</span>
                  <div>
                    <h3 className="sq-process-step-title">
                      {t("services.service1.title")}
                    </h3>
                    <p className="sq-process-step-summary">
                      {t("services.service1.summary")}
                    </p>
                  </div>
                </div>

                <div className="sq-process-step-body">
                  <p>{t("services.service1.text")}</p>

                  <p className="sq-process-list-title">
                    {t("services.includes")}
                  </p>
                  <ul className="sq-process-list">
                    <li>{t("services.service1.list.1")}</li>
                    <li>{t("services.service1.list.2")}</li>
                    <li>{t("services.service1.list.3")}</li>
                  </ul>
                </div>
              </li>

              {/* Dienst 2 */}
              <li className="sq-step sq-process-step">
                <div className="sq-process-step-header">
                  <span className="sq-step-number">2</span>
                  <div>
                    <h3 className="sq-process-step-title">
                      {t("services.service2.title")}
                    </h3>
                    <p className="sq-process-step-summary">
                      {t("services.service2.summary")}
                    </p>
                  </div>
                </div>

                <div className="sq-process-step-body">
                  <p>{t("services.service2.text")}</p>

                  <p className="sq-process-list-title">
                    {t("services.includes")}
                  </p>
                  <ul className="sq-process-list">
                    <li>{t("services.service2.list.1")}</li>
                    <li>{t("services.service2.list.2")}</li>
                    <li>{t("services.service2.list.3")}</li>
                  </ul>
                </div>
              </li>

              {/* Dienst 3 */}
              <li className="sq-step sq-process-step">
                <div className="sq-process-step-header">
                  <span className="sq-step-number">3</span>
                  <div>
                    <h3 className="sq-process-step-title">
                      {t("services.service3.title")}
                    </h3>
                    <p className="sq-process-step-summary">
                      {t("services.service3.summary")}
                    </p>
                  </div>
                </div>

                <div className="sq-process-step-body">
                  <p>{t("services.service3.text")}</p>

                  <p className="sq-process-list-title">
                    {t("services.includes")}
                  </p>
                  <ul className="sq-process-list">
                    <li>{t("services.service3.list.1")}</li>
                    <li>{t("services.service3.list.2")}</li>
                    <li>{t("services.service3.list.3")}</li>
                  </ul>
                </div>
              </li>
            </ol>

            {/* Outro / CTA */}
            <div className="sq-process-outro">
              <h3>{t("services.outro.title")}</h3>
              <p>{t("services.outro.text")}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OnzeDiensten;
