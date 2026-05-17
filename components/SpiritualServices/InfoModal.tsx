"use client";
import React from "react";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg bg-[#FAFDF5] rounded-2xl p-6 sm:p-8 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#4A7C2F] hover:text-[#2D5016] text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="font-cormorant font-bold text-[26px] sm:text-[30px] text-[#2D5016] mb-2">
          General and Overnight Worship Schedule
        </h2>

        <p className="font-dm text-[13px] sm:text-[14px] text-[#4A7C2F] leading-[1.6] mb-6">
          A time set apart to worship God, grow spiritually, and experience His
          presence through praise, prayer, and the preaching of His Word.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl p-4 border" style={{ borderColor: "rgba(197, 208, 155, 0.5)" }}>
            <h3 className="font-dm font-bold text-[13px] text-[#2D5016] mb-3 uppercase tracking-wide">
              Sunday Worship · 10am to 3pm
            </h3>
            <ul className="space-y-1">
              {[
                "Tunghaan Minglanilla Cebu City",
                "Mandalupang Manjuyod Negros Oriental",
                "Bonifacio St. Danao City",
                "Pajac Lapu-lapu City",
              ].map((loc, i) => (
                <li key={i} className="font-dm text-[13px] text-[#4A7C2F] flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#D4A017] shrink-0" />
                  {loc}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl p-4 border" style={{ borderColor: "rgba(197, 208, 155, 0.5)" }}>
            <h3 className="font-dm font-bold text-[13px] text-[#2D5016] mb-3 uppercase tracking-wide">
              Overnight Worship · 6pm to 11pm
            </h3>
            <ul className="space-y-1">
              {[
                "Tunghaan Minglanilla Cebu City",
                "Mandalupang Manjuyod Negros Oriental",
              ].map((loc, i) => (
                <li key={i} className="font-dm text-[13px] text-[#4A7C2F] flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#D4A017] shrink-0" />
                  {loc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-dm text-[13px] text-[#4A7C2F] leading-[1.6] mb-4">
          Everyone is welcome — church members, first-time visitors, families,
          and anyone seeking to know God, grow in faith, or simply join a
          community of worship.
        </p>

        <p className="font-cormorant italic text-[15px] text-[#2D5016] border-t pt-4"
          style={{ borderColor: "rgba(197, 208, 155, 0.5)" }}>
          "For where two or three gather in my name, there am I with them." —
          Matthew 18:20
        </p>
      </div>
    </div>
  );
};

export default InfoModal;