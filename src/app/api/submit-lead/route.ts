import { NextRequest, NextResponse } from "next/server";

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbxIoWiPdzrBpZNL5B6ojfqgej9gBP1vbhQgtTD-isZqazi953XF7sF6kxrb9zCy3UGBVA/exec";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Use GET with query params — most reliable for Apps Script webhooks
    const params = new URLSearchParams();
    Object.entries(body).forEach(([k, v]) => params.append(k, String(v ?? "")));

    const response = await fetch(`${SHEETS_URL}?${params.toString()}`, {
      method: "GET",
      redirect: "follow",
    });

    const text = await response.text();
    return NextResponse.json({ success: true, result: text });
  } catch (err) {
    console.error("Sheet submission error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to submit" },
      { status: 500 }
    );
  }
}
