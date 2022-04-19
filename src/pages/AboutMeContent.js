import React from "react";
import { SquareTile, ImageGallery } from "../components/Tiles";
import { aboutMeImages, aboutMeTiles } from "../util/constants";
import { HandIcon } from "@heroicons/react/outline";

export default function AboutMeContent() {
  return (
    <>
      <h1 className="flex items-center justify-center">
        hello there
        <HandIcon className="ml-2 h-8 w-8 text-inherit" />
      </h1>

      <p className="p-4 text-center px-5 bg-accent-2 rounded-tr-lg rounded-bl-lg">
        I'm Addi, a software developer from Indiana. I like to be on my toes and
        thrown into unfamiliar things, so I moved straight from Indiana to New
        York City out of college. I have a hodgepodge of interests and hobbies
        and not enough time to tend to them all. I'm a motorcyclist, musician,
        avid tea drinker, and aspiring game developer. Cats are pretty great and
        thankfully I have two: Dragon and Mykie (which are featured in pictures
        below, as any animal parent is required to do).
      </p>

      <h2 id="interests">interests</h2>
      <div className="p-2 flex flex-wrap justify-center m-auto max-w-screen-xl">
        {aboutMeTiles.map((tile) => (
          <SquareTile {...tile} />
        ))}
      </div>

      <div className="cool_bg soft-border rounded-md">
        <h2 id="photoGallery">photo gallery</h2>
        <ImageGallery images={aboutMeImages} />
      </div>
    </>
  );
}
