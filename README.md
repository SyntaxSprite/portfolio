# Developer Portfolio

A employment-ready portfolio for **mobile & full-stack** roles. Built from your GitHub projects, deployable free on [Vercel](https://vercel.com), and easy to keep updated.

## Features

- **JSON-driven content** — edit one file to update projects, skills, and bio
- **GitHub auto-sync** — fetches your latest repos hourly (ISR) when `GITHUB_USERNAME` is set
- **Featured projects** — CampusConnect Pro, ArtizanSquare, TRW Capital, SwiftSend, TrackWise, CauseBloom, StyleAI, and more
- **SEO & Open Graph** — ready for recruiters and LinkedIn
- **On-demand refresh** — `POST /api/revalidate` after you push new repos

## Quick start

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize (5 minutes)

1. Edit **`src/data/portfolio.json`**:
   - `name`, `email`, `github`, `linkedin`, `location`
   - Add/remove projects under `projects`
   - Toggle `featured: true` for portfolio highlights

2. Add your resume: copy `resume.pdf` into **`public/resume.pdf`**

3. Copy `.env.example` to `.env.local` and set:
   ```
   GITHUB_USERNAME=your-github-username
   ```

## Deploy to Vercel (free)

1. Push this folder to a new GitHub repo (e.g. `yourusername/portfolio`)
2. Go to [vercel.com/new](https://vercel.com/new) → Import the repo
3. Add environment variables:
   - `GITHUB_USERNAME` = your GitHub username
   - (optional) `GITHUB_TOKEN` = personal access token for higher API limits
   - (optional) `REVALIDATE_SECRET` = random string for manual cache refresh
4. Deploy — you get a `*.vercel.app` URL

Every `git push` redeploys automatically. GitHub repos refresh every hour without redeploying.

## How updates work

| Method | What happens |
|--------|----------------|
| Edit `portfolio.json` + push | Full content update on next deploy |
| Push code to GitHub repos | "Latest from GitHub" section updates hourly |
| `POST /api/revalidate` with `Authorization: Bearer <REVALIDATE_SECRET>` | Immediate cache refresh |

## Project structure

```
src/
  data/portfolio.json   ← main content (edit this)
  components/           ← UI sections
  lib/portfolio.ts      ← data + GitHub merge logic
  lib/github.ts         ← GitHub API with ISR
  app/page.tsx          ← single-page portfolio
```

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Lucide icons
- Vercel hosting + ISR

## Employment tips

- Set `availableForWork: true` when job hunting
- Keep **3–5 featured** projects with strong highlights (not 20)
- Add live demo URLs where possible (`liveUrl` in each project)
- Match job posts: mobile roles → lead with ArtizanSquare + TrackWise; full-stack → CampusConnect + TRW + SwiftSend
