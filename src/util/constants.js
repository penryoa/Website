import React from "react";
import Img_Skull from "../assets/images/skull_transparent_bg.png";
import Img_Me from "../assets/images/mother_of_dragon.jpg";
import Img_Art_Sun from "../assets/images/art_sun-n-moon.jpg";
import Img_Dragon from "../assets/images/creepy_dragon.JPEG";
import Img_Art_Hand from "../assets/images/art_hand.jpg";
import Img_Cloudy from "../assets/images/cloudy_nyc.jpg";
import Img_Mushrooms from "../assets/images/mushrooms.jpg";
import Img_Roxas from "../assets/images/RoxasAndMeBeech.JPG";
import Img_Bridges from "../assets/images/bridges_nyc.jpg";
import Img_South_Cove from "../assets/images/south_cove.jpg";
import Img_Mykie_Box from "../assets/images/mykie_box.jpg";
import Img_Bird_Bryant from "../assets/images/bird_in_bryant.jpg";
import Img_Bird_Foot from "../assets/images/bird_on_foot.jpg";
import { MusicNoteIcon } from "@heroicons/react/solid";
import StyledLink from "../components/StyledLink";

// ===== ADD YOUR THEMES HERE =====
export const themes = ["default"];
// ================================

export const pages = [
  { to: "/home", title: "Home" },
  { to: "/about-me", title: "About Me" },
  // { to: "/blog", title: "Blog" }, //  TODO: add in once ready
];

export const aboutMeTabs = [
  { to: "hobbies", title: "Hobbies" },
  { to: "work", title: "Education/Work" },
  { to: "images", title: "Image Gallery" },
];

export const aboutMeTiles = [
  {
    color: "bg-tAccent2-300/80 dark:bg-tAccent2-700/80",
    content: (
      <p>
        Piano is by far my favorite instrument to play. When I was around 7 or
        8, I started playing by ear and never stopped. I've semi-recently picked
        up acoustic guitar as well.
        <br />
        I've been singing as long as I can remember as well and grew up in
        different choirs.
      </p>
    ),
    title: "music",
  },
  {
    color: "bg-tAccent4-300/80 dark:bg-tAccent4-700/80",
    content: (
      <p>
        I was consistently learning French from 2015 to 2018. I'd love to get
        back into it and take a trip to Canada.
        <br />
        Japanese has been my target language for around two years now, though
        time was impossible to find the first year of studying. My long-term
        goal is to get through at least the JLPT N5 and N4, ideally N3 too.
      </p>
    ),
    title: "languages",
  },
  {
    color: "bg-tAccent1-300/80 dark:bg-tAccent1-700/80",
    content: (
      <p>
        Roxas, my bike, is a 2007 Honda Shadow. I've had him for four years anf
        have taken plenty of day trips as well as a handful of longer ones.
        <br />
        Once, I had to take my dad on the back of my bike in the pouring rain at
        night. He had a full gas canister in his lap. I prefer more leisurely
        rides than that.
      </p>
    ),
    title: "motorcycles",
  },
  {
    content: <img className="h-full" src={Img_Skull} alt="skull" />,
  },
  {
    color: "bg-tAccent3-300/80 dark:bg-tAccent3-700/80",
    content: (
      <p>
        Creativity calms my hyperactive brain. I really like playing with tons
        of different mediums - poems, writing songs, painting, drawing,
        papercraft, coding, world building, and even interior design.
      </p>
    ),
    title: "creativity",
  },
  {
    color: "bg-tAccent4-300/80 dark:bg-tAccent4-700/80",
    content: (
      <p>
        Growing up with N64 and Super Nintendo led to an inevitable obsession
        with Nintendo games, especially Zelda. Outside of Nintendo, my games of
        choice are simple: Skyrim, Fallout, Kingdom Hearts, and dabbling
        otherwise. I've watched many more games be played than I've played
        myself honestly, especially horror/scary games like Fran Bow.
      </p>
    ),
    title: "video games",
  },
];

export const aboutMeImages = [
  {
    altText: "just me",
    descText: "Obligatory selfie ft. Dragon perched on my shoulder",
    src: Img_Me,
  },
  {
    altText: "art - sun and moon",
    descText: "A painting of mine from 2015.",
    src: Img_Art_Sun,
  },
  {
    altText: "my lil lady Mykie",
    descText:
      "This is Mykie, aka Mykie Lady. \
    Her hobbies include lounging outdoors or by windows. She only lets you know you're giving her \
    too much attention when she is completely annoyed.",
    src: Img_Mykie_Box,
  },
  {
    altText: "my lil boyo Dragon",
    descText:
      "This is Dragon, aka Mr. Dragon. \
    He's a strange guy, sometimes even creepy. His biggest fear is starvation by an empty food bowl.",
    src: Img_Dragon,
  },
  {
    altText: "bridges in NYC",
    descText: "Taken from one of the many scenic waterviews in Manhattan.",
    src: Img_Bridges,
  },
  {
    altText: "my motorcycle Roxas and I",
    descText: "My boy Roxas. He's a stud with that glistening pearl coat.",
    src: Img_Roxas,
  },
  {
    altText: "mushrooms",
    descText:
      "Very aesthetically pleasing fly amanita mushrooms in North Carolina",
    src: Img_Mushrooms,
  },
  {
    altText: "cloudy NYC",
    descText: "Just a cloudy day in NYC.",
    src: Img_Cloudy,
  },
  {
    altText: "bird in the park",
    descText: "Pigeons are very fun to be around (:",
    src: Img_Bird_Bryant,
  },
  {
    altText: "bird on my foot",
    descText:
      "I can't get over this one - a bird just decided to hang out on my foot while I read! SO CUTE.",
    src: Img_Bird_Foot,
  },
  {
    altText: "south cove park",
    descText: "Stumbled upon a really neat park in NYC!",
    src: Img_South_Cove,
  },
  {
    altText: "art - hand of time",
    descText:
      'A painting of mine from 2017. Kind of makes me think of the "hand of time" in a weird way.',
    src: Img_Art_Hand,
  },
];

