import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { error } = await supabase
      .from("spiritual_service_submissions")
      .insert([body]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Save submission error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}