"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import React from "react";

// ── Shared styles (declared FIRST so infoCards can reference them) ───────────

const bodyTextStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 400,
  fontSize: "13px",
  color: "#4A7C2F",
  lineHeight: 1.8,
  margin: 0,
};

const serviceRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 12px",
};

const serviceTextStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 400,
  fontSize: "12px",
  color: "#4A7C2F",
};

// ── SVG Icons (declared BEFORE infoCards) ────────────────────────────────────

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function AtmosphereIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1.18 2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

// ── Info Card Data (styles and icons are now declared above) ─────────────────

const infoCards = [
  {
    icon: <LocationIcon />,
    title: "Our Location",
    content: (
      <p style={bodyTextStyle}>
        N.B Bacalso National Highway,
        <br />
        Tughaan, Minglanilla 6046 Near
        <br />
        Shell Gasoline Station. Across
        <br />
        Dr. Pena Clinic, Minglanilla, Cebu
      </p>
    ),
  },
  {
    icon: <CalendarIcon />,
    title: null,
    content: (
      <div
        style={{
          width: "100%",
          maxWidth: "190px",
          border: "1px solid rgba(74,124,47,0.20)",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <div style={serviceRowStyle}>
          <span style={serviceTextStyle}>Sunday</span>
          <span style={serviceTextStyle}>10:00 AM – 3:00 PM</span>
        </div>
        <div style={{ width: "160px", height: "1px", background: "rgba(74,124,47,0.20)", margin: "0 auto" }} />
        <div style={serviceRowStyle}>
          <span style={serviceTextStyle}>Friday</span>
          <span style={serviceTextStyle}>6:00 PM – 11:00 PM</span>
        </div>
      </div>
    ),
  },
  {
    icon: <AtmosphereIcon />,
    title: null,
    content: (
      <p style={bodyTextStyle}>
        You can expect a friendly atmosphere,
        <br />
        uplifting praise and worship, and a
        <br />
        Bible-based message that encourages
        <br />
        and strengthens your faith.
      </p>
    ),
  },
  {
    icon: <ContactIcon />,
    title: null,
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p style={bodyTextStyle}>+63 950 948 3903</p>
        <p style={bodyTextStyle}>jcnamingla@gmail.com</p>
      </div>
    ),
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function VisitUsPage() {
  return (
    <div
      style={{
        background: "#F6F8F1",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="px-4 sm:px-10 lg:px-20 pt-10 sm:pt-14 lg:pt-[60px]">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center w-full"
          style={{ maxWidth: "1260px", margin: "0 auto" }}
        >
          {/* Left: Text */}
          <div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(36px, 7vw, 52px)",
                color: "#2D5016",
                lineHeight: 1.1,
                marginBottom: "20px",
              }}
            >
              Visit Us
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 3vw, 16px)",
                color: "#4A7C2F",
                lineHeight: 1.8,
                maxWidth: "380px",
              }}
            >
              We would love to welcome you! Join us at our church and experience
              a Christ-centered community filled with worship, fellowship, and
              faith.
            </p>
          </div>

          {/* Right: Church Photo */}
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(45,80,22,0.15)",
              width: "100%",
              aspectRatio: "16/10",
              position: "relative",
            }}
          >
            <Image
              src="/church-photo.jpg"
              alt="Jesus Christ of Nazareth One Fold Assembly"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── INFO CARDS SECTION ── */}
      <section
        className="px-4 sm:px-10 lg:px-20 py-10 lg:py-[60px]"
        style={{ maxWidth: "1260px", margin: "0 auto" }}
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
          style={{
            gap: "1px",
            background: "rgba(74,124,47,0.15)",
            border: "1px solid rgba(74,124,47,0.15)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {infoCards.map((card, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#82B657",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {card.icon}
              </div>

              {card.title && (
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "13px",
                    letterSpacing: "0.12em",
                    color: "#2D5016",
                    margin: 0,
                  }}
                >
                  {card.title}
                </p>
              )}

              <div>{card.content}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIRECTIONS SECTION ── */}
      <section
        className="px-4 sm:px-10 lg:px-20 pb-16 lg:pb-[80px]"
        style={{ maxWidth: "1260px", margin: "0 auto" }}
      >
        <div
          className="flex flex-col lg:flex-row"
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid #82B657",
            minHeight: "300px",
          }}
        >
          {/* Map */}
          <div className="flex-1 relative" style={{ minHeight: "260px" }}>
            <iframe
              title="JCNA Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.4!2d123.7!3d10.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999b2a2e2a2a1%3A0x0!2sN.B+Bacalso+National+Hwy%2C+Minglanilla%2C+Cebu!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
              style={{ width: "100%", height: "100%", border: 0, display: "block", minHeight: "260px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Directions Panel */}
          <div
            className="w-full lg:w-[340px] lg:flex-shrink-0"
            style={{
              background: "#fff",
              padding: "36px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(26px, 5vw, 34px)",
                color: "#2D5016",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Directions
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "#4A7C2F",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              We would love to welcome you! Join us at our church and experience
              a Christ-centered community filled with worship, fellowship, and
              faith.
            </p>
            <a
              href="https://maps.google.com/?q=N.B+Bacalso+National+Highway,+Minglanilla,+Cebu"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#82B657",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                textDecoration: "none",
                padding: "12px 24px",
                borderRadius: "999px",
                width: "fit-content",
                marginTop: "8px",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Open in Google Map
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
