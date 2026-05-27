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
      <div className="w-full bg-[#F6F8F1] py-5 reveal">
        <div className="mx-auto w-full max-w-[1418px] px-6 lg:px-12">
          <div className="bg-white border border-[#82B657] rounded-[24px] p-8 md:px-9 md:py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center reveal-children">

              {/* COL 1 */}
              <div className="flex flex-col items-center md:items-start gap-[14px] md:pl-10">
                <img src="/logo.png" alt="Church Logo" className="w-[150px] h-[150px] object-contain" />
                <p className="text-center md:text-left font-cormorant font-bold text-[24px] text-[#2D5016] leading-[1.35]">
                  Jesus Christ Of Nazareth<br />One Fold Assembly
                </p>
              </div>

              {/* COL 2 */}
              <div className="flex flex-col items-center justify-center h-auto min-h-max">
                <p className="font-dm font-medium text-[13px] tracking-[0.15em] text-[#D4A017] mb-[18px] text-center">
                  EXPLORE
                </p>
                <div className="flex flex-col items-center gap-[10px] md:hidden">
                  <div className="flex gap-[28px]">
                    {["Home", "Who we are"].map((item) => (
                      <button key={item} onClick={() => handleExploreClick(item)}
                        className="font-dm font-normal text-[14px] text-[#4A7C2F] bg-none border-none p-0 text-center cursor-pointer hover:text-[#2D5016]">
                        {item}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-[28px]">
                    {["What we do", "Contact Us"].map((item) => (
                      <button key={item} onClick={() => handleExploreClick(item)}
                        className="font-dm font-normal text-[14px] text-[#4A7C2F] bg-none border-none p-0 text-center cursor-pointer hover:text-[#2D5016]">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="hidden md:flex flex-row gap-[28px] items-center justify-center flex-wrap">
                  {["Home", "Who we are", "What we do", "Contact Us"].map((item) => (
                    <button key={item} onClick={() => handleExploreClick(item)}
                      className="font-dm font-normal text-[14px] text-[#4A7C2F] bg-none border-none p-0 text-center cursor-pointer hover:text-[#2D5016]">
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* COL 3 */}
              <div className="flex flex-col items-center md:items-start md:pl-[60px]">
                <p className="font-dm font-medium text-[13px] tracking-[0.15em] text-[#D4A017] mb-[14px]">
                  FOLLOW US
                </p>
                <div className="flex flex-col gap-[16px]">
                  <a href="https://web.facebook.com/profile.php?id=100093108589005" target="_blank" rel="noopener noreferrer"
                    className="no-underline flex items-center gap-[10px]">
                    <div className="w-[34px] h-[34px] rounded-full bg-[#1877F2] flex items-center justify-center flex-shrink-0">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </div>
                    <span className="font-dm text-[13px] font-medium text-[#2D5016] leading-[1.35]">
                      Jesus Christ of Nazareth<br />Onefold Assembly
                    </span>
                  </a>
                  <a href="https://www.youtube.com/@JCNA777" target="_blank" rel="noopener noreferrer"
                    className="no-underline flex items-center gap-[10px]">
                    <div className="w-[34px] h-[34px] rounded-[6px] bg-[#FF0000] flex items-center justify-center flex-shrink-0">
                      <svg width="17" height="13" viewBox="0 0 24 18" fill="white">
                        <path d="M22.54 2.74A2.83 2.83 0 0020.55.74C18.77.27 12 .27 12 .27S5.23.27 3.45.74A2.83 2.83 0 001.46 2.74 29.62 29.62 0 001 9a29.62 29.62 0 00.46 6.26 2.83 2.83 0 001.99 2 29.62 29.62 0 003.55.47C8.77 17.73 12 17.73 12 17.73s6.77 0 8.55-.47a2.83 2.83 0 001.99-2A29.62 29.62 0 0023 9a29.62 29.62 0 00-.46-6.26zM9.75 12.75V5.25L15.5 9l-5.75 3.75z" />
                      </svg>
                    </div>
                    <span className="font-dm text-[13px] font-medium text-[#2D5016] leading-[1.35]">
                      JCNA MINISTRY
                    </span>
                  </a>
                </div>
              </div>

            </div>

            <div className="reveal border-t border-[#E2EDD6] mt-[24px] pt-[16px] text-center">
              <p className="font-dm text-[12px] text-[#7A9A5C]">
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