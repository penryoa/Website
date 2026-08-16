import React, { useEffect, useState } from "react";
import { westernZodiacSigns, BoundsWord, DecansWord, TripWord, D9Word, D12Word } from "../../util/astrology/constants";
import Zodiac from "../../util/astrology/classes/zodiac.tsx";
import { numberClassName, selectFocusClassName } from "../../util/constants.jsx";
import ZDMS from "../../util/astrology/classes/zdms.tsx";

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

const initialSign = westernZodiacSigns[0];

export default function SignFullDisplaySelector () {
  const [signIdx, setSignIdx] = useState(0);
  const [zdms, setZdms] = useState(new ZDMS({sign:initialSign}));
  const [degreeError, setDegreeError] = useState(null);
  const [d9, setD9] = useState(initialSign);
  const [d12, setD12] = useState(initialSign);
  
  // When we set the degree, minute, or sign, recalculate D12.
  useEffect(() => {
    setD9(zdms.getD9());
    setD12(zdms.getD12());
  },[zdms]);

  /**
   * Handles when a sign is selected
   * @param {string} newSignIdx 
  */
 function handleSelect(newSignIdx) {
    setSignIdx(Number(newSignIdx));
    setZdms(old => new ZDMS({
      ...old,
      sign: westernZodiacSigns[newSignIdx]
    }))
  };
  
  /**
   * Handles when a degree is entered
   * @param {React.ChangeEvent<HTMLInputElement, HTMLInputElement>} e the input event
  */
 function checkDegree(e) {
   let newNum = e.target.value.replace(/\D/g,'');
   newNum = Number(newNum);
   if (newNum >= 0 && newNum < 30) {
     e.target.value = newNum;
     setDegreeError(null);
     setZdms(old => new ZDMS(
      {
        ...old,
        degree: newNum,
      }));
    } else {
      setDegreeError("Must be between 0-29 degrees");
      e.target.value = zdms.degree;
    }
  };
  
  /**
   * Handles when a minute is entered
   * @param {React.ChangeEvent<HTMLInputElement, HTMLInputElement>} e the input event
  */
 function checkMinute(e) {
   let newNum = e.target.value.replace(/\D/g,'');
   newNum = Number(newNum);
   if (newNum >= 0 && newNum < 60) {
     e.target.value = newNum;
     setDegreeError(null);
     setZdms(old => new ZDMS(
      {
        ...old,
        minute: newNum
      }));
    } else {
      setDegreeError("Must be between 0-60 minutes");
      e.target.value = zdms.minute;
    }
  };
  
  return (
    <div className="w-full rounded-lg border border-orange-300 dark:border-orange-900">
      {/* SELECT THE SIGN */}
      <select className={`rounded-t-lg w-full p-3 bg-orange-200 dark:bg-orange-900 ${selectFocusClassName}`} onChange={e => handleSelect(e.target.value)}>
        {westernZodiacSigns.map((sign, signIdx) => (
          <option className="w-full" value={signIdx}>{sign.icon} {sign.label}</option>
        ))}
      </select>
      
      {/* THE DISPLAY FOR THE SELECTED SIGN */}
      <div className="p-2">
        <div className="*:my-12 *:first:mt-0 *:last:mb-0">
          <div className="flex flex-row flex-wrap gap-x-4 items-baseline">
            <PropertyDisplay label="Element" display={zdms.sign.getElement()?.DisplayTag()} />
            <PropertyDisplay label="Modality" display={zdms.sign.getMode()?.DisplayTag()} />
            <PropertyDisplay label="Domicile" display={zdms.sign.domicile.DisplayTag()} />
            {zdms.sign.modernDomicile && 
              <PropertyDisplay label="Modern Ruler" display={zdms.sign.modernDomicile?.DisplayTag()} />
            }
            {zdms.sign.exaltation && 
              <PropertyDisplay label="Exalted" display={zdms.sign.exaltation?.DisplayTag()} />
            }
            <PropertyDisplay label="Detriment" display={zdms.sign.detriment.DisplayTag()} />
            {zdms.sign.fall && 
              <PropertyDisplay label="Exalted" display={zdms.sign.fall?.DisplayTag()} />
            }
          </div>

          <div>
            <div className="inline-flex items-baseline flex-wrap">
              <TripWord/>:
              {Object.values(zdms.sign.getTripLords()).map((lord) => lord.DisplayTag())}
            </div>

            <div className="mt-3">
              <BoundsWord /> and <DecansWord/>:
            </div>
            {zdms.sign.BoundsDecansDisplayBar()}

            <p className="font-bold pt-3">Which Systems I Use:</p>
            <ul>
              <li><i>Triplicity:</i> Dorothean</li>
              <li><i>Bounds:</i> Egyptian</li>
              <li><i>Decans:</i> Chaldean</li>
            </ul>
          </div>

          <details className="m-1 p-1 rounded-xs open:bg-white open:dark:bg-mauve-500">
            <summary className="italic underline text-center mb-6 sm:mb-2">
              Is this your ascendant? Enter the degree to learn a bit more!
            </summary>
            <div>
              <div className="flex flex-wrap items-baseline mb-6 sm:mb-0 *:not-first:sm:ml-4 *:mb-1 *:sm:my-0 *:last:sm-4 *:w-full *:sm:w-auto *:flex *:flex-col *:sm:flex-row *:sm:items-baseline *:gap-2 *:text-center">
                <label>
                  Degree:
                  <input type="number" min={0} max={29} defaultValue={0} id="input-degree" name="i-degree" onChange={e => checkDegree(e)} className={numberClassName} />
                </label>
                <label>
                  Minute:
                  <input type="number" min={0} max={60} defaultValue={0} id="input-minute" name="i-minute" onChange={e => checkMinute(e)} className={numberClassName} />
                </label>
              </div>
              <p className="text-red-500 md:pl-1 md:inline">{degreeError}</p>

              <div className="flex items-baseline">
                <D9Word />: {d9.DisplayTag()}
              </div>
              <div>If your birth chart is your circumstances, the D9 chart is what you make of it! This means that <div className="inline-flex items-baseline">{d9.domicile.DisplayTag()}</div> as your D9's chart ruler reveals what's beneath your surface personality. You can compare your natal chart's benefics and malefics to see how they change in D9, specifically to see how they manifest as you take charge of your life. If your L1, benefics, and malefics are poorly dignified, etc. in your natal chart but improve in D9, life gets easier! Yay. Reverse also holds true, though.</div>
              <div className="mt-3">
                Because this is also about love, check out especially the D9's 7H - <div className="inline-flex items-baseline flex-wrap">{d9.nextXSign(6).DisplayTag()} {d9.nextXSign(6).domicile.DisplayTag()}</div> - for more insight.
              </div>

              <div className="mt-5 flex items-baseline">
                <D12Word />: {d12.DisplayTag()}
              </div>
              <div>This means that <div className="inline-flex items-baseline">{d12.domicile.DisplayTag()}</div> will be a planet to look at! If it's a natal chart, it's just a theme that'll pop up. If it's a horary chart, it's the true question at hand; what the querent is really asking about.</div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}