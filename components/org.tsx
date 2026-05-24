"use client";
import React, { useEffect, useRef, useState } from "react";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

.org-root * { box-sizing: border-box; }

.org-dir-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
}
.org-sub-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
}

@media (max-width: 768px) {
  .org-dir-grid    { display: none; }
  .org-sub-grid    { display: none; }
  .org-svg-mid     { display: none; }
  .org-svg-dirs    { display: none; }
  .org-desktop-l2  { display: none !important; }
  .org-mobile-l2   { display: flex !important; }
  .org-mobile-cols { display: flex !important; }
}
@media (min-width: 769px) {
  .org-mobile-l2   { display: none !important; }
  .org-mobile-cols { display: none !important; }
  .org-svg-top     { display: block; }
}
`;

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
    subs: ["Praise & Worship Team", "Instrumentalists", "Sound Engineer / Controller"],
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

const LINE_COLOR = "#4A7C2F";
const LINE_W = 2;

const card = {
  chairman: {
    background: "#2D5016", borderRadius: 13,
    padding: "14px 28px 13px", textAlign: "center" as const,
    position: "relative" as const, overflow: "hidden" as const,
  },
  viceChairman: {
    background: "#3B6D11", borderRadius: 11,
    padding: "12px 22px 11px", textAlign: "center" as const,
    position: "relative" as const, overflow: "hidden" as const, minWidth: 230,
  },
  sideBox: {
    background: "#EAF5D8", border: "1.5px solid #4A7C2F", borderRadius: 9,
    padding: "10px 14px", textAlign: "center" as const, minWidth: 140,
  },
  director: {
    background: "#fff", border: "1.5px solid #4A7C2F", borderRadius: 9,
    padding: "12px 8px 10px", textAlign: "center" as const,
    position: "relative" as const, overflow: "hidden" as const,
  },
  sub: {
    background: "#D8EEC0", border: "1px solid #7AAB50", borderRadius: 7,
    padding: "7px 6px", textAlign: "center" as const, fontSize: 11,
    color: "#2D5016", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.3,
  },
  extra: {
    background: "#2D5016", borderRadius: 9, padding: "11px 10px 9px",
    textAlign: "center" as const, position: "relative" as const, overflow: "hidden" as const,
  },
  footer: {
    background: "#4A7C2F", borderRadius: 12, padding: "14px 20px",
    textAlign: "center" as const, position: "relative" as const, overflow: "hidden" as const,
  },
};

const goldBar = (r = 13) => ({
  position: "absolute" as const, top: 0, left: 0, right: 0, height: 4,
  background: "#C8960E", borderRadius: `${r}px ${r}px 0 0`,
});

// ── Mobile accordion (self-contained, no shared refs) ─────────────────
function MobileDirectorCard({ col }: { col: typeof columns[0] }) {
  const [open, setOpen] = useState(false);
  const hasChildren = col.subs.length + col.extra.length > 0;

  return (
    <div>
      <div
        style={{ ...card.director, paddingTop: 14, paddingRight: hasChildren ? 38 : 12,
          cursor: hasChildren ? "pointer" : "default" }}
        onClick={() => { if (hasChildren) setOpen(v => !v); }}
      >
        <div style={goldBar(9)} />
        {col.director.preacher && (
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8,
            color: "#C8960E", letterSpacing: "1.4px", marginBottom: 3 }}>PREACHER</div>
        )}
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14,
          fontWeight: 700, color: "#2D5016", lineHeight: 1.25 }}>{col.director.name}</div>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9,
          color: "#4A7C2F", marginTop: 3 }}>{col.director.role}</div>
        {hasChildren && (
          <div style={{
            position: "absolute", top: 8, right: 9, width: 22, height: 22,
            borderRadius: "50%",
            background: open ? "#2D5016" : "#EAF3DE",
            color: open ? "#fff" : "#2D5016",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 300, lineHeight: 1,
            transition: "transform .25s, background .25s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            pointerEvents: "none",
          }}>+</div>
        )}
      </div>

      {hasChildren && (
        <div style={{
          marginTop: 6, paddingLeft: 12, borderLeft: "2.5px solid #A3C57A",
          display: "flex", flexDirection: "column", gap: 6,
          maxHeight: open ? 600 : 0, overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}>
          {col.subs.map((s, i) => <div key={i} style={card.sub}>{s}</div>)}
          {col.extra.map((ex, i) => (
            <div key={i} style={{ ...card.extra, paddingTop: 12 }}>
              <div style={goldBar(9)} />
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12,
                fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>{ex.name}</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8.5,
                color: "#A8D080", marginTop: 2 }}>{ex.role}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Simple vertical connector between two measured elements ───────────
function VConnector({
  fromRef, toRef, containerRef, className,
}: {
  fromRef: React.RefObject<HTMLDivElement>;
  toRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  className?: string;
}) {
  const [pts, setPts] = useState<{ x: number; y1: number; y2: number } | null>(null);

  useEffect(() => {
    function measure() {
      const con = containerRef.current, fr = fromRef.current, to = toRef.current;
      if (!con || !fr || !to) return;
      const cR = con.getBoundingClientRect();
      const fR = fr.getBoundingClientRect();
      const tR = to.getBoundingClientRect();
      setPts({
        x: fR.left + fR.width / 2 - cR.left,
        y1: fR.bottom - cR.top,
        y2: tR.top - cR.top,
      });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [fromRef, toRef, containerRef]);

  if (!pts) return <div style={{ height: 24 }} />;
  return (
    <svg width="100%" height={pts.y2 + 2} style={{ display: "block", overflow: "visible" }} className={className}>
      <line x1={pts.x} y1={pts.y1} x2={pts.x} y2={pts.y2}
        stroke={LINE_COLOR} strokeWidth={LINE_W} />
    </svg>
  );
}

// ── VC → horizontal bar → drop to each director ───────────────────────
function MidConnector({
  vcRef, dirGridRef, containerRef,
}: {
  vcRef: React.RefObject<HTMLDivElement>;
  dirGridRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const [data, setData] = useState<{
    vcX: number; vcBotY: number; midY: number;
    dirs: { x: number; topY: number }[]; h: number;
  } | null>(null);

  useEffect(() => {
    function measure() {
      const con = containerRef.current;
      const vc  = vcRef.current;
      const grid = dirGridRef.current;
      if (!con || !vc || !grid) return;
      const cR = con.getBoundingClientRect();
      const vR = vc.getBoundingClientRect();

      // Collect each direct child of the dir grid
      const children = Array.from(grid.children) as HTMLElement[];
      const dirs = children.map(el => {
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width / 2 - cR.left, topY: r.top - cR.top };
      });
      if (dirs.length === 0) return;

      const vcX    = vR.left + vR.width / 2 - cR.left;
      const vcBotY = vR.bottom - cR.top;
      const midY   = (vcBotY + dirs[0].topY) / 2;
      setData({ vcX, vcBotY, midY, dirs, h: dirs[0].topY + 2 });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [vcRef, dirGridRef, containerRef]);

  if (!data) return <div style={{ height: 40 }} />;
  const leftX  = data.dirs[0].x;
  const rightX = data.dirs[data.dirs.length - 1].x;

  return (
    <svg width="100%" height={data.h}
      style={{ display: "block", overflow: "visible" }} className="org-svg-mid">
      {/* VC down to midpoint */}
      <line x1={data.vcX} y1={data.vcBotY} x2={data.vcX} y2={data.midY}
        stroke={LINE_COLOR} strokeWidth={LINE_W} />
      {/* horizontal bar */}
      <line x1={leftX} y1={data.midY} x2={rightX} y2={data.midY}
        stroke={LINE_COLOR} strokeWidth={LINE_W} />
      {/* drop to each director */}
      {data.dirs.map((d, i) => (
        <React.Fragment key={i}>
          <line x1={d.x} y1={data.midY} x2={d.x} y2={d.topY}
            stroke={LINE_COLOR} strokeWidth={LINE_W} />
          <circle cx={d.x} cy={data.midY} r={3} fill={LINE_COLOR} />
        </React.Fragment>
      ))}
    </svg>
  );
}

// ── Director → sub column short connectors ────────────────────────────
function DirToSubConnector({
  dirGridRef, subGridRef, containerRef,
}: {
  dirGridRef: React.RefObject<HTMLDivElement>;
  subGridRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const [segs, setSegs] = useState<{ x1:number;y1:number;x2:number;y2:number }[]>([]);

  useEffect(() => {
    function measure() {
      const con  = containerRef.current;
      const dg   = dirGridRef.current;
      const sg   = subGridRef.current;
      if (!con || !dg || !sg) return;
      const cR = con.getBoundingClientRect();
      const dirs = Array.from(dg.children) as HTMLElement[];
      const subs = Array.from(sg.children) as HTMLElement[];
      const result = dirs.map((d, i) => {
        const s = subs[i];
        if (!s) return null;
        const dR = d.getBoundingClientRect();
        const sR = s.getBoundingClientRect();
        return {
          x1: dR.left + dR.width / 2 - cR.left,
          y1: dR.bottom - cR.top,
          x2: sR.left + sR.width / 2 - cR.left,
          y2: sR.top - cR.top,
        };
      }).filter(Boolean) as { x1:number;y1:number;x2:number;y2:number }[];
      setSegs(result);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [dirGridRef, subGridRef, containerRef]);

  if (segs.length === 0) return <div style={{ height: 8 }} />;
  const h = Math.max(...segs.map(s => Math.max(s.y1, s.y2))) + 4;

  return (
    <svg width="100%" height={h}
      style={{ display: "block", overflow: "visible" }} className="org-svg-dirs">
      {segs.map((s, i) => (
        <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
          stroke={LINE_COLOR} strokeWidth={LINE_W} />
      ))}
    </svg>
  );
}

// ── MAIN ──────────────────────────────────────────────────────────────
export default function OrgChart() {
  const containerRef = useRef<HTMLDivElement>(null!);
  const chairmanRef  = useRef<HTMLDivElement>(null!);
  const vcRef        = useRef<HTMLDivElement>(null!);
  const dirGridRef   = useRef<HTMLDivElement>(null!);
  const subGridRef   = useRef<HTMLDivElement>(null!);

  return (
    <div ref={containerRef} className="org-root" style={{
      background: "#F4F8EE", borderRadius: 16,
      padding: "24px 16px 20px", fontFamily: "'DM Sans', sans-serif",
      position: "relative",
    }}>
      <style>{FONTS}</style>

      {/* L1 Chairman */}
      <div style={{ maxWidth: 360, margin: "0 auto" }}>
        <div ref={chairmanRef} style={card.chairman}>
          <div style={goldBar(13)} />
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9,
            color: "#C8960E", letterSpacing: "1.8px", marginBottom: 6 }}>
            APOSTLE · CHAIRMAN &amp; CHIEF EXECUTIVE
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 21,
            fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
            REBERO L. ARMENION
          </div>
        </div>
      </div>

      {/* Chairman → VC */}
      <VConnector fromRef={chairmanRef} toRef={vcRef}
        containerRef={containerRef} className="org-svg-top" />

      {/* L2 DESKTOP */}
      <div className="org-desktop-l2"
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={card.sideBox}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14,
            fontWeight: 700, color: "#2D5016" }}>CHURCH PREACHERS</div>
        </div>
        <div style={{ height: 1.5, width: 36, background: LINE_COLOR }} />
        <div ref={vcRef} style={card.viceChairman}>
          <div style={goldBar(11)} />
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9,
            color: "#C8960E", letterSpacing: "1.6px", marginBottom: 5 }}>
            PASTOR · VICE CHAIRMAN
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18,
            fontWeight: 700, color: "#fff" }}>BENJAMEN L. ARMENION, JR.</div>
        </div>
        <div style={{ height: 1.5, width: 36, background: LINE_COLOR }} />
        <div style={card.sideBox}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14,
            fontWeight: 700, color: "#2D5016" }}>CHURCH WORKERS</div>
        </div>
      </div>

      {/* L2 MOBILE */}
      <div className="org-mobile-l2"
        style={{ display: "none", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", gap: 8, width: "100%" }}>
          <div style={{ ...card.sideBox, flex: 1 }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13,
              fontWeight: 700, color: "#2D5016" }}>CHURCH PREACHERS</div>
          </div>
          <div style={{ ...card.sideBox, flex: 1 }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13,
              fontWeight: 700, color: "#2D5016" }}>CHURCH WORKERS</div>
          </div>
        </div>
        <div style={{ ...card.viceChairman, width: "100%", minWidth: "unset" }}>
          <div style={goldBar(11)} />
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8,
            color: "#C8960E", letterSpacing: "1.4px", marginBottom: 4 }}>
            PASTOR · VICE CHAIRMAN
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17,
            fontWeight: 700, color: "#fff" }}>BENJAMEN L. ARMENION, JR.</div>
        </div>
      </div>

      {/* VC → directors */}
      <MidConnector vcRef={vcRef} dirGridRef={dirGridRef} containerRef={containerRef} />

      {/* L3 Directors */}
      <div className="org-dir-grid" ref={dirGridRef}>
        {columns.map((col, i) => (
          <div key={i} style={{ ...card.director, paddingTop: 14 }}>
            <div style={goldBar(9)} />
            {col.director.preacher && (
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8,
                color: "#C8960E", letterSpacing: "1.4px", marginBottom: 2 }}>PREACHER</div>
            )}
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12,
              fontWeight: 700, color: "#2D5016", lineHeight: 1.25 }}>{col.director.name}</div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9,
              color: "#4A7C2F", marginTop: 3 }}>{col.director.role}</div>
          </div>
        ))}
      </div>

      {/* Directors → subs */}
      <DirToSubConnector
        dirGridRef={dirGridRef} subGridRef={subGridRef} containerRef={containerRef} />

      {/* L4 Subs */}
      <div className="org-sub-grid" ref={subGridRef}>
        {columns.map((col, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {col.subs.map((s, j) => <div key={j} style={card.sub}>{s}</div>)}
            {col.extra.map((ex, j) => (
              <div key={j} style={{ ...card.extra, paddingTop: 12 }}>
                <div style={goldBar(9)} />
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11,
                  fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>{ex.name}</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8.5,
                  color: "#A8D080", marginTop: 2 }}>{ex.role}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Mobile accordion */}
      <div className="org-mobile-cols" style={{ display: "none", flexDirection: "column", gap: 10 }}>
        {columns.map((col, i) => (
          <MobileDirectorCard key={i} col={col} />
        ))}
      </div>

      {/* Footer */}
      <div style={{ ...card.footer, marginTop: 16 }}>
        <div style={goldBar(12)} />
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18,
          fontWeight: 700, color: "#fff", letterSpacing: "1.5px" }}>
          CHURCH MEMBERS &amp; OUTREACHES
        </div>
      </div>
    </div>
  );
}
