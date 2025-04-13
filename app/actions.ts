"use server"

import nodemailer from "nodemailer"

// Function to safely send emails or mock it in preview environments
async function sendEmail(mailOptions: any) {
  // Check if we're in a preview/development environment
  const isPreviewEnv = process.env.NODE_ENV === "development" || !process.env.EMAIL_HOST

  if (isPreviewEnv) {
    // Mock email sending in preview environment
    console.log("MOCK EMAIL SENDING (Preview Environment):", {
      to: mailOptions.to,
      subject: mailOptions.subject,
      text: mailOptions.text,
    })
    return { success: true }
  }

  try {
    // Create a reusable transporter object using the environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Send the actual email
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Email sending error:", error)
    throw error
  }
}

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return { success: false, message: "All fields are required" }
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: "jorisjanbroers@gmail.com",
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email (or mock it in preview)
    await sendEmail(mailOptions)

    return { success: true, message: "Your message has been sent!" }
  } catch (error) {
    console.error("Error sending contact form email:", error)
    return { success: false, message: "Failed to send message. Please try again later." }
  }
}

export async function subscribeToNewsletter(formData: FormData | { email: string }) {
  try {
    let email: string

    // Check if formData is a FormData object or a plain object
    if (formData instanceof FormData) {
      email = formData.get("email") as string
    } else {
      email = formData.email
    }

    // Validate input
    if (!email) {
      return { success: false, message: "Email is required" }
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: "jorisjanbroers@gmail.com",
      subject: "New Newsletter Subscription",
      text: `
        New subscription to the newsletter:
        Email: ${email}
      `,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p>Someone has subscribed to your newsletter with the following email address:</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    }

    // Send email (or mock it in preview)
    await sendEmail(mailOptions)

    return { success: true, message: "You have been subscribed!" }
  } catch (error) {
    console.error("Error sending subscription email:", error)
    return { success: false, message: "Failed to subscribe. Please try again later." }
  }
}
