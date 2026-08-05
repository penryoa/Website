import { planetsInChaldeanOrder } from "../constants";
import Bound from "./bound";
import { AstroOrderedNoun } from "./interfaces";
import Planet from "./planet";

type ZodiacArgs = AstroOrderedNoun & {
  domicile: Planet;
  exaltation: Planet | null;
  detriment: Planet;
  fall: Planet | null;
  bounds: Bound[];
};

/**
 * The structure of the 12 western Zodiac signs
 * @author Addi Penry
 * @type {class}
*/
export default class Zodiac implements AstroOrderedNoun {
  constructor(args: ZodiacArgs) {
    this.orderIdx = args.orderIdx;
    this.icon = args.icon;
		this.label = args.label;
    this.typeLabel = "Sign";
    this.domicile = args.domicile;
    this.exaltation = args.exaltation || null;
    this.detriment = args.detriment;
    this.fall = args.fall || null;
    this.bounds = args.bounds;
    /* Calculate triplicity, modality, and house from given zodiac order */
    this.triplicityOrderIdx = args.orderIdx % 4; // Corresponds to WesternElement.orderIdx
    this.modalityOrderIdx = args.orderIdx % 3; // Corresponds to Mode.orderIdx
    this.decanStart = (2 + args.orderIdx*3) % 7; // Start with Mars at idx 2. 3 decans. Length of Chaldean Order is 7.
	}
  
  // MEMBERS
  icon;
  label;
  typeLabel;
  orderIdx;
  /** A domicile placement has ownership and control; it's at home. In a metaphor: it gets to paint the walls, but also has to pay the bills. */
  domicile;
  /** An exalted placement is simply a suitable pairing that compliments nicely, like an honored guest. In a metaphor: it is expected to go home eventually and certainly has no creative liberties nor expected payments. */
  exaltation;
  /** Nearly 1-1 relationship with domicile (opposites) */
  detriment;
  /** Nearly 1-1 relationship with exaltation (opposites) */
  fall;
  /** The Egyptian bounds for the given Zodiac. These are messy, for sure, but stand the trial of time it seems. */
  bounds;
  /** The calculated index of the elemental triplicity */
  triplicityOrderIdx;
  /** The calculated index of the modality */
  modalityOrderIdx;
  /** The calculated starting index of the Chaldean decans */
  decanStart;
	
  // FUNCTIONS
  public DisplayTag() {
		return (
			<div className="m-1 px-1 flex flex-row gap-2 rounded-md border-2 border-double border-mauve-500 dark:border-mauve-300 shadow-md shadow-mauve-300 dark:shadow-mauve-500">
        <p className="text-mauve-500 dark:text-mauve-300">{this.icon}</p>
        <p>{this.label}</p>
			</div>
		)
	};

  /**
   * Determines if a given planet at a given degree is in bound in this sign
   * @param {Planet} planet 
   * @param {number} degree 
   * @returns {boolean}
   */
  public isPlanetInBound(planet: Planet, degree:number): boolean {
    let minDegree = 0;
    let isInBound = false;
    this.bounds.sort((b1,b2) => b1.orderIdx - b2.orderIdx);
    console.log(this.bounds);
    this.bounds.every((bound, idx) => {
      console.log("idx ",idx,", minDegree ",minDegree, ", degree ",degree,": looking at bound ", bound);
      if (planet == bound.ruler && degree >= minDegree && degree < (minDegree + bound.orb)) {
        isInBound = true;
        return false;
      }
      minDegree+=bound.orb;
      return true;
    });
    return isInBound;
  };

  /**
   * Determines the Chaldean Decans
   * @returns {Planet[]}
   */
  public getDecans(): Planet[] {
    const decans = new Array(3);
    for (let i = 0; i < 3; i++) {
      decans.push(planetsInChaldeanOrder[(this.decanStart + i) % 7]);
    }
    return decans;
  }
};