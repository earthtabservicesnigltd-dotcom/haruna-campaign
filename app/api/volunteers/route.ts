// app/api/volunteers/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    let photo_url = null;

    // Upload photo to Supabase Storage if provided
    if (body.photoBase64) {
      const base64Data = body.photoBase64.split(",")[1] || body.photoBase64;
      const buffer = Buffer.from(base64Data, "base64");

      // Detect MIME type from base64 string
      const mimeType = body.photoBase64.split(";")[0].split(":")[1] || "image/jpeg";
      const ext = mimeType.split("/")[1] || "jpg";
      const fileName = `volunteer-${Date.now()}.${ext}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("volunteer-photos")
        .upload(fileName, buffer, {
          contentType: mimeType,
          upsert: false,
        });

      if (uploadError) {
        console.error("Upload error:", uploadError);
        return NextResponse.json({ error: "Photo upload failed" }, { status: 500 });
      }

      const { data: publicUrl } = supabase.storage
        .from("volunteer-photos")
        .getPublicUrl(fileName);

      photo_url = publicUrl.publicUrl;
    }

    // Insert volunteer record
    const { data, error } = await supabase
      .from("volunteers")
      .insert([{
        full_name: body.full_name,
        email: body.email,
        phone: body.phone,
        lga: body.lga,
        skills: body.skills,
        photo_url,
      }])
      .select()
      .single();

    if (error) {
      console.error("Insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ volunteer: data }, { status: 201 });
  } catch (error: any) {
    console.error("Server error:", error);
    return NextResponse.json({ error: error.message || "Invalid request" }, { status: 400 });
  }
}

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from("volunteers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ volunteers: data });
}
