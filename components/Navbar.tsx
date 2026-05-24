"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import PrayerRequestModal from "./PrayerRequestModal";

const menuItems = ["HOME", "WHO WE ARE", "WHAT WE DO", "CONTACT", "VISIT US"];

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

/* ─── Contact Info Modal ─────────────────────────────────────── */
const ContactModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes cmBackdropIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes cmPanelIn {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .cm-backdrop {
          animation: cmBackdropIn 200ms ease forwards;
        }
        .cm-panel {
          animation: cmPanelIn 250ms ease forwards;
        }
        .cm-contact-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          border-radius: 12px;
          background: #F2F9EA;
          border: 1px solid #D4EDBA;
          text-decoration: none;
          color: #2D5016;
          transition: background 200ms ease, transform 150ms ease, box-shadow 200ms ease;
        }
        .cm-contact-link:hover {
          background: #E3F5C8;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(45,80,22,0.12);
        }
        .cm-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #2D5016;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cm-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #F2F9EA;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4A7C2F;
          font-size: 18px;
          transition: background 200ms ease, color 200ms ease;
        }
        .cm-close:hover {
          background: #D4EDBA;
          color: #2D5016;
        }
        @media (prefers-reduced-motion: reduce) {
          .cm-backdrop, .cm-panel { animation: none !important; }
          .cm-contact-link { transition: none !important; }
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="cm-backdrop fixed inset-0 z-[100] flex items-center justify-center px-4"
        style={{ backgroundColor: "rgba(20, 40, 8, 0.45)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
      >
        {/* Panel */}
        <div
          className="cm-panel relative bg-[#FAFDF5] rounded-2xl shadow-2xl w-full max-w-sm p-8"
          style={{ border: "1px solid #D4EDBA" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="cm-close" onClick={onClose} aria-label="Close">
            ✕
          </button>

          {/* Header */}
          <div className="mb-6 text-center">
            <div
              className="mx-auto mb-3 flex items-center justify-center rounded-full"
              style={{
                width: 56,
                height: 56,
                background: "linear-gradient(135deg, #3a6b1e 0%, #2D5016 100%)",
              }}
            >
              {/* Envelope icon */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "22px",
                color: "#2D5016",
                lineHeight: 1.2,
                marginBottom: 4,
              }}
            >
              Get in Touch
            </h2>
            <p style={{ fontSize: "13px", color: "#6B9A4A" }}>
              We'd love to hear from you
            </p>
          </div>

          {/* Contact items */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Email */}
            <a
              href="mailto:onefoldassembly@gmail.com"
              className="cm-contact-link"
            >
              <div className="cm-icon-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 7 10-7"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "11px", color: "#6B9A4A", marginBottom: 2, fontFamily: "DM Sans, sans-serif" }}>
                  Email us
                </p>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#2D5016", fontFamily: "DM Sans, sans-serif" }}>
                  onefoldassembly@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+639514911577"
              className="cm-contact-link"
            >
              <div className="cm-icon-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "11px", color: "#6B9A4A", marginBottom: 2, fontFamily: "DM Sans, sans-serif" }}>
                  Call us
                </p>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#2D5016", fontFamily: "DM Sans, sans-serif" }}>
                  +63 951 491 1577
                </p>
              </div>
            </a>
          </div>

          {/* Footer note */}
          <p
            style={{
              textAlign: "center",
              fontSize: "11px",
              color: "#9AB87A",
              marginTop: 20,
              fontFamily: "DM Sans, sans-serif",
            }}
          >
            We typically respond within 24 hours
          </p>
        </div>
      </div>
    </>
  );
};

