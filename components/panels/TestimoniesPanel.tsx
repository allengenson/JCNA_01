"use client";

import Link from "next/link";

interface Props {
  onNavigate: (id: string) => void;
}

const TestimoniesPanel = ({ onNavigate }: Props) => {
  return (
    <div className="flex flex-col items-center w-full">

      {/* subtitle */}
      <p
        className="font-cormorant italic text-center mb-6"
        style={{ fontSize: "clamp(14px, 2.8vw, 17px)", color: "#D4A017", lineHeight: 1.5 }}
      >
        "Real Stories. Real Faith. Real Transformation."
      </p>

      {/* YouTube Video */}
      <div
        className="w-full rounded-[20px] overflow-hidden border border-[#6AAD4F] mb-6"
        style={{ maxWidth: 540, aspectRatio: "16/9" }}
      >
        <iframe
          src="https://www.youtube.com/embed/ne0QFV6YMmQ?si=IShq7lpuPYZ7OHTI"
          className="w-full h-full"
          style={{ border: "none", display: "block" }}
          title="Testimony of Beloved Sis. Rutchie Armenion"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* name */}
      <p
        className="font-cormorant text-center"
        style={{ fontSize: "clamp(18px, 3.5vw, 24px)", color: "#2D5016", fontWeight: 600, marginBottom: "6px" }}
      >
        Beloved Sis. Rutchie Armenion
      </p>

      {/* description */}
      <p
        className="font-dm text-center mb-8"
        style={{ fontSize: "clamp(12px, 2.5vw, 14px)", color: "#4A7C2F", lineHeight: 1.75, maxWidth: 480 }}
      >
        This testimony reveals the life-changing power of God — a story of grace, healing, and unwavering faith that will stir your heart and strengthen your belief in His promises.
      </p>

      {/* see more link */}
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
  );
};

export default TestimoniesPanel;
