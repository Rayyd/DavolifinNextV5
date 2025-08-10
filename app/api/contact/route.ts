import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  try {
    const ct = req.headers.get('content-type') || ''
    let data: any = {}
    if (ct.includes('application/json')) data = await req.json()
    else {
      const form = await req.formData()
      data = Object.fromEntries(form.entries())
    }
    const name = String(data.name || '')
    const email = String(data.email || '')
    const company = String(data.company || '')
    const message = String(data.message || '')
    if (!name || !email || !message) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const CONTACT_TO = process.env.CONTACT_TO || 'you@example.com'
    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY)
      const { data: sendData, error } = await resend.emails.send({
        from: 'Davolifin Contact <noreply@your-domain.tld>',
        to: [CONTACT_TO],
        subject: `Nouveau message (${name})`,
        reply_to: email,
        text: `Nom: ${name}\nEmail: ${email}\nSociété: ${company}\n\nMessage:\n${message}`
      })
      if (error) return NextResponse.json({ error: String(error) }, { status: 500 })
      return NextResponse.json({ ok: true, via: 'resend', id: sendData?.id })
    }

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
    if (formspreeId) {
      const resp = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, message })
      })
      const j = await resp.json().catch(() => ({}))
      if (!resp.ok) return NextResponse.json({ error: j || 'Formspree error' }, { status: 500 })
      return NextResponse.json({ ok: true, via: 'formspree' })
    }
    return NextResponse.json({ error: 'No email backend configured' }, { status: 501 })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 })
  }
}
