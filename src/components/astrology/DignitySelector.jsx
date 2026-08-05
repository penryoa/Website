import React, { useState } from "react";
import { selectorClassName } from "../../util/constants";
import { planets, westernElements, westernZodiacSigns } from "../../util/astrology/constants";
import Planet from "../../util/astrology/classes/planet.tsx";
import Zodiac from "../../util/astrology/classes/zodiac.tsx";

/**
 * A planet in a sign will have a dignity you can calculate.
 * @param {Planet} planet
 * @param {Zodiac} sign
 * @param {number} degree
 * @returns { points: number; label: string; conditions: string[]; }
 */
function getEssentialDignity(planet, sign, degree) {
  let points = 0;
  let conditions = [];
  let label = "Only classical planets can have dignity";

  if (planet.chaldeanOrder !== null) {
    // +5 points in domicile, -5 in detriment
    if (sign.domicile === planet) {
      points += 5;
      conditions.push("inDomicile");
    } else if (sign.detriment === planet) {
      points -= 5;
      conditions.push("inDetriment");
    }
    
    // +4 points in exaltation, -4 in fall
    if (sign.exaltation === planet) {
      points += 4;
      conditions.push("inExaltation");
    } else if (sign.fall === planet) {
      points -= 4;
      conditions.push("inFall");
    }
    
    // +3 in triplicity (Dorothean)
    const element = westernElements.find((elem) => elem.orderIdx == sign.triplicityOrderIdx);
    console.log("our element is", element);
    if (Object.values(element.dorotheanTriplicity).includes(planet)) {
      points += 3;
      conditions.push("inTriplicity");
    }
    
    // +2 in term (Egyptian)
    if (sign.isPlanetInBound(planet, degree)) {
      points += 1;
      conditions.push("inBound");
    }
    
    // +1 in face (Chaldean)
    if (planet.chaldeanOrder && sign.getDecans().includes(planet)) {
      points += 1;
      conditions.push("inFace");
    }
    
    label = "peregrine";
    if (points > 0) {
      label = "dignified";
    } else if (points < 0) {
      label = "detrimented"
    }
  }

  return { "points": points, "label": label, "conditions": conditions };
};

/**
 * This is placed outside of DignitySelector so it won't ever re-render.
 */
const firstResult = getEssentialDignity(
  planets[0],
  westernZodiacSigns[0],
  0
);

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
   * Handles when a planet is selected
   */
  function checkDegree(e) {
    // todo: show error
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
      <label>
        Planet:
        <select className={selectorClassName} name="selector-planet" onChange={e => selectPlanet(e.target.value)}>
          {planets.map((iPlanet, iPlanetIdx) => (
            <option key={`option-planet-${iPlanet.icon}`} value={iPlanetIdx}>
              {iPlanet.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Sign:
        <select className={selectorClassName} name="selector-sign" onChange={e => selectSign(e.target.value)}>
          {westernZodiacSigns.map((iSign, iSignIdx) => (
            <option key={`option-sign-${iSign.icon}`} value={iSignIdx}>
              {iSign.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Degree:
        <input type="number" min={0} max={29} defaultValue={0} id="input-degree" name="i-degree" onChange={e => checkDegree(e)} className="rounded border-2 border-mauve-300 dark:border-mauve-700 bg-fuchsia-50 dark:bg-fuchsia-950" />
        {degreeError}
      </label>

      <div className="w-full bg-purple-300 rounded-xl p-2">
        <label>Score: {result.points}</label>
        <label className="pl-8">Status: {result.label}</label>
        {result.conditions.map((condStr) => <p>{condStr}</p>)}
      </div>
    </div>
  );
};