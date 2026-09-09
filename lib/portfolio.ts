import schleppAssets from '@/lib/project-assets/schlepp.json';
import fourteenAssets from '@/lib/project-assets/5fourteen.json';
import afriforgeAssets from '@/lib/project-assets/afriforge.json';

export type ProjectMedia = {
  src: string; alt: string; width: number; height: number;
  caption?: string; fit?: 'cover' | 'contain'; position?: string;
};
export type ProjectStory = {
  situation: string; problem: string; question: string; learning: string;
  decision: string; creativeIdea: string; outcome: string;
};
export type ProjectChapter = {
  label: string; title: string; body: string;
  layout: 'wide' | 'pair'; media: ProjectMedia[];
};
export type Project = {
  slug: string; aliases: string[]; number: string; title: string; summary: string;
  category: string; disciplines: string[]; theme: 'lime' | 'blue' | 'pink';
  status: 'draft' | 'published'; year: string | null; role: string;
  credits: string[]; projectStatus: string;
  cover: ProjectMedia; hero: ProjectMedia; identity: ProjectMedia;
  story: ProjectStory; situationTitle: string; decisionTitle: string;
  identityTitle: string; chapters: ProjectChapter[];
};

type Asset = { src: string; width: number; height: number };
function media(asset: Asset, alt: string, caption?: string): ProjectMedia {
  return { src: asset.src, width: asset.width, height: asset.height, alt, caption };
}
const shared = {
  status: 'published' as const, year: null,
  role: 'Brand identity & guidelines',
  credits: ['Oluwaseyi David · In collaboration with Boxless Studio'],
};

