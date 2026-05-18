"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import PrayerRequestModal from "./PrayerRequestModal";

const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4A7C2F"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1.18 2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4A7C2F"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const labelStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 500,
  fontSize: "16px",
  letterSpacing: "0.15em",
  color: "#D4A017",
  marginBottom: "16px",
};

const navLinkStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  color: "#4A7C2F",
  textDecoration: "none",
  cursor: "pointer",
  background: "none",
  border: "none",
  padding: 0,
  textAlign: "left",
};

const contactTextStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  color: "#4A7C2F",
};

const serviceTextStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 400,
  fontSize: "12px",
  color: "#4A7C2F",
};

const Footer = () => {
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [baptismOpen, setBaptismOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollOrNavigate = (hash: string) => {
    if (pathname === "/") {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${hash}`);
    }
  };

  const handleExploreClick = (item: string) => {
            if (item === "Who we are") router.push("who-we-are");
            else if (item === "What we do") scrollOrNavigate("what-we-do");
    else if (item === "Visit Us") router.push("VisitUs");
    else if (item === "Church Ministries") scrollOrNavigate("church-ministries");
  };

  const handleGetInvolvedClick = (item: string) => {
    if (item === "Plan your visit") router.push("/VisitUs");
    else if (item === "Baptism") setBaptismOpen(true);
  };

  return (
    <>
      <div className="w-full bg-[#F6F8F1] py-6 px-4 sm:px-6 flex justify-center items-center">
        <div
          className="w-full"
          style={{
            maxWidth: "1340px",
            background: "#fff",
            border: "1px solid #82B657",
            borderRadius: "30px",
            padding: "32px 24px",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-8">

            {/* COL 1: Logo + Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.png"
                  alt="Church Logo"
                  style={{ width: "70px", height: "62px", objectFit: "contain", flexShrink: 0 }}
                />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#2D5016",
                    lineHeight: 1.2,
                    margin: 0,
                  }}
                >
                  Jesus Christ of Nazareth
                  <br />
                  One Fold Assembly
                </p>
              </div>

              <p
                className="font-dm mb-4"
                style={{ fontSize: "14px", color: "#4A7C2F", lineHeight: 1.7 }}
              >
                Gather with us every Sunday for spirit-led worship, inspiring
                messages, and genuine community. All are welcome.
              </p>

              <p style={labelStyle}>MAIN CHURCH</p>
              <p
                className="font-dm mb-4"
                style={{ fontSize: "14px", color: "#4A7C2F", lineHeight: 1.7 }}
              >
                Natalio B. Bacalso National Highway, 
                <br />
                Upper Tulay, Minglanilla, Cebu, Philippines
                <br />
                (near Shell Gasoline Station, across Dr. Peña Clinic.)
              </p>

              <div className="flex items-center gap-2 mb-2">
                <PhoneIcon />
                <span style={contactTextStyle}>+63 951 491 1577</span>
              </div>

              <div className="flex items-center gap-2">
                <MailIcon />
                <span style={{ ...contactTextStyle, wordBreak: "break-all" }}>
                  onefoldassembly@gmail.com
                </span>
              </div>
            </div>

            {/* COL 2: Explore + Service Times */}
            <div>
              <p style={labelStyle}>EXPLORE</p>
              <div className="flex flex-col gap-3 mb-6">
                {["Home", "Who we are", "What we do", "Visit Us", ].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleExploreClick(item)}
                    style={navLinkStyle}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <p style={labelStyle}>SERVICE TIMES</p>
              <div
                style={{
                  width: "100%",
                  maxWidth: "214px",
                  border: "1px solid rgba(74,124,47,0.20)",
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              >
                <div className="flex justify-between items-center px-3 py-3">
                  <span style={serviceTextStyle}>Sunday</span>
                  <span style={serviceTextStyle}>10:00 AM – 3:00 PM</span>
                </div>
                <div style={{ height: "1px", background: "rgba(74,124,47,0.20)", margin: "0 14px" }} />
                <div className="flex justify-between items-center px-3 py-3">
                  <span style={serviceTextStyle}>Friday</span>
                  <span style={serviceTextStyle}>6:00 PM – 11:00 PM</span>
                </div>
              </div>
            </div>

            {/* COL 3: Get Involved + Prayer Box */}
            <div>
              <p style={labelStyle}>GET INVOLVED</p>
              <div className="flex flex-col gap-3 mb-6">
                {["Plan your visit", "Baptism"].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleGetInvolvedClick(item)}
                    style={navLinkStyle}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Prayer Box */}
              <div
                style={{
                  width: "100%",
                  maxWidth: "210px",
                  background: "rgba(130,182,87,0.40)",
                  borderRadius: "8px",
                  padding: "16px 18px",
                }}
              >
                <p
                  className="font-dm"
                  style={{ fontSize: "14px", color: "#4A7C2F", marginBottom: "6px" }}
                >
                  Submit a Prayer Request
                </p>
                <p
                  className="font-dm"
                  style={{ fontSize: "12px", color: "#4A7C2F", lineHeight: 1.6, marginBottom: "12px" }}
                >
                  We believe in the power of prayer.
                  <br />
                  Share your needs with our team.
                </p>
                <button
                  onClick={() => setPrayerOpen(true)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "10px",
                    color: "#D4A017",
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid #D4A017",
                    cursor: "pointer",
                    padding: "0 0 3px 0",
                  }}
                >
                  Submit a request <span>→</span>
                </button>
              </div>
            </div>

            {/* COL 4: Follow Us + Resources */}
            <div>
              <p style={labelStyle}>FOLLOW US</p>
              <div className="flex gap-3 mb-6">
                {/* Facebook */}
                <a
                  href="https://web.facebook.com/profile.php?id=100093108589005"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#1877F2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@JCNA777"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "6px",
                    background: "#FF0000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="14" viewBox="0 0 24 18" fill="white">
                    <path d="M22.54 2.74A2.83 2.83 0 0020.55.74C18.77.27 12 .27 12 .27S5.23.27 3.45.74A2.83 2.83 0 001.46 2.74 29.62 29.62 0 001 9a29.62 29.62 0 00.46 6.26 2.83 2.83 0 001.99 2 29.62 29.62 0 003.55.47C8.77 17.73 12 17.73 12 17.73s6.77 0 8.55-.47a2.83 2.83 0 001.99-2A29.62 29.62 0 0023 9a29.62 29.62 0 00-.46-6.26zM9.75 12.75V5.25L15.5 9l-5.75 3.75z" />
                  </svg>
                </a>
              </div>

              <p style={labelStyle}>RESOURCES</p>
              <a
                href="https://www.youtube.com/@JCNA777"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#4A7C2F",
                  textDecoration: "none",
                }}
              >
                Watch live stream
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Prayer Request Modal */}
      <PrayerRequestModal
        isOpen={prayerOpen}
        onClose={() => setPrayerOpen(false)}
      />

      {/* Baptism Modal — reuses ServiceFormModal */}
      {baptismOpen && (
        <ServiceFormModalWrapper
          isOpen={baptismOpen}
          onClose={() => setBaptismOpen(false)}
        />
      )}
    </>
  );
};

// Lazy wrapper so ServiceFormModal is only imported when needed
import dynamic from "next/dynamic";
const ServiceFormModalWrapper = dynamic(
  () => import("./SpiritualServices/ServiceFormModal").then((mod) => {
    const Wrapped = (props: { isOpen: boolean; onClose: () => void }) => (
      <mod.default {...props} serviceType="baptism" />
    );
    Wrapped.displayName = "BaptismModal";
    return { default: Wrapped };
  }),
  { ssr: false }
);

export default Footer;
