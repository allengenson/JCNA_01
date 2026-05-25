"use client";

interface Props {
  onNavigate: (id: string) => void;
}

const TithesPanel = ({ onNavigate }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-8 lg:gap-10">

      {/* Left — Video */}
      <div
        className="w-full lg:flex-1 rounded-[20px] overflow-hidden flex-shrink-0"
        style={{ border: "1px solid #6AAD4F", aspectRatio: "16/9" }}
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

      {/* Right — Text */}
      <div className="w-full lg:flex-1 flex flex-col justify-center">

        <p
          className="font-dm text-center lg:text-left mb-6"
          style={{ fontSize: "clamp(12px, 2.5vw, 14px)", color: "#4A7C2F", lineHeight: 1.85 }}
        >
  Tithes and Love Offering is a part of the worship service where we praise and glorify the Lord through our blessings and resources. Members faithfully offer a portion of their income, with tithes commonly being ten percent, while love offerings are given voluntarily according to one’s heart and ability. This act of giving is done with gratitude, faith, and devotion to God.

        </p>

        <p
          className="font-cormorant italic text-center lg:text-left"
          style={{ fontSize: "clamp(14px, 2.8vw, 17px)", color: "#D4A017", lineHeight: 1.75 }}
        >
          "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver."{" "}
          <span style={{ fontStyle: "normal", fontWeight: 600, color: "#2D5016" }}>— 2 Corinthians 9:7</span>
        </p>
      </div>

    </div>
  );
};

export default TithesPanel;
