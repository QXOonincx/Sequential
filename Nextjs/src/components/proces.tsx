"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import "@/styles/index.css";
import { useTranslation } from "react-i18next";

type Step = {
  n: number;
  title: string;
  desc: string;
  long: string;
  listTitle: string;
  list: string[];
};

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

const Process: React.FC = () => {
  const { t } = useTranslation();

  const steps: Step[] = useMemo(
    () => [
      {
        n: 1,
        title: t("process.step1.title"),
        desc: t("process.step1.desc"),
        long: t("processPage.step1.long"),
        listTitle: t("processPage.step1.listTitle"),
        list: [
          t("processPage.step1.list.1"),
          t("processPage.step1.list.2"),
          t("processPage.step1.list.3"),
          t("processPage.step1.list.4"),
        ],
      },
      {
        n: 2,
        title: t("process.step2.title"),
        desc: t("process.step2.desc"),
        long: t("processPage.step2.long"),
        listTitle: t("processPage.step2.listTitle"),
        list: [
          t("processPage.step2.list.1"),
          t("processPage.step2.list.2"),
          t("processPage.step2.list.3"),
          t("processPage.step2.list.4"),
        ],
      },
      {
        n: 3,
        title: t("process.step3.title"),
        desc: t("process.step3.desc"),
        long: t("processPage.step3.long"),
        listTitle: t("processPage.step3.listTitle"),
        list: [
          t("processPage.step3.list.1"),
          t("processPage.step3.list.2"),
          t("processPage.step3.list.3"),
          t("processPage.step3.list.4"),
        ],
      },
    ],
    [t]
  );

  const timelineRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const [inCenter, setInCenter] = useState<boolean[]>(() =>
    steps.map(() => false)
  );
  const [reached, setReached] = useState<boolean[]>(() =>
    steps.map(() => false)
  );

  // start & end van de lijn (dot centers)
  useEffect(() => {
    const tl = timelineRef.current;
    if (!tl) return;

    const setRange = () => {
      const firstDot = dotRefs.current[0];
      const lastDot = dotRefs.current[dotRefs.current.length - 1];
      if (!firstDot || !lastDot) return;

      const tlRect = tl.getBoundingClientRect();

      const startPx =
        firstDot.getBoundingClientRect().top +
        firstDot.offsetHeight / 2 -
        tlRect.top;

      const endPx =
        lastDot.getBoundingClientRect().top +
        lastDot.offsetHeight / 2 -
        tlRect.top;

      tl.style.setProperty("--sq-tl-start", `${startPx}px`);
      tl.style.setProperty("--sq-tl-end", `${endPx}px`);
    };

    setRange();
    window.addEventListener("resize", setRange);
    return () => window.removeEventListener("resize", setRange);
  }, [steps.length]);

  // scroll → lijn + reached
  useEffect(() => {
    const tl = timelineRef.current;
    if (!tl) return;

    let raf = 0;

    const update = () => {
      const rect = tl.getBoundingClientRect();
      const triggerY = window.innerHeight * 0.5;

      const styles = getComputedStyle(tl);
      const startPx = parseFloat(styles.getPropertyValue("--sq-tl-start")) || 0;
      const endPx =
        parseFloat(styles.getPropertyValue("--sq-tl-end")) || rect.height;

      const range = Math.max(1, endPx - startPx);
      const raw = (triggerY - (rect.top + startPx)) / range;
      const progress = clamp(raw, 0, 1);

      if (fillRef.current) {
        fillRef.current.style.height = `${range * progress}px`;
      }

      setReached(
        steps.map((_, i) => {
          const dot = dotRefs.current[i];
          if (!dot) return false;
          const r = dot.getBoundingClientRect();
          return r.top + r.height / 2 <= triggerY;
        })
      );
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps]);

  // kaart in het midden
  useEffect(() => {
    const nodes = itemRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!nodes.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        setInCenter((prev) => {
          const next = [...prev];
          for (const e of entries) {
            const idx = Number((e.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) next[idx] = e.isIntersecting;
          }
          return next;
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, [steps.length]);

  return (
    <div className="sq-root">
      <main>
        <section className="sq-section sq-process">
          <div className="sq-container">
            <div className="sq-process-intro-block">
              <h2>Zo ziet ons website-traject eruit</h2>
              <p>
                Van eerste idee tot livegang: we begeleiden je stap voor stap
                naar een website die klopt, converteert en meegroeit met je
                ambities.
              </p>
            </div>

            <div ref={timelineRef} className="sq-timeline">
              <div className="sq-timeline-line" aria-hidden="true">
                <div ref={fillRef} className="sq-timeline-line-fill" />
              </div>

              <ol className="sq-timeline-list">
                {steps.map((s, i) => {
                  const side = i % 2 === 0 ? "left" : "right";
                  const isActive = inCenter[i] && reached[i];

                  return (
                    <li
                      key={s.n}
                      data-index={i}
                      className={`sq-tl-item sq-tl-${side} ${
                        isActive ? "is-active" : ""
                      }`}
                      ref={(node) => {
                        itemRefs.current[i] = node;
                      }}
                    >
                      <div className="sq-tl-step-title">{s.title}</div>

                      <div className="sq-tl-marker" aria-hidden="true">
                        <span
                          className="sq-tl-dot"
                          ref={(node) => {
                            dotRefs.current[i] = node;
                          }}
                        />
                      </div>

                      <article className="sq-tl-card">
                        <span className="sq-tl-step">Stap {s.n}</span>
                        <p className="sq-tl-summary">{s.desc}</p>

                        <p>{s.long}</p>
                        <p className="sq-process-list-title">{s.listTitle}</p>
                        <ul className="sq-process-list">
                          {s.list.map((x, idx) => (
                            <li key={idx}>{x}</li>
                          ))}
                        </ul>
                      </article>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Process;
