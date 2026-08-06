import { JSX } from "react";
import { modes, planetsInChaldeanOrder, westernElements } from "../constants";
import Bound from "./bound";
import { AstroOrderedNoun } from "./interfaces";
import Planet from "./planet";
import { ArrowUpIcon } from "@heroicons/react/solid";
import WesternElement from "./element";

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
    this.description = args.description || "";
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
  description;
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

  public BoundsDecansDisplayBar(degree=null) {
    return (
      <>
        <div className="w-full border border-mauve-500 dark:border-mauve-200">
          <div className="w-full flex flex-row">
            {this.bounds.map((bound) => (
              <div className={`w-${bound.orb}/30 ${bound.ruler.bgColor} text-center`}>
                {bound.ruler.icon} <p className="hidden xl:inline">{bound.ruler.label}</p>
              </div>
            ))}
          </div>
          <hr/>
          <div className="w-full flex flex-row">
            {this.getDecans().map((decan) => (
              <div className={`w-1/3 ${decan.bgColor} text-center`}>
                {decan.icon} <p className="hidden md:inline">{decan.label}</p>
              </div>
            ))}
          </div>
        </div>
        {degree != null && (
          <div className="w-full mb-6">
            <div className={`relative w-${Number(degree)}/30`}>
              <div className="absolute right-0 -mr-2">
                <ArrowUpIcon className="h-4 w-4" />
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  /**
   * Determines if a given planet at a given degree is in bound in this sign
   * @param {Planet} planet 
   * @param {number} degree 
   */
  public isPlanetInBound(planet: Planet, degree:number): boolean {
    let minDegree = 0;
    let isInBound = false;
    this.bounds.sort((b1,b2) => b1.orderIdx - b2.orderIdx);
    this.bounds.every((bound, idx) => {
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
   */
  public getDecans(): Planet[] {
    let decans = [];
    for (let i = 0; i < 3; i++) {
      decans.push(planetsInChaldeanOrder[(this.decanStart + i) % 7]);
    }
    return decans;
  };

  /** Gets the corresponding element */
  public getElement(): WesternElement | undefined {
    return westernElements.find((elem) => elem.orderIdx == this.triplicityOrderIdx);
  };

  /**
   * Gets the corresponding element's Dorothean triplicity lords
   */
  public getTripLords() {
    return this.getElement()?.dorotheanTriplicity || undefined;
  };

  /**
   * Gets the corresponding modality
   */
  public getMode() {
    return modes.find((mode) => mode.orderIdx == this.modalityOrderIdx);
  };
};