export const projects: Project[] = [
  {
    ...shared, slug: 'schlepp', aliases: ['project-01'], number: '01', title: 'Schlepp',
    summary: 'Bringing property, hospitality and everyday care under one clear promise.',
    category: 'Property & hospitality', theme: 'lime',
    disciplines: ['Brand strategy', 'Brand architecture', 'Visual identity', 'Guidelines'],
    projectStatus: 'Commissioned rebrand. Applications shown as design presentations.',
    cover: media(schleppAssets.cover, 'Schlepp’s cream wordmark on an evergreen projecting sign.'),
    hero: media(schleppAssets.hero, 'Schlepp’s Focus on Life identity over a warmly lit pool and property at night.'),
    identity: media(schleppAssets.identity, 'Schlepp logo lockups across evergreen, midnight blue and brick colourways.', 'A consistent mark, with enough range to belong across the business.'),
    situationTitle: 'Property carries a lot.\nThe brand should help.',
    decisionTitle: 'One promise. Across every arm.',
    identityTitle: 'Permanence, with a way through.',
    story: {
      situation: 'Schlepp brings together property development, hospitality and the care that continues after handover. The rebrand needed a clear idea that could hold these different experiences together.',
      problem: 'A building is only one part of the relationship. The identity also had to make room for the stay, the service call and the everyday responsibilities of ownership.',
      question: 'How can one property brand stand for both the quality of what it builds and the care it provides afterwards?',
      learning: 'The shared value is relief: helping people feel informed, supported and reassured. Property should support life, rather than consume it.',
      decision: '“Focus on Life” gives the business a common promise. Schlepp, The Nook and Loadways each have a distinct role and visual character, held together by shared typography, a common system and an orange accent.',
      creativeIdea: 'The mark begins with a mountain: a simple expression of shelter and permanence. A cut opens a path through it. That gesture connects the solidity of a building with the work of making a place liveable.',
      outcome: 'The rebrand brings positioning, language, identity and application rules into one system. It can move from a development campaign to a guest’s key card or a maintenance notice while keeping the same underlying promise.',
    },
    chapters: [
      { label: 'The mark', title: 'Built to feel dependable.', body: 'Simple geometry gives the mark its weight. The same restraint carries into print, where material and proportion do much of the work.', layout: 'pair', media: [
        media(schleppAssets.mark, 'Schlepp’s mountain symbol with an open diagonal cut on evergreen.', 'The mountain and the opening.'),
        media(schleppAssets.brochure, 'Folded Schlepp property brochure with evergreen panels and architectural imagery.', 'Property brochure · Application mockup.'),
      ] },
      { label: 'Brand architecture', title: 'Different roles. A shared home.', body: 'Evergreen anchors Schlepp. Limestone gives The Nook a lighter hospitality setting. Midnight blue makes Loadways distinct. The guidelines also reserve a place for Dwelling as a future extension.', layout: 'wide', media: [
        media(schleppAssets.architecture, 'Four colour territories for Schlepp, The Nook, Loadways and the proposed Dwelling extension.', 'Own · Stay · Manage · Everyday. Dwelling is a reserved direction in the guidelines.'),
      ] },
      { label: 'Care, made tangible', title: 'From arrival to the everyday.', body: 'The promise becomes practical in small moments: a welcome at check-in, clear information in a room, or a sign that makes a service space easier to navigate.', layout: 'pair', media: [
        media(schleppAssets.nook, 'Hands holding The Nook’s orange key-card sleeve in a welcoming interior.', 'The Nook · Guest arrival mockup.'),
        media(schleppAssets.loadways, 'Loadways asset identification and plant-room signage in midnight blue.', 'Loadways · Operations and wayfinding mockups.'),
      ] },
      { label: 'The system in use', title: 'A life beyond the logo.', body: 'Architectural imagery, quiet typography and familiar colour relationships carry the identity across campaigns and everyday objects.', layout: 'wide', media: [
        media(schleppAssets.campaign, 'Three Schlepp campaign panels combining the brand pattern, architecture and the phrase For the way you live.', 'Campaign artwork.'),
        media(schleppAssets.tote, 'Cream Schlepp tote with a circular brand badge resting on a chair.', 'Everyday carry · Merchandise mockup.'),
      ] },
    ],
  },
  {
    ...shared, slug: '5fourteen', aliases: ['project-02'], number: '02', title: '5fourteen',
    summary: 'Making a creative practice’s belief in clarity visible, from first impression to lasting expression.',
    category: 'Creative practice', theme: 'blue',
    disciplines: ['Brand strategy', 'Verbal identity', 'Visual identity', 'Guidelines'],
    projectStatus: 'Brand identity and guidelines. Applications shown as design presentations.',
    cover: media(fourteenAssets.cover, '5fourteen’s orange sun-and-hill symbol embroidered on a cream hoodie.'),
    hero: media(fourteenAssets.hero, '5fourteen landscape artwork with a setting sun, blue gradient and Leave More Than Attention headline.'),
    identity: media(fourteenAssets.identity, '5fourteen’s sun-and-hill symbol and wordmark on cream and dark umber.', 'The hill represents what is already there. The sun brings it into view.'),
    situationTitle: 'Good ideas deserve\nto be understood.',
    decisionTitle: 'Begin with what matters.',
    identityTitle: 'What matters, brought into the light.',
    story: {
      situation: '5fourteen is a creative practice built around understanding before expression. The identity needed to show how strategy, design and storytelling belong to the same way of working.',
      problem: 'A creative business can easily become a list of things it makes. The challenge was to give those different outputs a shared point of view: clarity first, then work that is worth remembering.',
      question: 'How do you make the act of understanding visible?',
      learning: 'The brand’s role is to reveal substance that already exists in an idea, a person or a story. That gives the identity a useful starting point: light, and what it allows us to see.',
      decision: 'The direction centers on “Make History,” supported by a sequence of seeing, understanding, making and remaining. The visual system moves between open atmosphere and clear structure.',
      creativeIdea: 'A sun and a hill form the symbol. One stands for clarity; the other for the ideas and stories waiting to be seen. Warm orange, blue and umber carry that relationship into gradients, geometric fields and the wider identity.',
      outcome: 'The guidelines connect a clear verbal position with a flexible visual language. Campaigns, editorial pieces and merchandise can change in tone and scale while remaining recognisably part of the same practice.',
    },
    chapters: [
      { label: 'Colour & graphic language', title: 'From atmosphere to structure.', body: 'Soft gradients suggest light in motion. Faceted fields give that movement an order. Together they express the relationship between exploring an idea and giving it a clear form.', layout: 'pair', media: [
        media(fourteenAssets.pattern, '5fourteen’s continuous colour field translated into a geometric grid of blue, orange and umber.', 'A continuous field and its structured counterpart.'),
        media(fourteenAssets.colour, '5fourteen symbols and wordmarks in cream, orange, blue and umber combinations.', 'Colour relationships across the identity.'),
      ] },
      { label: 'Campaign language', title: 'One thought, clearly expressed.', body: 'Short statements leave space for the work and the people within it. Photography, colour and the symbol take turns leading the composition.', layout: 'wide', media: [
        media(fourteenAssets.campaign, 'Three 5fourteen posters using geometric colour fields, a portrait and concise brand statements.', 'Campaign artwork · Begin Where It Matters.'),
        media(fourteenAssets.billboard, '5fourteen’s blue-to-orange geometric campaign on an outdoor billboard.', 'Environmental application mockup.'),
      ] },
      { label: 'The system in use', title: 'Something worth keeping.', body: 'The identity extends into editorial and wearable objects. The symbol can be a small, quiet signature; colour and pattern can carry the larger surface.', layout: 'wide', media: [
        media(fourteenAssets.books, 'Two 5fourteen editorial booklets with blue and orange geometric covers in natural light.', 'Editorial application mockups.'),
        media(fourteenAssets.apparel, '5fourteen cap, T-shirt and hoodie showing small symbols and larger illustrated graphics.', 'Merchandise application mockups.'),
      ] },
    ],
  },
  {
    ...shared, slug: 'afriforge', aliases: ['project-03'], number: '03', title: 'Afriforge',
    summary: 'Giving a brand for African founders a visual language of structure, support and possibility.',
    category: 'Founder support', theme: 'pink',
    disciplines: ['Brand direction', 'Verbal identity', 'Visual identity', 'Guidelines'],
    projectStatus: 'Portfolio presentation of the supplied identity and guidelines. Applications shown as design mockups.',
    cover: media(afriforgeAssets.cover, 'Afriforge’s Shape Tomorrow campaign with orange blocks and transparent structural elements.'),
    hero: media(afriforgeAssets.hero, 'Afriforge campaign mockups across three bus-shelter panels, combining founder portraits and orange graphics.'),
    identity: media(afriforgeAssets.identity, 'Afriforge’s interlocking pillar symbol and wordmark across lilac, peach, orange and dark backgrounds.', 'One identity, with a range of warm and confident expressions.'),
    situationTitle: 'Founders should not\nhave to build alone.',
    decisionTitle: 'Make support feel structural.',
    identityTitle: 'Built from the idea of building.',
    story: {
      situation: 'Afriforge supports African founders navigating uncertainty and building for the long term. This presentation brings the thinking and the supplied visual identity together around that purpose.',
      problem: 'Support can be an abstract promise. The identity needed to give structure, collaboration and resilience a form people could recognise across the brand’s communication.',
      question: 'How can a founder-support brand communicate both the strength of its foundations and the possibility ahead?',
      learning: 'The guidelines place structure, strategy and support at the center of the brand. Construction provides a visual connection between those ideas: strong systems are built from parts working together.',
      decision: '“Shape Tomorrow” connects the long-term ambition to an active, supportive voice. The visual direction combines construction-inspired forms with images of people building, deciding and working together.',
      creativeIdea: 'Three interlocking pillars form the mark. Reinforcing-bar patterns and dimensional elements extend its geometry, while orange and lilac bring energy to a language rooted in structure.',
      outcome: 'The identity gives Afriforge a consistent way to connect its founder-focused message with a distinctive visual system. The presentation demonstrates that system across campaigns, digital communication and physical objects.',
    },
    chapters: [
      { label: 'A language of structure', title: 'The idea extends beyond the mark.', body: 'The rebar pattern recalls the framework inside a solid structure. Dimensional forms turn the same theme into an expressive set of visual elements.', layout: 'pair', media: [
        media(afriforgeAssets.pattern, 'Afriforge’s thin isometric rebar pattern extending across a light background.', 'Reinforcement as a repeatable graphic language.'),
        media(afriforgeAssets.elements, 'Four Afriforge dimensional elements in orange, lilac and translucent materials.', 'A family of structural forms.'),
      ] },
      { label: 'Campaign expression', title: 'A future with people in it.', body: 'The geometric world sits alongside founder portraits and direct, encouraging language. The work makes the support feel human as well as systematic.', layout: 'wide', media: [
        media(afriforgeAssets.posters, 'Three Shape Tomorrow posters with lilac and orange dimensional objects.', 'Shape Tomorrow · Campaign artwork.'),
        media(afriforgeAssets.campaign, 'Afriforge posters on a wall combining portraits, structural forms and brand messaging.', 'Environmental application mockup.'),
      ] },
      { label: 'The system in use', title: 'The same idea, at another scale.', body: 'The colour, forms and voice carry across a handheld screen and a wearable surface without depending on a single layout.', layout: 'pair', media: [
        media(afriforgeAssets.digital, 'Afriforge mobile communication shown on a phone against a dark plinth.', 'Digital application mockup.'),
        media(afriforgeAssets.apparel, 'Front and back of lilac Afriforge T-shirts featuring a dimensional brand element.', 'Merchandise application mockup.'),
      ] },
    ],
  },
];

export function isProjectReady(project: Project): boolean {
  return project.status === 'published' && !!project.title && !!project.summary
    && !!project.cover.src && !!project.hero.src && !!project.identity.src
    && project.chapters.length > 0
    && project.chapters.every(chapter => chapter.media.length > 0 && chapter.media.every(item => !!item.src && !!item.alt))
    && Object.values(project.story).every(value => !!value.trim());
}
export const publishedProjects = projects.filter(isProjectReady);
export function findProject(slug: string) {
  return projects.find(project => project.slug === slug || project.aliases.includes(slug));
}
