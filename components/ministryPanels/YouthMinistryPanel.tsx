"use client";

const YouthMinistryPanel = () => {
  return (
    <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-8 lg:px-[60px] pt-8 lg:pt-[33px] pb-10 lg:pb-[60px] gap-8 lg:gap-10">

      {/* Left — Image */}
      <div
        className="w-full lg:flex-1 flex-shrink-0 overflow-hidden"
        style={{ border: "1px solid #82B657", borderRadius: 20, height: "clamp(190px, 54vw, 290px)" }}
      >
        <img
          src="/gospel/1.jpg"
          alt="Youth Ministry"
          className="w-full h-full object-cover"
          style={{ borderRadius: 20 }}
        />
      </div>

      {/* Right — Text */}
      <div className="w-full lg:flex-1 flex flex-col justify-center">
        <p className="font-dm text-center lg:text-left mb-7" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.8, letterSpacing: "0.02em" }}>
          The Youth Ministry is focused on guiding young people to develop a strong and personal
          relationship with God. It provides a space for fellowship, discipleship, and spiritual growth
          through Bible study, worship, and activities. This ministry helps youth discover their gifts
          and use them for God's glory. It also encourages them to live boldly in faith while staying
          grounded in God's Word.
        </p>
        <p className="font-dm italic text-center lg:text-left" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.75, letterSpacing: "0.01em" }}>
          Don't let anyone look down on you because you are young, but set an example for the believers…&nbsp;
          <span style={{ fontStyle: "normal", fontWeight: 600 }}>1 Timothy 4:12</span>
        </p>
      </div>

    </div>
  );
};

export default YouthMinistryPanel;
