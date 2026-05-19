"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const images = [
  "/couples ministry/1.jpg",
  "/couples ministry/2.jpg",
  "/couples ministry/3.jpg",
  "/couples ministry/4.jpg",
  "/couples ministry/5.jpg",
  "/couples ministry/6.jpg",
];

const CouplesMinistryPanel = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => { setCurrent(index); setAnimating(false); }, 350);
    },
    [animating]
  );

  const prev = () => goTo((current - 1 + images.length) % images.length);
  const next = () => goTo((current + 1) % images.length);

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % images.length), 4000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const getSlideStyle = (index: number): React.CSSProperties => {
    const total = images.length;
    const offset = ((index - current + total) % total + total) % total;
    let pos = offset;
    if (pos > total / 2) pos = pos - total;
    const isCenter = pos === 0;
    const isAdjacent = Math.abs(pos) === 1;
    if (!isCenter && !isAdjacent) return { display: "none" };
    return {
      position: "absolute", top: "50%", width: "62%", aspectRatio: "4/3",
      borderRadius: 16, objectFit: "cover",
      transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      transform: isCenter ? "translateX(-50%) translateY(-50%) scale(1)"
        : pos === 1 ? "translateX(28%) translateY(-50%) scale(0.82)"
        : "translateX(-128%) translateY(-50%) scale(0.82)",
      left: "50%",
      opacity: isCenter ? 1 : 0.45, zIndex: isCenter ? 3 : 1,
      boxShadow: isCenter ? "0 8px 32px rgba(45,80,22,0.18)" : "0 2px 8px rgba(45,80,22,0.08)",
      filter: isCenter ? "none" : "brightness(0.75)",
    };
  };

  return (
    <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-8 lg:px-[60px] pt-8 lg:pt-[33px] pb-10 lg:pb-[60px] gap-8 lg:gap-10">

      {/* Left — Slider */}
      <div className="w-full lg:flex-1 flex-shrink-0" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className="relative w-full overflow-hidden" style={{ height: "clamp(180px, 52vw, 280px)", borderRadius: 20 }}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Couples ministry photo ${i + 1}`} style={getSlideStyle(i)} />
          ))}
          <button onClick={prev} aria-label="Previous" style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.85)", border: "1px solid #82B657", borderRadius: "50%", width: 30, height: 30, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#2D5016", fontSize: 16, zIndex: 10, boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>‹</button>
          <button onClick={next} aria-label="Next" style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.85)", border: "1px solid #82B657", borderRadius: "50%", width: 30, height: 30, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#2D5016", fontSize: 16, zIndex: 10, boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>›</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 12 }}>
          {images.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`} style={{ width: i === current ? 20 : 7, height: 7, borderRadius: 4, background: i === current ? "#2D5016" : "rgba(130,182,87,0.4)", border: "1px solid #82B657", cursor: "pointer", padding: 0, transition: "width 0.3s ease, background 0.3s ease" }} />
          ))}
        </div>
      </div>

      {/* Right — Text */}
      <div className="w-full lg:flex-1 flex flex-col justify-center">
        <p className="font-dm text-center lg:text-left mb-7" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.8, letterSpacing: "0.02em" }}>
          The Couples Ministry supports married and engaged couples in building strong, healthy, and
          God-honoring relationships. It provides guidance, encouragement, and spiritual growth through
          fellowship, teaching, and prayer. This ministry helps couples grow in understanding, love, and
          commitment to one another. Through Christ at the center, it nurtures lasting unity and a
          stronger family foundation.
        </p>
        <p className="font-dm italic text-center lg:text-left" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.75, letterSpacing: "0.01em" }}>
          Therefore what God has joined together, let no one separate.&nbsp;
          <span style={{ fontStyle: "normal", fontWeight: 600 }}>Mark 10:9</span>
        </p>
      </div>

    </div>
  );
};

export default CouplesMinistryPanel;
