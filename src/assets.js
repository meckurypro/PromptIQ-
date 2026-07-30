// src/assets.js
const BASE = 'https://raw.githubusercontent.com/meckurypro/PromptIQ-/main/public'

export const logos = {
  promptiq: `${BASE}/promptiqlogo.png`,
  iqCinema: `${BASE}/iqcinemalogo.webp`,
  iqAds: `${BASE}/iqadslogo.png`,
  iqAcademy: `${BASE}/iqacademy.png`,
  meckuryAI: `${BASE}/meckuryaiicon.png`,
  favicon: `${BASE}/promptiqfavicon.png`,
}

export const cast = [
  { name: 'Zara', role: 'Actress & Model', img: `${BASE}/zara.png` },
  { name: 'Nyx', role: 'Actress & Dancer', img: `${BASE}/nyx.jpg` },
  { name: 'Kairo Zayn', role: 'Musician', img: `${BASE}/zayn.png` },
  { name: 'Mitchell Orga', role: 'Actress & Influencer', img: `${BASE}/orga.png` },
  { name: 'Koba', role: 'Rapper', img: `${BASE}/koba.png` },
  { name: 'Zoba', role: 'Singer', img: `${BASE}/zoba.png` },
]

// Placeholder editorial backgrounds for the services hero slider.
// Swap these seeded picsum.photos URLs for real production stills /
// campaign photography / classroom photos whenever they're ready —
// just replace the `bg` value below, everything else stays the same.
export const heroBackgrounds = {
  cinema: 'https://picsum.photos/seed/promptiq-cinema/1600/900',
  ads: 'https://picsum.photos/seed/promptiq-ads/1600/900',
  academy: 'https://picsum.photos/seed/promptiq-academy/1600/900',
  meckuryAI: 'https://picsum.photos/seed/promptiq-meckury/1600/900',
}

export const contact = {
  phone: '+2348162465247',
  phoneDisplay: '+234 816 246 5247',
  email: 'promptiq2026@gmail.com',
}

// Assumed handle-based URLs from the @promptiq.ng handle given —
// update these to the real profile links once confirmed.
export const socials = [
  { label: 'Instagram', href: 'https://instagram.com/promptiq.ng' },
  { label: 'TikTok', href: 'https://tiktok.com/@promptiq.ng' },
  { label: 'X', href: 'https://x.com/promptiq.ng' },
  { label: 'YouTube', href: 'https://youtube.com/@promptiq.ng' },
]
