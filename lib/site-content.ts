// Personal details confirmed by the founder in this conversation.
// Other biographical copy comes from the founder's supplied brief.
export const founder = {
  name: 'Oluwaseyi David',
  email: 'hello@oluwaseyidavid.com',
  city: 'Lagos',
  country: 'Nigeria',
  role: 'Independent Designer and Strategist',
  // Verified URL of the existing Sites deployment. This revision remains local.
  siteUrl: 'https://personal-portfolio-study.oluwaseyi166.chatgpt.site',
  portrait: null as { src: string; alt: string; width: number; height: number } | null,
  portraitPlaceholder: '[PORTRAIT]',
  socialLinks: [] as { label: string; url: string }[],
};

export const navigation = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/about' },
  { label: 'Approach', href: '/about#approach' },
  { label: 'Contact', href: '/contact' },
];

export const content = {
  positioning: 'I help growing businesses become easier to understand, trust and choose.',
  description: 'Independent designer and strategist based in Lagos, working across brand strategy, identity, illustration, motion and digital experiences.',
  hero: {
    headline: 'Your business has moved.',
    emphasis: 'I help the brand catch up.',
    supporting: `I’m ${founder.name}, an independent designer and strategist in Lagos. I help founders clarify what they mean, express it properly and carry it across identity, digital and everything in between.`,
  },
  introduction: {
    headline: 'Sometimes the business is good, but people cannot see it yet.',
    body: 'The message is unclear. The identity says one thing. The website says another. Or the business has simply outgrown the version people still meet. That is usually where I come in.',
  },
  about: {
    introduction: `I’m ${founder.name}, an independent designer and strategist working from Lagos.`,
    paragraphs: [
      'I’m interested in the point where a business knows it needs to change but has not yet found the clearest way to express what comes next.',
      'My work moves between strategy and making: asking questions, finding the useful idea and building the identity, website or experience around it. I work independently and bring in trusted specialists when a project needs a larger team.',
    ],
    mien: 'Mien is the independent studio I’m building around the kind of work I want to do more of: thoughtful strategy, distinctive identity and digital experiences that help good businesses communicate with greater clarity.',
    personal: 'Away from the screen, I value good conversations, community, family, time alone and the kind of observation that usually becomes useful later.',
  },
  capabilities: [
    { title: 'Strategy', body: 'Positioning, research, brand direction and verbal identity.' },
    { title: 'Identity', body: 'Visual identity, art direction and brand systems.' },
    { title: 'Digital', body: 'Web design, interactive direction and development.' },
    { title: 'Expression', body: 'Illustration, motion, campaign thinking and launch applications.' },
  ],
  capabilityNote: 'Some projects need the complete system. Others need one important part to work much harder. I shape the scope around the problem.',
  approach: [
    { title: 'Understand', body: 'I learn what changed, what is no longer working and what the business needs people to understand.' },
    { title: 'Decide', body: 'We identify what matters, what the brand should stand for and which choices will move it forward.' },
    { title: 'Make', body: 'I translate the direction into identity, language, imagery, motion and digital experience.' },
    { title: 'Carry', body: 'We make sure the idea remains clear wherever people meet the brand.' },
  ],
  relationship: [
    'I ask before I prescribe.',
    'I explain why a decision matters.',
    'I prefer honest conversations to impressive presentations.',
    'I keep the next step clear.',
    'When a project needs another specialist, I build the right team around it.',
  ],
  contact: {
    headline: 'Tell me what changed.',
    body: 'If the business has moved forward but the brand has not caught up, that is a useful place to begin.',
    invitation: 'Tell me where the business is, what is changing and what people are currently struggling to understand.',
    location: 'Based in Lagos. Working wherever the conversation makes sense.',
  },
};
