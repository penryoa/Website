import React, { useState } from "react";
import { westernZodiacSigns } from "../../util/astrology/constants.js";
import { AstroOrderedNoun } from "../../util/astrology/classes/interfaces.tsx";
import Zodiac from "../../util/astrology/classes/zodiac.tsx";
/**
 * Takes either triplicities or modalities and renders the signs
 * @param {AstroOrderedNoun[]} myArr
 * @param {string} arrKey the myArr key to compare to
 * @param {string} signKey the {@link Zodiac} key to compare to
 */
export default function SignSelector({myArr, arrKey, signKey}) {
  console.log("got myArr ", myArr, "arrKey ", arrKey, " signKey ", signKey);
	const [arrIdx, setArrIdx] = useState(0);
	const [signs, setSigns] = useState(getMatchingSigns(arrIdx));
	
	/**
	 * Sets arrIdx and signs when an item is selected
	 * @param {number} newArrIdx
	 */
	function handleSelect(newArrIdx) {
		setArrIdx(Number(newArrIdx));
		setSigns(getMatchingSigns(Number(newArrIdx)));
	};

	/**
	 * Gets all the signs by the arrIdx
	 * @param {number} myArrIdx
	 * @returns {Zodiac[]}
	 */
	function getMatchingSigns(myArrIdx) {
    if (myArrIdx < 0) { // "All"
      return westernZodiacSigns;
    }
    let myItem = myArr[myArrIdx];
		return westernZodiacSigns.filter((sign) => sign[signKey] == myItem[arrKey]);
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
			<div className="mt-2 flex flex-row flex-wrap">
				{signs.map((sign) => sign.DisplayTag())}
			</div>
		</label>
	);
};