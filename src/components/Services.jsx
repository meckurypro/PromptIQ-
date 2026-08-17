// src/components/Services.jsx
import { useEffect, useRef, useState } from 'react'
import { logos, heroBackgrounds } from '../assets'

const slides = [
  {
    key: 'cinema',
    logo: logos.iqCinema,
    name: 'IQ Cinema',
    desc: 'Original film and series production starring our roster of AI-native actors — built for streaming, festivals, and social release.',
    href: 'https://cinema.promptiq.com.ng',
    linkLabel: 'Explore Cinema',
    external: true,
    bg: heroBackgrounds.cinema,
  },
  {
    key: 'ads',
    logo: logos.iqAds,
    name: 'IQ Ads',
    desc: 'Cinematic commercials for brands — built for products, services, and events that need real visibility, not stock footage.',
    href: 'https://ads.promptiq.com.ng',
    linkLabel: 'Explore Ads',
    external: true,
    bg: heroBackgrounds.ads,
  },
  {
    key: 'academy',
    logo: logos.iqAcademy,
    name: 'IQ Academy',
    desc: 'AI education built around how people actually learn — cohort workshops, one-on-one mentorship, hands-on internships, and quick consultations for creators and brands.',
    href: 'https://academy.promptiq.com.ng',
    linkLabel: 'Explore Academy',
    external: true,
    bg: heroBackgrounds.academy,
  },
    {
    key: 'pulse',
    logo: logos.iqPulse,
    name: 'IQ Pulse',
    desc: "Daily content on history, culture, and AI — the stream behind PromptIQ's social presence. Available for brand collaborations and custom commissions too.",
    href: 'https://pulse.promptiq.com.ng',
    linkLabel: 'Explore Pulse',
    external: true,
    bg: heroBackgrounds.pulse,
  },
  {
    key: 'music',
    logo: logos.iqMusic,
    name: 'IQ Music',
    desc: "PromptIQ's record label — a roster of AI performers, branded and managed in-house, releasing original music across every genre.",
    href: 'https://music.promptiq.com.ng',
    linkLabel: 'Explore Music',
    external: true,
    bg: heroBackgrounds.music,
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
        <h2>One agency, five disciplines.</h2>
        <p>
          Each arm of PromptIQ stands on its own, built for a different job —
          from feature production and brand commercials to daily content and
          public AI education.
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
              {s.logo ? (
                <img src={s.logo} alt={`${s.name} logo`} className="slide-logo" />
              ) : (
                <span className="slide-wordmark">{s.wordmark}</span>
              )}
            </div>
            <div className="slide-content container">
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              
                className="service-link"
              <a
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
