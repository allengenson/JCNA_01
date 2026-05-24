"use client";
import React, { useState, useEffect, useRef } from "react";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');
.org-root * { box-sizing: border-box; }
.org-desktop { display: none; }
.org-mobile  { display: flex; }
@media (min-width: 701px) {
  .org-mobile  { display: none !important; }
  .org-desktop { display: block !important; }
}
`;

const LINE = "#4A7C2F";

const directorColumns = [
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
    subs: ["Praise & Worship Team", "Instrumentalists", "Sound Engineer"],
  },
  {
    director: { name: "MICHAEL L. ATON", role: "Membership Director", preacher: true },
    subs: ["Membership Retention", "Membership Growth", "Special Events"],
  },
  {
    director: { name: "BELVIN L. ARMENION", role: "Secretary-General", preacher: false },
    subs: ["Church Records", "Administration"],
  },
];

const bracketCards = [
  { name: "ANALYN V. DURANGO",     role: "Treasurer",               preacher: false },
  { name: "ROY C. MENDREZ",        role: "Auditor",                 preacher: false },
  { name: "RICWARREN A. CORNILLO", role: "Public Relations Officer", preacher: false },
];

const goldBar = (r = 13): React.CSSProperties => ({
  position: "absolute", top: 0, left: 0, right: 0, height: 4,
  background: "#C8960E", borderRadius: `${r}px ${r}px 0 0`,
});

const s = {
  chairman: {
    position: "relative" as const, overflow: "hidden", textAlign: "center" as const,
    background: "#2D5016", borderRadius: 13, padding: "16px 28px 14px",
    maxWidth: 380, margin: "0 auto",
  },
  vc: {
    position: "relative" as const, overflow: "hidden", textAlign: "center" as const,
    background: "#3B6D11", borderRadius: 11, padding: "12px 22px 11px", minWidth: 230,
  },
  sideBox: {
    background: "#EAF5D8", border: "1.5px solid #4A7C2F", borderRadius: 9,
    padding: "10px 14px", textAlign: "center" as const, minWidth: 120,
  },
  dirCard: {
    position: "relative" as const, overflow: "hidden", textAlign: "center" as const,
    background: "#2D5016", border: "1.5px solid #4A7C2F", borderRadius: 9,
    padding: "14px 4px 10px", width: "100%", minHeight: 72,
    display: "flex", flexDirection: "column" as const,
    alignItems: "center" as const, justifyContent: "center" as const,
  },
  sub: {
    background: "#D8EEC0", border: "1px solid #7AAB50", borderRadius: 7,
    padding: "5px 4px", textAlign: "center" as const, fontSize: 9,
    color: "#2D5016", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.3,
  },
  footer: {
    position: "relative" as const, overflow: "hidden", textAlign: "center" as const,
    background: "#4A7C2F", borderRadius: 12, padding: "14px 20px", marginTop: 20,
  },
};

const VLine = ({ h = 20 }: { h?: number }) => (
  <div style={{ width: 2, height: h, background: LINE, flexShrink: 0, margin: "0 auto" }} />
);

/* ── Mobile accordion card — controlled via openIndex ── */
function MobileDirectorCard({
  name, role, preacher, subs, isOpen, onToggle,
}: {
  name: string;
  role: string;
  preacher?: boolean;
  subs?: string[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const hasChildren = (subs?.length ?? 0) > 0;

  return (
    <div style={{ borderRadius: 9, width: "100%" }}>
      <button
        onClick={() => { if (hasChildren) onToggle(); }}
        style={{
          display: "flex", alignItems: "center", width: "100%",
          background: "#fff", border: `1.5px solid ${LINE}`,
          borderRadius: isOpen && hasChildren ? "9px 9px 0 0" : 9,
          padding: "14px 12px 10px", cursor: hasChildren ? "pointer" : "default",
          textAlign: "left", position: "relative",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <div style={goldBar(9)} />
        <div style={{ flex: 1, paddingTop: 4, minWidth: 0 }}>
          {preacher && (
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#C8960E", letterSpacing: "1.4px", marginBottom: 3 }}>
              PREACHER
            </div>
          )}
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14, fontWeight: 700, color: "#2D5016", lineHeight: 1.25, wordBreak: "break-word" }}>
            {name}
          </div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#4A7C2F", marginTop: 3 }}>
            {role}
          </div>
        </div>
        {hasChildren && (
          <div style={{
            flexShrink: 0, marginLeft: 10, width: 26, height: 26,
            borderRadius: "50%", background: isOpen ? LINE : "#EAF3DE",
            color: isOpen ? "#fff" : "#2D5016",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, lineHeight: 1,
            transition: "transform .25s ease, background .25s ease",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            userSelect: "none" as const,
          }}>+</div>
        )}
      </button>

      {hasChildren && isOpen && (
        <div style={{
          borderLeft: `1.5px solid ${LINE}`, borderRight: `1.5px solid ${LINE}`,
          borderBottom: `1.5px solid ${LINE}`,
          borderRadius: "0 0 9px 9px", background: "#F7FCF0",
        }}>
          <div style={{
            display: "flex", flexDirection: "column", gap: 6,
            padding: "10px 10px 10px 14px",
            borderLeft: "3px solid #A3C57A",
            margin: "0 8px 10px 8px",
          }}>
            {subs!.map((sub, i) => (
              <div key={i} style={{ ...s.sub, fontSize: 11, padding: "6px 8px" }}>{sub}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Desktop director card ── */
function DirCard({ name, role, preacher }: { name: string; role: string; preacher?: boolean }) {
  return (
    <div style={s.dirCard}>
      <div style={goldBar(9)} />
      {preacher && (
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 7, color: "#C8960E", letterSpacing: "1.4px", marginBottom: 2 }}>
          PREACHER
        </div>
      )}
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>
        {name}
      </div>
      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#A8D080", marginTop: 3 }}>
        {role}
      </div>
    </div>
  );
}

/* ── Bracket column ── */
function BracketColumn() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const svgRef   = useRef<SVGSVGElement>(null);
  const rectRef  = useRef<SVGRectElement>(null);
  const armRoyRef = useRef<HTMLDivElement>(null);
  const armRicRef = useRef<HTMLDivElement>(null);

  const drawTrunk = () => {
    const bc = cardsRef.current;
    const svg = svgRef.current;
    if (!bc || !svg) return;
    const cards = bc.querySelectorAll<HTMLElement>(".bracket-dir-card");
    if (cards.length < 3) return;
    const colRect = bc.getBoundingClientRect();
    const anRect  = cards[0].getBoundingClientRect();
    const royRect = cards[1].getBoundingClientRect();
    const ricRect = cards[2].getBoundingClientRect();
    const trunkTop = (anRect.top  + anRect.height  / 2) - colRect.top;
    const trunkBot = (ricRect.top + ricRect.height / 2) - colRect.top;
    svg.setAttribute("height", String(trunkBot + 4));
    if (rectRef.current) {
      rectRef.current.setAttribute("y",      String(trunkTop));
      rectRef.current.setAttribute("height", String(trunkBot - trunkTop));
    }
    const armW = Math.max(4, (colRect.right - royRect.right) - 7);
    if (armRoyRef.current) armRoyRef.current.style.width = armW + "px";
    if (armRicRef.current) armRicRef.current.style.width = armW + "px";
  };

  useEffect(() => {
    drawTrunk();
    window.addEventListener("resize", drawTrunk);
    const t = setTimeout(drawTrunk, 300);
    return () => { window.removeEventListener("resize", drawTrunk); clearTimeout(t); };
  }, []);

  const armArrow: React.CSSProperties = {
    width: 0, height: 0, flexShrink: 0,
    borderTop: "5px solid transparent",
    borderBottom: "5px solid transparent",
    borderRight: `7px solid ${LINE}`,
  };
  const row: React.CSSProperties = { display: "flex", alignItems: "center", width: "100%" };

  return (
    <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start", paddingTop: 16 }}>
      <div style={{ position: "absolute", top: -4, left: "50%", transform: "translateX(-4px)", width: 8, height: 8, borderRadius: "50%", background: LINE }} />
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-1px)", width: 2, height: 16, background: LINE }} />
      <svg ref={svgRef} style={{ position: "absolute", top: 16, right: 0, pointerEvents: "none" }} width="2" height="300">
        <rect ref={rectRef} x="0" y="0" width="2" height="0" fill={LINE} />
      </svg>
      <div ref={cardsRef} style={{ display: "flex", flexDirection: "column", gap: 0, width: "100%", position: "relative" }}>
        <div style={row}>
          <div className="bracket-dir-card" style={{ ...s.dirCard, flex: 1 }}>
            <div style={goldBar(9)} />
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>ANALYN V. DURANGO</div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#A8D080", marginTop: 3 }}>Treasurer</div>
          </div>
        </div>
        <div style={{ ...row, marginTop: 8 }}>
          <div className="bracket-dir-card" style={{ ...s.dirCard, flex: 1 }}>
            <div style={goldBar(9)} />
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>ROY C. MENDREZ</div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#A8D080", marginTop: 3 }}>Auditor</div>
          </div>
          <div style={armArrow} />
          <div ref={armRoyRef} style={{ height: 2, background: LINE, flexShrink: 0, width: 14 }} />
        </div>
        <div style={{ ...row, marginTop: 8 }}>
          <div className="bracket-dir-card" style={{ ...s.dirCard, flex: 1 }}>
            <div style={goldBar(9)} />
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>RICWARREN A. CORNILLO</div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#A8D080", marginTop: 3 }}>Public Relations Officer</div>
          </div>
          <div style={armArrow} />
          <div ref={armRicRef} style={{ height: 2, background: LINE, flexShrink: 0, width: 14 }} />
        </div>
      </div>
    </div>
  );
}

/* ── Main ── */
export default function OrgChart() {
  // Single index controls which card is open; null = all closed
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const allCards = [
    ...directorColumns.map((col) => ({ ...col.director, subs: col.subs })),
    ...bracketCards.map((card) => ({ ...card, subs: [] as string[] })),
  ];

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="org-root" style={{ background: "#F4F8EE", borderRadius: 16, padding: "20px 8px", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{FONTS}</style>

      {/* ════ DESKTOP ════ */}
      <div className="org-desktop">
        <div style={s.chairman}>
          <div style={goldBar(13)} />
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "#C8960E", letterSpacing: "1.8px", marginBottom: 6 }}>
            APOSTLE · CHAIRMAN &amp; CHIEF EXECUTIVE
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
            REBERO L. ARMENION
          </div>
        </div>
        <VLine h={20} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={s.sideBox}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 700, color: "#2D5016" }}>CHURCH PREACHERS</div>
          </div>
          <div style={{ height: 2, width: 22, background: LINE, flexShrink: 0 }} />
          <div style={s.vc}>
            <div style={goldBar(11)} />
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "#C8960E", letterSpacing: "1.6px", marginBottom: 5 }}>PASTOR · VICE CHAIRMAN</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, fontWeight: 700, color: "#fff" }}>BENJAMEN L. ARMENION, JR.</div>
          </div>
          <div style={{ height: 2, width: 22, background: LINE, flexShrink: 0 }} />
          <div style={s.sideBox}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 700, color: "#2D5016" }}>CHURCH WORKERS</div>
          </div>
        </div>
        <VLine h={20} />
        <div style={{ width: "100%", height: 2, background: LINE }} />
        <div style={{ display: "flex", width: "100%", alignItems: "flex-start" }}>
          {directorColumns.map((col, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 16, position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-1px)", width: 2, height: 16, background: LINE }} />
              <div style={{ position: "absolute", top: -4, left: "50%", transform: "translateX(-4px)", width: 8, height: 8, borderRadius: "50%", background: LINE }} />
              <DirCard name={col.director.name} role={col.director.role} preacher={col.director.preacher} />
              {col.subs.length > 0 && <VLine h={10} />}
              <div style={{ display: "flex", flexDirection: "column", gap: 4, width: "100%" }}>
                {col.subs.map((sub, j) => <div key={j} style={s.sub}>{sub}</div>)}
              </div>
            </div>
          ))}
          <BracketColumn />
        </div>
        <div style={s.footer}>
          <div style={goldBar(12)} />
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 700, color: "#fff", letterSpacing: "1.5px" }}>
            CHURCH MEMBERS &amp; OUTREACHES
          </div>
        </div>
      </div>

      {/* ════ MOBILE ════ */}
      <div className="org-mobile" style={{ flexDirection: "column", gap: 10, alignItems: "stretch", padding: "0 4px" }}>

        {/* Chairman */}
        <div style={{ ...s.chairman, maxWidth: "100%", borderRadius: 11 }}>
          <div style={goldBar(11)} />
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#C8960E", letterSpacing: "1.5px", marginBottom: 4 }}>
            APOSTLE · CHAIRMAN &amp; CHIEF EXECUTIVE
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
            REBERO L. ARMENION
          </div>
        </div>

        {/* Preachers + Workers side by side */}
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ ...s.sideBox, flex: 1, padding: "8px 10px" }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 700, color: "#2D5016" }}>CHURCH PREACHERS</div>
          </div>
          <div style={{ ...s.sideBox, flex: 1, padding: "8px 10px" }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 700, color: "#2D5016" }}>CHURCH WORKERS</div>
          </div>
        </div>

        {/* Vice Chairman */}
        <div style={{ ...s.vc, width: "100%", minWidth: "unset", borderRadius: 11 }}>
          <div style={goldBar(11)} />
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#C8960E", letterSpacing: "1.3px", marginBottom: 4 }}>
            PASTOR · VICE CHAIRMAN
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, fontWeight: 700, color: "#fff" }}>
            BENJAMEN L. ARMENION, JR.
          </div>
        </div>

        {/* Divider label */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "2px 0" }}>
          <div style={{ flex: 1, height: 1, background: "#A3C57A" }} />
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "#4A7C2F", letterSpacing: "1.2px", whiteSpace: "nowrap" }}>DIRECTORS &amp; OFFICERS</div>
          <div style={{ flex: 1, height: 1, background: "#A3C57A" }} />
        </div>

        {/* All cards — controlled by single openIndex */}
        {allCards.map((card, i) => (
          <MobileDirectorCard
            key={i}
            name={card.name}
            role={card.role}
            preacher={card.preacher}
            subs={card.subs}
            isOpen={openIndex === i}
            onToggle={() => handleToggle(i)}
          />
        ))}

        {/* Footer */}
        <div style={{ ...s.footer, marginTop: 4, borderRadius: 11 }}>
          <div style={goldBar(11)} />
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: "1.2px" }}>
            CHURCH MEMBERS &amp; OUTREACHES
          </div>
        </div>

      </div>
    </div>
  );
}
