"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const sections = [
  {
    icon: "🌿",
    title: "Purpose",
    text: "We exist to be the end-time one fold church of the One Shepherd — Jesus Christ (John 10:16). Born in 2015 from a conviction that the Bible alone is the final authority, JCNA was established to gather the lost, stand firm on sound doctrine, and pursue holiness inside and out.",
  },
  {
    icon: "🎯",
    title: "Mission",
    text: "To bring back lost souls and gather them into one fold — serving and glorifying the One True Shepherd through evangelizing, inviting, equipping, and teaching sound doctrine. Every member is called to be a light bearer and a consistent voice of the gospel, in season and out of season.",
  },
  {
    icon: "📖",
    title: "Doctrines",
    text: "We uphold the Holy Bible as inspired, infallible, and the absolute authority over all faith and conduct. We believe in One God revealed as Father, Son (Jesus Christ), and Holy Spirit — an Apostolic conviction. We affirm salvation by grace through faith, water baptism in Jesus' name, the baptism of the Holy Spirit, divine healing, and the resurrection and final judgment.",
  },
  {
    icon: "🤝",
    title: "Values and Culture",
    text: "Our life together is shaped by love, honesty, humility, kindness, faithfulness, self-control, and patience. We practice fervent prayer and fasting, generous giving (tithes, offerings, first fruits, and charity), and biblical holiness in conduct and lifestyle. All prophecy and revelation are filtered through the Word of God before being received.",
  },
  {
    icon: "👑",
    title: "Leadership",
    text: "Founded and led by Apostle Rebero Armenion, JCNA is governed by servant-leaders who exemplify integrity, holiness, and a Spirit-filled walk. The leadership team includes a Vice Chairman, Ministries Director, Secretary General, Choir Director, Music Director, Treasurer, Auditor, and Public Relations Officers — each committed to building the body of Christ.",
  },
];

export default function WhoWeArePage() {
  const heroRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((el, i) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(28px)";
        el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "#FAFDF5", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="px-4 sm:px-10 lg:px-20 pt-10 sm:pt-14 lg:pt-[60px]"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center w-full"
          style={{ maxWidth: "1260px", margin: "0 auto" }}
        >
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
              grow in Christ and are continually transformed to live out His
              love each day.
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
              src="/who-we-are.jpg"
              alt="Who We Are"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div
        style={{
          maxWidth: "1260px",
          margin: "48px auto",
          height: "1px",
          background: "rgba(197, 208, 155, 0.6)",
        }}
      />

      {/* ── SECTIONS GRID ── */}
      <section
        className="px-4 sm:px-10 lg:px-20 pb-16 lg:pb-[80px]"
        style={{ maxWidth: "1260px", margin: "0 auto" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
          {sections.map((section, i) => (
            <div
              key={i}
              ref={(el) => { sectionRefs.current[i] = el; }}
              className={
                section.title === "Leadership"
                  ? "sm:col-span-2 sm:max-w-[480px]"
                  : ""
              }
              style={{
                paddingLeft: "16px",
                borderLeft: "3px solid #C5D09B",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderLeftColor = "#2D5016";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderLeftColor = "#C5D09B";
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  style={{
                    fontSize: "22px",
                    display: "inline-block",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.transform = "scale(1.2) rotate(-5deg)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.transform = "scale(1) rotate(0deg)";
                  }}
                >
                  {section.icon}
                </span>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: "clamp(20px, 3vw, 26px)",
                    color: "#2D5016",
                    margin: 0,
                  }}
                >
                  {section.title}
                </h2>
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "13px",
                  color: "#4A7C2F",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
