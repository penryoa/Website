import { JSX } from "react/jsx-runtime";

/**
 * Astrological bodies, signs, houses, modes, and elements are all, as I would classify, just straight up proper nouns.
 */
export interface AstroProperNoun {
    /** The associated unicode or emoji character */
    icon: string;
    /** The display label for this instance */
	label: string;
    /** The display label for the type as a whole */
    typeLabel: string;
    /** A brief explanation of the significance */
    description?: string;
    /**
     * Generates a cute little tag with the icon and label
     */
    DisplayTag: () => JSX.Element
}

/**
 * If the class needs to be ordered in some way, this just provides a clean way to reference that ordered index. This applies to things like sign, house, mode, and element.
 */
export interface AstroOrdered {
    /** The ordered index */
    orderIdx: number;
}

/** Just a shorthand for AstroOrdered and AstroProperNoun */
export interface AstroOrderedNoun extends AstroOrdered, AstroProperNoun {};
