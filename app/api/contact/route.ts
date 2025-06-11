import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
//correct
export async function POST(req: Request) {
  // Validate environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return NextResponse.json(
      { error: "Email configuration is missing" },
      { status: 500 }
    )
  }

  try {
    // Validate request body
    const { name, email, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Email transporter configuration
    const transporter = nodemailer.createTransport({
      service: "markstevensibayan11@gmail", // Changed from your email address to 'gmail'
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "markstevensibayan11@gmail.com",
      replyTo: email, // So you can reply directly to the sender
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            Sent from your portfolio contact form.
          </p>
        </div>
      `,
      text: `New message from ${name} (${email}):\n\n${message}`,
    }

    // Send email
    await transporter.sendMail(mailOptions)
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )

  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }
}
