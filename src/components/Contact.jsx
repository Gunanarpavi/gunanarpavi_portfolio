import { Link2, Mail, Send } from 'lucide-react'
import { useState } from 'react'
import AnimatedSection from './AnimatedSection'

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = `Portfolio contact from ${formData.name || 'Visitor'}`
    const body = [
      `Name: ${formData.name || '-'}`,
      `Email: ${formData.email || '-'}`,
      '',
      'Message:',
      formData.message || '-'
    ].join('\n')

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <AnimatedSection id="contact" className="section contact-section">
      <p className="section-kicker">Contact</p>
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Share your thoughts</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-submit icon-glow">
            <Send size={16} />
            Send Message
          </button>
        </form>

        <div className="contact-card">
          <p className="contact-heading">Get In Touch</p>
          <p className="contact-copy">
            Fill out the form and click send. Your email app will open with your message addressed to me,
            so you can send it directly.
          </p>

          <a className="contact-mail icon-glow" href={`mailto:${profile.email}`}>
            <Mail size={18} />
            {profile.email}
          </a>

          <div className="social-row">
            <a className="icon-glow" href={profile.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub profile">
              <Link2 size={18} />
              GitHub
            </a>
            <a className="icon-glow" href={profile.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn profile">
              <Link2 size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
