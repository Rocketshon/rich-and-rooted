# How to Write Blog Posts

All blog posts live in this folder as `.md` files. The filename (minus `.md`) becomes the URL slug.

Example: `mortgage-ready-checklist.md` → `richandrooted.com/blog/mortgage-ready-checklist`

## Post Format

Every post starts with a **frontmatter block** (the `---` fenced section) that holds the post's metadata, followed by the article body in plain Markdown.

```markdown
---
title: "5 Things That Kill a Mortgage Application"
date: "2026-04-23"
excerpt: "As a former underwriter, these are the red flags I saw over and over again — and how to avoid them."
category: "Mortgage Readiness"
readTime: "6 min read"
author: "Alecia White-Smith"
---

Your article starts here. Write normal paragraphs just like this one.

## Use double-hash for section headings

Paragraphs separated by a blank line become their own paragraph.

### Use triple-hash for subheadings

- Bullet lists work like this
- Another bullet
- One more

**Bold text** uses double asterisks. *Italic* uses single asterisks.

> Pull quotes use a greater-than sign. Great for emphasis.

[Link text goes here](https://example.com)

---

Use three dashes on their own line to create a horizontal divider.
```

## Categories to use

Keep categories consistent so they group nicely:

- `Mortgage Readiness`
- `Credit & DTI`
- `SBA Loans`
- `Homeownership`
- `Financial Foundations`
- `Faith & Finance`

## Dates

Always use `YYYY-MM-DD` format (e.g. `2026-04-23`). Posts are sorted newest first.

## Publishing

Save the `.md` file in this folder, commit, and push to GitHub. Vercel auto-deploys.

---

**Pro tip:** Draft your post in Google Docs first, then paste into the `.md` file. All the markdown formatting is optional — plain paragraphs work fine on their own.
