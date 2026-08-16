import { AstroOrderedNoun } from "../astroInterfaces";

type ModeArgs = AstroOrderedNoun & {
  criticalDegrees: number[];
};

/**
 * The structure of the 3 modes
 * @author Addi Penry
 * @type {class}
 */
export default class Mode implements AstroOrderedNoun {
  // MEMBERS
  icon;
  label;
  typeLabel;
  description;
  orderIdx;
  /**
   * Each modality has a number of degrees considered critical,
   * where the relevance of this planet is heightened.
   */
  criticalDegrees;
  
  // CONSTRUCTOR
  constructor(args: ModeArgs) {
    this.icon = args.icon;
    this.label = args.label;
    this.typeLabel = "Modality";
    this.description = args.description || "";
    this.orderIdx = args.orderIdx;
    this.criticalDegrees = args.criticalDegrees || [];
  };
  
  // FUNCTIONS
  public DisplayTag() {
    return (
      <div className="m-1 p-0.5 flex flex-row gap-2 rounded-md border border-dotted border-amber-900 dark:border-white">
        <p className="text-mauve-500 dark:text-mauve-300">{this.icon}</p>
        <p>{this.label}</p>
      </div>
    )
  };

  /**
	 * Determines if a specific degree is a critical one for this mode
   * @param {number} deg the degree to compate
	 * @returns {boolean} whether or not it is critical
	 */
  public inCriticalDegree(deg:number): boolean {
    return this.criticalDegrees.filter(d => d === deg).length > 0;;
  };
};