"use client";

import React, { useState } from "react";
import SendMessageModal from "@/components/SendMessageModal";

interface OutreachItem {
  name: string;
  badge?: string;
  badgeType?: "main" | "outreach";
  address: string;
  area: string;
  mapUrl: string;
  embedUrl: string;
}

const SHARED = {
  phone: "+63 951 491 1577",
  email: "onefoldassembly@gmail.com",
  fbUrl: "https://web.facebook.com/profile.php?id=100093108589005",
  fbHandle: "JCNA Onefold Assembly",
  ytUrl: "https://www.youtube.com/@JCNA777",
  ytHandle: "@JCNA777",
};

const outreaches: OutreachItem[] = [
 {
  name: "Minglanilla",
  badge: "Main Church",
  badgeType: "main",
  address: "Natalio B. Bacalso National Highway, Upper Tulay, Minglanilla, Cebu, Philippines",
  area: "Minglanilla, Cebu",
  mapUrl:
    "https://www.google.com/maps/place/JESUS+CHRIST+OF+NAZARETH+ONEFOLD+ASSEMBLY/@10.2417709,123.7841194,17z",
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.2489925238006!2d123.78391809736237!3d10.241491337433638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a977fac09dc6af%3A0xda93be23da18c422!2sJESUS%20CHRIST%20OF%20NAZARETH%20ONEFOLD%20ASSEMBLY!5e0!3m2!1sen!2sph!4v1779194289293!5m2!1sen!2sph",
},
  {
    name: "Danao Outreach",
    badge: "Outreach",
    badgeType: "outreach",
    address: "Bonifacio St. Corner Duterte St., Danao",
    area: "Danao, Cebu",
    mapUrl: "https://maps.app.goo.gl/3bQRNjCyeDDg1w4m7",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.0!2d124.026!3d10.522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a8e1234567890a%3A0xabcdef1234567890!2sBonifacio+St+%26+Duterte+St%2C+Danao%2C+Cebu!5e0!3m2!1sen!2sph!4v1680000000001!5m2!1sen!2sph",
  },
  {
    name: "Lapu-Lapu City Outreach",
    badge: "Outreach",
    badgeType: "outreach",
    address: "Pajac, Lapu-Lapu City, Cebu",
    area: "Lapu-Lapu City",
    mapUrl: "https://maps.app.goo.gl/NkNhnp6b6PMYzQhT7",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.5!2d123.972!3d10.308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a8987654321abc%3A0xfedcba9876543210!2sPajac%2C+Lapu-Lapu+City%2C+Cebu!5e0!3m2!1sen!2sph!4v1680000000002!5m2!1sen!2sph",
  },
  {
    name: "Negros Outreach",
    badge: "Outreach",
    badgeType: "outreach",
    address: "Mandalupang, Manjuyod, Negros Oriental",
    area: "Negros Oriental",
    mapUrl: "https://maps.app.goo.gl/aNE4DTf4zoSdEHsPA",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15706.0!2d123.083!3d9.654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab1234abcdef00%3A0x00fedcba43210000!2sMandalupang%2C+Manjuyod%2C+Negros+Oriental!5e0!3m2!1sen!2sph!4v1680000000003!5m2!1sen!2sph",
  },
];

// ── Icons ──────────────────────────────────────────────────────────────────

