// src/components/Community.jsx
const programs = [
  {
    tag: 'Cohorts',
    desc: 'Community-based workshops for churches, schools, and workplace teams — practical AI skills, no jargon.',
  },
  {
    tag: 'Mentorship',
    desc: 'One-on-one guidance for individuals building real AI skills at their own pace.',
  },
  {
    tag: 'Internships',
    desc: 'Learn by doing — work directly on live PromptIQ projects while you train.',
  },
  {
    tag: 'Consultations',
    desc: 'A focused one-hour call to demystify AI confusion for creators and brands — often, that\u2019s all it takes.',
  },
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
            AI education, built around how people actually learn.
          </h2>
          <p style={{ color: 'var(--paper-dim)', lineHeight: 1.6, maxWidth: 480 }}>
            Beyond one-off lectures, IQ Academy runs cohort programs, personal
            mentorship, and hands-on internships — plus quick consultations
            for anyone who just needs a clear answer.
          </p>
        </div>
        <div className="audience-list">
          {programs.map((p) => (
            <div className="audience-item" key={p.tag}>
              <span className="tag">{p.tag}</span>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
