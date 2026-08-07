import React, { useState } from "react";
import { selectClassName, selectFocusClassName } from "../../util/constants";
import { planets, possibleDignityConditions, westernElements, westernZodiacSigns } from "../../util/astrology/constants";
import Planet from "../../util/astrology/classes/planet.tsx";
import Zodiac from "../../util/astrology/classes/zodiac.tsx";

/**
 * A planet in a sign will have a dignity you can calculate.
 * @param {Planet} planet
 * @param {Zodiac} sign
 * @param {number} degree
 * @returns { points: number; label: string; conditions: {pointMod:number,label:string}[]; }
 */
export function getEssentialDignity(planet, sign, degree) {
  let points = 0;
  let label = "No Dignity";
  let conditions = [];

  if (planet.chaldeanOrder !== null) {
    // +5 points in domicile, -5 in detriment
    if (sign.domicile === planet) {
      conditions.push(possibleDignityConditions["inDomicile"]);
    } else if (sign.detriment === planet) {
      conditions.push(possibleDignityConditions["inDetriment"]);
    }
    
    // +4 points in exaltation, -4 in fall
    if (sign.exaltation === planet) {
      conditions.push(possibleDignityConditions["inExaltation"]);
    } else if (sign.fall === planet) {
      conditions.push(possibleDignityConditions["inFall"]);
    }
    
    // +3 in triplicity (Dorothean)
    if (Object.values(sign.getTripLords())?.includes(planet)) {
      conditions.push(possibleDignityConditions["inTriplicity"]);
    }
    
    // +2 in term (Egyptian)
    if (sign.isPlanetInBound(planet, degree)) {
      conditions.push(possibleDignityConditions["inBound"]);
    }
    
    // +1 in face (Chaldean)
    sign.getDecans().every((decan,dIdx) => {
      let decanMin = 0 + dIdx * 10;
      if (decan == planet && degree >= decanMin && degree < decanMin + 10) {
        conditions.push(possibleDignityConditions["inFace"]);
        return false;
      }
      return true;
    });

    conditions.forEach((c,cIdx) => {
      points += c.pointMod;
    });
    
    label = "Peregrine";
    if (points > 0) {
      label = "Dignified";
    } else if (points < 0) {
      label = "Debilitated"
    }
  } else {
    conditions.push(possibleDignityConditions["notClassical"]);
    if (sign.modernDomicile === planet) {
      conditions.push(possibleDignityConditions["inModernDomicile"]);
    }
  }

  return { "points": points, "label": label, "conditions": conditions };
};

/**
 * This is placed outside of DignitySelector so it won't re-render when the component updates.
 */
const firstResult = getEssentialDignity(
  planets[0],
  westernZodiacSigns[0],
  0
);

/**
 * Small helper function to display the score and status
 */
function ScoreDisplay ({name,val}) {
  return (
    <div className="w-full sm:w-1/2 rounded-sm border border-purple-400 dark:border-mauve-500 text-center">
      <p className="font-smallcaps rounded-t-sm bg-purple-300/85 dark:bg-pink-800">{name}</p>
      <p className="text-xl rounded-b-sm bg-mauve-100 dark:bg-mauve-600">{val}</p>
    </div>
  );
}

/**
 * Takes either triplicities or modalities and renders the signs
 */
