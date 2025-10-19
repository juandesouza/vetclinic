import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    if (!name || !phone || !email) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
      return NextResponse.json(
        { ok: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    const html = `
      <div>
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    // Use a safe default sender for testing unless CONTACT_FROM_EMAIL is set.
    // Resend requires a verified domain for custom from addresses.
    const from = process.env.CONTACT_FROM_EMAIL || "BlueCare Vet Clinic <onboarding@resend.dev>";

    const { data, error } = await resend.emails.send({
      from,
      to: [String(process.env.CONTACT_TO_EMAIL)],
      subject: "New Appointment Request",
      html,
      reply_to: email,
    } as any);

    // Log for observability on the server (visible in server logs/Vercel logs)
    if (error) {
      console.error("[contact] Resend send error", { error });
      return NextResponse.json(
        { ok: false, error: error.message || "Email send failed" },
        { status: 502 }
      );
    }

    console.info("[contact] Resend accepted message", { id: data?.id });

    // Only redirect if Resend accepted the message and returned an id
    if (data?.id) {
      return NextResponse.redirect(new URL("/thank-you", req.url), { status: 303 });
    }

    // Fallback, should be rare
    return NextResponse.json(
      { ok: false, error: "Unknown email send result" },
      { status: 502 }
    );
  } catch (err) {
    console.error("[contact] Unexpected error", err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}


