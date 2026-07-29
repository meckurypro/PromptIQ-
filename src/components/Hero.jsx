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
          PromptIQ is a Lagos-based AI creative agency producing original films,
          cinematic brand campaigns, and community AI-literacy programs — brought
          to life by a cast of AI-native talent.
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
