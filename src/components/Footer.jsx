import { logos } from '../assets'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-brand">
          <span>Built on</span>
          <img src={logos.meckuryAI} alt="Meckury AI" />
          <a href="https://meckury.ai" target="_blank" rel="noreferrer">meckury.ai</a>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#cast">Cast</a>
          <a href="#contact">Contact</a>
        </div>
        <span style={{ color: 'var(--muted)', fontSize: 13 }}>
          © {new Date().getFullYear()} PromptIQ
        </span>
      </div>
    </footer>
  )
}
