"use client";

import { useState, useEffect, useRef } from "react";

import TestimoniesPanel from "./panels/TestimoniesPanel";
import PreachingPanel from "./panels/PreachingPanel";
import BibleStudyPanel from "./panels/BibleStudyPanel";
import PraiseWorshipPanel from "./panels/PraiseWorshipPanel";
import TithesPanel from "./panels/TithesPanel";

import PreachersPanel from "./volunteerPanels/PreachersPanel";
import InstrumentalistsPanel from "./volunteerPanels/InstrumentalistsPanel";
import WorkersPanel from "./volunteerPanels/WorkersPanel";
import ChildrenChoirPanel from "./volunteerPanels/ChildrenChoirPanel";
import GospelChoirPanel from "./volunteerPanels/GospelChoirPanel";
import AdultsChoirPanel from "./volunteerPanels/AdultsChoirPanel";

import WordEvangelismPanel from "./ministryPanels/WordEvangelismPanel";
import CouplesMinistryPanel from "./ministryPanels/CouplesMinistryPanel";
import YouthMinistryPanel from "./ministryPanels/YouthMinistryPanel";
import ChildrenMinistryPanel from "./ministryPanels/ChildrenMinistryPanel";

import BaptismPanel from "./eventPanels/BaptismPanel";
import AnniversariesPanel from "./eventPanels/AnniversariesPanel";
import WeddingsPanel from "./eventPanels/WeddingsPanel";
import DedicationsPanel from "./eventPanels/DedicationsPanel";

type TopTab = "church-service" | "service-volunteers" | "church-ministries" | "special-events";

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
    { id: "word",              label: "Word & Evangelism" },
    { id: "couples",           label: "Couples Ministry"  },
    { id: "youth",             label: "Youth Ministry"    },
    { id: "children-ministry", label: "Children Ministry" },
  ],
  "special-events": [
    { id: "baptism",       label: "Baptism"       },
    { id: "anniversaries", label: "Anniversaries" },
    { id: "weddings",      label: "Weddings"      },
    { id: "dedications",   label: "Dedications"   },
  ],
};

const topTabs: { id: TopTab; label: string }[] = [
  { id: "church-service",     label: "Church Service" },
  { id: "service-volunteers", label: "Volunteers"     },
  { id: "church-ministries",  label: "Ministries"     },
  { id: "special-events",     label: "Events"         },
];

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

