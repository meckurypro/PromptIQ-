import { logos } from '../assets'

const services = [
  {
    logo: logos.iqCinema,
    name: 'IQ Cinema',
    desc: 'Original film and series production starring our roster of AI-native actors — built for streaming, festivals, and social release.',
    href: '#contact',
    linkLabel: 'Explore Cinema',
    placeholder: true,
  },
  {
    logo: logos.iqAds,
    name: 'IQ Ads',
    desc: 'Cinematic commercials for brands — built for products, services, and events that need real visibility, not stock footage.',
    href: '#contact',
    linkLabel: 'Explore Ads',
    placeholder: true,
  },
  {
    logo: logos.iqAcademy,
    name: 'IQ Academy',
    desc: 'Hands-on AI literacy for communities — from foundational AI skills to workflow automation and AI-assisted web development.',
    href: '#contact',
    linkLabel: 'Explore Academy',
    placeholder: true,
  },
  {
    logo: logos.meckuryAI,
    name: 'Meckury AI',
    desc: 'The production platform behind PromptIQ — AI video generation, GPU render sessions, and creator tools, open to the public.',
    href: 'https://meckury.ai',
    linkLabel: 'Visit meckury.ai',
    featured: true,
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2>One agency, four disciplines.</h2>
          <p>
            Each arm of PromptIQ stands on its own, built for a different job —
            from feature production to brand commercials to public AI education.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className={`service-card${s.featured ? ' featured' : ''}`} key={s.name}>
              <img src={s.logo} alt={`${s.name} logo`} className="service-logo" />
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <a
                className="service-link"
                href={s.href}
                target={s.featured ? '_blank' : undefined}
                rel={s.featured ? 'noreferrer' : undefined}
              >
                {s.linkLabel} <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
