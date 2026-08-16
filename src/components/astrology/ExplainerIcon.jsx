import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";

/**
 * When there's a technical astrological term you might not know,
 * you can use this ExplainerLabel to put a question icon next
 * to a word who, upon hover, will explain what it is.
 * @param {Object} args
 * @param {string} args.label the word to define
 * @param {string} args.description the explanation upon hover
 * @returns {React.JSX.Element}
 */
export default function ExplainerLabel({label,description}) {
  return (
    <div className="inline-flex items-baseline">
      <b>{label}</b>
      <ExplainerIcon description={description} />
    </div>
  );
};

/**
 * This will create a little definition box where the mouse is
 * only visible while hovering.
 * @param {Object} args
 * @param {string} args.description the explanation upon hover
 * @returns {React.JSX.Element}
 */
export function ExplainerIcon({description}) {
  return (
    <div className="group">
      <QuestionMarkCircleIcon className="h-3 w-3 mx-0.5" />
      <div className="hidden group-hover:block group-hover:absolute mt-2 p-1 border border-dashed select-none transition-all ease-in-out duration-300 border-mauve-500 bg-mauve-300 text-mauve-900 max-w-1/2">{description}</div>
    </div>
  );
};
