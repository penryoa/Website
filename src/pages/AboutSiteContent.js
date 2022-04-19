import React from "react";
import Image_Cat from "../assets/images/cat.png";
import { SquareTile } from "../components/Tiles";

export default function AboutSiteContent() {
  const angledListItems = [
    {
      color: "bg-tAccent4-500",
      content: "grow my skills by trying out new tools",
    },
    {
      color: "bg-tBase-500",
      content: "show off whatever skills I've developed",
    },
    {
      color: "bg-tAccent1-600",
      content: "create a place to express my passion projects",
    },
    {
      color: "bg-tAccent3-700",
      content: "have fun tinkering around as I see fit",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-start">
        <div className="min-w-1/2 self-end">
          <img src={Image_Cat} alt="cat outline" width="100%" />
        </div>
        <div className="font-lg flex-1 min-w-1/3">
          <h1>about this site</h1>
          <p>
            I first started making this site at the beginning of June 2020 with
            some simple goals:
          </p>
          {angledListItems.map((item, idx) => (
            <div
              key={`angledList.${idx}`}
              className={`ml-${
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

      <div className="rounded-md soft-border p-1 bg-secondary">
        <h2>potential features to implement</h2>
        <div className="rounded-md soft-border p-1 bg-theme-neutral flex flex-wrap justify-center">
          <div className="min-w-1/4">
            <SquareTile
              color="bg-tAccent2-700/80"
              title="interactive budgeting app"
              halfTile
            />
            <SquareTile
              color="bg-tAccent3-700/80"
              title="toggle for theme colors and language"
              halfTile
            />
          </div>

          <div className="min-w-1/4">
            <SquareTile
              color="bg-tAccent4-700/80"
              title="an arcade-like mini game"
              content={
                <ul>
                  <li>
                    no strong ideas yet. I just want something that lets me
                    further practice object oriented design and makes me laugh.
                  </li>
                  <li>will be written in Java or C++</li>
                  <li>will be open source and possibly on Steam</li>
                </ul>
              }
            />
          </div>

          <div className="min-w-1/4">
            <SquareTile
              color="bg-tAccent1-700/80"
              title="video game project"
              content={
                <ul>
                  <li>
                    this will be a full game released independently or through
                    Steam
                  </li>
                  <li>
                    so far it is still in the design process with limited art
                    and music, but I may release some content as I progress.
                  </li>
                  <li>
                    all the music, art, and code will be done by me, so it's a
                    huge project! it'd be a while before it's done.
                  </li>
                </ul>
              }
            />
          </div>

          <div className="min-w-1/4">
            <SquareTile
              color="bg-tAccent2-700/80"
              title="poem collection"
              halfTile
            />
            <SquareTile
              color="bg-tAccent4-700/80"
              title="original music collection (audio, lyrics, download, etc.)"
              halfTile
            />
          </div>
        </div>
      </div>
    </div>
  );
}
