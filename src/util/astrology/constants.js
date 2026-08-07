import Bound from "./classes/bound.tsx";
import WesternElement from "./classes/element.tsx";
import Mode from "./classes/mode.tsx";
import Planet from "./classes/planet.tsx";
import Proximity from "./classes/proximity.tsx"
import Sect from "./classes/sect.tsx"
import Zodiac from "./classes/zodiac.tsx";
  
// =================== PLANETS ===================
const Sun = new Planet({
  icon: "☉",
  label: "Sun",
  textColor: "text-yellow-700 dark:text-yellow-200",
  bgColor: "bg-yellow-200 dark:bg-yellow-700",
  description: "identity, ego, self",
  proximity: "personal",
  sect: "diurnal",
  role: "light",
  chaldeanOrder: 3,
});
const Moon = new Planet({
  icon: "☾",
  label: "Moon",
  textColor: "text-teal-700 dark:text-teal-200",
  bgColor: "bg-teal-200 dark:bg-teal-700",
  description: "emotions, feelings, needs",
  proximity: "personal",
  sect: "nocturnal",
  role: "light",
  chaldeanOrder: 6,
});
const Mercury = new Planet({
  icon: "☿",
  label: "Mercury",
  textColor: "text-violet-700 dark:text-violet-200",
  bgColor: "bg-violet-300 dark:bg-violet-700",
  description: "communication, learning",
  proximity: "personal",
  sect: "diurnal",
  role: "neutral",
  chaldeanOrder: 5,
});
const Venus = new Planet({
  icon: "♀",
  label: "Venus",
  textColor: "text-green-700 dark:text-green-200",
  bgColor: "bg-green-200 dark:bg-green-700",
  description: "beauty, love",
  proximity: "personal",
  sect: "nocturnal",
  role: "benefic",
  chaldeanOrder: 4,
});
const Mars = new Planet({
  icon: "♂",
  label: "Mars",
  textColor: "text-red-700 dark:text-red-200",
  bgColor: "bg-red-200 dark:bg-red-700",
  description: "raw drive, action",
  proximity: "personal",
  sect: "nocturnal",
  role: "malefic",
  chaldeanOrder: 2,
});
const Jupiter = new Planet({
  icon: "♃",
  label: "Jupiter",
  textColor: "text-orange-700 dark:text-orange-200",
  bgColor: "bg-orange-200 dark:bg-orange-600",
  description: "expansion, experience, luck",
  proximity: "social",
  sect: "diurnal",
  role: "benefic",
  chaldeanOrder: 1,
});
const Saturn = new Planet({
  icon: "♄",
  label: "Saturn",
  textColor: "text-indigo-700 dark:text-indigo-200",
  bgColor: "bg-indigo-200 dark:bg-indigo-700",
  description: "establishing structure, long-term results",
  proximity: "social",
  sect: "diurnal",
  role: "malefic",
  chaldeanOrder: 0,
});
const Uranus = new Planet({
  icon: "♅",
  label: "Uranus",
  textColor: "text-mauve-700 dark:text-mauve-200",
  bgColor: "bg-mauve-200 dark:bg-mauve-700",
  description: "chaos, sudden change",
  proximity: "generational",
});
const Neptune = new Planet({
  icon: "♆",
  label: "Neptune",
  textColor: "text-mauve-700 dark:text-mauve-200",
  bgColor: "bg-mauve-200 dark:bg-mauve-700",
  description: "containment, illusion, dreams",
  proximity: "generational",
});
export const Pluto = new Planet({
  icon: "⯓",
  label: "Pluto",
  textColor: "text-mauve-700 dark:text-mauve-200",
  bgColor: "bg-mauve-200 dark:bg-mauve-700",
  description: "forced change, power, death",
  proximity: "generational",
});

/**
 * Our 10 known planets in order from Sun to Pluto
 * @type {Planet[]}
*/
export const planets = [ Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto ];

/**
 * Lists all the planets in Chaldean Order.
 * 
 * Note: Totally could calculate this by filtering out non-classical planets then sorting that array by chaldeanOrder. But I think this saves us a decent calculation since it never changes anyway.
 * @type {Planet[]}
 */
export const planetsInChaldeanOrder = [ Saturn, Jupiter, Mars, Sun, Venus, Mercury, Moon ];

/**
 * The two sect teams
 * @type {Sect[]}
 */
