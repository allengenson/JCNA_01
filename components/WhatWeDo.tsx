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

// ── Panel imports (Special Events) ──
import BaptismPanel from "./eventPanels/BaptismPanel";
import AnniversariesPanel from "./eventPanels/AnniversariesPanel";
import WeddingsPanel from "./eventPanels/Weddingspanel";
import DedicationsPanel from  "./eventPanels/Dedicationspanel";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type TopTab = "church-service" | "service-volunteers" | "church-ministries" | "special-events";

// ─────────────────────────────────────────────
// Tab data — each tab has its own accordion items
// ─────────────────────────────────────────────
const tabData: Record<TopTab, { id: string; label: string }[]> = {
  "church-service": [
    { id: "praise-worship", label: "Praise and Worship"       },
    { id: "bible-study",    label: "Bible Study"              },
    { id: "testimonies",    label: "Testimonies"              },
    { id: "tithes",         label: "Tithes and Love Offering" },
    { id: "preaching",      label: "Preaching"                },
  ],
  "service-volunteers": [
    { id: "preachers",        label: "Preachers"        },
    { id: "gospel-choir",     label: "Gospel Choir"     },
    { id: "adults-choir",     label: "Adults Choir"     },
    { id: "children-choir",   label: "Children Choir"   },
    { id: "instrumentalists", label: "Instrumentalists" },
    { id: "workers",          label: "Workers"          },
  ],
  "church-ministries": [
    { id: "word",              label: "Ministry of the Word & Evangelism" },
    { id: "couples",           label: "Couples Ministry"                  },
    { id: "youth",             label: "Youth Ministry"                    },
    { id: "children-ministry", label: "Children Ministry"                 },
  ],
  "special-events": [
    { id: "baptism",       label: "Baptism"       },
    { id: "anniversaries", label: "Anniversaries" },
    { id: "weddings",      label: "Weddings"      },
    { id: "dedications",   label: "Dedications"   },
  ],
};

const topTabs: { id: TopTab; label: string }[] = [
  { id: "church-service",    label: "Church Service"    },
  { id: "service-volunteers",label: "Service Volunteers"},
  { id: "church-ministries", label: "Church Ministries" },
  { id: "special-events",    label: "Special Events"    },
];

// ─────────────────────────────────────────────
// Panel renderer
// ─────────────────────────────────────────────
function getPanel(tabId: TopTab, itemId: string) {
  if (tabId === "church-service") {
    switch (itemId) {
      case "praise-worship": return <PraiseWorshipPanel onNavigate={() => {}} />;
      case "bible-study":    return <BibleStudyPanel    onNavigate={() => {}} />;
      case "testimonies":    return <TestimoniesPanel   onNavigate={() => {}} />;
      case "tithes":         return <TithesPanel        onNavigate={() => {}} />;
      case "preaching":      return <PreachingPanel     onNavigate={() => {}} />;
    }
  }
  if (tabId === "service-volunteers") {
    switch (itemId) {
      case "preachers":        return <PreachersPanel />;
      case "instrumentalists": return <InstrumentalistsPanel />;
      case "workers":          return <WorkersPanel />;
      case "children-choir":   return <ChildrenChoirPanel />;
      case "gospel-choir":     return <GospelChoirPanel />;
      case "adults-choir":     return <AdultsChoirPanel />;
    }
  }
  if (tabId === "church-ministries") {
    switch (itemId) {
      case "word":              return <WordEvangelismPanel />;
      case "couples":           return <CouplesMinistryPanel />;
      case "youth":             return <YouthMinistryPanel />;
      case "children-ministry": return <ChildrenMinistryPanel />;
    }
  }
  if (tabId === "special-events") {
    switch (itemId) {
      case "baptism":       return <BaptismPanel />;
      case "anniversaries": return <AnniversariesPanel />;
      case "weddings":      return <WeddingsPanel />;
      case "dedications":   return <DedicationsPanel />;
    }
  }
  return null;
}

