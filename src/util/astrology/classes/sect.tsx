import { AstroProperNoun } from "../astroInterfaces";

type SectArgs = AstroProperNoun & {
	sect: string;
};

export default class Sect implements AstroProperNoun {
	constructor(args:SectArgs) {
		this.icon = args.icon;
		this.label = args.label;
		this.typeLabel = "Sect";
		this.description = args.description || "";
		this.sect = args.sect;
	}

	// MEMBERS
	icon;
	label;
	typeLabel;
	description;
	sect;

	// FUNCTIONS
	public DisplayTag() {
		return (
			<div className="flex flex-row gap-2 rounded-md shadow-md shadow-mauve-300 dark:shadow-mauve-500 border border-mauve-200 bg-mauve-100 dark:border-mauve-900 dark:bg-mauve-700">
				<p>{this.icon}</p>
				<p>{this.label}</p>
			</div>
		)
	};
};