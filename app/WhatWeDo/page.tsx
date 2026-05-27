"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// Layout Component Imports
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

// Content Subpanels Imports
import TestimoniesPanel from "@/components/panels/TestimoniesPanel";
import PreachingPanel from "@/components/panels/PreachingPanel";
import BibleStudyPanel from "@/components/panels/BibleStudyPanel";
import PraiseWorshipPanel from "@/components/panels/PraiseWorshipPanel";
import TithesPanel from "@/components/panels/TithesPanel";

import PreachersPanel from "@/components/volunteerPanels/PreachersPanel";
import InstrumentalistsPanel from "@/components/volunteerPanels/InstrumentalistsPanel";
import WorkersPanel from "@/components/volunteerPanels/WorkersPanel";
import ChildrenChoirPanel from "@/components/volunteerPanels/ChildrenChoirPanel";
import GospelChoirPanel from "@/components/volunteerPanels/GospelChoirPanel";
import AdultsChoirPanel from "@/components/volunteerPanels/AdultsChoirPanel";

import WordEvangelismPanel from "@/components/ministryPanels/WordEvangelismPanel";
import CouplesMinistryPanel from "@/components/ministryPanels/CouplesMinistryPanel";
import YouthMinistryPanel from "@/components/ministryPanels/YouthMinistryPanel";
import ChildrenMinistryPanel from "@/components/ministryPanels/ChildrenMinistryPanel";

import BaptismPanel from "@/components/eventPanels/BaptismPanel";
import AnniversariesPanel from "@/components/eventPanels/AnniversariesPanel";
import WeddingsPanel from "@/components/eventPanels/WeddingsPanel";
import DedicationsPanel from "@/components/eventPanels/DedicationsPanel";

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
    { id: "word",               label: "Word & Evangelism" },
    { id: "couples",            label: "Couples Ministry"  },
    { id: "youth",              label: "Youth Ministry"    },
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

function getPanel(tabId: string | null, itemId: string | null) {
  if (!tabId || !itemId) return null;
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
      case "word":               return <WordEvangelismPanel />;
      case "couples":            return <CouplesMinistryPanel />;
      case "youth":              return <YouthMinistryPanel />;
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

const WhatWeDoPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // URL State Parameter Mapping
  const initialTab = (searchParams.get("tab") as TopTab) || "church-service";
  const initialItem = searchParams.get("item");

  const [activeTab, setActiveTab] = useState<TopTab>(initialTab);
  const [displayedTab, setDisplayedTab] = useState<TopTab>(initialTab);
  const [tabFading, setTabFading] = useState(false);

  // Sync state if parameters change externally
  useEffect(() => {
    if (initialTab && initialTab !== activeTab) {
      setActiveTab(initialTab);
      setDisplayedTab(initialTab);
    }
  }, [initialTab]);

  const handleTabSwitch = (tab: TopTab) => {
    if (tab === activeTab) return;
    setTabFading(true);
    setActiveTab(tab);
    setTimeout(() => {
      setDisplayedTab(tab);
      setTimeout(() => setTabFading(false), 30);
    }, 220);
  };

  const currentGridItems = tabData[displayedTab];
  const renderedPanel = getPanel(displayedTab, initialItem);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8F1]">
      {/* GLOBAL TOP NAVIGATION */}
      <Navbar />

      {/* CORE PORTAL LAYOUT CONTAINER */}
      <div className="flex-grow w-full pt-10 pb-16 px-4 md:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[1418px]">
          
          {/* SECTION TITLE FROM IMAGE */}
          <div className="text-center mb-8">
            <h1 
              className="font-serif text-[#2D5016] tracking-[0.12em] font-medium"
              style={{ fontSize: "clamp(32px, 5vw, 44px)", fontFamily: "'Cormorant Garamond', serif" }}
            >
              What We Do
            </h1>
          </div>

          {/* TOP TAB STRIP */}
          <div className="wwd-top-strip mb-0">
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

          <div style={{ height: "1px", background: "#C5D09B", margin: "18px 0 0" }} />

          {/* BUTTON CARD GRID SECTION */}
          <div className={`wwd-tab-body${tabFading ? " fading" : " visible"}`}>
            <div className="wwd-card-grid">
              {currentGridItems.map(item => {
                const isCardSelected = initialItem === item.id;
                return (
                  <button
                    key={item.id}
                    className={`wwd-card${isCardSelected ? " is-open" : ""}`}
                    onClick={() => {
                      router.push(`/WhatWeDo?tab=${displayedTab}&item=${item.id}`, { scroll: false });
                    }}
                  >
                    <span className="wwd-card-label">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CORRESPONDING FULL DETAILED MAIN PANEL SECTION */}
          <div className="mt-12">
            {renderedPanel ? (
              <div className="wwd-panel-wrap shadow-sm">
                <div className="wwd-panel-header">
                  <span className="wwd-panel-title">
                    {currentGridItems.find(i => i.id === initialItem)?.label}
                  </span>
                  <button
                    className="wwd-panel-close"
                    aria-label="Close presentation panel view"
                    onClick={() => router.push(`/WhatWeDo?tab=${displayedTab}`, { scroll: false })}
                  >
                    <svg viewBox="0 0 14 14" fill="none">
                      <line x1="2" y1="2" x2="12" y2="12" />
                      <line x1="12" y1="2" x2="2" y2="12" />
                    </svg>
                  </button>
                </div>
                <div className="wwd-panel-body bg-white">
                  {renderedPanel}
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-400 font-sans border border-dashed border-[#C5D09B] rounded-xl py-20 bg-white/50">
                Select a card option from the grid modules above to display full content view windows.
              </div>
            )}
          </div>

        </div>
      </div>

      {/* GLOBAL FOOTER COMPONENT */}
      <Footer />

      {/* Embedded Component Isolation Styling */}
      <style>{`
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
          font-weight:500; cursor:pointer; white-space:nowrap; color:#4A7C2F;
          transition:background 220ms ease, color 220ms ease, border-color 220ms ease, transform 120ms ease;
        }
        .wwd-top-pill:active { transform:scale(0.96); }
        .wwd-top-pill.active { background:#2D5016; border-color:#2D5016; color:#F6F8F1; font-weight:700; }
        .wwd-top-pill:not(.active):hover { border-color:#7AAB50; color:#7AAB50; }

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
          border:1.5px solid #E2EAC8; border-radius:10px; cursor:pointer;
          transition:border-color 250ms ease, background 250ms ease, transform 150ms ease, box-shadow 250ms ease;
          text-align:center;
        }
        .wwd-card:hover {
          border-color:#7AAB50;
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
          color:#4A7C2F; line-height:1.3;
          transition:color 250ms ease;
        }
        .wwd-card.is-open .wwd-card-label { color:#2D5016; font-weight:600; font-style:italic; }

        .wwd-panel-wrap {
          border:1.5px solid #E2EAC8;
          border-radius:12px; background:#fff; overflow:hidden;
          animation:wwd-contentIn 0.38s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes wwd-contentIn {
          from { opacity:0; transform:translateY(8px); }
          to   { opacity:1; transform:translateY(0);   }
        }
        .wwd-panel-header {
          display:flex; align-items:center; justify-content:space-between;
          padding:14px 20px; border-bottom:1px solid #E2EAC8; background:#F0F5E8;
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
    </div>
  );
};

export default function WhatWeDoPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-[#2D5016]">Loading portal view...</div>}>
      <WhatWeDoPageContent />
    </Suspense>
  );
}