export const sects = [
  new Sect({icon:"𖤓˚", label: "Diurnal Team", sect: "diurnal"}),
  new Sect({icon:"⏾⋆", label: "Nocturnal Team", sect: "nocturnal"}),
];

/**
 * The three proximity teams
 * @type {Proximity[]}
 */
export const proximities = [
  new Proximity({icon:"𖠋", label: "Personal Planets", proximity: "personal", description: "Being so close to the earth, these planets change signs quick and are thus more personal to you."}),
  new Proximity({icon:"𖠋𖠋", label: "Social Planets", proximity: "social", description: "Kind of in between, these planets stay in one sign roughly 1.5-2 years. They're known as social planets because they cover how you and your peers were taught, how authority and rules impact them, and how they are rewarded."}),
  new Proximity({icon:"𖠋𖠋𖠋", label: "Generational Planets", proximity: "generational", description: "These planets are the farthest out thus the slowest to go around the Sun. They're known as the generational planets because they essentially define generations by staying in one sign some 13 to 20 years, depending on the planet."}),
];

// =================== ZODIAC SIGNS ===================
const Aries = new Zodiac({
  orderIdx: 0,
  icon: "♈︎︎",
  label: "Aries",
  domicile: Mars,
  detriment: Venus,
  exaltation: Sun,
  fall: Saturn,
  bounds: [
    new Bound({orderIdx: 0, orb: 6, ruler: Jupiter}),
    new Bound({orderIdx: 1, orb: 6, ruler: Venus}),
    new Bound({orderIdx: 2, orb: 8, ruler: Mercury}),
    new Bound({orderIdx: 3, orb: 5, ruler: Mars}),
    new Bound({orderIdx: 4, orb: 5, ruler: Saturn}),
  ],
});
const Taurus = new Zodiac({
  orderIdx: 1,
  icon: "♉︎︎",
  label: "Taurus",
  domicile: Venus,
  detriment: Mars,
  exaltation: Moon,
  bounds: [
    new Bound({orderIdx: 0, orb: 8, ruler: Venus}),
    new Bound({orderIdx: 1, orb: 6, ruler: Mercury}),
    new Bound({orderIdx: 2, orb: 8, ruler: Jupiter}),
    new Bound({orderIdx: 3, orb: 5, ruler: Saturn}),
    new Bound({orderIdx: 4, orb: 3, ruler: Mars}),
  ],
});
const Gemini = new Zodiac({
  orderIdx: 2,
  icon: "♊︎︎",
  label: "Gemini",
  domicile: Mercury,
  detriment: Jupiter,
  bounds: [
    new Bound({orderIdx: 0, orb: 6, ruler: Mercury}),
    new Bound({orderIdx: 1, orb: 6, ruler: Jupiter}),
    new Bound({orderIdx: 2, orb: 5, ruler: Venus}),
    new Bound({orderIdx: 3, orb: 7, ruler: Mars}),
    new Bound({orderIdx: 4, orb: 6, ruler: Saturn}),
  ],
});
const Cancer = new Zodiac({
  orderIdx: 3,
  icon: "♋︎︎",
  label: "Cancer",
  domicile: Moon,
  detriment: Saturn,
  exaltation: Jupiter,
  fall: Mars,
  bounds: [
    new Bound({orderIdx: 0, orb: 7, ruler: Mars}),
    new Bound({orderIdx: 1, orb: 6, ruler: Venus}),
    new Bound({orderIdx: 2, orb: 6, ruler: Mercury}),
    new Bound({orderIdx: 3, orb: 7, ruler: Jupiter}),
    new Bound({orderIdx: 4, orb: 4, ruler: Saturn}),
  ],
});
const Leo = new Zodiac({
  orderIdx: 4,
  icon: "♌︎︎",
  label: "Leo",
  domicile: Sun,
  detriment: Saturn,
  bounds: [
    new Bound({orderIdx: 0, orb: 6, ruler: Jupiter}),
    new Bound({orderIdx: 1, orb: 5, ruler: Venus}),
    new Bound({orderIdx: 2, orb: 7, ruler: Saturn}),
    new Bound({orderIdx: 3, orb: 6, ruler: Mercury}),
    new Bound({orderIdx: 4, orb: 6, ruler: Mars}),
  ],
});
const Virgo = new Zodiac({
  orderIdx: 5,
  icon: "♍︎︎",
  label: "Virgo",
  domicile: Mercury,
  detriment: Jupiter,
  exaltation: Mercury,
  fall: Venus,
  bounds: [
    new Bound({orderIdx: 0, orb: 7, ruler: Mercury}),
    new Bound({orderIdx: 1, orb: 10, ruler: Venus}),
    new Bound({orderIdx: 2, orb: 4, ruler: Jupiter}),
    new Bound({orderIdx: 3, orb: 7, ruler: Mars}),
    new Bound({orderIdx: 4, orb: 2, ruler: Saturn}),
  ],
});
const Libra = new Zodiac({
  orderIdx: 6,
  icon: "♎︎︎",
  label: "Libra",
  domicile: Venus,
  detriment: Mars,
  exaltation: Saturn,
  fall: Sun,
  bounds: [
    new Bound({orderIdx: 0, orb: 6, ruler: Saturn}),
    new Bound({orderIdx: 1, orb: 8, ruler: Mercury}),
    new Bound({orderIdx: 2, orb: 7, ruler: Jupiter}),
    new Bound({orderIdx: 3, orb: 7, ruler: Venus}),
    new Bound({orderIdx: 4, orb: 2, ruler: Mars}),
  ],
});
const Scorpio = new Zodiac({
  orderIdx: 7,
  icon: "♏︎︎",
  label: "Scorpio",
  domicile: Mars,
  detriment: Venus,
  fall: Moon,
  modernDomicile: Pluto,
  bounds: [
    new Bound({orderIdx: 0, orb: 7, ruler: Mars}),
    new Bound({orderIdx: 1, orb: 4, ruler: Venus}),
    new Bound({orderIdx: 2, orb: 8, ruler: Mercury}),
    new Bound({orderIdx: 3, orb: 5, ruler: Jupiter}),
    new Bound({orderIdx: 4, orb: 6, ruler: Saturn}),
  ],
});
const Sagittarius = new Zodiac({
  orderIdx: 8,
  icon: "♐︎︎",
  label: "Sagittarius",
  domicile: Jupiter,
  detriment: Mercury,
  bounds: [
    new Bound({orderIdx: 0, orb: 12, ruler: Jupiter}),
    new Bound({orderIdx: 1, orb: 5, ruler: Venus}),
    new Bound({orderIdx: 2, orb: 4, ruler: Mercury}),
    new Bound({orderIdx: 3, orb: 5, ruler: Saturn}),
    new Bound({orderIdx: 4, orb: 4, ruler: Mars}),
  ],
});
const Capricorn = new Zodiac({
  orderIdx: 9,
  icon: "♑︎︎",
  label: "Capricorn",
  domicile: Saturn,
  detriment: Moon,
  exaltation: Mars,
  fall: Jupiter,
  bounds: [
    new Bound({orderIdx: 0, orb: 7, ruler: Mercury}),
    new Bound({orderIdx: 1, orb: 7, ruler: Jupiter}),
    new Bound({orderIdx: 2, orb: 8, ruler: Venus}),
    new Bound({orderIdx: 3, orb: 4, ruler: Saturn}),
    new Bound({orderIdx: 4, orb: 4, ruler: Mars}),
  ],
});
const Aquarius = new Zodiac({
  orderIdx: 10,
  icon: "♒︎︎",
  label: "Aquarius",
  domicile: Saturn,
  detriment: Sun,
  modernDomicile: Uranus,
  bounds: [
    new Bound({orderIdx: 0, orb: 7, ruler: Mercury}),
    new Bound({orderIdx: 1, orb: 6, ruler: Venus}),
    new Bound({orderIdx: 2, orb: 7, ruler: Jupiter}),
    new Bound({orderIdx: 3, orb: 5, ruler: Mars}),
    new Bound({orderIdx: 4, orb: 5, ruler: Saturn}),
  ],
});
const Pisces = new Zodiac({
  orderIdx: 11,
  icon: "♓︎︎",
  label: "Pisces",
  domicile: Jupiter,
  detriment: Mercury,
  exaltation: Venus,
  modernDomicile: Neptune,
  bounds: [
    new Bound({orderIdx: 0, orb: 12, ruler: Venus}),
    new Bound({orderIdx: 1, orb: 4, ruler: Jupiter}),
    new Bound({orderIdx: 2, orb: 3, ruler: Mercury}),
    new Bound({orderIdx: 3, orb: 9, ruler: Mars}),
    new Bound({orderIdx: 4, orb: 2, ruler: Saturn}),
  ],
});