export default function DignitySelector() {
  const [planet, setPlanet] = useState(planets[0]);
  const [sign, setSign] = useState(westernZodiacSigns[0]);
  const [degree, setDegree] = useState(0);
  const [result, setResult] = useState(firstResult);
  const [degreeError, setDegreeError] = useState(null);

  /**
   * Handles when a planet is selected
   * @param {number} newPlanetIdx
   */
  function selectPlanet(newPlanetIdx) {
    let newPlanet = planets[Number(newPlanetIdx)];
    setPlanet(newPlanet);
    updateScore({p:newPlanet});
  };

  /**
   * Handles when a sign is selected
   * @param {number} newSignIdx
   */
  function selectSign(newSignIdx) {
    let newSign = westernZodiacSigns[Number(newSignIdx)];
    setSign(newSign);
    updateScore({s:newSign});
  };

  /**
   * Handles when a degree is entered
   */
  function checkDegree(e) {
    let numNewDegree = Number(e.target.value);
    if (numNewDegree >= 0 && numNewDegree < 30) {
      setDegreeError(null);
      setDegree(numNewDegree);
      updateScore({d:numNewDegree});
    } else {
      setDegreeError("Must be between 0-29 degrees");
      e.target.value = degree;
    }
  };

  function updateScore(args) {
    setResult(
      getEssentialDignity(
        args.p || planet,
        args.s || sign,
        args.d || degree
    ));
  };

  return (
    <div>
      {/* THE SELECTORS */}
      <div className="flex flex-col md:flex-row md:flex-wrap items-center md:items-baseline w-full bg-pink-400/20 dark:bg-violet-800/50 p-2 rounded-t-md border-b border-pink-300 dark:border-purple-500">
        <label className="md:pr-4 w-full sm:w-1/2 md:w-auto flex flex-col md:flex-row md:items-baseline gap-2 text-center">
          Planet:
          <select className={selectClassName} name="selector-planet" onChange={e => selectPlanet(e.target.value)}>
            {planets.map((iPlanet, iPlanetIdx) => (
              <option key={`option-planet-${iPlanet.icon}`} value={iPlanetIdx}>
                {iPlanet.label}
              </option>
            ))}
          </select>
        </label>

        <label className="pt-4 md:pr-4 md:pt-0 w-full sm:w-1/2 md:w-auto flex flex-col md:flex-row md:items-baseline gap-2 text-center">
          Sign:
          <select className={selectClassName} name="selector-sign" onChange={e => selectSign(e.target.value)}>
            {westernZodiacSigns.map((iSign, iSignIdx) => (
              <option key={`option-sign-${iSign.icon}`} value={iSignIdx}>
                {iSign.label}
              </option>
            ))}
          </select>
        </label>

        <label className="pt-4 pb-1 md:pl-1 md:py-0 w-full sm:w-1/2 md:w-auto flex flex-col md:flex-row md:items-baseline gap-2 text-center">
          Degree:
          <input type="number" min={0} max={29} defaultValue={0} id="input-degree" name="i-degree" onChange={e => checkDegree(e)} className={`rounded-md border md:pl-3 text-center border-mauve-300 dark:border-mauve-700 bg-fuchsia-50 dark:bg-fuchsia-900 ${selectFocusClassName}`} />
        </label>
        <p className="text-red-500 md:pl-1 md:inline">{degreeError}</p>
      </div>

      {/* THE RESULTS */}
      <div className="w-full bg-purple-300/50 dark:bg-violet-400/30 rounded-b-md p-2">
        <span className="w-full inline-flex items-baseline justify-center text-lg">
          {planet.DisplayTag()} in {sign.DisplayTag()} at {degree}°
        </span>
        <div className="w-full inline-flex gap-2 my-3">
          <ScoreDisplay name="Score" val={result.points} />
          <ScoreDisplay name="Status" val={result.label} />
        </div>

        <p className="font-bold">Conditions:</p>
        {result.conditions.length > 0 ? result.conditions.map((cond) => <p>({cond.pointMod > 0 && "+"}{cond.pointMod}) {cond.label}</p>) : <p>None</p>}

        <p className="font-bold mt-4">Triplicity, Bounds, and Terms:</p>
        <div className="inline-flex items-baseline flex-wrap">
          Triplicity Rulers:
          {Object.values(sign.getTripLords()).map((lord) => lord.DisplayTag())}
        </div>
        <p className="mt-2">Bounds (top) and Decans (bottom):</p>
        {sign.BoundsDecansDisplayBar(degree)}
      </div>
    </div>
  );
};