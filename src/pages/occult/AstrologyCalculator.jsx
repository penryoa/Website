import React from "react";
import { AstroOrderedNoun,AstroProperNoun } from "../../util/astrology/classes/interfaces.tsx";
import { modes, planets, proximities, sects, westernElements, westernZodiacSigns } from "../../util/astrology/constants.js";
import AstroNounSelector from "../../components/astrology/AstroNounSelector.jsx";
import DignitySelector from "../../components/astrology/DignitySelector.jsx";

export default function AstrologyCalculator() {
  return (
    <div>
        <h2>Dignitity Calculator (and other fun things)</h2>
        <p className="underline">Dignity Calculation</p>
        <p>Dignity will tell you how naturally a planet can perform its best self, its most benefic functions.</p>
        <ul className="pl-6">
          <li>Dignified (score greater than 0) = easy/feels right at home</li>
          <li>Peregrine (score equals 0) = neutral/feeling out of place</li>
          <li>Debilitated (score less than 0) = it's an uphill battle</li>
        </ul>
        <div>
          <DignitySelector />
        </div>

        <p className="underline mt-10">Planet Groupings</p>
        <div className="w-full flex flex-col gap-8 sm:flex-row">
          <div className="w-full sm:w-1/2">
            <AstroNounSelector myArr={sects} arrKey="sect" planetKey="sect" />
          </div>
          
          <div className="w-full sm:w-1/2">
            <AstroNounSelector myArr={proximities} arrKey="proximity" planetKey="proximity" />
          </div>
        </div>

        <p className="underline mt-10">Zodiac Sign Groupings</p>
        <div className="w-full flex flex-col gap-8 sm:flex-row">
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