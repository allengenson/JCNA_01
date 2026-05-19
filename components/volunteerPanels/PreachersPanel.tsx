"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  "/preacher/preacher 1.jpg",
  "/preacher/preachers.jpg",
];

const PreachersPanel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  const SliderContent = () => (
    <>
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Preacher ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full"
        style={{ width: 28, height: 28, background: "rgba(255,255,255,0.75)", border: "1px solid #82B657" }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <polyline points="7,1 3,5 7,9" stroke="#2D5016" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full"
        style={{ width: 28, height: 28, background: "rgba(255,255,255,0.75)", border: "1px solid #82B657" }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <polyline points="3,1 7,5 3,9" stroke="#2D5016" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 16 : 6,
              height: 6,
              borderRadius: 9999,
              background: i === current ? "#2D5016" : "rgba(255,255,255,0.75)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "width 300ms ease, background 300ms ease",
            }}
          />
        ))}
      </div>
    </>
  );

  const sliderStyle = {
    height: "clamp(180px, 40vw, 293px)",
    border: "1px solid #82B657",
    borderRadius: 30,
  };

  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-[60px] pt-8 lg:pt-[33px] pb-10 lg:pb-[60px]">
      <div className="mt-0 w-full flex flex-col lg:flex-row lg:items-start lg:justify-center gap-6 lg:gap-0">

        {/* Slider — mobile only (shown first) */}
        <div className="w-full relative overflow-hidden lg:hidden" style={sliderStyle}>
          <SliderContent />
        </div>

        <div className="w-full lg:w-[510px] lg:flex-shrink-0">
          <p className="font-dm" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.8, letterSpacing: "0.03em" }}>
            Preachers are called to teach and share God's Word. They guide, correct,
            and encourage the church through biblical messages, helping people grow
            in faith. They also serve as role models, living out the teachings they
            preach. Through their faithful service, they help strengthen unity and
            spiritual maturity within the body of believers.
          </p>

          <div
            className="mt-10 lg:mt-[77px] w-full"
            style={{ background: "#FFFFFF", border: "1px solid #82B657", borderTopLeftRadius: 15, borderBottomLeftRadius: 25, borderTopRightRadius: 30, borderBottomRightRadius: 30, padding: "14px 20px" }}
          >
            <p className="font-dm italic" style={{ fontSize: "clamp(11px, 2.5vw, 13px)", color: "#4A7C2F", lineHeight: 1.6, letterSpacing: "0.03em" }}>
              "Preach the word; be instant in season, out of season; reprove, rebuke,
              exhort with all long suffering and doctrine." 2 Timothy 4:2
            </p>
          </div>
        </div>

        {/* Slider — desktop only (shown second) */}
        <div className="hidden lg:block lg:w-[258px] lg:flex-shrink-0 lg:ml-[40px] lg:-mt-[21px] relative overflow-hidden" style={sliderStyle}>
          <SliderContent />
        </div>

      </div>
    </div>
  );
};

export default PreachersPanel;