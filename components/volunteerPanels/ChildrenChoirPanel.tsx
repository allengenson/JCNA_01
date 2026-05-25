"use client";

import React, { useState, useEffect, useCallback } from "react";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

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

  const modalNext = () => setModalIndex((p) => (p + 1) % images.length);
  const modalPrev = () => setModalIndex((p) => (p - 1 + images.length) % images.length);

  useEffect(() => {
    if (modalOpen) return;
    const timer = setInterval(() => {
      goTo((current + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [current, goTo, modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setModalOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalOpen]);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const openModal = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  const SliderContent = ({
    onImageClick,
  }: {
    onImageClick: (index: number) => void;
  }) => (
    <>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Children Choir ${i + 1}`}
          onClick={() => onImageClick(i)}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "contain", objectPosition: "center",
            borderRadius: 20,
            opacity: i === current ? (animating ? 0 : 1) : 0,
            transition: "opacity 0.3s ease-in-out",
            cursor: "zoom-in",
            background: "#0a1f06",
          }}
        />
      ))}

      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Previous image"
        style={{
          position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.85)", border: "1.5px solid #82B657",
          borderRadius: "50%", width: 32, height: 32, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 2, boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <polyline points="7,1 3,5 7,9" stroke="#2D5016" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Next image"
        style={{
          position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.85)", border: "1.5px solid #82B657",
          borderRadius: "50%", width: 32, height: 32, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 2, boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <polyline points="3,1 7,5 3,9" stroke="#2D5016" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div style={{
        position: "absolute", top: 8, right: 10, zIndex: 10,
        background: "rgba(0,0,0,0.45)", borderRadius: 6, padding: "3px 7px",
        fontSize: 10, color: "#fff", letterSpacing: "0.04em", pointerEvents: "none",
      }}>
        Click to view
      </div>

      <div style={{ position: "absolute", bottom: 10, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6, zIndex: 2 }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); goTo(i); }}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? 18 : 7, height: 7,
              borderRadius: 4,
              background: i === current ? "#2D5016" : "rgba(255,255,255,0.8)",
              border: "1px solid #82B657",
              cursor: "pointer", padding: 0,
              transition: "width 0.3s ease",
            }}
          />
        ))}
      </div>
    </>
  );

  const sliderStyle: React.CSSProperties = {
    height: "clamp(220px, 45vw, 340px)",
    border: "1.5px solid #82B657",
    borderRadius: 20,
    background: "#0a1f06",
    overflow: "hidden",
    position: "relative",
  };

  return (
    <>
      <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-[60px] pt-8 lg:pt-[33px] pb-10 lg:pb-[60px]">
        <div className="mt-0 w-full flex flex-col lg:flex-row lg:items-start lg:justify-center gap-6 lg:gap-0">

          <div className="w-full lg:hidden" style={sliderStyle}>
            <SliderContent onImageClick={openModal} />
          </div>

          <div className="w-full lg:w-[510px] lg:flex-shrink-0">
            <p className="font-dm" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.8, letterSpacing: "0.03em" }}>
              The children’s choir is composed of members aged 5 to 15 years old who take part in the worship service through song. They sing a set of three children’s songs with choreography, expressing joy and praise to God in a simple and heartfelt way. Before starting their song set, they also recite an assigned memory verse, helping them grow in understanding and remembrance of God’s Word.

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

          <div
            className="hidden lg:block lg:flex-shrink-0 lg:ml-[40px] lg:-mt-[21px]"
            style={{ ...sliderStyle, width: 300, height: "clamp(220px, 35vw, 340px)" }}
          >
            <SliderContent onImageClick={openModal} />
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.88)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(92vw, 900px)",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: "absolute", top: -44, right: 0,
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.4)",
                color: "#fff", fontSize: 20, lineHeight: 1,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", zIndex: 10,
              }}
              aria-label="Close"
            >✕</button>

            <div style={{ width: "100%", position: "relative" }}>
              <img
                src={images[modalIndex]}
                alt={`Children Choir ${modalIndex + 1}`}
                style={{
                  width: "100%", maxHeight: "80vh",
                  objectFit: "contain", borderRadius: 12, display: "block",
                }}
              />
              <button
                onClick={modalPrev}
                style={{
                  position: "absolute", left: -20, top: "50%", transform: "translateY(-50%)",
                  width: 40, height: 40, borderRadius: "50%",
                  background: "rgba(255,255,255,0.18)", border: "1.5px solid rgba(255,255,255,0.5)",
                  display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                  <polyline points="7,1 3,5 7,9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={modalNext}
                style={{
                  position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)",
                  width: 40, height: 40, borderRadius: "50%",
                  background: "rgba(255,255,255,0.18)", border: "1.5px solid rgba(255,255,255,0.5)",
                  display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                  <polyline points="3,1 7,5 3,9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
                {modalIndex + 1} / {images.length}
              </span>
              <div style={{ display: "flex", gap: 6 }}>
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setModalIndex(i)}
                    style={{
                      width: i === modalIndex ? 20 : 7, height: 7, borderRadius: 9999,
                      background: i === modalIndex ? "#82B657" : "rgba(255,255,255,0.35)",
                      border: "none", padding: 0, cursor: "pointer",
                      transition: "width 300ms ease, background 300ms ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChildrenChoirPanel;
