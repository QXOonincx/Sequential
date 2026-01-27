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
        <section className="sq-section sq-process"> {/* same style as process */}
          <div className="sq-container">

            {/* Section Header */}
            <div className="sq-section-header">
              <h2>{t("about.title")}</h2>
              <p>{t("about.text")}</p>
            </div>

            <ol className="sq-steps sq-process-steps">

              {/* Step 1: Mission */}
              <li className="sq-step sq-process-step">
                <div className="sq-process-step-header">
                  <span className="sq-step-number">1</span>
                  <div>
                    <h3 className="sq-process-step-title">{t("about.mission.title")}</h3>
                    <p className="sq-process-step-summary">{t("about.mission.text")}</p>
                  </div>
                </div>
              </li>

              {/* Step 2: Vision */}
              <li className="sq-step sq-process-step">
                <div className="sq-process-step-header">
                  <span className="sq-step-number">2</span>
                  <div>
                    <h3 className="sq-process-step-title">{t("about.vision.title")}</h3>
                    <p className="sq-process-step-summary">{t("about.vision.text")}</p>
                  </div>
                </div>
              </li>

              {/* Step 3: Key Benefits */}
              <li className="sq-step sq-process-step">
                <div className="sq-process-step-header">
                  <span className="sq-step-number">3</span>
                  <div>
                    <h3 className="sq-process-step-title">{t("about.why.title")}</h3>
                    <p className="sq-process-step-summary">{t("about.why.intro")}</p>
                  </div>
                </div>
                <div className="sq-process-step-body">
                  <p>{t("about.why.long")}</p> {/* optional longer explanation */}
                  <ul className="sq-process-list">
                    <li>{t("about.why.list.1")}</li>
                    <li>{t("about.why.list.2")}</li>
                    <li>{t("about.why.list.3")}</li>
                    <li>{t("about.why.list.4")}</li>
                  </ul>
                </div>
              </li>

              {/* Step 4: Core Values */}
              <li className="sq-step sq-process-step">
                <div className="sq-process-step-header">
                  <span className="sq-step-number">4</span>
                  <div>
                    <h3 className="sq-process-step-title">{t("about.values.title")}</h3>
                  </div>
                </div>
                <div className="sq-process-step-body">
                  <ul className="sq-process-list">
                    <li>{t("about.values.list.1")}</li>
                    <li>{t("about.values.list.2")}</li>
                    <li>{t("about.values.list.3")}</li>
                    <li>{t("about.values.list.4")}</li>
                  </ul>
                </div>
              </li>

            </ol>

          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutSection;
