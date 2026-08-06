import { AstroProperNoun } from "../astroInterfaces";

type ProximityArgs = AstroProperNoun & {
	proximity: string;
};

export default class Proximity implements AstroProperNoun {
	constructor(args:ProximityArgs) {
		this.icon = args.icon;
		this.label = args.label;
		this.typeLabel = "Proximity";
		this.description = args.description || "";
		this.proximity = args.proximity;
	}

	// MEMBERS
	icon;
	label;
	typeLabel;
	description;
	proximity;

	// FUNCTIONS
	public DisplayTag() {
		return (
			<div className="flex flex-row gap-2 rounded-md shadow-md shadow-mauve-300 dark:shadow-mauve-500 border border-dotted border-mauve-200 bg-mauve-100 dark:border-mauve-900 dark:bg-mauve-700">
				<p>{this.icon}</p>
				<p>{this.label}</p>
			</div>
		)
	};
};