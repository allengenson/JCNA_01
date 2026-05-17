"use client";

import { useState, useEffect, useCallback } from "react";

const images = [
  "/Children/1.jpg",
  "/Children/2.jpg",
  "/Children/3.jpg",
  "/Children/4.jpg",
  "/Children/5.jpg",
  "/Children/6.jpg",
];


const ChildrenChoirPanel = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 300);
    },
    [animating]
  );

  const prev = () => goTo((current - 1 + images.length) % images.length);
  const next = () => goTo((current + 1) % images.length);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-[60px] pt-8 lg:pt-[33px] pb-10 lg:pb-[60px]">

      <div className="text-center">
        <h2
          className="font-cormorant italic"
          style={{ fontSize: "clamp(28px, 6vw, 40px)", color: "#2D5016", fontWeight: 400, lineHeight: 1 }}
        >
          Childrens Choir
        </h2>
        <div style={{ width: 160, height: 1, background: "#2D5016", margin: "12px auto 0" }} />
        <p className="font-dm mt-3" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F" }}>
          Praising God with joyful voices and pure hearts.
        </p>
      </div>

      <div className="mt-10 lg:mt-[60px] w-full flex flex-col lg:flex-row lg:items-start lg:justify-center gap-6 lg:gap-0">

        <div className="w-full lg:w-[510px] lg:flex-shrink-0">
          <p className="font-dm" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.8, letterSpacing: "0.03em" }}>
            The Children's Choir helps lead worship through songs that express faith, joy,
            and gratitude to God. They are trained to develop their gifts in singing while
            learning the values of worship and teamwork. Through their voices, they inspire
            the church with innocence, joy, and heartfelt praise. Their ministry helps
            nurture a lifelong love for God and worship.
          </p>

          <div
            className="mt-10 lg:mt-[77px] w-full"
            style={{ background: "#FFFFFF", border: "1px solid #82B657", borderTopLeftRadius: 15, borderBottomLeftRadius: 25, borderTopRightRadius: 30, borderBottomRightRadius: 30, padding: "14px 20px" }}
          >
            <p className="font-dm italic" style={{ fontSize: "clamp(11px, 2.5vw, 13px)", color: "#4A7C2F", lineHeight: 1.6, letterSpacing: "0.03em" }}>
              But Jesus said, 'Let the little children come to me, and do not hinder them,
              for the kingdom of heaven belongs to such as these. Matthew 19:14
            </p>
          </div>
        </div>

        {/* Image Slider */}
        <div
          className="w-full lg:w-[258px] lg:flex-shrink-0 lg:ml-[40px] lg:-mt-[21px] relative overflow-hidden"
          style={{ height: "clamp(180px, 40vw, 293px)", border: "1px solid #82B657", borderRadius: 30, background: "#FFFFFF" }}
        >
          {/* Images */}
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Choir photo ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                borderRadius: 30,
                opacity: i === current ? (animating ? 0 : 1) : 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            />
          ))}

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            aria-label="Previous image"
            style={{
              position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.75)", border: "1px solid #82B657",
              borderRadius: "50%", width: 28, height: 28, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#2D5016", fontSize: 14, zIndex: 2,
            }}
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            style={{
              position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.75)", border: "1px solid #82B657",
              borderRadius: "50%", width: 28, height: 28, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#2D5016", fontSize: 14, zIndex: 2,
            }}
          >
            ›
          </button>

          {/* Dots */}
          <div style={{ position: "absolute", bottom: 10, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6, zIndex: 2 }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === current ? 18 : 7,
                  height: 7,
                  borderRadius: 4,
                  background: i === current ? "#2D5016" : "rgba(255,255,255,0.8)",
                  border: "1px solid #82B657",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChildrenChoirPanel;
