import { AstroProperNoun } from "./interfaces";

type PlanetArgs = AstroProperNoun & {
	textColor: string;
	bgColor: string;
	description: string;
	proximity: "personal" | "social" | "generational";
	sect: "diurnal" | "nocturnal" | null;
	role: "light" | "benefic" | "malefic" | "neutral" | null;
	chaldeanOrder: number | null;
};

/**
 * The structure of the 10 planets
 * @author Addi Penry
 * @type {class}
*/
export default class Planet implements AstroProperNoun {
  constructor(args: PlanetArgs) {
		this.icon = args.icon;
		this.label = args.label;
    this.typeLabel = "Planet";
		this.textColor = args.textColor;
		this.bgColor = args.bgColor;
		this.description = args.description;
		this.proximity = args.proximity;
		this.sect = args.sect || null;
		this.role = args.role || null;
		this.chaldeanOrder = args.chaldeanOrder || null;
	}
  
  // MEMBERS
  icon;
  label;
  typeLabel;
  /** The associated Tailwind text color string. For the CSS to correctly generate, we have to type out the entire classname, or else we'd just pass in the color (i.e. "orange"). */
	textColor;
  /** The associated Tailwind background color string. For the CSS to correctly generate, we have to type out the entire classname, or else we'd just pass in the color (i.e. "orange"). */
	bgColor;
  /** An explanation of the purpose of this planet; as the actor, what does this planet do? */
	description;
  /** The grouping for a planet based on its proximity to Earth */
	proximity;
  /** If it's a classical planet, it will be diurnal or nocturnal */
	sect;
  /** If it's a classical planet, it will play a specific role in sect */
	role;
  /** The Chaldean Order was established in 7-6 Century BCE by the Babylonians. It takes into account the speed and size of the planets and orders them from big and slow to small and quick. */
	chaldeanOrder;
	
	// FUNCTIONS
  public DisplayTag() {
		return (
			<div className={`m-1 px-1 flex flex-row gap-2 rounded-md shadow-md shadow-mauve-300 dark:shadow-mauve-500 ${this.bgColor}`}>
				<p className={this.textColor}>{this.icon}</p>
				<p>{this.label}</p>
			</div>
		)
	};
};
