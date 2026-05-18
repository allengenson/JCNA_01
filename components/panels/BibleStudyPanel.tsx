"use client";

interface Props {
  onNavigate: (id: string) => void;
}

const BibleStudyPanel = ({ onNavigate }: Props) => {
  return (
    <div className="flex flex-col items-center w-full">

      {/* subtitle */}
      <p
        className="font-cormorant italic text-center mb-6"
        style={{ fontSize: "clamp(14px, 2.8vw, 17px)", color: "#D4A017", lineHeight: 1.5 }}
      >
        "God's Word, studied for real growth."
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
          title="Bible Study Video"
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
        Bible study is the intentional reading and examination of God's Word to understand His truth more deeply. It helps believers grow in knowledge, faith, and wisdom, and allows individuals to reflect on Scripture and apply its teachings to daily life. It encourages spiritual discipline, discernment, and obedience to God's will, strengthening one's relationship with Him through deeper understanding.
      </p>

      {/* Bible verse */}
      <p
        className="font-cormorant italic text-center"
        style={{ fontSize: "clamp(14px, 2.8vw, 17px)", color: "#D4A017", lineHeight: 1.75, maxWidth: 500 }}
      >
        "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth."{" "}
        <span style={{ fontStyle: "normal", fontWeight: 600, color: "#2D5016" }}>— 2 Timothy 2:15</span>
      </p>

    </div>
  );
};

export default BibleStudyPanel;
