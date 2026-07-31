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
          <h2>Music, medicine, and code — one mind.</h2>
          <p>
            Long before "Meckury" meant an AI studio, it was a stage name —
            picked up during a run as a musician, back when supporting his own
            music meant learning 2D and 3D animation, graphic design, video
            editing, and After Effects, then a bit of HTML and CSS on the side.
          </p>
          <p>
            Nursing came later — registered with both the NMC (UK) and NMCN
            (Nigeria) — a separate discipline entirely. The systems thinking
            came from somewhere else: years of questioning how things actually
            work, reasoning through problems, and building whatever his
            imagination demanded, one new skill at a time. When generative AI
            arrived, it wasn't a new hobby so much as a new material — he now
            thinks and builds in it, deploying open-source models, and producing the films, ads, content, and AI
            education that make up PromptIQ today.
          </p>
        </div>
      </div>
    </section>
  )
}

