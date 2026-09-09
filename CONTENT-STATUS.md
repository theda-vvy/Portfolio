# Portfolio content status

## Confirmed personal information
- Oluwaseyi David · hello@oluwaseyidavid.com
- Independent designer and strategist in Lagos, Nigeria, building Mien.
- Existing portfolio design, navigation and founder copy retained.

## Included projects
1. Schlepp — commissioned rebrand, confirmed by Oluwaseyi David.
2. 5fourteen — brand identity and guidelines.
3. Afriforge — portfolio presentation of the supplied identity and guidelines.

All three were created in collaboration with Boxless Studio, confirmed by the founder. That credit appears in each project overview and closing credits. Project dates and commercial outcomes are omitted because they have not been confirmed. Commission/implementation status for 5fourteen and Afriforge is not asserted. Application images are identified as design artwork or mockups.

## Source material
The three PDFs at the top level of `/Users/thedavvy/Desktop/Desktop/Personal Work/` are the source of truth:
- Schlepp.pdf — 94 pages.
- 5fourteen.pdf — 64 pages.
- Afriforge.pdf — 57 pages.

The PDFs were read and visually reviewed without modifying them. Files in `Others/` were not substituted for the user's three selected guidelines. No source PDFs are served by the website.

28 artwork selections were rendered directly from the PDFs, cropped to preserve the artwork while excluding manual navigation, and exported as 56 WebP files at two sizes. No new brand artwork was generated. The local extraction script and `lib/project-assets/*.json` retain source-page and crop provenance. Intermediate renders are ignored by Git.

Do not publish placeholder letterhead copy, fictional mockup metrics, generic contact details, unfinished mask pages, or claims from visual mockups as real business results. The source manuals contain examples of these; the case studies do not use them as evidence of implementation or performance. Schlepp's Dwelling extension is explicitly described as a reserved direction, not an existing finished identity.

## Routes
- `/` and `/#work`: original staggered grid, now containing all three projects.
- `/work/schlepp`
- `/work/5fourteen`
- `/work/afriforge`
- Original `/work/project-01`, `/work/project-02`, `/work/project-03` URLs redirect to the corresponding named project.
- `/about`, `/about#approach`, `/contact` remain available.

## Still needed before a complete launch
- Founder portrait (the About placeholder remains).
- Optional social links.
- Any more specific individual role credits, project dates and confirmed rollout details the founder wants to add.
- Confirmation whether 5fourteen and Afriforge were commissioned work or self-initiated, if that distinction should be stated publicly.

## Validation and review
Production build, TypeScript and lint on the portfolio code passed. All project routes and 56 image variants returned successfully; legacy links returned the intended permanent redirects. Browser review covers desktop, tablet and mobile layouts, actual artwork, case navigation and the process drawer.

The complete starter's lint baseline contains pre-existing issues in unused UI components. No new dependencies were added.

Local review: http://localhost:3000/#work
This revision is local only. The existing hosted version was not redeployed. Search indexing remains disabled until launch approval.
