"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  prayerCounselingSchema,
  blessingsSchema,
  requestFilesSchema,
  baptismSchema,
  specialEventsSchema,
} from "./schema";

interface ServiceFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: string;
}

const serviceConfig: Record<string, any> = {
  "prayer-counseling": {
    title: "Prayer and Counseling",
    formTitle: "PRAYER AND COUNSELING APPOINTMENT",
    schema: prayerCounselingSchema,
    fields: ["full_name", "email", "phone_number", "preferred_time_date", "message"],
    messagePlaceholder: "Your Concern",
  },
  "blessings-of-properties": {
    title: "Blessings of Properties",
    formTitle: "BLESSING OF PROPERTIES APPOINTMENT",
    schema: blessingsSchema,
    fields: ["full_name", "email", "phone_number", "preferred_time_date", "message"],
    messagePlaceholder: "Your Concern",
  },
  "request-files": {
    title: "Request Files from Church",
    formTitle: "FILE REQUEST",
    schema: requestFilesSchema,
    fields: ["full_name", "email", "phone_number", "message"],
    messagePlaceholder: "What type of Document",
  },
  "baptism": {
    title: "Baptism",
    formTitle: "BAPTISM APPOINTMENT",
    schema: baptismSchema,
    fields: ["full_name", "email", "phone_number", "preferred_time_date"],
    messagePlaceholder: "",
  },
  "special-events": {
    title: "Special Events",
    formTitle: "SPECIAL EVENTS",
    schema: specialEventsSchema,
    fields: ["full_name", "email", "phone_number", "preferred_time_date", "event_type"],
    messagePlaceholder: "",
  },
};

const EVENT_OPTIONS = [
  { value: "burial", label: "Burial Service" },
  { value: "wedding", label: "Wedding Service" },
  { value: "child-dedication", label: "Child Dedication" },
];

const inputClass =
  "w-full border-b border-[#C5D09B] bg-transparent font-dm text-[16px] sm:text-[13px] text-[#2D5016] placeholder-[#4A7C2F]/60 py-2 outline-none focus:border-[#2D5016] transition-colors";

// ─── Custom Dropdown (stays inside modal, no native overflow) ───────────────
const CustomSelect: React.FC<{
  value: string;
  onChange: (val: string) => void;
  error?: string;
}> = ({ value, onChange, error }) => {
  const [open, setOpen] = useState(false);
  const selected = EVENT_OPTIONS.find((o) => o.value === value);

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between border-b border-[#C5D09B] py-2 text-left font-dm text-[16px] sm:text-[13px] focus:outline-none focus:border-[#2D5016] transition-colors"
      >
        <span className={selected ? "text-[#2D5016]" : "text-[#4A7C2F]/60"}>
          {selected ? selected.label : "Select event type"}
        </span>
        <svg
          className={`w-4 h-4 text-[#4A7C2F] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Options list — inline, pushes content down */}
      {open && (
        <div className="w-full bg-white border border-[#C5D09B] rounded-lg mt-1 overflow-hidden shadow-md">
          {EVENT_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-3 font-dm text-[15px] sm:text-[13px] transition-colors
                ${value === opt.value
                  ? "bg-[#2D5016] text-white"
                  : "text-[#2D5016] hover:bg-[#F0F5E8]"
                }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}

      {error && <p className="text-red-500 text-[11px] mt-1">{error}</p>}
    </div>
  );
};

// ───────────────────────────────────────────────────────────────────────────

const ServiceFormModal: React.FC<ServiceFormModalProps> = ({
  isOpen,
  onClose,
  serviceType,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const config = serviceConfig[serviceType];

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(config?.schema),
  });

  const eventTypeValue = watch("event_type") ?? "";

  if (!isOpen || !config) return null;

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const payload = {
        ...data,
        service_type: serviceType,
        preferred_time_date: data.preferred_time_date
          ? new Date(data.preferred_time_date).toISOString()
          : undefined,
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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel — never wider than the screen */}
      <div className="relative z-10 w-full max-w-lg bg-[#FAFDF5] sm:rounded-2xl rounded-t-2xl px-5 pt-6 pb-8 sm:p-8 shadow-xl max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#4A7C2F] hover:text-[#2D5016] text-xl font-bold leading-none"
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className="font-cormorant font-bold text-[24px] sm:text-[30px] text-[#2D5016] mb-5">
          {config.title}
        </h2>

        {submitted ? (
          <div className="text-center py-10">
            <p className="font-cormorant text-[22px] text-[#2D5016] font-bold mb-2">
              Thank you!
            </p>
            <p className="font-dm text-[13px] text-[#4A7C2F]">
              We have received your request and will get back to you shortly.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-6 px-6 py-2 bg-[#2D5016] text-white font-dm text-[13px] rounded-lg hover:bg-[#4A7C2F] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <p className="font-dm font-bold text-[11px] tracking-widest text-[#2D5016] uppercase mb-4">
              {config.formTitle}
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

            {/* Email — full width on mobile */}
            <div>
              <input
                {...register("email")}
                type="email"
                inputMode="email"
                placeholder="Your email"
                className={inputClass}
              />
              {errors.email && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            {/* Phone — full width on mobile */}
            <div>
              <input
                {...register("phone_number")}
                type="tel"
                inputMode="tel"
                placeholder="Your phone number"
                className={inputClass}
              />
              {errors.phone_number && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.phone_number.message as string}
                </p>
              )}
            </div>

            {/* Date and Time Picker */}
            {config.fields.includes("preferred_time_date") && (
              <div>
                <Controller
                  name="preferred_time_date"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value ? new Date(field.value) : null}
                      onChange={(date: Date | null) => field.onChange(date)}
                      showTimeSelect
                      timeFormat="hh:mm aa"
                      timeIntervals={30}
                      dateFormat="MMMM d, yyyy h:mm aa"
                      minDate={new Date()}
                      placeholderText="Preferred date and time"
                      className={inputClass}
                      wrapperClassName="w-full"
                      calendarClassName="font-dm text-[#2D5016]"
                      withPortal
                    />
                  )}
                />
                {errors.preferred_time_date && (
                  <p className="text-red-500 text-[11px] mt-1">
                    {errors.preferred_time_date.message as string}
                  </p>
                )}
              </div>
            )}

            {/* Custom Event Type Dropdown */}
            {config.fields.includes("event_type") && (
              <CustomSelect
                value={eventTypeValue}
                onChange={(val) => setValue("event_type", val, { shouldValidate: true })}
                error={errors.event_type?.message as string}
              />
            )}

            {/* Message / Concern */}
            {config.fields.includes("message") && (
              <div>
                <input
                  {...register("message")}
                  placeholder={config.messagePlaceholder}
                  className={inputClass}
                />
                {errors.message && (
                  <p className="text-red-500 text-[11px] mt-1">
                    {errors.message.message as string}
                  </p>
                )}
              </div>
            )}

            {/* Contact Info */}
            <div className="pt-2">
              <p className="font-dm text-[12px] text-[#4A7C2F]">
                Call us: +63 990 000 000
              </p>
              <p className="font-dm text-[12px] text-[#4A7C2F]">
                Email: jcnaza.onefold@gmail.com
              </p>
            </div>

            {/* Submit — full width on mobile */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto sm:float-right px-8 py-3 bg-[#2D5016] text-white font-dm text-[14px] font-medium rounded-lg hover:bg-[#4A7C2F] transition-colors disabled:opacity-60"
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

export default ServiceFormModal;