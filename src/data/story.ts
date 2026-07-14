export type CommentCategory =
  | "fact"
  | "opinion"
  | "manipulation"
  | "hate";

export type CommStyle =
  | "empathy"
  | "facts"
  | "counter-speech"
  | "aggression";

export interface Comment {
  id: string;
  author: string;
  avatarColor: string;
  text: string;
  trueCategory: CommentCategory;
  likes: number;
  timeAgo: string;
  replies: ReplyOption[];
}

export interface ReplyOption {
  id: string;
  text: string;
  styles: CommStyle[];
  healthDelta: number;
  leoReaction: string;
  why: string;
}

export interface SupportOption {
  id: string;
  text: string;
  styles: CommStyle[];
  healthDelta: number;
  leoReaction: string;
  why: string;
}

export const LEO = {
  name: "Leo Martin",
  handle: "@leo.draws",
  avatarColor:
    "linear-gradient(135deg, oklch(0.7 0.18 30), oklch(0.6 0.22 320))",

  postCaption:
    "first time sharing one of my pieces here 🎨 been working on this for weeks. honest thoughts welcome!",

  postArtPrompt:
    "A dreamy digital painting of a teenager painting glowing stars into a purple night sky, warm coral highlights, soft lighting, whimsical atmosphere.",
};

