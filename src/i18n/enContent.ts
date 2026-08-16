import type { Experiment, MethodPrinciple, Note, TimelineStage } from '../types'
import { site } from '../data/site'

export const siteEn = {
  ...site,
  intro:
    'Since 2024 I have used AI to ship interaction prototypes, data analysis, and working apps. The point is not to prove I can code. It is to turn concrete problems in daily life into experiments you can use, and to watch AI move from assistant into business and the everyday.',
  thesis:
    'An AI-native maker with avant-garde taste, a habit of trying new tools, and a practice of turning life observations into product experiments.',
  focus: [
    'How AI rewrites the start of a task, a decision, and everyday infrastructure',
    'After Vibe Coding, how judgment becomes a product skill',
    'Borrowing across game feedback, content loops, and security engineering',
  ],
  domains: [
    { name: 'AI companion', note: 'A case under watch, not the whole story' },
    { name: 'AI data analysis', note: 'The distance from question to conclusion' },
    { name: 'Game making', note: 'Rules, feedback, immersion' },
    { name: 'Media work', note: 'Packaging and the loop of circulation' },
    { name: 'Cybersecurity', note: 'The engineering base, not a standalone project' },
  ],
  signals: site.signals.map((item) =>
    item.key === '03'
      ? { ...item, value: '2024 — ongoing product experiments you can actually use' }
      : item,
  ),
}

export const timelineEn: Record<string, Partial<TimelineStage>> = {
  assistant: {
    titleEn: 'Query and draft',
    kicker: 'How a task begins',
    body: 'What AI first rewrites is not coding speed. It is how a thing gets started. A question is dropped into a conversation and a first draft appears. The person still owns the start. What changes is that the blank page is no longer frightening. The cost of beginning is pressed close to zero.',
  },
  'co-creator': {
    titleEn: 'Write and select',
    kicker: 'How a judgment forms',
    body: 'Prompt, generate, refuse, rewrite begin to stack into one workflow. What is scarce is no longer output. It is deciding what stays. Judgment becomes a product skill: which interactions are real problems, and which are only the smooth hallucination of something generated.',
  },
  business: {
    titleEn: 'The business is relaid',
    kicker: 'How a product is used',
    body: 'Content, support, analysis, and pricing are no longer only departmental lines. They begin to share one layer of model capability. AI enters how an organization decides, how a service is packaged, and how one experience becomes a repeatable business.',
  },
  infra: {
    titleEn: 'Daily life is relaid',
    kicker: 'How a life is organized',
    body: 'Calendar, spending, study, and companionship no longer equal “open an AI product.” The model becomes a default layer. The real product question becomes: when the assistant moves into everyday life, what shape should the interface, the responsibility, and the relation take.',
  },
}

export const methodEn: Record<string, Partial<MethodPrinciple>> = {
  '01': {
    body: 'An experiment does not start from a tech checklist. It starts from a real friction: a decision that stalls, a dataset that will not speak, a companion relation that has gone strange. Observation first, then a product.',
  },
  '02': {
    body: 'AI makes things you can touch arrive quickly. Speed is not for piling features. It is for letting a hypothesis be handled, refused, rewritten. Shipping is a learning move, not a performance.',
  },
  '03': {
    body: 'Judgment shows up as rhythm, leftover space, refusal, and form. Avant-garde structure is not decoration. It is a stance: how information is cut, how a user is respected, how a work is remembered.',
  },
  '04': {
    body: 'Games give feedback. Media work gives voice. Data analysis gives evidence. Cybersecurity gives a boundary. Crossing fields is not collecting labels. It is borrowing another discipline on purpose for the experiment at hand.',
  },
}

export const experimentsEn: Record<
  string,
  Partial<Experiment>