export const goals = [
  {
    color: "bg-tAccent4-500",
    content: "grow my skills by trying out new tools",
  },
  {
    color: "bg-tBase-500",
    content: "show off whatever skills I've developed",
  },
  {
    color: "bg-tAccent1-500",
    content: "create a place to express my passion projects",
  },
  {
    color: "bg-tAccent3-500",
    content: "have fun tinkering around as I see fit",
  },
];

export const features = [
  {
    border: "border-tAccent2-600",
    color: "bg-tAccent2-300/80 dark:bg-tAccent2-700/80",
    title: "interactive budgeting app",
  },
  {
    border: "border-tAccent3-600",
    color: "bg-tAccent3-300/80 dark:bg-tAccent3-700/80",
    title: "toggle for theme colors and language",
  },
  {
    border: "border-tAccent4-600",
    color: "bg-tAccent4-300/80 dark:bg-tAccent4-700/80",
    content: (
      <ul>
        <li>
          no strong ideas yet. I just want something that lets me further
          practice object oriented design and makes me laugh.
        </li>
        <li>will be written in Java or C++</li>
        <li>will be open source and possibly on Steam</li>
      </ul>
    ),
    title: <>an arcade-like mini game</>,
  },
  {
    border: "border-tAccent1-600",
    color: "bg-tAccent1-300/80 dark:bg-tAccent1-700/80",
    content: (
      <ul>
        <li>
          this will be a full game released independently or through Steam
        </li>
        <li>
          so far it is still in the design process with limited art and music,
          but I may release some content as I progress.
        </li>
        <li>
          all the music, art, and code will be done by me, so it's a huge
          project! it'd be a while before it's done.
        </li>
      </ul>
    ),
    title: "video game project",
  },
  {
    border: "border-tAccent2-600",
    color: "bg-tAccent2-300/80 dark:bg-tAccent2-700/80",
    title: (
      <span className="flex">
        <MusicNoteIcon className="h-6 w-6 pr-1 text-tAccent4-700 dark:text-tAccent4-300" />
        poem collection
      </span>
    ),
  },
  {
    border: "border-tAccent4-600",
    color: "bg-tAccent4-300/80 dark:bg-tAccent4-700/80",
    content: <p>(audio, lyrics, download, etc.)</p>,
    title: (
      <span className="flex">
        <MusicNoteIcon className="h-6 w-6 pr-1 text-tAccent4-700 dark:text-tAccent4-300" />
        original music collection
      </span>
    ),
  },
];

export const educationAndSkills = [
  {
    color: "bg-tAccent2-300/80 dark:bg-tAccent2-700/80",
    content: (
      <p className="text-center font-lg">
        B.S. in Computer Science, 2020
        <br />
        Rose-Hulman Institute of Technology
        <br />
        Terre Haute, IN
      </p>
    ),
    title: "education",
  },
  {
    color: "bg-tAccent3-300/80 dark:bg-tAccent3-700/80",
    content: (
      <p>
        Given how much it helps me when others have open-source code, I try to
        do the same when appropriate. Most code I've written is through my work
        and not able to be shared. The best example of accurate sample code is
        this website, as can be found on my GitHub and&nbsp;
        <StyledLink href="https://github.com/penryoa/Website">
          linked here for your convenience.&nbsp;
        </StyledLink>
        I have some (shitty) sample code from a few years ago as well,
        found&nbsp;
        <StyledLink href="https://github.com/penryoa/rose-hulman_backup">
          here&nbsp;
        </StyledLink>
        and&nbsp;
        <StyledLink href="https://github.com/KixorTech/CourseUp/tree/staging">
          here.&nbsp;
        </StyledLink>
      </p>
    ),
    title: "coding",
  },
  {
    color: "bg-tAccent4-400/80 dark:bg-tAccent4-600/80",
    content: (
      <p>
        I love working on front end apps like this site. Being able to tackle
        full-stack development is definitely my preferred way to operate so I
        can keep variety in what I do.
        <br />
        One of the biggest things I'm passionate about is good documentation.
        I'm very organized and enjoy making my code neat and documenation
        thorough.
      </p>
    ),
    title: "specialites",
  },
  {
    color: "bg-tAccent1-300/80 dark:bg-tAccent1-700/80",
    content: (
      <p>
        You can click here to{" "}
        <StyledLink
          href="./public/Resume_Addi-Penry_Public.pdf"
          download="Addi_Penry_Resume_20210706"
        >
          download my resume.
        </StyledLink>
      </p>
    ),
    title: "resume",
  },
];
