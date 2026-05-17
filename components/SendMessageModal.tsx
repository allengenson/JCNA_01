"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  full_name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone_number: yup.string().required("Phone number is required"),
  message: yup.string().required("Your concern is required"),
});

const inputClass =
  "w-full border-b border-[#C5D09B] bg-transparent font-dm text-[13px] text-[#2D5016] placeholder-[#4A7C2F]/60 py-2 outline-none focus:border-[#2D5016] transition-colors";

const outreachTaglines: Record<string, string> = {
  "Minglanilla - Main Church": "Reach out to our home church — we'd love to hear from you.",
  "Danao Outreach": "Connect with our Danao family and let us serve you.",
  "Lapu-Lapu City Outreach": "We're here in Lapu-Lapu — send us a message anytime.",
  "Negros Outreach": "Across the sea, but never far — reach our Negros team.",
  "Medellin Outreach": "From the island of Gibitngil, we're just a message away.",
  "Bantayan Island Outreach": "Let our Bantayan team know how we can serve you.",
};

interface SendMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  outreachName: string;
  outreachEmail: string;
  outreachPhone: string;
}

const SendMessageModal: React.FC<SendMessageModalProps> = ({
  isOpen,
  onClose,
  outreachName,
  outreachEmail,
  outreachPhone,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (!isOpen) return null;

  const tagline =
    outreachTaglines[outreachName] ?? "We'd love to hear from you. Send us a message!";

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const payload = {
        ...data,
        service_type: "send-message",
        outreach: outreachName,
      };

      await fetch("/api/spiritual-services/saveSubmission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      await fetch("/api/spiritual-services/sendEmailConfirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg bg-[#FAFDF5] rounded-2xl p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#4A7C2F] hover:text-[#2D5016] text-xl font-bold"
        >
          ✕
        </button>

        {/* Outreach label */}
        <div className="flex items-center gap-3 mb-2">
          <span
            className="font-dm text-[11px] font-bold tracking-widest text-[#D4A017] uppercase"
          >
            OUTREACH
          </span>
          <div className="w-[40px] h-[1px] bg-[#D4A017]" />
        </div>

        <h2 className="font-cormorant font-bold text-[26px] sm:text-[30px] text-[#2D5016] mb-2 leading-tight">
          {outreachName}
        </h2>
        <p className="font-dm text-[13px] text-[#4A7C2F] leading-[1.6] mb-6">
          {tagline}
        </p>

        {submitted ? (
          <div className="text-center py-10">
            <p className="font-cormorant text-[22px] text-[#2D5016] font-bold mb-2">
              Message Sent!
            </p>
            <p className="font-dm text-[13px] text-[#4A7C2F]">
              Thank you for reaching out to <strong>{outreachName}</strong>. We'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2 bg-[#2D5016] text-white font-dm text-[13px] rounded-lg hover:bg-[#4A7C2F] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <p className="font-dm font-bold text-[11px] tracking-widest text-[#2D5016] uppercase mb-4">
              SEND A MESSAGE
            </p>

            {/* Full Name */}
            <div>
              <input
                {...register("full_name")}
                placeholder="Your name"
                className={inputClass}
              />
              {errors.full_name && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.full_name.message as string}
                </p>
              )}
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  {...register("email")}
                  placeholder="Your email"
                  className={inputClass}
                />
                {errors.email && (
                  <p className="text-red-500 text-[11px] mt-1">
                    {errors.email.message as string}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("phone_number")}
                  placeholder="Your phone number"
                  className={inputClass}
                />
                {errors.phone_number && (
                  <p className="text-red-500 text-[11px] mt-1">
                    {errors.phone_number.message as string}
                  </p>
                )}
              </div>
            </div>

            {/* Concern */}
            <div>
              <textarea
                {...register("message")}
                placeholder="Share your concern..."
                rows={4}
                className={`${inputClass} resize-none`}
              />
              {errors.message && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.message.message as string}
                </p>
              )}
            </div>

            {/* Contact Info */}
            <div className="pt-2 space-y-1">
              <p className="font-dm text-[12px] text-[#4A7C2F]">
                📞 Call us: {outreachPhone}
              </p>
              <p className="font-dm text-[12px] text-[#4A7C2F]">
                ✉️ Email: {outreachEmail}
              </p>
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-2 bg-[#2D5016] text-white font-dm text-[13px] font-medium rounded-lg hover:bg-[#4A7C2F] transition-colors disabled:opacity-60"
              >
                {loading ? "Sending..." : "SEND"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SendMessageModal;