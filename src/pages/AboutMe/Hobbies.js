import React from "react";
import { SquareTile } from "../../components/Tiles";
import { aboutMeTiles } from "../../util/constants";

/**
 * The page called Hobbies, intended to list out my hobbies and interests
 * @returns
 */
export default function Hobbies() {
  return (
    <>
      <div className="p-2 flex flex-wrap justify-center m-auto max-w-screen-xl">
        {aboutMeTiles.map((tile, idx) => (
          <SquareTile key={`aboutMe.${idx}`} {...tile} />
        ))}
      </div>
    </>
  );
}