// ─────────────────────────────────────────────
// InView hook
// ─────────────────────────────────────────────
function useInView(ref: React.RefObject<Element>, threshold = 0.08) {
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
  const inView     = useInView(sectionRef);

  // which top tab is selected
  const [activeTab,    setActiveTab]    = useState<TopTab>("church-service");
  const [displayedTab, setDisplayedTab] = useState<TopTab>("church-service");
  const [tabFading,    setTabFading]    = useState(false);

  // which accordion item is open — one per tab, all independent
  const [openItems, setOpenItems] = useState<Record<TopTab, string | null>>({
    "church-service":    null,
    "service-volunteers": null,
    "church-ministries": null,
    "special-events":    null,
  });

  // switch top tab with fade
  const handleTabSwitch = (tab: TopTab) => {
    if (tab === activeTab) return;
    setTabFading(true);
    setActiveTab(tab);
    setTimeout(() => {
      setDisplayedTab(tab);
      setTimeout(() => setTabFading(false), 30);
    }, 220);
  };

  // toggle accordion item
  const handleToggle = (tab: TopTab, id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [tab]: prev[tab] === id ? null : id,
    }));
  };

  const items  = tabData[displayedTab];
  const openId = openItems[displayedTab];

  return (
    <>
      <style>{`
        /* ── entrance ── */
        @keyframes wwd-fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes wwd-growH {
          from { transform:scaleX(0); opacity:0; }
          to   { transform:scaleX(1); opacity:1; }
        }
        /* ── accordion ── */
        @keyframes wwd-contentIn {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes wwd-barIn {
          from { transform:scaleY(0); }
          to   { transform:scaleY(1); }
        }
        @keyframes wwd-dotPulse {
          0%,100% { box-shadow:0 0 0 0   rgba(45,80,22,.4); }
          50%      { box-shadow:0 0 0 5px rgba(45,80,22,0);  }
        }

        /* ── top tab pills ── */
        .wwd-top-strip {
          display:flex; gap:10px;
          overflow-x:auto; scrollbar-width:none;
          -webkit-overflow-scrolling:touch;
          justify-content:center; flex-wrap:wrap;
        }
        @media(max-width:520px){
          .wwd-top-strip { flex-wrap:nowrap; justify-content:flex-start; }
        }
        .wwd-top-strip::-webkit-scrollbar { display:none; }

        .wwd-top-pill {
          flex-shrink:0;
          padding:9px 24px; border-radius:999px;
          border:1px solid #C5D09B; background:transparent;
          font-family:'DM Sans',sans-serif;
          font-size:clamp(11px,2.8vw,13px); letter-spacing:0.1em;
          font-weight:500; cursor:pointer; white-space:nowrap; color:#D4A017;
          transition:background 220ms ease, color 220ms ease,
                      border-color 220ms ease, transform 120ms ease;
        }
        .wwd-top-pill:active   { transform:scale(0.96); }
        .wwd-top-pill.active   { background:#2D5016; border-color:#2D5016; color:#F6F8F1; font-weight:700; }
        .wwd-top-pill:not(.active):hover { border-color:#82B657; color:#82B657; }

        /* Special Events pill — subtle golden glow when inactive */
        .wwd-top-pill.special:not(.active) {
          border-color:#D4A017;
          color:#D4A017;
        }
        .wwd-top-pill.special:not(.active):hover {
          border-color:#B8860B;
          color:#B8860B;
          background:rgba(212,160,23,0.06);
        }
        .wwd-top-pill.special.active {
          background:#2D5016;
          border-color:#2D5016;
          color:#F6F8F1;
        }

        /* ── tab body fade ── */
        .wwd-tab-body { transition:opacity 220ms ease, transform 220ms ease; }
        .wwd-tab-body.fading  { opacity:0; transform:translateY(8px); }
        .wwd-tab-body.visible { opacity:1; transform:translateY(0);   }

        /* ── accordion row — no borders, just words ── */
        .wwd-acc-row {
          position:relative;
          overflow:hidden; transition:background 300ms ease;
        }
        .wwd-acc-row.is-open { background:rgba(130,182,87,0.04); }

        .wwd-left-bar {
          position:absolute; left:0; top:0; bottom:0; width:3px;
          background:#82B657; border-radius:0 2px 2px 0;
          transform-origin:top;
          animation:wwd-barIn 0.35s cubic-bezier(0.22,1,0.36,1) both;
        }

        .wwd-acc-header {
          display:flex; align-items:center; justify-content:center;
          position:relative; width:100%; padding:14px 56px;
          background:transparent; border:none; cursor:pointer; gap:12px;
        }
        @media(max-width:520px){
          .wwd-acc-header { padding:12px 48px 12px 16px; }
          .wwd-close-btn  { right:14px; }
        }

        .wwd-acc-label {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(17px,3vw,24px); letter-spacing:0.12em;
          font-weight:500; line-height:1; color:#D4A017;
          display:flex; align-items:center; gap:10px;
          transition:color 250ms ease, font-style 250ms ease;
        }
        /* when open: italic, green, no bullet */
        .wwd-acc-row.is-open .wwd-acc-label {
          color:#2D5016; font-weight:600; font-style:italic;
        }
        /* hover on closed rows */
        .wwd-acc-row:not(.is-open) .wwd-acc-header:hover .wwd-acc-label {
          color:#82B657;
        }

        /* close button — only shown when open */
        .wwd-close-btn {
          position:absolute; right:24px; top:50%; transform:translateY(-50%);
          width:26px; height:26px; border-radius:50%;
          background:#2D5016; border:none; flex-shrink:0;
          display:flex; align-items:center; justify-content:center;
          color:#fff; cursor:pointer;
          animation:wwd-contentIn 0.25s ease both;
        }
        .wwd-close-btn svg {
          width:12px; height:12px; stroke:#fff;
          stroke-width:2.5; stroke-linecap:round;
        }

        /* ── collapsible body ── */
        .wwd-acc-body {
          display:grid; grid-template-rows:0fr;
          transition:grid-template-rows 420ms cubic-bezier(0.22,1,0.36,1);
        }
        .wwd-acc-row.is-open .wwd-acc-body { grid-template-rows:1fr; }
        .wwd-acc-inner   { overflow:hidden; }
        .wwd-acc-content {
          padding:4px 40px 36px;
          animation:wwd-contentIn 0.4s cubic-bezier(0.22,1,0.36,1) 0.15s both;
        }
        @media(max-width:520px){
          .wwd-acc-content { padding:4px 16px 28px; }
        }
      `}</style>

      <div
        id="what-we-do"
        ref={sectionRef}
        className="w-full bg-[#F6F8F1] overflow-hidden"
      >
        <div
          className="w-full max-w-[960px] lg:max-w-full mx-auto px-4 sm:px-8 lg:px-20
                     pt-14 pb-0 lg:pt-[70px]"
        >

          {/* ── HEADING ── */}
          <div
            className="text-center mb-8 lg:mb-10"
            style={{
              animation: inView
                ? "wwd-fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both"
                : undefined,
              opacity: inView ? undefined : 0,
            }}
          >
            <h2
              className="font-cormorant"
              style={{
                fontSize: "clamp(30px,5.5vw,46px)",
                color: "#D4A017",
                letterSpacing: "0.15em",
                fontWeight: 500,
                lineHeight: 1,
              }}
            >
              What We Do —
            </h2>
            <div
              style={{
                height: "1px",
                background: "#C5D09B",
                marginTop: "22px",
                transformOrigin: "center",
                animation: inView
                  ? "wwd-growH 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s both"
                  : undefined,
                opacity: inView ? undefined : 0,
              }}
            />
          </div>

          {/* ── TOP TAB PILLS ── */}
          <div
            className="wwd-top-strip mb-0"
            style={{
              animation: inView
                ? "wwd-fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.18s both"
                : undefined,
              opacity: inView ? undefined : 0,
            }}
          >
            {topTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabSwitch(tab.id)}
                className={`wwd-top-pill${tab.id === "special-events" ? " special" : ""}${activeTab === tab.id ? " active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* thin rule under pills */}
          <div style={{ height:"1px", background:"#C5D09B", margin:"18px 0 0" }} />

        </div>

        {/* ── ACCORDION (full width, switches per tab) ── */}
        <div
          className={`wwd-tab-body${tabFading ? " fading" : " visible"}`}
        >
          <div className="w-full max-w-[960px] lg:max-w-full mx-auto px-4 sm:px-8 lg:px-20 pb-16 lg:pb-[80px]">
            {items.map((item, i) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`wwd-acc-row${isOpen ? " is-open" : ""}`}
                  style={{
                    animation: inView
                      ? `wwd-fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${0.22 + i * 0.06}s both`
                      : undefined,
                    opacity: inView ? undefined : 0,
                  }}
                >
                  {isOpen && <div className="wwd-left-bar" />}

                  <button
                    className="wwd-acc-header"
                    onClick={() => handleToggle(displayedTab, item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="wwd-acc-label">
                      {item.label}
                    </span>
                    {isOpen && (
                      <span className="wwd-close-btn" aria-label="Close">
                        <svg viewBox="0 0 14 14" fill="none">
                          <line x1="2" y1="2" x2="12" y2="12" />
                          <line x1="12" y1="2" x2="2" y2="12" />
                        </svg>
                      </span>
                    )}
                  </button>

                  <div className="wwd-acc-body" aria-hidden={!isOpen}>
                    <div className="wwd-acc-inner">
                      {isOpen && (
                        <div className="wwd-acc-content">
                          {getPanel(displayedTab, item.id)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* bottom border */}
        <div
          className="w-full h-[1px] bg-[#C5D09B]"
          style={{
            transformOrigin: "center",
            animation: inView
              ? "wwd-growH 1s cubic-bezier(0.22,1,0.36,1) 0.6s both"
              : undefined,
            opacity: inView ? undefined : 0,
          }}
        />
      </div>
    </>
  );
};

export default WhatWeDo;
