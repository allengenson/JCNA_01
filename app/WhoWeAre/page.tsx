"use client";

import React, { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import OrgChart from "@/components/org";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const EASE_CURVE = [0.16, 1, 0.3, 1] as const;

// ── SUB-DOCTRINE ACCORDION ───────────────────────────────────────────
function DoctrineContent() {
  const [openDoc, setOpenDoc] = useState<string | null>(null);
  const toggle = (id: string) => setOpenDoc((prev) => (prev === id ? null : id));

  const docItems: { id: string; num: string; title: string; content?: React.ReactNode }[] = [
    {
      id: "bible", num: "I", title: "The Holy Bible",
      content: (
        <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-2">
          <p>The Bible was inspired by God — the Holy Spirit guided the authors in choosing every word (2 Tim. 3:16, 2 Pet. 1:20–21). Both Old and New Testaments claim divine origin and absolute authority (Ps. 19:7; 119:89, Matt. 5:17–18).</p>
          <p>The Bible contains no errors — it is historically accurate (e.g., the conquest of Jericho, Pontius Pilate) and scientifically sound (e.g., the earth suspended in space — Job 26:7; stars uncountable — Jer. 33:22; earth is a sphere — Isa. 40:22).</p>
          <p>JCNA holds the Holy Bible as God's inspired, accurate, true, and infallible written revelation — the final authority in all matters of faith and conduct (2 Tim. 3:16–17).</p>
        </div>
      ),
    },
    {
      id: "god", num: "II", title: "One God — Apostolic Doctrine",
      content: (
        <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-2">
          <p>JCNA believes there is only one God (Deut. 6:4), creator of heaven and earth, revealed through three titles and functions:</p>
          <div>
            <p className="font-semibold text-[#2D5016] mb-0.5">A. Father</p>
            <p>God is Spirit (John 4:24), eternal, unchanging, all-powerful, omnipresent, omniscient, and perfectly holy, righteous, loving, and faithful.</p>
          </div>
          <div>
            <p className="font-semibold text-[#2D5016] mb-0.5">B. Son — Jesus Christ</p>
            <p>Jesus is the visible expression of the invisible God (Col. 1:15) — fully God and fully man (John 1:1,14; Gal. 4:4–5; Rom. 4:25).</p>
          </div>
          <div>
            <p className="font-semibold text-[#2D5016] mb-0.5">C. Holy Spirit</p>
            <p>The Holy Spirit is the Spirit of God and of Jesus Christ (Rom. 8:9), dwelling in believers for sanctification, purification, and empowerment (John 3:5–7; 1 Cor. 3:16).</p>
          </div>
        </div>
      ),
    },
    { id: "fall", num: "III", title: "The Fall of Man / Sin" },
    {
      id: "salvation", num: "IV", title: "Salvation — Grace, Faith, and Works",
      content: (
        <div className="text-[#4A7C2F] text-[13px] leading-[1.9] font-semibold flex flex-col gap-1">
          <p>A. Justification</p>
          <p>B. Sanctification</p>
          <p>C. Glorification</p>
        </div>
      ),
    },
    { id: "healing", num: "V", title: "Divine Healing" },
    {
      id: "church", num: "VI", title: "The Church and Its Mission",
      content: (
        <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-1">
          {["Fivefold Ministries", "Discipleship", "Evangelism", "Holiness", "Restoration of Israel Salvation"].map((item, i) => (
            <p key={i}><span className="font-semibold text-[#2D5016]">{String.fromCharCode(65 + i)}.</span> {item}</p>
          ))}
        </div>
      ),
    },
    {
      id: "ordinances", num: "VII", title: "Church Ordinances",
      content: (
        <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-1">
          {["The Lord's Supper", "Child Dedication", "Baptism", "Matrimony", "Blessings (property, house, car, etc.)"].map((item, i) => (
            <p key={i}><span className="font-semibold text-[#2D5016]">{String.fromCharCode(65 + i)}.</span> {item}</p>
          ))}
        </div>
      ),
    },
    {
      id: "culture", num: "VIII", title: "Church Culture and Practices",
      content: (
        <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-1">
          {["Prayer and Fasting", "Giving (tithes, offering, first fruit, charity)", "Dress Code", "Food", "Day of Church Worship or Rest"].map((item, i) => (
            <p key={i}><span className="font-semibold text-[#2D5016]">{String.fromCharCode(65 + i)}.</span> {item}</p>
          ))}
        </div>
      ),
    },
    {
      id: "values", num: "IX", title: "The Church Core Values",
      content: (
        <div className="flex flex-wrap gap-1.5 mt-1">
          {["Love", "Joy", "Peace", "Honesty", "Kindness", "Respect", "Self-Control", "Gentleness", "Obedience"].map((v) => (
            <span key={v} className="bg-[#EAF3DE] text-[#2D5016] rounded-[20px] px-3.5 py-1 text-xs font-semibold border border-[#C5D89A]">{v}</span>
          ))}
        </div>
      ),
    },
    {
      id: "baptism", num: "X", title: "Baptism",
      content: (
        <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-1">
          {["Baptism of Water", "Baptism of Holy Spirit", "Baptism of Fire"].map((item, i) => (
            <p key={i}><span className="font-semibold text-[#2D5016]">{String.fromCharCode(65 + i)}.</span> {item}</p>
          ))}
        </div>
      ),
    },
    { id: "rapture", num: "XI", title: "The Rapture" },
    { id: "resurrection", num: "XII", title: "The Resurrection" },
    {
      id: "judgment", num: "XIII", title: "Judgment",
      content: (
        <div className="text-[#4A7C2F] text-[13px] leading-[1.9] flex flex-col gap-1">
          {[
            "Seat of Christ / Bema — Judgment of Believers",
            "Judgment of the Nations / Living (Millennial Kingdom of Christ)",
            "Final Judgment — White Throne / Judgment of the Unbelievers",
            "New Heaven and New Earth",
          ].map((item, i) => (
            <p key={i}><span className="font-semibold text-[#2D5016]">{String.fromCharCode(65 + i)}.</span> {item}</p>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div>
      <p className="mb-4 text-[#4A7C2F] text-[13px] leading-[1.9]">
        We uphold the Holy Bible as inspired, infallible, and the absolute authority over all faith and conduct. Click any article below to read more.
      </p>
      <div className="flex flex-col gap-2">
        {docItems.map((item) => {
          const hasContent = !!item.content;
          const isOpen = openDoc === item.id;
          return (
            <div
              key={item.id}
              className="rounded-[10px] overflow-hidden transition-colors duration-200"
              style={{ border: `1px solid ${isOpen ? "#2D5016" : "#D4E8BE"}` }}
            >
              <button
                onClick={() => hasContent && toggle(item.id)}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left transition-colors duration-200 ${isOpen ? "bg-[#F0F5E8]" : "bg-white"} ${hasContent ? "cursor-pointer" : "cursor-default"}`}
              >
                <span className="bg-[#2D5016] text-white rounded-[6px] px-2 py-0.5 text-[11px] font-bold shrink-0">{item.num}</span>
                <span className="font-semibold text-[13px] text-[#2D5016] flex-1">{item.title}</span>
                {hasContent && (
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-base font-light shrink-0 select-none transition-all duration-300 ${isOpen ? "bg-[#2D5016] text-white rotate-45" : "bg-[#EAF3DE] text-[#2D5016] rotate-0"}`}>+</span>
                )}
              </button>
              <AnimatePresence initial={false}>
                {isOpen && hasContent && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.38, ease: EASE_CURVE }, opacity: { duration: 0.22, delay: 0.05 } } }}
                    exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.3, ease: EASE_CURVE }, opacity: { duration: 0.15 } } }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 border-t border-[#E2EAC8] bg-white">{item.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── SECTIONS DATA ────────────────────────────────────────────────────
const sections: { id: string; label: string; content: React.ReactNode }[] = [
  {
    id: "goals", label: "Goals",
    content: (
      <ul className="m-0 p-0 pl-1 text-[#4A7C2F] text-[13px] leading-[1.9] list-none flex flex-col gap-2">
        {[
          "To uphold sound doctrine and live a holy life in conduct, action, and morality.",
          "To be a light bearer in a dark world by means of showing the Christ like attitude.",
          "To share and impart the gospel of Christ to everyone in season and out of season.",
        ].map((item, i) => (
          <li key={i} className="flex gap-2.5 items-start">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4A7C2F] shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "mission", label: "Mission",
    content: (
      <p className="m-0 text-[#4A7C2F] text-[13px] leading-[1.9]">
        To bring back the lost soul and gather together into the one fold church to serve and glorify the One True Shepherd Jesus Christ by means of evangelizing, inviting, equipping and teaching the sound doctrine.
      </p>
    ),
  },
  {
    id: "doctrines", label: "Doctrines",
    content: <DoctrineContent />,
  },
  {
    id: "values", label: "Values",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9]">
        <p className="mb-2.5">Our community is rooted in the fruit of the Spirit and built on character that reflects Christ in every aspect of daily life.</p>
        <div className="flex flex-wrap gap-1.5">
          {["Love", "Joy", "Peace", "Honesty", "Kindness", "Respect", "Self-Control", "Gentleness", "Obedience"].map((v) => (
            <span key={v} className="bg-[#EAF3DE] text-[#2D5016] rounded-[20px] px-3.5 py-1 text-xs font-semibold border border-[#C5D89A]">{v}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "culture", label: "Culture",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9]">
        <p className="mb-2.5 font-semibold text-[#2D5016]">Who We Are Together</p>
        <ul className="mb-5 p-0 list-none flex flex-col gap-2">
          {[
            "We are united in Christ — one body, one spirit, and one purpose under the lordship of Jesus.",
            "We love and help one another sincerely, carrying each other's burdens as the Lord commands.",
            "We welcome everyone with open arms, reflecting God's grace to all who come through our doors.",
            "We are committed to growing together through fellowship, discipleship, and accountability in the Word.",
            "We serve sacrificially, putting the needs of others before our own as a testimony of Christ's love.",
          ].map((item, i) => (
            <li key={i} className="flex gap-2.5 items-start">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4A7C2F] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mb-2.5 font-semibold text-[#2D5016]">Cultural Practices</p>
        <ul className="m-0 p-0 list-none flex flex-col gap-2">
          {[
            "Prayer and fasting",
            "Giving (tithes, offerings, first fruits, and charity)",
            "Garbed in Grace — dressing with modesty and self-respect",
            "Pure Table — we do not consume the blood of any animal, of any kind",
            "Day of Church worship or rest",
          ].map((item, i) => (
            <li key={i} className="flex gap-2.5 items-start">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4A7C2F] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "leadership", label: "Leadership",
    content: (
      <div className="text-[#4A7C2F] text-[13px] leading-[1.9]">
        <p className="mb-5">
          JCNA is led by <strong className="text-[#2D5016]">Apostle Rebero L. Armenion</strong>, Chairman &amp; Chief Executive, together with Vice Chairman <strong className="text-[#2D5016]">Pastor Benjamen L. Armenion, Jr.</strong> Their team of dedicated directors covers Ministries, Choir, Music, Membership, Administration, Finance, and Public Relations — all committed to integrity, holiness, and a Spirit-filled life.
        </p>
        <OrgChart />
        <p className="mt-3 text-xs text-[#7AAB50] text-center">Organizational Structure — Jesus Christ of Nazareth One Fold Assembly</p>
      </div>
    ),
  },
];

// ── INNER PAGE CONTENT (uses useSearchParams) ────────────────────────
const WhoWeArePageContent = () => {
  const searchParams = useSearchParams();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentPaneRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const section = searchParams.get("section");
    if (section && sections.some((s) => s.id === section)) {
      setOpenId(section);
      requestAnimationFrame(() => {
        setTimeout(() => {
          contentPaneRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      });
    }
  }, [searchParams]);

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
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
      setTimeout(() => {
        contentPaneRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const openSection = sections.find((s) => s.id === openId);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFDF5]">
      <Navbar />
      <div id="who-we-are" ref={sectionRef} className="w-full bg-[#FAFDF5] flex-grow">
        <div className="mx-auto w-full max-w-[1418px] px-6 lg:px-12 pt-14 pb-16 lg:pt-[70px] lg:pb-[80px]">

          {/* HEADING */}
          <motion.div
            className="text-center mb-8 lg:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_CURVE }}
          >
            <h2 className="font-cormorant text-[clamp(30px,5.5vw,46px)] text-[#2D5016] tracking-[0.15em] font-bold leading-none">
              Who We Are
            </h2>
            <motion.div
              className="h-[1px] bg-[#C5D09B] mt-[22px] origin-center"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: EASE_CURVE, delay: 0.15 }}
            />
          </motion.div>

          {/* CARD GRID */}
          <motion.div
            className="grid grid-cols-2 min-[421px]:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2 min-[421px]:gap-3 mt-7"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE_CURVE, delay: 0.22 }}
          >
            {sections.map((s) => {
              const isCardOpen = openId === s.id;
              return (
                <button
                  key={s.id}
                  className={`flex items-center justify-center px-3.5 py-5 rounded-[10px] text-center cursor-pointer border-[1.5px] transition-all duration-250 ease-in-out active:scale-95 hover:border-[#7AAB50] hover:shadow-[0_4px_16px_rgba(45,80,22,0.10)] hover:-translate-y-0.5 ${
                    isCardOpen
                      ? "bg-[#F0F5E8] border-[#2D5016] shadow-[0_4px_18px_rgba(45,80,22,0.13)]"
                      : "bg-white border-[#E2EAC8]"
                  }`}
                  onClick={() => handleToggle(s.id)}
                  aria-expanded={isCardOpen}
                >
                  <span className={`font-cormorant text-[clamp(14px,2.2vw,16px)] tracking-[0.07em] transition-colors duration-250 ${
                    isCardOpen ? "text-[#2D5016] font-semibold italic" : "text-[#4A7C2F] font-medium"
                  }`}>
                    {s.label}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* CONTENT PANE */}
          <div ref={contentPaneRef} className="relative w-full">
            <AnimatePresence initial={false}>
              {openId && openSection && (
                <motion.div
                  initial={{ height: 0, opacity: 0, y: 15 }}
                  animate={{
                    height: "auto", opacity: 1, y: 0,
                    transition: {
                      height: { duration: 0.42, ease: EASE_CURVE },
                      opacity: { duration: 0.25, delay: 0.05 },
                      y: { duration: 0.35, ease: EASE_CURVE },
                    },
                  }}
                  exit={{
                    height: 0, opacity: 0, y: 12,
                    transition: {
                      height: { duration: 0.35, ease: EASE_CURVE },
                      opacity: { duration: 0.15 },
                      y: { duration: 0.25 },
                    },
                  }}
                  className="mt-5 border-[1.5px] border-[#2D5016] rounded-xl bg-white overflow-hidden"
                  role="region"
                  aria-label={openSection.label}
                >
                  <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E2EAC8] bg-[#F0F5E8]">
                    <span className="font-cormorant text-[clamp(16px,2.8vw,20px)] text-[#2D5016] font-semibold tracking-[0.08em] italic">
                      {openSection.label}
                    </span>
                    <button
                      className="w-7 h-7 rounded-full bg-[#2D5016] border-none shrink-0 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[#3d6e20] hover:scale-[1.08]"
                      aria-label={`Close ${openSection.label}`}
                      onClick={() => handleToggle(openSection.id)}
                    >
                      <svg className="w-3 h-3 stroke-white stroke-[2.5] stroke-linecap-round" viewBox="0 0 14 14" fill="none">
                        <line x1="2" y1="2" x2="12" y2="12" />
                        <line x1="12" y1="2" x2="2" y2="12" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-6 sm:p-7 md:pb-8 font-sans">
                    {openSection.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* BOTTOM DIVIDER */}
          <motion.div
            className="h-[1px] bg-[#C5D09B] mt-16 lg:mt-[80px] origin-center"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1, ease: EASE_CURVE, delay: 0.6 }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ── DEFAULT EXPORT — Suspense wrapper (same pattern as WhatWeDoPage) ──
export default function WhoWeArePage() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-[#2D5016]">Loading...</div>}>
      <WhoWeArePageContent />
    </Suspense>
  );
}