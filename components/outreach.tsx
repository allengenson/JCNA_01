"use client";

import React, { useState } from "react";
import SendMessageModal from "@/components/SendMessageModal";

interface OutreachItem {
  name: string;
  badge?: string;
  address: string;
  area: string;
  mapUrl: string;
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
    address: "Tunghaan Minglanilla, Cebu City",
    area: "Minglanilla, Cebu",
    mapUrl:
      "https://www.google.com/maps/place/JESUS+CHRIST+OF+NAZARETH+ONEFOLD+ASSEMBLY/@10.2417709,123.7841194,17z",
  },
  {
    name: "Danao Outreach",
    address: "Bonifacio St. Corner Duterte St., Danao",
    area: "Danao, Cebu",
    mapUrl: "https://maps.app.goo.gl/3bQRNjCyeDDg1w4m7",
  },
  {
    name: "Lapu-Lapu City Outreach",
    address: "Pajac, Lapu-Lapu City, Cebu",
    area: "Lapu-Lapu City",
    mapUrl: "https://maps.app.goo.gl/NkNhnp6b6PMYzQhT7",
  },
  {
    name: "Negros Outreach",
    address: "Mandalupang, Manjuyod, Negros Oriental",
    area: "Negros Oriental",
    mapUrl: "https://maps.app.goo.gl/aNE4DTf4zoSdEHsPA",
  },
];

// ── Icons ──────────────────────────────────────────────────────────────────

