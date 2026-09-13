// Personal details confirmed by the founder in this conversation.
// Other biographical copy comes from the founder's supplied brief.
export const founder = {
  name: 'Oluwaseyi David',
  email: 'hello@oluwaseyidavid.com',
  city: 'Lagos',
  country: 'Nigeria',
  role: 'Independent Designer and Strategist',
  // Verified URL of the existing Sites deployment. This revision remains local.
  siteUrl: 'https://oluwaseyidavid.com',
  portrait: null as {
    src: string;
    alt: string;
    width: number;
    height: number;
  } | null,
  portraitPlaceholder: '[PORTRAIT]',
  socialLinks: [] as { label: string; url: string }[],
};

export const navigation = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Approach', href: '/about#approach' },
  { label: 'Musings', href: '/musings' },
  { label: 'Contact', href: '/contact' },
];

export const content = {
  positioning:
    'I help growing businesses become easier to understand, trust and choose.',
  description:
    'Independent designer and strategist based in Lagos, working across brand strategy, identity, illustration, motion and digital experiences.',
  hero: {
    headline: 'You’ve put a lot into this.',
    emphasis: 'Let’s help people see it.',
    supporting: `I’m ${founder.name}, an independent designer and strategist in Lagos. I help founders clarify what they mean, express it properly and carry it across identity, digital and everything in between.`,
  },
  introduction: {
    headline: 'Sometimes the business is good, but people cannot see it yet.',
    body: 'The message is unclear. The identity says one thing. The website says another. Or the business has simply outgrown the version people still meet. That is usually where I come in.',
  },
  about: {
    introduction: `I’m ${founder.name}, an independent designer and strategist working from Lagos.`,
    paragraphs: [
      'You know your business from the inside. I bring a fresh pair of eyes, thoughtful questions and the care to understand what you’ve built before suggesting what should change.',
      'We work together to find a direction, then I turn it into an identity, website or experience that feels right for your business and the people you want to reach. I lead the work and bring in trusted specialists when we need them.',
    ],
    mien: 'Mien is the independent studio I’m building around the kind of work I want to do more of: thoughtful strategy, distinctive identity and digital experiences that help good businesses communicate with greater clarity.',
    personal:
      'Away from the screen, I value good conversations, community, family, time alone and the kind of observation that usually becomes useful later.',
  },
  capabilities: [
    {
      title: 'Strategy',
      body: 'Positioning, research, brand direction and verbal identity.',
    },
    {
      title: 'Identity',
      body: 'Visual identity, art direction and brand systems.',
    },
    {
      title: 'Digital',
      body: 'Web design, interactive direction and development.',
    },
    {
      title: 'Expression',
      body: 'Illustration, motion, campaign thinking and launch applications.',
    },
  ],
  capabilityNote:
    'Some projects need the complete system. Others need one important part to work much harder. I shape the scope around the problem.',
  approach: [
    {
      title: 'Talk it through.',
      body: 'I listen to where you are, what feels difficult and what you want people to understand.',
    },
    {
      title: 'Find the direction.',
      body: 'We agree on what matters and what the brand needs to say. You’ll know why we’re making each choice.',
    },
    {
      title: 'Make it real.',
      body: 'I turn the direction into words, an identity and the things you need. We look at the work together and refine it.',
    },
    {
      title: 'Put it to work.',
      body: 'You leave with the files and guidance to use the brand confidently, from your website to everyday communication.',
    },
  ],
  relationship: [
    'I ask before I prescribe.',
    'I explain why a decision matters.',
    'I prefer honest conversations to impressive presentations.',
    'I keep the next step clear.',
    'When a project needs another specialist, I build the right team around it.',
  ],
  contact: {
    headline: 'Tell me what you’re building.',
    body: 'You don’t need a perfect brief. Tell me what you’re building, what feels stuck, or what you’d like to do differently.',
    invitation:
      'A few lines about your business, what you need help with and any timing you have in mind are enough to start.',
    location:
      'Based in Lagos. Working with founders and teams wherever they are.',
  },
};
