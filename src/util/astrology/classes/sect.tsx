import { AstroProperNoun } from "./interfaces";

type SectArgs = AstroProperNoun & {
	sect: string;
};

export default class Sect implements AstroProperNoun {
	constructor(args:SectArgs) {
		this.icon = args.icon;
		this.label = args.label;
		this.typeLabel = "Sect";
		this.sect = args.sect;
	}

	// MEMBERS
	icon;
	label;
	typeLabel;
	sect;

	// FUNCTIONS
	public DisplayTag() {
		return (
			<div className="m-1 px-1 flex flex-row gap-2 rounded-md shadow-md shadow-mauve-300 dark:shadow-mauve-500">
				<p className="font-bold">{this.icon}</p>
				<p>{this.label}</p>
			</div>
		)
	};
};