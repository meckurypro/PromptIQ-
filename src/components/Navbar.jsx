// src/components/Navbar.jsx
import { useState } from 'react'
import { logos, contact, socials } from '../assets'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="nav">
      <div className="nav-inner container">
        <a href="#top" className="nav-logo" onClick={() => setOpen(false)}>
          <img src={logos.promptiq} alt="PromptIQ" />
        </a>

        {/* Inline links — visible on wider screens only, hidden on mobile via CSS */}
        <nav className="nav-links nav-links-inline">
          <a href="#services">Services</a>
          <a href="#cast">Cast</a>
          <a href="#community">Community</a>
        </nav>

        <div className="nav-right">
          <a href="#contact" className="nav-cta">Start a project</a>
          <button
            className={`hamburger${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile drawer — links + contact + socials */}
      <div className={`mobile-drawer${open ? ' is-open' : ''}`}>
        <nav className="mobile-links" onClick={() => setOpen(false)}>
          <a href="#services">Services</a>
          <a href="#cast">Cast</a>
          <a href="#community">Community</a>
        </nav>

        <div className="mobile-contact">
          <span className="mobile-contact-label">Contact us</span>
          <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>

        <div className="mobile-socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
