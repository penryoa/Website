import React from "react";
import { SquareTile, ImageGallery } from "../components/Tiles";
import { aboutMeImages, aboutMeTiles } from "../util/constants";

export default function AboutMeContent() {
  return (
    <>
      <div className="m-auto max-w-full flex flex-wrap justify-center">
        <h2>hello～</h2>
        {/* <h2 className="visible hover:hidden">こんにちは～</h2> */}
        {/* <div className="moon moon-h2" /> */}
      </div>

      <div className="p-4 text-xl text-center px-5 bg-accent-2 rounded-tr-lg rounded-bl-lg">
        <p>
          I'm Addi, a software developer from Indiana. I like to be on my toes
          and thrown into unfamiliar things, so I moved straight from Indiana to
          New York City out of college. I have a hodgepodge of interests and
          hobbies and not enough time to tend to them all. I'm a motorcyclist,
          musician, avid tea drinker, and aspiring game developer. Cats are
          pretty great and thankfully I have two: Dragon and Mykie (which are
          featured in pictures below, as any animal parent is required to do).
        </p>
      </div>

      <div className="p-2 flex flex-wrap justify-center m-auto max-w-screen-xl">
        {aboutMeTiles.map((tile) => (
          <SquareTile {...tile} />
        ))}
      </div>

      <div className="cool_bg soft-border rounded-md">
        <div className="p-1 text-center">
          <p>Enjoy some random pictures of things that make me smile (:</p>
        </div>
        <ImageGallery images={aboutMeImages} />
      </div>
    </>
  );
}
