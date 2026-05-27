"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const EASE_CURVE = [0.16, 1, 0.3, 1] as const;

const sections = [
  { id: "goals",      label: "Goals"      },
  { id: "mission",    label: "Mission"    },
  { id: "doctrines",  label: "Doctrines"  },
  { id: "values",     label: "Values"     },
  { id: "culture",    label: "Culture"    },
  { id: "leadership", label: "Leadership" },
];

export default function WhoWeAre() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="who-we-are" ref={sectionRef} className="w-full bg-[#FAFDF5]">
      <div className="mx-auto w-full max-w-[1418px] px-6 lg:px-12 pt-14 pb-16 lg:pt-[70px] lg:pb-[80px]">

        {/* HEADING */}
        <motion.div
          className="text-center mb-8 lg:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_CURVE }}
        >
          <h2 className="font-cormorant text-[clamp(30px,5.5vw,46px)] text-[#2D5016] tracking-[0.15em] font-bold leading-none">
            Who We Are
          </h2>
          <motion.div
            className="h-[1px] bg-[#C5D09B] mt-[22px] origin-center"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: EASE_CURVE, delay: 0.15 }}
          />
        </motion.div>

        {/* CARD GRID — clicking navigates to /WhoWeAre?section=... */}
        <motion.div
          className="grid grid-cols-2 min-[421px]:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2 min-[421px]:gap-3 mt-7"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE_CURVE, delay: 0.22 }}
        >
          {sections.map((s) => (
            <button
              key={s.id}
              className="flex items-center justify-center px-3.5 py-5 rounded-[10px] text-center cursor-pointer border-[1.5px] border-[#E2EAC8] bg-white transition-all duration-250 ease-in-out active:scale-95 hover:border-[#7AAB50] hover:shadow-[0_4px_16px_rgba(45,80,22,0.10)] hover:-translate-y-0.5"
              onClick={() => router.push(`/WhoWeAre?section=${s.id}`)}
            >
              <span className="font-cormorant text-[clamp(14px,2.2vw,16px)] tracking-[0.07em] font-medium text-[#4A7C2F]">
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
          transition={{ duration: 1, ease: EASE_CURVE, delay: 0.6 }}
        />
      </div>
    </div>
  );
}