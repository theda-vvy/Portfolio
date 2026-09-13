# Oluwaseyi David — Portfolio

Personal portfolio for Oluwaseyi David, an independent designer and strategist based in Lagos.

Includes case studies for Schlepp, 5fourteen, and Afriforge, created in collaboration with Boxless Studio.

## Run locally

Requires Node.js 22.13 or newer and pnpm.

```sh
pnpm install
pnpm dev
```

Open the local URL printed by the development server (normally http://localhost:3000).

## Build and check

```sh
pnpm build
pnpm exec tsc --noEmit
pnpm exec oxlint app lib components/portfolio-shell.tsx components/project-cover.tsx components/process-panel.tsx
```

The full starter includes unused UI components with existing lint issues; the command above checks the portfolio implementation.

## Content

- `lib/site-content.ts`: personal details and site copy.
- `lib/portfolio.ts`: project stories, credits, and galleries.
- `public/projects/`: optimized project artwork and smaller image variants.
- `lib/project-assets/`: image dimensions and source-page provenance.
- `app/globals.css`: shared visual styling and responsive layouts.
- `CONTENT-STATUS.md`: source notes and remaining content details.

The site uses React, Vinext, and the existing Sites/Cloudflare configuration. Original PDFs are not needed to run it. `scripts/extract-project-assets.py` is an optional asset-preparation script that uses local source PDFs, Pillow, and Poppler; its source folder can be adjusted when regenerating artwork.

This repository transfer does not deploy the website. Search indexing remains disabled until launch, and canonical URLs retain the existing hosted portfolio origin. Review both before deploying to a different domain.

## Work collection and musings

`/work` contains all seven projects. `featuredProjects` in `lib/portfolio.ts` selects the three homepage entries. New artwork is extracted from the owner’s PDFs with `scripts/extract-project-assets.py`; pass project slugs to regenerate only those projects.

`lib/musings.ts` holds the two editable articles for `/musings` and `/musings/[slug]`. These are first drafts written for the founder’s review.
