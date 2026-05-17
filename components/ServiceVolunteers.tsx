"use client";

import { useState, useEffect, useRef } from "react";
import PreachersPanel from "./volunteerPanels/PreachersPanel";
import InstrumentalistsPanel from "./volunteerPanels/InstrumentalistsPanel";
import WorkersPanel from "./volunteerPanels/WorkersPanel";
import ChildrenChoirPanel from "./volunteerPanels/ChildrenChoirPanel";
import GospelChoirPanel from "./volunteerPanels/GospelChoirPanel";
import AdultsChoirPanel from "./volunteerPanels/AdultsChoirPanel";

type PanelId =
  | "preachers"
  | "instrumentalists"
  | "workers"
  | "children"
  | "gospel"
  | "adults";

const TOP_ITEMS: { id: PanelId; label: string }[] = [
  { id: "preachers", label: "Preachers" },
  { id: "instrumentalists", label: "Instrumentalists" },
  { id: "workers", label: "Workers" },
];

const CHOIR_ITEMS: { id: PanelId; label: string }[] = [
  { id: "children", label: "Children" },
  { id: "gospel", label: "Gospel" },
  { id: "adults", label: "Adults" },
];

const ALL_ITEMS = [...TOP_ITEMS, ...CHOIR_ITEMS];

function useInView(ref: React.RefObject<Element>, threshold = 0.12) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

