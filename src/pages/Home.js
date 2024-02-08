import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { SquareTile } from "../components/Tiles";
import { goals, features } from "../util/constants";

export default function Home() {
  // just here so tailwind loads it in: "sm:ml-0 sm:ml-2 sm:ml-4 sm:ml-6 sm:ml-8"
  return (
    <div>
      <div className="m-auto max-w-full flex justify-center items-center gap-2">
        <h1>welcome!</h1>
        <StarIcon className="h-8 w-8 text-tAccent1-300 dark:text-tAccent1-700" />
      </div>
      <p className="p-default">
        I'm Addi, a full-stack software engineer based in North Carolina. This
        site is kind of my catalogue of things I care about, miscellaneous
        projects, my education/experience, and so on.
        <br />
        <br />
        Explore the menu to see some other things!
      </p>

      <div className="flex flex-col lg:flex-row flex-wrap justify-start">
        <div className="max-w-lg self-center lg:self-end">
          <img
            className="invert-0 dark:invert"
            src="/public/images/cat.png"
            alt="cat outline"
            width="100%"
          />
        </div>
        <div className="font-lg flex-1">
          <h1>about this site</h1>
          <p>
            I first started making this site at the beginning of June 2020 with
            some simple goals:
          </p>
          {goals.map((item, idx) => (
            <div
              key={`angledList.${idx}`}
              className={`sm:ml-${
                idx * 2
              } pl-0 py-1 text-lg select-none transition-all duration-500 hover:pl-3`}
            >
              <p className={`p-2 rounded-md w-full ${item.color}`}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <h2>potential features to implement</h2>
      <div className="flex justify-center flex-wrap">
        {features.map((item, idx) => (
          <SquareTile key={`features.${idx}`} {...item} />
        ))}
      </div>

      <div className="mt-4 py-4 border-t border-dashed border-tBase-950 dark:border-tBase-50 text-sm">
        Last update: 2024 01 28
      </div>
    </div>
  );
}
