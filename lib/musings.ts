// Written for the founder's review at their request; no invented personal anecdotes.
export const musings = [
  {
    slug: 'the-logo-cannot-do-everything',
    title: 'The logo cannot do everything.',
    category: 'On identity',
    excerpt:
      'What happens when we stop asking one small mark to carry the whole business?',
    paragraphs: [
      'There is a particular kind of pressure that arrives with a logo presentation. The mark is on the screen, very large, with nothing around it. Everyone is looking for the business inside it. Its history, ambition, values, personality. Sometimes its entire five-year plan.',
      'I understand the impulse. A logo is a visible decision, and usually an expensive one by the time it reaches that room. You want to feel that it means something. But this way of looking can send an identity in a strange direction. We start adding meaning until the thing itself becomes difficult to use.',
      'A good mark can carry an idea. It still needs company.',
      'Think about a clothing label sewn into a garment. The mark matters, but so do the material, the fit, the words on the care card and the way the garment arrives. Those things give the mark something to stand for. On its own, it is a small piece of typography or a shape. Over time, it becomes shorthand for an experience.',
      'This is why I want to see an identity at several distances. From across a street. In someone’s hand. At the bottom of a fairly ordinary document. A symbol that feels compelling at presentation size may disappear on a label. A quiet wordmark may become very distinctive once it has the right colour, proportion and repetition around it.',
      'With Nabata, the idea of being held has room to travel. It appears in the enclosing mark, but also in the folds, the space around the clothing and the measured pace of the typography. The logo does not have to explain every part of that feeling. The rest of the identity participates.',
      'That distribution of work is something I care about. Colour can establish recognition before a word is read. Type can make a business feel considered or hurried. A photograph can tell you who belongs in the picture. Language can change the temperature of the whole thing. If all of those choices are passive, the logo is left trying to rescue them.',
      'There is a practical benefit here too. A team needs more than a mark to make the next thing. Someone will need to announce a new product, fit a long headline into a small space or prepare a document without a designer beside them. A useful identity gives that person a few clear decisions they can carry forward.',
      'So I try to judge the logo in context early. Does the packaging still feel recognisable when the mark is small? Can a page feel like the brand before you reach the footer? Is there a relationship between the parts, or are we relying on the same badge to tie unrelated layouts together?',
      'I still want a beautiful mark. I care about the curve, the spacing, the awkward little corner that nobody else has noticed yet. That work matters. I just want to give it a fair job. The logo should be able to sign the work with confidence because everything around it has been considered too.',
    ],
  },
  {
    slug: 'leave-something-for-the-eye',
    title: 'Leave something for the eye.',
    category: 'On making',
    excerpt:
      'A design can have a sound explanation and still leave you cold. That is worth paying attention to.',
    paragraphs: [
      'I can explain why a colour belongs in an identity. I can connect a shape to the strategy and show how a typeface supports the tone. I should be able to do those things. But there is a point where the explanation has done its job and I need to look at the work again.',
      'Does it actually feel good?',
      'That question can sound unserious in a room full of reasons. It is also difficult to answer with a diagram. Still, people meet the work before they meet our reasoning. They see the package, the sign or the first screen. They feel something, however briefly, and decide whether to keep looking.',
      'The idea gives me a direction. Making gives me information I did not have when the idea was only words. A colour that sounded warm can look tired next to a particular image. A typeface that seemed confident can become overbearing at the wrong size. Two reasonable choices can be unpleasant together. I have to let the work tell me that.',
      'For me, this is where judgement becomes specific. It is in the distance between a headline and an image. In how much of a pattern to show. In whether a composition needs another element or simply needs the existing one to be larger. These decisions rarely make an impressive strategy slide. They change the experience considerably.',
      'Punchin’ gives those decisions a different set of conditions from Nabata. Its lettering, colour and mascot have permission to be sociable and a little excessive. Nabata needs space for the garment and the person wearing it. If I applied the same idea of restraint to both, I would flatten what makes each one interesting.',
      'This is why I am cautious about turning taste into a universal rule. White space is useful; sometimes a crowded poster is exactly right. A restrained palette can be elegant; sometimes the most convincing answer is orange beside blue. The question is whether the choice belongs to this work, and whether I have handled it well enough.',
      'I find it useful to look at a composition without the presentation around it. No rationale on the left. No carefully chosen mockup doing half the work. Just the design at the size someone might actually encounter it. Weak decisions become easier to see when they are no longer being introduced.',
      'Then I return to the practical things. Can I read it? Is the important information easy to find? Does it survive another format? Those checks give the expression a place to land. A beautiful arrangement that falls apart with a longer product name needs more work, however attached I am to it.',
      'I want the thinking to hold up and the work to have life. Getting both usually involves some uncomfortable editing: letting go of an elegant explanation because the result is dull, or keeping a surprising choice long enough to understand why it works.',
      'Eventually the presentation ends. The design has to meet people on its own. I want to leave something there for them to enjoy.',
    ],
  },
];
export function readingTime(paragraphs: string[]) {
  return Math.max(1, Math.ceil(paragraphs.join(' ').split(/\s+/).length / 220));
}
