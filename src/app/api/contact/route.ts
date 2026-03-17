import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"itsniels.com" <${process.env.SMTP_USER}>`,
      to: "niels.schnadt@gmail.com",
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:monospace;background:#000;color:#fff;padding:32px;max-width:600px">
          <p style="color:#888;font-size:11px;text-transform:uppercase;letter-spacing:2px;margin:0 0 24px">itsniels.com — new enquiry</p>
          <p style="margin:0 0 8px"><span style="color:#888">From:</span> ${name}</p>
          <p style="margin:0 0 24px"><span style="color:#888">Email:</span> <a href="mailto:${email}" style="color:#007AFF">${email}</a></p>
          <p style="color:#888;font-size:11px;text-transform:uppercase;letter-spacing:2px;margin:0 0 12px">Message</p>
          <p style="white-space:pre-wrap;border-left:1px solid #1a1a1a;padding-left:16px;color:#ccc">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
