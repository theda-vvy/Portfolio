import womaAssets from '@/lib/project-assets/woma.json';
import punchinAssets from '@/lib/project-assets/punchin-updated.json';
import gidigrooveAssets from '@/lib/project-assets/gidigroove-updated.json';
import wattflexAssets from '@/lib/project-assets/wattflex.json';
import nabataAssets from '@/lib/project-assets/nabata.json';
import schleppAssets from '@/lib/project-assets/schlepp-updated.json';
import evoqueAssets from '@/lib/project-assets/evoque-updated.json';
import afriforgeAssets from '@/lib/project-assets/afriforge-updated.json';

export type ProjectMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  fit?: 'cover' | 'contain';
  position?: string;
};
export type ProjectStory = {
  situation: string;
  problem: string;
  question: string;
  learning: string;
  decision: string;
  creativeIdea: string;
  outcome: string;
};
export type ProjectChapter = {
  label: string;
  title: string;
  body: string;
  layout: 'wide' | 'pair';
  presentation?: 'inset' | 'object';
  media: ProjectMedia[];
};
export type Project = {
  slug: string;
  aliases: string[];
  number: string;
  title: string;
  summary: string;
  category: string;
  workCategory?: 'brand' | 'website' | 'motion';
  disciplines: string[];
  theme: 'lime' | 'blue' | 'pink';
  status: 'draft' | 'published';
  year: string | null;
  role: string;
  credits: string[];
  collaboration: string;
  projectStatus: string;
  cover: ProjectMedia;
  hero: ProjectMedia;
  hideHero?: boolean;
  identity: ProjectMedia;
  story: ProjectStory;
  situationTitle: string;
  decisionTitle: string;
  identityTitle: string;
  chapters: ProjectChapter[];
  gallery?: ProjectMedia[];
};

type Asset = { src: string; width: number; height: number };
function media(asset: Asset, alt: string, caption?: string): ProjectMedia {
  return {
    src: asset.src,
    width: asset.width,
    height: asset.height,
    alt,
    caption,
  };
}
const shared = {
  status: 'published' as const,
  year: null,
  role: 'Brand identity & guidelines',
  collaboration: 'Boxless Studio',
  credits: ['Oluwaseyi David · In collaboration with Boxless Studio'],
};

