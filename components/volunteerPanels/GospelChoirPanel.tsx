"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  "/gospel/1.jpg",
  "/gospel/2.jpg",
  "/gospel/3.jpg",
  "/gospel/4.jpg",
  "/gospel/5.jpg",
  "/gospel/6.jpg",
  "/gospel/7.jpg",
];

const GospelChoirPanel = () => {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  const modalNext = useCallback(() => setModalIndex((p) => (p + 1) % slides.length), []);
  const modalPrev = () => setModalIndex((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (modalOpen) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next, modalOpen]);

  // Close modal on Escape key
  useEffect(() => {
    if (!modalOpen) return;
    const handler = (e) => { if (e.key === "Escape") setModalOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const openModal = (index) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  const SliderContent = ({ onImageClick }) => (
    <>
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Gospel Choir ${i + 1}`}
          onClick={() => onImageClick(i)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
            opacity: i === current ? 1 : 0,
            transition: "opacity 700ms ease",
            cursor: "zoom-in",
            background: "#0a1f06",
          }}
        />
      ))}

      {/* Prev button */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        style={{
          position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)",
          zIndex: 10, width: 32, height: 32, borderRadius: "50%",
          background: "rgba(255,255,255,0.85)", border: "1.5px solid #82B657",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <polyline points="7,1 3,5 7,9" stroke="#2D5016" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        style={{
          position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
          zIndex: 10, width: 32, height: 32, borderRadius: "50%",
          background: "rgba(255,255,255,0.85)", border: "1.5px solid #82B657",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <polyline points="3,1 7,5 3,9" stroke="#2D5016" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Click-to-zoom hint */}
      <div style={{
        position: "absolute", top: 8, right: 10, zIndex: 10,
        background: "rgba(0,0,0,0.45)", borderRadius: 6, padding: "3px 7px",
        fontSize: 10, color: "#fff", letterSpacing: "0.04em", pointerEvents: "none",
      }}>
        Click to view
      </div>

      {/* Dot indicators */}
      <div style={{
        position: "absolute", bottom: 10, left: 0, right: 0,
        display: "flex", justifyContent: "center", gap: 5, zIndex: 10,
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            style={{
              width: i === current ? 18 : 7, height: 7, borderRadius: 9999,
              background: i === current ? "#2D5016" : "rgba(255,255,255,0.8)",
              border: "none", padding: 0, cursor: "pointer",
              transition: "width 300ms ease, background 300ms ease",
            }}
          />
        ))}
      </div>
    </>
  );

  const sliderStyle = {
    height: "clamp(220px, 45vw, 340px)",
    border: "1.5px solid #82B657",
    borderRadius: 20,
    background: "#0a1f06",
    overflow: "hidden",
    position: "relative",
  };

  return (
    <>
      {/* ── Main panel ── */}
      <div className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-[60px] pt-8 lg:pt-[33px] pb-10 lg:pb-[60px]">
        <div className="mt-0 w-full flex flex-col lg:flex-row lg:items-start lg:justify-center gap-6 lg:gap-0">

          {/* Slider — mobile only */}
          <div className="w-full lg:hidden" style={sliderStyle}>
            <SliderContent onImageClick={openModal} />
          </div>

          {/* Text + verse */}
          <div className="w-full lg:w-[510px] lg:flex-shrink-0">
            <p className="font-dm" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.8, letterSpacing: "0.03em" }}>
              The Gospel Choirs serve by leading vibrant and spirit-filled worship through
              contemporary and gospel-inspired songs. They express their faith through
              music that uplifts, encourages, and connects with both the young and the
              young at heart. Through their passion and unity, they help bring energy and joy
              into church worship. Their ministry inspires others to serve God boldly and
              wholeheartedly.
            </p>

            <div
              className="mt-10 lg:mt-[77px] w-full"
              style={{
                background: "#FFFFFF", border: "1px solid #82B657",
                borderTopLeftRadius: 15, borderBottomLeftRadius: 25,
                borderTopRightRadius: 30, borderBottomRightRadius: 30,
                padding: "14px 20px",
              }}
            >
              <p className="font-dm italic" style={{ fontSize: "clamp(11px, 2.5vw, 13px)", color: "#4A7C2F", lineHeight: 1.6, letterSpacing: "0.03em" }}>
                Let no one despise your youth, but be an example to the believers in word,
                in conduct, in love, in spirit, in faith, in purity. 1 Timothy 4:12
              </p>
            </div>
          </div>

          {/* Slider — desktop only */}
          <div
            className="hidden lg:block lg:flex-shrink-0 lg:ml-[40px] lg:-mt-[21px]"
            style={{ ...sliderStyle, width: 300, height: "clamp(220px, 35vw, 340px)" }}
          >
            <SliderContent onImageClick={openModal} />
          </div>

        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.88)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {/* Modal content */}
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
            {/* Close button */}
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
            >
              ✕
            </button>

            {/* Image */}
            <div style={{ width: "100%", position: "relative" }}>
              <img
                src={slides[modalIndex]}
                alt={`Gospel Choir ${modalIndex + 1}`}
                style={{
                  width: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  borderRadius: 12,
                  display: "block",
                }}
              />

              {/* Prev */}
              <button
                onClick={modalPrev}
                style={{
                  position: "absolute", left: -20, top: "50%", transform: "translateY(-50%)",
                  width: 40, height: 40, borderRadius: "50%",
                  background: "rgba(255,255,255,0.18)", border: "1.5px solid rgba(255,255,255,0.5)",
                  color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                  <polyline points="7,1 3,5 7,9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Next */}
              <button
                onClick={modalNext}
                style={{
                  position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)",
                  width: 40, height: 40, borderRadius: "50%",
                  background: "rgba(255,255,255,0.18)", border: "1.5px solid rgba(255,255,255,0.5)",
                  color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                  <polyline points="3,1 7,5 3,9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Counter + dots */}
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
                {modalIndex + 1} / {slides.length}
              </span>
              <div style={{ display: "flex", gap: 6 }}>
                {slides.map((_, i) => (
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

export default GospelChoirPanel;
