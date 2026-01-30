"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import "@/styles/index.css";
import { useTranslation } from "react-i18next";
import { Monitor, LayoutTemplate, RefreshCw } from "lucide-react";

type Service = {
  n: number;
  title: string;
  summary: string;
  text: string;
  includes: string[];
  icon: React.ReactNode;
};

type Rect = {
  top: number;
  left: number;
  width: number;
  height: number;
};

/**
 * Logo-derived palette
 * Purple → Blue → Blue-leaning Turquoise
 * Tuned to feel like one cohesive family
 */
const CARD_COLORS = [
  "rgb(147 109 255)", // soft brand purple
  "rgb(96 140 255)",  // logo blue
  "rgb(92 178 230)",  // turquoise pulled toward blue/purple
] as const;

const OnzeDiensten: React.FC = () => {
  const { t } = useTranslation();

  const services: Service[] = useMemo(
    () => [
      {
        n: 1,
        title: t("services.service1.title"),
        summary: t("services.service1.summary"),
        text: t("services.service1.text"),
        includes: [
          t("services.service1.list.1"),
          t("services.service1.list.2"),
          t("services.service1.list.3"),
        ],
        icon: <Monitor className="sq-service-icon-svg" aria-hidden="true" />,
      },
      {
        n: 2,
        title: t("services.service2.title"),
        summary: t("services.service2.summary"),
        text: t("services.service2.text"),
        includes: [
          t("services.service2.list.1"),
          t("services.service2.list.2"),
        ],
        icon: (
          <LayoutTemplate className="sq-service-icon-svg" aria-hidden="true" />
        ),
      },
      {
        n: 3,
        title: t("services.service3.title"),
        summary: t("services.service3.summary"),
        text: t("services.service3.text"),
        includes: [
          t("services.service3.list.1"),
          t("services.service3.list.2"),
          t("services.service3.list.3"),
        ],
        icon: <RefreshCw className="sq-service-icon-svg" aria-hidden="true" />,
      },
    ],
    [t]
  );

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const [activeRect, setActiveRect] = useState<Rect | null>(null);

  const open = (idx: number) => {
    const el = cardRefs.current[idx];
    if (!el) return;

    const r = el.getBoundingClientRect();
    setActiveRect({
      top: r.top,
      left: r.left,
      width: r.width,
      height: r.height,
    });
    setActive(idx);
  };

  const close = () => {
    setActive(null);
    window.setTimeout(() => setActiveRect(null), 220);
  };

  // ESC + scroll lock
  useEffect(() => {
    if (active === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <div className="sq-root">
      <main>
        <section className="sq-section">
          <div className="sq-container">
            <div className="sq-section-header">
              <h2>{t("services.title")}</h2>
              <p>{t("services.subtitle")}</p>
            </div>

            <p className="sq-process-intro">{t("services.intro")}</p>

            <div
              className={`sq-services-grid ${active !== null ? "has-active" : ""}`}
            >
              {services.map((s, idx) => {
                const isHovered = hovered === idx;
                const isActive = active === idx;

                const baseStyle: React.CSSProperties = {
                  ["--card-color" as any]:
                    CARD_COLORS[idx % CARD_COLORS.length],
                };

                const style =
                  isActive && activeRect
                    ? ({
                        ...baseStyle,
                        ["--from-top" as any]: `${activeRect.top}px`,
                        ["--from-left" as any]: `${activeRect.left}px`,
                        ["--from-w" as any]: `${activeRect.width}px`,
                        ["--from-h" as any]: `${activeRect.height}px`,
                      } as React.CSSProperties)
                    : baseStyle;

                return (
                  <div
                    key={s.n}
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                    style={style}
                    className={[
                      "sq-service-card",
                      isHovered ? "is-hovered" : "",
                      isActive ? "is-expanded" : "",
                      active !== null && !isActive ? "is-dimmed" : "",
                    ].join(" ")}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() =>
                      setHovered((v) => (v === idx ? null : v))
                    }
                    onClick={() => open(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") open(idx);
                    }}
                  >
                    {/* Moving Border */}
                    <div className="sq-moving-border" aria-hidden="true">
                      <div className="sq-moving-border-spin" />
                    </div>

                    <div className="sq-service-card-inner">
                      <div className="sq-service-top">
                        {/* ✅ icon badge instead of number */}
                        <span className="sq-service-icon" aria-hidden="true">
                          {s.icon}
                        </span>

                        <div>
                          <h3 className="sq-service-title">{s.title}</h3>
                          <p className="sq-service-summary">{s.summary}</p>
                        </div>
                      </div>

                      <div className="sq-service-body">
                        <p className="sq-service-text">{s.text}</p>

                        <p className="sq-service-list-title">
                          {t("services.includes")}
                        </p>
                        <ul className="sq-service-list">
                          {s.includes.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="sq-service-actions">
                        {isActive ? (
                          <button
                            className="sq-service-close"
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              close();
                            }}
                          >
                            Sluiten ✕
                          </button>
                        ) : (
                          <button
                            className="sq-service-more"
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              open(idx);
                            }}
                          >
                            Lees meer →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="sq-process-outro">
              <h3>{t("services.outro.title")}</h3>
              <p>{t("services.outro.text")}</p>
            </div>
          </div>
        </section>
      </main>

      {/* Backdrop fade */}
      <div
        className={`sq-services-backdrop ${active !== null ? "is-on" : ""}`}
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        aria-hidden="true"
      />

      <footer className="sq-footer">
        <div className="sq-container sq-footer-inner">
          <p>{t("footer.copy", { year: new Date().getFullYear() })}</p>
          <p className="sq-footer-secondary">{t("footer.secondary")}</p>
        </div>
      </footer>
    </div>
  );
};

export default OnzeDiensten;
