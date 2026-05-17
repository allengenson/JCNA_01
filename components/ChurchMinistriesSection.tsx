"use client";

import { useState, useRef, useEffect } from "react";
import WordEvangelismPanel from "./ministryPanels/WordEvangelismPanel";
import CouplesMinistryPanel from "./ministryPanels/CouplesMinistryPanel";
import YouthMinistryPanel from "./ministryPanels/YouthMinistryPanel";
import ChildrenMinistryPanel from "./ministryPanels/ChildrenMinistryPanel";

type TabId = "word" | "couples" | "youth" | "children";

const tabs: { id: TabId; label: string }[] = [
  { id: "word",     label: "Ministry of the Word\n& Evangelism" },
  { id: "couples",  label: "Couples Ministry"  },
  { id: "youth",    label: "Youth Ministry"    },
  { id: "children", label: "Children Ministry" },
];

/* ── intersection-observer hook (same as ServiceVolunteers) ── */
function useInView(ref: React.RefObject<Element>, threshold = 0.12) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

const ChurchMinistriesSection = () => {
  const [active,            setActive]           = useState<TabId>("word");
  const [desktopAnimating,  setDesktopAnimating] = useState(false);
  const [desktopDisplayed,  setDesktopDisplayed] = useState<TabId>("word");
  const [mobileDisplayed,   setMobileDisplayed]  = useState<TabId>("word");
  const [mobileVisible,     setMobileVisible]    = useState(true);

  const sectionRef = useRef<HTMLDivElement>(null!);
  const stripRef   = useRef<HTMLDivElement>(null);
  const inView     = useInView(sectionRef);

  const handleSelect = (id: TabId) => {
    if (id === active) return;
    setActive(id);

    /* mobile crossfade */
    setMobileVisible(false);
    setTimeout(() => {
      setMobileDisplayed(id);
      setMobileVisible(true);
    }, 200);

    /* desktop crossfade */
    if (!desktopAnimating) {
      setDesktopAnimating(true);
      setTimeout(() => {
        setDesktopDisplayed(id);
        setTimeout(() => setDesktopAnimating(false), 50);
      }, 240);
    }

    /* scroll active pill into view on mobile */
    setTimeout(() => {
      const strip = stripRef.current;
      const btn   = strip?.querySelector(`[data-id="${id}"]`) as HTMLElement;
      if (strip && btn) {
        const sl = strip.scrollLeft, sw = strip.offsetWidth;
        const bl = btn.offsetLeft,   bw = btn.offsetWidth;
        if (bl < sl + 16)
          strip.scrollTo({ left: bl - 16, behavior: "smooth" });
        else if (bl + bw > sl + sw - 16)
          strip.scrollTo({ left: bl + bw - sw + 16, behavior: "smooth" });
      }
    }, 0);
  };

  const renderPanel = (id: TabId) => {
    switch (id) {
      case "word":     return <WordEvangelismPanel />;
      case "couples":  return <CouplesMinistryPanel />;
      case "youth":    return <YouthMinistryPanel />;
      case "children": return <ChildrenMinistryPanel />;
    }
  };

  return (
    <>
      <style>{`
        /* ── entrance animations ── */
        @keyframes cm-slideLeft {
          from { opacity:0; transform:translateX(-36px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes cm-slideRight {
          from { opacity:0; transform:translateX(36px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes cm-fadeUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes cm-dividerV {
          from { transform:scaleY(0); opacity:0; transform-origin:top; }
          to   { transform:scaleY(1); opacity:1; }
        }
        @keyframes cm-dividerH {
          from { transform:scaleX(0); opacity:0; }
          to   { transform:scaleX(1); opacity:1; }
        }
        @keyframes cm-borderGrow {
          from { transform:scaleX(0); }
          to   { transform:scaleX(1); }
        }

        /* ── dot pulse ── */
        @keyframes cm-dotPulse {
          0%,100% { box-shadow: 0 0 0 0   rgba(45,80,22,0.45); }
          50%      { box-shadow: 0 0 0 5px rgba(45,80,22,0); }
        }
        .cm-dot {
          display:inline-block; width:6px; height:6px;
          border-radius:50%; background:#2D5016;
          margin-right:10px; flex-shrink:0;
          animation: cm-dotPulse 2s ease-in-out infinite;
        }

        /* ── nav button underline hover ── */
        .cm-nav-btn { position:relative; padding-bottom:2px; }
        .cm-nav-btn::after {
          content:''; position:absolute;
          bottom:0; left:0; width:0; height:1px;
          background:#2D5016; transition:width 300ms ease;
        }
        .cm-nav-btn:hover::after { width:100%; }
        .cm-nav-btn:hover .cm-label:not(.is-active) { color:#2D5016 !important; }

        /* ── mobile pill strip ── */
        .cm-strip {
          display:flex; gap:8px; overflow-x:auto;
          scrollbar-width:none; -webkit-overflow-scrolling:touch; padding-bottom:2px;
        }
        .cm-strip::-webkit-scrollbar { display:none; }

        .cm-pill {
          flex-shrink:0; padding:7px 16px; border-radius:999px;
          border:1px solid #C5D09B; background:transparent; color:#D4A017;
          font-family:var(--font-dm,sans-serif); font-size:clamp(11px,3.5vw,13px);
          letter-spacing:0.1em; font-weight:500; cursor:pointer; white-space:nowrap;
          transition:background 200ms ease, color 200ms ease,
                      border-color 200ms ease, transform 120ms ease;
        }
        .cm-pill:active { transform:scale(0.96); }
        .cm-pill.active {
          background:#2D5016; border-color:#2D5016; color:#F6F8F1; font-weight:700;
        }

        /* ── mobile content crossfade ── */
        .cm-mob-content { transition:opacity 200ms ease, transform 200ms ease; }
        .cm-mob-content.hidden  { opacity:0; transform:translateY(6px); }
        .cm-mob-content.visible { opacity:1; transform:translateY(0); }
      `}</style>

      <div ref={sectionRef} className="w-full flex justify-center bg-[#F6F8F1] overflow-hidden">
        <div className="w-full max-w-[1418px]">
          <div className="flex flex-col lg:flex-row lg:items-stretch">

            {/* ── LEFT COLUMN ── */}
            <div
              className="w-full lg:w-[436px] lg:flex-shrink-0 px-6 sm:px-10
                         lg:pl-[77px] lg:pr-6 pt-8 lg:pt-[83px] pb-0 lg:pb-[40px]"
              style={{
                animation: inView
                  ? "cm-slideLeft 0.75s cubic-bezier(0.22,1,0.36,1) both"
                  : undefined,
                opacity: inView ? undefined : 0,
              }}
            >
              <h2
                className="font-cormorant"
                style={{
                  fontSize: "clamp(24px, 5vw, 32px)",
                  color: "#2D5016",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  animation: inView
                    ? "cm-fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both"
                    : undefined,
                  opacity: inView ? undefined : 0,
                }}
              >
                Church Ministries
              </h2>

              {/* ══ DESKTOP NAV ══ */}
              <div
                className="hidden lg:flex flex-col mt-[94px]"
                style={{
                  paddingLeft: "clamp(16px, 4vw, 54px)",
                  animation: inView
                    ? "cm-fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.25s both"
                    : undefined,
                  opacity: inView ? undefined : 0,
                }}
              >
                {tabs.map((tab, i) => {
                  const isActive = active === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleSelect(tab.id)}
                      className="cm-nav-btn font-dm text-left bg-transparent border-none cursor-pointer flex items-start"
                      style={{
                        fontSize: "clamp(12px, 2.5vw, 13px)",
                        letterSpacing: "0.12em",
                        color: isActive ? "#1a1a1a" : "#D4A017",
                        fontWeight: isActive ? 700 : 500,
                        lineHeight: tab.id === "word" ? 1.5 : 1,
                        whiteSpace: "pre-line",
                        marginTop: i === 0 ? 0 : 30,
                        padding: 0,
                        transition: "color 220ms ease",
                      }}
                    >
                      {/* animated dash */}
                      <span
                        style={{
                          display: "inline-block",
                          width: isActive ? "16px" : "0px",
                          overflow: "hidden",
                          transition: "width 260ms cubic-bezier(0.22,1,0.36,1)",
                          color: "#1a1a1a",
                          marginRight: isActive ? "6px" : "0px",
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: tab.id === "word" ? "2px" : "0px",
                        }}
                      >
                        —
                      </span>

                      {/* dot pulse */}
                      {isActive && (
                        <span
                          className="cm-dot"
                          style={{ marginTop: tab.id === "word" ? "5px" : "2px" }}
                        />
                      )}

                      <span className={`cm-label${isActive ? " is-active" : ""}`}>
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* ══ MOBILE — pill strip + crossfade ══ */}
              <div
                className="flex lg:hidden flex-col mt-8 pb-6"
                style={{
                  animation: inView
                    ? "cm-fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.25s both"
                    : undefined,
                  opacity: inView ? undefined : 0,
                }}
              >
                {/* scrollable pill strip */}
                <div ref={stripRef} className="cm-strip">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      data-id={tab.id}
                      onClick={() => handleSelect(tab.id)}
                      className={`cm-pill${active === tab.id ? " active" : ""}`}
                    >
                      {/* flatten newline for pills */}
                      {tab.label.replace("\n", " ")}
                    </button>
                  ))}
                </div>

                {/* thin divider */}
                <div style={{ height: 1, background: "#C5D09B", margin: "14px 0 0" }} />

                {/* crossfading content */}
                <div
                  className={`cm-mob-content ${mobileVisible ? "visible" : "hidden"}`}
                  style={{ paddingTop: "1.25rem" }}
                >
                  {renderPanel(mobileDisplayed)}
                </div>
              </div>
            </div>

            {/* ── VERTICAL DIVIDER (desktop) ── */}
            <div
              className="hidden lg:block w-[1px] bg-[#C5D09B] self-stretch flex-shrink-0"
              style={{
                transformOrigin: "top center",
                animation: inView
                  ? "cm-dividerV 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                  : undefined,
                opacity: inView ? undefined : 0,
              }}
            />

            {/* ── HORIZONTAL DIVIDER (mobile) ── */}
            <div
              className="lg:hidden w-full h-[1px] bg-[#C5D09B]"
              style={{
                transformOrigin: "left center",
                animation: inView
                  ? "cm-dividerH 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                  : undefined,
                opacity: inView ? undefined : 0,
              }}
            />

            {/* ── RIGHT PANEL (desktop) ── */}
            <div
              className="hidden lg:block flex-1"
              style={{
                transition: "opacity 260ms ease, transform 260ms ease",
                opacity: desktopAnimating ? 0 : 1,
                transform: desktopAnimating ? "translateX(16px)" : "translateX(0)",
                animation:
                  inView && !desktopAnimating
                    ? "cm-slideRight 0.75s cubic-bezier(0.22,1,0.36,1) 0.1s both"
                    : undefined,
              }}
            >
              {renderPanel(desktopDisplayed)}
            </div>

          </div>

          {/* ── BOTTOM DIVIDER ── */}
          <div
            className="w-full h-[1px] bg-[#C5D09B]"
            style={{
              transformOrigin: "left center",
              animation: inView
                ? "cm-borderGrow 1s cubic-bezier(0.22,1,0.36,1) 0.5s both"
                : undefined,
              opacity: inView ? undefined : 0,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ChurchMinistriesSection;