export const projects: Project[] = [
  {
    ...shared,
    slug: 'schlepp',
    aliases: ['project-01'],
    number: '01',
    title: 'Schlepp',
    summary:
      'Bringing property, hospitality and everyday care under one clear promise.',
    category: 'Property & hospitality',
    theme: 'lime',
    disciplines: [
      'Brand strategy',
      'Brand architecture',
      'Visual identity',
      'Guidelines',
    ],
    projectStatus:
      'Commissioned rebrand. Applications shown as design presentations.',
    cover: media(schleppAssets['application-2'], 'Schlepp billboard with a brick-red message panel and a warm architectural photograph.'),
    hero: media(schleppAssets['header'], 'Wide Schlepp billboard reading Life Looks Better Here beside a warmly lit property.'),
    identity: media(schleppAssets['19-logo-on-grounds'], 'Schlepp logo shown on evergreen, midnight blue and brick backgrounds.', 'The logo across the core brand colours.'),
    situationTitle: 'Making property feel easier to live with.',
    decisionTitle: 'One promise across the business.',
    identityTitle: 'A clear, dependable identity.',
    story: {
      situation: 'Schlepp brings together property development, hospitality and the care that continues after handover. The rebrand needed to make those different services feel connected.',
      problem: 'People need more than a well-built property. They need a comfortable stay, clear information and someone to take care of the practical details. The brand had to speak to all of those needs.',
      question: 'How can the brand make both the property and the care behind it easy to understand?',
      learning: 'The common thread is peace of mind. Whether someone is buying, staying or managing a property, they want to feel informed and supported.',
      decision: '“Focus on Life” brings the business together around that need. Schlepp, The Nook and Loadways each have their own role, with related colours, typography and symbols that make the connection clear.',
      creativeIdea: 'The mountain-shaped symbol suggests shelter and stability. A diagonal opening gives it a distinctive shape, while the wordmark keeps the name easy to read.',
      outcome: 'The rebrand gives the business a shared set of colours, symbols, language and guidelines. The applications show how that identity can work across property campaigns, guest spaces and day-to-day services.',
    },
    chapters: [
      {
        label: 'Brand architecture', presentation: 'inset',
        title: 'Three roles, one family.',
        body: 'Schlepp leads the property business. The Nook looks after the stay. Loadways handles the practical care. Each has a distinct symbol, with a shared visual approach that connects them.',
        layout: 'wide', media: [
          media(schleppAssets['46-the-nook-in-mono'], 'Schlepp mountain, The Nook hospitality symbol and Loadways umbrella symbol shown together in black.', 'The three symbols, shown together.'),
        ],
      },
      {
        label: 'Care, made tangible',
        title: 'From checking in to keeping things running.',
        body: 'The Nook brings a warm, welcoming presence to guest spaces. Loadways uses clear signs and equipment labels to make the practical side easier to navigate.',
        layout: 'pair', media: [
          media(schleppAssets['application-9'], 'The Nook signage on fabric, a reception counter and a guest-room door hanger.', 'The Nook · Hospitality application mockups.'),
          media(schleppAssets['64-loadways-in-application'], 'Loadways equipment label and plant-room sign in midnight blue.', 'Loadways · Equipment and wayfinding mockups.'),
        ],
      },
      {
        label: 'The system in use',
        title: 'Show the life around the property.',
        body: 'Warm architectural photography and direct messages give the campaigns a human focus. The colours and typography keep each application recognisably Schlepp.',
        layout: 'wide', media: [
          media(schleppAssets['application-2'], 'Outdoor Schlepp billboard with the message A place that feels ready for your next chapter beside an apartment building.', 'Property campaign · Billboard mockup.'),
        ],
      },
      {
        label: 'Everyday details', presentation: 'object',
        title: 'An identity people can carry with them.',
        body: 'The symbol works just as clearly on a small badge, a bag or a cap. These pieces bring the identity into everyday use.',
        layout: 'wide', media: [
          media(schleppAssets['application-6'], 'Schlepp badges on yellow fabric, a green bag with a symbol charm and an evergreen cap.', 'Accessories · Merchandise mockups.'),
        ],
      },
    ],
    gallery: [
      media(schleppAssets['17-logo-lockups'], 'Schlepp wordmark and symbol lockup variations.', 'Logo arrangements'),
      media(schleppAssets['23-colour-palette'], 'Schlepp palette including evergreen, midnight blue, brick, ochre and orange.', 'Colour palette'),
      media(schleppAssets['48-the-nook-lockup'], 'The Nook logo on cream, evergreen and limestone.', 'The Nook · Logo'),
      media(schleppAssets['59-loadways-lockup'], 'Loadways logo in midnight blue, white and orange.', 'Loadways · Logo'),
      media(schleppAssets['application'], 'Open Schlepp brochure with property photography and a green welcome panel.', 'Property brochure mockup'),
      media(schleppAssets['application-1'], 'Branded identification cards and lanyards in evergreen and midnight blue.', 'Staff identification mockups'),
      media(schleppAssets['application-3'], 'Mountain-shaped Schlepp pins in a display box, on a lapel and on orange fabric.', 'Symbol pins · Merchandise mockups'),
      media(schleppAssets['application-4'], 'Circular black Schlepp badge on light fabric.', 'Badge detail'),
      media(schleppAssets['application-5'], 'Built around life campaign panel beside a photograph of a contemporary building.', 'Property campaign artwork'),
      media(schleppAssets['application-7'], 'Schlepp graphics applied to cream, blue and neutral clothing.', 'Clothing mockups'),
      media(schleppAssets['application-8'], 'The Nook guest stickers and orange door hangers.', 'The Nook · Guest details'),
      media(schleppAssets['application-10'], 'Four Schlepp graphic badges in brick, evergreen, cream and ochre.', 'Brand badges'),
      media(schleppAssets['application-11'], 'Stack of evergreen Schlepp business cards with fine gold typography.', 'Business card mockup'),
      media(schleppAssets['frame-48097196'], 'Close view of Schlepp printed stationery on a dark surface.', 'Printed detail'),
      media(schleppAssets['frame-48097197'], 'Overview of Schlepp visual identity elements and applications.', 'Identity overview'),
      media(schleppAssets['frame-48097198'], 'Designed with everyday living in mind in cream and yellow on a patterned evergreen background.', 'Typography and pattern'),
      media(schleppAssets['frame-48097199'], 'Brick-red Schlepp property card on a cream presentation.', 'Property card mockup'),
    ],
  },
  {
    ...shared, slug: 'evoque', aliases: ['project-02', '5fourteen'], number: '02', title: 'EVOQUE',
    summary: 'An identity for an experience agency that starts with what people should feel.',
    category: 'Experiential agency', theme: 'pink',
    role: 'Brand identity & guidelines', collaboration: 'Independent work', credits: ['Oluwaseyi David · Independent work'],
    disciplines: ['Visual identity', 'Brand guidelines'],
    projectStatus: 'Brand identity and guidelines. Applications shown as design mockups.',
    cover: media(evoqueAssets['cover'], 'Olive and lime EVOQUE wordmark repeated across a printed cover.'),
    hero: media(evoqueAssets['18665'], 'EVOQUE wing symbol and rounded-square container.'), hideHero: true,
    identity: media(evoqueAssets['18665'], 'The EVOQUE wing beside its rounded-square container, explaining feeling, expression, focus and stability.', 'The wing and the rounded square.'),
    situationTitle: 'Start with the feeling.', decisionTitle: 'Give that feeling a direction.', identityTitle: 'A wing, with somewhere to land.',
    story: {
      situation: 'EVOQUE is an emotion-led experience agency. Its brand guide centres on a practical question: what should people feel, and what should that feeling achieve?',
      problem: 'The identity needed to express both sides of the agency: an understanding of people and culture, and a clear purpose behind each experience. It had to feel expressive without losing clarity.',
      question: 'How do you make emotion visible while keeping its purpose clear?',
      learning: 'The guide connects three stages: Evoke, Immerse, Move. First awaken a feeling, then give it a meaningful experience, and finally direct it towards a response.',
      decision: '“Emotion, made effective.” brings that approach into one line. The visual identity pairs a flowing symbol with a stable frame, giving expression and structure a shared place.',
      creativeIdea: 'Three curved strokes form a wing and suggest the letter E. The wing represents feeling and movement. Its rounded-square container adds focus and stability: a simple way to show emotion with direction.',
      outcome: 'The guidelines bring the logo, colour pairs, typography and graphic language into a consistent system. The applications below show how those choices carry into campaigns, printed materials and everyday objects.',
    },
    chapters: [
      {label: 'Logo lockups', presentation: 'inset', title: 'The right version for each space.', body: 'The primary logo combines the framed symbol with the wordmark. A compact version removes the frame; the icon and wordmark can also stand alone when the context calls for it.', layout: 'wide', media: [media(evoqueAssets['lockups'], 'Four EVOQUE logo configurations: primary, compact, icon only and wordmark only.', 'Logo configurations · From the brand guide.')]},
      {label: 'Colour', presentation: 'inset', title: 'Four pairs, with room to change the mood.', body: 'Deep purple, magenta, olive and burgundy each have a lighter companion. These pairings let the brand shift from restrained to expressive while keeping a recognisable palette.', layout: 'wide', media: [media(evoqueAssets['18663'], 'Eight EVOQUE colours arranged as four dark and light pairs.', 'The four colour pairs.')]},
      {label: 'Logo in colour', presentation: 'inset', title: 'Keep the name clear in every setting.', body: 'The logo switches between light and dark versions to stay legible on coloured backgrounds and photography. The same proportions hold each version together.', layout: 'wide', media: [media(evoqueAssets['18666'], 'EVOQUE logo shown on light, purple, olive, magenta, black and photographic backgrounds.', 'Logo on different backgrounds.')]},
      {label: 'Brand applications', title: 'Let the idea reach beyond the page.', body: 'A short message and a quiet graphic pattern give the campaign space to speak. The logo stays visible without competing with the message.', layout: 'wide', media: [media(evoqueAssets['18660'], 'Purple EVOQUE billboard reading Culturally relevant experiences designed to shape ideas.', 'Outdoor campaign · Application mockup.')]},
      {label: 'Everyday objects', presentation: 'object', title: 'Recognisable, even in the small details.', body: 'The framed icon works on a cap, the wing can lead a T-shirt, and a small metal pin carries the same shape. Each uses a different part of the identity.', layout: 'wide', media: [media(evoqueAssets['18656'], 'Purple EVOQUE cap, a light T-shirt with a large wing and a gold wing lapel pin.', 'Apparel and pin · Merchandise mockups.')]},
      {label: 'Print', presentation: 'object', title: 'Bring the system into daily use.', body: 'The rounded-square pattern and paired colours give the notebooks a familiar character. Small typography and a clear wordmark leave the cover room to breathe.', layout: 'wide', media: [media(evoqueAssets['18658'], 'Magenta EVOQUE spiral notebooks with a fine rounded-square pattern.', 'Notebook design · Application mockup.')]},
    ],
    gallery: [
      media(evoqueAssets['cover'], 'Olive and lime EVOQUE wordmark repeated on a printed cover.', 'Wordmark application.'),
      media(evoqueAssets['18654'], 'Lilac EVOQUE street poster with abstract dimensional artwork.', 'Street poster mockup.'),
      media(evoqueAssets['18655'], 'EVOQUE cap and clothing details beside an editorial campaign layout.', 'Brand applications.'),
      media(evoqueAssets['18657'], 'Cream EVOQUE tote with the phrase Culture, made effective.', 'Tote bag mockup.'),
      media(evoqueAssets['18659'], 'EVOQUE identification card and burgundy booklet on a slatted seat.', 'Identification and print mockups.'),
      media(evoqueAssets['18661'], 'Purple EVOQUE campaign artwork with a fine rounded-square pattern.', 'Campaign artwork.'),
      media(evoqueAssets['18664'], 'Burgundy and pale pink EVOQUE business cards.', 'Business card mockup · Sample contact details.'),
      media(evoqueAssets['frame-48097211'], 'Purple textured EVOQUE campaign with the message Create something people can feel.', 'Campaign artwork.'),
      media(evoqueAssets['frame-48097212'], 'Magenta EVOQUE poster with fine outlined shapes and the words Belonging, made effective.', 'Typography and pattern.'),
      media(evoqueAssets['frame-48097213'], 'Dark EVOQUE poster with an iridescent form and Move people meaningfully headline.', 'Campaign artwork.'),
      media(evoqueAssets['frame-48097214'], 'Black sculptural form beneath lime linework on an EVOQUE poster.', 'Graphic language.'),
      media(evoqueAssets['frame-48097215'], 'Burgundy EVOQUE poster reading Move people meaningfully.', 'Typography and pattern.'),
      media(evoqueAssets['frame-48097216'], 'Pink outlined rounded squares on a white Give feeling direction poster.', 'Graphic pattern.'),
      media(evoqueAssets['frame-48097217'], 'Paired EVOQUE posters with interlocking sculptural forms.', 'Campaign series.'),
      media(evoqueAssets['frame-48097218'], 'Reflective multicoloured form on a black Create something people can feel poster.', 'Campaign artwork.'),
    ],
  },
  {
    ...shared, slug: 'afriforge', aliases: ['project-03'], number: '03', title: 'Afriforge',
    summary: 'An identity for a business helping African founders build companies that last.',
    category: 'Founder support', theme: 'pink',
    disciplines: ['Brand direction', 'Verbal identity', 'Visual identity', 'Guidelines'],
    projectStatus: 'Brand identity and guidelines. Applications shown as design mockups.',
    cover: media(afriforgeAssets['18638'], 'Shape Tomorrow in white type beside textured purple building blocks on a dark background.'),
    hero: media(afriforgeAssets['18632'], 'Afriforge bus-shelter campaign with founder portraits and a central orange brand message.'),
    identity: media(afriforgeAssets['18639'], 'Afriforge symbol and wordmark in lilac, orange, cream and dark brown.', 'The logo and its core colour combinations.'),
    situationTitle: 'Helping founders build for the long term.',
    decisionTitle: 'Start with strong foundations.',
    identityTitle: 'A mark made from connected parts.',
    story: {
      situation: 'Afriforge helps African founders build stronger businesses. The identity needed to communicate that support clearly and give the brand a recognisable presence.',
      problem: 'Words like support and growth can mean almost anything. The challenge was to show what Afriforge stands for without relying on generic business imagery.',
      question: 'How do you make business support easier to see and understand?',
      learning: 'Building a company takes parts that work together. Construction gave us a simple way to express that idea through connected forms, strong foundations and room to grow.',
      decision: '“Shape Tomorrow” gives the brand a clear message. We paired building-inspired forms with founder portraits to show both the work of building a business and the people doing it.',
      creativeIdea: 'Three interlocking pillars form the symbol. Orange and lilac help it stand out, while a simple wordmark keeps the name easy to read.',
      outcome: 'The identity brings the logo, colours, graphics and language into one set of guidelines. These applications show how the same idea can work on a campaign poster, a screen or a T-shirt.',
    },
    chapters: [
      { label: 'Graphic language', presentation: 'inset', title: 'Building blocks for the brand.', body: 'Solid forms and fine grid lines carry the building idea beyond the logo. Different materials and colours give the graphics variety while keeping them related.', layout: 'wide', media: [
        media(afriforgeAssets['18640'], 'Four sculptural Afriforge forms in purple, stone and orange above a row of graphic symbols.', 'The shapes and materials behind the graphic language.'),
        media(afriforgeAssets['18630'], 'Orange blocks surrounding a transparent centre beside the line Value that can continue beyond the next opportunity.', 'The graphic language paired with a clear brand message.'),
      ] },
      { label: 'Campaigns', title: 'Keep the people in the picture.', body: 'Founder portraits sit alongside the brand graphics. Short messages explain the ambition: stronger businesses that can keep going and create value over time.', layout: 'wide', media: [
        media(afriforgeAssets['18631'], 'Wide Afriforge campaign with two founder portraits and an orange centre panel.', 'Founder-led campaign · Outdoor mockup.'),
        media(afriforgeAssets['18635'], 'Three hanging Afriforge banners combining purple and orange forms with the words Shape Tomorrow.', 'Campaign banners · Application mockup.'),
      ] },
      { label: 'Everyday use', presentation: 'object', title: 'Recognisable at a smaller scale.', body: 'The same colour and shapes carry onto clothing. A small wordmark on the front and a larger graphic on the back give each side a different role.', layout: 'wide', media: [
        media(afriforgeAssets['18637'], 'Front and back of lilac Afriforge T-shirts with a small wordmark and a large textured purple graphic.', 'T-shirt design · Merchandise mockup.'),
      ] },
    ],
    gallery: [
      media(afriforgeAssets['18627'], "Stone-textured form beside a message about shaping what comes next for Africa.", "Brand message"),
      media(afriforgeAssets['18629'], "Purple building blocks beside a message about adapting when conditions change.", "Campaign artwork"),
      media(afriforgeAssets['18633'], "Orange Afriforge poster beside a moving train.", "Transit campaign mockup"),
      media(afriforgeAssets['18634'], "Founder portrait and orange campaign panels on a street billboard.", "Billboard mockup"),
      media(afriforgeAssets['18636'], "Purple sculptural form on a backlit Afriforge wall poster.", "Poster mockup"),
      media(afriforgeAssets['18638'], "Shape Tomorrow headline with textured purple forms on dark brown.", "Brand expression"),
      media(afriforgeAssets['frame-48097195'], "Fine construction grid behind the words Putting the right foundations around ambition.", "Typography and pattern"),
      media(afriforgeAssets['frame-48097196'], "Large purple geometric form on a white Shape Tomorrow poster.", "Campaign artwork"),
      media(afriforgeAssets['frame-48097197'], "Stone-textured Afriforge form on bright orange.", "Graphic detail"),
      media(afriforgeAssets['frame-48097198'], "Afriforge social profile layout with illustrative follower counts.", "Social profile mockup \u00b7 Figures are sample content"),
      media(afriforgeAssets['frame-48097199'], "Orange and purple sculptural stickers in a transparent pouch.", "Sticker mockup"),
      media(afriforgeAssets['frame-48097200'], "Afriforge identification card with a portrait and orange lanyard.", "Identity card mockup"),
      media(afriforgeAssets['frame-48097201'], "Purple Afriforge business cards on orange.", "Business card mockup"),
      media(afriforgeAssets['frame-48097202'], "Founder portrait beside the message Building a sustainable future for African founders.", "Portrait campaign"),
    ],
  },
  {
    slug: 'punchin',
    title: 'Punchin’',
    category: 'Food & drink',
    theme: 'lime',
    collaboration: 'Independent work',
    summary: 'A little less overthinking. A lot more room for joy.',
    situationTitle: 'Make room for a good time.',
    decisionTitle: 'Give ease a personality.',
    identityTitle: 'Familiar, with a mischievous streak.',
    aliases: [],
    number: '04',
    status: 'published',
    year: null,
    role: 'Brand identity & guidelines',
    disciplines: ['Brand direction', 'Visual identity', 'Guidelines'],
    credits: ['Oluwaseyi David · Independent work'],
    projectStatus:
      'Brand identity and guidelines. Applications shown as design presentations.',
    story: {
      situation:
        'Punchin’ is a Caribbean-inspired punch mixer brand built around the pleasure of sharing a drink. Its ready-to-serve format brings the craft of punch into an easier, more spontaneous setting.',
      problem:
        'Convenience alone would make a thin story. The brand needed to communicate the care in the product while keeping the experience relaxed and communal.',
      question:
        'What would a carefully made drink look like if it did not take itself too seriously?',
      learning:
        'The useful tension is between craft and effort. The drink can be considered so the occasion does not have to be.',
      decision:
        '“Less thinking. More Punchin.” became the invitation. A warm voice, generous lettering and a cast of playful details give the product the feeling of a good host.',
      creativeIdea:
        'The flowing wordmark borrows the ease of hand lettering and old bar signage. A cheerful mascot, pineapple-inspired linework and sticker graphics extend that warmth across the packaging and campaign.',
      outcome:
        'The identity brings packaging, menus and campaign artwork into a recognisable world, with enough variation for different flavours and occasions.',
    },
    cover: media(punchinAssets['18775'], 'Punchin’ drink pouches with orange lettering, pineapple linework and a cheerful mascot.'),
    hero: media(punchinAssets['18775'], 'Two Punchin’ drink pouches with straws, pineapple graphics and colourful stickers.'),
    identity: media(punchinAssets['slide-16_9---105'], 'Dimensional orange Punchin’ wordmark on a cream background.', 'The wordmark · Dimensional application.'),
    chapters: [
      {
        label: 'Character & pattern', presentation: 'inset',
        title: 'A playful face for the brand.',
        body: 'Two expressive mascot poses give the brand a friendly presence. Pineapple-inspired linework brings the same energy to packaging and printed pieces.',
        layout: 'pair', media: [
          media(punchinAssets['slide-16_9---104'], 'Two orange Punchin’ mascots, one wearing sunglasses and the other waving.', 'The mascot in two poses.'),
          media(punchinAssets['slide-16_9---106'], 'Yellow pineapple-inspired linework on an orange background.', 'The repeating brand pattern.'),
        ],
      },
      {
        label: 'The identity in use',
        title: 'Make choosing a drink feel easy.',
        body: 'The menus bring the lettering, mascot and pattern together. Orange and cream give each version its own feel while keeping them clearly part of the same brand.',
        layout: 'wide', media: [
          media(punchinAssets['18774'], 'Orange and cream Punchin’ menus combining the mascot, wordmark and pineapple pattern.', 'Menu design.'),
        ],
      },
      {
        label: 'Everyday details', presentation: 'object',
        title: 'A little of that energy, to take with you.',
        body: 'Small stickers, a tote bag and a T-shirt carry the identity beyond the drink. The wordmark and mascot remain recognisable even when they appear on their own.',
        layout: 'wide', media: [
          media(punchinAssets['slide-16_9---107'], 'Blue and cream circular Punchin’ stickers with drink illustrations and playful lettering.', 'Brand stickers.'),
          media(punchinAssets['slide-16_9---109'], 'Cream Punchin’ tote bag with an orange wordmark beside a cream mascot T-shirt.', 'Tote bag and T-shirt · Merchandise mockups.'),
        ],
      },
    ],
    gallery: [
      media(punchinAssets['18773'], 'Punchin’ social profile presentation with an orange header and cream wordmark.', 'Social profile mockup.'),
      media(punchinAssets['slide-16_9---108'], 'Punchin’ business card design with orange pineapple graphics, mascot and wordmark.', 'Business card mockup · Sample contact details.'),
    ],
  },
  {
    slug: 'gidigroove',
    title: 'Gidigroove',
    category: 'Culture & experiences',
    theme: 'pink',
    collaboration: 'Boxless Studio',
    summary: 'Giving the rhythm of Lagos a place to live.',
    situationTitle: 'A city with plenty to get into.',
    decisionTitle: 'Make discovery feel like belonging.',
    identityTitle: 'An identity with rhythm built in.',
    aliases: [],
    number: '05',
    status: 'published',
    year: null,
    role: 'Brand identity & guidelines',
    disciplines: ['Brand direction', 'Visual identity', 'Guidelines'],
    credits: ['Oluwaseyi David · In collaboration with Boxless Studio'],
    projectStatus:
      'Brand identity and guidelines. Applications shown as design presentations.',
    story: {
      situation:
        'Gidigroove connects people with the culture, events and experiences of Lagos. The platform makes room for locals, visitors and the diaspora, bringing discovery and practical support into the same experience.',
      problem:
        'A list of events could explain what is available, but it would miss the feeling of being there. The identity needed to carry the city’s energy while making it easier to navigate.',
      question: 'How can a platform feel like an invitation into the city?',
      learning:
        'The appeal sits in the connections between people, places and music. Rhythm offers a visual idea broad enough to connect those experiences.',
      decision:
        '“Live It Up” sets an open, encouraging tone. Sound-inspired forms, rich colour and familiar Lagos references bring that invitation into the visual system.',
      creativeIdea:
        'A curved G symbol gives the brand a recognisable signature. Rounded shapes, bright colours and photographs of people enjoying the city carry that feeling into the wider identity.',
      outcome:
        'The system connects the platform’s practical role with its cultural character, extending from event communication to digital layouts and printed applications.',
    },
    cover: media(gidigrooveAssets['cover'], 'Blue Gidigroove billboard with nightlife photography and the message Your backstage pass to nightlife in Gidi.'),
    hero: media(gidigrooveAssets['cover'], 'Blue Gidigroove billboard with nightlife photography and the message Your backstage pass to nightlife in Gidi.'),
    identity: media(gidigrooveAssets['18653'], 'Gidigroove symbol construction, wordmark and standalone curved G on lilac.', 'The symbol and wordmark.'),
    chapters: [
      {
        label: 'Graphic language', presentation: 'inset',
        title: 'Colour that feels like a good night out.',
        body: 'Purple, blue and orange give the identity variety. Rounded shapes sit alongside candid photography, connecting the graphic elements with the people the platform brings together.',
        layout: 'wide', media: [
          media(gidigrooveAssets['18643'], 'Two friends together beside an orange Gidigroove graphic panel.', 'Photography and graphic language.'),
        ],
      },
      {
        label: 'The invitation',
        title: 'Make the next plan easy to spot.',
        body: 'Short messages speak directly to people looking for somewhere to go. The same colours and shapes connect street posters with smaller social formats.',
        layout: 'wide', media: [
          media(gidigrooveAssets['18642'], 'Orange, purple and blue Gidigroove posters displayed side by side on a concrete wall.', 'Street posters · Campaign mockup.'),
          media(gidigrooveAssets['18644'], 'Three vertical Gidigroove social designs pairing nightlife portraits with purple graphics.', 'Social campaign layouts.'),
        ],
      },
      {
        label: 'Everyday use', presentation: 'object',
        title: 'Something to take with you.',
        body: 'The identity carries onto simple objects, from a printed tote to a stack of purple cards. Each keeps the name, colour and character easy to recognise.',
        layout: 'wide', media: [
          media(gidigrooveAssets['18646'], 'Blue Gidigroove tote bag with the words Groove Different against a stone wall.', 'Tote bag · Merchandise mockup.'),
          media(gidigrooveAssets['18648'], 'Fanned purple Gidigroove printed cards on white.', 'Printed cards · Application mockup.'),
        ],
      },
    ],
    gallery: [
      media(gidigrooveAssets['18649'], 'Orange Gidigroove billboard combining nightlife photography with an invitation to discover Lagos.', 'Outdoor campaign mockup.'),
      media(gidigrooveAssets['logo-responsiveness'], 'Gidigroove logo adapted for an app icon, interface elements and social profiles.', 'Logo responsiveness · Across digital formats.'),
      media(gidigrooveAssets['18645'], 'Orange Gidigroove billboard with nightlife photography and the message Your plug for a good nightlife experience.', 'Nightlife campaign mockup.'),
      media(gidigrooveAssets['colour'], 'Purple, blue and orange Gidigroove colour palette with darker companion shades.', 'Colour palette.'),
      media(gidigrooveAssets['frame-48097203'], 'Smiling people on an orange Skip the FOMO Gidigroove poster.', 'Portrait campaign.'),
      media(gidigrooveAssets['frame-48097204'], 'Purple Gidigroove symbol sticker in a transparent orange pouch.', 'Symbol sticker mockup.'),
      media(gidigrooveAssets['frame-48097205'], 'Brick-red Gidigroove notebook with a large curved graphic and cream wordmark.', 'Notebook · Merchandise mockup.'),
      media(gidigrooveAssets['frame-48097206'], 'Black dimensional Gidigroove symbol on orange.', 'Symbol detail.'),
      media(gidigrooveAssets['frame-48097207'], 'Purple cocktail glass on a blue and orange gradient nightlife poster.', 'Nightlife campaign artwork.'),
      media(gidigrooveAssets['frame-48097208'], 'People enjoying an event below the words People, culture, and connection.', 'Event campaign artwork.'),
      media(gidigrooveAssets['frame-48097209'], 'Repeated cream Live It Up lettering on orange above the Gidigroove wordmark.', 'Typography · Live It Up brand expression.'),
      media(gidigrooveAssets['frame-48097210'], 'Illustrated bus beneath the words Hop on the Groove Wagon.', 'Travel campaign artwork.'),
    ],
  },
  {
    slug: 'wattflex',
    title: 'WATTFLEX',
    category: 'Lifestyle & appliances',
    theme: 'blue',
    collaboration: 'Boxless Studio · Logo by Pentifier',
    summary: 'Raising expectations for the things we use every day.',
    situationTitle: 'Everyday should still be considered.',
    decisionTitle: 'Make quality easy to recognise.',
    identityTitle: 'Energy that carries through the system.',
    aliases: [],
    number: '06',
    status: 'published',
    year: null,
    role: 'Brand identity system & guidelines',
    disciplines: ['Brand direction', 'Visual identity', 'Guidelines'],
    credits: [
      'Oluwaseyi David · In collaboration with Boxless Studio',
      'Logo · Pentifier',
    ],
    projectStatus:
      'Brand identity and guidelines. Applications shown as design presentations.',
    story: {
      situation:
        'WATTFLEX is a lifestyle product brand spanning lighting, small appliances and everyday essentials. Its positioning brings durability, appearance and useful performance together for the Nigerian market.',
      problem:
        'Technical features can make everyday products feel distant. The communication needed to build confidence while keeping the products connected to the routines they serve.',
      question:
        'How can everyday essentials feel dependable and desirable at the same time?',
      learning:
        'People meet these products through ordinary tasks. Showing those moments gives the promise of quality a more understandable setting.',
      decision:
        '“Expect More” anchors the communication. Clear product information sits alongside warm photography, confident colour and a conversational voice.',
      creativeIdea:
        'Pentifier’s wave-like logo provides the starting point for a continuous pattern. Turquoise, violet and yellow give the wider system range, with clear typography organising packaging and product-led campaigns.',
      outcome:
        'The presentation connects the existing logo with a wider identity system for packaging, campaigns and everyday objects.',
    },
    cover: media(wattflexAssets.cover, 'WATTFLEX campaign artwork.'),
    hero: media(
      wattflexAssets.hero,
      'WATTFLEX brand application presentation.',
    ),
    identity: media(
      wattflexAssets.identity,
      'WATTFLEX logo and colour relationships.',
    ),
    chapters: [
      {
        label: 'From mark to system',
        title: 'A continuous thread.',
        body: 'The wave becomes a repeatable texture. Packaging balances that expression with clear product names, imagery and information.',
        layout: 'pair',
        media: [
          media(
            wattflexAssets.pattern,
            'WATTFLEX \u2014 pattern design presentation.',
            'Design presentation from the brand guidelines.',
          ),
          media(
            wattflexAssets.packaging,
            'WATTFLEX \u2014 packaging design presentation.',
            'Design presentation from the brand guidelines.',
          ),
        ],
      },
      {
        label: 'Everyday expression',
        title: 'Built around the way people live.',
        body: 'Campaigns place products alongside the people and routines they serve. Colour and pattern carry the same identity into smaller physical applications.',
        layout: 'wide',
        media: [
          media(
            wattflexAssets.campaign,
            'WATTFLEX \u2014 campaign design presentation.',
            'Design presentation from the brand guidelines.',
          ),
          media(
            wattflexAssets.tote,
            'WATTFLEX \u2014 tote design presentation.',
            'Design presentation from the brand guidelines.',
          ),
        ],
      },
    ],
  },
  {
    slug: 'nabata',
    title: 'Nabata',
    category: 'Fashion & culture',
    theme: 'lime',
    collaboration: 'Independent work',
    summary: 'A fashion identity built around the feeling of being held.',
    situationTitle: 'Begin with a welcome.',
    decisionTitle: 'Let belonging shape the work.',
    identityTitle: 'A held space, made visible.',
    aliases: [],
    number: '07',
    status: 'published',
    year: null,
    role: 'Brand identity & guidelines',
    disciplines: ['Brand direction', 'Visual identity', 'Guidelines'],
    credits: ['Oluwaseyi David · Independent work'],
    projectStatus:
      'Brand identity and guidelines. Applications shown as design presentations.',
    story: {
      situation:
        'Nabata is a contemporary African fashion house rooted in culture, storytelling and wholeness. The brand’s starting point is a welcome: clothing that receives the person wearing it.',
      problem:
        'The identity needed to express care without becoming sentimental, and cultural grounding without reducing it to decoration. Its visual language had to feel composed and warm.',
      question:
        'What does it mean to build a brand that feels like being held?',
      learning:
        'Belonging can be expressed through space, rhythm and proportion. Enclosure and the fold offer forms that connect that feeling with clothing itself.',
      decision:
        '“Held. Always.” gives the system a quiet centre. The direction pairs generous space and expressive serif typography with grounded colours and patterns drawn from the ideas of shelter and continuity.',
      creativeIdea:
        'An enclosing line wraps around a central form. That gesture extends into compound-inspired geometry, overlapping folds and a repeating wave. The soft wordmark gives the more expressive typography and imagery a steady signature.',
      outcome:
        'The identity carries a consistent sense of welcome across editorial, campaign and clothing-related applications, using pattern and proportion to keep the brand present without overwhelming the garments.',
    },
    cover: media(nabataAssets.cover, 'Nabata campaign artwork.'),
    hero: media(nabataAssets.hero, 'Nabata brand application presentation.'),
    identity: media(
      nabataAssets.identity,
      'Nabata logo and colour relationships.',
    ),
    chapters: [
      {
        label: 'Pattern & meaning',
        title: 'Room to belong.',
        body: 'The compound pattern expresses a shared space. Overlapping folds bring a more intimate rhythm, connecting the system to fabric, care and continuity.',
        layout: 'pair',
        media: [
          media(
            nabataAssets.pattern,
            'Nabata \u2014 pattern design presentation.',
            'Design presentation from the brand guidelines.',
          ),
          media(
            nabataAssets.fold,
            'Nabata \u2014 fold design presentation.',
            'Design presentation from the brand guidelines.',
          ),
        ],
      },
      {
        label: 'The brand in use',
        title: 'Let the clothing hold the attention.',
        body: 'Editorial and campaign layouts give garments and people a generous setting. Small symbols, warm colour and measured typography keep the identity close.',
        layout: 'wide',
        media: [
          media(
            nabataAssets.editorial,
            'Nabata \u2014 editorial design presentation.',
            'Design presentation from the brand guidelines.',
          ),
          media(
            nabataAssets.campaign,
            'Nabata \u2014 campaign design presentation.',
            'Design presentation from the brand guidelines.',
          ),
        ],
      },
    ],
  },
  {
    ...shared, slug: 'woma', aliases: [], number: '08', title: 'WOMA', workCategory: 'website',
    summary: 'A considered home for interiors, furniture and art.', category: 'Interiors, furniture & art', theme: 'pink',
    role: 'Website design', collaboration: '', credits: ['Oluwaseyi David'],
    disciplines: ['Website design', 'UI design'], projectStatus: 'Website design presentation. Screens show proposed layouts; launch status is unconfirmed.',
    cover: media(womaAssets.cover, 'WOMA website displayed on a laptop against an orange interior.'),
    hero: media(womaAssets.cover, 'Laptop displaying the WOMA homepage with architectural photography.'),
    identity: media(womaAssets.homepage, 'Full WOMA desktop homepage introducing interiors, art and furniture.', 'Homepage · Desktop design.'),
    situationTitle: 'Three ways into the same world.', decisionTitle: 'Let the work guide the visit.', identityTitle: 'A homepage that introduces the whole practice.',
    story: {
      situation: 'The supplied WOMA designs bring interiors, furniture and art into one website. Each area needs its own space, while the overall experience should feel connected.',
      problem: 'A visitor looking for an interior designer has different questions from someone browsing a piece of furniture or an artwork. The layout needs to make those routes clear without fragmenting the site.',
      question: 'How can one website make room for different kinds of work and still feel like one place?',
      learning: 'The screens use photography, materials and short introductions to establish a shared visual language. Each collection then gets a layout suited to the way people browse it.',
      decision: 'The homepage introduces the practice before leading into interiors, art and furniture. Large images show the work, while restrained navigation and clear section headings help visitors choose where to go next.',
      creativeIdea: 'Warm backgrounds, dark sections and serif headings give the images room to lead. The homepage moves between an introduction, selected spaces, objects and the practice behind them.',
      outcome: 'The supplied desktop designs cover the homepage, interiors portfolio, furniture collection, art gallery, an individual project, About and Contact. Together they show a route from discovering the work to making an enquiry.',
    },
    chapters: [
      { label: 'Interiors', title: 'Start with the spaces.', body: 'The interiors portfolio opens with a featured project and continues into a grid of spaces. Large photographs make the character of each project easy to compare.', layout: 'wide', presentation: 'inset', media: [media(womaAssets.interiors, 'WOMA interiors portfolio with a featured villa and grid of architectural projects.', 'Interiors portfolio · Desktop design.')] },
      { label: 'Project detail', title: 'Give each project a fuller story.', body: 'The project page moves from a large opening photograph into the design approach, materials and before-and-after views. It gives visitors more context than a gallery alone.', layout: 'wide', presentation: 'inset', media: [media(womaAssets.project, 'WOMA project page with architectural imagery, a material palette and before-and-after images.', 'Project case study · Desktop design.')] },
      { label: 'Furniture', title: 'Make room to browse.', body: 'A collection grid gives furniture its own route through the website. Consistent image sizes and concise labels make it easier to scan the range.', layout: 'wide', presentation: 'inset', media: [media(womaAssets.furniture, 'WOMA furniture collection with product cards and an editorial feature.', 'Furniture collection · Desktop design.')] },
      { label: 'Art', title: 'Let individual pieces hold attention.', body: 'The art gallery uses a quieter grid and generous spacing around each work. A commission invitation offers a next step beyond browsing.', layout: 'wide', presentation: 'inset', media: [media(womaAssets.art, 'WOMA art gallery showing artworks in a spacious grid and a commission invitation.', 'Art gallery · Desktop design.')] },
      { label: 'The practice', title: 'Introduce the people and the approach.', body: 'The About page brings the creative director, principles and process into the story. It helps visitors understand the practice behind the images.', layout: 'wide', presentation: 'inset', media: [media(womaAssets.about, 'WOMA About page with a creative director portrait, studio principles and process.', 'About · Supplied v1 desktop design.')] },
      { label: 'Enquiries', title: 'End with a clear invitation.', body: 'The Contact design pairs an enquiry form with studio details. It gives visitors a direct next step after they have explored the work.', layout: 'wide', presentation: 'inset', media: [media(womaAssets.contact, 'WOMA Contact page with an enquiry form, studio information and map.', 'Contact · Supplied v1 desktop design.')] },
    ],
  },
];

export function isProjectReady(project: Project): boolean {
  return (
    project.status === 'published' &&
    !!project.title &&
    !!project.summary &&
    !!project.cover.src &&
    !!project.hero.src &&
    !!project.identity.src &&
    project.chapters.length > 0 &&
    project.chapters.every(
      (chapter) =>
        chapter.media.length > 0 &&
        chapter.media.every((item) => !!item.src && !!item.alt),
    ) &&
    Object.values(project.story).every((value) => !!value.trim())
  );
}
export const publishedProjects = projects.filter(isProjectReady);
export function findProject(slug: string) {
  return projects.find(
    (project) => project.slug === slug || project.aliases.includes(slug),
  );
}

export const featuredProjects = publishedProjects.filter((project) =>
  ['schlepp', 'evoque', 'afriforge'].includes(project.slug),
);
