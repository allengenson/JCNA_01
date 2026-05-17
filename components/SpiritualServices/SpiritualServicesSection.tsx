"use client";
import React, { useState } from "react";
import InfoModal from "./InfoModal";
import ServiceFormModal from "./ServiceFormModal";

const services = [
  {
    id: "worship-schedule",
    title: "General and Overnight Worship",
    desc: "Gather with us for worship, prayer, and fellowship through regular and overnight services. All are welcome.",
    type: "info",
  },
  {
    id: "prayer-counseling",
    title: "Prayer and Counseling",
    desc: "Find comfort, guidance, and support through prayer and one-on-one counseling in a safe and caring environment.",
    type: "form",
  },
  {
    id: "blessings-of-properties",
    title: "Blessings of Properties",
    desc: "Invite God's presence into your home, business, or property through a special prayer of blessing and dedication.",
    type: "form",
  },
  {
    id: "request-files",
    title: "Request Files from Church",
    desc: "Easily request important church documents such as baptismal, dedication, or wedding certificates.",
    type: "form",
  },
  {
    id: "baptism",
    title: "Baptism",
    desc: "Take a step of faith and publicly declare your relationship with Christ through water baptism.",
    type: "form",
  },
  {
    id: "special-events",
    title: "Special Events",
    desc: "Join us for meaningful moments through church events, gatherings, and special occasions.",
    type: "form",
  },
];

const SpiritualServicesSection: React.FC = () => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [activeService, setActiveService] = useState("");

  const handleCardClick = (service: typeof services[0]) => {
    if (service.type === "info") {
      setInfoOpen(true);
    } else {
      setActiveService(service.id);
      setFormOpen(true);
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-12 sm:py-16 bg-[#FAFDF5]">
      {/* Heading */}
      <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
        <h2 className="text-[18px] sm:text-[22px] md:text-[24px] tracking-[0.15em] font-medium text-[#D4A017] font-dm">
          Spiritual Services
        </h2>
        <div className="h-[1px] w-12 sm:w-20 bg-[#D4A017]" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.map((item) => (
          <div
            key={item.id}
            className="p-5 sm:p-6 flex flex-col justify-between bg-white border rounded-xl h-full cursor-pointer hover:shadow-md transition-shadow"
            style={{ borderColor: "rgba(197, 208, 155, 0.5)" }}
            onClick={() => handleCardClick(item)}
          >
            {/* Icon box */}
            <div className="mb-5 w-[36px] h-[36px] sm:w-[43px] sm:h-[43px] rounded-[10px] bg-[#FDF8E1]" />

            {/* Text */}
            <div>
              <h3 className="mb-2 sm:mb-3 font-cormorant font-bold text-[18px] sm:text-[21px] lg:text-[23px] text-[#2D5016]">
                {item.title}
              </h3>
              <p className="mb-5 sm:mb-6 font-dm text-[13px] sm:text-[14px] text-[#4A7C2F] leading-[1.6]">
                {item.desc}
              </p>
            </div>

            {/* Learn More */}
            <button className="text-left font-medium text-[13px] sm:text-[14px] text-[#D4A017] font-dm">
              Learn more →
            </button>
          </div>
        ))}
      </div>

      {/* Modals */}
      <InfoModal isOpen={infoOpen} onClose={() => setInfoOpen(false)} />
      <ServiceFormModal
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        serviceType={activeService}
      />
    </section>
  );
};

export default SpiritualServicesSection;