import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    console.log("=== Contact API Called ===")

    // Parse and validate request body
    let body
    try {
      body = await req.json()
      console.log("Request body parsed successfully")
    } catch (parseError) {
      console.error("Failed to parse request body:", parseError)
      return NextResponse.json({ error: "Invalid request format" }, { status: 400 })
    }

    const { name, email, message } = body
    console.log("Form data received:", { name: name?.substring(0, 10) + "...", email, messageLength: message?.length })

    // Validate required fields
    if (!name || !email || !message) {
      console.log("Missing required fields")
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate field types and lengths
    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      console.log("Invalid field types")
      return NextResponse.json({ error: "Invalid field types" }, { status: 400 })
    }

    if (name.trim().length < 2) {
      console.log("Name too short")
      return NextResponse.json({ error: "Name must be at least 2 characters" }, { status: 400 })
    }

    if (message.trim().length < 10) {
      console.log("Message too short")
      return NextResponse.json({ error: "Message must be at least 10 characters" }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log("Invalid email format")
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Check if RESEND_API_KEY is available
    const apiKey = process.env.RESEND_API_KEY
    console.log("API Key status:", apiKey ? "Present" : "Missing")
    console.log("API Key preview:", apiKey ? apiKey.substring(0, 8) + "..." : "N/A")

    if (!apiKey) {
      console.log("RESEND_API_KEY is missing - running in demo mode")
      return NextResponse.json(
        {
          success: true,
          message: "Message received! (Demo mode - RESEND_API_KEY not configured)",
          demo: true,
        },
        { status: 200 },
      )
    }

    // Try to use Resend
    try {
      console.log("Importing Resend...")
      const { Resend } = await import("resend")
      console.log("Resend imported successfully")

      console.log("Creating Resend instance...")
      const resend = new Resend(apiKey)
      console.log("Resend instance created")

      console.log("Preparing email data...")
      const emailData = {
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["markstevensibayan11@gmail.com"],
        replyTo: email.trim(),
        subject: `Portfolio Contact: ${name.trim()}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
            </div>
            
            <div style="background-color: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
              <div style="background-color: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #2563eb; margin: 0 0 8px 0; font-size: 16px;">👤 Name</h3>
                  <p style="margin: 0; font-size: 18px; color: #1f2937; font-weight: 500;">${name.trim()}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #2563eb; margin: 0 0 8px 0; font-size: 16px;">📧 Email</h3>
                  <p style="margin: 0;">
                    <a href="mailto:${email.trim()}" style="color: #3b82f6; text-decoration: none; font-size: 16px;">${email.trim()}</a>
                  </p>
                </div>
                
                <div style="margin-bottom: 0;">
                  <h3 style="color: #2563eb; margin: 0 0 12px 0; font-size: 16px;">💬 Message</h3>
                  <div style="background-color: #f1f5f9; padding: 20px; border-radius: 6px; border-left: 4px solid #3b82f6;">
                    <p style="margin: 0; line-height: 1.6; color: #374151; white-space: pre-wrap;">${message.trim()}</p>
                  </div>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 25px;">
                <p style="color: #6b7280; font-size: 14px; margin: 0;">
                  📅 Sent on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
                </p>
                <p style="color: #6b7280; font-size: 12px; margin: 5px 0 0 0;">
                  Sent from your portfolio contact form
                </p>
              </div>
            </div>
          </div>
        `,
        text: `
New Contact Form Submission

Name: ${name.trim()}
Email: ${email.trim()}
Date: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}

Message:
${message.trim()}

---
Sent from your portfolio contact form
        `,
      }

      console.log("Email data prepared:", {
        from: emailData.from,
        to: emailData.to,
        subject: emailData.subject,
        replyTo: emailData.replyTo,
      })

      console.log("Sending email via Resend...")
      const emailResult = await resend.emails.send(emailData)
      console.log("Resend response:", emailResult)

      // Check for Resend errors
      if (emailResult.error) {
        console.error("Resend API error:", emailResult.error)
        return NextResponse.json(
          {
            error: `Email service error: ${emailResult.error.message || "Unknown error"}`,
          },
          { status: 500 },
        )
      }

      if (!emailResult.data) {
        console.error("No data in Resend response")
        return NextResponse.json({ error: "Email service returned no data" }, { status: 500 })
      }

      console.log("Email sent successfully:", emailResult.data)

      return NextResponse.json(
        {
          success: true,
          message: "Email sent successfully! I'll get back to you soon.",
          emailId: emailResult.data.id,
        },
        { status: 200 },
      )
    } catch (resendError) {
      console.error("Error with Resend:", resendError)

      // Log detailed error information
      if (resendError instanceof Error) {
        console.error("Resend error details:", {
          name: resendError.name,
          message: resendError.message,
          stack: resendError.stack,
        })

        return NextResponse.json(
          {
            error: `Email service error: ${resendError.message}`,
          },
          { status: 500 },
        )
      }

      return NextResponse.json({ error: "Email service error" }, { status: 500 })
    }
  } catch (error) {
    console.error("Unexpected error in contact API:", error)

    // Log detailed error information
    if (error instanceof Error) {
      console.error("Error details:", {
        name: error.name,
        message: error.message,
        stack: error.stack,
      })
    }

    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 },
    )
  }
}
