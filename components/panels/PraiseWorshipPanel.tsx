"use client";

import { useState } from "react";

interface Props {
  onNavigate: (id: string) => void;
}

type SubTab = "joyful" | "solemn";

/* ── Joyful Content ─────────────────────────────────────────────────────── */
const JoyfulContent = () => (
  <div className="flex flex-col items-center w-full">
    <p
      className="font-cormorant italic text-center mb-4"
      style={{ fontSize: "clamp(14px, 2.8vw, 17px)", color: "#D4A017", lineHeight: 1.5 }}
    >
      "Where joy overflows, His glory fills the room."
    </p>

    <div className="w-full rounded-[20px] overflow-hidden border border-[#6AAD4F] mb-6"
      style={{ maxWidth: 540, aspectRatio: "16/9" }}
    >
      <iframe
        src="https://www.youtube.com/embed/VAstQmugNP4?si=-mpSHoR0nc8kGVDr"
        className="w-full h-full"
        style={{ border: "none", display: "block" }}
        title="Joyful Worship Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>

    <p
      className="font-dm text-center mb-6"
      style={{ fontSize: "clamp(12px, 2.5vw, 14px)", color: "#4A7C2F", lineHeight: 1.85, maxWidth: 520 }}
    >
      <span style={{ fontWeight: 700, color: "#2D5016" }}>Joyful praise</span> is an exuberant, celebratory expression of worship offered to God with singing, clapping, and uplifted voices. It celebrates His goodness, faithfulness, and the victory found only in Him — an outward declaration of an inward joy that cannot be contained.
    </p>

    <p
      className="font-cormorant italic text-center"
      style={{ fontSize: "clamp(14px, 2.8vw, 17px)", color: "#D4A017", lineHeight: 1.75, maxWidth: 500 }}
    >
      "Make a joyful noise unto the Lord, all ye lands. Serve the Lord with gladness: come before his presence with singing."{" "}
      <span style={{ fontStyle: "normal", fontWeight: 600, color: "#2D5016" }}>— Psalm 100:1–2</span>
    </p>
  </div>
);

/* ── Solemn Content ─────────────────────────────────────────────────────── */
const SolemnContent = () => (
  <div className="flex flex-col items-center w-full">
    <p
      className="font-cormorant italic text-center mb-4"
      style={{ fontSize: "clamp(14px, 2.8vw, 17px)", color: "#D4A017", lineHeight: 1.5 }}
    >
      "In stillness and reverence, we draw near to the Holy."
    </p>

    <div className="w-full rounded-[20px] overflow-hidden border border-[#6AAD4F] mb-6"
      style={{ maxWidth: 540, aspectRatio: "16/9" }}
    >
      <iframe
        src="https://www.youtube.com/embed/wIoWbOO636s?si=9o9Q6BhCdUX6M-bU"
        className="w-full h-full"
        style={{ border: "none", display: "block" }}
        title="Solemn Worship Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>

    <p
      className="font-dm text-center mb-6"
      style={{ fontSize: "clamp(12px, 2.5vw, 14px)", color: "#4A7C2F", lineHeight: 1.85, maxWidth: 520 }}
    >
      <span style={{ fontWeight: 700, color: "#2D5016" }}>Solemn worship</span> is a reverent, quiet, and deeply heartfelt form of praise offered before God with humility and awe. It acknowledges His holiness, His majesty, and the weight of His presence — a sacred stillness where the soul bows low and listens for His voice.
    </p>

    <p
      className="font-cormorant italic text-center"
      style={{ fontSize: "clamp(14px, 2.8vw, 17px)", color: "#D4A017", lineHeight: 1.75, maxWidth: 500 }}
    >
      "God is greatly to be feared in the assembly of the saints, and to be had in reverence of all them that are about him."{" "}
      <span style={{ fontStyle: "normal", fontWeight: 600, color: "#2D5016" }}>— Psalm 89:7</span>
    </p>
  </div>
);

/* ── Main Panel ─────────────────────────────────────────────────────────── */
const PraiseWorshipPanel = ({ onNavigate }: Props) => {
  const [sub, setSub] = useState<SubTab>("joyful");

  return (
    <div className="flex flex-col items-center w-full">

      {/* intro text */}
      <p
        className="font-dm text-center mb-6"
        style={{ fontSize: "clamp(12px, 2.5vw, 14px)", color: "#4A7C2F", lineHeight: 1.85, maxWidth: 520 }}
      >
        Praise and worship is the act of honoring God through songs, prayer, and heartfelt devotion. It expresses gratitude for who He is and what He has done, bringing believers together in unity to glorify His name and draw people into His presence.
      </p>

      {/* sub-tab toggle */}
      <div className="flex justify-center mb-8">
        <div
          className="flex rounded-full"
          style={{ border: "1px solid #C5D09B", background: "#EEF3E6", padding: "3px" }}
        >
          {(["joyful", "solemn"] as SubTab[]).map((tab) => {
            const isActive = sub === tab;
            return (
              <button
                key={tab}
                onClick={() => setSub(tab)}
                className="font-dm cursor-pointer border-none"
                style={{
                  fontSize: "clamp(11px, 2.5vw, 13px)",
                  letterSpacing: "0.1em",
                  fontWeight: isActive ? 700 : 500,
                  padding: "8px 20px",
                  background: isActive ? "#2D5016" : "transparent",
                  color: isActive ? "#F6F8F1" : "#4A7C2F",
                  borderRadius: "9999px",
                  transition: "background 220ms ease, color 220ms ease",
                }}
              >
                {tab === "joyful" ? "Joyful Songs" : "Solemn Songs"}
              </button>
            );
          })}
        </div>
      </div>

      {/* sub-tab content */}
      <style>{`
        @keyframes pw-contentIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
      <div
        key={sub}
        className="w-full flex flex-col items-center"
        style={{ animation: "pw-contentIn 0.35s cubic-bezier(0.22,1,0.36,1) both" }}
      >
        {sub === "joyful" ? <JoyfulContent /> : <SolemnContent />}
      </div>

    </div>
  );
};

export default PraiseWorshipPanel;
