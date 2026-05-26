"use client";

import { useEffect, useRef } from "react";

const VerseSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const vineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particleConfigs = [
      { w: 4, h: 4, bg: "#9ABF5F", maxOp: 0.5,  dur: "6s",   delay: "0s",    left: "8%",  bottom: "10%" },
      { w: 3, h: 3, bg: "#F5E6A3", maxOp: 0.4,  dur: "8s",   delay: "1.2s",  left: "18%", bottom: "5%"  },
      { w: 5, h: 5, bg: "#9ABF5F", maxOp: 0.35, dur: "7s",   delay: "2.4s",  left: "30%", bottom: "15%" },
      { w: 3, h: 3, bg: "#F5E6A3", maxOp: 0.3,  dur: "9s",   delay: "0.8s",  left: "50%", bottom: "8%"  },
      { w: 4, h: 4, bg: "#9ABF5F", maxOp: 0.45, dur: "6.5s", delay: "3s",    left: "65%", bottom: "12%" },
      { w: 3, h: 3, bg: "#F5E6A3", maxOp: 0.35, dur: "7.5s", delay: "1.8s",  left: "78%", bottom: "6%"  },
      { w: 5, h: 5, bg: "#9ABF5F", maxOp: 0.3,  dur: "8.5s", delay: "0.4s",  left: "90%", bottom: "18%" },
      { w: 2, h: 2, bg: "#F5E6A3", maxOp: 0.5,  dur: "5.5s", delay: "2s",    left: "42%", bottom: "3%"  },
    ];

    const container = particlesRef.current;
    if (container) {
      container.innerHTML = "";
      particleConfigs.forEach((c) => {
        const p = document.createElement("div");
        p.className = "verse-particle";
        p.style.cssText = [
          `width:${c.w}px`, `height:${c.h}px`, `background:${c.bg}`,
          `--max-op:${c.maxOp}`, `--dur:${c.dur}`, `--delay:${c.delay}`,
          `left:${c.left}`, `bottom:${c.bottom}`,
        ].join(";");
        container.appendChild(p);
      });
    }

    const leafPositions = [
      { bottom: "15%", left: "-8px", r: "-45deg", delay: "1.8s" },
      { bottom: "30%", left: "4px",  r: "45deg",  delay: "2.1s" },
      { bottom: "45%", left: "-8px", r: "-40deg", delay: "2.4s" },
      { bottom: "58%", left: "4px",  r: "50deg",  delay: "2.7s" },
    ];

    const vine = vineRef.current;
    if (vine) {
      leafPositions.forEach((lp) => {
        const leaf = document.createElement("div");
        leaf.className = "verse-leaf";
        leaf.style.cssText = [
          `bottom:${lp.bottom}`, `left:${lp.left}`,
          `--r:${lp.r}`, `animation-delay:${lp.delay}`,
        ].join(";");
        vine.appendChild(leaf);
      });
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes verseFadeRise {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes verseFloatUp {
          0%   { transform: translateY(0) scale(1);  opacity: 0; }
          15%  { opacity: var(--max-op); }
          85%  { opacity: var(--max-op); }
          100% { transform: translateY(-110px) scale(0.4); opacity: 0; }
        }
        @keyframes verseGrowVine {
          to { height: 60%; }
        }
        @keyframes verseLeafAppear {
          from { transform: scale(0) rotate(var(--r)); opacity: 0; }
          to   { transform: scale(1) rotate(var(--r)); opacity: 0.35; }
        }
        @keyframes verseAccentPulse {
          0%, 100% { text-shadow: none; }
          50%       { text-shadow: 0 0 18px rgba(154,191,95,0.5); }
        }
        @keyframes verseShimmer {
          0%   { left: -60%; }
          100% { left: 160%; }
        }
        @keyframes verseFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes verseExpandLine {
          from { width: 0; opacity: 0; }
          to   { width: clamp(20px, 4vw, 40px); opacity: 1; }
        }
        .verse-particle {
          position: absolute; border-radius: 50%; opacity: 0;
          animation: verseFloatUp var(--dur) ease-in infinite;
          animation-delay: var(--delay);
        }
        .verse-leaf {
          position: absolute; width: 6px; height: 10px;
          border-radius: 50% 0; background: #9ABF5F; opacity: 0;
          animation: verseLeafAppear 0.6s ease-out forwards;
        }
        .verse-ref-line::before, .verse-ref-line::after {
          content: ''; display: inline-block;
          width: clamp(20px, 4vw, 40px); height: 1px;
          animation: verseExpandLine 1s ease-out 1.5s both;
        }
        .verse-ref-line::before {
          background: linear-gradient(to right, transparent, rgba(245,230,163,0.55));
          margin-right: 10px;
        }
        .verse-ref-line::after {
          background: linear-gradient(to left, transparent, rgba(245,230,163,0.55));
          margin-left: 10px;
        }
      `}</style>

      {/* ✅ FIX: full-width wrapper for bg, inner div matches Container */}
      <div className="w-full bg-[#FAFDF5] py-4 sm:py-6">
        <div className="mx-auto w-full max-w-[1418px] px-6 lg:px-12">
          <div
            ref={sectionRef}
            className="w-full text-center relative overflow-hidden"
            style={{
              padding: "clamp(48px, 8vw, 80px) clamp(16px, 6vw, 48px)",
              background: "linear-gradient(170deg, #1A3A08 0%, #2D5016 55%, #1e3d0a 100%)",
              borderRadius: "8px",
            }}
          >
            {/* Shimmer sweep */}
            <div
              className="absolute top-0 h-full pointer-events-none"
              style={{
                left: "-100%", width: "60%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
                animation: "verseShimmer 4s ease-in-out 1.2s infinite",
              }}
            />

            {/* Floating particles */}
            <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

            {/* Vine */}
            <div
              ref={vineRef}
              className="absolute bottom-0 left-1/2"
              style={{
                transform: "translateX(-50%)", width: "2px",
                background: "linear-gradient(to top, rgba(154,191,95,0.27), transparent)",
                animation: "verseGrowVine 2.2s ease-out forwards",
                transformOrigin: "bottom center", height: 0,
              }}
            />

            {/* Decorative open-quote */}
            <span
              className="absolute pointer-events-none select-none"
              style={{
                top: "clamp(12px, 2vw, 24px)", left: "clamp(12px, 3vw, 32px)",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(48px, 8vw, 96px)", color: "rgba(154,191,95,0.12)",
                lineHeight: 1, fontStyle: "italic", zIndex: 1,
                animation: "verseFadeIn 1.5s ease 0.5s both",
              }}
            >
              &ldquo;
            </span>

            {/* Quote */}
            <p
              className="relative font-cormorant italic"
              style={{
                fontWeight: 500, color: "#f0ede6",
                fontSize: "clamp(22px, 4.5vw, 40px)", lineHeight: 1.65, zIndex: 2,
                opacity: 0, transform: "translateY(22px)",
                animation: "verseFadeRise 1.1s cubic-bezier(0.22,1,0.36,1) 0.3s forwards",
                textShadow: "0 2px 20px rgba(0,0,0,0.3)",
              }}
            >
              &ldquo; "And other sheep I have, which are {" "}
              <br className="hidden sm:block" />
              <span
                style={{
                  color: "#9ABF5F", display: "inline-block",
                  animation: "verseAccentPulse 3.5s ease-in-out 1.6s infinite",
                }}
              >
                not of this fold:
              </span>{" "}
             them also I must bring, and they shall hear my voice; {" "}
              <br className="hidden sm:block" />
              and there shall be one fold, and one shepherd."&rdquo;
            </p>

            {/* Reference */}
            <p
              className="font-dm"
              style={{
                fontWeight: 500, color: "#F5E6A3", letterSpacing: "0.12em",
                fontSize: "clamp(11px, 2.5vw, 15px)", marginTop: "clamp(16px, 3vw, 28px)",
                position: "relative", zIndex: 2, opacity: 0, transform: "translateY(10px)",
                animation: "verseFadeRise 0.9s cubic-bezier(0.22,1,0.36,1) 0.85s forwards",
              }}
            >
              <span className="verse-ref-line" style={{ display: "inline-flex", alignItems: "center" }}>
                JOHN 10:16 KJV
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerseSection;
