export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-glow" />
      <div className="container hero-content">
        <span className="eyebrow">PromptIQ — AI Creative Agency</span>
        <h1>
          Film. Brand. Skill.<br />
          All engineered <em>with AI.</em>
        </h1>
        <p className="lede">
          PromptIQ is a Nigerian AI creative agency. We produce original film,
          build cinematic campaigns for brands, and teach AI skills that
          stick — with a roster of AI-native characters, entirely our own,
          showing exactly what's possible.
        </p>
        <div className="chip-row">
          <a href="#services" className="chip"><span className="dot" />IQ Cinema</a>
          <a href="#services" className="chip"><span className="dot" />IQ Ads</a>
          <a href="#services" className="chip"><span className="dot" />IQ Academy</a>
          <a href="#services" className="chip"><span className="dot" />Meckury AI</a>
        </div>
      </div>
    </header>
  )
}