> = {
  'ai-companion': {
    titleEn: 'Sustained interaction, a sense of character, and a new kind of interface',
    summary:
      'When a model is no longer a one-shot Q&A, and begins to stay for weeks with a sense of character, the interface, the memory, and the relation all change shape. This is a case under watch, not the whole story.',
    focus: 'Companionship, character, long interaction',
    status: 'Ongoing watch',
    observations: [
      'Once a conversation lasts, what people want is no longer a smarter answer. It is a stable character and a rhythm of relation they can expect.',
      'A new interface is not necessarily a prettier chat box. It may be a rearrangement of calendar, objects, rooms, or a sense of the body.',
      'The product risk is over-personifying: it is easy to call a tool a companion. It is hard to design responsibility, exit, and a clear boundary.',
    ],
    methodNote:
      'Run small experiments from companionship needs in life, instead of drawing a super-agent blueprint first. Safety and boundary enter every iteration as default engineering constraints.',
    insight:
      'Companionship is not a longer answer. It is handing over one memorable line at the right moment.',
  },
  'ai-data-lens': {
    titleEn: 'How natural language shortens the distance from data, to question, to conclusion',
    summary:
      'Ask in the language already in use, and shorten the trip between tables, hypotheses, and judgment. The point is not auto-charts. It is a conclusion you can still question.',
    focus: 'Questions, evidence, conclusions',
    status: 'In experiment',
    observations: [
      'Most people are not stuck on SQL. They are stuck on not knowing the next question to ask.',
      'If natural-language analysis only hands over a conclusion, it manufactures false certainty. The path of evidence must be visible on the way back.',
      'A good data product is like an editorial desk: it compresses noise, and keeps a door for dissent.',
    ],
    methodNote:
      'First find a dataset you actually have to decide with, then build the lens. Cybersecurity training becomes vigilance about source, permission, and being misled.',
    insight: 'A lens does not auto-draw a chart. It keeps a conclusion available for another question.',
  },
  'play-systems': {
    titleEn: 'Rules, feedback, and immersion in games',
    summary:
      'Rules are the product. Feedback is the copy. Immersion is not a pile of effects. It is the player always knowing what causal world they are in.',
    focus: 'Rules, feedback, immersion',
    status: 'Archive / in progress',
    observations: [
      'A game almost immediately tells you why you failed. Many products hide failure in an empty state and next week’s review.',
      'Players come back because the rules are stable, the feedback is honest, and growth can be felt.',
      'When you move a game mechanic into a product, borrow its clarity, not its addiction structure.',
    ],
    methodNote:
      'Every time you design product feedback, ask first: can the user, like a player, know right now whether they did it right or wrong.',
    insight: 'If feedback cannot be read at once, the rule does not exist.',
  },
  'media-loop': {
    titleEn: 'Packaging, audience feedback, and a loop of circulation',
    summary:
      'Packaging is not decoration. It is how an idea enters someone else’s week. Media work trains compression, hooks, and loops. It also warns a product not to become only a beginning.',
    focus: 'Packaging, feedback, loops',
    status: 'Ongoing practice',
    observations: [
      'Readable in three seconds is not only a content discipline. It is the discipline of the first screen.',
      'Audience feedback is the fastest usability test, and it will push you toward shallower speech.',
      'A good loop is this: expression brings use, use revises expression. One-way exposure is not a product.',
    ],
    methodNote:
      'Use content to test whether a claim can stand. Then use the product to test whether that claim still holds in a real flow.',
    insight: 'A product exists only after a full loop. A hook alone is only a beginning.',
  },
}

