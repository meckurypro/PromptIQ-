// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner footer-inner--simple">
        <span style={{ color: 'var(--muted)', fontSize: 13 }}>
          Built with <span aria-hidden="true">❤️</span> by LinkAI. © {new Date().getFullYear()} PromptIQ
        </span>
      </div>
    </footer>
  )
}
