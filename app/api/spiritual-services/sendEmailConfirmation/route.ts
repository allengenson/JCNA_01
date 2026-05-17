import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { full_name, email, service_type } = body;

    const response = await fetch("https://api.mailersend.com/v1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MAILERSEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: {
          email: process.env.MAIL_FROM_EMAIL,
          name: process.env.MAIL_FROM_NAME,
        },
        to: [{ email, name: full_name }],
        subject: `Your ${service_type} Request Has Been Received`,
        text: `Dear ${full_name},\n\nThank you for reaching out to us. We have received your ${service_type} request and will get back to you shortly.\n\nGod bless you,\n${process.env.MAIL_FROM_NAME}`,
      }),
    });

    if (!response.ok) throw new Error("Failed to send email");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}