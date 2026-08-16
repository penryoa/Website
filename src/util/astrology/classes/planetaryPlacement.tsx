import Planet from "./planet.tsx";
import ZDMS from "./zdms.tsx";
import Zodiac from "./zodiac.tsx";

interface Placement {
	planet: Planet;
	declination: ZDMS | undefined;
	phase: "D" | "SR" | "R" | "SD";
};

type DignityCondition = {
	label: string;
	pointMod: number;
	condition: Function;
};

type PlanetaryPlacementArgs = ZDMS & Placement;

export default class PlanetaryPlacement {
	// MEMBERS
	planet;
	sign;
	degree;
	minute;
	second;
	declination;
	phase;

	// CONSTRUCTOR
	constructor(args:PlanetaryPlacementArgs) {
		this.planet = args.planet;
		this.sign = args.sign;
		this.degree = args.degree || 0;
		this.minute = args.minute || 0;
		this.second = args.second || 0;
		this.declination = args.declination || undefined;
		this.phase = args.phase || "D";
	}

	// FUNCTIONS
	public inDomicile(): boolean {
		return this.sign.domicile == this.planet;
	};

	public inDetriment(): boolean {
		return this.sign.detriment == this.planet;
	};

	public inExaltation(): boolean {
		return this.sign.exaltation == this.planet;
	};

	public inFall(): boolean {
		return this.sign.fall == this.planet;
	};

	public inTriplicity(): boolean {
		return this.sign.isPlanetInTriplicity(this.planet);
	};

	public inBound(): boolean {
		return this.sign.isPlanetInBound(this.planet, this.degree);
	};

	public inFace(): boolean {
		let found = false;
		this.sign.getDecans().every((decan,dIdx) => {
			let decanMin = 0 + dIdx * 10;
			if (decan == this.planet && this.degree >= decanMin && this.degree < decanMin + 10) {
				found = true;
				return false;
			}
			return true;
		});
		return found;
	};

	public inModernDomicile(): boolean {
		return this.sign.modernDomicile == this.planet;
	};

	/**
	 * Determines if a planet is in the via combusta, a band that indicates a tougher position, from 15 Libra to 15 Scorpio.
	 * People have different opinions on where this lies, but this is what I choose to use.
	 * @returns {boolean}
	 */
	public inViaCombusta(): boolean {
		return (this.sign.label == "Libra" && this.degree >= 15) || (this.sign.label == "Scorpio" && this.degree <= 15)
	};

	/**
	 * Determines if the degree of this sign is considered a critical degree for the sign's element.
	 * @returns {boolean}
	 */
	public inCriticalDegree(): boolean {
		return this.sign.getMode().inCriticalDegree(this.degree);
	};

	/**
	 * The anaretic degree, 29, is considered to heighten the planet's
	 * challenges, intensity, etc. It makes you reckon with this planet
	 * one way or another, regardless of sign.
	 * @returns {boolean}
	 */
	public inAnareticOr0Degree(): boolean {
		return this.degree === 0 || this.degree === 29;
	};

	/**
	 * Calculates any relevant dignity or degree conditions
	 * @returns {DignityCondition[]} a list of all the conditions
	 */
	public getDignityConditions(): DignityCondition[] {
		return possibleDignityConditions.filter((cond) => {
			return cond.condition(this)
		});
	};
};

/**
 * All the possible conditions for a planet at this sign and degree
 */
const possibleDignityConditions = [
	{
    label: "In Domicile",
		pointMod: +5,
    condition: (placement:PlanetaryPlacement) => { return placement.inDomicile() },
  },
  {
    label: "In Detriment",
		pointMod: -5,
    condition: (placement:PlanetaryPlacement) => { return placement.inDetriment() },
  },
  {
    label: "In Exaltation",
		pointMod: +4,
    condition: (placement:PlanetaryPlacement) => { return placement.inExaltation() },
  },
  {
    label: "In Fall",
		pointMod: -4,
    condition: (placement:PlanetaryPlacement) => { return placement.inFall() },
  },
  {
    label: "In Triplicity",
		pointMod: +3,
    condition: (placement:PlanetaryPlacement) => { return placement.inTriplicity() },
  },
  {
    label: "In Bound",
		pointMod: +2,
    condition: (placement:PlanetaryPlacement) => { return placement.inBound() },
  },
  {
    label: "In Face",
		pointMod: +1,
    condition: (placement:PlanetaryPlacement) => { return placement.inFace() },
  },
  {
    label: "In Modern Domicile",
		pointMod: 0,
    condition: (placement:PlanetaryPlacement) => { return placement.inModernDomicile() },
  },
  {
    label: "Traditionally, only classical planets can have dignity.",
		pointMod: 0,
    condition: (placement:PlanetaryPlacement) => { return !placement.planet.isClassical() },
  },
	{
    label: "In Critical Degree (by element)",
		pointMod: 0,
    condition: (placement:PlanetaryPlacement) => { return placement.inCriticalDegree() },
  },
	{
    label: "In Critical Degree (0 or anaretic)",
		pointMod: 0,
    condition: (placement:PlanetaryPlacement) => { return placement.inAnareticOr0Degree() },
  },
	{
    label: "In Via Combusta (15° Libra - 15° Scorpio)",
		pointMod: 0,
    condition: (placement:PlanetaryPlacement) => { return placement.inViaCombusta() },
  },
];
