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
  { name: "ANALYN V. DURANGO",     role: "Treasurer",                preacher: false },
  { name: "ROY C. MENDREZ",        role: "Auditor",                  preacher: false },
  { name: "RICWARREN A. CORNILLO", role: "Public Relations Officer",  preacher: false },
];

const goldBar = (r = 13): React.CSSProperties => ({
  position: "absolute", top: 0, left: 0, right: 0, height: 5,
  background: "#C8960E", borderRadius: `${r}px ${r}px 0 0`,
});

const nameWrap: React.CSSProperties = {
  wordBreak: "break-word",
  overflowWrap: "break-word",
  hyphens: "auto",
  whiteSpace: "normal",
};

const s = {
  chairman: {
    position: "relative" as const, overflow: "hidden", textAlign: "center" as const,
    background: "#2D5016", borderRadius: 16, padding: "32px 52px 28px",
    maxWidth: 520, margin: "0 auto",
  },
  vc: {
    position: "relative" as const, overflow: "hidden", textAlign: "center" as const,
    background: "#3B6D11", borderRadius: 13, padding: "22px 44px 20px", minWidth: 320,
  },
  sideBox: {
    background: "#EAF5D8", border: "1.5px solid #4A7C2F", borderRadius: 10,
    padding: "16px 32px", textAlign: "center" as const, whiteSpace: "nowrap" as const,
  },
  dirCard: {
    position: "relative" as const, overflow: "hidden", textAlign: "center" as const,
    background: "#2D5016", border: "1.5px solid #4A7C2F", borderRadius: 11,
    padding: "22px 12px 18px", width: "100%", minHeight: 110,
    display: "flex", flexDirection: "column" as const,
    alignItems: "center" as const, justifyContent: "center" as const,
  },
  sub: {
    background: "#D8EEC0", border: "1px solid #7AAB50", borderRadius: 8,
    padding: "9px 10px", textAlign: "center" as const, fontSize: 10,
    color: "#2D5016", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4,
  },
  footer: {
    position: "relative" as const, overflow: "hidden", textAlign: "center" as const,
    background: "#4A7C2F", borderRadius: 14, padding: "26px 28px", marginTop: 28,
  },
};

const DOT_SIZE = 12;
const STEM_W   = 3;

const VLine = ({ h = 32 }: { h?: number }) => (
  <div style={{ width: STEM_W, height: h, background: LINE, flexShrink: 0, margin: "0 auto" }} />
);

