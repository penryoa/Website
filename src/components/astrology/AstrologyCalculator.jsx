import React from "react";
import { AstroOrderedNoun } from "../../util/astrology/classes/interfaces.tsx";
import { modes, planets, westernElements, westernZodiacSigns } from "../../util/astrology/constants";
import SignSelector from "./SignSelector";

export default function AstrologyCalculator() {
  return (
    <div className="m-2 p-2 border-dashed border-2 border-amber-500">
        <h1>Addi's Dignitity Calculator</h1>
        <div>
          <label className="underline">All Zodiac Signs</label>
          <div className="flex flex-row  flex-wrap">
            {westernZodiacSigns.map((sign) => sign.DisplayTag())}
          </div>
        </div>
        <div className="mt-6">
          <label className="underline">All Planets</label>
          <div className="flex flex-row  flex-wrap">
            {planets.map((planet) => planet.DisplayTag())}
          </div>
        </div>

        <div className="mt-10">
          <SignSelector myArr={westernElements} arrKey="orderIdx" signKey="triplicityOrderIdx" />
        </div>
        
        <div className="mt-10">
          <SignSelector myArr={modes} arrKey="orderIdx" signKey="modalityOrderIdx" />
        </div>
    </div>
  );
};