const ServiceVolunteers = () => {
  const [active, setActive] = useState<PanelId>("preachers");
  const [desktopAnimating, setDesktopAnimating] = useState(false);
  const [desktopDisplayed, setDesktopDisplayed] =
    useState<PanelId>("preachers");
  const [mobileDisplayed, setMobileDisplayed] = useState<PanelId>("preachers");
  const [mobileVisible, setMobileVisible] = useState(true);

  const sectionRef = useRef<HTMLDivElement>(null!);
  const stripRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef);

  const handleSelect = (id: PanelId) => {
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

    /* scroll active pill into view */
    setTimeout(() => {
      const strip = stripRef.current;
      const btn = strip?.querySelector(`[data-id="${id}"]`) as HTMLElement;
      if (strip && btn) {
        const sl = strip.scrollLeft,
          sw = strip.offsetWidth;
        const bl = btn.offsetLeft,
          bw = btn.offsetWidth;
        if (bl < sl + 16) strip.scrollTo({ left: bl - 16, behavior: "smooth" });
        else if (bl + bw > sl + sw - 16)
          strip.scrollTo({ left: bl + bw - sw + 16, behavior: "smooth" });
      }
    }, 0);
  };

  const renderPanel = (id: PanelId) => {
    switch (id) {
      case "preachers":
        return <PreachersPanel />;
      case "instrumentalists":
        return <InstrumentalistsPanel />;
      case "workers":
        return <WorkersPanel />;
      case "children":
        return <ChildrenChoirPanel />;
      case "gospel":
        return <GospelChoirPanel />;
      case "adults":
        return <AdultsChoirPanel />;
      default:
        return <PreachersPanel />;
    }
  };

  const choirActive = (["children", "gospel", "adults"] as PanelId[]).includes(
    active,
  );

  return (
    <>
      <style>{`
        @keyframes sv-slideLeft {
          from { opacity:0; transform:translateX(-36px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes sv-slideRight {
          from { opacity:0; transform:translateX(36px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes sv-fadeUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes sv-dividerV {
          from { transform:scaleY(0); opacity:0; transform-origin:top; }
          to   { transform:scaleY(1); opacity:1; }
        }
        @keyframes sv-dividerH {
          from { transform:scaleX(0); opacity:0; }
          to   { transform:scaleX(1); opacity:1; }
        }
        @keyframes sv-vineGrow {
          from { height:0; opacity:0; }
          to   { height:120px; opacity:1; }
        }
        @keyframes sv-dotPulse {
          0%,100% { box-shadow: 0 0 0 0   rgba(45,80,22,0.45); }
          50%      { box-shadow: 0 0 0 5px rgba(45,80,22,0); }
        }
        @keyframes sv-borderGrow {
          from { transform:scaleX(0); }
          to   { transform:scaleX(1); }
        }

        .sv-nav-btn { position:relative; padding-bottom:2px; }
        .sv-nav-btn::after {
          content:''; position:absolute;
          bottom:0; left:0; width:0; height:1px;
          background:#2D5016; transition:width 300ms ease;
        }
        .sv-nav-btn:hover::after { width:100%; }
        .sv-nav-btn:hover .sv-label:not(.is-active) { color:#2D5016 !important; }

        .sv-dot {
          display:inline-block; width:6px; height:6px;
          border-radius:50%; background:#2D5016;
          margin-right:10px; flex-shrink:0;
          animation: sv-dotPulse 2s ease-in-out infinite;
        }

        .sv-vine {
  width: 1px; min-width: 1px; max-width: 1px;
  background: #C5D09B;
  margin-right: 15px; margin-top: 30px;
  flex-shrink: 0; align-self: flex-start;
  height: 0; opacity: 0;
}
        .sv-vine.grow {
          animation: sv-vineGrow 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s forwards;
        }

        /* ── mobile pill strip ── */
        .sv-strip {
          display:flex; gap:8px; overflow-x:auto;
          scrollbar-width:none; -webkit-overflow-scrolling:touch; padding-bottom:2px;
        }
        .sv-strip::-webkit-scrollbar { display:none; }

        .sv-pill {
          flex-shrink:0; padding:7px 16px; border-radius:999px;
          border:1px solid #C5D09B; background:transparent; color:#D4A017;
          font-family:var(--font-dm,sans-serif); font-size:clamp(11px,3.5vw,13px);
          letter-spacing:0.1em; font-weight:500; cursor:pointer; white-space:nowrap;
          transition:background 200ms ease, color 200ms ease,
                      border-color 200ms ease, transform 120ms ease;
        }
        .sv-pill:active { transform:scale(0.96); }
        .sv-pill.active {
          background:#2D5016; border-color:#2D5016; color:#F6F8F1; font-weight:700;
        }

        /* ── mobile content fade ── */
        .sv-mob-content { transition:opacity 200ms ease, transform 200ms ease; }
        .sv-mob-content.hidden  { opacity:0; transform:translateY(6px); }
        .sv-mob-content.visible { opacity:1; transform:translateY(0); }
      `}</style>

      <div
        ref={sectionRef}
        className="w-full flex justify-center bg-[#F6F8F1] overflow-hidden"
      >
        <div className="w-full max-w-[1418px]">
          <div className="flex flex-col lg:flex-row lg:items-stretch">
            {/* ── LEFT COLUMN ── */}
            <div
              className="w-full lg:w-[436px] lg:flex-shrink-0 px-6 sm:px-10
                         lg:pl-[75px] lg:pr-6 pt-8 lg:pt-[83px] pb-0 lg:pb-[40px]"
              style={{
                animation: inView
                  ? "sv-slideLeft 0.75s cubic-bezier(0.22,1,0.36,1) both"
                  : undefined,
                opacity: inView ? undefined : 0,
              }}
            >
              <h2
                className="font-cormorant"
                style={{
                  fontSize: "clamp(24px,5vw,32px)",
                  color: "#2D5016",
                  fontWeight: 400,
                  animation: inView
                    ? "sv-fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both"
                    : undefined,
                  opacity: inView ? undefined : 0,
                }}
              >
                Service Volunteers
              </h2>

              {/* ══ DESKTOP NAV ══ */}
              <div
                className="hidden lg:flex mt-[94px] flex-col gap-0"
                style={{
                  animation: inView
                    ? "sv-fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.25s both"
                    : undefined,
                  opacity: inView ? undefined : 0,
                }}
              >
                {TOP_ITEMS.map((item, i) => {
                  const isActive = active === item.id;
                  return (
                    <div
                      key={item.id}
                      style={{
                        paddingLeft: "clamp(16px,4vw,56px)",
                        marginTop: i === 0 ? 0 : 30,
                      }}
                    >
                      <button
                        onClick={() => handleSelect(item.id)}
                        className="sv-nav-btn font-dm text-left bg-transparent border-none cursor-pointer flex items-center"
                        style={{
                          fontSize: "clamp(12px,3vw,14px)",
                          letterSpacing: "0.12em",
                          color: isActive ? "#1a1a1a" : "#D4A017",
                          fontWeight: isActive ? 700 : 400,
                          padding: 0,
                          transition: "color 220ms ease",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            width: isActive ? "16px" : "0px",
                            overflow: "hidden",
                            transition:
                              "width 260ms cubic-bezier(0.22,1,0.36,1)",
                            color: "#1a1a1a",
                            marginRight: isActive ? "6px" : "0px",
                            fontWeight: 700,
                          }}
                        >
                          —
                        </span>
                        {isActive && <span className="sv-dot" />}
                        <span
                          className={`sv-label${isActive ? " is-active" : ""}`}
                        >
                          {item.label}
                        </span>
                      </button>
                    </div>
                  );
                })}

                <div
                  style={{ paddingLeft: "clamp(16px,4vw,56px)", marginTop: 30 }}
                >
                  <p
                    className="font-dm"
                    style={{
                      fontSize: "clamp(12px,3vw,14px)",
                      letterSpacing: "0.12em",
                      color: choirActive ? "#1a1a1a" : "#D4A017",
                      fontWeight: choirActive ? 700 : 400,
                      margin: 0,
                      transition: "color 220ms ease",
                    }}
                  >
                    Choirs
                  </p>
                </div>

                <div
                  className="flex"
                  style={{ paddingLeft: "clamp(20px,5vw,80px)", marginTop: 0 }}
                >
                  <div className={`sv-vine${inView ? " grow" : ""}`} />
                  <div className="flex flex-col gap-0">
                    {CHOIR_ITEMS.map((item) => {
                      const isActive = active === item.id;
                      return (
                        <div key={item.id} style={{ marginTop: 30 }}>
                          <button
                            onClick={() => handleSelect(item.id)}
                            className="sv-nav-btn font-dm text-left bg-transparent border-none cursor-pointer flex items-center"
                            style={{
                              fontSize: "clamp(11px,2.5vw,12px)",
                              letterSpacing: "0.12em",
                              color: isActive ? "#1a1a1a" : "#D4A017",
                              fontWeight: isActive ? 700 : 400,
                              padding: 0,
                              transition: "color 220ms ease",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-block",
                                width: isActive ? "14px" : "0px",
                                overflow: "hidden",
                                transition:
                                  "width 260ms cubic-bezier(0.22,1,0.36,1)",
                                color: "#1a1a1a",
                                marginRight: isActive ? "5px" : "0px",
                                fontWeight: 700,
                              }}
                            >
                              —
                            </span>
                            {isActive && (
                              <span
                                className="sv-dot"
                                style={{ width: 5, height: 5 }}
                              />
                            )}
                            <span
                              className={`sv-label${isActive ? " is-active" : ""}`}
                            >
                              {item.label}
                            </span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ══ MOBILE — pill strip + crossfade content (same as WhatWeDo) ══ */}
              <div
                className="flex lg:hidden flex-col mt-8 pb-6"
                style={{
                  animation: inView
                    ? "sv-fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.25s both"
                    : undefined,
                  opacity: inView ? undefined : 0,
                }}
              >
                {/* scrollable pill strip */}
                <div ref={stripRef} className="sv-strip">
                  {ALL_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      data-id={item.id}
                      onClick={() => handleSelect(item.id)}
                      className={`sv-pill${active === item.id ? " active" : ""}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* thin divider */}
                <div
                  style={{
                    height: 1,
                    background: "#C5D09B",
                    margin: "14px 0 0",
                  }}
                />

                {/* single crossfading content area */}
                <div
                  className={`sv-mob-content ${mobileVisible ? "visible" : "hidden"}`}
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
                  ? "sv-dividerV 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s both"
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
                  ? "sv-dividerH 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                  : undefined,
                opacity: inView ? undefined : 0,
              }}
            />

            {/* ── RIGHT PANEL (desktop only) ── */}
            <div
              className="hidden lg:block flex-1"
              style={{
                transition: "opacity 260ms ease, transform 260ms ease",
                opacity: desktopAnimating ? 0 : 1,
                transform: desktopAnimating
                  ? "translateX(16px)"
                  : "translateX(0)",
                animation:
                  inView && !desktopAnimating
                    ? "sv-slideRight 0.75s cubic-bezier(0.22,1,0.36,1) 0.1s both"
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
                ? "sv-borderGrow 1s cubic-bezier(0.22,1,0.36,1) 0.5s both"
                : undefined,
              opacity: inView ? undefined : 0,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ServiceVolunteers;
