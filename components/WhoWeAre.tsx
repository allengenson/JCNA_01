"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const GENTLE_SPRING = {
  type: "spring",
  stiffness: 70,
  damping: 22,
  mass: 1.2,
} as const;

const sections = [
  { id: "goals", label: "Goals" },
  { id: "mission", label: "Mission" },
  { id: "doctrines", label: "Doctrines" },
  { id: "values", label: "Values" },
  { id: "culture", label: "Culture" },
  { id: "leadership", label: "Leadership" },
];

export default function WhoWeArePreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleCardClick = (id: string) => {
    // Use search param instead of hash — works reliably on mobile in Next.js
    router.push(`/WhoWeAre?section=${id}`);
  };

  return (
    <div id="who-we-are" ref={sectionRef} className="w-full bg-[#FAFDF5] overflow-hidden">
      <div className="mx-auto w-full max-w-[1418px] px-6 lg:px-12 pt-14 pb-16 lg:pt-[70px] lg:pb-[80px]">

        {/* HEADING */}
        <motion.div
          className="text-center mb-8 lg:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...GENTLE_SPRING, opacity: { duration: 0.8, ease: "easeOut" } }}
        >
          <h2 className="font-cormorant text-[clamp(30px,5.5vw,46px)] text-[#2D5016] tracking-[0.15em] font-bold leading-none">
            Who We Are
          </h2>
          <motion.div
            className="h-[1px] bg-[#C5D09B] mt-[22px] origin-center"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ ...GENTLE_SPRING, delay: 0.2, opacity: { duration: 0.6 } }}
          />
        </motion.div>

        {/* CARD GRID */}
        <motion.div
          className="grid grid-cols-2 min-[421px]:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2 min-[421px]:gap-3 mt-7"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...GENTLE_SPRING, delay: 0.3, opacity: { duration: 0.8, ease: "easeOut" } }}
        >
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleCardClick(s.id)}
              className="flex items-center justify-center px-3.5 py-5 bg-white border-[1.5px] border-[#E2EAC8] rounded-[10px] text-center cursor-pointer transition-all duration-300 ease-out hover:border-[#7AAB50] hover:shadow-[0_6px_20px_rgba(45,80,22,0.08)] hover:-translate-y-1 active:scale-95 group"
            >
              <span className="font-cormorant text-[clamp(14px,2.2vw,16px)] tracking-[0.07em] font-medium text-[#4A7C2F] leading-[1.3] transition-colors duration-300 group-hover:text-[#2D5016]">
                {s.label}
              </span>
            </button>
          ))}
        </motion.div>

        {/* BOTTOM DIVIDER */}
        <motion.div
          className="h-[1px] bg-[#C5D09B] mt-16 lg:mt-[80px] origin-center"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ ...GENTLE_SPRING, delay: 0.5, opacity: { duration: 0.8 } }}
        />
      </div>
    </div>
  );
}