/**
 * The Western 12 Zodiac signs.
 * 
 * 14 century BCE: Egyptians establish and use decans
 * 
 * 1 millenium BCE: Babylonians divide ecliptic into 12 zodiacal signs
 * 
 * Note: the Eastern 12 Zodiac signs (Chinese Zodiac) are similar in that they both largely represent animals and ascribe personality traits.
 * @type {Zodiac[]}
 */
export const westernZodiacSigns = [Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces];

// =================== ELEMENTAL TRIPLICITY ===================
const Fire = new WesternElement({
  icon: "🜂",
  label: "Fire",
  orderIdx: 0,
  description: "Fire elements are known for their fervor, energy, and sparking interest in things. Fire rapidly grows; a fiery personality has that flamboyant tendency to add their own spin, be loud, and engage with everything around them.",
  dorotheanTriplicity: {"day": Sun, "night": Jupiter, "cooperating": Saturn}
});
const Earth = new WesternElement({
  icon: "🜃",
  label: "Earth",
  orderIdx: 1,
  description: "Earth elements are on the slower, more predictable and stable side. They are guided by practical matters; physical comfort and security take priority.",
  dorotheanTriplicity: {"day": Venus, "night": Moon, "cooperating": Mars}
});
const Air = new WesternElement({
  icon: "🜁",
  label: "Air",
  orderIdx: 2,
  description: "Air elements foster communication, thought, and clever innovation, whether that be in the realm of wordplay or technology. They lean on the cerebral side, as being able to communicate and process information are their main motivators.",
  dorotheanTriplicity: {"day": Saturn, "night": Mercury, "cooperating": Jupiter}
});
const Water = new WesternElement({
  icon: "🜄",
  label: "Water",
  orderIdx: 3,
  description: "Water elements precede words; they are mute in that way. It's all about the visuals, the creativity, the emotionality. Water elements will seek out emotional clarity and security, wisdom, and truth above all else.",
  dorotheanTriplicity: {"day": Venus, "night": Mars, "cooperating": Moon}
});

