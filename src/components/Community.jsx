const audiences = [
  { tag: 'Churches', desc: 'Congregation-based AI literacy cohorts — practical skills, no jargon.' },
  { tag: 'Schools', desc: 'Introductory AI and workflow automation for students and staff.' },
  { tag: 'Workplaces', desc: 'Team-wide upskilling — AI tools, automation, and assisted web development.' },
]

export default function Community() {
  return (
    <section className="community" id="community">
      <div className="container community-grid">
        <div>
          <span className="eyebrow">IQ Academy</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 3.6vw, 38px)',
            fontWeight: 600,
            margin: '16px 0 14px',
          }}>
            AI education, built for communities.
          </h2>
          <p style={{ color: 'var(--paper-dim)', lineHeight: 1.6, maxWidth: 480 }}>
            We run cohort-based workshops rather than one-off lectures — starting
            with foundational AI understanding, moving into workflow automation
            and AI-assisted web and app creation, and expanding as new skills
            become useful to teach.
          </p>
        </div>
        <div className="audience-list">
          {audiences.map((a) => (
            <div className="audience-item" key={a.tag}>
              <span className="tag">{a.tag}</span>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
