import { AcademicCapIcon } from "@heroicons/react/outline";
import { DownloadIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import StyledLink from "../../components/StyledLink";

/**
 * The page called Images, representing my experience and education
 * @author Addi Penry
 */
export default function Work() {
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);
  return (
    <div className="max-w-5xl mx-auto pt-2">
      <div className="w-full">
        <video
          className={`w-full ${isLoadingVideo && "hidden"}`}
          controls
          src="/public/AddiPenryElevatorPitch.mp4"
          onLoad={setTimeout(() => setIsLoadingVideo(false), 500)}
        />
        <img
          alt={"cat_meow"}
          className={
            isLoadingVideo ? "w-24 invert-0 dark:invert mx-auto" : "hidden"
          }
          src="/public/catmeow.gif"
        />
      </div>

      <h2>education</h2>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="bg-tAccent2-100 m-2 p-2 rounded-sm border-2 ring-2 border-tBase-50 dark:border-tBase-950 ring-tBase-500 text-center ring-offset-2 ring-offset-tBase-50 dark:ring-offset-tBase-950 text-slate-800 w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-xl text-red-900">
            Rose-Hulman Institute of Technology
          </p>
          <p className="text-base text-slate-500">Terre Haute, IN</p>
          <AcademicCapIcon className="h-8 w-8 text-red-500 mx-auto" />
          <p className="text-lg ">Bachelor of Science</p>
          <p className="text-base italic">in</p>
          <p className="text-lg">Computer Science</p>
          <p className="text-base text-slate-500">May 2020</p>
          <p></p>
        </div>
        <p className="p-default md:w-1/2 m-4">
          I graduated from the very rigorous technical college Rose-Hulman in
          2020. I'm talking 10-weeks per semester - and not even semesters, but
          quarters. From writing my own parsing language to a Java application
          that turns Java files into an accurate UML diagram, I learned much
          about OO design, software patterns, data design, etc.
          <br />
          Though it was immensely stressful, I did learn a lot that I carry with
          me today. I genuinely feel like I earned more than one degree. Now, it
          makes a great barometer for stress (and you never want to be
          Rose-stressed)!
        </p>
      </div>

      <h2>current endeavors</h2>
      <p className="p-default m-4">
        I'm currently looking for work after four years as a Full Stack Software
        Engineer, usually skewed towards the front end or specs/data design. I'm
        passionate about good documentation, clean code, and organization as a
        whole.
        <br />
        <br />
        Given how much it helps me when others have open-source code, I try to
        do the same when appropriate. Most code I've written is through my work
        and not able to be shared. The best example of (mostly) accurate sample
        code is this website, as can be found on my GitHub and&nbsp;
        <StyledLink href="https://github.com/penryoa/Website">
          linked here for your convenience.&nbsp;
        </StyledLink>
        I have some (shitty) sample code from college as well, found&nbsp;
        <StyledLink href="https://github.com/penryoa/rose-hulman_backup">
          here (code I wrote in classes)&nbsp;
        </StyledLink>
        and&nbsp;
        <StyledLink href="https://github.com/KixorTech/CourseUp/tree/staging">
          here (code for my client in my senior year).&nbsp;
        </StyledLink>
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-4">
        <StyledLink
          className=" block w-96 text-tAccent1-100 text-lg rounded-lg m-5 p-5 bg-tAccent1-500 hover:bg-tAccent1-300 dark:hover:bg-tAccent1-700"
          href="../../../public/Resume_Addi-Penry_Public.pdf"
          download="Addi_Penry_Resume_2024"
        >
          <span className="flex">
            <DownloadIcon className="h-8 w-8 pr-3" />
            Download My Resume
          </span>
        </StyledLink>
        <StyledLink
          className=" block w-96 text-tAccent1-100 text-lg rounded-lg m-5 p-5 bg-tAccent1-500 hover:bg-tAccent1-300 dark:hover:bg-tAccent1-700"
          href="../../../public/Autism_Acceptance_Month.pdf"
          download="Autism_Acceptance_Month"
        >
          <span className="flex">
            <DownloadIcon className="h-8 w-8 pr-3" />
            How to Explain ASD to Coworkers
          </span>
        </StyledLink>
      </div>
    </div>
  );
}
