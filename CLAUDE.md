# CLAUDE.md — bagboys.com

Session briefing for Claude Code. Read this at the start of every session.

---

## What Is This

A rebuild of bagboys.com — the website for The Bagboys, a Boston-area
bluegrass/western swing band. The original site runs on Weebly/Square.
This project reproduces it faithfully as a static Astro site deployed
to Cloudflare Pages.

Same stack and workflow as frankdrake.org (see that project for
reference on Astro patterns, Cloudflare Pages deployment, etc.).

---

## Stack

- **Framework:** Astro (static output)
- **Hosting:** Cloudflare Pages
- **Repo:** GitHub (to be created)
- **No backend required** — this is a fully static site

---

## Project Layout

```
bagboys/
├── CLAUDE.md              ← you are here (session briefing)
├── Admin/
│   ├── SPEC.md            ← full site specification and content inventory
│   └── TODO.md            ← running task list (create as needed)
├── src/
│   ├── pages/             ← one .astro file per page
│   ├── layouts/           ← shared page layouts
│   ├── components/        ← reusable UI components
│   └── styles/            ← global CSS
└── public/
    └── images/            ← photos, band images, promo assets
```

---

## Goal and Constraints

- **Reproduce the original site as closely as possible** — layout,
  navigation, content, and feel. This is a migration, not a redesign.
- The original site is at bagboys.com (Weebly/Square). When the live
  site becomes accessible, compare against it carefully.
- Content not yet captured in SPEC.md (photos, exact copy on some
  pages) should be flagged and filled in before building that page.

---

## User Notes

Frank Drake is a returning programmer (~15-year gap). Explain new
patterns from first principles. Analogies to older web approaches are
helpful. Prefer clarity over cleverness in code.

---

## Key References

- Full spec and content inventory: `Admin/SPEC.md`
- frankdrake.org project (same stack): `/Users/frankdrake/claude-projects/frankdrake-web`
- Astro docs: https://docs.astro.build
- Cloudflare Pages docs: https://developers.cloudflare.com/pages
