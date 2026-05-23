"use client";
import React, { useState } from "react";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');

.org-root * { box-sizing: border-box; }

/* ── connector lines ── */
.org-v-line {
  width: 2px; height: 28px;
  background: #D4A017;
  margin: 0 auto;
}
.org-v-line-green {
  width: 1.5px; height: 20px;
  background: #4A7C2F;
  margin: 0 auto;
}

/* ── L2 horizontal bar (desktop) ── */
.org-l2-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  position: relative;
}
.org-l2-bar::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 60%; height: 1.5px;
  background: #4A7C2F;
}

/* ── director grid ── */
.org-dir-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  padding: 0 4px;
}

/* ── sub grid ── */
.org-sub-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  padding: 0 4px;
}

/* ── MOBILE ── */
@media (max-width: 768px) {
  .org-l2-bar::before { display: none; }

  .org-dir-grid {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .org-sub-grid {
    display: none; /* hidden on mobile — shown inside accordion */
  }
  .org-desktop-spread { display: none; }
  .org-mobile-columns { display: flex !important; }
}
@media (min-width: 769px) {
  .org-mobile-columns { display: none !important; }
  .org-desktop-spread { display: block; }
}
`;

// ── DATA ─────────────────────────────────────────────────────────────
const columns = [
  {
    director: { name: "ANDONIE D. KADUSALE", role: "Ministries Director", preacher: true },
    subs: ["Ministry of the Word & Evangelism", "Couples Ministry", "Children Ministry"],
  },
  {
    director: { name: "JOBERTH P. CABUCOS", role: "Choir Director", preacher: true },
    subs: ["Gospel Choir", "Adults Choir", "Children Choir"],
  },
  {
    director: { name: "CHRISTIAN DAVE L. PITOGO", role: "Music Director", preacher: true },
    subs: ["Praise & Worship Team", "Instrumentalists", "Sound Engineer / Controller"],
  },
  {
    director: { name: "MICHAEL L. ATON", role: "Membership Director", preacher: true },
    subs: ["Membership Retention", "Membership Growth", "Special Events"],
  },
  {
    director: { name: "BELVIN L. ARMENION", role: "Secretary-General", preacher: false },
    subs: ["Church Records", "Administration"],
    extra: [] as { name: string; role: string }[],
  },
  {
    director: { name: "ANALYN V. DURANGO", role: "Treasurer", preacher: false },
    subs: [] as string[],
    extra: [
      { name: "ROY C. MENDREZ", role: "Auditor" },
      { name: "RICWARREN A. CORNILLO", role: "Public Relations Officer" },
    ],
  },
];

// ── SHARED CARD STYLES ────────────────────────────────────────────────
const card = {
  chairman: {
    background: "#2D5016",
    borderRadius: 13,
    padding: "14px 24px 12px",
    textAlign: "center" as const,
    boxShadow: "0 4px 18px rgba(45,80,22,0.22)",
    position: "relative" as const,
    overflow: "hidden" as const,
  },
  viceChairman: {
    background: "#3B6D11",
    borderRadius: 11,
    padding: "12px 20px 10px",
    textAlign: "center" as const,
    boxShadow: "0 3px 14px rgba(45,80,22,0.2)",
    position: "relative" as const,
    overflow: "hidden" as const,
    flex: "0 0 auto",
    minWidth: 220,
  },
  sideBox: {
    background: "#EAF5D8",
    border: "1.3px solid #4A7C2F",
    borderRadius: 9,
    padding: "10px 14px",
    textAlign: "center" as const,
    flex: "0 0 auto",
    minWidth: 140,
  },
  director: {
    background: "#fff",
    border: "1.2px solid #4A7C2F",
    borderRadius: 9,
    padding: "10px 8px 8px",
    textAlign: "center" as const,
    position: "relative" as const,
    overflow: "hidden" as const,
  },
  sub: {
    background: "#D8EEC0",
    border: "1px solid #7AAB50",
    borderRadius: 7,
    padding: "7px 6px",
    textAlign: "center" as const,
    fontSize: 10,
    color: "#2D5016",
    fontFamily: "'DM Sans', sans-serif",
    lineHeight: 1.3,
  },
  extra: {
    background: "#2D5016",
    borderRadius: 9,
    padding: "9px 10px 8px",
    textAlign: "center" as const,
    position: "relative" as const,
    overflow: "hidden" as const,
  },
  footer: {
    background: "#4A7C2F",
    borderRadius: 12,
    padding: "14px 20px",
    textAlign: "center" as const,
    boxShadow: "0 4px 16px rgba(45,80,22,0.2)",
    position: "relative" as const,
    overflow: "hidden" as const,
  },
};

const goldBar = {
  position: "absolute" as const,
  top: 0, left: 0, right: 0,
  height: 4,
  background: "#D4A017",
  borderRadius: "13px 13px 0 0",
};

// ── MOBILE: accordion director card ──────────────────────────────────
function MobileDirectorCard({ col }: { col: typeof columns[0] }) {
  const [open, setOpen] = useState(false);
  const allItems = [
    ...col.subs,
    ...(col.extra || []).map((e) => e.name + " · " + e.role),
  ];

  return (
    <div style={{ marginBottom: 10 }}>
      <div
        onClick={() => setOpen((v) => !v)}
        style={{
          ...card.director,
          cursor: allItems.length > 0 ? "pointer" : "default",
          paddingTop: 14,
        }}
      >
        <div style={goldBar} />
        {col.director.preacher && (
          <div style={{
            fontFamily: "'DM Sans',sans-serif", fontSize: 8,
            color: "#D4A017", letterSpacing: "1.4px", marginBottom: 3,
          }}>PREACHER</div>
        )}
        <div style={{
          fontFamily: "'Cormorant Garamond',serif", fontSize: 14,
          fontWeight: 700, color: "#2D5016", lineHeight: 1.25,
        }}>{col.director.name}</div>
        <div style={{
          fontFamily: "'DM Sans',sans-serif", fontSize: 9,
          color: "#4A7C2F", marginTop: 3,
        }}>{col.director.role}</div>
        {allItems.length > 0 && (
          <div style={{
            position: "absolute", top: 8, right: 10,
            width: 20, height: 20, borderRadius: "50%",
            background: open ? "#2D5016" : "#EAF3DE",
            color: open ? "#fff" : "#2D5016",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, fontWeight: 300,
            transition: "transform 0.25s, background 0.25s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}>+</div>
        )}
      </div>

      {open && allItems.length > 0 && (
        <div style={{
          marginTop: 6, paddingLeft: 12,
          borderLeft: "2px solid #A3C57A",
          display: "flex", flexDirection: "column", gap: 6,
        }}>
          {col.subs.map((s, i) => (
            <div key={i} style={card.sub}>{s}</div>
          ))}
          {(col.extra || []).map((ex, i) => (
            <div key={i} style={{ ...card.extra, paddingTop: 12 }}>
              <div style={goldBar} />
              <div style={{
                fontFamily: "'Cormorant Garamond',serif", fontSize: 12,
                fontWeight: 700, color: "#fff",
              }}>{ex.name}</div>
              <div style={{
                fontFamily: "'DM Sans',sans-serif", fontSize: 8.5,
                color: "#A8D080", marginTop: 2,
              }}>{ex.role}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────
export default function OrgChart() {
  return (
    <div className="org-root" style={{
      background: "#F4F8EE",
      borderRadius: 16,
      padding: "20px 12px 16px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{FONTS}</style>

      {/* ── L1: Chairman ── */}
      <div style={{ maxWidth: 340, margin: "0 auto" }}>
        <div style={card.chairman}>
          <div style={goldBar} />
          <div style={{
            fontFamily: "'DM Sans',sans-serif", fontSize: 9,
            color: "#D4A017", letterSpacing: "1.8px", marginBottom: 6,
          }}>APOSTLE · CHAIRMAN &amp; CHIEF EXECUTIVE</div>
          <div style={{
            fontFamily: "'Cormorant Garamond',serif", fontSize: 20,
            fontWeight: 700, color: "#fff", lineHeight: 1.2,
          }}>REBERO L. ARMENION</div>
        </div>
      </div>

      {/* Chairman → branch */}
      <div className="org-v-line" />

      {/* ── L2: Preachers | Vice Chairman | Workers ── */}
      {/* DESKTOP: horizontal spread */}
      <div className="org-desktop-spread">
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "center", gap: 12,
        }}>
          <div style={card.sideBox}>
            <div style={{
              fontFamily: "'Cormorant Garamond',serif", fontSize: 14,
              fontWeight: 700, color: "#2D5016",
            }}>CHURCH PREACHERS</div>
          </div>
          {/* horizontal line segments */}
          <div style={{ height: 1.5, width: 32, background: "#4A7C2F" }} />
          <div style={card.viceChairman}>
            <div style={goldBar} />
            <div style={{
              fontFamily: "'DM Sans',sans-serif", fontSize: 9,
              color: "#D4A017", letterSpacing: "1.6px", marginBottom: 5,
            }}>PASTOR · VICE CHAIRMAN</div>
            <div style={{
              fontFamily: "'Cormorant Garamond',serif", fontSize: 18,
              fontWeight: 700, color: "#fff",
            }}>BENJAMEN L. ARMENION, JR.</div>
          </div>
          <div style={{ height: 1.5, width: 32, background: "#4A7C2F" }} />
          <div style={card.sideBox}>
            <div style={{
              fontFamily: "'Cormorant Garamond',serif", fontSize: 14,
              fontWeight: 700, color: "#2D5016",
            }}>CHURCH WORKERS</div>
          </div>
        </div>
      </div>

      {/* MOBILE: stacked */}
      <div className="org-mobile-columns" style={{
        display: "none",
        flexDirection: "column", alignItems: "center", gap: 8,
      }}>
        <div style={{ display: "flex", gap: 8, width: "100%" }}>
          <div style={{ ...card.sideBox, flex: 1 }}>
            <div style={{
              fontFamily: "'Cormorant Garamond',serif", fontSize: 13,
              fontWeight: 700, color: "#2D5016",
            }}>CHURCH PREACHERS</div>
          </div>
          <div style={{ ...card.sideBox, flex: 1 }}>
            <div style={{
              fontFamily: "'Cormorant Garamond',serif", fontSize: 13,
              fontWeight: 700, color: "#2D5016",
            }}>CHURCH WORKERS</div>
          </div>
        </div>
        <div style={{ ...card.viceChairman, width: "100%", minWidth: "unset" }}>
          <div style={goldBar} />
          <div style={{
            fontFamily: "'DM Sans',sans-serif", fontSize: 9,
            color: "#D4A017", letterSpacing: "1.4px", marginBottom: 4,
          }}>PASTOR · VICE CHAIRMAN</div>
          <div style={{
            fontFamily: "'Cormorant Garamond',serif", fontSize: 17,
            fontWeight: 700, color: "#fff",
          }}>BENJAMEN L. ARMENION, JR.</div>
        </div>
      </div>

      {/* Vice Chairman → directors */}
      <div className="org-v-line" />

      {/* ── L3+L4 DESKTOP: director grid + sub grid ── */}
      <div className="org-desktop-spread">
        {/* Directors */}
        <div className="org-dir-grid">
          {columns.map((col, i) => (
            <div key={i} style={{ ...card.director, paddingTop: 14 }}>
              <div style={{ ...goldBar, borderRadius: "9px 9px 0 0" }} />
              {col.director.preacher && (
                <div style={{
                  fontFamily: "'DM Sans',sans-serif", fontSize: 8,
                  color: "#D4A017", letterSpacing: "1.4px", marginBottom: 2,
                }}>PREACHER</div>
              )}
              <div style={{
                fontFamily: "'Cormorant Garamond',serif", fontSize: 12.5,
                fontWeight: 700, color: "#2D5016", lineHeight: 1.25,
              }}>{col.director.name}</div>
              <div style={{
                fontFamily: "'DM Sans',sans-serif", fontSize: 9,
                color: "#4A7C2F", marginTop: 3,
              }}>{col.director.role}</div>
            </div>
          ))}
        </div>

        {/* Connector dots */}
        <div className="org-dir-grid" style={{ marginTop: 0 }}>
          {columns.map((_, i) => (
            <div key={i} className="org-v-line-green" />
          ))}
        </div>

        {/* Subs + extras */}
        <div className="org-sub-grid">
          {columns.map((col, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {col.subs.map((s, j) => (
                <div key={j} style={card.sub}>{s}</div>
              ))}
              {(col.extra || []).map((ex, j) => (
                <div key={j} style={{ ...card.extra, paddingTop: 12 }}>
                  <div style={{ ...goldBar, borderRadius: "9px 9px 0 0" }} />
                  <div style={{
                    fontFamily: "'Cormorant Garamond',serif", fontSize: 11,
                    fontWeight: 700, color: "#fff", lineHeight: 1.25,
                  }}>{ex.name}</div>
                  <div style={{
                    fontFamily: "'DM Sans',sans-serif", fontSize: 8.5,
                    color: "#A8D080", marginTop: 2,
                  }}>{ex.role}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── L3+L4 MOBILE: accordion cards ── */}
      <div className="org-mobile-columns" style={{ display: "none", flexDirection: "column" }}>
        {columns.map((col, i) => (
          <MobileDirectorCard key={i} col={col} />
        ))}
      </div>

      {/* Spacer */}
      <div className="org-v-line" style={{ marginTop: 8 }} />

      {/* ── FOOTER ── */}
      <div style={card.footer}>
        <div style={{ ...goldBar, borderRadius: "12px 12px 0 0" }} />
        <div style={{
          fontFamily: "'Cormorant Garamond',serif", fontSize: 18,
          fontWeight: 700, color: "#fff", letterSpacing: "1.5px",
        }}>CHURCH MEMBERS &amp; OUTREACHES</div>
      </div>
    </div>
  );
}
