import React, { useState } from "react";
import { westernZodiacSigns } from "../../util/astrology/constants";
import Zodiac from "../../util/astrology/classes/zodiac.tsx";
import { selectFocusClassName } from "../../util/constants.jsx";

/**
 * The individual property display
 * @param {Object} args
 * @param {string} args.label
 * @param {JSX.Element || undefined} display
 */
function PropertyDisplay(args) {
  return (
    <div className="flex flex-row items-baseline">{args.label}: {args.display}</div>
  );
};

/**
 * Displays all information, like planetary ruler, modality, triplicity.
 * @param {Zodiac} sign
 */
function DisplayAllInfo(sign) {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-x-4 items-baseline">
        <PropertyDisplay label="Element" display={sign.getElement()?.DisplayTag()} />
        <PropertyDisplay label="Modality" display={sign.getMode()?.DisplayTag()} />
        <PropertyDisplay label="Domicile" display={sign.domicile.DisplayTag()} />
        {sign.modernDomicile && 
          <PropertyDisplay label="Modern Ruler" display={sign.modernDomicile?.DisplayTag()} />
        }
        {sign.exaltation && 
          <PropertyDisplay label="Exalted" display={sign.exaltation?.DisplayTag()} />
        }
        <PropertyDisplay label="Detriment" display={sign.detriment.DisplayTag()} />
        {sign.fall && 
          <PropertyDisplay label="Exalted" display={sign.fall?.DisplayTag()} />
        }
      </div>

      <p className="font-bold pt-3">Bounds and Decans</p>
      <p>I personally use Egyptian bounds (top) and Chaldean decans (bottom). It seems to be the most used definitions? But I dance around with using elemental decans instead.</p>
      {sign.BoundsDecansDisplayBar()}

      <div className="inline-flex items-baseline flex-wrap">
        <p className="font-bold pt-3">Triplicity Lords:</p>
        {Object.values(sign.getTripLords()).map((lord) => lord.DisplayTag())}
      </div>
      <p>I use Dorothean triplicity rulers, but have no particular loyalty. It just seemed like a reliable popular schema.</p>
    </>
  );
};

export default function SignFullDisplaySelector () {
  const [signIdx, setSignIdx] = useState(0);

  function handleSelect(newSignIdx) {
    setSignIdx(Number(newSignIdx));
  }

  return (
    <div className="w-full rounded-lg border border-orange-300 dark:border-orange-900">
      <select className={`rounded-t-lg w-full p-3 bg-orange-200 dark:bg-orange-900 ${selectFocusClassName}`} onChange={e => handleSelect(e.target.value)}>
        {westernZodiacSigns.map((sign, signIdx) => <option className="bg-mauve-200 dark:bg-mauve-600" value={signIdx}>{sign.icon} {sign.label}</option>)}
      </select>
      <div className="p-2">
        {DisplayAllInfo(westernZodiacSigns[signIdx])}
      </div>
    </div>
  );
}