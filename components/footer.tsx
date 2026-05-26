"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import PrayerRequestModal from "./PrayerRequestModal";

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
      <div className="w-full bg-[#F6F8F1] py-5">
        <div className="mx-auto w-full max-w-[1418px] px-6 lg:px-12">
          <div
            style={{
              background: "#fff",
              border: "1px solid #82B657",
              borderRadius: "24px",
              padding: "32px 36px",
            }}
          >
            {/* Main 3-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

              {/* COL 1: Logo + Full Church Name */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
                <img
                  src="/logo.png"
                  alt="Church Logo"
                  style={{ width: "120px", height: "110px", objectFit: "contain" }}
                />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    color: "#2D5016",
                    lineHeight: 1.35,
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  Jesus Christ Of Nazareth<br />One Fold Assembly
                </p>
              </div>

              {/* COL 2: Explore Links — vertical stack */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "13px",
                    letterSpacing: "0.15em",
                    color: "#D4A017",
                    margin: "0 0 14px 0",
                  }}
                >
                  EXPLORE
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {["Home", "Who we are", "What we do", "Contact Us"].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleExploreClick(item)}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#4A7C2F",
                        cursor: "pointer",
                        background: "none",
                        border: "none",
                        padding: 0,
                        textAlign: "left",
                        display: "block",
                        width: "100%",
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* COL 3: Stay Connected */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "13px",
                    letterSpacing: "0.15em",
                    color: "#D4A017",
                    margin: "0 0 14px 0",
                  }}
                >
                  STAY CONNECTED
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

                  {/* Facebook */}
                  <a
                    href="https://web.facebook.com/profile.php?id=100093108589005"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        background: "#1877F2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#2D5016",
                        lineHeight: 1.35,
                      }}
                    >
                      Jesus Christ of Nazareth<br />Onefold Assembly
                    </span>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@JCNA777"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "6px",
                        background: "#FF0000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="17" height="13" viewBox="0 0 24 18" fill="white">
                        <path d="M22.54 2.74A2.83 2.83 0 0020.55.74C18.77.27 12 .27 12 .27S5.23.27 3.45.74A2.83 2.83 0 001.46 2.74 29.62 29.62 0 001 9a29.62 29.62 0 00.46 6.26 2.83 2.83 0 001.99 2 29.62 29.62 0 003.55.47C8.77 17.73 12 17.73 12 17.73s6.77 0 8.55-.47a2.83 2.83 0 001.99-2A29.62 29.62 0 0023 9a29.62 29.62 0 00-.46-6.26zM9.75 12.75V5.25L15.5 9l-5.75 3.75z" />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#2D5016",
                        lineHeight: 1.35,
                      }}
                    >
                      JCNA MINISTRY
                    </span>
                  </a>

                </div>
              </div>

            </div>

            {/* Divider + Copyright */}
            <div
              style={{
                borderTop: "1px solid #E2EDD6",
                marginTop: "24px",
                paddingTop: "16px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  color: "#7A9A5C",
                  margin: 0,
                }}
              >
                © {new Date().getFullYear()} Jesus Christ Of Nazareth One Fold Assembly. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </div>

      <PrayerRequestModal isOpen={prayerOpen} onClose={() => setPrayerOpen(false)} />
    </>
  );
};

export default Footer;
