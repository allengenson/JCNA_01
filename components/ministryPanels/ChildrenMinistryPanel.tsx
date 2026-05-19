"use client";

const ChildrenMinistryPanel = () => {
  return (
    <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-8 lg:px-[60px] pt-8 lg:pt-[33px] pb-10 lg:pb-[60px] gap-8 lg:gap-10">

      {/* Left — Image */}
      <div
        className="w-full lg:flex-1 flex-shrink-0 overflow-hidden"
        style={{ border: "1px solid #82B657", borderRadius: 20, height: "clamp(190px, 54vw, 290px)" }}
      >
        <img
          src="/Children/2.jpg"
          alt="Children's Ministry"
          className="w-full h-full object-cover"
          style={{ borderRadius: 20 }}
        />
      </div>

      {/* Right — Text */}
      <div className="w-full lg:flex-1 flex flex-col justify-center">
        <p className="font-dm text-center lg:text-left mb-7" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.8, letterSpacing: "0.02em" }}>
          The Children's Ministry is dedicated to teaching kids about God's Word in a fun, safe, and
          engaging way. It helps them build a strong spiritual foundation through Bible lessons, worship,
          and activities designed for their age. This ministry encourages children to develop faith,
          kindness, and obedience to God. It also supports their growth as they learn to walk in God's
          truth from an early age.
        </p>
        <p className="font-dm italic text-center lg:text-left" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.75, letterSpacing: "0.01em" }}>
          Train up a child in the way he should go; and when he is old, he will not depart from it.&nbsp;
          <span style={{ fontStyle: "normal", fontWeight: 600 }}>Proverbs 22:6</span>
        </p>
      </div>

    </div>
  );
};

export default ChildrenMinistryPanel;