export const notesEn: Record<string, Partial<Note>> = {
  'from-assistant-to-everyday-life': {
    title: 'When the assistant starts living in everyday life',
    question:
      'When AI is no longer only a dialog box, and begins to occupy calendar, decision, and companionship, what shape should a product still grow into?',
    theme: 'AI moving from assistant into life',
    lede: 'An assistant becoming infrastructure is not a feature upgrade. It is a life process being laid again. I care less that the model is stronger, more about how a person starts a thing, makes a decision, and lives with a tool.',
    body: [
      {
        type: 'p',
        text: 'Since 2024 I have put AI into almost everything that can move: interaction prototypes, data analysis, content rhythm, even a lasting companionship experiment. You learn quickly that what really changes daily life is not “I write code faster.” Faster code is a narrow slice. The wider change is this: how people start a task changes, how they form a judgment changes, how they use a product changes, and the layer on which an organization runs its business begins to be relaid.',
      },
      {
        type: 'p',
        text: 'The early assistant was like an advisor on call. You arrived with a question, it gave a draft, you left. The interface was a dialog, the relation was one round trip, and responsibility was clear: a person asks, a model answers. That shape is honest, and limited.',
      },
      {
        type: 'h',
        text: 'When a round trip becomes a stay',
      },
      {
        type: 'p',
        text: 'Once a model enters the calendar, shopping, study, and late-night talk, it is no longer only a destination. People will not “open AI” every day. They will run into it inside a life that is already happening. The product question then shifts from “how to make a better answer” to “how to let a capability live in a flow without crossing the line.”',
      },
      {
        type: 'quote',
        text: 'The AI companion is one case under watch. It makes relation, memory, and interface appear at the same time. The same structure also shows up in data and in business.',
      },
      {
        type: 'p',
        text: 'I see this as four stages, not one capability curve: Assistant, Co-creator, Business Layer, Everyday Infrastructure. The first two rewrite personal work. The last two rewrite organizations and the everyday. Faster coding covers only a corner of the first stage.',
      },
      {
        type: 'h',
        text: 'Small and real, so it can be watched',
      },
      {
        type: 'p',
        text: 'So I keep the things I make small on purpose. A prototype you can click, a data lens you can question, a feedback with clear rules — all of these are better to watch than a grand platform. A problem in life has temperature and a boundary. Once it is an experiment, you can see which layer AI actually changed: the start, the judgment, the use, or the way of organizing itself.',
      },
      {
        type: 'p',
        text: 'This note is not a tech list. It is a continuing observation: when the assistant becomes everyday infrastructure, should we still call it a “tool.” If not, the ethics, the form, and the taste of the product all have to be written again.',
      },
    ],
  },
  'judgment-in-vibe-coding': {
    title: 'In Vibe Coding, what is scarce is not generation. It is judgment',
    question:
      'When almost anyone can stand up a prototype in one night, what is the layer that decides the quality of the work?',
    theme: 'Vibe Coding and judgment',
    lede: 'Once generation presses the cost of making something down, what shows is topic choice, editing, and taste. Vibe Coding is not a relaxation of standards. It moves the standard from “can it be made” to “should it exist like this.”',
    body: [
      {
        type: 'p',
        text: 'The pleasure of Vibe Coding is concrete: you describe a feeling, and something clickable grows on the screen. For an AI-native person this almost rewrites the body temperature of making. You used to prove you deserved the toolchain. Now the toolchain comes to you.',
      },
      {
        type: 'p',
        text: 'And because of that, mediocrity is easier to wrap as finished. Smooth interaction, tidy cards, a correct empty-state line — all of it can be generated in one night until it “looks like a product.” Looking like one is not the same as answering a real question.',
      },
      {
        type: 'h',
        text: 'Judgment appears at four cuts',
      },
      {
        type: 'list',
        items: [
          'Does the problem come from friction in life, or from excitement about a technical keyword.',
          'What did the prototype prove: that it runs, or that someone will use it to finish a real thing.',
          'Which generated pieces must be deleted. Deletion needs a stance more than addition does.',
          'Is taste speaking for the product: rhythm, contrast, and refusal will all be read as attitude.',
        ],
      },
      {
        type: 'quote',
        text: 'When implementation is no longer scarce, taste and the choice of problem become part of the engineering.',
      },
      {
        type: 'p',
        text: 'I write my method as a hard sentence: make an experiment you can experience first, then decide whether it deserves to stay. AI speeds up the time to the field. It does not excuse you from the field. Cybersecurity training is useful here too — default to thinking about boundaries, abuse, and failure, not only the demo.',
      },
      {
        type: 'p',
        text: 'So I am not against vibe. I am against treating vibe as proof of done. If it feels right, that only means you can start judging.',
      },
    ],
  },
  'game-feedback-and-product': {
    title: 'The feedback games taught me is more honest than a growth manual',
    question:
      'Why will a player return to a set of rules again and again, while so many product features are forgotten the day they ship?',
    theme: 'Game feedback and product design',
    lede: 'A game almost immediately tells you: the jump failed, you are short on resources, you misread the rhythm. A product often postpones the same information to next week’s review. I want to borrow that honesty, not the addiction structure.',
    body: [
      {
        type: 'p',
        text: 'When you make a game, feedback is not a decoration layer. It is how a rule becomes sensible. One heart less, half a beat late, the wrong weapon — the player knows the cause at once. Without that immediacy, immersion does not happen. Only a manual remains.',
      },
      {
        type: 'p',
        text: 'Look back at many AI products and the feedback is vague. Generation ended, but the user does not know if it is good. Analysis finished, but they do not know which sentence to trust. The companion said a lot, but the interface will not admit whether the relation moved. So the user can only rate a system as “feels okay.”',
      },
      {
        type: 'h',
        text: 'Three disciplines you can borrow',
      },
      {
        type: 'list',
        items: [
          'Rules are public: the user can say what the system rewards and what it refuses.',
          'Feedback is immediate: after one action, the world must change in a way you can feel.',
          'Failure is readable: a mistake should be understood, not softly covered by an empty state.',
        ],
      },
      {
        type: 'quote',
        text: 'Immersion is not an effect. Immersion is cause and effect staying in the room.',
      },
      {
        type: 'p',
        text: 'What I keep testing in Play Systems is moving these three from games into non-game scenes: data analysis should let a conclusion be questioned, a companion experiment should let the rhythm of a relation be felt, and even publishing should let the author know what this loop actually fed back.',
      },
      {
        type: 'p',
        text: 'Growth manuals love retention curves. Games taught me something earlier: people come back because the world is still answering them honestly.',
      },
    ],
  },
  'media-craft-in-product-voice': {
    title: 'After making media, I started writing products with the structure of circulation',
    question:
      'If a piece of content must be understood in three seconds, should the first screen of a product accept the same discipline?',
    theme: 'Media work and product voice',
    lede: 'Media work forces you to press a claim into a shape that can travel. It trains expression, and tempts you to make only a beginning. A product should borrow the clarity and dodge the shallows.',
    body: [
      {
        type: 'p',
        text: 'Content work is cruel, and very honest. Without structure in three seconds, the audience slides away. Title, cover, first sentence: they decide whether you have the right to finish the rest. After doing this for a while, looking at a product’s first screen, you feel many interfaces wasting their most expensive attention.',
      },
      {
        type: 'p',
        text: 'I began to handle product voice like an editorial desk: one main claim, one action, secondary paths do not steal the scene. That is the same discipline as this homepage — first let someone say who you are in thirty seconds, then invite them into the notes or the archive.',
      },
      {
        type: 'h',
        text: 'A circulation loop is not a growth add-on',
      },
      {
        type: 'p',
        text: 'Media Loop wants to watch this: packaging, feedback, speaking again — how they become part of product learning. If a piece of content only buys views, the loop is broken. If it brings someone back to an experiment they can use, and the experiment revises the next sentence, the loop closes.',
      },
      {
        type: 'quote',
        text: 'Packaging is how an idea enters someone else’s week. It is not paint. It is structure.',
      },
      {
        type: 'p',
        text: 'There is risk, of course. Content will push you toward shorter, sharper, more quotable sentences, while the hard part of a product is often long and blunt. So I give myself a limit: the homepage may act like a cover, the inner pages must act like the body. The cover is to be remembered. The body is to be examined.',
      },
    ],
  },
}

