import React, { useEffect, useState } from "react";
import { numberClassName, selectClassName, selectFocusClassName } from "../../util/constants";
import { planets, westernElements, westernZodiacSigns, BoundsWord, DecansWord, TripWord } from "../../util/astrology/constants";
import Planet from "../../util/astrology/classes/planet.tsx";
import Zodiac from "../../util/astrology/classes/zodiac.tsx";
import PlanetaryPlacement from "../../util/astrology/classes/planetaryPlacement.tsx";

/**
 * A planet in a sign will have a dignity you can calculate.
 * @param {PlanetaryPlacement} placement
 * @returns { points: number; label: string; conditions: {pointMod:number,label:string}[]; }
 */
function getEssentialDignity(placement) {
  let points = 0;
  let label = "No Dignity";
  let conditions = placement.getDignityConditions();
  
  if (placement.planet.isClassical()) {
    conditions.forEach((c,cIdx) => {
      points += c.pointMod;
    });
    
    label = "Peregrine";
    if (points > 0) {
      label = "Dignified";
    } else if (points < 0) {
      label = "Debilitated"
    }
  }

  return { "points": points, "label": label, "conditions": conditions };
};

/** Our default setting: Sun, Aries, 0 degrees */
const firstPlacement = new PlanetaryPlacement({
  planet: planets[0],
  sign: westernZodiacSigns[0],
  degree: 0
});

/**
 * This is placed outside of DignitySelector so it won't re-render when the component updates.
 */
const firstResult = getEssentialDignity(firstPlacement);

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
  const [placement, setPlacement] = useState(firstPlacement);
  const [result, setResult] = useState(firstResult);
  const [degreeError, setDegreeError] = useState(null);

  /**
   * Sets the result when the placement is updated
   */
  useEffect(() => {
    setResult(getEssentialDignity(placement));
  }, [placement]);
  
  /**
   * Handles when a planet is selected
   * @param {number} newPlanetIdx
   */
  function selectPlanet(newPlanetIdx) {
    let newPlanet = planets[Number(newPlanetIdx)];
    setPlacement(oldPlacement => new PlanetaryPlacement(
      {
        planet: newPlanet,
        sign: oldPlacement.sign,
        degree: oldPlacement.degree
    }));
  };

  /**
   * Handles when a sign is selected
   * @param {number} newSignIdx
   */
  function selectSign(newSignIdx) {
    let newSign = westernZodiacSigns[Number(newSignIdx)];
    setPlacement(oldPlacement => new PlanetaryPlacement(
      {
        planet: oldPlacement.planet,
        sign: newSign,
        degree: oldPlacement.degree
    }));
  };

  /**
   * Handles when a degree is entered
   */
  function checkDegree(e) {
    let numNewDegree = Number(e.target.value);
    if (numNewDegree >= 0 && numNewDegree < 30) {
      setDegreeError(null);
      setPlacement(oldPlacement => new PlanetaryPlacement(
        {
          planet: oldPlacement.planet,
          sign: oldPlacement.sign,
          degree: numNewDegree
      }));
    } else {
      setDegreeError("Must be between 0-29 degrees");
      e.target.value = placement.degree;
    }
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
          <input type="number" min={0} max={29} defaultValue={0} id="input-degree" name="i-degree" onChange={e => checkDegree(e)} className={numberClassName} />
        </label>
        <p className="text-red-500 md:pl-1 md:inline">{degreeError}</p>
      </div>

      {/* THE RESULTS */}
      <div className="w-full bg-purple-300/50 dark:bg-violet-400/30 rounded-b-md p-2">
        <span className="w-full inline-flex items-baseline justify-center text-lg">
          {placement.planet.DisplayTag()} in {placement.sign.DisplayTag()} at {placement.degree}°
        </span>
        <div className="w-full inline-flex gap-2 my-3">
          <ScoreDisplay name="Score" val={result.points} />
          <ScoreDisplay name="Status" val={result.label} />
        </div>

        <p className="font-bold">Conditions:</p>
          {result.conditions.length > 0 ? (
            <ul role="list" className="list-disc ml-4 marker:text-pink-700 dark:marker:text-orange-300">
              {result.conditions.map((cond) => (
                 cond.pointMod === 0 ? (<li>{cond.label}</li>)
                 : (<li>(Score {cond.pointMod > 0 && "+"}{cond.pointMod}) {cond.label}</li>)
              ))}
            </ul>
          ) : <p>None</p>}

        <div className="font-bold mt-8">
          <TripWord />, <BoundsWord />, and <DecansWord />:
        </div>
        <div className="inline-flex items-baseline flex-wrap">
          Triplicity Rulers:
          {Object.values(placement.sign.getTripLords()).map((lord) => lord.DisplayTag())}
        </div>
        <p className="mt-2">Bounds (top) and Decan (bottom):</p>
        {placement.sign.BoundsDecansDisplayBar(placement.degree)}
      </div>
    </div>
  );
};