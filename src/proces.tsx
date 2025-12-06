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
        <section className="sq-section sq-process">
          <div className="sq-container">
            <div className="sq-section-header">
              <h2>{t("process.title")}</h2>
              <p>{t("process.subtitle")}</p>
            </div>

            <p className="sq-process-intro">
              {t("processPage.intro")}
            </p>

            <ol className="sq-steps sq-process-steps">
              {/* Stap 1 */}
              <li className="sq-step sq-process-step">
                <div className="sq-process-step-header">
                  <span className="sq-step-number">1</span>
                  <div>
                    <h3 className="sq-process-step-title">
                      {t("process.step1.title")}
                    </h3>
                    <p className="sq-process-step-summary">
                      {t("process.step1.desc")}
                    </p>
                  </div>
                </div>

                <div className="sq-process-step-body">
                  <p>{t("processPage.step1.long")}</p>

                  <p className="sq-process-list-title">
                    {t("processPage.step1.listTitle")}
                  </p>
                  <ul className="sq-process-list">
                    <li>{t("processPage.step1.list.1")}</li>
                    <li>{t("processPage.step1.list.2")}</li>
                    <li>{t("processPage.step1.list.3")}</li>
                    <li>{t("processPage.step1.list.4")}</li>
                  </ul>
                </div>
              </li>

              {/* Stap 2 */}
              <li className="sq-step sq-process-step">
                <div className="sq-process-step-header">
                  <span className="sq-step-number">2</span>
                  <div>
                    <h3 className="sq-process-step-title">
                      {t("process.step2.title")}
                    </h3>
                    <p className="sq-process-step-summary">
                      {t("process.step2.desc")}
                    </p>
                  </div>
                </div>

                <div className="sq-process-step-body">
                  <p>{t("processPage.step2.long")}</p>

                  <p className="sq-process-list-title">
                    {t("processPage.step2.listTitle")}
                  </p>
                  <ul className="sq-process-list">
                    <li>{t("processPage.step2.list.1")}</li>
                    <li>{t("processPage.step2.list.2")}</li>
                    <li>{t("processPage.step2.list.3")}</li>
                    <li>{t("processPage.step2.list.4")}</li>
                  </ul>
                </div>
              </li>

              {/* Stap 3 */}
              <li className="sq-step sq-process-step">
                <div className="sq-process-step-header">
                  <span className="sq-step-number">3</span>
                  <div>
                    <h3 className="sq-process-step-title">
                      {t("process.step3.title")}
                    </h3>
                    <p className="sq-process-step-summary">
                      {t("process.step3.desc")}
                    </p>
                  </div>
                </div>

                <div className="sq-process-step-body">
                  <p>{t("processPage.step3.long")}</p>

                  <p className="sq-process-list-title">
                    {t("processPage.step3.listTitle")}
                  </p>
                  <ul className="sq-process-list">
                    <li>{t("processPage.step3.list.1")}</li>
                    <li>{t("processPage.step3.list.2")}</li>
                    <li>{t("processPage.step3.list.3")}</li>
                    <li>{t("processPage.step3.list.4")}</li>
                  </ul>
                </div>
              </li>
            </ol>

            <div className="sq-process-outro">
              <h3>{t("processPage.outro.title")}</h3>
              <p>{t("processPage.outro.text")}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Process;
