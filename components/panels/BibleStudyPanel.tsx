"use client";

interface Props {
  onNavigate: (id: string) => void;
}

const BibleStudyPanel = ({ onNavigate }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-8 lg:gap-10">

      {/* Left — Video */}
      <div
        className="w-full lg:flex-1 rounded-[20px] overflow-hidden flex-shrink-0"
        style={{ border: "1px solid #6AAD4F", aspectRatio: "16/9" }}
      >
   <iframe
  src="https://www.youtube.com/embed/2Qm7kDJ-B0M?si=W23554QDyN2otuXo"
  className="w-full h-full"
  style={{ border: "none", display: "block" }}
  title="YouTube video player"
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
        In this section, we dedicate around 30 minutes to studying and learning more about the Holy Bible. Assigned preachers lead this part of the worship service by selecting a topic for the day and explaining it clearly to the congregation. The main goal is to deepen understanding, strengthen faith, and provide spiritual refreshment in every scheduled worship service.

        </p>

        <p
          className="font-cormorant italic text-center lg:text-left"
          style={{ fontSize: "clamp(14px, 2.8vw, 17px)", color: "#D4A017", lineHeight: 1.75 }}
        >
          "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth."{" "}
          <span style={{ fontStyle: "normal", fontWeight: 600, color: "#2D5016" }}>— 2 Timothy 2:15</span>
        </p>
      </div>

    </div>
  );
};

export default BibleStudyPanel;
