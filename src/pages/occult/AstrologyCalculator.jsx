import React from "react";
import { modes, planets, proximities, sects, westernElements, westernZodiacSigns } from "../../util/astrology/constants.js";
import AstroNounSelector from "../../components/astrology/AstroNounSelector.jsx";
import DignitySelector from "../../components/astrology/DignitySelector.jsx";
import { MinusCircleIcon, ThumbDownIcon, ThumbUpIcon } from "@heroicons/react/solid";
import SignFullDisplaySelector from "../../components/astrology/SignFullDisplaySelector.jsx";

export default function AstrologyCalculator() {
  return (
    <div>
        <h2>Dignitity Calculator (and other fun things)</h2>
        <p className="underline">Dignity Calculation</p>
        <div className="border-l border-mauve-400 dark:border-mauve-600 pl-2 mb-4">
          <p>Dignity will tell you how naturally a planet can perform its best self, its most benefic functions.</p>
          <ul className="pl-4">
            <li className="flex flex-row gap-2 items-baseline"><ThumbUpIcon className="w-4 h-4" />Dignified (score greater than 0) = easy/feels right at home</li>
            <li className="flex flex-row gap-2 items-baseline"><MinusCircleIcon className="w-4 h-4" />Peregrine (score equals 0) = neutral/feeling out of place</li>
            <li className="flex flex-row gap-2 items-baseline"><ThumbDownIcon className="w-4 h-4" />Debilitated (score less than 0) = it's an uphill battle</li>
          </ul>
        </div>
        <DignitySelector />

        <p className="underline mt-10">Planet Groupings</p>
        <div className="w-full flex flex-col gap-8 sm:flex-row">
          <div className="w-full sm:w-1/2">
            <AstroNounSelector myArr={sects} arrKey="sect" planetKey="sect" />
          </div>
          
          <div className="w-full sm:w-1/2">
            <AstroNounSelector myArr={proximities} arrKey="proximity" planetKey="proximity" />
          </div>
        </div>

        <p className="underline mt-10">Zodiac Sign</p>
        <SignFullDisplaySelector />
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