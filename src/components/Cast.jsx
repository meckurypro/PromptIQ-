import { useEffect, useRef } from 'react'
import { cast } from '../assets'

function CastCard({ member }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="cast-card" ref={ref}>
      <img src={member.img} alt={member.name} loading="lazy" />
      <div className="cast-caption">
        <span className="name">{member.name}</span>
        <span className="role">{member.role}</span>
      </div>
    </div>
  )
}

export default function Cast() {
  return (
    <section id="cast">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Digital characters</span>
          <h2>Meet our AI-native cast.</h2>
          <p>
            Zara, Nyx, and the rest of the roster are PromptIQ's own creations —
            proof of what an AI-native character can do, not talent for hire.
            Want your own AI twin or AI influencer? We build custom personas
            for brands and individuals, or teach you to build one yourself
            through IQ Academy.
          </p>
        </div>
        <div className="cast-grid">
          {cast.map((member) => (
            <CastCard member={member} key={member.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
