"use client";

interface Props {
  onNavigate: (id: string) => void;
}

const PreachingPanel = ({ onNavigate }: Props) => {
  return (
    <div className="flex flex-col items-center w-full">

      {/* subtitle */}
      <p
        className="font-cormorant italic text-center mb-6"
        style={{ fontSize: "clamp(14px, 2.8vw, 17px)", color: "#D4A017", lineHeight: 1.5 }}
      >
        "God's Word bringing real transformation."
      </p>

      {/* YouTube Video */}
      <div
        className="w-full rounded-[20px] overflow-hidden border border-[#6AAD4F] mb-6"
        style={{ maxWidth: 540, aspectRatio: "16/9" }}
      >
        <iframe
          src="https://www.youtube.com/embed/p3LQ91OYZjw?si=f_2wcwPT6DFDx-at"
          className="w-full h-full"
          style={{ border: "none", display: "block" }}
          title="Preaching Video"
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
        Preaching is the act of proclaiming God's Word to teach and guide people. It communicates biblical truth clearly and faithfully. It helps believers grow deeper in their relationship with Him, encourages spiritual growth, correction, and obedience, and calls both believers and non-believers to respond to God's truth.
      </p>

      {/* Bible verse */}
      <p
        className="font-cormorant italic text-center"
        style={{ fontSize: "clamp(14px, 2.8vw, 17px)", color: "#D4A017", lineHeight: 1.75, maxWidth: 500 }}
      >
        "For after that in the wisdom of God the world by wisdom knew not God, it pleased God by the foolishness of preaching to save them that believe."{" "}
        <span style={{ fontStyle: "normal", fontWeight: 600, color: "#2D5016" }}>— 1 Corinthians 1:21</span>
      </p>

    </div>
  );
};

export default PreachingPanel;