/* ── Mobile accordion card ── */
function MobileDirectorCard({
  name, role, preacher, subs,
}: {
  name: string; role: string; preacher?: boolean; subs?: string[];
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = (subs?.length ?? 0) > 0;

  return (
    <div style={{ borderRadius: 9, width: "100%" }}>
      <button
        onClick={() => { if (hasChildren) setOpen(v => !v); }}
        style={{
          display: "flex", alignItems: "center", width: "100%",
          background: "#fff", border: `1.5px solid ${LINE}`,
          borderRadius: open && hasChildren ? "9px 9px 0 0" : 9,
          padding: "16px 14px 12px", cursor: hasChildren ? "pointer" : "default",
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
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, fontWeight: 700, color: "#2D5016", lineHeight: 1.3, ...nameWrap }}>
            {name}
          </div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "#4A7C2F", marginTop: 4 }}>
            {role}
          </div>
        </div>
        {hasChildren && (
          <div style={{
            flexShrink: 0, marginLeft: 12, width: 28, height: 28,
            borderRadius: "50%", background: open ? LINE : "#EAF3DE",
            color: open ? "#fff" : "#2D5016",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, lineHeight: 1,
            transition: "transform .25s ease, background .25s ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            userSelect: "none" as const,
          }}>+</div>
        )}
      </button>

      {hasChildren && open && (
        <div style={{
          borderLeft: `1.5px solid ${LINE}`, borderRight: `1.5px solid ${LINE}`,
          borderBottom: `1.5px solid ${LINE}`,
          borderRadius: "0 0 9px 9px", background: "#F7FCF0",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: "10px 10px 10px 14px", borderLeft: "3px solid #A3C57A", margin: "0 8px 10px 8px" }}>
            {subs!.map((sub, i) => (
              <div key={i} style={{ ...s.sub, fontSize: 11, padding: "7px 10px" }}>{sub}</div>
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
      <div style={goldBar(11)} />
      {preacher && (
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#C8960E", letterSpacing: "1.8px", marginBottom: 5 }}>
          PREACHER
        </div>
      )}
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 700, color: "#fff", lineHeight: 1.35, ...nameWrap }}>
        {name}
      </div>
      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#A8D080", marginTop: 5 }}>
        {role}
      </div>
    </div>
  );
}

/* ── Bracket column ── */
function BracketColumn() {
  const cardsRef  = useRef<HTMLDivElement>(null);
  const svgRef    = useRef<SVGSVGElement>(null);
  const rectRef   = useRef<SVGRectElement>(null);
  const armRoyRef = useRef<HTMLDivElement>(null);
  const armRicRef = useRef<HTMLDivElement>(null);

  const drawTrunk = () => {
    const bc  = cardsRef.current;
    const svg = svgRef.current;
    if (!bc || !svg) return;
    const cards = bc.querySelectorAll<HTMLElement>(".bracket-dir-card");
    if (cards.length < 3) return;
    const colRect = bc.getBoundingClientRect();
    const anRect  = cards[0].getBoundingClientRect();
    const ricRect = cards[2].getBoundingClientRect();
    const trunkTop = (anRect.top  + anRect.height  / 2) - colRect.top;
    const trunkBot = (ricRect.top + ricRect.height / 2) - colRect.top;
    svg.setAttribute("height", String(trunkBot + 4));
    if (rectRef.current) {
      rectRef.current.setAttribute("y",      String(trunkTop));
      rectRef.current.setAttribute("height", String(trunkBot - trunkTop));
    }
    const armW = Math.max(4, (colRect.right - cards[1].getBoundingClientRect().right) - 7);
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
    borderTop: "6px solid transparent",
    borderBottom: "6px solid transparent",
    borderRight: `8px solid ${LINE}`,
  };
  const row: React.CSSProperties = { display: "flex", alignItems: "center", width: "100%" };
  const nameStyle: React.CSSProperties = { fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 700, color: "#fff", lineHeight: 1.35, ...nameWrap };

  return (
    <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start", paddingTop: 20 }}>
      <div style={{ position: "absolute", top: -(DOT_SIZE / 2 - 1), left: "50%", transform: `translateX(-${DOT_SIZE / 2}px)`, width: DOT_SIZE, height: DOT_SIZE, borderRadius: "50%", background: LINE }} />
      <div style={{ position: "absolute", top: 0, left: "50%", transform: `translateX(-${STEM_W / 2}px)`, width: STEM_W, height: 20, background: LINE }} />
      <svg ref={svgRef} style={{ position: "absolute", top: 20, right: 0, pointerEvents: "none" }} width={STEM_W} height="300">
        <rect ref={rectRef} x="0" y="0" width={STEM_W} height="0" fill={LINE} />
      </svg>
      <div ref={cardsRef} style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%", position: "relative" }}>
        <div style={row}>
          <div className="bracket-dir-card" style={{ ...s.dirCard, flex: 1 }}>
            <div style={goldBar(11)} />
            <div style={nameStyle}>ANALYN V. DURANGO</div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#A8D080", marginTop: 5 }}>Treasurer</div>
          </div>
        </div>
        <div style={row}>
          <div className="bracket-dir-card" style={{ ...s.dirCard, flex: 1 }}>
            <div style={goldBar(11)} />
            <div style={nameStyle}>ROY C. MENDREZ</div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#A8D080", marginTop: 5 }}>Auditor</div>
          </div>
          <div style={armArrow} />
          <div ref={armRoyRef} style={{ height: 2, background: LINE, flexShrink: 0, width: 18 }} />
        </div>
        <div style={row}>
          <div className="bracket-dir-card" style={{ ...s.dirCard, flex: 1 }}>
            <div style={goldBar(11)} />
            <div style={nameStyle}>RICWARREN A. CORNILLO</div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#A8D080", marginTop: 5 }}>Public Relations Officer</div>
          </div>
          <div style={armArrow} />
          <div ref={armRicRef} style={{ height: 2, background: LINE, flexShrink: 0, width: 18 }} />
        </div>
      </div>
    </div>
  );
}

/* ── Main ── */
export default function OrgChart() {
  return (
    <div className="org-root" style={{ background: "#F4F8EE", borderRadius: 16, padding: "36px 28px", fontFamily: "'DM Sans', sans-serif", maxWidth: 1400, margin: "0 auto" }}>
      <style>{FONTS}</style>

      {/* ════ DESKTOP ════ */}
      <div className="org-desktop">

        {/* Chairman — 3-line format: title · name · role */}
        <div style={s.chairman}>
          <div style={goldBar(16)} />
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#C8960E", letterSpacing: "2px", marginBottom: 6 }}>
            APOSTLE
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, fontWeight: 700, color: "#fff", lineHeight: 1.25, ...nameWrap }}>
            REBERO L. ARMENION
          </div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#A8D080", letterSpacing: "1.5px", marginTop: 8 }}>
            CHAIRMAN &amp; CHIEF EXECUTIVE
          </div>
        </div>

        <VLine h={32} />

        {/* Mid row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={s.sideBox}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, fontWeight: 700, color: "#2D5016" }}>CHURCH PREACHERS</div>
          </div>
          <div style={{ height: 2, width: 36, background: LINE, flexShrink: 0 }} />

          {/* Vice Chairman — 3-line format: title · name · role */}
          <div style={s.vc}>
            <div style={goldBar(13)} />
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#C8960E", letterSpacing: "2px", marginBottom: 6 }}>PASTOR</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 700, color: "#fff", ...nameWrap }}>BENJAMEN L. ARMENION, JR.</div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "#A8D080", letterSpacing: "1.5px", marginTop: 8 }}>VICE CHAIRMAN</div>
          </div>

          <div style={{ height: 2, width: 36, background: LINE, flexShrink: 0 }} />
          <div style={s.sideBox}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, fontWeight: 700, color: "#2D5016" }}>CHURCH WORKERS</div>
          </div>
        </div>

        <VLine h={32} />

        {/* Horizontal bar */}
        <div style={{ width: "100%", height: STEM_W, background: LINE }} />

        {/* Director columns */}
        <div style={{ display: "flex", width: "100%", alignItems: "flex-start" }}>
          {directorColumns.map((col, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 22, position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: "50%", transform: `translateX(-${STEM_W / 2}px)`, width: STEM_W, height: 22, background: LINE }} />
              <div style={{ position: "absolute", top: -(DOT_SIZE / 2 - 1), left: "50%", transform: `translateX(-${DOT_SIZE / 2}px)`, width: DOT_SIZE, height: DOT_SIZE, borderRadius: "50%", background: LINE }} />
              <DirCard name={col.director.name} role={col.director.role} preacher={col.director.preacher} />
              {col.subs.length > 0 && <VLine h={14} />}
              <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
                {col.subs.map((sub, j) => <div key={j} style={s.sub}>{sub}</div>)}
              </div>
            </div>
          ))}
          <BracketColumn />
        </div>

        {/* Footer */}
        <div style={s.footer}>
          <div style={goldBar(14)} />
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700, color: "#fff", letterSpacing: "2px" }}>
            CHURCH MEMBERS &amp; OUTREACHES
          </div>
        </div>
      </div>

      {/* ════ MOBILE ════ */}
      <div className="org-mobile" style={{ flexDirection: "column", gap: 12, alignItems: "stretch", padding: "0 4px" }}>

        {/* Chairman — 3-line */}
        <div style={{ ...s.chairman, maxWidth: "100%", borderRadius: 11 }}>
          <div style={goldBar(11)} />
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#C8960E", letterSpacing: "1.5px", marginBottom: 5 }}>
            APOSTLE
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700, color: "#fff", lineHeight: 1.3, ...nameWrap }}>
            REBERO L. ARMENION
          </div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "#A8D080", letterSpacing: "1.2px", marginTop: 6 }}>
            CHAIRMAN &amp; CHIEF EXECUTIVE
          </div>
        </div>

        {/* Vice Chairman — 3-line, ABOVE preachers/workers */}
        <div style={{ ...s.vc, width: "100%", minWidth: "unset", borderRadius: 11 }}>
          <div style={goldBar(11)} />
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, color: "#C8960E", letterSpacing: "1.3px", marginBottom: 5 }}>
            PASTOR
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 700, color: "#fff", ...nameWrap }}>
            BENJAMEN L. ARMENION, JR.
          </div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "#A8D080", letterSpacing: "1.2px", marginTop: 6 }}>
            VICE CHAIRMAN
          </div>
        </div>

        {/* Preachers + Workers — now BELOW Benjamin */}
        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ ...s.sideBox, flex: 1, padding: "12px", whiteSpace: "normal" }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 700, color: "#2D5016" }}>CHURCH PREACHERS</div>
          </div>
          <div style={{ ...s.sideBox, flex: 1, padding: "12px", whiteSpace: "normal" }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 700, color: "#2D5016" }}>CHURCH WORKERS</div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "2px 0" }}>
          <div style={{ flex: 1, height: 1, background: "#A3C57A" }} />
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "#4A7C2F", letterSpacing: "1.2px", whiteSpace: "nowrap" }}>DIRECTORS &amp; OFFICERS</div>
          <div style={{ flex: 1, height: 1, background: "#A3C57A" }} />
        </div>

        {/* Director accordion cards */}
        {directorColumns.map((col, i) => (
          <MobileDirectorCard key={i} name={col.director.name} role={col.director.role} preacher={col.director.preacher} subs={col.subs} />
        ))}

        {/* Bracket cards */}
        {bracketCards.map((card, i) => (
          <MobileDirectorCard key={`b-${i}`} name={card.name} role={card.role} preacher={card.preacher} />
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
