# The Standard

A personal editorial publication covering Motorcycles, Travel, Fashion, Music, Books, Photography, Coffee & Food, Film & Series, and Watches.

Built by Raj Pillay. Based in Pune, India.

**Live site:** [thestandard.co.in](https://www.thestandard.co.in)

---

## Tech Stack

- **Framework:** Astro 5.15.4
- **Styling:** Tailwind CSS 4.1.14
- **Animations:** AOS
- **Content:** MDX
- **Hosting:** Vercel
- **Images:** Cloudinary
- **Analytics:** Google Analytics (G-FDY7BJEL0S)

---

## Installation

```bash
# Using pnpm (recommended)
pnpm install
```

## Environment Variables

Copy `.env.example` to `.env` and set:

```
PUBLIC_SITE_URL=https://www.thestandard.co.in
```

## Development

```bash
pnpm dev
# Visit http://localhost:4321
```

## Build

```bash
pnpm build
pnpm preview
```

---

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   ├── config/         # site.js — site metadata
│   ├── content/
│   │   ├── post/       # Blog posts (.md / .mdx)
│   │   └── photography/ # Photography collections
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
└── package.json
```

---

## Adding Posts

Create a new `.md` file in `src/content/post/` with the following frontmatter:

```yaml
---
title: "Post Title"
description: "Short description."
publishDate: 2026-07-14
tags: ["Motorcycles"]
img: "https://res.cloudinary.com/dpsbm1jkq/image/upload/..."
img_alt: "Image description"
img_position: "center top"  # optional, controls hero crop
featured: false
---
```

## Adding Photography Posts

Create a new `.md` file in `src/content/photography/`:

```yaml
---
title: "Album Title"
category: "Motorcycles"
date: "2026-06-12"
cover: "https://res.cloudinary.com/..."
description: "Short description."
photos:
  - url: "https://res.cloudinary.com/..."
    caption: "Caption text"
---
```

---

## Notes

- Built on the [Rico Portfolio](https://github.com/ricocc/public-portfolio-site) open source template by Ricoui
- Content Layer API used throughout (Astro v5 compatible)
- `entry.id` used instead of deprecated `entry.slug`
- `render(entry)` used instead of deprecated `entry.render()`
