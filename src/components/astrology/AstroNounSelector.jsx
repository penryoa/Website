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
			<select className="p-3 bg-fuchsia-300 dark:bg-purple-700 rounded-t-xl w-full" name={`selected-${signKey}`} onChange={e => handleSelect(e.target.value)}>
				{myArr.map((item, itemIdx) => (
          <option key={`selected-${signKey}-${item.icon}`} value={itemIdx}>
            {item.icon} {item.label}
          </option>
				))}
        <option key={`selected-${signKey}-All`} value={-1} className="">All</option>
			</select>
			<div className="p-2 rounded-b-xl border border-fuchsia-300 dark:border-purple-700 border-t-0">
				<div className="flex flex-row flex-wrap gap-1">
					{nouns.map((n) => n.DisplayTag())}
				</div>
				<p>{arrIdx >= 0 && myArr[arrIdx].description}</p>
			</div>
		</label>
	);
};