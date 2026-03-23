"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "@/styles/index.css";
import "@/styles/dots.css";
import { useTranslation } from "react-i18next";
import { Sparkles, Target, Zap, ChevronDown } from "lucide-react";

type AboutCard = {
  n: string;
  title: string;
  text: string;
  bullets?: string[];
  icon: React.ReactNode;
};

type PersonKey = "sina" | "quinten";

const AboutSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage ?? i18n.language;

  const cards: AboutCard[] = useMemo(
    () => [
      {
        n: "01",
        title: t("about.mission.title"),
        text: t("about.mission.text"),
        icon: <Sparkles className="sq-about-icon-svg" aria-hidden="true" />,
      },
      {
        n: "02",
        title: t("about.vision.title"),
        text: t("about.vision.text"),
        icon: <Target className="sq-about-icon-svg" aria-hidden="true" />,
      },
      {
        n: "03",
        title: t("about.why.title"),
        text: t("about.why.long"),
        bullets: [
          t("about.why.list.1"),
          t("about.why.list.2"),
          t("about.why.list.3"),
          t("about.why.list.4"),
        ],
        icon: <Zap className="sq-about-icon-svg" aria-hidden="true" />,
      },
    ],
    [lang, t]
  );

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(() => cards.map(() => false));
  const [hideScrollHint, setHideScrollHint] = useState(false);

  // UPDATED: popup state per person
  const [activePopup, setActivePopup] = useState<PersonKey | null>(null);

  // ======================================================
  // Typewriter
  // ======================================================
  const TYPE_BASE = t("about.tekst.type.writer");

  const TYPE_ENDINGS = useMemo(
    () => [
      t("about.type.writer.option.1"),
      t("about.type.writer.option.2"),
      t("about.type.writer.option.3"),
      t("about.type.writer.option.4"),
    ],
    [lang, t]
  );

  const LONGEST_ENDING = useMemo(() => {
    return TYPE_ENDINGS.reduce(
      (longest, current) => (current.length > longest.length ? current : longest),
      ""
    );
  }, [TYPE_ENDINGS]);

  const [twEnding, setTwEnding] = useState<string>("");
  const [twReduceMotion, setTwReduceMotion] = useState(false);

  const endingIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const deletingRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timeoutRef.current != null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setTwReduceMotion(!!mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  useEffect(() => {
    if (!twReduceMotion) return;

    clearTimer();

    const len = Math.max(1, TYPE_ENDINGS.length);
    const idx = ((endingIndexRef.current % len) + len) % len;
    const ending = TYPE_ENDINGS[idx] ?? "";

    charIndexRef.current = Math.min(charIndexRef.current, ending.length);
    setTwEnding(ending);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [twReduceMotion, TYPE_ENDINGS]);

  useEffect(() => {
    if (twReduceMotion) return;

    let isMounted = true;

    const typeSpeed = 34;
    const deleteSpeed = 22;
    const pauseAfterType = 1050;
    const pauseAfterDelete = 280;

    const tick = () => {
      if (!isMounted) return;

      const len = Math.max(1, TYPE_ENDINGS.length);
      const idx = ((endingIndexRef.current % len) + len) % len;
      const ending = TYPE_ENDINGS[idx] ?? "";

      if (charIndexRef.current > ending.length) {
        charIndexRef.current = ending.length;
      }

      if (!deletingRef.current) {
        charIndexRef.current += 1;
        setTwEnding(ending.slice(0, charIndexRef.current));

        if (charIndexRef.current >= ending.length) {
          timeoutRef.current = window.setTimeout(() => {
            deletingRef.current = true;
            tick();
          }, pauseAfterType);
          return;
        }

        timeoutRef.current = window.setTimeout(tick, typeSpeed);
        return;
      }

      charIndexRef.current -= 1;
      setTwEnding(ending.slice(0, Math.max(0, charIndexRef.current)));

      if (charIndexRef.current <= 0) {
        deletingRef.current = false;
        endingIndexRef.current = (endingIndexRef.current + 1) % len;

        timeoutRef.current = window.setTimeout(tick, pauseAfterDelete);
        return;
      }

      timeoutRef.current = window.setTimeout(tick, deleteSpeed);
    };

    clearTimer();
    timeoutRef.current = window.setTimeout(tick, 0);

    return () => {
      isMounted = false;
      clearTimer();
    };
  }, [TYPE_ENDINGS, twReduceMotion]);

  useEffect(() => {
    setVisible((prev) => {
      if (prev.length === cards.length) return prev;
      return cards.map(() => false);
    });
  }, [cards.length]);

  /* ======================================================
     Scroll reveal for each row
  ====================================================== */
  useEffect(() => {
    let obs: IntersectionObserver | null = null;
    let tries = 0;
    let timer: number | null = null;

    const attach = () => {
      const nodes = itemRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!nodes.length) {
        tries += 1;
        if (tries < 30) timer = window.setTimeout(attach, 50);
        return;
      }

      obs = new IntersectionObserver(
        (entries) => {
          setVisible((prev) => {
            const next = [...prev];
            for (const e of entries) {
              const idx = Number((e.target as HTMLElement).dataset.index);
              if (!Number.isNaN(idx)) next[idx] = e.isIntersecting;
            }
            return next;
          });
        },
        {
          threshold: 0.22,
          rootMargin: "-10% 0px -20% 0px",
        }
      );

      nodes.forEach((n) => obs!.observe(n));
    };

    attach();

    return () => {
      if (timer) window.clearTimeout(timer);
      if (obs) obs.disconnect();
    };
  }, []);

  /* ======================================================
     Scroll cue visibility
  ====================================================== */
  useEffect(() => {
    let obs: IntersectionObserver | null = null;
    let tries = 0;
    let timer: number | null = null;

    const attach = () => {
      const lastEl =
        [...itemRefs.current].reverse().find((el) => el != null) ?? null;

      if (!lastEl) {
        tries += 1;
        if (tries < 30) timer = window.setTimeout(attach, 50);
        return;
      }

      obs = new IntersectionObserver(
        ([entry]) => {
          setHideScrollHint(entry.intersectionRatio >= 0.9);
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 0.9, 1],
          rootMargin: "0px",
        }
      );

      obs.observe(lastEl);
    };

    attach();

    return () => {
      if (timer) window.clearTimeout(timer);
      if (obs) obs.disconnect();
    };
  }, []);

  // UPDATED: close popup with Escape + lock background scroll
  useEffect(() => {
    if (!activePopup) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePopup(null);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activePopup]);

  const scrollDownOne = () => {
    window.scrollBy({
      top: Math.round(window.innerHeight * 0.75),
      behavior: "smooth",
    });
  };

  const popupContent = {
    sina: {
      title: "Over mij",
      text: (
        <>
          Ik ben Sina Hashemy, mede-oprichter van Sequential.
          <br />
          <br />
          Ik studeer Informatica (2e jaars) en pas mijn kennis dagelijks toe in
          het bouwen van moderne, snelle websites. Binnen ons bedrijf richt ik
          mij op de technische ontwikkeling en het creëren van
          gebruiksvriendelijke oplossingen.
          <br />
          <br />
          Samen met mijn compagnon zijn we een jong en gedreven team, waarbij ik
          mij naast de technische ontwikkeling ook bezighoud met het aantrekken
          van nieuwe klanten.
        </>
      ),
    },
    quinten: {
      title: "Over mij",
      text: (
        <>
          Ik ben Quinten, mede-oprichter van Sequential.
          <br />
          <br />
          Ik ben 18 jaar oud en studeer Informatica aan de Hogeschool Rotterdam
          (2de jaar). Binnen Sequential richt ik mij op de technische kant van
          het bedrijf en maak ik de websites.
          <br />
          <br />
          Samen met mijn compagnon vormen we een jong en gedreven team, waarbij
          we bedrijven helpen met moderne en gebruiksvriendelijke online
          oplossingen.
        </>
      ),
    },
  } as const;

  return (
    <>
      <div className="sq-bg-dots" aria-hidden="true" />

      <div className="sq-root">
        <main>
          <section className="sq-section sq-about-page">
            <div className="sq-container">
              <div className="sq-about-typewriterWrap">
                <p className="sq-about-typewriterSizer" aria-hidden="true">
                  <span className="sq-about-typewriter-base">{TYPE_BASE} </span>
                  <span className="sq-about-typewriter-ending">{LONGEST_ENDING}</span>
                  <span className="sq-about-caret" />
                </p>

                <p className="sq-about-typewriter" aria-live="polite">
                  <span className="sq-about-typewriter-base">{TYPE_BASE} </span>
                  <span className="sq-about-typewriter-ending">{twEnding}</span>
                  <span className="sq-about-caret" aria-hidden="true" />
                </p>
              </div>

              <header className="sq-about-hero">
                <h2 className="sq-about-h2">{t("about.title")}</h2>
                <p className="sq-about-lead">{t("about.text")}</p>
              </header>

              <div className="sq-about-stack">
                {cards.map((c, i) => (
                  <div
                    key={c.n}
                    data-index={i}
                    ref={(node) => {
                      itemRefs.current[i] = node;
                    }}
                    className={["sq-about-row", visible[i] ? "is-visible" : ""].join(" ")}
                    style={
                      {
                        ["--row-accent" as any]:
                          i === 0
                            ? "rgb(147 109 255)"
                            : i === 1
                            ? "rgb(96 140 255)"
                            : "rgb(92 178 230)",
                      } as React.CSSProperties
                    }
                  >
                    <article className="sq-about-box">
                      <div className="sq-about-boxTop">
                        <span className="sq-about-badge">{c.n}</span>
                        <h3 className="sq-about-h3">{c.title}</h3>
                      </div>

                      <p className="sq-about-p">{c.text}</p>

                      {c.bullets?.length ? (
                        <ul className="sq-about-list">
                          {c.bullets.map((b, idx) => (
                            <li key={idx}>{b}</li>
                          ))}
                        </ul>
                      ) : null}
                    </article>

                    <div className="sq-about-iconStage" aria-hidden="true">
                      <div className="sq-about-iconOrb">
                        <div className="sq-about-iconInner">{c.icon}</div>
                      </div>
                      <div className="sq-about-iconShadow" />
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "80px",
                    textAlign: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Profile 1 */}
                  <div
                    style={{
                      width: "260px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ marginBottom: "12px", fontWeight: 600 }}>
                      Co-Founder & Developer
                    </p>

                    <Image
                      src="/sina.png"
                      alt="Sina"
                      width={260}
                      height={260}
                      style={{
                        width: "260px",
                        height: "260px",
                        objectFit: "cover",
                        borderRadius: "9999px",
                        marginBottom: "28px",
                        boxShadow: "0 18px 50px rgba(0,0,0,0.18)",
                      }}
                    />

                    <button
                      type="button"
                      onClick={() => setActivePopup("sina")}
                      style={{
                        border: "none",
                        borderRadius: "9999px",
                        padding: "14px 28px",
                        fontSize: "16px",
                        fontWeight: 600,
                        cursor: "pointer",
                        color: "#fff",
                        background:
                          "linear-gradient(135deg, rgb(147 109 255), rgb(96 140 255))",
                        boxShadow: "0 12px 30px rgba(96, 140, 255, 0.28)",
                      }}
                    >
                      Leer mij beter kennen
                    </button>
                  </div>

                  {/* Profile 2 */}
                  <div
                    style={{
                      width: "260px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ marginBottom: "12px", fontWeight: 600 }}>
                      Co-Founder & Developer
                    </p>

                    <Image
                      src="/quinten.png"
                      alt="Quinten"
                      width={260}
                      height={260}
                      style={{
                        width: "260px",
                        height: "260px",
                        objectFit: "cover",
                        borderRadius: "9999px",
                        marginBottom: "28px",
                        boxShadow: "0 18px 50px rgba(0,0,0,0.18)",
                      }}
                    />

                    <button
                      type="button"
                      onClick={() => setActivePopup("quinten")}
                      style={{
                        border: "none",
                        borderRadius: "9999px",
                        padding: "14px 28px",
                        fontSize: "16px",
                        fontWeight: 600,
                        cursor: "pointer",
                        color: "#fff",
                        background:
                          "linear-gradient(135deg, rgb(147 109 255), rgb(96 140 255))",
                        boxShadow: "0 12px 30px rgba(96, 140, 255, 0.28)",
                      }}
                    >
                      Leer mij beter kennen
                    </button>
                  </div>
                </div>
              </div>

              {/* SCROLL BUTTON */}
              <div className={["sq-scrollCue", hideScrollHint ? "is-hidden" : ""].join(" ")}>
                <button
                  className="sq-scrollCue-btn"
                  type="button"
                  onClick={scrollDownOne}
                  aria-label="Scroll naar beneden"
                >
                  <span className="sq-scrollCue-text">{t("about.scroll.tekst")}</span>
                  <span className="sq-scrollCue-icon" aria-hidden="true">
                    <ChevronDown size={18} />
                  </span>
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* POPUP */}
        {activePopup && (
          <div
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setActivePopup(null);
            }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 3000,
              background: "rgba(8, 10, 20, 0.62)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "720px",
                background: "black",
                borderRadius: "24px",
                padding: "32px",
                boxShadow: "0 30px 90px rgba(0,0,0,0.28)",
              }}
            >
              <h3>{popupContent[activePopup].title}</h3>
              <p>{popupContent[activePopup].text}</p>

              <button
                onClick={() => setActivePopup(null)}
                style={{
                  marginTop: "24px",
                  padding: "12px 22px",
                  borderRadius: "9999px",
                  border: "none",
                  background: "#111827",
                  color: "white",
                }}
              >
                Sluiten
              </button>
            </div>
          </div>
        )}

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

export default AboutSection;