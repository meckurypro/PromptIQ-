import { useState } from 'react'
import { supabase } from '../supabaseClient'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  inquiry_type: 'consultation',
  service_interest: 'cinema',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'submitting', message: '' })

    const { error } = await supabase.from('promptiq_inquiries').insert([
      {
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        inquiry_type: form.inquiry_type,
        service_interest: form.service_interest,
        message: form.message,
        status: 'new',
        source: 'promptiq.ng',
      },
    ])

    if (error) {
      setStatus({ state: 'error', message: "Something didn't send. Please try again or email us directly." })
      return
    }

    setStatus({ state: 'success', message: "Got it — we'll be in touch shortly." })
    setForm(initialForm)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-blurb">
            <span className="eyebrow">Start a project</span>
            <h2>Tell us what you're building.</h2>
            <p>
              Custom film work, brand commercials, consultations, or an AI
              workshop for your community — send the details and we'll route
              it to the right team.
            </p>
          </div>

          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-row">
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" required value={form.name} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label htmlFor="phone">Phone / WhatsApp</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9+ ]*"
                  required
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="inquiry_type">Inquiry type</label>
                <select id="inquiry_type" name="inquiry_type" value={form.inquiry_type} onChange={handleChange}>
                  <option value="consultation">Consultation</option>
                  <option value="custom_job">Custom job</option>
                  <option value="content_request">Content request</option>
                  <option value="general">General</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="service_interest">Service of interest</label>
              <select id="service_interest" name="service_interest" value={form.service_interest} onChange={handleChange}>
                <option value="cinema">IQ Cinema</option>
                <option value="ads">IQ Ads</option>
                <option value="academy">IQ Academy</option>
                <option value="meckury_ai">Meckury AI</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message">Job description / details</label>
              <textarea id="message" name="message" required value={form.message} onChange={handleChange} />
            </div>

            <button className="submit-btn" type="submit" disabled={status.state === 'submitting'}>
              {status.state === 'submitting' ? 'Sending…' : 'Send inquiry'}
            </button>

            {status.state === 'success' && <p className="form-status ok">{status.message}</p>}
            {status.state === 'error' && <p className="form-status err">{status.message}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
