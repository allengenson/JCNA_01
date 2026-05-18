"use client";

interface Props {
  onNavigate: (id: string) => void;
}

const TithesPanel = ({ onNavigate }: Props) => {
  return (
    <div className="flex flex-col items-center w-full">

      {/* subtitle */}
      <p
        className="font-cormorant italic text-center mb-6"
        style={{ fontSize: "clamp(14px, 2.8vw, 17px)", color: "#D4A017", lineHeight: 1.5 }}
      >
        "Giving with love, faith, and gratitude to God."
      </p>

      {/* YouTube Video */}
      <div
        className="w-full rounded-[20px] overflow-hidden border border-[#6AAD4F] mb-6"
        style={{ maxWidth: 540, aspectRatio: "16/9" }}
      >
        <iframe
          src="https://www.youtube.com/embed/a95xvd29bhg?si=B6KDBflwEuUP1R3q"
          className="w-full h-full"
          style={{ border: "none", display: "block" }}
          title="Tithes Love and Offering Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* description */}
      <p
        className="font-dm text-center mb-6"
        style={{ fontSize: "clamp(12px, 2.5vw, 14px)", color: "#4A7C2F", lineHeight: 1.85, maxWidth: 520 }}
      >
        Tithes, love, and offering are acts of giving to God as an expression of gratitude, faith, and obedience. They acknowledge that everything we have comes from Him, support the work of the ministry, and help those in need. They reflect a willing and cheerful heart in serving God, deepening trust in His provision and blessings.
      </p>

      {/* Bible verse */}
      <p
        className="font-cormorant italic text-center"
        style={{ fontSize: "clamp(14px, 2.8vw, 17px)", color: "#D4A017", lineHeight: 1.75, maxWidth: 500 }}
      >
        "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver."{" "}
        <span style={{ fontStyle: "normal", fontWeight: 600, color: "#2D5016" }}>— 2 Corinthians 9:7</span>
      </p>

    </div>
  );
};

export default TithesPanel;
