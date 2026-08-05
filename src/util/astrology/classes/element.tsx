import { AstroOrderedNoun } from "./interfaces";
import Planet from "./planet";

type WesternElementArgs = AstroOrderedNoun & {
  dorotheanTriplicity: {"day":Planet, "night":Planet, "cooperating":Planet};
};

/**
 * The structure of the 4 western elements
 * @author Addi Penry
 * @type {class}
 */
export default class WesternElement implements AstroOrderedNoun {
  constructor(args:WesternElementArgs) {
    this.icon = args.icon;
    this.label = args.label;
    this.typeLabel = "Element";
    this.description = args.description || "";
    this.orderIdx = args.orderIdx;
    this.dorotheanTriplicity = args.dorotheanTriplicity;
  }

  // MEMBERS
  icon: string;
  label: string;
  description;
  orderIdx;
  typeLabel;
  /**
   * The logic: If you take the elemental triplicities, we're almost there. But a diurnal planet can't be part of a team on a nocturnal yin element. Thus, we make some swaps.
   * 
   * Fire (yang, diurnal): ♈︎ ♌︎ ♐︎ | ♂ ☉ ♃ | ♂ is nocturnal; use other malefic, ♄.
   * Earth (yin, nocturnal): ♉︎ ♍︎ ♑︎ | ♀ ☿ ♄ | ♄ is diurnal; use other malefic, ♂. ☿ defaults to diurnal; ♀ and ♂ already in use, so swap with only remaining nocturnal planet ☾.
   * Air (yang, diurnal): ♊︎ ♎︎ ♒︎︎ | ☿ ♀ ♄ | ♀ is nocturnal; use other benefic, ♃.
   * Water (yin, nocturnal): ♋︎ ♏︎ ♓︎︎ | ☾ ♂ ♃ | ♃ is diurnal; use other benefic, ♀.
   */
  dorotheanTriplicity: {"day":Planet, "night":Planet, "cooperating":Planet};
  
  // FUNCTIONS
  DisplayTag() {
    return (
      <div className="m-1 px-1 flex flex-row gap-2 rounded-md border-2 border-dotted border-mauve-500 dark:border-mauve-300">
        <p className="text-mauve-500 dark:text-mauve-300">{this.icon}</p>
        <p>{this.label}</p>
      </div>
    )
  };
};