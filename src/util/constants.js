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
import {
  DocumentTextIcon,
  MusicNoteIcon,
  TerminalIcon,
} from "@heroicons/react/solid";
import { ColorSwatchIcon, NewspaperIcon } from "@heroicons/react/outline";

// ===== ADD YOUR THEMES HERE =====
export const themes = ["default"];
// ================================

export const pages = [
  { to: "/home", title: "Home" },
  { to: "/about-me", title: "About Me" },
];

export const aboutMeTabs = [
  { to: "hobbies", title: "Hobbies" },
  { to: "work", title: "Education/Work" },
  { to: "images", title: "Image Gallery" },
];

export const pDefault =
  "text-justify p-5 bg-tBase-300 dark:bg-tBase-700 rounded-tr-xl rounded-bl-xl";

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
        Japanese has been my target language for ~3 years now, though studying
        was inconsistent in the beginning. My long-term goal is to get through
        at least the JLPT N5 and N4, ideally N3 too.
      </p>
    ),
    title: "languages",
  },
  {
    color: "bg-tAccent1-300/80 dark:bg-tAccent1-700/80",
    content: (
      <p>
        At the late age of 24, I finally sought out and received an ASD
        diagnosis after nearly a year of researching. Turns out it was also ADHD
        and anxiety (as one may surmise).
        <br />
        I'm very passionate about ASD acceptance. If I had known what to look
        for at a younger age, it would have saved me SO much turmoil.
      </p>
    ),
    title: "autism/adhd",
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
    content: <img className="h-full" src={Img_Skull} alt="skull" />,
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
  {
    color: "bg-tAccent2-300/80 dark:bg-tAccent2-700/80",
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
    color: "bg-tAccent1-300/80 dark:bg-tAccent1-700/80",
    content: (
      <p>
        I love rocks. That's all. (:
        <br />
        I've been collecting rocks and stones as long as I've been conscious. I
        also have a mini zen garden on my desk that I use to display a fraction
        of my collection, with the rest dispersed througout my home.
      </p>
    ),
    title: "rocks",
  },
  {
    color: "bg-tAccent3-300/80 dark:bg-tAccent3-700/80",
    content: (
      <p>
        I mean, I picked my career for a reason. I love the process, the
        challenges, and the results of coding. It <i>does</i> sometimes make me
        forget to eat or sleep because I'm hyperfocused, but it's worth it in
        the end, right?
      </p>
    ),
    title: "coding",
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
    color: "bg-tAccent4-400 dark:bg-tAccent4-600",
    content: "grow my skills by trying out new tools",
  },
  {
    color: "bg-tAccent3-400 dark:bg-tAccent3-600",
    content: "show off whatever skills I've developed",
  },
  {
    color: "bg-tAccent2-400 dark:bg-tAccent2-600",
    content: "create a place to express my passion projects",
  },
  {
    color: "bg-tAccent1-400 dark:bg-tAccent1-600",
    content: "have fun tinkering around as I see fit",
  },
];

export const features = [
  {
    color: "bg-tAccent4-300/80 dark:bg-tAccent4-700/80",
    content: (
      <p>
        I have a lot to say and would benefit greatly from having and
        semi-maintaining a blog.
        <br />
        It'd mainly be for my own use really. It's like a timecapsule for your
        thoughts. Very cool.
      </p>
    ),
    title: (
      <p className="flex text-tAccent4-800 dark:text-tAccent4-200">
        <NewspaperIcon className="h-7 w-7 pr-2" />
        personal blog
      </p>
    ),
  },
  {
    color: "bg-tAccent3-300/80 dark:bg-tAccent3-700/80",
    content: (
      <p>
        I've already gotten around to adding a way to toggle themes, but I still
        need to clean up the process of making and using them. <br />
        As for language, I am a native English speaker aiming to learn Japanese
        and eventually get back to French. It'd be good practice to translate
        this site.
      </p>
    ),
    title: (
      <p className="flex text-tAccent3-800 dark:text-tAccent3-200">
        <ColorSwatchIcon className="h-7 w-7 pr-2" />
        toggle for theme/language
      </p>
    ),
  },
  {
    color: "bg-tAccent2-300/80 dark:bg-tAccent2-700/80",
    content: (
      <ul className="list-disc">
        <li>
          no strong ideas yet. I just want something that lets me further
          practice object oriented design and makes me laugh.
        </li>
        <li>will be written in Java or C++</li>
        <li>will be open source and possibly on Steam</li>
      </ul>
    ),
    title: (
      <p className="flex text-tAccent2-800 dark:text-tAccent2-200">
        <TerminalIcon className="h-7 w-7 pr-2" />
        an arcade-like mini game
      </p>
    ),
  },
  {
    color: "bg-tAccent1-300/80 dark:bg-tAccent1-700/80",
    content: (
      <ul className="list-disc">
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
    title: (
      <p className="text-tAccent1-800 dark:text-tAccent1-200">
        <span className="text-xl fa fa-gamepad pr-2" />
        video game project
      </p>
    ),
  },
  {
    color: "bg-tAccent2-300/80 dark:bg-tAccent2-700/80",
    content: (
      <p>
        I am already standing at around 100 pages in my current poetry book I am
        working on, which includes my own art and "photography".
        <p className="text-tAccent2-800 dark:text-tAccent2-100">
          (I am not a photographer)
        </p>
      </p>
    ),
    title: (
      <span className="flex text-tAccent2-800 dark:text-tAccent2-200">
        <DocumentTextIcon className="h-7 w-7 pr-2" />
        poem collection
      </span>
    ),
  },
  {
    color: "bg-tAccent4-300/80 dark:bg-tAccent4-700/80",
    content: (
      <p>
        (audio, lyrics, download, etc.)
        <br />
        I tend to improv a lot of piano pieces that I think would be worth
        sharing, and I also have completed songs I've worked on consistently.
        <br />
        I'd like to find a way to more officially produce and release them.
      </p>
    ),
    title: (
      <span className="flex text-tAccent4-800 dark:text-tAccent4-200">
        <MusicNoteIcon className="h-7 w-7 pr-2" />
        original music collection
      </span>
    ),
  },
];
