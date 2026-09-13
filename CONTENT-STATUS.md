# Portfolio content status

## Confirmed personal information
- Oluwaseyi David · hello@oluwaseyidavid.com
- Independent designer and strategist in Lagos, Nigeria, building Mien.
- Existing portfolio design, navigation and founder copy retained.

## Included projects
1. Schlepp — commissioned rebrand, confirmed by Oluwaseyi David.
2. 5fourteen — brand identity and guidelines.
3. Afriforge — portfolio presentation of the supplied identity and guidelines.
4. Punchin’ — independent work.
5. Gidigroove — in collaboration with Boxless Studio.
6. WATTFLEX — in collaboration with Boxless Studio; logo by Pentifier.
7. Nabata — independent work.

The first three were created in collaboration with Boxless Studio, confirmed by the founder. That credit appears in each project overview and closing credits. Project dates and commercial outcomes are omitted because they have not been confirmed. Commission/implementation status for 5fourteen and Afriforge is not asserted. Application images are identified as design artwork or mockups.

## Source material
The seven PDFs at the top level of `/Users/thedavvy/Desktop/Desktop/Personal Work/` are the source of truth:
- Schlepp.pdf — 94 pages.
- 5fourteen.pdf — 64 pages.
- Afriforge.pdf — 57 pages.
- Punchin Update.pdf — 39 pages.
- Gidigroove.pdf — 60 pages.
- WATTFLEX.pdf — 57 pages.
- Nabata.pdf — 55 pages.

The PDFs were read and visually reviewed without modifying them. Files in `Others/` were not substituted for the user's three selected guidelines. No source PDFs are served by the website.

56 artwork selections were rendered directly from the PDFs, cropped to preserve the artwork while excluding manual navigation, and exported as 112 WebP files at two sizes. No new brand artwork was generated. The local extraction script and `lib/project-assets/*.json` retain source-page and crop provenance. Intermediate renders are ignored by Git.

Do not publish placeholder letterhead copy, fictional mockup metrics, generic contact details, unfinished mask pages, or claims from visual mockups as real business results. The source manuals contain examples of these; the case studies do not use them as evidence of implementation or performance. Schlepp's Dwelling extension is explicitly described as a reserved direction, not an existing finished identity.

## Routes
- `/` and `/#work`: original staggered grid, containing three curated projects and a Show all work link.
- `/work`: all seven projects.
- `/work/punchin`, `/work/gidigroove`, `/work/wattflex`, `/work/nabata`.
- `/musings`: two article summaries, each linking to its own reading page.
- `/musings/the-logo-cannot-do-everything`, `/musings/leave-something-for-the-eye`.
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

## Musings
Two first-person articles were drafted at the founder’s explicit request, drawing on the supplied work without invented career anecdotes. They are ready for the founder’s editorial review in the local preview. Content lives in `lib/musings.ts`; reading times are calculated from the text. No CMS or new dependencies were introduced.

Local review: http://localhost:3000/work
This revision is local only. The existing hosted version was not redeployed. Search indexing remains disabled until launch approval.

## Homepage refinement — 11 September 2026
- COLLINS homepage reviewed for restrained serif hierarchy, generous spacing, visual opening, service explanation before case studies, and button treatment.
- Homepage now opens with a five-project image carousel, followed by client situations, a four-step approach and the existing three selected case studies.
- Uses the installed carousel primitive; no dependencies or third-party artwork added. No video files were found in Personal Work, so the slideshow uses supplied project imagery.
- Autoplay pauses on hover, focus, manual navigation and when outside the viewport. Reduced-motion preference disables automatic movement and scroll reveals.
- Copy on Home, About, Contact and the footer now uses a more conversational, reassuring voice.
- Existing seven projects, credits, Work collection and Musings remain available. This revision is local only.

## Afriforge image refresh — 13 September 2026
The active Afriforge entry now uses only the 21 supplied JPEG exports in `Personal Work/New Afriforge`, imported at native resolution with responsive WebP variants. The homepage and All Work cover share the updated entry. The case study has seven main images and a collapsed gallery with 14 additional images. The existing story sequence and Boxless Studio credit are retained, with simpler copy. `scripts/import-afriforge-images.py` and `lib/project-assets/afriforge-updated.json` record the import and original filenames. The older PDF-derived images are no longer referenced by the active entry. This revision remains local for review.

### Case-study spacing and type refinement
Reduced display heading sizes across the portfolio. Shared case studies now use quieter chapter spacing, centered identity artwork and native proportions for paired images. Afriforge keeps wide campaigns while graphic details and merchandise use narrower widths. Its seven main images and fourteen-image expandable gallery remain intact. Production build and desktop/mobile layout checks passed. Changes remain local for review.

### Updated Schlepp imagery
Imported all 24 supplied New Schlepp JPGs as optimized responsive WebP artwork. Replaced the shared cover and all case-study media. Seven images lead the story; the remaining seventeen appear in the expandable gallery. Applied inset identity graphics, paired service applications, wide campaigns and narrower merchandise. Simplified the story while retaining commissioned rebrand and Boxless Studio credits. Local review only.

### Complete Punchin asset replacement
All active Punchin imagery now comes from the nine files in New Punchin. Seven main case-study images, two expandable gallery images, and the shared cover use responsive optimized exports. Replaced older PDF-derived media references and updated chapter copy to describe the supplied work. Local review only.

### Complete Gidigroove asset replacement
Imported all nineteen New Gidigroove images as responsive WebP assets. Replaced all active case-study imagery and the shared homepage/Work cover. Seven main images and twelve expandable gallery images; updated chapter copy and symbol description to match the supplied visuals. Boxless Studio credit preserved. Local review only.

### Gidigroove labelled asset corrections
Uses Cover.jpg for shared cover and hero, Colour.jpg for palette, and Logo responsiveness.jpg for responsive logo examples. Refreshed all exports from the revised source folder; corrected notebook and Live It Up typography captions. Content-based filenames prevent stale replaced images. Duplicate labelled exports are not repeated in the gallery.

### EVOQUE replaces 5fourteen
EVOQUE is independent work, confirmed by the founder. Story grounded in Brand Guide/Evoque.pdf: emotion-led experience agency, Evoke/Immerse/Move, wing-shaped E and squircle, four lockups and paired colours. Main sequence: logo meaning, guide page 27 lockups, palette, logo backgrounds, then applications (seven main images, fifteen gallery images). Supplied cover used on homepage and Work. Old 5fourteen and project-02 URLs redirect to /work/evoque. No performance claims or sample figures treated as results. Local review only.
