"use client";

interface Props {
  onNavigate: (id: string) => void;
}

const TithesPanel = ({ onNavigate }: Props) => {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8 pt-8 pb-10 lg:pt-[35px] lg:pb-[40px] lg:px-[30px]">

      {/* Title */}
      <h2
        className="font-cormorant italic text-center"
        style={{ fontSize: "clamp(28px, 6vw, 40px)", color: "#2D5016", fontWeight: 500 }}
      >
        Tithes Love and Offering
      </h2>

      <div className="flex justify-center my-3">
        <div className="w-[170px] h-[1px] bg-[#2D5016]" />
      </div>

      <p className="text-center font-dm mb-8" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F" }}>
        Giving with love, faith, and gratitude to God.
      </p>

      {/* YouTube Video */}
      <div className="w-full flex justify-center mb-2">
        <div
          className="w-full rounded-[30px] overflow-hidden border border-[#6AAD4F]"
          style={{ maxWidth: 480, aspectRatio: "16/9" }}
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
      </div>

      {/* Description */}
      <p
        className="font-dm text-center mt-8"
        style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.8, maxWidth: 560 }}
      >
        Tithes, love, and offering are acts of giving to God as an expression of gratitude, faith, and obedience.
        They acknowledge that everything we have comes from Him. They support the work of the ministry and help
        those in need. They reflect a willing and cheerful heart in serving God. They also deepen trust in His
        provision and blessings.
      </p>

      {/* Bible verse */}
      <p
        className="font-cormorant italic text-center mt-8"
        style={{ fontSize: "clamp(14px, 3vw, 17px)", color: "#D4A017", lineHeight: 1.7, maxWidth: 520 }}
      >
        Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity:
        for God loveth a cheerful giver.{" "}
        <span style={{ fontStyle: "normal", fontWeight: 600 }}>2 Corinthians 9:7</span>
      </p>

    </div>
  );
};

export default TithesPanel;
