"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  full_name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone_number: yup.string().required("Phone number is required"),
  message: yup.string().required("Prayer request is required"),
});

const inputClass =
  "w-full border-b border-[#C5D09B] bg-transparent font-dm text-[13px] text-[#2D5016] placeholder-[#4A7C2F]/60 py-2 outline-none focus:border-[#2D5016] transition-colors";

interface PrayerRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrayerRequestModal: React.FC<PrayerRequestModalProps> = ({
  isOpen,
  onClose,
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

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const payload = { ...data, service_type: "prayer-request" };

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

        <h2 className="font-cormorant font-bold text-[26px] sm:text-[30px] text-[#2D5016] mb-2">
          Submit a Prayer Request
        </h2>
        <p className="font-dm text-[13px] text-[#4A7C2F] leading-[1.6] mb-6">
          We believe in the power of prayer. Share your needs with our team and
          we will lift you up in prayer.
        </p>

        {submitted ? (
          <div className="text-center py-10">
            <p className="font-cormorant text-[22px] text-[#2D5016] font-bold mb-2">
              Thank you!
            </p>
            <p className="font-dm text-[13px] text-[#4A7C2F]">
              We have received your prayer request. Our team will be praying for
              you.
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
              PRAYER REQUEST FORM
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

            {/* Prayer Request */}
            <div>
              <textarea
                {...register("message")}
                placeholder="Share your prayer request..."
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
            <div className="pt-2">
              <p className="font-dm text-[12px] text-[#4A7C2F]">
                Call us: +63 990 000 000
              </p>
              <p className="font-dm text-[12px] text-[#4A7C2F]">
                Email: jcnaza.onefold@gmail.com
              </p>
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-2 bg-[#2D5016] text-white font-dm text-[13px] font-medium rounded-lg hover:bg-[#4A7C2F] transition-colors disabled:opacity-60"
              >
                {loading ? "Submitting..." : "SUBMIT"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PrayerRequestModal;