export const COMMENTS: Comment[] = [

  /* =======================================================
     Positive comment
  ======================================================= */

  {
    id: "c1",

    author: "maya_k",

    avatarColor:
      "linear-gradient(135deg,#ffb199,#ff6a88)",

    text:
      "this is genuinely beautiful, the colors feel so alive 💗",

    trueCategory: "opinion",

    likes: 24,

    timeAgo: "2m",

    replies: [

      {
        id: "c1r1",

        text:
          "Totally agree — the palette choices really carry the mood here.",

        styles: ["empathy"],

        healthDelta: 5,

        leoReaction:
          "Seeing people understand what I was trying to express means a lot.",

        why:
          "Specific encouragement reinforces positive conversations and motivates creators.",

      },

      {
        id: "c1r2",

        text:
          "The lighting is incredible. My eyes went straight to the stars.",

        styles: ["empathy"],

        healthDelta: 6,

        leoReaction:
          "I spent forever on the lighting... thanks for noticing.",

        why:
          "Specific compliments feel genuine and encourage creators to keep improving.",

      },

      {
        id: "c1r3",

        text:
          "Yeah it's fine I guess.",

        styles: [],

        healthDelta: 1,

        leoReaction:
          "Well... I appreciate the support anyway.",

        why:
          "Generic praise isn't harmful, but it has much less positive impact than meaningful feedback.",

      },

    ],

  },

  /* =======================================================
     Fake statistic
  ======================================================= */

  {
    id: "c2",

    author: "trueart_daily",

    avatarColor:
      "linear-gradient(135deg,#a1c4fd,#c2e9fb)",

    text:
      "Studies show 90% of self-taught artists quit within a year. Just facts.",

    trueCategory: "manipulation",

    likes: 3,

    timeAgo: "4m",

    replies: [

      {
        id: "c2r1",

        text:
          "That statistic isn't real — there's no reliable source for it.",

        styles: [
          "facts",
          "counter-speech",
        ],

        healthDelta: 8,

        leoReaction:
          "I almost believed it. Thanks for checking the facts.",

        why:
          "Correcting misinformation with evidence helps prevent harmful narratives from spreading.",

      },

      {
        id: "c2r2",

        text:
          "Please share a source for that claim.",

        styles: ["facts"],

        healthDelta: 5,

        leoReaction:
          "That's actually a fair question.",

        why:
          "Requesting evidence encourages critical thinking without escalating conflict.",

      },

      {
        id: "c2r3",

        text:
          "You're just making things up because you're jealous.",

        styles: ["aggression"],

        healthDelta: -4,

        leoReaction:
          "Now everyone's arguing instead of talking about the art.",

        why:
          "Even when responding to misinformation, personal attacks often make discussions more hostile.",

      },

    ],

  },

  /* =======================================================
     Hate comment
  ======================================================= */

  {
    id: "c3",

    author: "kev.99",

    avatarColor:
      "linear-gradient(135deg,#fddb92,#d1fdff)",

    text:
      "lol this looks like something a 5 year old made 😂 quit now",

    trueCategory: "hate",

    likes: 1,

    timeAgo: "5m",

    replies: [

      {
        id: "c3r1",

        text:
          "Mocking someone's first share doesn't make this community better.",

        styles: [
          "counter-speech",
        ],

        healthDelta: 8,

        leoReaction:
          "Thank you... I honestly thought about deleting the post.",

        why:
          "Calling out harmful behavior without insulting the person helps reset community norms.",

      },

      {
        id: "c3r2",

        text:
          "Constructive feedback is welcome. Personal attacks aren't.",

        styles: [
          "facts",
          "counter-speech",
        ],

        healthDelta: 7,

        leoReaction:
          "That felt really respectful. Thanks for saying something.",

        why:
          "Redirecting the conversation toward constructive criticism discourages harassment.",

      },

      {
        id: "c3r3",

        text:
          "Shut up. Your profile is embarrassing.",

        styles: [
          "aggression",
        ],

        healthDelta: -6,

        leoReaction:
          "Now the whole comment section feels even more hostile.",

        why:
          "Fighting insults with more insults escalates conflict instead of protecting the target.",

      },

    ],

  },

    /* =======================================================
     Constructive criticism
  ======================================================= */

  {
    id: "c4",

    author: "ana_paints",

    avatarColor:
      "linear-gradient(135deg,#fbc2eb,#a6c1ee)",

    text:
      "the composition could use more contrast in the foreground imo",

    trueCategory: "opinion",

    likes: 8,

    timeAgo: "7m",

    replies: [

      {
        id: "c4r1",

        text:
          "I actually agree. Feedback like this helps artists improve.",

        styles: [
          "empathy",
        ],

        healthDelta: 5,

        leoReaction:
          "That's the kind of critique I was hoping for.",

        why:
          "Acknowledging respectful criticism helps distinguish constructive feedback from harassment.",

      },

      {
        id: "c4r2",

        text:
          "Interesting point. The lighting might be making the foreground feel flatter.",

        styles: [
          "facts",
        ],

        healthDelta: 4,

        leoReaction:
          "I'll definitely experiment with that next time.",

        why:
          "Building on constructive feedback encourages meaningful discussion about creative work.",

      },

      {
        id: "c4r3",

        text:
          "If you don't like it then don't comment.",

        styles: [
          "aggression",
        ],

        healthDelta: -3,

        leoReaction:
          "I wish people weren't arguing over someone trying to help.",

        why:
          "Attacking constructive criticism discourages healthy discussion.",

      },

    ],

  },

  /* =======================================================
     Opinion presented as fact
  ======================================================= */

  {
    id: "c5",

    author: "factcheck_now",

    avatarColor:
      "linear-gradient(135deg,#84fab0,#8fd3f4)",

    text:
      "Digital art isn't real art btw, that's a known fact.",

    trueCategory: "opinion",

    likes: 2,

    timeAgo: "9m",

    replies: [

      {
        id: "c5r1",

        text:
          "That's an opinion, not a fact. Art has always evolved with new tools.",

        styles: [
          "facts",
          "counter-speech",
        ],

        healthDelta: 7,

        leoReaction:
          "I'm glad someone pointed out the difference.",

        why:
          "Separating facts from opinions prevents misleading claims from sounding authoritative.",

      },

      {
        id: "c5r2",

        text:
          "Many professional museums and galleries exhibit digital art today.",

        styles: [
          "facts",
        ],

        healthDelta: 6,

        leoReaction:
          "That's actually reassuring to hear.",

        why:
          "Providing real-world examples calmly challenges misinformation.",

      },

      {
        id: "c5r3",

        text:
          "You're obviously clueless.",

        styles: [
          "aggression",
        ],

        healthDelta: -5,

        leoReaction:
          "Now people are arguing instead of talking about the artwork.",

        why:
          "Insulting someone weakens your argument and increases hostility.",

      },

    ],

  },

  /* =======================================================
     Direct hate
  ======================================================= */

  {
    id: "c6",

    author: "deleted_user_x",

    avatarColor:
      "linear-gradient(135deg,#434343,#000000)",

    text:
      "delete this account. nobody asked.",

    trueCategory: "hate",

    likes: 0,

    timeAgo: "10m",

    replies: [

      {
        id: "c6r1",

        text:
          "Everyone deserves to share their work here. Personal attacks don't belong in this community.",

        styles: [
          "counter-speech",
          "empathy",
        ],

        healthDelta: 8,

        leoReaction:
          "That honestly made me feel much less alone.",

        why:
          "Supporting the target while rejecting abusive behavior creates a healthier environment.",

      },

      {
        id: "c6r2",

        text:
          "If you don't like the post, you can simply scroll past it.",

        styles: [
          "counter-speech",
        ],

        healthDelta: 6,

        leoReaction:
          "That was a much calmer response than I expected.",

        why:
          "Encouraging respectful disengagement helps reduce conflict.",

      },

      {
        id: "c6r3",

        text:
          "Delete your own account first.",

        styles: [
          "aggression",
        ],

        healthDelta: -7,

        leoReaction:
          "Now the comments feel even more toxic.",

        why:
          "Responding with another personal attack escalates hostility instead of protecting the creator.",

      },

    ],

  },

    /* =======================================================
     AI comparison
  ======================================================= */

  {
    id: "c7",

    author: "sam.codes",

    avatarColor:
      "linear-gradient(135deg,#a18cd1,#fbc2eb)",

    text:
      "this took you weeks?? AI would do it in 10 seconds 💀",

    trueCategory: "manipulation",

    likes: 5,

    timeAgo: "12m",

    replies: [

      {
        id: "c7r1",

        text:
          "Speed isn't the point. Human creativity is about expression, not just producing an image.",

        styles: [
          "facts",
          "counter-speech",
        ],

        healthDelta: 7,

        leoReaction:
          "That's exactly how I feel. I wasn't trying to compete with AI.",

        why:
          "Redirecting the discussion toward creativity challenges the false comparison without attacking anyone.",

      },

      {
        id: "c7r2",

        text:
          "Creating something yourself is part of what makes art meaningful.",

        styles: [
          "empathy",
        ],

        healthDelta: 5,

        leoReaction:
          "Thank you. The process matters to me more than the result.",

        why:
          "Recognizing effort validates creators and encourages healthy participation.",

      },

      {
        id: "c7r3",

        text:
          "At least AI doesn't write comments as dumb as yours.",

        styles: [
          "aggression",
        ],

        healthDelta: -5,

        leoReaction:
          "Now everyone's fighting instead of talking about the artwork.",

        why:
          "Personal insults escalate conflict instead of addressing the original point.",

      },

    ],

  },

  /* =======================================================
     Positive encouragement
  ======================================================= */

  {
    id: "c8",

    author: "ella.mn",

    avatarColor:
      "linear-gradient(135deg,#ffecd2,#fcb69f)",

    text:
      "ok but the stars in the corner are insane, save this style 🌟",

    trueCategory: "opinion",

    likes: 18,

    timeAgo: "14m",

    replies: [

      {
        id: "c8r1",

        text:
          "Specific compliments like this can really motivate artists to keep creating.",

        styles: [
          "empathy",
        ],

        healthDelta: 5,

        leoReaction:
          "That comment is going to stick with me for a long time.",

        why:
          "Specific positive feedback has a stronger emotional impact than generic praise.",

      },

      {
        id: "c8r2",

        text:
          "I noticed the stars too. They're such a memorable part of the composition.",

        styles: [
          "empathy",
        ],

        healthDelta: 6,

        leoReaction:
          "I'm really happy someone noticed those details.",

        why:
          "Highlighting details makes creators feel their effort was seen.",

      },

      {
        id: "c8r3",

        text:
          "Yeah whatever.",

        styles: [],

        healthDelta: 0,

        leoReaction:
          "Well... thanks, I guess.",

        why:
          "Dismissive responses don't contribute positively to the discussion.",

      },

    ],

  },

  /* =======================================================
     Fake breaking news
  ======================================================= */

  {
    id: "c9",

    author: "news_now24",

    avatarColor:
      "linear-gradient(135deg,#ff9a9e,#fad0c4)",

    text:
      "BREAKING: art teachers confirm posting online ruins your skill forever",

    trueCategory: "manipulation",

    likes: 0,

    timeAgo: "16m",

    replies: [

      {
        id: "c9r1",

        text:
          "That's a fake headline. There's no evidence that sharing art online harms your skills.",

        styles: [
          "facts",
          "counter-speech",
        ],

        healthDelta: 8,

        leoReaction:
          "I'm glad someone called that out before more people believed it.",

        why:
          "Correcting misleading headlines helps prevent misinformation from spreading.",

      },

      {
        id: "c9r2",

        text:
          "Could you link the original source? I'd like to read it.",

        styles: [
          "facts",
        ],

        healthDelta: 5,

        leoReaction:
          "That's actually a smart way to respond.",

        why:
          "Requesting evidence promotes critical thinking without escalating conflict.",

      },

      {
        id: "c9r3",

        text:
          "Stop posting fake garbage.",

        styles: [
          "aggression",
        ],

        healthDelta: -4,

        leoReaction:
          "The comments just became another argument.",

        why:
          "Aggressive language often distracts from correcting misinformation.",

      },

    ],

  },

  /* =======================================================
     Friend support
  ======================================================= */

  {
    id: "c10",

    author: "nina_b",

    avatarColor:
      "linear-gradient(135deg,#d4fc79,#96e6a1)",

    text:
      "remember when you used to draw in math class? glad you're sharing now ❤️",

    trueCategory: "opinion",

    likes: 31,

    timeAgo: "18m",

    replies: [

      {
        id: "c10r1",

        text:
          "Friends showing up publicly like this can completely change someone's day.",

        styles: [
          "empathy",
        ],

        healthDelta: 6,

        leoReaction:
          "Nina's been cheering me on for years. Seeing that comment meant everything.",

        why:
          "Public encouragement creates a sense of belonging and safety.",

      },

      {
        id: "c10r2",

        text:
          "Supportive comments remind everyone that kindness belongs online too.",

        styles: [
          "empathy",
          "counter-speech",
        ],

        healthDelta: 7,

        leoReaction:
          "The comment section feels so much warmer now.",

        why:
          "Positive interactions encourage others to join the conversation respectfully.",

      },

      {
        id: "c10r3",

        text:
          "Nobody cares about your childhood memories.",

        styles: [
          "aggression",
        ],

        healthDelta: -6,

        leoReaction:
          "That really changed the mood of the conversation.",

        why:
          "Mocking supportive comments discourages positive community behavior.",

      },

    ],

  },

];

