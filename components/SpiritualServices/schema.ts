import * as yup from "yup";

const baseSchema = {
  full_name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone_number: yup.string().required("Phone number is required"),
};

export const prayerCounselingSchema = yup.object({
  ...baseSchema,
  preferred_time_date: yup.string().required("Preferred time and date is required"),
  message: yup.string().required("Your concern is required"),
});

export const blessingsSchema = yup.object({
  ...baseSchema,
  preferred_time_date: yup.string().required("Preferred time and date is required"),
  message: yup.string().required("Your concern is required"),
});

export const requestFilesSchema = yup.object({
  ...baseSchema,
  message: yup.string().required("Document type is required"),
});

export const baptismSchema = yup.object({
  ...baseSchema,
  preferred_time_date: yup.string().required("Preferred time and date is required"),
});

export const specialEventsSchema = yup.object({
  ...baseSchema,
  event_type: yup.string().required("Event type is required"),
  preferred_time_date: yup.string().required("Preferred time and date is required"),
});