---
name: github-pages-site-builder
description: Creates and updates a GitHub-hosted website with a landing page that includes image cards linking to other pages, using an editable file structure.
---

# GitHub Pages Site Builder

Use this skill when the user wants a website hosted on GitHub (GitHub Pages), including a landing page with clickable images that link to subpages, and a workflow for easy updates.

## Outcomes

- Build or update a static website that can be hosted on GitHub Pages.
- Keep structure simple so future edits are easy.
- Provide a landing page with image tiles/cards linking to other pages.

## Input Questions

Ask these before generating or modifying the site:

1. Repository name and branch to publish from (`main` root or `/docs`, or `gh-pages`).
2. Website title and short subtitle.
3. List of landing cards:
   - Card title
   - Image path/URL
   - Destination page path
4. Desired pages and their section headings/content.
5. Color/style preferences.

If the user does not provide all details, create a working default and mark assumptions.

## Recommended File Layout

- `index.html` (landing page)
- `styles.css` (shared styles)
- `pages/` (subpages)
- `assets/images/` (user images)

## Build Workflow

### Step 1: Scaffold

If no site exists, create files from `assets/site-template/`.

### Step 2: Landing Page Cards

Implement card grid on `index.html` where each card includes:
- Image
- Title
- Link to a subpage

### Step 3: Subpages

Create pages in `pages/` and ensure each has:
- Clear heading
- Main content section
- Link back to Home (`../index.html`)

### Step 4: Updateability Rules

- Keep links relative.
- Keep styles in `styles.css`.
- Keep card markup clean and repeatable.
- Add comments only where edits are likely (cards section).

### Step 5: GitHub Pages Setup

Use one publishing mode:
- `main` + `/docs`
- `main` root
- `gh-pages` branch

Confirm site path after push:
- `https://<username>.github.io/<repo>/` (project site)
- `https://<username>.github.io/` (user/org site)

## Modification Workflow

When user asks to update the site:

1. Edit `index.html` cards.
2. Add/modify target page in `pages/`.
3. Update image assets under `assets/images/`.
4. Keep navigation links valid.
5. Commit and push.

## Acceptance Checklist

- Landing page renders with image cards.
- Card links resolve correctly.
- Subpages include a Home link.
- Site is publishable in GitHub Pages.
- Structure is easy to edit later.
