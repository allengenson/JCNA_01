"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const menuItems = ["HOME", "WHO WE ARE", "WHAT WE DO", "CONTACT US"];

/* ─── Navbar ─────────────────────────────────────────────────── */
const Navbar = () => {
  const [open, setOpen] = useState(false);
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

  const scrollOrNavigate = (id: string) => {
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  const handleClick = (item: string) => {
    setOpen(false);
    setActiveItem(item);

    if (item === "HOME") {
      if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
      else router.push("/");
      return;
    }
    if (item === "WHO WE ARE") {
      scrollOrNavigate("who-we-are");
      return;
    }
    if (item === "WHAT WE DO") {
      scrollOrNavigate("what-we-do");
      return;
    }
    if (item === "CONTACT US") {
      router.push("/ContactUs");
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
          .nb-root, .nb-logo, .nb-ditem, .nb-link::after, .nb-burger span {
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
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;