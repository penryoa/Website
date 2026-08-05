import React from "react";
import { AstroOrderedNoun,AstroProperNoun } from "../../util/astrology/classes/interfaces.tsx";
import { modes, planets, proximities, sects, westernElements, westernZodiacSigns } from "../../util/astrology/constants";
import AstroNounSelector from "./AstroNounSelector.jsx";
import DignitySelector from "./DignitySelector.jsx";

export default function AstrologyCalculator() {
  return (
    <div className="m-2 p-2 border-dashed border-2 border-amber-500">
        <h1>Addi's Dignitity Calculator</h1>
        <div>
          <label className="underline">All Planets</label>
          {/* <div className="flex flex-row flex-wrap">
            {planets.map((planet) => planet.DisplayTag())}
          </div> */}

          <div className="w-full flex flex-col gap-8 sm:flex-row">
            <div className="w-full sm:w-1/2">
              <AstroNounSelector myArr={sects} arrKey="sect" planetKey="sect" />
            </div>
            
            <div className="w-full sm:w-1/2">
              <AstroNounSelector myArr={proximities} arrKey="proximity" planetKey="proximity" />
            </div>
          </div>
        </div>

        <p className="underline mt-10">Zodiac Signs</p>
        <div className="w-full flex flex-col gap-8 sm:flex-row">
          <div className="w-full sm:w-1/2">
            <AstroNounSelector myArr={westernElements} arrKey="orderIdx" signKey="triplicityOrderIdx" />
          </div>
          
          <div className="w-full sm:w-1/2">
            <AstroNounSelector myArr={modes} arrKey="orderIdx" signKey="modalityOrderIdx" />
          </div>
        </div>

        <p className="underline mt-10">Dignity Calculation</p>
        <div>
          <DignitySelector />
        </div>
    </div>
  );
};