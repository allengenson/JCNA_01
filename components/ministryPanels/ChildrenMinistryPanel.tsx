"use client";

const ChildrenMinistryPanel = () => {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-[60px] pt-8 lg:pt-[83px] pb-10 lg:pb-[60px]">

      <div className="text-center mb-7">
        <h2
          className="font-cormorant italic"
          style={{ fontSize: "clamp(22px, 5vw, 36px)", color: "#2D5016", fontWeight: 400, marginBottom: 8 }}
        >
          Children's Ministry
        </h2>
        <div style={{ width: 200, height: 1, background: "#2D5016", margin: "0 auto 10px" }} />
        <p className="font-dm" style={{ fontSize: "clamp(12px, 2.5vw, 13px)", color: "#4A7C2F" }}>
          Nurturing young hearts to know, love, and follow God.
        </p>
      </div>

      {/* Image replacing the video placeholder */}
      <div
        className="w-full mb-8 overflow-hidden"
        style={{ maxWidth: 315, border: "1px solid #82B657", borderRadius: 20, height: "clamp(140px, 40vw, 220px)" }}
      >
        <img
          src="/Children/2.jpg"
          alt="Children's Ministry"
          className="w-full h-full object-cover"
          style={{ borderRadius: 20 }}
        />
      </div>

      <p className="font-dm text-center w-full mb-7" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.8, letterSpacing: "0.02em", maxWidth: 520 }}>
        The Children's Ministry is dedicated to teaching kids about God's Word in a fun, safe, and
        engaging way. It helps them build a strong spiritual foundation through Bible lessons, worship,
        and activities designed for their age. This ministry encourages children to develop faith,
        kindness, and obedience to God. It also supports their growth as they learn to walk in God's
        truth from an early age.
      </p>

      <p className="font-dm italic text-center w-full" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.75, letterSpacing: "0.01em", maxWidth: 520 }}>
        Train up a child in the way he should go; and when he is old, he will not depart from it.&nbsp;
        <span style={{ fontStyle: "normal", fontWeight: 600 }}>Proverbs 22:6</span>
      </p>
    </div>
  );
};

export default ChildrenMinistryPanel;