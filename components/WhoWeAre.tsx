"use client";
import React, { useEffect, useRef, useState } from "react";
import OrgChart from "@/components/org";

// ── INLINE DOCTRINE with clickable sub-sections ───────────────────────
function DoctrineContent() {
  const [openDoc, setOpenDoc] = useState<string | null>(null);

  const toggle = (id: string) => setOpenDoc((prev) => (prev === id ? null : id));

  const docItems: {
    id: string;
    num: string;
    title: string;
    content?: React.ReactNode;
  }[] = [
    {
      id: "bible",
      num: "I",
      title: "The Holy Bible",
      content: (
        <div style={{ color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}>
          <p style={{ margin: "0 0 8px" }}>
            The Bible was inspired by God — the Holy Spirit guided the authors in choosing every word
            (2 Tim. 3:16, 2 Pet. 1:20–21). Both Old and New Testaments claim divine origin and absolute
            authority (Ps. 19:7; 119:89, Matt. 5:17–18).
          </p>
          <p style={{ margin: "0 0 8px" }}>
            The Bible contains no errors — it is historically accurate (e.g., the conquest of Jericho,
            Pontius Pilate) and scientifically sound (e.g., the earth suspended in space — Job 26:7;
            stars uncountable — Jer. 33:22; earth is a sphere — Isa. 40:22).
          </p>
          <p style={{ margin: 0 }}>
            JCNA holds the Holy Bible as God's inspired, accurate, true, and infallible written
            revelation — the final authority in all matters of faith and conduct (2 Tim. 3:16–17).
          </p>
        </div>
      ),
    },
    {
      id: "god",
      num: "II",
      title: "One God — Apostolic Doctrine",
      content: (
        <div style={{ color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}>
          <p style={{ margin: "0 0 8px" }}>
            JCNA believes there is only one God (Deut. 6:4), creator of heaven and earth, revealed
            through three titles and functions:
          </p>
          <p style={{ margin: "0 0 4px", fontWeight: 600, color: "#2D5016" }}>A. Father</p>
          <p style={{ margin: "0 0 8px" }}>
            God is Spirit (John 4:24), eternal, unchanging, all-powerful, omnipresent, omniscient,
            and perfectly holy, righteous, loving, and faithful. In the Old Testament He is revealed
            through names like Jehovah-Jireh (Provider), Jehovah-Raphi (Healer), El Shaddai (Almighty).
          </p>
          <p style={{ margin: "0 0 4px", fontWeight: 600, color: "#2D5016" }}>B. Son — Jesus Christ</p>
          <p style={{ margin: "0 0 8px" }}>
            Jesus is the visible expression of the invisible God (Col. 1:15) — fully God and fully
            man. He lived, died, rose again, and ascended so that humanity could be redeemed (John 1:1,14;
            Gal. 4:4–5; Rom. 4:25).
          </p>
          <p style={{ margin: "0 0 4px", fontWeight: 600, color: "#2D5016" }}>C. Holy Spirit</p>
          <p style={{ margin: 0 }}>
            The Holy Spirit is the Spirit of God and of Jesus Christ (Rom. 8:9), not a separate
            person but God's presence dwelling in believers for sanctification, purification, and
            empowerment (John 3:5–7; 1 Cor. 3:16).
          </p>
        </div>
      ),
    },
    {
      id: "fall",
      num: "III",
      title: "The Fall of Man / Sin",
    },
    {
      id: "salvation",
      num: "IV",
      title: "Salvation — Grace, Faith, and Works",
      content: (
        <div style={{ color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}>
          <p style={{ margin: "0 0 4px", fontWeight: 600, color: "#2D5016" }}>A. Justification</p>
          <p style={{ margin: "0 0 4px", fontWeight: 600, color: "#2D5016" }}>B. Sanctification</p>
          <p style={{ margin: 0, fontWeight: 600, color: "#2D5016" }}>C. Glorification</p>
        </div>
      ),
    },
    {
      id: "healing",
      num: "V",
      title: "Divine Healing",
    },
    {
      id: "church",
      num: "VI",
      title: "The Church and Its Mission",
      content: (
        <div style={{ color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}>
          {["Fivefold Ministries","Discipleship","Evangelism","Holiness","Restoration of Israel Salvation"].map((item, i) => (
            <p key={i} style={{ margin: "0 0 4px" }}>
              <span style={{ fontWeight: 600, color: "#2D5016" }}>{String.fromCharCode(65+i)}.</span> {item}
            </p>
          ))}
        </div>
      ),
    },
    {
      id: "ordinances",
      num: "VII",
      title: "Church Ordinances",
      content: (
        <div style={{ color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}>
          {["The Lord's Supper","Child Dedication","Baptism","Matrimony","Blessings (property, house, car, etc.)"].map((item, i) => (
            <p key={i} style={{ margin: "0 0 4px" }}>
              <span style={{ fontWeight: 600, color: "#2D5016" }}>{String.fromCharCode(65+i)}.</span> {item}
            </p>
          ))}
        </div>
      ),
    },
    {
      id: "culture",
      num: "VIII",
      title: "Church Culture and Practices",
      content: (
        <div style={{ color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}>
          {["Prayer and Fasting","Giving (tithes, offering, first fruit, charity)","Dress Code","Food","Day of Church Worship or Rest"].map((item, i) => (
            <p key={i} style={{ margin: "0 0 4px" }}>
              <span style={{ fontWeight: 600, color: "#2D5016" }}>{String.fromCharCode(65+i)}.</span> {item}
            </p>
          ))}
        </div>
      ),
    },
    {
      id: "values",
      num: "IX",
      title: "The Church Core Values",
      content: (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
          {["Love","Joy","Peace","Honesty","Kindness","Respect","Self-Control","Gentleness","Obedience"].map((v) => (
            <span key={v} style={{ background: "#EAF3DE", color: "#2D5016", borderRadius: "20px", padding: "4px 14px", fontSize: "12px", fontWeight: 600, border: "1px solid #C5D89A" }}>
              {v}
            </span>
          ))}
        </div>
      ),
    },
    {
      id: "baptism",
      num: "X",
      title: "Baptism",
      content: (
        <div style={{ color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}>
          {["Baptism of Water","Baptism of Holy Spirit","Baptism of Fire"].map((item, i) => (
            <p key={i} style={{ margin: "0 0 4px" }}>
              <span style={{ fontWeight: 600, color: "#2D5016" }}>{String.fromCharCode(65+i)}.</span> {item}
            </p>
          ))}
        </div>
      ),
    },
    { id: "rapture",      num: "XI",   title: "The Rapture" },
    { id: "resurrection", num: "XII",  title: "The Resurrection" },
    {
      id: "judgment",
      num: "XIII",
      title: "Judgment",
      content: (
        <div style={{ color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}>
          {[
            "Seat of Christ / Bema — Judgment of Believers",
            "Judgment of the Nations / Living (Millennial Kingdom of Christ)",
            "Final Judgment — White Throne / Judgment of the Unbelievers",
            "New Heaven and New Earth",
          ].map((item, i) => (
            <p key={i} style={{ margin: "0 0 4px" }}>
              <span style={{ fontWeight: 600, color: "#2D5016" }}>{String.fromCharCode(65+i)}.</span> {item}
            </p>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div>
      <p style={{ margin: "0 0 16px", color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}>
        We uphold the Holy Bible as inspired, infallible, and the absolute authority over all faith
        and conduct. Click any article below to read more.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {docItems.map((item) => {
          const hasContent = !!item.content;
          const isOpen = openDoc === item.id;
          return (
            <div
              key={item.id}
              style={{
                border: `1px solid ${isOpen ? "#2D5016" : "#D4E8BE"}`,
                borderRadius: "10px",
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
            >
              <button
                onClick={() => hasContent && toggle(item.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "11px 14px",
                  background: isOpen ? "#F0F5E8" : "#fff",
                  border: "none",
                  cursor: hasContent ? "pointer" : "default",
                  textAlign: "left",
                  transition: "background 0.2s",
                }}
              >
                <span style={{ background: "#2D5016", color: "#fff", borderRadius: "6px", padding: "2px 9px", fontSize: "11px", fontWeight: 700, flexShrink: 0 }}>
                  {item.num}
                </span>
                <span style={{ fontWeight: 600, fontSize: "13px", color: "#2D5016", flex: 1 }}>
                  {item.title}
                </span>
                {hasContent && (
                  <span style={{
                    width: "22px", height: "22px", borderRadius: "50%",
                    background: isOpen ? "#2D5016" : "#EAF3DE",
                    color: isOpen ? "#fff" : "#2D5016",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "16px", fontWeight: 300, flexShrink: 0,
                    transition: "background 0.25s, transform 0.3s",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    userSelect: "none",
                  }}>+</span>
                )}
              </button>
              {isOpen && hasContent && (
                <div style={{ padding: "12px 16px 16px", borderTop: "1px solid #E2EAC8", background: "#fff" }}>
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── SECTIONS DATA ─────────────────────────────────────────────────────
const sections: { id: string; label: string; content: React.ReactNode }[] = [
  {
    id: "goals",
    label: "Goals",
    content: (
      <ul style={{ margin: 0, padding: "0 0 0 4px", color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9, listStyle: "none" }}>
        {[
          "To uphold sound doctrine and live a holy life in conduct, action, and morality.",
          "To be a light bearer in a dark world by means of showing the Christ like attitude.",
          "To share and impart the gospel of Christ to everyone in season and out of season.",
        ].map((item, i) => (
          <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
            <span style={{ marginTop: "6px", width: "7px", height: "7px", borderRadius: "50%", background: "#4A7C2F", flexShrink: 0 }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "mission",
    label: "Mission",
    content: (
      <p style={{ margin: 0, color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}>
        To bring back the lost soul and gather together into the one fold church to serve and glorify
        the One True Shepherd Jesus Christ by means of evangelizing, inviting, equipping and teaching
        the sound doctrine.
      </p>
    ),
  },
  {
    id: "doctrines",
    label: "Doctrines",
    content: <DoctrineContent />,
  },
  {
    id: "values",
    label: "Values",
    content: (
      <div style={{ color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}>
        <p style={{ margin: "0 0 10px" }}>
          Our community is rooted in the fruit of the Spirit and built on character that reflects
          Christ in every aspect of daily life.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {["Love","Joy","Peace","Honesty","Kindness","Respect","Self-Control","Gentleness","Obedience"].map((v) => (
            <span key={v} style={{ background: "#EAF3DE", color: "#2D5016", borderRadius: "20px", padding: "4px 14px", fontSize: "12px", fontWeight: 600, border: "1px solid #C5D89A" }}>
              {v}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "culture",
    label: "Culture",
    content: (
      <div style={{ color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}>
        <p style={{ margin: "0 0 10px", fontWeight: 600, color: "#2D5016" }}>Who We Are Together</p>
        <ul style={{ margin: "0 0 20px", padding: 0, listStyle: "none" }}>
          {[
            "We are united in Christ — one body, one spirit, and one purpose under the lordship of Jesus.",
            "We love and help one another sincerely, carrying each other's burdens as the Lord commands.",
            "We welcome everyone with open arms, reflecting God's grace to all who come through our doors.",
            "We are committed to growing together through fellowship, discipleship, and accountability in the Word.",
            "We serve sacrificially, putting the needs of others before our own as a testimony of Christ's love.",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
              <span style={{ marginTop: "6px", width: "7px", height: "7px", borderRadius: "50%", background: "#4A7C2F", flexShrink: 0 }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p style={{ margin: "0 0 10px", fontWeight: 600, color: "#2D5016" }}>Cultural Practices</p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {[
            "Prayer and fasting",
            "Giving (tithes, offerings, first fruits, and charity)",
            "Garbed in Grace — dressing with modesty and self-respect",
            "Pure Table — we do not consume the blood of any animal, of any kind",
            "Day of Church worship or rest",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
              <span style={{ marginTop: "6px", width: "7px", height: "7px", borderRadius: "50%", background: "#4A7C2F", flexShrink: 0 }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "leadership",
    label: "Leadership",
    content: (
      <div style={{ color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}>
        <p style={{ margin: "0 0 20px" }}>
          JCNA is led by <strong style={{ color: "#2D5016" }}>Apostle Rebero L. Armenion</strong>,
          Chairman &amp; Chief Executive, together with Vice Chairman{" "}
          <strong style={{ color: "#2D5016" }}>Pastor Benjamen L. Armenion, Jr.</strong> Their team
          of dedicated directors covers Ministries, Choir, Music, Membership, Administration, Finance,
          and Public Relations — all committed to integrity, holiness, and a Spirit-filled life.
        </p>
        <OrgChart />
        <p style={{ margin: "12px 0 0", fontSize: "12px", color: "#7AAB50", textAlign: "center" }}>
          Organizational Structure — Jesus Christ of Nazareth One Fold Assembly
        </p>
      </div>
    ),
  },
];

// ── WHO WE ARE SECTION ────────────────────────────────────────────────
export default function WhoWeAreSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const openSection = sections.find((s) => s.id === openId);

  return (
    <>
      <style>{`
        @keyframes wwa-fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes wwa-growH {
          from { transform:scaleX(0); opacity:0; }
          to   { transform:scaleX(1); opacity:1; }
        }
        @keyframes wwa-contentIn {
          from { opacity:0; transform:translateY(8px); }
          to   { opacity:1; transform:translateY(0);   }
        }

        .wwa-card-grid {
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(140px, 1fr));
          gap:12px;
          margin-top:28px;
        }
        @media(max-width:420px){
          .wwa-card-grid { grid-template-columns:repeat(2,1fr); gap:8px; }
        }

        .wwa-card {
          display:flex; align-items:center; justify-content:center;
          padding:20px 14px; background:#fff;
          border:1.5px solid #E2EAC8; border-radius:10px; cursor:pointer;
          transition:border-color 250ms ease, background 250ms ease,
                      transform 150ms ease, box-shadow 250ms ease;
          text-align:center;
        }
        .wwa-card:hover {
          border-color:#7AAB50;
          box-shadow:0 4px 16px rgba(45,80,22,0.10);
          transform:translateY(-2px);
        }
        .wwa-card.is-open {
          background:#F0F5E8; border-color:#2D5016;
          box-shadow:0 4px 18px rgba(45,80,22,0.13);
        }
        .wwa-card-label {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(14px,2.2vw,16px);
          letter-spacing:0.07em; font-weight:500;
          color:#4A7C2F; line-height:1.3;
          transition:color 250ms ease;
        }
        .wwa-card.is-open .wwa-card-label { color:#2D5016; font-weight:600; font-style:italic; }

        .wwa-panel-wrap {
          margin-top:20px; border:1.5px solid #2D5016;
          border-radius:12px; background:#fff; overflow:hidden;
          animation:wwa-contentIn 0.38s cubic-bezier(0.22,1,0.36,1) both;
        }
        .wwa-panel-header {
          display:flex; align-items:center; justify-content:space-between;
          padding:14px 20px; border-bottom:1px solid #E2EAC8; background:#F0F5E8;
        }
        .wwa-panel-title {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(16px,2.8vw,20px);
          color:#2D5016; font-weight:600; letter-spacing:0.08em; font-style:italic;
        }
        .wwa-panel-close {
          width:28px; height:28px; border-radius:50%;
          background:#2D5016; border:none; flex-shrink:0;
          display:flex; align-items:center; justify-content:center; cursor:pointer;
          transition:background 200ms ease, transform 150ms ease;
        }
        .wwa-panel-close:hover { background:#3d6e20; transform:scale(1.08); }
        .wwa-panel-close svg { width:12px; height:12px; stroke:#fff; stroke-width:2.5; stroke-linecap:round; }
        .wwa-panel-body { padding:24px 28px 32px; }
        @media(max-width:520px){ .wwa-panel-body { padding:18px 16px 24px; } }
      `}</style>

      <div id="who-we-are" ref={sectionRef} className="w-full bg-[#FAFDF5]">
        <div className="mx-auto w-full max-w-[1418px] px-6 lg:px-12 pt-14 pb-16 lg:pt-[70px] lg:pb-[80px]">

          {/* HEADING */}
          <div
            className="text-center mb-8 lg:mb-10"
            style={{
              animation: inView ? "wwa-fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both" : undefined,
              opacity: inView ? undefined : 0,
            }}
          >
            <h2
              className="font-cormorant"
              style={{ fontSize: "clamp(30px,5.5vw,46px)", color: "#2D5016", letterSpacing: "0.15em", fontWeight: 700, lineHeight: 1 }}
            >
              Who We Are
            </h2>
            <div
              style={{
                height: "1px", background: "#C5D09B", marginTop: "22px",
                transformOrigin: "center",
                animation: inView ? "wwa-growH 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s both" : undefined,
                opacity: inView ? undefined : 0,
              }}
            />
          </div>

          {/* CARD GRID */}
          <div
            className="wwa-card-grid"
            style={{
              animation: inView ? "wwa-fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.22s both" : undefined,
              opacity: inView ? undefined : 0,
            }}
          >
            {sections.map((s) => (
              <button
                key={s.id}
                className={`wwa-card${openId === s.id ? " is-open" : ""}`}
                onClick={() => handleToggle(s.id)}
                aria-expanded={openId === s.id}
                aria-controls={`wwa-panel-${s.id}`}
              >
                <span className="wwa-card-label">{s.label}</span>
              </button>
            ))}
          </div>

          {/* EXPANDED PANEL */}
          {openId && openSection && (
            <div
              key={openId}
              id={`wwa-panel-${openId}`}
              className="wwa-panel-wrap"
              role="region"
              aria-label={openSection.label}
            >
              <div className="wwa-panel-header">
                <span className="wwa-panel-title">{openSection.label}</span>
                <button
                  className="wwa-panel-close"
                  aria-label={`Close ${openSection.label}`}
                  onClick={() => setOpenId(null)}
                >
                  <svg viewBox="0 0 14 14" fill="none">
                    <line x1="2" y1="2" x2="12" y2="12" />
                    <line x1="12" y1="2" x2="2" y2="12" />
                  </svg>
                </button>
              </div>
              <div className="wwa-panel-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {openSection.content}
              </div>
            </div>
          )}

          {/* BOTTOM DIVIDER */}
          <div
            className="h-[1px] bg-[#C5D09B] mt-16 lg:mt-[80px]"
            style={{
              transformOrigin: "center",
              animation: inView ? "wwa-growH 1s cubic-bezier(0.22,1,0.36,1) 0.6s both" : undefined,
              opacity: inView ? undefined : 0,
            }}
          />

        </div>
      </div>
    </>
  );
}