/* ─── Navbar ─────────────────────────────────────────────────── */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (item: string) => {
    setOpen(false);
    setActiveItem(item);

    if (item === "CONTACT") {
      setContactOpen(true);
      return;
    }
    if (item === "WHO WE ARE") { router.push("/WhoWeAre"); return; }
    if (item === "VISIT US") { router.push("/VisitUs"); return; }
    if (item === "WHAT WE DO") {
      isHome ? scrollToId("what-we-do") : router.push("/#what-we-do");
      return;
    }
    if (item === "HOME") {
      isHome ? scrollToId("hero") : router.push("/");
      return;
    }
  };

  return (
    <>
      <style>{`
        .nb-root {
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 600ms ease, transform 600ms ease, box-shadow 300ms ease;
        }
        .nb-root.mounted {
          opacity: 1;
          transform: translateY(0);
        }
        .nb-root.scrolled {
          box-shadow: 0 2px 16px rgba(45,80,22,0.09);
        }

        .nb-logo {
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 700ms ease 200ms, transform 700ms ease 200ms;
        }
        .nb-root.mounted .nb-logo {
          opacity: 1;
          transform: translateX(0);
        }

        .nb-ditem {
          opacity: 0;
          transition: opacity 500ms ease;
        }
        .nb-root.mounted .nb-ditem:nth-child(1) { transition-delay: 150ms; opacity: 1; }
        .nb-root.mounted .nb-ditem:nth-child(2) { transition-delay: 200ms; opacity: 1; }
        .nb-root.mounted .nb-ditem:nth-child(3) { transition-delay: 250ms; opacity: 1; }
        .nb-root.mounted .nb-ditem:nth-child(4) { transition-delay: 300ms; opacity: 1; }
        .nb-root.mounted .nb-ditem:nth-child(5) { transition-delay: 350ms; opacity: 1; }
        .nb-root.mounted .nb-ditem:nth-child(6) { transition-delay: 400ms; opacity: 1; }

        .nb-link {
          position: relative;
          padding-bottom: 4px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 250ms ease;
          display: inline-block;
        }
        .nb-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #2D5016;
          border-radius: 2px;
          transition: width 300ms ease;
        }
        .nb-link:hover { color: #2D5016 !important; }
        .nb-link:hover::after,
        .nb-link.active::after { width: 100%; }

        .nb-prayer {
          transition: background-color 250ms ease, transform 200ms ease, box-shadow 250ms ease;
        }
        .nb-prayer:hover {
          background-color: #3a6b1e !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(45,80,22,0.25);
        }
        .nb-prayer:active { transform: translateY(0); }

        .nb-burger {
          width: 24px;
          height: 18px;
          flex-direction: column;
          justify-content: space-between;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          flex-shrink: 0;
          display: none;
        }
        @media (max-width: 767px) {
          .nb-burger { display: flex; }
        }

        .nb-burger span {
          display: block;
          height: 2px;
          width: 100%;
          background-color: #2D5016 !important;
          border-radius: 2px;
          transform-origin: center;
          transition: transform 350ms ease, opacity 250ms ease;
          flex-shrink: 0;
        }
        .nb-burger.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .nb-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nb-burger.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        @keyframes nbMobileIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nb-mobile { animation: nbMobileIn 280ms ease forwards; }

        @keyframes nbItemIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nb-mitem {
          opacity: 0;
          animation: nbItemIn 300ms ease forwards;
        }
        .nb-mitem:hover { color: #2D5016; }

        @media (prefers-reduced-motion: reduce) {
          .nb-root, .nb-logo, .nb-ditem, .nb-link::after, .nb-prayer, .nb-burger span {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .nb-mobile { animation: none !important; opacity: 1 !important; transform: none !important; }
          .nb-mitem  { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <div
        className={`nb-root w-full bg-[#FAFDF5] border-b border-[#E8F5D6] sticky top-0 z-50 ${
          mounted ? "mounted" : ""
        } ${scrolled ? "scrolled" : ""}`}
      >
        <nav
          className={`mx-auto w-full max-w-[1418px] px-6 lg:px-12 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-[62px] sm:h-[72px]" : "h-[70px] sm:h-[83px]"
          }`}
        >
          {/* LEFT — Logo + Church Name */}
          <div className="nb-logo flex items-center gap-2 sm:gap-4">
            <img
              src="/logo.png"
              alt="Logo"
              className={`object-contain transition-all duration-300 ${
                scrolled
                  ? "w-[50px] h-[42px] sm:w-[60px] sm:h-[52px] lg:w-[82px] lg:h-[74px]"
                  : "w-[60px] h-[50px] sm:w-[74px] sm:h-[65px] lg:w-[110px] lg:h-[99px]"
              }`}
            />
            <div className="leading-tight">
              <h1
                className={`font-cormorant font-bold text-[#2D5016] transition-all duration-300 ${
                  scrolled
                    ? "text-[12px] sm:text-[17px] md:text-[20px]"
                    : "text-[14px] sm:text-[20px] md:text-[24px]"
                }`}
              >
                JESUS CHRIST OF NAZARETH
              </h1>
              <p
                className={`font-cormorant font-bold text-[#2D5016] transition-all duration-300 ${
                  scrolled
                    ? "text-[12px] sm:text-[17px] md:text-[20px]"
                    : "text-[14px] sm:text-[20px] md:text-[24px]"
                }`}
              >
                ONE FOLD ASSEMBLY
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {menuItems.map((item) => (
              <div key={item} className="nb-ditem">
                <button
                  onClick={() => handleClick(item)}
                  className={`nb-link text-[12px] lg:text-[13px] text-[#4A7C2F] font-dm tracking-wide whitespace-nowrap ${
                    activeItem === item ? "active" : ""
                  }`}
                >
                  {item}
                </button>
              </div>
            ))}
            <div className="nb-ditem">
              <button
                onClick={() => setPrayerOpen(true)}
                className="nb-prayer bg-[#2D5016] text-white text-[12px] lg:text-[13px] font-dm px-3 lg:px-5 py-2 rounded-full whitespace-nowrap"
              >
                Prayer Request
              </button>
            </div>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className={`nb-burger ${open ? "open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="nb-mobile absolute top-full left-0 w-full bg-[#FAFDF5] border-t border-[#E8F5D6] flex flex-col items-center gap-4 py-6 z-50">
            {menuItems.map((item, i) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className="nb-mitem text-[16px] text-[#4A7C2F] font-dm bg-transparent border-none cursor-pointer"
                style={{ animationDelay: `${i * 55}ms` }}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                setPrayerOpen(true);
              }}
              className="nb-mitem nb-prayer bg-[#2D5016] text-white text-[14px] font-dm px-6 py-2 rounded-full"
              style={{ animationDelay: `${menuItems.length * 55}ms` }}
            >
              Prayer Request
            </button>
          </div>
        )}
      </div>

      {/* Modals */}
      <PrayerRequestModal
        isOpen={prayerOpen}
        onClose={() => setPrayerOpen(false)}
      />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
};

export default Navbar;
