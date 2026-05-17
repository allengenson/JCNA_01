"use client";

interface Props {
  onNavigate: (id: string) => void;
}

const PreachingPanel = ({ onNavigate }: Props) => {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8 pt-8 pb-10 lg:pt-[35px] lg:pb-[40px] lg:px-[30px]">

      {/* Title */}
      <h2
        className="font-cormorant italic text-center"
        style={{ fontSize: "clamp(28px, 6vw, 40px)", color: "#2D5016", fontWeight: 500 }}
      >
        Preaching
      </h2>

      <div className="flex justify-center my-3">
        <div className="w-[170px] h-[1px] bg-[#2D5016]" />
      </div>

      <p className="text-center font-dm mb-8" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F" }}>
        God's Word bringing real transformation.
      </p>

      {/* YouTube Video */}
      <div className="w-full flex justify-center mb-2">
        <div
          className="w-full rounded-[30px] overflow-hidden border border-[#6AAD4F]"
          style={{ maxWidth: 480, aspectRatio: "16/9" }}
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
      </div>

      {/* Description */}
      <p
        className="font-dm text-center mt-8"
        style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.8, maxWidth: 560 }}
      >
        Preaching is the act of proclaiming God's Word to teach and guide people. It communicates biblical
        truth clearly and faithfully. It helps believers grow deeper in their relationship with Him. It encourages
        spiritual growth, correction, and obedience. It also calls both believers and non-believers to respond to God's truth.
      </p>

      {/* Bible verse */}
      <p
        className="font-cormorant italic text-center mt-8"
        style={{ fontSize: "clamp(14px, 3vw, 17px)", color: "#D4A017", lineHeight: 1.7, maxWidth: 520 }}
      >
        For after that in the wisdom of God the world by wisdom knew not God, it pleased God by the
        foolishness of preaching to save them that believe.{" "}
        <span style={{ fontStyle: "normal", fontWeight: 600 }}>1 Corinthians 1:21</span>
      </p>

    </div>
  );
};

export default PreachingPanel;
