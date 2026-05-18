"use client";

import { useState, useEffect, useRef } from "react";

// ── Panel imports (Church Service) ──
import TestimoniesPanel from "./panels/TestimoniesPanel";
import PreachingPanel from "./panels/PreachingPanel";
import BibleStudyPanel from "./panels/BibleStudyPanel";
import PraiseWorshipPanel from "./panels/PraiseWorshipPanel";
import TithesPanel from "./panels/TithesPanel";

// ── Panel imports (Service Volunteers) ──
import PreachersPanel from "./volunteerPanels/PreachersPanel";
import InstrumentalistsPanel from "./volunteerPanels/InstrumentalistsPanel";
import WorkersPanel from "./volunteerPanels/WorkersPanel";
import ChildrenChoirPanel from "./volunteerPanels/ChildrenChoirPanel";
import GospelChoirPanel from "./volunteerPanels/GospelChoirPanel";
import AdultsChoirPanel from "./volunteerPanels/AdultsChoirPanel";

// ── Panel imports (Church Ministries) ──
import WordEvangelismPanel from "./ministryPanels/WordEvangelismPanel";
import CouplesMinistryPanel from "./ministryPanels/CouplesMinistryPanel";
import YouthMinistryPanel from "./ministryPanels/YouthMinistryPanel";
import ChildrenMinistryPanel from "./ministryPanels/ChildrenMinistryPanel";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type TopTab = "church-service" | "service-volunteers" | "church-ministries";

type ServiceId = "praise-worship" | "bible-study" | "testimonies" | "tithes" | "preaching";
type VolunteerId = "preachers" | "instrumentalists" | "workers" | "children" | "gospel" | "adults";
type MinistryId = "word" | "couples" | "youth" | "children-ministry";

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────
const services: { id: ServiceId; label: string }[] = [
  { id: "praise-worship", label: "Praise and Worship" },
  { id: "bible-study",    label: "Bible Study" },
  { id: "testimonies",    label: "Testimonies" },
  { id: "tithes",         label: "Tithes and Love Offering" },
  { id: "preaching",      label: "Preaching" },
];

const volunteerTopItems: { id: VolunteerId; label: string }[] = [
  { id: "preachers",       label: "Preachers" },
  { id: "instrumentalists",label: "Instrumentalists" },
  { id: "workers",         label: "Workers" },
];
const volunteerChoirItems: { id: VolunteerId; label: string }[] = [
  { id: "children", label: "Children" },
  { id: "gospel",   label: "Gospel" },
  { id: "adults",   label: "Adults" },
];
const allVolunteers = [...volunteerTopItems, ...volunteerChoirItems];

