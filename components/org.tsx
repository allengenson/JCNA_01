"use client";
import React, { useState } from "react";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

.org-root * { box-sizing: border-box; }

/* ── Connector lines via CSS ── */

/* Chairman → VC: vertical line below chairman box */
.org-v-line {
  width: 2px;
  background: #4A7C2F;
  margin: 0 auto;
}

/* Horizontal bar spanning all 6 director columns, with drops */
.org-h-bar-wrap {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

/* Each column cell in the h-bar row: has a top stub going up to the bar */
.org-col-stub {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

/* The horizontal bar sits at the top of these stubs */
.org-h-bar-wrap::before {
  content: '';
  position: absolute;
  top: 0;
  left: calc(100% / 12);
  right: calc(100% / 12);
  height: 2px;
  background: #4A7C2F;
}

/* Each stub: a vertical line from the bar down to the director card */
.org-col-stub::before {
  content: '';
  display: block;
  width: 2px;
  height: 18px;
  background: #4A7C2F;
  margin: 0 auto;
}

/* Director → sub: short vertical line */
.org-dir-to-sub {
  width: 2px;
  height: 14px;
  background: #4A7C2F;
  margin: 0 auto;
}

/* Mobile: simple left border instead of lines */
@media (max-width: 768px) {
  .org-desktop { display: none !important; }
  .org-mobile  { display: flex !important; }
}
@media (min-width: 769px) {
  .org-mobile  { display: none !important; }
  .org-desktop { display: block; }
}
`;

const LINE = "#4A7C2F";

const columns = [
  {
    director: { name: "ANDONIE D. KADUSALE", role: "Ministries Director", preacher: true },
    subs: ["Ministry of the Word & Evangelism", "Couples Ministry", "Children Ministry"],
    extra: [] as { name: string; role: string }[],
  },
  {
    director: { name: "JOBERTH P. CABUCOS", role: "Choir Director", preacher: true },
    subs: ["Gospel Choir", "Adults Choir", "Children Choir"],
    extra: [],
  },
  {
    director: { name: "CHRISTIAN DAVE L. PITOGO", role: "Music Director", preacher: true },
    subs: ["Praise & Worship Team", "Instrumentalists", "Sound Engineer"],
    extra: [],
  },
  {
    director: { name: "MICHAEL L. ATON", role: "Membership Director", preacher: true },
    subs: ["Membership Retention", "Membership Growth", "Special Events"],
    extra: [],
  },
  {
    director: { name: "BELVIN L. ARMENION", role: "Secretary-General", preacher: false },
    subs: ["Church Records", "Administration"],
    extra: [],
  },
  {
    director: { name: "ANALYN V. DURANGO", role: "Treasurer", preacher: false },
    subs: [],
    extra: [
      { name: "ROY C. MENDREZ", role: "Auditor" },
      { name: "RICWARREN A. CORNILLO", role: "Public Relations Officer" },
    ],
  },
];

/* ── Shared style objects ── */
const goldBar = (r = 13): React.CSSProperties => ({
  position: "absolute", top: 0, left: 0, right: 0, height: 4,
  background: "#C8960E", borderRadius: `${r}px ${r}px 0 0`,
});

const s = {
  chairman: {
    background: "#2D5016", borderRadius: 13, padding: "16px 28px 14px",
    textAlign: "center" as const, position: "relative" as const, overflow: "hidden" as const,
  },
  viceChairman: {
    background: "#3B6D11", borderRadius: 11, padding: "12px 22px 11px",
    textAlign: "center" as const, position: "relative" as const, overflow: "hidden" as const,
  },
  sideBox: {
    background: "#EAF5D8", border: "1.5px solid #4A7C2F", borderRadius: 9,
    padding: "10px 14px", textAlign: "center" as const,
  },
  director: {
    background: "#fff", border: "1.5px solid #4A7C2F", borderRadius: 9,
    padding: "14px 8px 10px", textAlign: "center" as const,
    position: "relative" as const, overflow: "hidden" as const, width: "100%",
  },
  sub: {
    background: "#D8EEC0", border: "1px solid #7AAB50", borderRadius: 7,
    padding: "7px 6px", textAlign: "center" as const, fontSize: 11,
    color: "#2D5016", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.3,
  },
  extra: {
    background: "#2D5016", borderRadius: 9, padding: "13px 10px 9px",
    textAlign: "center" as const, position: "relative" as const, overflow: "hidden" as const,
  },
  footer: {
    background: "#4A7C2F", borderRadius: 12, padding: "14px 20px",
    textAlign: "center" as const, position: "relative" as const, overflow: "hidden" as const,
  },
};

/* ── Mobile accordion card ── */
function MobileDirectorCard({ col }: { col: typeof columns[0] }) {
  const [open, setOpen] = useState(false);
  const hasChildren = col.subs.length + col.extra.length > 0;

  return (
    <div style={{ borderRadius: 9, overflow: "hidden" }}>

      {/* Tap target: the entire header row — no nested absolute buttons */}
      <button
        onClick={() => setOpen(v => !v)}
        disabled={!hasChildren}
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          background: "#fff",
          border: "1.5px solid #4A7C2F",
          borderRadius: open && hasChildren ? "9px 9px 0 0" : 9,
          padding: "14px 12px 10px",
          cursor: hasChildren ? "pointer" : "default",
          textAlign: "left",
          position: "relative",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {/* Gold top bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "#C8960E", borderRadius: "9px 9px 0 0",
          pointerEvents: "none",
        }} />

        {/* Text content */}
        <div style={{ flex: 1, paddingTop: 4 }}>
          {col.director.preacher && (
            <div style={{
              fontFamily: "'DM Sans',sans-serif", fontSize: 8,
              color: "#C8960E", letterSpacing: "1.4px", marginBottom: 3,
            }}>PREACHER</div>
          )}
          <div style={{
            fontFamily: "'Cormorant Garamond',serif", fontSize: 14,
            fontWeight: 700, color: "#2D5016", lineHeight: 1.25,
          }}>
            {col.director.name}
          </div>
          <div style={{
            fontFamily: "'DM Sans',sans-serif", fontSize: 9,
            color: "#4A7C2F", marginTop: 3,
          }}>
            {col.director.role}
          </div>
        </div>

        {/* Chevron indicator — sits in normal flow, no absolute positioning */}
        {hasChildren && (
          <div style={{
            flexShrink: 0, marginLeft: 10,
            width: 24, height: 24, borderRadius: "50%",
            background: open ? "#2D5016" : "#EAF3DE",
            color: open ? "#fff" : "#2D5016",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, lineHeight: 1,
            transition: "transform .25s ease, background .25s ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            userSelect: "none",
          }}>
            +
          </div>
        )}
      </button>

      {/* Expandable children */}
      {hasChildren && (
        <div style={{
          borderLeft: "1.5px solid #4A7C2F",
          borderRight: "1.5px solid #4A7C2F",
          borderBottom: open ? "1.5px solid #4A7C2F" : "none",
          borderRadius: "0 0 9px 9px",
          background: "#F7FCF0",
          overflow: "hidden",
          maxHeight: open ? 600 : 0,
          transition: "max-height 0.3s ease",
        }}>
          <div style={{
            display: "flex", flexDirection: "column", gap: 6,
            padding: "10px 10px 10px 14px",
            borderLeft: "3px solid #A3C57A",
            margin: "0 8px 10px 8px",
            borderRadius: "0 0 0 4px",
          }}>
            {col.subs.map((sub, i) => (
              <div key={i} style={s.sub}>{sub}</div>
            ))}
            {col.extra.map((ex, i) => (
              <div key={i} style={{
                background: "#2D5016", borderRadius: 9,
                padding: "12px 10px 9px",
                position: "relative", overflow: "hidden",
                textAlign: "center",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 4,
                  background: "#C8960E", borderRadius: "9px 9px 0 0",
                }} />
                <div style={{
                  fontFamily: "'Cormorant Garamond',serif", fontSize: 12,
                  fontWeight: 700, color: "#fff", lineHeight: 1.25,
                }}>{ex.name}</div>
                <div style={{
                  fontFamily: "'DM Sans',sans-serif", fontSize: 8.5,
                  color: "#A8D080", marginTop: 2,
                }}>{ex.role}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Main ── */
export default function OrgChart() {
  return (
    <div className="org-root" style={{
      background: "#F4F8EE", borderRadius: 16,
      padding: "24px 16px 20px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{FONTS}</style>

      {/* ── DESKTOP ── */}
      <div className="org-desktop">

        {/* L1: Chairman */}
        <div style={{ maxWidth: 360, margin: "0 auto" }}>
          <div style={s.chairman}>
            <div style={goldBar(13)} />
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "#C8960E", letterSpacing: "1.8px", marginBottom: 6 }}>
              APOSTLE · CHAIRMAN &amp; CHIEF EXECUTIVE
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 21, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
              REBERO L. ARMENION
            </div>
          </div>
        </div>

        {/* Connector: Chairman → VC row */}
        <div style={{ height: 20, display: "flex", alignItems: "stretch", justifyContent: "center" }}>
          <div style={{ width: 2, background: LINE }} />
        </div>

        {/* L2: Side boxes + Vice Chairman */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }}>
          <div style={{ ...s.sideBox, minWidth: 140 }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14, fontWeight: 700, color: "#2D5016" }}>
              CHURCH PREACHERS
            </div>
          </div>
          <div style={{ height: 1.5, width: 32, background: LINE, flexShrink: 0 }} />
          <div style={{ ...s.viceChairman, minWidth: 240 }}>
            <div style={goldBar(11)} />
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "#C8960E", letterSpacing: "1.6px", marginBottom: 5 }}>
              PASTOR · VICE CHAIRMAN
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 700, color: "#fff" }}>
              BENJAMEN L. ARMENION, JR.
            </div>
          </div>
          <div style={{ height: 1.5, width: 32, background: LINE, flexShrink: 0 }} />
          <div style={{ ...s.sideBox, minWidth: 140 }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14, fontWeight: 700, color: "#2D5016" }}>
              CHURCH WORKERS
            </div>
          </div>
        </div>

        {/* Connector: VC → horizontal bar → 6 directors
            Done with a CSS trick: a box with border-top + 6 equal children that each have border-left */}
        <div style={{
          display: "flex",
          /* Short vertical drop from VC center to the horizontal bar */
          paddingTop: 20,
          position: "relative",
        }}>
          {/* Vertical stub from VC down to bar level */}
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-1px)",
            width: 2, height: 20, background: LINE,
          }} />

          {/* The 6-column tree: border-top is the horizontal bar */}
          <div style={{
            display: "flex",
            width: "100%",
            borderTop: `2px solid ${LINE}`,
            position: "relative",
          }}>
            {columns.map((col, i) => (
              <div key={i} style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 16,
                position: "relative",
              }}>
                {/* Vertical drop from bar to director card */}
                <div style={{
                  position: "absolute", top: 0, left: "50%", transform: "translateX(-1px)",
                  width: 2, height: 16, background: LINE,
                }} />
                {/* Dot on the bar */}
                <div style={{
                  position: "absolute", top: -4, left: "50%", transform: "translateX(-4px)",
                  width: 8, height: 8, borderRadius: "50%", background: LINE,
                }} />

                {/* Director card */}
                <div style={{ ...s.director, paddingTop: 14 }}>
                  <div style={goldBar(9)} />
                  {col.director.preacher && (
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#C8960E", letterSpacing: "1.4px", marginBottom: 2 }}>
                      PREACHER
                    </div>
                  )}
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 700, color: "#2D5016", lineHeight: 1.25 }}>
                    {col.director.name}
                  </div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "#4A7C2F", marginTop: 3 }}>
                    {col.director.role}
                  </div>
                </div>

                {/* Connector: director → subs */}
                {(col.subs.length > 0 || col.extra.length > 0) && (
                  <div style={{ width: 2, height: 12, background: LINE, flexShrink: 0 }} />
                )}

                {/* Sub items */}
                <div style={{ display: "flex", flexDirection: "column", gap: 5, width: "100%" }}>
                  {col.subs.map((sub, j) => (
                    <div key={j} style={s.sub}>{sub}</div>
                  ))}
                  {col.extra.map((ex, j) => (
                    <div key={j} style={{ ...s.extra, paddingTop: 12 }}>
                      <div style={goldBar(9)} />
                      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>
                        {ex.name}
                      </div>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8.5, color: "#A8D080", marginTop: 2 }}>
                        {ex.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ ...s.footer, marginTop: 20 }}>
          <div style={goldBar(12)} />
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: "1.5px" }}>
            CHURCH MEMBERS &amp; OUTREACHES
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="org-mobile" style={{ display: "none", flexDirection: "column", gap: 10 }}>

        {/* Chairman */}
        <div style={s.chairman}>
          <div style={goldBar(13)} />
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#C8960E", letterSpacing: "1.6px", marginBottom: 5 }}>
            APOSTLE · CHAIRMAN &amp; CHIEF EXECUTIVE
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 700, color: "#fff" }}>
            REBERO L. ARMENION
          </div>
        </div>

        {/* Side labels + VC */}
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ ...s.sideBox, flex: 1 }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 700, color: "#2D5016" }}>CHURCH PREACHERS</div>
          </div>
          <div style={{ ...s.sideBox, flex: 1 }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 700, color: "#2D5016" }}>CHURCH WORKERS</div>
          </div>
        </div>
        <div style={{ ...s.viceChairman, width: "100%", minWidth: "unset" }}>
          <div style={goldBar(11)} />
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#C8960E", letterSpacing: "1.4px", marginBottom: 4 }}>
            PASTOR · VICE CHAIRMAN
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 700, color: "#fff" }}>
            BENJAMEN L. ARMENION, JR.
          </div>
        </div>

        {/* Director accordion cards */}
        {columns.map((col, i) => (
          <MobileDirectorCard key={i} col={col} />
        ))}

        {/* Footer */}
        <div style={{ ...s.footer, marginTop: 6 }}>
          <div style={goldBar(12)} />
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, fontWeight: 700, color: "#fff", letterSpacing: "1.2px" }}>
            CHURCH MEMBERS &amp; OUTREACHES
          </div>
        </div>
      </div>
    </div>
  );
}
