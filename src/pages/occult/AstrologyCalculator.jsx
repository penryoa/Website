import React from "react";
import { modes, planets, proximities, sects, westernElements, westernZodiacSigns } from "../../util/astrology/constants.js";
import AstroNounSelector from "../../components/astrology/AstroNounSelector.jsx";
import DignitySelector from "../../components/astrology/DignitySelector.jsx";
import { MapIcon, MinusCircleIcon, StarIcon, ThumbDownIcon, ThumbUpIcon } from "@heroicons/react/solid";
import SignFullDisplaySelector from "../../components/astrology/SignFullDisplaySelector.jsx";
import Planet from "../../util/astrology/classes/planet.tsx";

/**
 * Overwrites the sect display for a given planet to include its role
 * @param {Planet} planet 
 * @returns the JSX display
 */
function SectDisplayOverwrite(planet) {
  if (planet.chaldeanOrder == null) {
    return planet.DisplayTag();
  }
  return (
    <div className="p-1 rounded-md border border-mauve-300 inline-flex flex-wrap items-center">
      {planet.DisplayTag()} {planet.role}
    </div>
  );
}

export default function AstrologyCalculator() {
  return (
    <div>
        <h2>Dignitity Calculator</h2>
        <p className="underline">What is dignity?</p>
        <div className="border-l border-mauve-400 dark:border-mauve-600 pl-2 mb-4">
          <p>An individual planet's placement in a sign and degree will determine how naturally it can perform its best self, its most benefic functions. This is called <i>dignity</i>. That is to say, even if it is a malefic (Mars or Saturn), being dignified brings out its more constructive than destructive side.</p>
          <ul className="pl-4">
            <li className="inline-flex gap-2 items-start">
              <ThumbUpIcon className="w-5 h-5" />
              Dignified (score greater than 0) = easy/feels right at home
            </li>
            <li className="inline-flex gap-2 items-start">
              <MinusCircleIcon className="w-5 h-5" />
              Peregrine (score equals 0) = neutral/feeling out of place
            </li>
            <li className="inline-flex gap-2 items-start">
              <ThumbDownIcon className="w-5 h-5" />
              Debilitated (score less than 0) = it's an uphill battle
            </li>
          </ul>
        </div>
        <DignitySelector />

        <h2 className="mt-10">Planets</h2>
        <p className="underline">How to divvy up the planets</p>
        <div className="border-l border-mauve-400 dark:border-mauve-600 pl-2 mb-4">
          Planets can be grouped by a number of things, but two big ones are sect and inner/outer planets, or as I call it, proximity.
          <ul className="pl-4">
            <li className="inline-flex gap-2 items-start">
              <StarIcon className="w-6 h-6" />
              Sect: this determines the day and night teams. If you were born with the sun above the horizon (the AC/SC axis), you have a day chart led by the day team and vice versa!
            </li>
            <li className="inline-flex gap-2 items-start">
              <MapIcon className="w-6 h-6" />
              Proximity: this determines how directly of an influence a planet has on you. It goes from Inner/Personal to Social to Outer/Generational.
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-8 sm:flex-row">
          <div className="w-full sm:w-1/2">
            <AstroNounSelector myArr={sects} arrKey="sect" planetKey="sect" DisplayOverwrite={SectDisplayOverwrite} />
          </div>
          <div className="w-full sm:w-1/2">
            <AstroNounSelector myArr={proximities} arrKey="proximity" planetKey="proximity" />
          </div>
        </div>

        <h2 className="mt-10">Signs</h2>
        <SignFullDisplaySelector />
        <p className="underline mt-4">How to divvy up the zodiac signs</p>
        <div className="border-l border-mauve-400 dark:border-mauve-600 pl-2 mb-4">
          Honestly, there's a lot of filters you can use here: element, mode, ruling planet (or other dignity types like Exalted). Signs carry a lot of information, and their element/modality can be traced to a number of things (like triplicity lords per element).
        </div>
        <div className="mt-6 w-full flex flex-col gap-8 sm:flex-row">
          <div className="w-full sm:w-1/2">
            <AstroNounSelector myArr={westernElements} arrKey="orderIdx" signKey="triplicityOrderIdx" />
          </div>
          
          <div className="w-full sm:w-1/2">
            <AstroNounSelector myArr={modes} arrKey="orderIdx" signKey="modalityOrderIdx" />
          </div>
        </div>

    </div>
  );
};