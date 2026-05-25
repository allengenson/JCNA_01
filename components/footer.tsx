"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import PrayerRequestModal from "./PrayerRequestModal";

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

const Footer = () => {
  const [prayerOpen, setPrayerOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const scrollOrNavigate = (id: string) => {
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  const handleExploreClick = (item: string) => {
    if (item === "Home") {
      if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
      else router.push("/");
    } else if (item === "Who we are") {
      scrollOrNavigate("who-we-are");
    } else if (item === "What we do") {
      scrollOrNavigate("what-we-do");
    } else if (item === "Contact Us") {
      router.push("/ContactUs");
    }
  };

  return (
    <>
      <div className="w-full bg-[#F6F8F1] py-6">
        <div className="mx-auto w-full max-w-[1418px] px-6 lg:px-12">
          <div
            style={{
              background: "#fff",
              border: "1px solid #82B657",
              borderRadius: "30px",
              padding: "32px 24px",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-8">

              {/* COL 1: Logo + Name */}
              <div>
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="Church Logo" style={{ width: "70px", height: "62px", objectFit: "contain", flexShrink: 0 }} />
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "18px", color: "#2D5016", lineHeight: 1.2, margin: 0 }}>
                    Jesus Christ of Nazareth<br />One Fold Assembly
                  </p>
                </div>
              </div>

              {/* COL 2: Explore */}
              <div>
                <p style={labelStyle}>EXPLORE</p>
                <div className="flex flex-col gap-3">
                  {["Home", "Who we are", "What we do", "Contact Us"].map((item) => (
                    <button key={item} onClick={() => handleExploreClick(item)} style={navLinkStyle}>{item}</button>
                  ))}
                </div>
              </div>

              {/* COL 3: Follow Us */}
              <div>
                <p style={labelStyle}>STAY CONNECTED</p>
                <div className="flex gap-3">
                  <a href="https://web.facebook.com/profile.php?id=100093108589005" target="_blank" rel="noopener noreferrer" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#1877F2", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                  </a>
                  <a href="https://www.youtube.com/@JCNA777" target="_blank" rel="noopener noreferrer" style={{ width: "36px", height: "36px", borderRadius: "6px", background: "#FF0000", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", flexShrink: 0 }}>
                    <svg width="18" height="14" viewBox="0 0 24 18" fill="white"><path d="M22.54 2.74A2.83 2.83 0 0020.55.74C18.77.27 12 .27 12 .27S5.23.27 3.45.74A2.83 2.83 0 001.46 2.74 29.62 29.62 0 001 9a29.62 29.62 0 00.46 6.26 2.83 2.83 0 001.99 2 29.62 29.62 0 003.55.47C8.77 17.73 12 17.73 12 17.73s6.77 0 8.55-.47a2.83 2.83 0 001.99-2A29.62 29.62 0 0023 9a29.62 29.62 0 00-.46-6.26zM9.75 12.75V5.25L15.5 9l-5.75 3.75z" /></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <PrayerRequestModal isOpen={prayerOpen} onClose={() => setPrayerOpen(false)} />
    </>
  );
};

export default Footer;