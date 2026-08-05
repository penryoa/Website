import { westernElements } from "../constants";
import Planet from "./planet";
import Zodiac from "./zodiac";

// other eventual considerations: OOB, retrograde
type PlanetaryPlacementArgs = {
	planet: Planet;
	sign: Zodiac;
	degree: number;
	minutes: number;
};

export default class PlanetaryPlacement {
	constructor(args:PlanetaryPlacementArgs) {
		this.planet = args.planet;
		this.sign = args.sign;
		this.degree = args.degree;
		this.minutes = args.minutes;
	}

	// MEMBERS
	planet: Planet;
	sign: Zodiac;
	degree: number;
	minutes: number;

	// FUNCTIONS
	/**
	 * A planet in a sign will have a dignity you can calculate.
	 * @returns {{points:number, label:string, conditions:string[]}}
	 */
	public getEssentialDignity() {
		let points = 0;
		let conditions = [];
		
		// +5 points in domicile, -5 in detriment
		if (this.sign.domicile === this.planet) {
			points += 5;
			conditions.push("inDomicile");
		} else if (this.sign.detriment === this.planet) {
			points -= 5;
			conditions.push("inDetriment");
		}
		
		// +4 points in exaltation, -4 in fall
		if (this.sign.exaltation === this.planet) {
			points += 4;
			conditions.push("inExaltation");
		} else if (this.sign.fall === this.planet) {
			points -= 4;
			conditions.push("inFall");
		}
		
		// +3 in triplicity (Dorothean)
		const element = westernElements.find((elem) => {elem.orderIdx == this.sign.triplicityOrderIdx});
		if (Object.values(element!.dorotheanTriplicity).includes(this.planet)) {
			points += 3;
			conditions.push("inTriplicity");
		}
		
		// +2 in term (Egyptian)
		if (this.sign.isPlanetInBound(this.planet, this.degree)) {
			points += 1;
			conditions.push("inFace");
		}
		
		// +1 in face (Chaldean)
		if (this.planet.chaldeanOrder && this.sign.getDecans().includes(this.planet)) {
			points += 1;
			conditions.push("inFace");
		}

		let label = "peregrine";
		if (points > 0) {
			label = "dignified";
		} else if (points < 0) {
			label = "detrimented"
		}
		
		return { "points": points, "label": label, "conditions": conditions};
	};
};