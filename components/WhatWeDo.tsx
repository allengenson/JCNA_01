"use client";

import { useState, useEffect, useRef } from "react";
import TestimoniesPanel from "./panels/TestimoniesPanel";
import PreachingPanel from "./panels/PreachingPanel";
import BibleStudyPanel from "./panels/BibleStudyPanel";
import PraiseWorshipPanel from "./panels/PraiseWorshipPanel";
import TithesPanel from "./panels/TithesPanel";

const services = [
  { label: "Testimonies",              id: "testimonies"    },
  { label: "Preaching",                id: "preaching"      },
  { label: "Bible Study",              id: "bible-study"    },
  { label: "Praise and Worship",       id: "praise-worship" },
  { label: "Tithes Love and Offering", id: "tithes"         },
];

function useInView(ref: React.RefObject<Element>, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

const WhatWeDo = () => {
  const [active,           setActive]          = useState("testimonies");
  const [desktopAnimating, setDesktopAnimating] = useState(false);
  const [desktopDisplayed, setDesktopDisplayed] = useState("testimonies");
  /* mobile: track previous for slide direction */
  const [mobileDisplayed,  setMobileDisplayed]  = useState("testimonies");
  const [mobileVisible,    setMobileVisible]     = useState(true);

  const sectionRef  = useRef<HTMLDivElement>(null!);
  const stripRef    = useRef<HTMLDivElement>(null);
  const inView      = useInView(sectionRef);

  const handleSelect = (id: string) => {
    if (id === active) return;
    setActive(id);

    /* ── mobile crossfade ── */
    setMobileVisible(false);
    setTimeout(() => {
      setMobileDisplayed(id);
      setMobileVisible(true);
    }, 200);

    /* ── desktop crossfade ── */
    if (!desktopAnimating) {
      setDesktopAnimating(true);
      setTimeout(() => {
        setDesktopDisplayed(id);
        setTimeout(() => setDesktopAnimating(false), 50);
      }, 240);
    }

    /* scroll active tab into view */
    setTimeout(() => {
      const strip = stripRef.current;
      const btn   = strip?.querySelector(`[data-id="${id}"]`) as HTMLElement;
      if (strip && btn) {
        const sl = strip.scrollLeft;
        const sw = strip.offsetWidth;
        const bl = btn.offsetLeft;
        const bw = btn.offsetWidth;
        if (bl < sl + 16) strip.scrollTo({ left: bl - 16, behavior: "smooth" });
        else if (bl + bw > sl + sw - 16) strip.scrollTo({ left: bl + bw - sw + 16, behavior: "smooth" });
      }
    }, 0);
  };

  const getPanel = (id: string) => {
    switch (id) {
      case "testimonies":    return <TestimoniesPanel   onNavigate={handleSelect} />;
      case "preaching":      return <PreachingPanel     onNavigate={handleSelect} />;
      case "bible-study":    return <BibleStudyPanel    onNavigate={handleSelect} />;
      case "praise-worship": return <PraiseWorshipPanel onNavigate={handleSelect} />;
      case "tithes":         return <TithesPanel        onNavigate={handleSelect} />;
      default:               return <TestimoniesPanel   onNavigate={handleSelect} />;
    }
  };

  return (
    <>
      <style>{`
        @keyframes wwd-slideLeft {
          from { opacity:0; transform:translateX(-36px); }
          to   { opacity:1; transform:translateX(0);     }
        }
        @keyframes wwd-slideRight {
          from { opacity:0; transform:translateX(36px); }
          to   { opacity:1; transform:translateX(0);    }
        }
        @keyframes wwd-fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes wwd-divider {
          from { transform:scaleY(0); opacity:0; }
          to   { transform:scaleY(1); opacity:1; }
        }
        @keyframes wwd-dividerH {
          from { transform:scaleX(0); opacity:0; }
          to   { transform:scaleX(1); opacity:1; }
        }
        @keyframes wwd-dotPulse {
          0%,100% { box-shadow: 0 0 0 0   rgba(45,80,22,0.45); }
          50%      { box-shadow: 0 0 0 5px rgba(45,80,22,0);   }
        }
        @keyframes wwd-borderGrow {
          from { transform:scaleX(0); }
          to   { transform:scaleX(1); }
        }

        /* ── desktop nav hover ── */
        .wwd-nav-btn { position:relative; padding-bottom:2px; }
        .wwd-nav-btn::after {
          content:''; position:absolute;
          bottom:0; left:0; width:0; height:1px;
          background:#2D5016; transition:width 300ms ease;
        }
        .wwd-nav-btn:hover::after { width:100%; }
        .wwd-nav-btn:hover .wwd-btn-label:not(.is-active) { color:#2D5016 !important; }

        /* ── mobile pill strip ── */
        .wwd-strip {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 2px;
        }
        .wwd-strip::-webkit-scrollbar { display: none; }

        .wwd-pill {
          flex-shrink: 0;
          padding: 7px 16px;
          border-radius: 999px;
          border: 1px solid #C5D09B;
          background: transparent;
          color: #D4A017;
          font-family: var(--font-dm, sans-serif);
          font-size: clamp(11px, 3.5vw, 13px);
          letter-spacing: 0.1em;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: background 200ms ease, color 200ms ease,
                      border-color 200ms ease, transform 120ms ease;
        }
        .wwd-pill:active { transform: scale(0.96); }
        .wwd-pill.active {
          background: #2D5016;
          border-color: #2D5016;
          color: #F6F8F1;
          font-weight: 700;
        }

        /* ── mobile content fade ── */
        .wwd-mob-content {
          transition: opacity 200ms ease, transform 200ms ease;
        }
        .wwd-mob-content.hidden {
          opacity: 0;
          transform: translateY(6px);
        }
        .wwd-mob-content.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div
        id="what-we-do"
        ref={sectionRef}
        className="w-full bg-[#F6F8F1] overflow-hidden"
      >
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1418px] flex flex-col lg:flex-row">

            {/* ── LEFT COLUMN ──────────────────────────────── */}
            <div
              className="w-full lg:w-[436px] lg:flex-shrink-0 px-6 sm:px-10 pt-8 pb-0
                         lg:pt-[35px] lg:pb-[40px] lg:pl-[40px] lg:pr-6"
              style={{
                animation: inView
                  ? "wwd-slideLeft 0.75s cubic-bezier(0.22,1,0.36,1) both"
                  : undefined,
                opacity: inView ? undefined : 0,
              }}
            >
              <h2
                className="font-cormorant"
                style={{
                  fontSize: "clamp(28px,6vw,40px)",
                  color: "#D4A017", letterSpacing: "0.15em",
                  fontWeight: 500, lineHeight: 1,
                }}
              >
                What We Do —
              </h2>

              <h3
                className="font-cormorant mt-8 lg:mt-[76px] ml-0 sm:ml-8 lg:ml-[59px]"
                style={{
                  fontSize: "clamp(28px,6vw,40px)",
                  color: "#2D5016", fontWeight: 500, lineHeight: 1,
                  animation: inView
                    ? "wwd-fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.15s both"
                    : undefined,
                  opacity: inView ? undefined : 0,
                }}
              >
                Church Service
              </h3>

              {/* ══ DESKTOP NAV ════════════════════════════ */}
              <div
                className="hidden lg:flex mt-[76px] flex-col gap-[30px] ml-[93px]"
                style={{
                  animation: inView
                    ? "wwd-fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.3s both"
                    : undefined,
                  opacity: inView ? undefined : 0,
                }}
              >
                {services.map((s, i) => {
                  const isActive = active === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => handleSelect(s.id)}
                      className="wwd-nav-btn font-dm text-left bg-transparent border-none cursor-pointer"
                      style={{
                        fontSize: "clamp(13px,3vw,16px)", letterSpacing: "0.15em",
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? "#1a1a1a" : "#D4A017",
                        lineHeight: 1, padding: 0,
                        display: "flex", alignItems: "center",
                        transition: "color 220ms ease",
                        animationDelay: `${0.35 + i * 0.07}s`,
                      }}
                    >
                      <span style={{
                        display:"inline-block",
                        width: isActive ? "18px" : "0px",
                        overflow:"hidden",
                        transition:"width 260ms cubic-bezier(0.22,1,0.36,1)",
                        color:"#1a1a1a", marginRight: isActive ? "6px" : "0px", fontWeight:700,
                      }}>—</span>
                      {isActive && (
                        <span style={{
                          display:"inline-block", width:6, height:6, borderRadius:"50%",
                          background:"#2D5016", marginRight:10, flexShrink:0,
                          animation:"wwd-dotPulse 2s ease-in-out infinite",
                        }} />
                      )}
                      <span className={`wwd-btn-label${isActive ? " is-active" : ""}`}>
                        {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* ══ MOBILE — pill strip + content below ════ */}
              <div
                className="flex lg:hidden flex-col mt-8 pb-6"
                style={{
                  animation: inView
                    ? "wwd-fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.3s both"
                    : undefined,
                  opacity: inView ? undefined : 0,
                }}
              >
                {/* pill tab strip */}
                <div ref={stripRef} className="wwd-strip">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      data-id={s.id}
                      onClick={() => handleSelect(s.id)}
                      className={`wwd-pill${active === s.id ? " active" : ""}`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                {/* thin divider */}
                <div style={{
                  height: 1, background: "#C5D09B",
                  margin: "14px 0 0",
                }} />

                {/* content — fades when switching */}
                <div
                  className={`wwd-mob-content ${mobileVisible ? "visible" : "hidden"}`}
                  style={{ paddingTop: "1.25rem" }}
                >
                  {getPanel(mobileDisplayed)}
                </div>
              </div>
            </div>

            {/* ── VERTICAL DIVIDER (desktop) ───────────────── */}
            <div
              className="hidden lg:block w-[1px] bg-[#C5D09B] self-stretch flex-shrink-0"
              style={{
                transformOrigin: "top center",
                animation: inView
                  ? "wwd-divider 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                  : undefined,
                opacity: inView ? undefined : 0,
              }}
            />

            {/* ── HORIZONTAL DIVIDER (mobile) ──────────────── */}
            <div
              className="lg:hidden w-full h-[1px] bg-[#C5D09B]"
              style={{
                transformOrigin: "left center",
                animation: inView
                  ? "wwd-dividerH 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                  : undefined,
                opacity: inView ? undefined : 0,
              }}
            />

            {/* ── RIGHT PANEL (desktop only) ───────────────── */}
            <div
              className="hidden lg:block flex-1 overflow-hidden"
              style={{
                transition: "opacity 260ms ease, transform 260ms ease",
                opacity: desktopAnimating ? 0 : 1,
                transform: desktopAnimating ? "translateX(20px)" : "translateX(0px)",
                animation: inView && !desktopAnimating
                  ? "wwd-slideRight 0.75s cubic-bezier(0.22,1,0.36,1) 0.1s both"
                  : undefined,
              }}
            >
              {getPanel(desktopDisplayed)}
            </div>

          </div>
        </div>

        {/* bottom border */}
        <div
          className="w-full h-[1px] bg-[#C5D09B]"
          style={{
            transformOrigin: "left center",
            animation: inView
              ? "wwd-borderGrow 1s cubic-bezier(0.22,1,0.36,1) 0.5s both"
              : undefined,
            opacity: inView ? undefined : 0,
          }}
        />
      </div>
    </>
  );
};

export default WhatWeDo;