const WhatWeDo = () => {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const inView     = useInView(sectionRef);

  const [activeTab,    setActiveTab]    = useState<TopTab>("church-service");
  const [displayedTab, setDisplayedTab] = useState<TopTab>("church-service");
  const [tabFading,    setTabFading]    = useState(false);

  const [openItems, setOpenItems] = useState<Record<TopTab, string | null>>({
    "church-service":     null,
    "service-volunteers": null,
    "church-ministries":  null,
    "special-events":     null,
  });

  const handleTabSwitch = (tab: TopTab) => {
    if (tab === activeTab) return;
    setTabFading(true);
    setActiveTab(tab);
    setTimeout(() => {
      setDisplayedTab(tab);
      setTimeout(() => setTabFading(false), 30);
    }, 220);
  };

  const handleToggle = (tab: TopTab, id: string) => {
    setOpenItems(prev => ({ ...prev, [tab]: prev[tab] === id ? null : id }));
  };

  const items  = tabData[displayedTab];
  const openId = openItems[displayedTab];

  return (
    <>
      <style>{`
        @keyframes wwd-fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes wwd-growH {
          from { transform:scaleX(0); opacity:0; }
          to   { transform:scaleX(1); opacity:1; }
        }
        @keyframes wwd-contentIn {
          from { opacity:0; transform:translateY(8px); }
          to   { opacity:1; transform:translateY(0);   }
        }

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
        .wwd-top-pill:active { transform:scale(0.96); }
        .wwd-top-pill.active { background:#2D5016; border-color:#2D5016; color:#F6F8F1; font-weight:700; }
        .wwd-top-pill:not(.active):hover { border-color:#82B657; color:#82B657; }

        .wwd-tab-body { transition:opacity 220ms ease, transform 220ms ease; }
        .wwd-tab-body.fading  { opacity:0; transform:translateY(8px); }
        .wwd-tab-body.visible { opacity:1; transform:translateY(0);   }

        .wwd-card-grid {
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(140px, 1fr));
          gap:12px; margin-top:28px;
        }
        @media(max-width:420px){
          .wwd-card-grid { grid-template-columns:repeat(2, 1fr); gap:8px; }
        }

        .wwd-card {
          display:flex; align-items:center; justify-content:center;
          padding:20px 14px; background:#fff;
          border:1.5px solid #E5DECA; border-radius:10px; cursor:pointer;
          transition:border-color 250ms ease, background 250ms ease,
                      transform 150ms ease, box-shadow 250ms ease;
          text-align:center;
        }
        .wwd-card:hover {
          border-color:#82B657;
          box-shadow:0 4px 16px rgba(45,80,22,0.10);
          transform:translateY(-2px);
        }
        .wwd-card.is-open {
          background:#F0F5E8; border-color:#2D5016;
          box-shadow:0 4px 18px rgba(45,80,22,0.13);
        }
        .wwd-card-label {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(14px,2.2vw,16px);
          letter-spacing:0.07em; font-weight:500;
          color:#D4A017; line-height:1.3;
          transition:color 250ms ease;
        }
        .wwd-card.is-open .wwd-card-label { color:#2D5016; font-weight:600; font-style:italic; }

        .wwd-panel-wrap {
          margin-top:20px; border:1.5px solid #2D5016;
          border-radius:12px; background:#fff; overflow:hidden;
          animation:wwd-contentIn 0.38s cubic-bezier(0.22,1,0.36,1) both;
        }
        .wwd-panel-header {
          display:flex; align-items:center; justify-content:space-between;
          padding:14px 20px; border-bottom:1px solid #E5DECA; background:#F0F5E8;
        }
        .wwd-panel-title {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(16px,2.8vw,20px);
          color:#2D5016; font-weight:600; letter-spacing:0.08em; font-style:italic;
        }
        .wwd-panel-close {
          width:28px; height:28px; border-radius:50%;
          background:#2D5016; border:none; flex-shrink:0;
          display:flex; align-items:center; justify-content:center; cursor:pointer;
          transition:background 200ms ease, transform 150ms ease;
        }
        .wwd-panel-close:hover { background:#3d6e20; transform:scale(1.08); }
        .wwd-panel-close svg { width:12px; height:12px; stroke:#fff; stroke-width:2.5; stroke-linecap:round; }
        .wwd-panel-body { padding:24px 28px 32px; }
        @media(max-width:520px){ .wwd-panel-body { padding:18px 16px 24px; } }
      `}</style>

      {/* Full-width bg wrapper — NO overflow-hidden here so the border isn't clipped */}
      <div id="what-we-do" ref={sectionRef} className="w-full bg-[#F6F8F1]">

        {/* ── All content + the two divider lines live inside the same constrained inner div ── */}
        <div className="mx-auto w-full max-w-[1418px] px-6 lg:px-12 pt-14 pb-16 lg:pt-[70px] lg:pb-[80px]">

          {/* HEADING */}
          <div
            className="text-center mb-8 lg:mb-10"
            style={{
              animation: inView ? "wwd-fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both" : undefined,
              opacity: inView ? undefined : 0,
            }}
          >
            <h2
              className="font-cormorant"
              style={{
                fontSize: "clamp(30px,5.5vw,46px)", color: "#D4A017",
                letterSpacing: "0.15em", fontWeight: 500, lineHeight: 1,
              }}
            >
              What We Do
            </h2>
            {/* ✅ Top divider — stays inside the constrained div, matches content edges */}
            <div
              style={{
                height: "1px", background: "#C5D09B", marginTop: "22px",
                transformOrigin: "center",
                animation: inView ? "wwd-growH 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s both" : undefined,
                opacity: inView ? undefined : 0,
              }}
            />
          </div>

          {/* TOP TAB PILLS */}
          <div
            className="wwd-top-strip mb-0"
            style={{
              animation: inView ? "wwd-fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.18s both" : undefined,
              opacity: inView ? undefined : 0,
            }}
          >
            {topTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabSwitch(tab.id)}
                className={`wwd-top-pill${activeTab === tab.id ? " active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ✅ Mid divider — stays inside the constrained div */}
          <div style={{ height: "1px", background: "#C5D09B", margin: "18px 0 0" }} />

          {/* CARD GRID + PANEL */}
          <div className={`wwd-tab-body${tabFading ? " fading" : " visible"}`}>
            <div
              className="wwd-card-grid"
              style={{
                animation: inView ? "wwd-fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.22s both" : undefined,
                opacity: inView ? undefined : 0,
              }}
            >
              {items.map(item => {
                const isOpen = openId === item.id;
                return (
                  <button
                    key={item.id}
                    className={`wwd-card${isOpen ? " is-open" : ""}`}
                    onClick={() => handleToggle(displayedTab, item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`panel-${item.id}`}
                  >
                    <span className="wwd-card-label">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {openId && (() => {
              const item = items.find(i => i.id === openId)!;
              return (
                <div
                  key={openId}
                  id={`panel-${openId}`}
                  className="wwd-panel-wrap"
                  role="region"
                  aria-label={item.label}
                >
                  <div className="wwd-panel-header">
                    <span className="wwd-panel-title">{item.label}</span>
                    <button
                      className="wwd-panel-close"
                      aria-label={`Close ${item.label}`}
                      onClick={() => handleToggle(displayedTab, openId)}
                    >
                      <svg viewBox="0 0 14 14" fill="none">
                        <line x1="2" y1="2" x2="12" y2="12" />
                        <line x1="12" y1="2" x2="2" y2="12" />
                      </svg>
                    </button>
                  </div>
                  <div className="wwd-panel-body">
                    {getPanel(displayedTab, openId)}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* ✅ Bottom border — now inside the constrained div so it aligns with navbar content */}
          <div
            className="h-[1px] bg-[#C5D09B] mt-16 lg:mt-[80px]"
            style={{
              transformOrigin: "center",
              animation: inView ? "wwd-growH 1s cubic-bezier(0.22,1,0.36,1) 0.6s both" : undefined,
              opacity: inView ? undefined : 0,
            }}
          />
        </div>

      </div>
    </>
  );
};

export default WhatWeDo;
