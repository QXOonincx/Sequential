"use client";

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

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

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
    [t]
  );

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(() =>
    cards.map(() => false)
  );

  const [hideScrollHint, setHideScrollHint] = useState(false);

  // ======================================================
  // Typewriter (rotating endings) — endings get faded logo color in CSS
  // ======================================================
  const TYPE_BASE = "Wij geloven in digitale oplossingen die";
  const TYPE_ENDINGS = useMemo(
    () => ["simpel zijn.", "krachtig zijn.", "impact maken.", "echt werken."],
    []
  );

  const [twEnding, setTwEnding] = useState<string>(""); // only the animated part
  const [twReduceMotion, setTwReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setTwReduceMotion(!!mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  useEffect(() => {
    if (twReduceMotion) {
      setTwEnding(TYPE_ENDINGS[0]);
      return;
    }

    let isMounted = true;

    let endingIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typeSpeed = 34; // ms per char
    const deleteSpeed = 22;
    const pauseAfterType = 1050;
    const pauseAfterDelete = 280;

    const tick = () => {
      if (!isMounted) return;

      const ending = TYPE_ENDINGS[endingIndex];

      if (!deleting) {
        charIndex += 1;
        setTwEnding(ending.slice(0, charIndex));

        if (charIndex >= ending.length) {
          window.setTimeout(() => {
            deleting = true;
            tick();
          }, pauseAfterType);
          return;
        }

        window.setTimeout(tick, typeSpeed);
        return;
      }

      // deleting
      charIndex -= 1;
      setTwEnding(ending.slice(0, Math.max(0, charIndex)));

      if (charIndex <= 0) {
        deleting = false;
        endingIndex = (endingIndex + 1) % TYPE_ENDINGS.length;

        window.setTimeout(tick, pauseAfterDelete);
        return;
      }

      window.setTimeout(tick, deleteSpeed);
    };

    // start
    setTwEnding("");
    window.setTimeout(tick, 240);

    return () => {
      isMounted = false;
    };
  }, [TYPE_ENDINGS, twReduceMotion]);

  // Keep visible[] length in sync (safe even if cards never changes length)
  useEffect(() => {
    setVisible((prev) => {
      if (prev.length === cards.length) return prev;
      return cards.map(() => false);
    });
  }, [cards.length]);

  /* ======================================================
     Scroll reveal for each row (mount once)
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
  }, []); // ✅ constant deps

  /* ======================================================
     Keep scroll cue visible until LAST card is ~fully visible
  ====================================================== */
  useEffect(() => {
    let obs: IntersectionObserver | null = null;
    let tries = 0;
    let timer: number | null = null;

    const attach = () => {
      // last existing ref (safe)
      const lastEl =
        [...itemRefs.current].reverse().find((el) => el != null) ?? null;

      if (!lastEl) {
        tries += 1;
        if (tries < 30) timer = window.setTimeout(attach, 50);
        return;
      }

      obs = new IntersectionObserver(
        ([entry]) => {
          // Hide only when ~90% visible (use 1 for fully visible)
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
  }, []); // ✅ constant deps

  const scrollDownOne = () => {
    window.scrollBy({
      top: Math.round(window.innerHeight * 0.75),
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="sq-bg-dots" aria-hidden="true" />

      <div className="sq-root">
        <main>
          <section className="sq-section sq-about-page">
            <div className="sq-container">
              {/* ===== TYPEWRITER HEADLINE ===== */}
              <div className="sq-about-typewriterWrap">
                <p className="sq-about-typewriter" aria-live="polite">
                  <span className="sq-about-typewriter-base">{TYPE_BASE} </span>
                  <span className="sq-about-typewriter-ending">{twEnding}</span>
                  <span className="sq-about-caret" aria-hidden="true" />
                </p>
              </div>

              {/* ===== INTRO ===== */}
              <header className="sq-about-hero">
                <h2 className="sq-about-h2">{t("about.title")}</h2>
                <p className="sq-about-lead">{t("about.text")}</p>
              </header>

              {/* ===== STACK ===== */}
              <div className="sq-about-stack">
                {cards.map((c, i) => (
                  <div
                    key={c.n}
                    data-index={i}
                    ref={(node) => {
                      itemRefs.current[i] = node;
                    }}
                    className={[
                      "sq-about-row",
                      visible[i] ? "is-visible" : "",
                    ].join(" ")}
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
            </div>

            {/* ===== SCROLL CUE ===== */}
            <div
              className={[
                "sq-scrollCue",
                hideScrollHint ? "is-hidden" : "",
              ].join(" ")}
            >
              <button
                className="sq-scrollCue-btn"
                type="button"
                onClick={scrollDownOne}
                aria-label="Scroll naar beneden"
              >
                <span className="sq-scrollCue-text">Scroll om meer te zien</span>
                <span className="sq-scrollCue-icon" aria-hidden="true">
                  <ChevronDown size={18} />
                </span>
              </button>
            </div>
          </section>
        </main>

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
