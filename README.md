# PromptIQ — promptiq.ng

Homepage for PromptIQ, the AI creative agency. Built with React + Vite,
static (no backend server) — only Supabase is used, purely for the
inquiry form.

## Local development

```bash
npm install
cp .env.example .env   # then fill in your Supabase values
npm run dev
```

## Environment variables

Set these in **Vercel → Project Settings → Environment Variables**
(and in `.env` for local dev):

| Key | Value |
|---|---|
| `VITE_SUPABASE_URL` | Your Supabase project URL, e.g. `https://xxxx.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase **anon/public** key (never the service role key) |

These are read in `src/supabaseClient.js`. Never commit real values —
`.env` is already git-ignored.

## Database setup

Run `supabase/promptiq_inquiries.sql` in the Supabase SQL editor on
your Meckury AI project. It creates the `promptiq_inquiries` table with
Row Level Security enabled:

- The public (`anon` key, used by this site) can **only insert** new
  inquiries — no reading, updating, or deleting.
- `authenticated` users (e.g. you, via a future admin panel) can read
  and update inquiries.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it into Vercel.
3. Vercel auto-detects Vite (confirmed via `vercel.json`): build
   command `npm run build`, output directory `dist`.
4. Add the two environment variables above before the first deploy.
5. Point `promptiq.ng` at the Vercel deployment once the domain is
   acquired.

## Assets

All images (character portraits + logos) are served directly from the
public GitHub repo via `raw.githubusercontent.com` — see `src/assets.js`.
No local copies are stored in this project.

## Structure

```
src/
  components/     Navbar, Hero, Services, Cast, Community, Contact, Footer
  assets.js       Raw GitHub URLs for logos + cast images
  supabaseClient.js
supabase/
  promptiq_inquiries.sql   Table + RLS policies
```
