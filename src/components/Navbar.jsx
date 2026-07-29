import { logos } from '../assets'

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-inner container">
        <a href="#top" className="nav-logo">
          <img src={logos.promptiq} alt="PromptIQ" />
        </a>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#cast">Cast</a>
          <a href="#community">Community</a>
        </nav>
        <a href="#contact" className="nav-cta">Start a project</a>
      </div>
    </div>
  )
}
