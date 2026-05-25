"use client";

import Link from "next/link";

interface Props {
  onNavigate: (id: string) => void;
}

const PreachingPanel = ({ onNavigate }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-8 lg:gap-10">

      {/* Left — Video */}
      <div
        className="w-full lg:flex-1 rounded-[20px] overflow-hidden flex-shrink-0"
        style={{ border: "1px solid #6AAD4F", aspectRatio: "16/9" }}
      >
        <iframe
          src="https://www.youtube.com/embed/p3LQ91OYZjw?si=lXKM7uPWbsOPc82i"
          className="w-full h-full"
          style={{ border: "none", display: "block" }}
          title="Testimony of Beloved Sis. Rutchie Armenion"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* Right — Text */}
      <div className="w-full lg:flex-1 flex flex-col justify-center">
        

        <p
          className="font-cormorant text-center lg:text-left"
          style={{ fontSize: "clamp(18px, 3.5vw, 24px)", color: "#2D5016", fontWeight: 600, marginBottom: "6px" }}
        >
          Most o=imprtant part of the worship is this where the preacher teach 
        </p>

        <p
          className="font-dm text-center lg:text-left mb-8"
          style={{ fontSize: "clamp(12px, 2.5vw, 14px)", color: "#4A7C2F", lineHeight: 1.75 }}
        >
          This testimony reveals the life-changing power of God — a story of grace, healing, and unwavering faith that will stir your heart and strengthen your belief in His promises.
        </p>

        <div className="flex justify-center lg:justify-start">
          <Link
            href="/testimonies"
            className="font-dm inline-flex items-center gap-2"
            style={{
              fontSize: "clamp(12px, 2.5vw, 14px)",
              color: "#2D5016",
              textDecoration: "none",
              borderBottom: "1px solid #C5D09B",
              paddingBottom: "2px",
              letterSpacing: "0.08em",
              transition: "color 200ms ease, border-color 200ms ease",
            }}
          >
            See more Testimonies
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default PreachingPanel;
