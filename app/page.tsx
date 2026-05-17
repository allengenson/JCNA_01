"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpiritualServicesSection from "@/components/SpiritualServices/SpiritualServicesSection";
import VerseSection from "@/components/VerseSection";
import WhatWeDo from "@/components/WhatWeDo";
import PreachersSection from "@/components/ServiceVolunteers";
import ChurchMinistriesSection from "@/components/ChurchMinistriesSection";
import OutreachSection from "@/components/outreach";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <SpiritualServicesSection />
      <VerseSection />
      <div id="what-we-do">
        <WhatWeDo />
      </div>
      <PreachersSection />
      <div id="church-ministries">
        <ChurchMinistriesSection />
      </div>
      <div id="outreaches">
        <OutreachSection />
      </div>
      <Footer />
    </>
  );
}