const PinIcon = () => (
  <svg
    width="13" height="13" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    style={{ flexShrink: 0, marginTop: "2px", color: "#7a9c7b" }}
  >
    <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const RouteIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="19" r="3" />
    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
    <circle cx="18" cy="5" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7a9c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.81 19.79 19.79 0 0 1 2 1.18 2 2 0 0 1 4 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7a9c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const FacebookDot = () => (
  <span style={{
    width: "20px", height: "20px", borderRadius: "4px",
    background: "#1877f2", color: "#fff",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    fontSize: "11px", fontWeight: 700, flexShrink: 0,
    fontFamily: "sans-serif",
  }}>f</span>
);

const YouTubeDot = () => (
  <span style={{
    width: "20px", height: "20px", borderRadius: "4px",
    background: "#ff0000", color: "#fff",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  }}>
    <svg width="8" height="8" viewBox="0 0 10 10" fill="white">
      <polygon points="3,2 8,5 3,8" />
    </svg>
  </span>
);

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

// ── Subcomponents ───────────────────────────────────────────────────────────

const VDivider = () => (
  <div style={{ width: "1px", background: "#3d5c3e", alignSelf: "stretch" }} />
);

const OutreachCard = ({ name, badge, badgeType, address, mapUrl, embedUrl }: OutreachItem) => (
  <div style={{
    background: "#1e3a1f",
    borderRadius: "14px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  }}>
    {/* Map iframe */}
    <iframe
      src={embedUrl}
      style={{ width: "100%", height: "170px", border: "none", display: "block" }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={`Map for ${name}`}
    />

    {/* Info */}
    <div style={{
      padding: "1rem 1.1rem 1.15rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.35rem",
      flex: 1,
    }}>
      {badge && (
        <span className="font-dm" style={{
          display: "inline-block",
          fontSize: "10px", fontWeight: 500,
          letterSpacing: "0.08em", textTransform: "uppercase",
          padding: "2px 9px", borderRadius: "100px",
          width: "fit-content",
          ...(badgeType === "main"
            ? { background: "#c8a84b", color: "#1e3a1f" }
            : { background: "transparent", border: "1px solid rgba(200,168,75,0.35)", color: "#c8a84b" }
          ),
        }}>
          {badge}
        </span>
      )}

      <p className="font-cormorant" style={{
        fontSize: "1.05rem", fontWeight: 600, color: "#f5f2eb",
      }}>
        {name}
      </p>

      <p className="font-dm" style={{
        fontSize: "0.78rem", color: "#9db39e",
        display: "flex", alignItems: "flex-start", gap: "4px", lineHeight: 1.4,
      }}>
        <PinIcon />
        {address}
      </p>

      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-dm"
        style={{
          display: "inline-flex", alignItems: "center", gap: "5px",
          marginTop: "0.5rem",
          fontSize: "0.78rem", fontWeight: 500,
          color: "#c8a84b", textDecoration: "none",
          border: "1px solid rgba(200,168,75,0.3)",
          padding: "5px 13px", borderRadius: "100px",
          width: "fit-content",
        }}
      >
        <RouteIcon />
        Get Directions
      </a>
    </div>
  </div>
);

// ── Main section ───────────────────────────────────────────────────────────

const OutreachSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SendMessageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        outreachName="JCNA Onefold Assembly"
        outreachEmail={SHARED.email}
        outreachPhone={SHARED.phone}
      />

      <div className="w-full bg-[#f5f2eb] px-4 sm:px-6 lg:px-10 py-12 box-border">
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

          {/* Section header */}
          <div style={{ marginBottom: "2rem" }}>
            <h2 className="font-cormorant" style={{
              fontSize: "2.25rem", fontWeight: 600,
              color: "#1e3a1f", lineHeight: 1.2, marginBottom: "0.4rem",
            }}>
              Find Us Near You
            </h2>
            <p className="font-dm" style={{
              fontSize: "0.9rem", color: "#4a5c4b",
              fontWeight: 300, letterSpacing: "0.02em",
            }}>
              Four outreaches across Cebu and Negros. Everyone is welcome.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {outreaches.map((o) => (
              <OutreachCard key={o.name} {...o} />
            ))}
          </div>

          {/* Footer band */}
          <div style={{
            background: "#1e3a1f",
            borderRadius: "14px",
            padding: "1.5rem 1.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.25rem",
            flexWrap: "wrap",
          }}>

            {/* Contacts */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              <span className="font-dm" style={{
                fontSize: "10px", textTransform: "uppercase",
                letterSpacing: "0.12em", color: "#7a9c7b", fontWeight: 500,
              }}>
                Our Contacts
              </span>
              <a href={`tel:${SHARED.phone.replace(/\s/g, "")}`} className="font-dm" style={{
                display: "flex", alignItems: "center", gap: "8px",
                fontSize: "0.83rem", color: "#d4e8d5", textDecoration: "none",
              }}>
                <PhoneIcon />
                {SHARED.phone}
              </a>
              <a href={`mailto:${SHARED.email}`} className="font-dm" style={{
                display: "flex", alignItems: "center", gap: "8px",
                fontSize: "0.83rem", color: "#d4e8d5", textDecoration: "none",
              }}>
                <EmailIcon />
                {SHARED.email}
              </a>
            </div>

            <VDivider />

            {/* Socials */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              <span className="font-dm" style={{
                fontSize: "10px", textTransform: "uppercase",
                letterSpacing: "0.12em", color: "#7a9c7b", fontWeight: 500,
              }}>
                Our Socials
              </span>
              <a href={SHARED.fbUrl} target="_blank" rel="noopener noreferrer" className="font-dm" style={{
                display: "flex", alignItems: "center", gap: "8px",
                fontSize: "0.83rem", color: "#d4e8d5", textDecoration: "none",
              }}>
                <FacebookDot />
                {SHARED.fbHandle}
              </a>
              <a href={SHARED.ytUrl} target="_blank" rel="noopener noreferrer" className="font-dm" style={{
                display: "flex", alignItems: "center", gap: "8px",
                fontSize: "0.83rem", color: "#d4e8d5", textDecoration: "none",
              }}>
                <YouTubeDot />
                {SHARED.ytHandle}
              </a>
            </div>

            <VDivider />

            {/* CTA */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem", alignItems: "flex-end" }}>
              
              <button
                onClick={() => setModalOpen(true)}
                className="font-dm"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "#c8a84b", color: "#1e3a1f",
                  fontWeight: 500, fontSize: "0.87rem",
                  padding: "10px 22px", borderRadius: "100px",
                  border: "none", cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                <SendIcon />
                Send Message
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default OutreachSection;
