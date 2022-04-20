import React from "react";
import { SquareTile } from "../../components/Tiles";
import { educationAndSkills } from "../../util/constants";

export default function Work() {
  return (
    <>
      {educationAndSkills.map((item, idx) => (
        <SquareTile key={`educationAndSkills.${idx}`} {...item} />
      ))}
    </>
  );
}
