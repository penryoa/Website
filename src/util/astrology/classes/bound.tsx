import { AstroOrdered } from "./interfaces";
import Planet from "./planet";

type BoundArgs = AstroOrdered & {
	orb: number;
	ruler: Planet;
};

export default class Bound implements AstroOrdered {
	constructor(args:BoundArgs) {
		this.orderIdx = args.orderIdx;
		this.orb = args.orb;
		this.ruler = args.ruler;
	}

	// MEMBERS
	orderIdx;
	orb: number;
	ruler: Planet;
};