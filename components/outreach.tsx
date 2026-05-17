"use client";

import React, { useState } from "react";
import SendMessageModal from "@/components/SendMessageModal";

interface OutreachItem {
  name: string;
  phone: string;
  email: string;
  address: string;
  fbHandle: string;
  ytHandle: string;
  mapSrc: string;
  mapUrl: string;
}

const outreaches: OutreachItem[] = [
  {
    name: "Minglanilla - Main Church",
    phone: "0950 - 948 - 3903",
    email: "jcnamingla@gmail.com",
    address: "Tunghaan Minglanilla Cebu City",
    fbHandle: "JCNA-Mingla",
    ytHandle: "JCNA-Mingla",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74704.02732368202!2d123.78717022278703!3d10.249742118941036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a977fac09dc6af%3A0xda93be23da18c422!2sJESUS%20CHRIST%20OF%20NAZARETH%20ONEFOLD%20ASSEMBLY!5e0!3m2!1sen!2sph!4v1778646023673!5m2!1sen!2sph",
    mapUrl:
      "https://www.google.com/maps/place/JESUS+CHRIST+OF+NAZARETH+ONEFOLD+ASSEMBLY/@10.2417709,123.7841194,17z",
  },
  {
    name: "Danao Outreach",
    phone: "0950 - 948 - 3903",
    email: "jcnadanao@gmail.com",
    address: "Bonifacio St. Corner of Duterte St.",
    fbHandle: "JCNA-Danao",
    ytHandle: "JCNA-Danao",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!4v1778646105053!6m8!1m7!1sbHwm22latB_2-Csx-x5H3A!2m2!1d10.52146289240467!2d124.0267796599791!3f169.12272369925856!4f10.235749730833277!5f1.5158547553833004",
    mapUrl: "https://maps.app.goo.gl/3bQRNjCyeDDg1w4m7",
  },
  {
    name: "Lapu-Lapu City Outreach",
    phone: "0950 - 948 - 3903",
    email: "jcnalapu@gmail.com",
    address: "Pajac, Lapu-Lapu, Cebu",
    fbHandle: "JCNA-Mingla",
    ytHandle: "JCNA-Mingla",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!4v1778646194879!6m8!1m7!1sZS3w7-mPQTsdj4TxUx0TqQ!2m2!1d10.29877451073307!2d123.9897765527376!3f194.8616951180307!4f-7.409904780054944!5f0.7820865974627469",
    mapUrl: "https://maps.app.goo.gl/NkNhnp6b6PMYzQhT7",
  },
  {
    name: "Negros Outreach",
    phone: "0950 - 948 - 3903",
    email: "jcnanegros@gmail.com",
    address: "Mandalupang Manjuyod, Negros Oriental",
    fbHandle: "JCNA-Negros",
    ytHandle: "JCNA-Negros",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.261003785013!2d123.06975957376015!3d9.658725678816623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab8646b12035ed%3A0xeb58757c341b60b5!2sMandalupang%20Elementary%20School!5e0!3m2!1sen!2sph!4v1778646347450!5m2!1sen!2sph",
    mapUrl: "https://maps.app.goo.gl/aNE4DTf4zoSdEHsPA",
  },
  {
    name: "Medellin Outreach",
    phone: "0950 - 948 - 3903",
    email: "jcnabitngil@gmail.com",
    address: "Pasil, Gibitngil Island",
    fbHandle: "JCNA-Mingla",
    ytHandle: "JCNA-Mingla",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15656.208030928992!2d123.92051875!3d11.18378525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a87b0649f48ed9%3A0x7f954b80c318ef8e!2sGibitngil%20Island!5e0!3m2!1sen!2sph!4v1778646448135!5m2!1sen!2sph",
    mapUrl: "https://maps.app.goo.gl/SbokFBnttQsa3ESJ9",
  },
  {
    name: "Bantayan Island Outreach",
    phone: "0950 - 948 - 3903",
    email: "jcnabantayan@gmail.com",
    address: "Bonakan Madridejos Bantayan Island",
    fbHandle: "JCNA-Mingla",
    ytHandle: "JCNA-Mingla",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!4v1778646599185!6m8!1m7!1sdi9FfL1wWz5AI8sGaab_sQ!2m2!1d11.26100223344065!2d123.7134120244756!3f163.7876290288224!4f-18.98048370667243!5f0.7820865974627469",
    mapUrl:
      "https://www.google.com/maps/@11.2610022,123.713412,3a,75y,163.79h,71.02t/data=!3m7!1e1!3m5!1sdi9FfL1wWz5AI8sGaab_sQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D18.98048370667243%26panoid%3Ddi9FfL1wWz5AI8sGaab_sQ%26yaw%3D163.7876290288224!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D",
  },
];

const PhoneIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4A7C2F"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.81 19.79 19.79 0 0 1 2 1.18 2 2 0 0 1 4 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4A7C2F"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PinIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#4A7C2F"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0, marginTop: "2px" }}
  >
    <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const FacebookIcon = () => (
  <div
    style={{
      width: "22px",
      height: "22px",
      borderRadius: "50%",
      backgroundColor: "#1877F2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <span style={{ color: "white", fontSize: "12px", fontWeight: "bold", lineHeight: 1 }}>
      f
    </span>
  </div>
);

const YouTubeIcon = () => (
  <div
    style={{
      width: "22px",
      height: "22px",
      borderRadius: "4px",
      backgroundColor: "#FF0000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <svg width="9" height="9" viewBox="0 0 10 10" fill="white">
      <polygon points="3,2 8,5 3,8" />
    </svg>
  </div>
);

const OutreachCard = ({
  name,
  phone,
  email,
  address,
  fbHandle,
  ytHandle,
  mapSrc,
  mapUrl,
}: OutreachItem) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SendMessageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        outreachName={name}
        outreachEmail={email}
        outreachPhone={phone}
      />

      <div
        className="flex flex-col sm:flex-row w-full"
        style={{
          border: "1px solid #82B657",
          borderRadius: "30px",
          backgroundColor: "#FFFFFF",
          padding: "18px 16px",
          gap: "12px",
          boxSizing: "border-box",
        }}
      >
        {/* INFO COLUMN */}
        <div className="flex flex-col justify-between gap-3 sm:gap-0 flex-1 min-w-0 sm:ml-5">
          <h3
            className="font-cormorant"
            style={{
              fontSize: "23px",
              fontWeight: 700,
              color: "#2D5016",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {name}
          </h3>

          <div className="flex items-center gap-2">
            <PhoneIcon />
            <span className="font-dm" style={{ fontSize: "12px", color: "#4A7C2F" }}>
              {phone}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MailIcon />
            <span
              className="font-dm"
              style={{ fontSize: "12px", color: "#4A7C2F", wordBreak: "break-all" }}
            >
              {email}
            </span>
          </div>

          <div className="flex items-start gap-2">
            <PinIcon />
            <span
              className="font-dm"
              style={{ fontSize: "12px", color: "#4A7C2F", lineHeight: 1.4 }}
            >
              {address}
            </span>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="font-dm self-start"
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "#FFFFFF",
              backgroundColor: "#2D5016",
              border: "none",
              borderRadius: "6px",
              padding: "7px 16px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </div>

        {/* MAP + SOCIALS */}
        <div className="flex flex-row items-center gap-3 flex-shrink-0">

          {/* MAP BOX */}
          <div className="relative flex-shrink-0 w-[120px] h-[140px] sm:w-[177px] sm:h-[217px] rounded-[20px] overflow-hidden bg-[#c8d8a0] mr-1">
            {mapSrc ? (
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", pointerEvents: "none" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="w-full h-full bg-[#c8d8a0]" />
            )}

            {/* Transparent overlay blocks iframe touch capture on all screens */}
            <div style={{ position: "absolute", inset: 0, zIndex: 1 }} />

            {/* Maps button — shown on all cards */}
            {mapUrl && (
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "absolute",
                  bottom: "8px",
                  right: "8px",
                  zIndex: 2,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  backgroundColor: "#2D5016",
                  color: "#FFFFFF",
                  fontSize: "10px",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: "5px",
                  padding: "4px 8px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.30)",
                }}
              >
                Maps <ExternalLinkIcon />
              </a>
            )}
          </div>

          {/* SOCIALS */}
          <div
            className="flex flex-col flex-shrink-0"
            style={{ width: "90px", paddingTop: "2px" }}
          >
            <p
              className="font-dm"
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#2D5016",
                marginBottom: "12px",
                whiteSpace: "nowrap",
              }}
            >
              Our Socials:
            </p>
            <div className="flex items-center gap-2 mb-2">
              <FacebookIcon />
              <span
                className="font-dm"
                style={{ fontSize: "11px", color: "#4A7C2F", wordBreak: "break-word" }}
              >
                {fbHandle}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <YouTubeIcon />
              <span
                className="font-dm"
                style={{ fontSize: "11px", color: "#4A7C2F", wordBreak: "break-word" }}
              >
                {ytHandle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const OutreachSection = () => {
  return (
    <div className="w-full bg-[#F6F8F1] px-4 sm:px-6 lg:px-10 py-10 box-border">
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-6">
          <span
            className="font-dm"
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#D4A017",
              letterSpacing: "0.18em",
            }}
          >
            OUTREACHES
          </span>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#D4A017" }} />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {outreaches.map((o) => (
            <OutreachCard key={o.name} {...o} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutreachSection;