const PinIcon = () => (
  <svg
    width="12" height="12" viewBox="0 0 24 24"
    fill="none" stroke="#C8D8A0" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    style={{ flexShrink: 0, marginTop: "2px" }}
  >
    <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const MapIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1="9" y1="3" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="21" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const SendIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8D8A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.81 19.79 19.79 0 0 1 2 1.18 2 2 0 0 1 4 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8D8A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LocationPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8D8A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const FacebookIcon = () => (
  <div style={{
    width: "17px", height: "17px", borderRadius: "50%",
    backgroundColor: "#1877F2", display: "flex",
    alignItems: "center", justifyContent: "center", flexShrink: 0,
    fontSize: "10px", fontWeight: 700, color: "#fff", lineHeight: 1,
  }}>f</div>
);

const YouTubeIcon = () => (
  <div style={{
    width: "17px", height: "17px", borderRadius: "3px",
    backgroundColor: "#FF0000", display: "flex",
    alignItems: "center", justifyContent: "center", flexShrink: 0,
  }}>
    <svg width="7" height="7" viewBox="0 0 10 10" fill="white">
      <polygon points="3,2 8,5 3,8" />
    </svg>
  </div>
);

// ── Subcomponents ───────────────────────────────────────────────────────────

const VDivider = () => (
  <div style={{ width: "1px", height: "14px", backgroundColor: "rgba(200,216,160,0.2)" }} />
);

const OutreachCard = ({ name, badge, address, area, mapUrl }: OutreachItem) => (
  <div style={{
    borderRadius: "14px",
    overflow: "hidden",
    border: "0.5px solid #A8C870",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
  }}>
    {/* Header */}
    <div style={{
      background: "linear-gradient(135deg, #1E3A0E 0%, #2D5016 100%)",
      padding: "18px 20px 14px",
      flex: 1,
    }}>
      {badge && (
        <span className="font-dm" style={{
          display: "inline-block",
          fontSize: "9px", fontWeight: 600,
          color: "#C8D8A0",
          background: "rgba(200,216,160,0.12)",
          border: "0.5px solid rgba(200,216,160,0.25)",
          padding: "2px 10px", borderRadius: "20px",
          marginBottom: "10px", letterSpacing: "0.05em",
        }}>
          {badge}
        </span>
      )}
      <div className="font-cormorant" style={{
        fontSize: "17px", fontWeight: 700,
        color: "#fff", lineHeight: 1.3, marginBottom: "10px",
      }}>
        {name}
      </div>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "6px", marginBottom: "14px" }}>
        <PinIcon />
        <span className="font-dm" style={{ fontSize: "11.5px", color: "rgba(200,216,160,0.75)", lineHeight: 1.45 }}>
          {address}
        </span>
      </div>
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-dm"
        style={{
          display: "inline-flex", alignItems: "center", gap: "5px",
          fontSize: "11px", fontWeight: 600,
          color: "#D4A017", textDecoration: "none",
        }}
      >
        <MapIcon />
        Open in Maps
        <ExternalLinkIcon />
      </a>
    </div>

    {/* Map strip */}
    <div style={{
      height: "72px",
      background: "#3a5a2e",
      display: "flex", alignItems: "center",
      gap: "8px", padding: "0 16px",
      borderTop: "0.5px solid rgba(168,200,112,0.2)",
      flexShrink: 0,
    }}>
      <LocationPinIcon />
      <span className="font-dm" style={{
        fontSize: "10px", color: "rgba(200,216,160,0.65)",
        flex: 1, lineHeight: 1.3,
      }}>
        {area}
      </span>
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="font-dm"
        style={{
          fontSize: "10px", fontWeight: 700,
          color: "#fff", background: "#D4A017",
          padding: "5px 14px", borderRadius: "6px",
          textDecoration: "none", whiteSpace: "nowrap",
        }}
      >
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

      <div className="w-full bg-[#F5F7F0] px-4 sm:px-6 lg:px-10 py-12 box-border">
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-dm" style={{
              fontSize: "11px", fontWeight: 600,
              color: "#7A9C3A", letterSpacing: "0.18em",
            }}>
              OUTREACHES
            </span>
            <div style={{ width: "40px", height: "1px", backgroundColor: "#7A9C3A" }} />
          </div>

          {/* Heading */}
          <h2 className="font-cormorant" style={{
            fontSize: "28px", fontWeight: 700,
            color: "#1E3A0E", marginBottom: "6px", lineHeight: 1.2,
          }}>
            Find Us Near You
          </h2>
          <p className="font-dm" style={{
            fontSize: "13px", color: "#5E7A40", marginBottom: "32px",
          }}>
            Four locations across Cebu and Negros. Everyone is welcome.
          </p>

          {/* Cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 mb-3.5">
            {outreaches.map((o) => (
              <OutreachCard key={o.name} {...o} />
            ))}
          </div>

          {/* Footer bar */}
          <div style={{ backgroundColor: "#1E3A0E", borderRadius: "14px", overflow: "hidden" }}>

            {/* Row 1: Phone + Email */}
            <div style={{
              padding: "14px 22px",
              display: "flex", flexWrap: "wrap",
              alignItems: "center", gap: "8px 18px",
              borderBottom: "0.5px solid rgba(200,216,160,0.12)",
            }}>
              <a href={`tel:${SHARED.phone.replace(/\s/g, "")}`} className="font-dm" style={{
                display: "flex", alignItems: "center", gap: "7px",
                color: "#C8D8A0", fontSize: "12px", textDecoration: "none",
              }}>
                <PhoneIcon />
                {SHARED.phone}
              </a>
              <VDivider />
              <a href={`mailto:${SHARED.email}`} className="font-dm" style={{
                display: "flex", alignItems: "center", gap: "7px",
                color: "#C8D8A0", fontSize: "12px", textDecoration: "none",
              }}>
                <EmailIcon />
                {SHARED.email}
              </a>
            </div>

            {/* Row 2: Socials + CTA */}
            <div style={{
              padding: "14px 22px",
              display: "flex", flexWrap: "wrap",
              alignItems: "center", justifyContent: "space-between", gap: "10px",
            }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 18px" }}>
                <a href={SHARED.fbUrl} target="_blank" rel="noopener noreferrer" className="font-dm" style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  color: "#C8D8A0", fontSize: "12px", textDecoration: "none",
                }}>
                  <FacebookIcon />
                  {SHARED.fbHandle}
                </a>
                <VDivider />
                <a href={SHARED.ytUrl} target="_blank" rel="noopener noreferrer" className="font-dm" style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  color: "#C8D8A0", fontSize: "12px", textDecoration: "none",
                }}>
                  <YouTubeIcon />
                  {SHARED.ytHandle}
                </a>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="font-dm"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  backgroundColor: "#D4A017", color: "#fff",
                  fontSize: "12px", fontWeight: 600,
                  border: "none", borderRadius: "8px",
                  padding: "9px 20px", cursor: "pointer",
                  whiteSpace: "nowrap", flexShrink: 0,
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
