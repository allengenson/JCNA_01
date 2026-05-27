"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const titleLines = [
  { text: "A place where", italic: false, color: "#2D5016" },
  { text: "faith takes root", italic: true, color: "#4A7C2F" },
  { text: "& love grows.", italic: false, color: "#2D5016" },
];

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        /* ── Logo float (unchanged) ── */
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-8px); }
        }
        .logo-float {
          animation: floatLogo 6s ease-in-out infinite;
        }

        /* ── SACRED DESCEND — headline drops from heaven ── */
        /* Each title line falls from -40px, 1.1s ease-out */
        .title-line {
          opacity: 0;
          transform: translateY(-40px);
          transition: opacity 1.1s ease-out, transform 1.1s ease-out;
        }
        .title-line.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* Welcome label keeps a gentle fade (no drop, stays subtle) */
        .welcome-label {
          opacity: 0;
          letter-spacing: 0.05em;
          transition: opacity 0.9s ease-out, letter-spacing 0.9s ease-out;
        }
        .welcome-label.show {
          opacity: 1;
          letter-spacing: 0.15em;
        }

        /* Subtitle breathes in — 0.4s after headline trigger */
        .body-text {
          opacity: 0;
          transform: translateY(-40px);
          transition: opacity 1.1s ease-out, transform 1.1s ease-out;
          transition-delay: 0.4s;
        }
        .body-text.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* CTA button group — 0.8s after headline trigger */
        .btn-wrap {
          opacity: 0;
          transform: translateY(-40px);
          transition: opacity 1.1s ease-out, transform 1.1s ease-out;
          transition-delay: 0.8s;
        }
        .btn-wrap.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* Right panel — slow crossfade 1.5s, no movement, lets text lead */
        .right-panel {
          opacity: 0;
          transition: opacity 1.5s ease-out;
          transition-delay: 0.1s;
        }
        .right-panel.show {
          opacity: 1;
        }

        /* Logo entrance — slow crossfade, no translate */
        .logo-entrance {
          opacity: 0;
          transition: opacity 1.5s ease-out;
          transition-delay: 0.3s;
        }
        .logo-entrance.show {
          opacity: 1;
        }

        /* Button hover interactions */
        .btn-visit {
          transition: transform 220ms ease, box-shadow 220ms ease;
        }
        .btn-visit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(45,80,22,0.25);
        }
        .btn-visit:active { transform: translateY(0); }

        .sermon-link {
          position: relative;
          padding-bottom: 2px;
          transition: color 220ms ease;
        }
        .sermon-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          width: 0; height: 1px;
          background: #4A7C2F;
          transform: translateX(-50%);
          transition: width 280ms ease;
        }
        .sermon-link:hover::after { width: 100%; }

        /* Reduced motion — honour system preference */
        @media (prefers-reduced-motion: reduce) {
          .logo-float { animation: none !important; }
          .title-line, .welcome-label, .body-text, .btn-wrap,
          .right-panel, .logo-entrance {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            letter-spacing: 0.15em !important;
          }
        }
      `}</style>

      {/* ── MOBILE & TABLET (stacked) ── */}
      <section className="w-full bg-[#FAFDF5] lg:hidden">
        <div className="mx-auto w-full max-w-[1418px] px-6">
          <div className="flex flex-col min-h-[auto]">

            {/* LEFT */}
            <div className="flex-1 flex flex-col justify-start pt-6 py-10 items-center text-center">
              <p
                className={`welcome-label font-dm text-[11px] sm:text-[13px] text-[#D4A017] mb-4 sm:mb-6 ${visible ? "show" : ""}`}
              >
                — WELCOME HOME
              </p>

              {titleLines.map((line, index) => (
                <h1
                  key={index}
                  className={`title-line font-cormorant text-[32px] leading-[38px] sm:text-[42px] sm:leading-[48px] tracking-[0.05em] ${line.italic ? "italic" : ""} ${visible ? "show" : ""}`}
                  style={{
                    color: line.color,
                    /* Stagger each headline line by 120ms within the 1.1s drop */
                    transitionDelay: `${index * 120}ms`,
                  }}
                >
                  {line.text}
                </h1>
              ))}

              {/* Subtitle — breathes in 0.4s after trigger (set via CSS, !important override for inline) */}
              <p
                className={`body-text font-dm text-[14px] sm:text-[16px] text-[#4A7C2F] max-w-[420px] mt-5 sm:mt-6 mb-6 sm:mb-8 leading-[1.6] ${visible ? "show" : ""}`}
              >
                We are a community of believers rooted in grace, committed to one another, and growing together in the light of God's word.
              </p>

              {/* CTA — 0.8s after trigger */}
              <div
                className={`btn-wrap flex flex-col sm:flex-row items-center gap-4 sm:gap-6 ${visible ? "show" : ""}`}
              >
                <a
                  href="https://web.facebook.com/watch/live/?ref=watch_permalink&v=1466177158314042&rdid=N3v7QbbwKdr60noS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sermon-link font-dm text-[14px] sm:text-[16px] text-[#4A7C2F]"
                >
                  Watch Our Latest Service
                </a>
              </div>
            </div>

            {/* RIGHT — pure crossfade, no movement */}
            <div
              className={`right-panel w-full flex flex-col items-center justify-start pt-10 pb-10 ${visible ? "show" : ""}`}
              style={{
                background: "linear-gradient(to top left, #E8F5D6 0%, #FDF8E1 53%, #E8F0D0 98%)",
                borderRadius: "8px",
              }}
            >
              <div className={`logo-entrance ${visible ? "show" : ""}`}>
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="logo-float w-[220px] h-[200px] sm:w-[300px] sm:h-[260px] object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── DESKTOP ── */}
      <section className="hidden lg:block w-full bg-[#FAFDF5]">
        <div className="mx-auto w-full max-w-[1418px] px-6 lg:px-12 flex min-h-[676px]">

          {/* LEFT — text content */}
          <div className="flex-1 flex flex-col justify-center py-10">
            <p
              className={`welcome-label font-dm text-[13px] text-[#D4A017] mb-6 ${visible ? "show" : ""}`}
            >
              — WELCOME HOME
            </p>

            {titleLines.map((line, index) => (
              <h1
                key={index}
                className={`title-line font-cormorant text-[52px] leading-[60px] md:text-[65px] md:leading-[79px] tracking-[0.05em] ${line.italic ? "italic" : ""} ${visible ? "show" : ""}`}
                style={{
                  color: line.color,
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                {line.text}
              </h1>
            ))}

            {/* Subtitle — 0.4s stagger (CSS handles it) */}
            <p
              className={`body-text font-dm text-[16px] text-[#4A7C2F] max-w-[420px] mt-6 mb-8 leading-[1.6] ${visible ? "show" : ""}`}
            >
              We are a community of believers rooted in grace, committed to one another, and growing together in the light of God's word.
            </p>

            {/* CTA — 0.8s stagger (CSS handles it) */}
            <div
              className={`btn-wrap flex items-center gap-6 ${visible ? "show" : ""}`}
            >
              <a
                href="https://web.facebook.com/watch/live/?ref=watch_permalink&v=1466177158314042&rdid=N3v7QbbwKdr60noS"
                target="_blank"
                rel="noopener noreferrer"
                className="sermon-link font-dm text-[16px] text-[#4A7C2F]"
              >
                Watch Our Latest Service
              </a>
            </div>
          </div>

          {/* RIGHT — pure crossfade over 1.5s, no translate */}
          <div
            className={`right-panel -mr-12 w-[47.5%] flex-shrink-0 flex flex-col items-center justify-center pl-0 ${visible ? "show" : ""}`}
            style={{
              background: "linear-gradient(to top left, #E8F5D6 0%, #FDF8E1 53%, #E8F0D0 98%)",
            }}
          >
            <div className={`logo-entrance ${visible ? "show" : ""}`}>
              <img
                src="/logo.png"
                alt="Logo"
                className="logo-float w-[360px] h-[320px] md:w-[600px] md:h-[550px] object-contain"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;
