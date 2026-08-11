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
          PromptIQ is an AI creative agency. We produce original film,
          build cinematic campaigns for brands, and teach AI skills that
          stick — with a roster of AI-native characters, entirely our own,
          showing exactly what's possible.
        </p>
        <div className="chip-row">
          <a href="https://cinema.promptiq.com.ng" className="chip"><span className="dot" />IQ Cinema</a>
          <a href="https://ads.promptiq.com.ng" className="chip"><span className="dot" />IQ Ads</a>
          <a href="https://academy.promptiq.com.ng" className="chip"><span className="dot" />IQ Academy</a>
          <a href="https://pulse.promptiq.com.ng" className="chip"><span className="dot" />IQ Pulse</a>
          <a href="https://meckury.ai" className="chip"><span className="dot" />Meckury AI</a>
        </div>
      </div>
    </header>
  )
}
