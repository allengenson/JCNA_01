"use client";
import { useState, useEffect, useCallback, useRef } from "react";
const images = [
"/anniv/1.jpg",
"/anniv/2.jpg",
"/anniv/3.jpg",
"/anniv/4.jpg",
"/anniv/5.jpg",
"/anniv/6.jpg",
"/anniv/7.jpg",
"/anniv/8.jpg",
"/anniv/10.jpg",
];
const AnniversariesPanel = () => {
const [current, setCurrent] = useState(0);
const [animating, setAnimating] = useState(false);
const [modalOpen, setModalOpen] = useState(false);
const [modalIndex, setModalIndex] = useState(0);
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
const modalNext = () => setModalIndex((p) => (p + 1) % images.length);
const modalPrev = () => setModalIndex((p) => (p - 1 + images.length) % images.length);
useEffect(() => {
if (modalOpen) return;
const timer = setInterval(() => goTo((current + 1) % images.length), 4000);
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
const openModal = (index: number) => { setModalIndex(index); setModalOpen(true); };
const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
const handleTouchEnd = (e: React.TouchEvent) => {
if (touchStartX.current === null) return;
const diff = touchStartX.current - e.changedTouches[0].clientX;
if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
touchStartX.current = null;
};
const getSlideStyle = (index: number): React.CSSProperties => {
const total = images.length;
let pos = ((index - current + total) % total + total) % total;
if (pos > total / 2) pos = pos - total;
const isCenter = pos === 0;
const isAdjacent = Math.abs(pos) === 1;
if (!isCenter && !isAdjacent) return { display: "none" };
return {
position: "absolute", top: "50%", width: "62%", aspectRatio: "4/3",
borderRadius: 16, objectFit: "cover",
transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
transform: isCenter
? "translateX(-50%) translateY(-50%) scale(1)"
: pos === 1
? "translateX(28%) translateY(-50%) scale(0.82)"
: "translateX(-128%) translateY(-50%) scale(0.82)",
left: "50%",
opacity: isCenter ? 1 : 0.45,
zIndex: isCenter ? 3 : 1,
boxShadow: isCenter ? "0 8px 32px rgba(45,80,22,0.18)" : "0 2px 8px rgba(45,80,22,0.08)",
filter: isCenter ? "none" : "brightness(0.75)",
cursor: isCenter ? "zoom-in" : "default",
};
};
return (
<>
<div className="flex-1 flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-8 lg:px-[60px] pt-8 lg:pt-[33px] pb-10 lg:pb-[60px] gap-8 lg:gap-10">
    {/* Left — Slider */}
    <div className="w-full lg:flex-1 flex-shrink-0" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(190px, 54vw, 290px)", borderRadius: 20 }}>
        {images.map((src, i) => (
          <img
            key={i} src={src} alt={`Anniversary photo ${i + 1}`}
            style={getSlideStyle(i)}
            onClick={() => i === current && openModal(i)}
          />
        ))}
        <div style={{ position: "absolute", top: 8, right: 10, zIndex: 10, background: "rgba(0,0,0,0.45)", borderRadius: 6, padding: "3px 7px", fontSize: 10, color: "#fff", letterSpacing: "0.04em", pointerEvents: "none" }}>
          Click to view
        </div>
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
        Anniversaries are moments of gratitude and remembrance — celebrating the faithfulness of God over the years. Whether marking the church's founding, a ministry milestone, or years of dedicated service, these gatherings inspire the congregation to reflect on what God has done and to press forward with renewed vision and hope.
      </p>
      <p className="font-dm italic text-center lg:text-left" style={{ fontSize: "clamp(12px, 3vw, 14px)", color: "#4A7C2F", lineHeight: 1.75, letterSpacing: "0.01em" }}>
        I have not stopped giving thanks for you, remembering you in my prayers.&nbsp;
        <span style={{ fontStyle: "normal", fontWeight: 600 }}>Ephesians 1:16</span>
      </p>
    </div>

  </div>

  {/* Lightbox Modal */}
  {modalOpen && (
    <div onClick={() => setModalOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ position: "relative", width: "min(92vw, 900px)", maxHeight: "90vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <button onClick={() => setModalOpen(false)} style={{ position: "absolute", top: -44, right: 0, width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.4)", color: "#fff", fontSize: 20, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 10 }} aria-label="Close">✕</button>
        <div style={{ width: "100%", position: "relative" }}>
          <img src={images[modalIndex]} alt={`Anniversary photo ${modalIndex + 1}`} style={{ width: "100%", maxHeight: "80vh", objectFit: "contain", borderRadius: 12, display: "block" }} />
          <button onClick={modalPrev} style={{ position: "absolute", left: -20, top: "50%", transform: "translateY(-50%)", width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.18)", border: "1.5px solid rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none"><polyline points="7,1 3,5 7,9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button onClick={modalNext} style={{ position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)", width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.18)", border: "1.5px solid rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none"><polyline points="3,1 7,5 3,9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>{modalIndex + 1} / {images.length}</span>
          <div style={{ display: "flex", gap: 6 }}>
            {images.map((_, i) => (
              <button key={i} onClick={() => setModalIndex(i)} style={{ width: i === modalIndex ? 20 : 7, height: 7, borderRadius: 9999, background: i === modalIndex ? "#82B657" : "rgba(255,255,255,0.35)", border: "none", padding: 0, cursor: "pointer", transition: "width 300ms ease, background 300ms ease" }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )}
</>
);
};
export default AnniversariesPanel;