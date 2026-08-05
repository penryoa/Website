import React, { useState } from "react";
import { planets, westernZodiacSigns } from "../../util/astrology/constants.js";
import { AstroProperNoun } from "../../util/astrology/classes/interfaces.tsx";
import Zodiac from "../../util/astrology/classes/zodiac.tsx";
/**
 * Lets you display a filtered {@link AstroProperNoun} list
 * @param {AstroProperNoun[]} myArr the subdividing list
 * @param {string} arrKey the myArr key to compare to
 * @param {string} [signKey] the {@link Zodiac} key to compare to
 * @param {string} [planetKey] the {@link Planet} key to compare to
 */
export default function AstroNounSelector({myArr, arrKey, signKey, planetKey}) {
  if (!signKey && !planetKey) {
    throw new Error("Must use either signKey or planetKey");
  }

	const [arrIdx, setArrIdx] = useState(0);
	const [nouns, setNouns] = useState(getMatchingNouns(arrIdx));
	
	/**
	 * Sets arrIdx and nouns when an item is selected
	 * @param {number} newArrIdx
	 */
	function handleSelect(newArrIdx) {
		setArrIdx(Number(newArrIdx));
		setNouns(getMatchingNouns(Number(newArrIdx)));
	};

	/**
	 * Gets all the nouns by the arrIdx
	 * @param {number} myArrIdx
	 * @returns {Zodiac[]}
	 */
	function getMatchingNouns(myArrIdx) {
    if (myArrIdx < 0) { // "All"
      return signKey ? westernZodiacSigns : planets;
    }
    let myItem = myArr[myArrIdx];
	  return signKey ? westernZodiacSigns.filter((sign) => sign[signKey] == myItem[arrKey]) : planets.filter((p) => p[planetKey] == myItem[arrKey]);
	}

	return (
		<label>
			Select {myArr[0].typeLabel}:
			<select className="mx-2 px-2 bg-fuchsia-300 dark:bg-fuchsia-600 rounded-xl shadow-sm shadow-fuchsia-100 dark:shadow-fuchsia-400" name={`selected-${signKey}`} onChange={e => handleSelect(e.target.value)}>
				{myArr.map((item, itemIdx) => (
          <option key={`selected-${signKey}-${item.icon}`} value={itemIdx} className="selection:bg-orange-200 dark:selection:bg-orange-700">
            {item.label}
          </option>
				))}
        <option key={`selected-${signKey}-All`} value={-1} className="">All</option>
			</select>
			<div>{arrIdx >= 0 ? myArr[arrIdx].DisplayTag() : <></>}</div>
			<div className="mt-2 flex flex-row flex-wrap">
				{nouns.map((n) => n.DisplayTag())}
			</div>
		</label>
	);
};