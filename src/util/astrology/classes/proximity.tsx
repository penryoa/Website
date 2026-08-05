import { AstroProperNoun } from "./interfaces";

type ProximityArgs = AstroProperNoun & {
	proximity: string;
};

export default class Proximity implements AstroProperNoun {
	constructor(args:ProximityArgs) {
		this.icon = args.icon;
		this.label = args.label;
		this.typeLabel = "Proximity";
		this.proximity = args.proximity;
	}

	// MEMBERS
	icon;
	label;
	typeLabel;
	proximity;

	// FUNCTIONS border-1
	public DisplayTag() {
		return (
			<div className="m-1 px-1 border-[1] border-mauve-500 flex flex-row gap-2 rounded-md shadow-md shadow-mauve-300 dark:shadow-mauve-600">
				<p className="font-bold">{this.icon}</p>
				<p>{this.label}</p>
			</div>
		)
	};
};