/**
 * An ordered array of the 4 triplicities, or elements. 
 * 
 * Note: Eastern elements are different, removing air and adding in metal and wood, hence naming this "westernElements" and not just "elements".
 * @type {WesternElement[]}
 */
export const westernElements = [ Fire, Earth, Air, Water ];

// =================== MODALITY ===================
const Cardinal = new Mode({
  icon: "⟑",
  label: "Cardinal",
  orderIdx: 0,
  description: "A cardinal modality represents the beginning of something, or the personality trait to start things and take initiative. Cardinal modalities may not finish everything they start, but they unabashedly get in there and stir things up. They lead, anticipating who or what needs to be addressed next to further their goals.",
});
const Fixed = new Mode({
  icon: "🝕",
  label: "Fixed",
  orderIdx: 1,
  description: "A fixed modality is, as you can imagine, fixed right in the middle. They don't like to be uprooted and don't act hastily. There's a stubbornness that comes with being fixed, but a steadfast commitment to something of quality is their speciality.",
});
const Mutable = new Mode({
  icon: "🜳",
  label: "Mutable",
  orderIdx: 2,
  description: "Mutable modality marks the end of something. It is amazing at taking feedback, responding to change, and reacting to unpredictable circumstances. They may align with going-with-the-flow or overplanning, but either way, they are looking to their environment for signals to alter course and are ready to handle whatever comes their way.",
});

/**
 * An ordered array of the 3 modalities, or modes
 * @type {Mode[]}
 */
export const modes = [ Cardinal, Fixed, Mutable ];

// =================== DIGNITY ===================
/**
 * @type {{conditionName: {pointMod:number,label:string}}}
 */
export const possibleDignityConditions = {
  notClassical: { pointMod: 0, label: "Traditionally, only classical planets can have dignity." },
  inDomicile: { pointMod: +5, label: "In Domicile" },
  inDetriment: { pointMod: -5, label: "In Detriment" },
  inExaltation: { pointMod: +4, label: "In Exaltation" },
  inFall: { pointMod: -4, label: "In Fall" },
  inTriplicity: { pointMod: +3, label: "In Triplicity" },
  inBound: { pointMod: +2, label: "In Bound" },
  inFace: { pointMod: +1, label: "In Face" },
  inModernDomicile: { pointMod: 0, label: "In Modern Domicile"},
};
