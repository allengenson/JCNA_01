"use client";

interface Props {
  onNavigate: (id: string) => void;
}

const BibleStudyPanel = ({ onNavigate }: Props) => {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8 pt-8 pb-10 lg:pt-[35px] lg:pb-[40px] lg:px-[30px]">

      {/* Title */}
      <h2
        className="font-cormorant italic text-center"
        style={{ fontSize: "clamp(28px, 6vw, 40px)", color: "#2D5016", fontWeight: 500 }}
      >
        Bible Study
      </h2>

      <div className="flex justify-center my-3">
        <div className="w-[170px] h-[1px] bg-[#2D5016]" />
      </div>

      <p className="text-center font-dm mb-8" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F" }}>
        God's Word, studied for real growth.
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
        Bible study is the intentional reading and examination of God's Word to understand His truth more deeply.
        It helps believers grow in knowledge, faith, and wisdom. It allows individuals to reflect on Scripture and
        apply its teachings to daily life. It encourages spiritual discipline, discernment, and obedience to God's will.
        It also strengthens one's relationship with Him through deeper understanding.
      </p>

      {/* Bible verse */}
      <p
        className="font-cormorant italic text-center mt-8"
        style={{ fontSize: "clamp(14px, 3vw, 17px)", color: "#D4A017", lineHeight: 1.7, maxWidth: 520 }}
      >
        Study to shew thyself approved unto God, a workman that needeth not to be ashamed,
        rightly dividing the word of truth.{" "}
        <span style={{ fontStyle: "normal", fontWeight: 600 }}>2 Timothy 2:15</span>
      </p>

    </div>
  );
};

export default BibleStudyPanel;
