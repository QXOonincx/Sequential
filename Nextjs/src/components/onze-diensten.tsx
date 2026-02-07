"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import "@/styles/index.css";
import "@/styles/dots.css";
import { useTranslation } from "react-i18next";
import {
  Monitor,
  UserRound,
  LayoutTemplate,
  RefreshCw,
  Sparkles,
  Settings,
  Rocket,
} from "lucide-react";

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

const CARD_COLORS = [
  "rgb(147 109 255)",
  "rgb(96 140 255)",
  "rgb(92 178 230)",
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
          t("services.service1.list.4"),
        ].filter(Boolean),
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
          t("services.service2.list.3"),
          t("services.service2.list.4"),
        ].filter(Boolean),
        icon: <UserRound className="sq-service-icon-svg" aria-hidden="true" />,
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
          t("services.service3.list.4"),
        ].filter(Boolean),
        icon: (
          <LayoutTemplate className="sq-service-icon-svg" aria-hidden="true" />
        ),
      },
      {
        n: 4,
        title: t("services.service4.title"),
        summary: t("services.service4.summary"),
        text: t("services.service4.text"),
        includes: [
          t("services.service4.list.1"),
          t("services.service4.list.2"),
          t("services.service4.list.3"),
          t("services.service4.list.4"),
        ].filter(Boolean),
        icon: <RefreshCw className="sq-service-icon-svg" aria-hidden="true" />,
      },
      {
        n: 5,
        title: t("services.service5.title"),
        summary: t("services.service5.summary"),
        text: t("services.service5.text"),
        includes: [
          t("services.service5.list.1"),
          t("services.service5.list.2"),
          t("services.service5.list.3"),
          t("services.service5.list.4"),
        ].filter(Boolean),
        icon: <Sparkles className="sq-service-icon-svg" aria-hidden="true" />,
      },
      {
        n: 6,
        title: t("services.service6.title"),
        summary: t("services.service6.summary"),
        text: t("services.service6.text"),
        includes: [
          t("services.service6.list.1"),
          t("services.service6.list.2"),
          t("services.service6.list.3"),
          t("services.service6.list.4"),
        ].filter(Boolean),
        icon: <Settings className="sq-service-icon-svg" aria-hidden="true" />,
      },
      {
        n: 7,
        title: t("services.service7.title"),
        summary: t("services.service7.summary"),
        text: t("services.service7.text"),
        includes: [
          t("services.service7.list.1"),
          t("services.service7.list.2"),
          t("services.service7.list.3"),
          t("services.service7.list.4"),
        ].filter(Boolean),
        icon: <Rocket className="sq-service-icon-svg" aria-hidden="true" />,
      },
    ],
    [t]
  );

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]); // ✅ NEW

  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const [activeRect, setActiveRect] = useState<Rect | null>(null);

  // ✅ Navbar height -> CSS var (--nav-h)
  useEffect(() => {
    const getNav = () =>
      (document.querySelector("nav") ||
        document.querySelector("header") ||
        document.querySelector(".navbar") ||
        document.querySelector("#navbar")) as HTMLElement | null;

    const setNavHeight = () => {
      const nav = getNav();
      const h = nav?.getBoundingClientRect().height ?? 0;
      document.documentElement.style.setProperty("--nav-h", `${h}px`);
    };

    setNavHeight();

    const nav = getNav();
    const ro =
      "ResizeObserver" in window ? new ResizeObserver(setNavHeight) : null;
    if (ro && nav) ro.observe(nav);

    window.addEventListener("resize", setNavHeight);
    return () => {
      window.removeEventListener("resize", setNavHeight);
      ro?.disconnect();
    };
  }, []);

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

    // ✅ NEW: zodra open, zet scroll van popup content terug naar boven
    window.requestAnimationFrame(() => {
      const inner = innerRefs.current[idx];
      if (inner) inner.scrollTop = 0;
    });
  };

  const close = () => {
    setActive(null);
    window.setTimeout(() => setActiveRect(null), 220);
  };

  // ESC + scroll lock (keep page stable behind backdrop)
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
    <>
      <div className="sq-bg-dots" aria-hidden="true" />

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
                className={`sq-services-grid ${
                  active !== null ? "has-active" : ""
                }`}
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
                      ? ( {
                          ...baseStyle,
                          ["--from-top" as any]: `${activeRect.top}px`,
                          ["--from-left" as any]: `${activeRect.left}px`,
                          ["--from-w" as any]: `${activeRect.width}px`,
                          ["--from-h" as any]: `${activeRect.height}px`,
                        } as React.CSSProperties )
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
                      <div className="sq-moving-border" aria-hidden="true">
                        <div className="sq-moving-border-spin" />
                      </div>

                      <div
                        className="sq-service-card-inner"
                        ref={(el) => {
                          innerRefs.current[idx] = el; // ✅ NEW
                        }}
                      >
                        <div className="sq-service-top">
                          <span className="sq-service-icon" aria-hidden="true">
                            {s.icon}
                          </span>

                          <div>
                            <h3 className="sq-service-title">{s.title}</h3>

                            {!isActive && (
                              <p className="sq-service-summary">{s.summary}</p>
                            )}
                          </div>
                        </div>

                        {isActive && (
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
                        )}

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
            </div>
          </section>
        </main>

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
    </>
  );
};

export default OnzeDiensten;