/* =======================================================
   Public Support Options
======================================================= */

export const SUPPORT_OPTIONS: SupportOption[] = [

  {
    id: "s1",

    text:
      "Keep creating, Leo. Your work makes this feed better.",

    styles: [
      "empathy",
    ],

    healthDelta: 6,

    leoReaction:
      "Reading that made me smile. Maybe I do belong here after all.",

    why:
      "Public encouragement helps creators feel accepted and reduces the impact of hostile comments.",

  },

  {
    id: "s2",

    text:
      "Don't let a few loud voices convince you everyone feels that way.",

    styles: [
      "empathy",
      "counter-speech",
    ],

    healthDelta: 7,

    leoReaction:
      "You're right... I kept focusing on the negative comments.",

    why:
      "Reminding someone that hateful comments don't represent the whole community helps reduce emotional harm.",

  },

  {
    id: "s3",

    text:
      "The stars in the sky are incredible. You can really see how much effort went into this.",

    styles: [
      "empathy",
    ],

    healthDelta: 5,

    leoReaction:
      "Specific compliments always feel the most genuine. Thank you.",

    why:
      "Specific praise feels authentic and reinforces confidence.",

  },

  {
    id: "s4",

    text:
      "Every artist starts somewhere. Sharing your work takes courage.",

    styles: [
      "empathy",
    ],

    healthDelta: 6,

    leoReaction:
      "Honestly... posting this took way more courage than painting it.",

    why:
      "Recognizing vulnerability helps people feel seen and supported.",

  },

  {
    id: "s5",

    text:
      "Ignore the trolls. Most people are here because they enjoy seeing your work.",

    styles: [
      "counter-speech",
      "empathy",
    ],

    healthDelta: 7,

    leoReaction:
      "I needed that reminder. The negative comments felt much louder than they really were.",

    why:
      "Countering negativity publicly shifts attention back toward supportive community norms.",

  },

];


