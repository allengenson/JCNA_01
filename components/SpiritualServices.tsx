"use client";

import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "General and Overnight Worship",
    desc: "Gather with us for worship, prayer, and fellowship through regular and overnight services. All are welcome.",
  },
  {
    title: "Prayer and Counseling",
    desc: "Find comfort, guidance, and support through prayer and one-on-one counseling in a safe and caring environment.",
  },
  {
    title: "Blessing of Properties",
    desc: "Invite God's presence into your home, business, or property through a special prayer of blessing and dedication.",
  },
  {
    title: "Request Files from Church",
    desc: "Easily request important church documents such as baptismal, dedication, or wedding certificates.",
  },
  {
    title: "Baptism",
    desc: "Take a step of faith and publicly declare your relationship with Christ through water baptism.",
  },
  {
    title: "Special Events",
    desc: "Join us for meaningful moments with us through church events, gatherings, and special occasions for the church.",
  },
];

// Each card observes itself — fires exactly when IT enters the viewport
const ServiceCard = ({
  item,
  index,
}: {
  item: (typeof services)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        // Pull trigger up slightly so animation is visible before card hits bottom edge
        rootMargin: "0px 0px -40px 0px",
      }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`ss-card p-5 sm:p-6 flex flex-col justify-between bg-white border rounded-xl h-full cursor-pointer ${
        visible ? "show" : ""
      }`}
      style={{
        borderColor: "rgba(197,208,155,0.5)",
        // On desktop rows of 3: stagger within the row (0 / 60 / 120ms)
        // On mobile single column: no stagger needed (index % 1 === 0 always)
        transitionDelay: visible ? `${(index % 3) * 60}ms` : "0ms",
      }}
    >
      {/* Icon box */}
      <div className="mb-5 w-[36px] h-[36px] sm:w-[43px] sm:h-[43px] rounded-[10px] icon-box" />

      {/* Text */}
      <div>
        <h3 className="mb-2 sm:mb-3 font-cormorant font-bold text-[18px] sm:text-[21px] lg:text-[23px] text-[#2D5016]">
          {item.title}
        </h3>
        <p className="mb-5 sm:mb-6 font-dm text-[13px] sm:text-[14px] text-[#4A7C2F] leading-[1.6]">
          {item.desc}
        </p>
      </div>

      {/* Learn More */}
      <button className="text-left font-medium text-[13px] sm:text-[14px] text-[#D4A017] font-dm">
        <span className="learn-more">Learn more →</span>
      </button>
    </div>
  );
};

const SpiritualServices: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ── Heading label ── */
        .ss-heading {
          opacity: 0;
          transform: translateX(-12px);
          transition: opacity 600ms ease, transform 600ms ease;
        }
        .ss-heading.show { opacity: 1; transform: translateX(0); }

        /* ── Heading line grow ── */
        .ss-line {
          width: 0;
          transition: width 700ms ease;
        }
        .ss-line.show { width: 80px; }

        /* ── Card base — hidden until it scrolls into view ── */
        .ss-card {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 550ms ease,
            transform 550ms ease,
            border-color 250ms ease,
            box-shadow 250ms ease;
        }
        .ss-card.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Card hover (desktop) ── */
        .ss-card:hover {
          border-color: rgba(212,160,23,0.5) !important;
          box-shadow: 0 8px 28px rgba(45,80,22,0.08);
          transform: translateY(-4px);
        }

        /* ── Card tap (touch / mobile) ── */
        @media (hover: none) {
          .ss-card:active {
            border-color: rgba(212,160,23,0.4) !important;
            box-shadow: 0 4px 16px rgba(45,80,22,0.07);
            transform: scale(0.985);
            transition: transform 150ms ease, box-shadow 150ms ease;
          }
        }

        /* ── Icon box shimmer on hover ── */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .icon-box {
          background: linear-gradient(90deg, #FDF8E1 25%, #F5EDBA 50%, #FDF8E1 75%);
          background-size: 200% auto;
        }
        .ss-card:hover .icon-box {
          animation: shimmer 1.2s linear infinite;
        }

        /* ── Learn more underline ── */
        .learn-more {
          position: relative;
          display: inline-block;
          transition: letter-spacing 220ms ease;
        }
        .learn-more::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 0; height: 1px;
          background: #D4A017;
          transition: width 280ms ease;
        }
        .ss-card:hover .learn-more { letter-spacing: 0.02em; }
        .ss-card:hover .learn-more::after { width: 100%; }

        @media (prefers-reduced-motion: reduce) {
          .ss-card, .ss-heading, .ss-line {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .ss-line { width: 80px !important; }
          .ss-card:hover, .ss-card:active { transform: none !important; }
          .icon-box { animation: none !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="w-full px-4 sm:px-6 lg:px-10 py-12 sm:py-16 bg-[#FAFDF5]"
      >
        {/* Heading */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          <h2
            className={`ss-heading text-[18px] sm:text-[22px] md:text-[24px] tracking-[0.15em] font-medium text-[#D4A017] font-dm ${
              sectionVisible ? "show" : ""
            }`}
          >
            Spiritual Services
          </h2>
          <div
            className={`ss-line h-[1px] bg-[#D4A017] ${sectionVisible ? "show" : ""}`}
            style={{ transitionDelay: "200ms" }}
          />
        </div>

        {/* Grid — each card has its own observer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((item, i) => (
            <ServiceCard key={i} item={item} index={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SpiritualServices;
