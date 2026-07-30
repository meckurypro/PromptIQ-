// src/components/Services.jsx
import { useEffect, useRef, useState } from 'react'
import { logos, heroBackgrounds } from '../assets'

const slides = [
  {
    key: 'cinema',
    logo: logos.iqCinema,
    name: 'IQ Cinema',
    desc: 'Original film and series production starring our roster of AI-native actors — built for streaming, festivals, and social release.',
    href: '#contact',
    linkLabel: 'Explore Cinema',
    bg: heroBackgrounds.cinema,
  },
  {
    key: 'ads',
    logo: logos.iqAds,
    name: 'IQ Ads',
    desc: 'Cinematic commercials for brands — built for products, services, and events that need real visibility, not stock footage.',
    href: '#contact',
    linkLabel: 'Explore Ads',
    bg: heroBackgrounds.ads,
  },
  {
    key: 'academy',
    logo: logos.iqAcademy,
    name: 'IQ Academy',
    desc: 'AI education built around how people actually learn — cohort workshops, one-on-one mentorship, hands-on internships, and quick consultations for creators and brands.',
    href: '#contact',
    linkLabel: 'Explore Academy',
    bg: heroBackgrounds.academy,
  },
  {
    key: 'meckuryAI',
    logo: logos.meckuryAI,
    name: 'Meckury AI',
    desc: 'The production platform behind PromptIQ — AI video generation, GPU render sessions, and creator tools, open to the public.',
    href: 'https://meckury.ai',
    linkLabel: 'Visit meckury.ai',
    external: true,
    bg: heroBackgrounds.meckuryAI,
  },
]

const AUTOPLAY_MS = 6000

export default function Services() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setActive((prev) => (prev + 1) % slides.length)
      }
    }, AUTOPLAY_MS)
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (i) => setActive((i + slides.length) % slides.length)

  return (
    <section id="services" className="slider-section">
      <div className="section-head container">
        <span className="eyebrow">What we do</span>
        <h2>One agency, four disciplines.</h2>
        <p>
          Each arm of PromptIQ stands on its own, built for a different job —
          from feature production to brand commercials to public AI education.
        </p>
      </div>

      <div
        className="slider"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        {slides.map((s, i) => (
          <div
            key={s.key}
            className={`slide${i === active ? ' is-active' : ''}`}
            style={{ backgroundImage: `url(${s.bg})` }}
            aria-hidden={i !== active}
          >
            <div className="slide-overlay" />
            <div className="slide-logo-badge">
              <img src={s.logo} alt={`${s.name} logo`} className="slide-logo" />
            </div>
            <div className="slide-content container">
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <a
                className="service-link"
                href={s.href}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noreferrer' : undefined}
              >
                {s.linkLabel} <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}

        <button className="slider-arrow prev" aria-label="Previous service" onClick={() => goTo(active - 1)}>
          ‹
        </button>
        <button className="slider-arrow next" aria-label="Next service" onClick={() => goTo(active + 1)}>
          ›
        </button>

        <div className="slider-dots">
          {slides.map((s, i) => (
            <button
              key={s.key}
              className={`slider-dot${i === active ? ' is-active' : ''}`}
              aria-label={`Go to ${s.name}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
