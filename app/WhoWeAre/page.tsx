"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Container from "@/components/Container";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import OrgChart from "@/components/org";
import DoctrineContent from "@/components/doc";

// ── DOCTRINE SECTIONS ────────────────────────────────────────────────
const sections: {
  icon?: string;
  title: string;
  preview: string;
  wide?: boolean;
  content: React.ReactNode;
}[] = [
  {
    icon: "🌿",
    title: "Goals",
    preview:
      "Upholding sound doctrine, shining as light bearers, and sharing the gospel.",
    content: (
      <ul
        style={{
          margin: 0,
          padding: "0 0 0 18px",
          color: "#4A7C2F",
          fontSize: "13px",
          lineHeight: 1.9,
        }}
      >
        <li>
          To uphold sound doctrine and live a holy life in conduct, action, and
          morality.
        </li>
        <li>
          To be a light bearer in a dark world by means of showing the Christ
          like attitude.
        </li>
        <li>
          To share and impart the gospel of Christ to everyone in season and out
          of season.
        </li>
      </ul>
    ),
  },
  {
    icon: "🎯",
    title: "Mission",
    preview:
      "Gathering lost souls into the one fold to serve the One True Shepherd.",
    content: (
      <p
        style={{ margin: 0, color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}
      >
        To bring back the lost soul and gather together into the one fold church
        to serve and glorify the One True Shepherd Jesus Christ by means of
        evangelizing, inviting, equipping and teaching the sound doctrine.
      </p>
    ),
  },
  {
    icon: "📖",
    title: "Doctrines",
    preview: "The Bible, One God, Salvation, Baptism, Divine Healing, and more.",
    wide: true,
    content: <DoctrineContent />,
  },
  {
    title: "Values and Culture",
    preview:
      "Love, honesty, humility, and a life shaped by prayer, giving, and holiness.",
    content: (
      <div style={{ color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}>
        <p style={{ margin: "0 0 8px", fontWeight: 600, color: "#2D5016" }}>
          Core Values
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "14px",
          }}
        >
          {[
            "Love",
            "Honesty",
            "Humility",
            "Patience",
            "Kindness",
            "Faithfulness",
            "Self-Control",
            "Gentleness",
            "Obedience",
            "Joy",
            "Peace",
            "Respect",
          ].map((v) => (
            <span
              key={v}
              style={{
                background: "#EAF3DE",
                color: "#2D5016",
                borderRadius: "20px",
                padding: "3px 12px",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              {v}
            </span>
          ))}
        </div>
        <p style={{ margin: "0 0 8px", fontWeight: 600, color: "#2D5016" }}>
          Cultural Practices
        </p>
        <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
          <li>Prayer and fasting</li>
          <li>Giving — tithes, offerings, first fruits, and charity</li>
          <li>Biblical dress code and food standards</li>
          <li>Observance of the Sabbath / day of worship</li>
          <li>
            All prophecy and revelation filtered through the Word of God
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Leadership",
    preview:
      "Servant-leaders committed to integrity, holiness, and building the body of Christ.",
    wide: true,
    content: (
      <div style={{ color: "#4A7C2F", fontSize: "13px", lineHeight: 1.9 }}>
        <p style={{ margin: "0 0 20px" }}>
          Founded and led by{" "}
          <strong style={{ color: "#2D5016" }}>
            Apostle Rebero L. Armenion
          </strong>{" "}
          (Chairman &amp; Chief Executive), JCNA is governed by servant-leaders
          who exemplify integrity, holiness, and a Spirit-filled walk. The Vice
          Chairman is{" "}
          <strong style={{ color: "#2D5016" }}>
            Pastor Benjamen L. Armenion, Jr.
          </strong>
          , supported by directors overseeing Ministries, Choir, Music,
          Membership, Administration, Finance, and Public Relations.
        </p>
        <OrgChart />
        <p
          style={{
            margin: "12px 0 0",
            fontSize: "12px",
            color: "#7AAB50",
            textAlign: "center",
          }}
        >
          Organizational Structure — Jesus Christ of Nazareth One Fold Assembly
        </p>
      </div>
    ),
  },
];

// ── SECTION CARD ─────────────────────────────────────────────────────
function SectionCard({ section }: { section: (typeof sections)[0] }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.style.maxHeight = open
        ? bodyRef.current.scrollHeight + "px"
        : "0px";
    }
  }, [open]);

  return (
    <div
      style={{
        background: "#fff",
        border: `1px solid ${open ? "#4A7C2F" : "#E2EAC8"}`,
        borderRadius: "14px",
        padding: "20px 22px",
        cursor: "pointer",
        transition: "border-color 0.25s, box-shadow 0.25s",
        boxShadow: open ? "0 6px 24px rgba(45,80,22,0.10)" : "none",
      }}
      onClick={() => setOpen((v) => !v)}
      onMouseEnter={(e) => {
        if (!open)
          (e.currentTarget as HTMLDivElement).style.borderColor = "#A3C57A";
      }}
      onMouseLeave={(e) => {
        if (!open)
          (e.currentTarget as HTMLDivElement).style.borderColor = "#E2EAC8";
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}
        >
          {section.icon && (
            <span style={{ fontSize: "22px", flexShrink: 0 }}>
              {section.icon}
            </span>
          )}
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(18px, 2.5vw, 24px)",
                color: "#2D5016",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {section.title}
            </h2>
            {!open && (
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  color: "#7AAB50",
                  margin: "4px 0 0",
                  lineHeight: 1.5,
                }}
              >
                {section.preview}
              </p>
            )}
          </div>
        </div>
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            background: open ? "#2D5016" : "#EAF3DE",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background 0.25s, transform 0.3s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            color: open ? "#fff" : "#2D5016",
            fontSize: "22px",
            fontWeight: 300,
            lineHeight: 1,
            userSelect: "none",
          }}
          aria-label={open ? "Collapse" : "Expand"}
        >
          +
        </div>
      </div>

      <div
        ref={bodyRef}
        style={{
          maxHeight: "0px",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <div
          style={{
            paddingTop: "16px",
            borderTop: "1px solid #E2EAC8",
            marginTop: "14px",
            overflowX: "auto",
          }}
        >
          <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {section.content}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── PAGE ─────────────────────────────────────────────────────────────
export default function WhoWeArePage() {
  const heroRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      hero.style.opacity = "0";
      hero.style.transform = "translateY(24px)";
      requestAnimationFrame(() => {
        hero.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLDivElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((el, i) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(28px)";
        el.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "#FAFDF5", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="pt-10 sm:pt-14 lg:pt-[60px]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center w-full">
            <div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  letterSpacing: "0.15em",
                  color: "#D4A017",
                  marginBottom: "12px",
                }}
              >
                ABOUT US
              </p>
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
                Who We Are
              </h1>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(13px, 2vw, 15px)",
                  color: "#4A7C2F",
                  lineHeight: 1.8,
                  maxWidth: "420px",
                }}
              >
                We are a Christ-centered community devoted to growing in faith,
                living in truth, and sharing God&apos;s love with others. We gather as
                one body, united in purpose and guided by His Word. Together, we
                grow in Christ and are continually transformed to live out His love
                each day.
              </p>
            </div>

            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 40px rgba(45,80,22,0.15)",
                width: "100%",
                aspectRatio: "16/10",
                position: "relative",
                background: "#C5D09B",
              }}
            >
              <Image
                src="/1.jpg"
                alt="Who We Are"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* DIVIDER */}
      <Container>
        <div
          style={{
            margin: "48px 0",
            height: "1px",
            background: "rgba(197, 208, 155, 0.6)",
          }}
        />
      </Container>

      {/* SECTION CARDS */}
      <section className="pb-16 lg:pb-[80px]">
        <Container>
          <div className="flex flex-col gap-4">
            {sections.map((section, i) => (
              <div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
              >
                <SectionCard section={section} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
