import { AstroOrderedNoun } from "../astroInterfaces";
import Planet from "./planet";

type WesternElementArgs = AstroOrderedNoun & {
  borderColor: string;
  dorotheanTriplicity: {"day":Planet, "night":Planet, "cooperating":Planet};
};

/**
 * The structure of the 4 western elements
 * @author Addi Penry
 * @type {class}
 */
export default class WesternElement implements AstroOrderedNoun {
  // MEMBERS
  icon: string;
  label: string;
  description;
  orderIdx;
  typeLabel;
  borderColor;
  /**
   * The logic: If you take the elemental triplicities, we're almost there. But a diurnal planet can't be part of a team on a nocturnal yin element. Thus, we make some swaps.
   * 
   * Fire (yang, diurnal): ♈︎ ♌︎ ♐︎ | ♂ ☉ ♃ | ♂ is nocturnal; use other malefic, ♄.
   * Earth (yin, nocturnal): ♉︎ ♍︎ ♑︎ | ♀ ☿ ♄ | ♄ is diurnal; use other malefic, ♂. ☿ defaults to diurnal; ♀ and ♂ already in use, so swap with only remaining nocturnal planet ☾.
   * Air (yang, diurnal): ♊︎ ♎︎ ♒︎︎ | ☿ ♀ ♄ | ♀ is nocturnal; use other benefic, ♃.
   * Water (yin, nocturnal): ♋︎ ♏︎ ♓︎︎ | ☾ ♂ ♃ | ♃ is diurnal; use other benefic, ♀.
   */
  dorotheanTriplicity;
  
  // CONSTRUCTOR
  constructor(args:WesternElementArgs) {
    this.icon = args.icon;
    this.label = args.label;
    this.typeLabel = "Element";
    this.description = args.description || "";
    this.borderColor = args.borderColor;
    this.orderIdx = args.orderIdx;
    this.dorotheanTriplicity = args.dorotheanTriplicity;
  }

  // FUNCTIONS
  DisplayTag() {
    return (
      <div className={`m-1 px-1 rounded-md border border-mauve-500 dark:border-mauve-300 ${this.borderColor}`}>
        {this.icon} {this.label}
      </div>
    )
  };
};