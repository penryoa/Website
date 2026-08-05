import { westernElements } from "../constants";
import Planet from "./planet";
import Zodiac from "./zodiac";

// other eventual considerations: OOB, retrograde
interface PlanetaryPlacementArgs {
	planet: Planet;
	sign: Zodiac;
	degree: number;
	minute: number;
};

export default class PlanetaryPlacement {
	constructor(args:PlanetaryPlacementArgs) {
		this.planet = args.planet;
		this.sign = args.sign;
		this.degree = args.degree;
		this.minute = args.minute;
	}

	// MEMBERS
	planet: Planet;
	sign: Zodiac;
	degree: number;
	minute: number;

	// FUNCTIONS
	
};