export const lensQueriesEn = [
  {
    id: 'open',
    label: 'Which fields get opened most',
    bars: [
      { name: 'Companion', value: 42 },
      { name: 'Data Lens', value: 31 },
      { name: 'Play', value: 18 },
      { name: 'Media', value: 27 },
    ],
    note: 'Opens are not the same as use. Companion is clicked more because it first promised a relation.',
  },
  {
    id: 'steps',
    label: 'Steps from question to conclusion',
    bars: [
      { name: '1 step', value: 22 },
      { name: '2 steps', value: 38 },
      { name: '3 steps', value: 27 },
      { name: '4+ steps', value: 13 },
    ],
    note: 'Past three steps, people stop asking and start believing the first chart.',
  },
  {
    id: 'retry',
    label: 'After a miss, do they ask again',
    bars: [
      { name: 'Ask again', value: 46 },
      { name: 'Rephrase', value: 21 },
      { name: 'Leave', value: 33 },
    ],
    note: 'Asking again means the evidence path is still visible. Not asking usually means certainty choked them.',
  },
]

export const mediaStepsEn = [
  { id: 'hook', title: 'Hook', body: 'Name the friction in three seconds.' },
  { id: 'echo', title: 'Echo', body: 'See who was hit. Keep their wording.' },
  { id: 'make', title: 'Make', body: 'Turn that wording into one step you can press.' },
]

export const mediaNotesEn = [
  'The loop counts because feedback changed the shape, not because a reach number grew.',
  'If the hook cannot become a next step, it is only a beginning.',
  'The loop holds: expression brings use, use revises expression.',
]
