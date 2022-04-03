import React from "react";
import ResumePDF from "../assets/files/Resume_Addi-Penry_Public.pdf";
import { SquareTile } from "./Tiles";

export default function ResumeContent() {
  return (
    <>
      <h1 className="text-center">education & skills</h1>
      <div className="flex flex-wrap justify-start">
        <div
          id="education_code_div"
          className="flex flex-col lg:flex-row lg:justify-center"
        >
          <SquareTile
            title="education"
            content={
              <p className="text-center font-lg">
                B.S. in Computer Science, 2020
                <br />
                Rose-Hulman Institute of Technology
                <br />
                Terre Haute, IN
              </p>
            }
            bg_color={7}
          />

          <SquareTile
            title="code"
            content={
              <p>
                Given how much it helps me when others have open-source code, I
                try to do the same when appropriate. Most code I've written is
                through my work and not able to be shared. The best example of
                accurate sample code is this website, as can be found on my
                GitHub and&nbsp;
                <a
                  className="simple_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/penryoa/Website"
                >
                  linked here for your convenience.&nbsp;
                </a>
                I have some (shitty) sample code from a few years ago as well,
                found&nbsp;
                <a
                  className="simple_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/penryoa/rose-hulman_backup"
                >
                  here&nbsp;
                </a>
                and&nbsp;
                <a
                  className="simple_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/KixorTech/CourseUp/tree/staging"
                >
                  here.&nbsp;
                </a>{" "}
              </p>
            }
            bg_color={5}
          />

          <SquareTile
            title="specialites"
            content={
              <p>
                I love working on front end apps like this site. Being able to
                tackle full-stack development is definitely my preferred way to
                operate so I can keep variety in what I do.
                <br />
                One of the biggest things I'm passionate about is good
                documentation. I'm very organized and enjoy making my code neat
                and documenation thorough.
              </p>
            }
            bg_color={4}
          />
        </div>

        <div className="flex-1 px-2 h-w-nav sticky top-12 self-start">
          <object
            id="resume_obj"
            data={ResumePDF}
            type="application/pdf"
            width="100%"
            height="100%"
            aria-label="Resume"
          />
        </div>
      </div>
    </>
  );
}