const ministryTabs: { id: MinistryId; label: string }[] = [
  { id: "word",              label: "Ministry of the Word\n& Evangelism" },
  { id: "couples",           label: "Couples Ministry" },
  { id: "youth",             label: "Youth Ministry" },
  { id: "children-ministry", label: "Children Ministry" },
];

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────
function useInView(ref: React.RefObject<Element>, threshold = 0.1) {
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

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
const WhatWeDo = () => {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const inView = useInView(sectionRef);

  // ── top tab ──
  const [activeTab, setActiveTab] = useState<TopTab>("church-service");
  const [tabAnimating, setTabAnimating] = useState(false);
  const [displayedTab, setDisplayedTab] = useState<TopTab>("church-service");

  // ── church service accordion ──
  const [activeService, setActiveService] = useState<ServiceId | null>(null);

  // ── service volunteers ──
  const [activeVol, setActiveVol] = useState<VolunteerId>("preachers");
  const [volDesktopAnimating, setVolDesktopAnimating] = useState(false);
  const [volDesktopDisplayed, setVolDesktopDisplayed] = useState<VolunteerId>("preachers");
  const [volMobileDisplayed, setVolMobileDisplayed] = useState<VolunteerId>("preachers");
  const [volMobileVisible, setVolMobileVisible] = useState(true);
  const volStripRef = useRef<HTMLDivElement>(null);

  // ── church ministries ──
  const [activeMin, setActiveMin] = useState<MinistryId>("word");
  const [minDesktopAnimating, setMinDesktopAnimating] = useState(false);
  const [minDesktopDisplayed, setMinDesktopDisplayed] = useState<MinistryId>("word");
  const [minMobileDisplayed, setMinMobileDisplayed] = useState<MinistryId>("word");
  const [minMobileVisible, setMinMobileVisible] = useState(true);
  const minStripRef = useRef<HTMLDivElement>(null);

  // ─── tab switch ───────────────────────────────
  const handleTabSwitch = (tab: TopTab) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    setTabAnimating(true);
    setTimeout(() => {
      setDisplayedTab(tab);
      setTimeout(() => setTabAnimating(false), 50);
    }, 200);
  };

  // ─── volunteer handlers ────────────────────────
  const handleVolSelect = (id: VolunteerId) => {
    if (id === activeVol) return;
    setActiveVol(id);
    setVolMobileVisible(false);
    setTimeout(() => { setVolMobileDisplayed(id); setVolMobileVisible(true); }, 200);
    if (!volDesktopAnimating) {
      setVolDesktopAnimating(true);
      setTimeout(() => { setVolDesktopDisplayed(id); setTimeout(() => setVolDesktopAnimating(false), 50); }, 240);
    }
    setTimeout(() => scrollPillIntoView(volStripRef, id), 0);
  };

  // ─── ministry handlers ─────────────────────────
  const handleMinSelect = (id: MinistryId) => {
    if (id === activeMin) return;
    setActiveMin(id);
    setMinMobileVisible(false);
    setTimeout(() => { setMinMobileDisplayed(id); setMinMobileVisible(true); }, 200);
    if (!minDesktopAnimating) {
      setMinDesktopAnimating(true);
      setTimeout(() => { setMinDesktopDisplayed(id); setTimeout(() => setMinDesktopAnimating(false), 50); }, 240);
    }
    setTimeout(() => scrollPillIntoView(minStripRef, id), 0);
  };

  function scrollPillIntoView(stripRef: React.RefObject<HTMLDivElement | null>, id: string) {
    const strip = stripRef.current;
    const btn = strip?.querySelector(`[data-id="${id}"]`) as HTMLElement;
    if (strip && btn) {
      const sl = strip.scrollLeft, sw = strip.offsetWidth;
      const bl = btn.offsetLeft, bw = btn.offsetWidth;
      if (bl < sl + 16) strip.scrollTo({ left: bl - 16, behavior: "smooth" });
      else if (bl + bw > sl + sw - 16) strip.scrollTo({ left: bl + bw - sw + 16, behavior: "smooth" });
    }
  }

  // ─── panel renderers ───────────────────────────
  const getServicePanel = (id: ServiceId) => {
    switch (id) {
      case "testimonies":    return <TestimoniesPanel   onNavigate={(x: string) => setActiveService(x as ServiceId)} />;
      case "preaching":      return <PreachingPanel     onNavigate={(x: string) => setActiveService(x as ServiceId)} />;
      case "bible-study":    return <BibleStudyPanel    onNavigate={(x: string) => setActiveService(x as ServiceId)} />;
      case "praise-worship": return <PraiseWorshipPanel onNavigate={(x: string) => setActiveService(x as ServiceId)} />;
      case "tithes":         return <TithesPanel        onNavigate={(x: string) => setActiveService(x as ServiceId)} />;
    }
  };

  const renderVolPanel = (id: VolunteerId) => {
    switch (id) {
      case "preachers":        return <PreachersPanel />;
      case "instrumentalists": return <InstrumentalistsPanel />;
      case "workers":          return <WorkersPanel />;
      case "children":         return <ChildrenChoirPanel />;
      case "gospel":           return <GospelChoirPanel />;
      case "adults":           return <AdultsChoirPanel />;
    }
  };

  const renderMinPanel = (id: MinistryId) => {
    switch (id) {
      case "word":              return <WordEvangelismPanel />;
      case "couples":           return <CouplesMinistryPanel />;
      case "youth":             return <YouthMinistryPanel />;
      case "children-ministry": return <ChildrenMinistryPanel />;
    }
  };

  const choirActive = (["children", "gospel", "adults"] as VolunteerId[]).includes(activeVol);

  return (
    <>
      <style>{`
        /* ══ entrance animations ══ */
        @keyframes wwd-fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes wwd-growH {
          from { transform:scaleX(0); opacity:0; }
          to   { transform:scaleX(1); opacity:1; }
        }
        @keyframes wwd-contentIn {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes wwd-barIn {
          from { transform:scaleY(0); }
          to   { transform:scaleY(1); }
        }
        @keyframes wwd-dotPulse {
          0%,100% { box-shadow:0 0 0 0   rgba(45,80,22,.4); }
          50%      { box-shadow:0 0 0 5px rgba(45,80,22,0); }
        }
        @keyframes sv-slideLeft {
          from { opacity:0; transform:translateX(-36px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes sv-slideRight {
          from { opacity:0; transform:translateX(36px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes sv-dividerV {
          from { transform:scaleY(0); opacity:0; transform-origin:top; }
          to   { transform:scaleY(1); opacity:1; }
        }
        @keyframes sv-vineGrow {
          from { height:0; opacity:0; }
          to   { height:120px; opacity:1; }
        }

        /* ══ top tab pills ══ */
        .wwd-top-strip {
          display:flex; gap:10px; flex-wrap:wrap; justify-content:center;
        }
        .wwd-top-pill {
          padding:8px 22px; border-radius:999px;
          border:1px solid #C5D09B; background:transparent;
          font-family:'DM Sans',sans-serif;
          font-size:clamp(11px,3vw,13px); letter-spacing:0.1em;
          font-weight:500; cursor:pointer; white-space:nowrap;
          color:#D4A017;
          transition:background 220ms ease, color 220ms ease,
                      border-color 220ms ease, transform 120ms ease;
        }
        .wwd-top-pill:active { transform:scale(0.96); }
        .wwd-top-pill.active {
          background:#2D5016; border-color:#2D5016;
          color:#F6F8F1; font-weight:700;
        }
        .wwd-top-pill:not(.active):hover {
          border-color:#82B657; color:#82B657;
        }

        /* ══ tab content wrapper ══ */
        .wwd-tab-body {
          transition: opacity 200ms ease, transform 200ms ease;
        }
        .wwd-tab-body.fading { opacity:0; transform:translateY(8px); }
        .wwd-tab-body.visible { opacity:1; transform:translateY(0); }

        /* ══ accordion rows ══ */
        .wwd-acc-row {
          position:relative; border-top:0.5px solid #C5D09B;
          overflow:hidden; transition:background 300ms ease;
        }
        .wwd-acc-row:last-of-type { border-bottom:0.5px solid #C5D09B; }
        .wwd-acc-row.is-open { background:rgba(130,182,87,0.055); }

        .wwd-left-bar {
          position:absolute; left:0; top:0; bottom:0; width:3px;
          background:#82B657; border-radius:0 2px 2px 0;
          transform-origin:top center;
          animation:wwd-barIn 0.35s cubic-bezier(0.22,1,0.36,1) both;
        }

        .wwd-acc-header {
          display:flex; align-items:center; justify-content:center;
          width:100%; padding:20px 28px;
          background:transparent; border:none; cursor:pointer;
          text-align:center; gap:14px; position:relative;
        }
        .wwd-acc-label {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(18px,3.5vw,26px); letter-spacing:0.12em;
          font-weight:500; line-height:1;
          transition:color 260ms ease; color:#D4A017;
          display:flex; align-items:center; gap:10px;
        }
        .wwd-acc-row.is-open .wwd-acc-label { color:#2D5016; font-weight:700; }

        .wwd-dot {
          width:7px; height:7px; border-radius:50%;
          background:#2D5016; flex-shrink:0;
          animation:wwd-dotPulse 2.2s ease-in-out infinite;
        }

        .wwd-icon {
          position:absolute; right:24px; top:50%; transform:translateY(-50%);
          flex-shrink:0; width:28px; height:28px; border-radius:50%;
          border:1px solid #C5D09B;
          display:flex; align-items:center; justify-content:center;
          transition:transform 320ms cubic-bezier(0.34,1.56,0.64,1),
                      background 260ms ease, border-color 260ms ease;
          color:#C5D09B;
        }
        .wwd-acc-row.is-open .wwd-icon {
          transform:translateY(-50%) rotate(45deg);
          background:#2D5016; border-color:#2D5016; color:#fff;
        }
        .wwd-icon svg { width:14px; height:14px; stroke:currentColor; stroke-width:2.5; stroke-linecap:round; }

        .wwd-acc-row:not(.is-open) .wwd-acc-header:hover .wwd-acc-label { color:#82B657; }
        .wwd-acc-row:not(.is-open) .wwd-acc-header:hover .wwd-icon { border-color:#82B657; color:#82B657; }

        .wwd-acc-body {
          display:grid; grid-template-rows:0fr;
          transition:grid-template-rows 420ms cubic-bezier(0.22,1,0.36,1);
        }
        .wwd-acc-row.is-open .wwd-acc-body { grid-template-rows:1fr; }
        .wwd-acc-inner { overflow:hidden; }
        .wwd-acc-content {
          padding:4px 28px 32px 28px;
          animation:wwd-contentIn 0.4s cubic-bezier(0.22,1,0.36,1) 0.15s both;
        }

        /* ══ left-nav shared (volunteers + ministries) ══ */
        .sv-nav-btn { position:relative; padding-bottom:2px; }
        .sv-nav-btn::after {
          content:''; position:absolute; bottom:0; left:0;
          width:0; height:1px; background:#2D5016; transition:width 300ms ease;
        }
        .sv-nav-btn:hover::after { width:100%; }
        .sv-nav-btn:hover .sv-label:not(.is-active) { color:#2D5016 !important; }

        .sv-dot {
          display:inline-block; width:6px; height:6px; border-radius:50%;
          background:#2D5016; margin-right:10px; flex-shrink:0;
          animation:wwd-dotPulse 2s ease-in-out infinite;
        }

        .sv-vine {
          width:1px; min-width:1px; max-width:1px;
          background:#C5D09B; margin-right:15px; margin-top:30px;
          flex-shrink:0; align-self:flex-start;
          height:0; opacity:0;
        }
        .sv-vine.grow {
          animation:sv-vineGrow 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s forwards;
        }

        /* ══ mobile pill strip (volunteers + ministries) ══ */
        .sv-strip {
          display:flex; gap:8px; overflow-x:auto;
          scrollbar-width:none; -webkit-overflow-scrolling:touch; padding-bottom:2px;
        }
        .sv-strip::-webkit-scrollbar { display:none; }

        .sv-pill {
          flex-shrink:0; padding:7px 16px; border-radius:999px;
          border:1px solid #C5D09B; background:transparent; color:#D4A017;
          font-family:'DM Sans',sans-serif; font-size:clamp(11px,3.5vw,13px);
          letter-spacing:0.1em; font-weight:500; cursor:pointer; white-space:nowrap;
          transition:background 200ms ease, color 200ms ease,
                      border-color 200ms ease, transform 120ms ease;
        }
        .sv-pill:active { transform:scale(0.96); }
        .sv-pill.active {
          background:#2D5016; border-color:#2D5016; color:#F6F8F1; font-weight:700;
        }

        .sv-mob-content { transition:opacity 200ms ease, transform 200ms ease; }
        .sv-mob-content.hidden  { opacity:0; transform:translateY(6px); }
        .sv-mob-content.visible { opacity:1; transform:translateY(0); }
      `}</style>

      <div
        id="what-we-do"
        ref={sectionRef}
        className="w-full bg-[#F6F8F1] overflow-hidden"
      >
        {/* ══ HEADING + TOP TABS ══ */}
        <div
          className="w-full max-w-[860px] mx-auto px-4 sm:px-8 lg:px-12
                     pt-14 pb-0 lg:pt-[70px]"
          style={{
            animation: inView ? "wwd-fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both" : undefined,
            opacity: inView ? undefined : 0,
          }}
        >
          {/* heading */}
          <div className="text-center mb-8 lg:mb-10">
            <h2
              className="font-cormorant"
              style={{
                fontSize: "clamp(28px,5vw,38px)",
                color: "#D4A017",
                letterSpacing: "0.15em",
                fontWeight: 500,
                lineHeight: 1,
                marginBottom: "10px",
              }}
            >
              What We Do —
            </h2>

            {/* decorative rule */}
            <div
              style={{
                height: "1px",
                background: "#C5D09B",
                marginTop: "22px",
                transformOrigin: "center center",
                animation: inView
                  ? "wwd-growH 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                  : undefined,
                opacity: inView ? undefined : 0,
              }}
            />
          </div>

          {/* top tabs */}
          <div
            className="wwd-top-strip mb-8 lg:mb-10"
            style={{
              animation: inView
                ? "wwd-fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both"
                : undefined,
              opacity: inView ? undefined : 0,
            }}
          >
            {(["church-service", "service-volunteers", "church-ministries"] as TopTab[]).map(tab => (
              <button
                key={tab}
                onClick={() => handleTabSwitch(tab)}
                className={`wwd-top-pill${activeTab === tab ? " active" : ""}`}
              >
                {tab === "church-service"    && "Church Service"}
                {tab === "service-volunteers"&& "Service Volunteers"}
                {tab === "church-ministries" && "Church Ministries"}
              </button>
            ))}
          </div>
        </div>

        {/* ══ TAB BODY ══ */}
        <div
          className={`wwd-tab-body${tabAnimating ? " fading" : " visible"}`}
        >

          {/* ─────────────── CHURCH SERVICE (accordion) ─────────────── */}
          {displayedTab === "church-service" && (
            <div className="w-full max-w-[860px] mx-auto px-4 sm:px-8 lg:px-12 pb-16 lg:pb-[80px]">
              {services.map((s, i) => {
                const isOpen = activeService === s.id;
                return (
                  <div
                    key={s.id}
                    className={`wwd-acc-row${isOpen ? " is-open" : ""}`}
                    style={{
                      animation: inView
                        ? `wwd-fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.07}s both`
                        : undefined,
                      opacity: inView ? undefined : 0,
                    }}
                  >
                    {isOpen && <div className="wwd-left-bar" />}

                    <button
                      className="wwd-acc-header"
                      onClick={() => setActiveService(prev => prev === s.id ? null : s.id)}
                      aria-expanded={isOpen}
                    >
                      <span className="wwd-acc-label">
                        {isOpen && <span className="wwd-dot" aria-hidden="true" />}
                        {s.label}
                      </span>
                      <span className="wwd-icon" aria-hidden="true">
                        <svg viewBox="0 0 14 14" fill="none">
                          <line x1="7" y1="1" x2="7" y2="13" />
                          <line x1="1" y1="7" x2="13" y2="7" />
                        </svg>
                      </span>
                    </button>

                    <div className="wwd-acc-body" aria-hidden={!isOpen}>
                      <div className="wwd-acc-inner">
                        {isOpen && (
                          <div className="wwd-acc-content">
                            {getServicePanel(s.id)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ─────────────── SERVICE VOLUNTEERS ─────────────── */}
          {displayedTab === "service-volunteers" && (
            <div className="w-full flex justify-center bg-[#F6F8F1] overflow-hidden">
              <div className="w-full max-w-[1418px]">
                <div className="flex flex-col lg:flex-row lg:items-stretch">

                  {/* LEFT column */}
                  <div
                    className="w-full lg:w-[436px] lg:flex-shrink-0 px-6 sm:px-10
                               lg:pl-[75px] lg:pr-6 pt-8 lg:pt-[50px] pb-0 lg:pb-[40px]"
                    style={{ animation: "sv-slideLeft 0.75s cubic-bezier(0.22,1,0.36,1) both" }}
                  >
                    <h3
                      className="font-cormorant"
                      style={{ fontSize: "clamp(20px,4vw,28px)", color: "#2D5016", fontWeight: 400 }}
                    >
                      Service Volunteers
                    </h3>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex mt-[60px] flex-col gap-0" style={{ paddingLeft: "clamp(16px,4vw,56px)" }}>
                      {volunteerTopItems.map((item, i) => {
                        const isActive = activeVol === item.id;
                        return (
                          <div key={item.id} style={{ marginTop: i === 0 ? 0 : 30 }}>
                            <button
                              onClick={() => handleVolSelect(item.id)}
                              className="sv-nav-btn font-dm text-left bg-transparent border-none cursor-pointer flex items-center"
                              style={{
                                fontSize: "clamp(12px,3vw,14px)", letterSpacing: "0.12em",
                                color: isActive ? "#1a1a1a" : "#D4A017",
                                fontWeight: isActive ? 700 : 400, padding: 0,
                                transition: "color 220ms ease",
                              }}
                            >
                              <span style={{ display:"inline-block", width: isActive ? "16px" : "0px", overflow:"hidden", transition:"width 260ms cubic-bezier(0.22,1,0.36,1)", color:"#1a1a1a", marginRight: isActive ? "6px" : "0px", fontWeight:700 }}>—</span>
                              {isActive && <span className="sv-dot" />}
                              <span className={`sv-label${isActive ? " is-active" : ""}`}>{item.label}</span>
                            </button>
                          </div>
                        );
                      })}

                      {/* Choirs heading */}
                      <div style={{ marginTop: 30 }}>
                        <p className="font-dm" style={{ fontSize:"clamp(12px,3vw,14px)", letterSpacing:"0.12em", color: choirActive ? "#1a1a1a" : "#D4A017", fontWeight: choirActive ? 700 : 400, margin:0, transition:"color 220ms ease" }}>Choirs</p>
                      </div>

                      <div className="flex" style={{ paddingLeft: "clamp(4px,1vw,24px)", marginTop: 0 }}>
                        <div className={`sv-vine grow`} />
                        <div className="flex flex-col gap-0">
                          {volunteerChoirItems.map(item => {
                            const isActive = activeVol === item.id;
                            return (
                              <div key={item.id} style={{ marginTop: 30 }}>
                                <button
                                  onClick={() => handleVolSelect(item.id)}
                                  className="sv-nav-btn font-dm text-left bg-transparent border-none cursor-pointer flex items-center"
                                  style={{
                                    fontSize:"clamp(11px,2.5vw,12px)", letterSpacing:"0.12em",
                                    color: isActive ? "#1a1a1a" : "#D4A017",
                                    fontWeight: isActive ? 700 : 400, padding:0,
                                    transition:"color 220ms ease",
                                  }}
                                >
                                  <span style={{ display:"inline-block", width: isActive ? "14px" : "0px", overflow:"hidden", transition:"width 260ms cubic-bezier(0.22,1,0.36,1)", color:"#1a1a1a", marginRight: isActive ? "5px" : "0px", fontWeight:700 }}>—</span>
                                  {isActive && <span className="sv-dot" style={{ width:5, height:5 }} />}
                                  <span className={`sv-label${isActive ? " is-active" : ""}`}>{item.label}</span>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Mobile pill strip */}
                    <div className="flex lg:hidden flex-col mt-8 pb-6">
                      <div ref={volStripRef} className="sv-strip">
                        {allVolunteers.map(item => (
                          <button key={item.id} data-id={item.id} onClick={() => handleVolSelect(item.id)} className={`sv-pill${activeVol === item.id ? " active" : ""}`}>{item.label}</button>
                        ))}
                      </div>
                      <div style={{ height:1, background:"#C5D09B", margin:"14px 0 0" }} />
                      <div className={`sv-mob-content ${volMobileVisible ? "visible" : "hidden"}`} style={{ paddingTop:"1.25rem" }}>
                        {renderVolPanel(volMobileDisplayed)}
                      </div>
                    </div>
                  </div>

                  {/* Vertical divider desktop */}
                  <div className="hidden lg:block w-[1px] bg-[#C5D09B] self-stretch flex-shrink-0" style={{ animation:"sv-dividerV 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s both" }} />
                  {/* Horizontal divider mobile */}
                  <div className="lg:hidden w-full h-[1px] bg-[#C5D09B]" />

                  {/* Right panel desktop */}
                  <div
                    className="hidden lg:block flex-1"
                    style={{
                      transition:"opacity 260ms ease, transform 260ms ease",
                      opacity: volDesktopAnimating ? 0 : 1,
                      transform: volDesktopAnimating ? "translateX(16px)" : "translateX(0)",
                      animation: !volDesktopAnimating ? "sv-slideRight 0.75s cubic-bezier(0.22,1,0.36,1) 0.1s both" : undefined,
                    }}
                  >
                    {renderVolPanel(volDesktopDisplayed)}
                  </div>
                </div>

                <div className="w-full h-[1px] bg-[#C5D09B]" />
              </div>
            </div>
          )}

          {/* ─────────────── CHURCH MINISTRIES ─────────────── */}
          {displayedTab === "church-ministries" && (
            <div className="w-full flex justify-center bg-[#F6F8F1] overflow-hidden">
              <div className="w-full max-w-[1418px]">
                <div className="flex flex-col lg:flex-row lg:items-stretch">

                  {/* LEFT column */}
                  <div
                    className="w-full lg:w-[436px] lg:flex-shrink-0 px-6 sm:px-10
                               lg:pl-[77px] lg:pr-6 pt-8 lg:pt-[50px] pb-0 lg:pb-[40px]"
                    style={{ animation:"sv-slideLeft 0.75s cubic-bezier(0.22,1,0.36,1) both" }}
                  >
                    <h3
                      className="font-cormorant"
                      style={{ fontSize:"clamp(20px,4vw,28px)", color:"#2D5016", fontWeight:400, lineHeight:1.2 }}
                    >
                      Church Ministries
                    </h3>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex flex-col mt-[60px]" style={{ paddingLeft:"clamp(16px,4vw,54px)" }}>
                      {ministryTabs.map((tab, i) => {
                        const isActive = activeMin === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => handleMinSelect(tab.id)}
                            className="sv-nav-btn font-dm text-left bg-transparent border-none cursor-pointer flex items-start"
                            style={{
                              fontSize:"clamp(12px,2.5vw,13px)", letterSpacing:"0.12em",
                              color: isActive ? "#1a1a1a" : "#D4A017",
                              fontWeight: isActive ? 700 : 500,
                              lineHeight: tab.id === "word" ? 1.5 : 1,
                              whiteSpace:"pre-line",
                              marginTop: i === 0 ? 0 : 30, padding:0,
                              transition:"color 220ms ease",
                            }}
                          >
                            <span style={{ display:"inline-block", width: isActive ? "16px" : "0px", overflow:"hidden", transition:"width 260ms cubic-bezier(0.22,1,0.36,1)", color:"#1a1a1a", marginRight: isActive ? "6px" : "0px", fontWeight:700, flexShrink:0, marginTop: tab.id === "word" ? "2px" : "0px" }}>—</span>
                            {isActive && <span className="sv-dot" style={{ marginTop: tab.id === "word" ? "5px" : "2px" }} />}
                            <span className={`sv-label${isActive ? " is-active" : ""}`}>{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Mobile pill strip */}
                    <div className="flex lg:hidden flex-col mt-8 pb-6">
                      <div ref={minStripRef} className="sv-strip">
                        {ministryTabs.map(tab => (
                          <button key={tab.id} data-id={tab.id} onClick={() => handleMinSelect(tab.id)} className={`sv-pill${activeMin === tab.id ? " active" : ""}`}>{tab.label.replace("\n", " ")}</button>
                        ))}
                      </div>
                      <div style={{ height:1, background:"#C5D09B", margin:"14px 0 0" }} />
                      <div className={`sv-mob-content ${minMobileVisible ? "visible" : "hidden"}`} style={{ paddingTop:"1.25rem" }}>
                        {renderMinPanel(minMobileDisplayed)}
                      </div>
                    </div>
                  </div>

                  {/* Vertical divider desktop */}
                  <div className="hidden lg:block w-[1px] bg-[#C5D09B] self-stretch flex-shrink-0" style={{ animation:"sv-dividerV 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s both" }} />
                  {/* Horizontal divider mobile */}
                  <div className="lg:hidden w-full h-[1px] bg-[#C5D09B]" />

                  {/* Right panel desktop */}
                  <div
                    className="hidden lg:block flex-1"
                    style={{
                      transition:"opacity 260ms ease, transform 260ms ease",
                      opacity: minDesktopAnimating ? 0 : 1,
                      transform: minDesktopAnimating ? "translateX(16px)" : "translateX(0)",
                      animation: !minDesktopAnimating ? "sv-slideRight 0.75s cubic-bezier(0.22,1,0.36,1) 0.1s both" : undefined,
                    }}
                  >
                    {renderMinPanel(minDesktopDisplayed)}
                  </div>
                </div>

                <div className="w-full h-[1px] bg-[#C5D09B]" />
              </div>
            </div>
          )}

        </div>

        {/* bottom border */}
        <div
          className="w-full h-[1px] bg-[#C5D09B]"
          style={{
            transformOrigin:"center center",
            animation: inView ? "wwd-growH 1s cubic-bezier(0.22,1,0.36,1) 0.6s both" : undefined,
            opacity: inView ? undefined : 0,
          }}
        />
      </div>
    </>
  );
};

export default WhatWeDo;
