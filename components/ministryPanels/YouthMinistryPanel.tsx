"use client";

const YouthMinistryPanel = () => {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-[60px] pt-8 lg:pt-[83px] pb-10 lg:pb-[60px]">

      <div className="text-center mb-7">
        <h2
          className="font-cormorant italic"
          style={{ fontSize: "clamp(22px, 5vw, 36px)", color: "#2D5016", fontWeight: 400, marginBottom: 8 }}
        >
          Youth Ministry
        </h2>
        <div style={{ width: 200, height: 1, background: "#2D5016", margin: "0 auto 10px" }} />
        <p className="font-dm" style={{ fontSize: "clamp(12px, 2.5vw, 13px)", color: "#4A7C2F" }}>
          Empowering the next generation to grow in faith and purpose.
        </p>
      </div>

      {/* Single image */}
      <div
        className="w-full mb-8 overflow-hidden"
        style={{
          maxWidth: 480,
          border: "1px solid #82B657",
          borderRadius: 20,
          height: "clamp(190px, 54vw, 290px)",
        }}
      >
        <img
          src="/gospel/gospel 1.jpg"
          alt="Youth Ministry"
          className="w-full h-full object-cover"
          style={{ borderRadius: 20 }}
        />
      </div>

      <p className="font-dm text-center w-full mb-7" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.8, letterSpacing: "0.02em", maxWidth: 520 }}>
        The Youth Ministry is focused on guiding young people to develop a strong and personal
        relationship with God. It provides a space for fellowship, discipleship, and spiritual growth
        through Bible study, worship, and activities. This ministry helps youth discover their gifts
        and use them for God's glory. It also encourages them to live boldly in faith while staying
        grounded in God's Word.
      </p>

      <p className="font-dm italic text-center w-full" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.75, letterSpacing: "0.01em", maxWidth: 520 }}>
        Don't let anyone look down on you because you are young, but set an example for the believers…&nbsp;
        <span style={{ fontStyle: "normal", fontWeight: 600 }}>1 Timothy 4:12</span>
      </p>
    </div>
  );
};

export default YouthMinistryPanel;