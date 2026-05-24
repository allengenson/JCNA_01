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
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-8px); }
        }
        .logo-float {
          animation: floatLogo 6s ease-in-out infinite;
        }

        @keyframes pulseRing {
          0%   { box-shadow: 0 0 0 0   rgba(212,160,23,0.35); }
          70%  { box-shadow: 0 0 0 10px rgba(212,160,23,0);   }
          100% { box-shadow: 0 0 0 0   rgba(212,160,23,0);    }
        }
        .service-card {
          animation: pulseRing 2.8s ease-out infinite;
        }

        .title-line {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 700ms ease, transform 700ms ease;
        }
        .title-line.show { opacity: 1; transform: translateY(0); }

        .welcome-label {
          opacity: 0;
          letter-spacing: 0.05em;
          transition: opacity 600ms ease, letter-spacing 600ms ease;
        }
        .welcome-label.show { opacity: 1; letter-spacing: 0.15em; }

        .body-text {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 600ms ease, transform 600ms ease;
        }
        .body-text.show { opacity: 1; transform: translateY(0); }

        .btn-wrap {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 600ms ease, transform 600ms ease;
        }
        .btn-wrap.show { opacity: 1; transform: translateY(0); }

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

        .right-panel {
          opacity: 0;
          transform: translateX(18px);
          transition: opacity 800ms ease, transform 800ms ease;
          transition-delay: 300ms;
        }
        .right-panel.show { opacity: 1; transform: translateX(0); }

        .logo-entrance {
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 700ms ease, transform 700ms ease;
          transition-delay: 450ms;
        }
        .logo-entrance.show { opacity: 1; transform: scale(1); }

        .card-entrance {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 600ms ease, transform 600ms ease;
          transition-delay: 650ms;
        }
        .card-entrance.show { opacity: 1; transform: translateY(0); }

        @media (prefers-reduced-motion: reduce) {
          .logo-float, .service-card { animation: none !important; }
          .title-line, .welcome-label, .body-text, .btn-wrap,
          .right-panel, .logo-entrance, .card-entrance {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            letter-spacing: 0.15em !important;
          }
        }
      `}</style>

      {/* ── MOBILE & TABLET (stacked, unchanged) ── */}
      <section className="w-full bg-[#FAFDF5] lg:hidden">
        <div className="mx-auto w-full max-w-[1418px] px-6">
          <div className="flex flex-col min-h-[auto]">
            {/* LEFT */}
            <div className="flex-1 flex flex-col justify-start pt-6 py-10 items-center text-center">
              <p className={`welcome-label font-dm text-[11px] sm:text-[13px] text-[#D4A017] mb-4 sm:mb-6 ${visible ? "show" : ""}`}>
                — WELCOME HOME
              </p>
              {titleLines.map((line, index) => (
                <h1
                  key={index}
                  className={`title-line font-cormorant text-[32px] leading-[38px] sm:text-[42px] sm:leading-[48px] tracking-[0.05em] ${line.italic ? "italic" : ""} ${visible ? "show" : ""}`}
                  style={{ color: line.color, transitionDelay: `${120 + index * 130}ms` }}
                >
                  {line.text}
                </h1>
              ))}
              <p
                className={`body-text font-dm text-[14px] sm:text-[16px] text-[#4A7C2F] max-w-[420px] mt-5 sm:mt-6 mb-6 sm:mb-8 leading-[1.6] ${visible ? "show" : ""}`}
                style={{ transitionDelay: "520ms" }}
              >
                We are a community of believers rooted in grace, committed to one another, and growing together in the light of God's word.
              </p>
              <div
                className={`btn-wrap flex flex-col sm:flex-row items-center gap-4 sm:gap-6 ${visible ? "show" : ""}`}
                style={{ transitionDelay: "660ms" }}
              >
                <Link href="/VisitUs">
                  <button className="btn-visit w-full sm:w-auto font-dm text-[14px] sm:text-[16px] text-white px-6 py-3 rounded-full bg-gradient-to-r from-[#4A7C2F] to-[#2D5016]">
                    VISIT US
                  </button>
                </Link>
                <a
                  href="https://web.facebook.com/watch/live/?ref=watch_permalink&v=1466177158314042&rdid=N3v7QbbwKdr60noS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sermon-link font-dm text-[14px] sm:text-[16px] text-[#4A7C2F]"
                >
                  Watch latest sermon
                </a>
              </div>
            </div>

            {/* RIGHT — mobile */}
            <div
              className={`right-panel w-full flex flex-col items-center justify-start pt-10 pb-10 ${visible ? "show" : ""}`}
              style={{ background: "linear-gradient(to top left, #E8F5D6 0%, #FDF8E1 53%, #E8F0D0 98%)", borderRadius: "8px" }}
            >
              <div className={`logo-entrance ${visible ? "show" : ""}`}>
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="logo-float w-[220px] h-[200px] sm:w-[300px] sm:h-[260px] object-contain"
                />
              </div>
              <div
                className={`card-entrance service-card mt-0 flex flex-col items-center justify-center w-[160px] h-[70px] sm:w-[185px] sm:h-[76px] rounded-full bg-white border ${visible ? "show" : ""}`}
                style={{ borderColor: "rgba(212,160,23,0.5)" }}
              >
                <p className="font-semibold text-[12px] sm:text-[13px] text-[#4A7C2F] font-dm">Sunday Service</p>
                <p className="text-[12px] sm:text-[13px] text-[#4A7C2F] font-dm">10:00 AM - 3:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESKTOP ── */}
      {/*
        FIX: Use the same mx-auto w-full max-w-[1418px] px-6 lg:px-12 as the navbar
        so left and right edges are pixel-identical.

        The right panel's gradient bg needs to bleed to the right edge of the
        viewport, so we use a negative right margin + padding trick:
        - Give the outer container the standard px-12 padding
        - Left panel content sits naturally within that
        - Right panel uses -mr-12 to undo the right padding, then pr-0, so its
          background reaches the viewport edge while content stays aligned
      */}
      <section className="hidden lg:block w-full bg-[#FAFDF5]">
        <div className="mx-auto w-full max-w-[1418px] px-6 lg:px-12 flex min-h-[676px]">

          {/* LEFT — text content, already inside the padded container */}
          <div className="flex-1 flex flex-col justify-center py-10">
            <p className={`welcome-label font-dm text-[13px] text-[#D4A017] mb-6 ${visible ? "show" : ""}`}>
              — WELCOME HOME
            </p>
            {titleLines.map((line, index) => (
              <h1
                key={index}
                className={`title-line font-cormorant text-[52px] leading-[60px] md:text-[65px] md:leading-[79px] tracking-[0.05em] ${line.italic ? "italic" : ""} ${visible ? "show" : ""}`}
                style={{ color: line.color, transitionDelay: `${120 + index * 130}ms` }}
              >
                {line.text}
              </h1>
            ))}
            <p
              className={`body-text font-dm text-[16px] text-[#4A7C2F] max-w-[420px] mt-6 mb-8 leading-[1.6] ${visible ? "show" : ""}`}
              style={{ transitionDelay: "520ms" }}
            >
              We are a community of believers rooted in grace, committed to one another, and growing together in the light of God's word.
            </p>
            <div
              className={`btn-wrap flex items-center gap-6 ${visible ? "show" : ""}`}
              style={{ transitionDelay: "660ms" }}
            >
              <Link href="/VisitUs">
                <button className="btn-visit font-dm text-[16px] text-white px-6 py-3 rounded-full bg-gradient-to-r from-[#4A7C2F] to-[#2D5016]">
                  VISIT US
                </button>
              </Link>
              <a
                href="https://web.facebook.com/watch/live/?ref=watch_permalink&v=1466177158314042&rdid=N3v7QbbwKdr60noS"
                target="_blank"
                rel="noopener noreferrer"
                className="sermon-link font-dm text-[16px] text-[#4A7C2F]"
              >
                Watch latest sermon
              </a>
            </div>
          </div>

          {/*
            RIGHT — gradient bg panel.
            -mr-12 cancels the container's right px-12 so the bg bleeds to the
            viewport edge (matching how the original design looked).
            pl-12 keeps the internal content (logo, card) inset from the left.
            The bg colour fills from left edge of this div to the viewport right edge.
          */}
          <div
            className={`right-panel -mr-12 w-[47.5%] flex-shrink-0 flex flex-col items-center justify-start pt-0 pl-0 ${visible ? "show" : ""}`}
            style={{ background: "linear-gradient(to top left, #E8F5D6 0%, #FDF8E1 53%, #E8F0D0 98%)" }}
          >
            <div className={`logo-entrance ${visible ? "show" : ""}`}>
              <img
                src="/logo.png"
                alt="Logo"
                className="logo-float w-[360px] h-[320px] md:w-[600px] md:h-[550px] object-contain"
              />
            </div>
            <div
              className={`card-entrance service-card mt-0 flex flex-col items-center justify-center w-[185px] h-[76px] rounded-full bg-white border ${visible ? "show" : ""}`}
              style={{ borderColor: "rgba(212,160,23,0.5)" }}
            >
              <p className="font-semibold text-[13px] text-[#4A7C2F] font-dm">Sunday Service</p>
              <p className="text-[13px] text-[#4A7C2F] font-dm">10:00 AM - 3:00 PM</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;
