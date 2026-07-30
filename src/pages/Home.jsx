import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, StarIcon, } from "@heroicons/react/solid";
import { SquareTile } from "../components/Tiles";
import { features, pages } from "../util/constants";
import { DarkModeToggle } from "../components/DarkModeToggle";
import { scrollToTop } from "./PageWrappers";


/**
 * A page called Home, which operates as the landing page for the website
 * @author Addi Penry
*/
export default function HomePage() {
  scrollToTop();

  function HyperlinkMenu (isVert = false) {
    return (
      <div className={`w-full flex gap-6 items-center ${isVert.isVert ? "flex-col lg:items-start" : "justify-center flex-col sm:flex-row px-6 md:px-28 lg:px-12"}`}>
        {pages.map((page, idx) => (
          !page.isHome && (
            <Link
              className={`group ${!isVert.isVert && "w-auto"}`}
              key={`navBarItem.${idx}`}
              to={page.to}
            >
              <ArrowRightIcon className="h-4 w-4 mr-2 hidden group-hover:inline" />

              <p className="inline text-lg text-outline-thin-black text-shadow-sm font-bold text-red-500 dark:text-purple-300 active:text-purple-600 dark:group-hover:text-white group-hover:text-purple-500 group-hover:underline">
                {page.title}
              </p>
            </Link>
          )))}
      </div>
    )
  };

  return (
    <div>
      <h1 className="text-8xl fill-none m-auto pt-10 pb-0 text-center text-transparent bg-linear-to-t from-10% from-red-800 to-red-500 dark:from-purple-500 dark:to-white bg-clip-text">ADDI PENRY</h1>
        <div className="flex flex-row justify-center pb-6">
          <a
            className="group flex flex-row items-center"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youtube.com/@onespicydragon"
            >
            <img src="images/youtube.png" className="h-16 w-16 dark:invert" />
            <span className="sr-only">@onespicydragon</span>
            <p className="group-hover:underline text-lg">@onespicydragon</p>
          </a>
        </div>

      <div className="flex flex-col lg:flex-row-reverse flex-wrap items-center gap-10">
        <div className="w-full lg:w-1/3">
          <HyperlinkMenu isVert={true} />
        </div>
        <img
          src="images/temp_headshot.jpg"
          alt="headshot"
          className="object-cover w-150 h-150 px-2 rounded-4xl"
        />
      </div>

      <div className="m-4 p-6 text-2xl italic bg-white/30 dark:bg-black/30 rounded-lg border-2 border-purple-400 dark:border-black">
        Hi! I’m Addi, a creative occultist with a software engineering degree. I take my hodgepodge of skills and help you express yourself online and within.
      </div>

      <h1>services and projects</h1>
      <div className="flex justify-center flex-wrap">
        {features.map((item, idx) => (
          <SquareTile key={`features.${idx}`} {...item} />
        ))}
      </div>

      <div className="pt-4">
        <HyperlinkMenu isVert={false} />
      </div>

      <h1 className="pt-0 mt-2 text-red-500 dark:text-purple-500 text-shadow-black text-shadow-sm">Addi Penry</h1>

      <div className="border-2 mx-4 p-4 border-dotted rounded-2xl grid grid-cols-2">
        <DarkModeToggle />
        <p className="text-sm place-self-end">
          Last update: 2026 07 30
        </p>
      </div>
    </div>
  );
}
