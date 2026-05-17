"use client";

import Link from "next/link";

interface Props {
  onNavigate: (id: string) => void;
}

const TestimoniesPanel = ({ onNavigate }: Props) => {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8 pt-8 pb-10 lg:pt-[35px] lg:pb-[40px] lg:px-[30px]">
      <h2
        className="font-cormorant italic text-center"
        style={{ fontSize: "clamp(28px, 6vw, 40px)", color: "#2D5016", fontWeight: 500 }}
      >
        Testimonies
      </h2>

      <div className="flex justify-center my-3">
        <div className="w-[170px] h-[1px] bg-[#2D5016]" />
      </div>

      <p className="text-center font-dm mb-8" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F" }}>
        Real Stories. Real Faith. Real Transformation.
      </p>

      {/* Single Testimony Card */}
      <div className="flex flex-col items-center w-full max-w-[480px]">

        {/* YouTube Video */}
        <div className="w-full flex justify-center">
          <div
            className="w-full rounded-[30px] overflow-hidden border border-[#6AAD4F]"
            style={{ maxWidth: 480, aspectRatio: "16/9" }}
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
        </div>

        {/* Name */}
        <p
          className="mt-4 font-cormorant text-center"
          style={{ fontSize: "clamp(18px, 4vw, 23px)", color: "#2D5016", fontWeight: 500 }}
        >
          Beloved Sis. Rutchie Armenion
        </p>

        {/* Description */}
        <p
          className="mt-2 text-center font-dm"
          style={{ fontSize: "clamp(12px, 3vw, 13px)", color: "#4A7C2F", lineHeight: 1.6, maxWidth: 420 }}
        >
        this testimony reveals the life-changing power of God.
        </p>
      </div>

      {/* See More Link */}
      <div className="text-center mt-10">
        <Link
          href="/testimonies"
          className="font-dm"
          style={{ fontSize: "clamp(13px, 3vw, 16px)", color: "#4A7C2F", textDecoration: "none" }}
        >
          See more Testimonies →
        </Link>
      </div>
    </div>
  );
};

export default TestimoniesPanel;
