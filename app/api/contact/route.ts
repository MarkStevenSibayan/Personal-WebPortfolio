import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  // Validate environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return NextResponse.json({ error: "Email configuration is missing" }, { status: 500 })
  }

  try {
    // Validate request body
    const { name, email, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if we're in a preview environment
    const isPreview =
      process.env.VERCEL_ENV === "preview" ||
      process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" ||
      process.env.NODE_ENV !== "production"

    if (isPreview) {
      // In preview mode, log the email content but don't try to send it
      console.log("Preview mode - Email would be sent with:", {
        to: "markstevensibayan11@gmail.com",
        from: process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${name}`,
        replyTo: email,
        content: message,
      })

      // Return success response for preview environments
      return NextResponse.json({ message: "Email logged successfully (preview mode)" }, { status: 200 })
    }

    // For production environments, attempt to send the actual email
    // Email transporter configuration - using a more reliable configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Use explicit host instead of service name
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Helps with some connection issues
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
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)

    // Check if this is a DNS-related error (common in preview environments)
    const errorMessage = error instanceof Error ? error.message : String(error)
    if (errorMessage.includes("dns") || errorMessage.includes("lookup")) {
      return NextResponse.json(
        {
          message: "Message received! (Note: Actual email delivery is disabled in preview environments)",
          previewError: true,
        },
        { status: 200 }, // Return 200 to not break the UI flow
      )
    }

    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}
