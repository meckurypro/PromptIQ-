// src/components/Founder.jsx
import { founder } from '../assets'
export default function Founder() {
  return (
    <section id="founder">
      <div className="container founder-grid">
        <div className="founder-photo-wrap">
          <img src={founder.image} alt={founder.name} className="founder-photo" />
        </div>
        <div>
          <span className="eyebrow">The founder</span>
          <h2>A new material to build in.</h2>
          <p>
            "Meckury" started as a stage name, back when he was a musician
            teaching himself animation, design, and editing just to support
            his own music.
          </p>
          <p>
            Nursing came next — a different discipline, same instinct: pull
            things apart, figure out how they work, build what the
            imagination demands.
          </p>
          <p>
            Generative AI wasn't a new hobby. It was a new material. He builds
            in it now — open-source models, films, ads, and the AI education
            that make up PromptIQ today.
          </p>
        </div>
      </div>
    </section>
  )
}
