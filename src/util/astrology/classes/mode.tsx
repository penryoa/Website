import { AstroOrderedNoun } from "./interfaces";

/**
 * The structure of the 3 modes
 * @author Addi Penry
 * @type {class}
 */
export default class Mode implements AstroOrderedNoun {
  constructor(args: AstroOrderedNoun) {
    this.icon = args.icon;
    this.label = args.label;
    this.typeLabel = "Modality";
    this.orderIdx = args.orderIdx;
  }
  
  // MEMBERS
  icon;
  label;
  typeLabel;
  orderIdx;
  
  // FUNCTIONS
  DisplayTag() {
    return (
      <div className="m-1 flex flex-row gap-2 rounded-md border-2 border-dotted border-amber-900 dark:border-white">
        <p className="text-mauve-500 dark:text-mauve-300">{this.icon}</p>
        <p>{this.label}</p>
      </div>
    )
  };
};