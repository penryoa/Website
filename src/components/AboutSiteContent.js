import React from "react";
import Image_Cat from "../assets/images/cat.png";
import { SquareTile, SquareHalfTile } from "./Tiles";
import Image_Waves from "../assets/images/nice_waves.svg";

const AboutSiteContent = () => {
  return (
    <div>
      <div className="flex-con flex-start">
        <div className="min-w-1/2 align-bottom">
          <img src={Image_Cat} alt="cat outline" width="100%" />
        </div>
        <div className="font-lg flex-1 min-w-1/3">
          <h1>about this site</h1>
          <p>
            I first started making this site at the beginning of June 2020 with
            some simple goals:
          </p>
          {/* <embed src={Image_Waves} /> */}
          <div className="angled-list">
            <div>
              <p className="p-2 bg-7 rounded-md w-full">
                grow my skills by trying out new tools
              </p>
            </div>

            <div className="ml-2">
              <p className="p-2 bg-5 rounded-md w-full">
                show off whatever skills I've developed
              </p>
            </div>

            <div className="ml-4">
              <p className="p-2 bg-4 rounded-md w-full">
                create a place to express my passion projects
              </p>
            </div>

            <div className="ml-6">
              <p className="p-2 bg-6 rounded-md w-full">
                have fun tinkering around as I see fit
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md soft-border p-1 bg-true-black">
        <h2>potential features to implement</h2>
        <div className="rounded-md soft-border p-1 bg-3 flex-con flex-center">
          <div className="min-w-1/4">
            <SquareHalfTile bg_color={6} title="interactive budgeting app" />
            <SquareHalfTile
              bg_color={1}
              title="toggle for theme colors and language"
            />
          </div>

          <div className="min-w-1/4">
            <SquareTile
              bg_color={4}
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
              bg_color={5}
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
            <SquareHalfTile bg_color={6} title="poem collection" />
            <SquareHalfTile
              bg_color={4}
              title="original music collection (audio, lyrics, download, etc.)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSiteContent;
