import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    const errors: string[] = []
    if (!name) errors.push('Name')
    if (!email) errors.push('Email')
    if (!message) errors.push('Message')

    if (errors.length > 0) {
      return NextResponse.json({ error: `Please provide: ${errors.join(', ')}` }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL || 'badhonbytebd@gmail.com',
      subject: subject || 'No Subject',
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 })
  }
}