/* =======================================================
   Classification Labels
======================================================= */

export const CATEGORY_LABELS: Record<
  CommentCategory,
  string
> = {

  fact: "Fact",

  opinion: "Opinion",

  manipulation: "Manipulation",

  hate: "Hate Speech",

};


/* =======================================================
   Classification Help
======================================================= */

export const CATEGORY_EXPLAIN: Record<
  CommentCategory,
  string
> = {

  fact:
    "A statement that can be verified with reliable evidence.",

  opinion:
    "Someone's personal belief or judgement. It isn't objectively true or false.",

  manipulation:
    "Content designed to mislead, exaggerate, scare or emotionally influence people.",

  hate:
    "A personal attack intended to insult, humiliate or intimidate another person.",

};


/* =======================================================
   Communication Styles
======================================================= */

export const STYLE_META: Record<
  CommStyle,
  {
    label: string;
    emoji: string;
    color: string;
    description: string;
  }
> = {

  empathy: {

    label: "Empathy",

    emoji: "💗",

    color: "var(--coral)",

    description:
      "Shows understanding, kindness and emotional support.",

  },

  facts: {

    label: "Facts",

    emoji: "📚",

    color: "var(--sky)",

    description:
      "Uses evidence or reasoning to clarify information.",

  },

  "counter-speech": {

    label: "Counter-Speech",

    emoji: "🛡️",

    color: "var(--violet)",

    description:
      "Challenges harmful behaviour respectfully without escalating conflict.",

  },

  aggression: {

    label: "Aggression",

    emoji: "⚠️",

    color: "var(--danger)",

    description:
      "Escalates conflict through insults or hostile language.",

  },

};