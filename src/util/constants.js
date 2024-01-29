import React from "react";
import { ColorSwatchIcon, ServerIcon } from "@heroicons/react/outline";
import {
  DocumentTextIcon,
  MusicNoteIcon,
  TerminalIcon,
} from "@heroicons/react/solid";
// ===== THEMES =====
export const themes = [
  "hydrangeas",
  "pride",
  "pickle",
  "dreamy",
  "riften",
  "rose",
];

// ===== NAVIGATION =====
export const pages = [
  { to: "/home", title: "Home" },
  { to: "/about-me", title: "About Me" },
  { to: "/blog", title: "The Calmplex Corner Blog" },
];

export const aboutMeTabs = [
  { to: "hobbies", title: "Hobbies" },
  { to: "work", title: "Education/Work" },
  { to: "images", title: "Image Gallery" },
];

// ===== TAGS =====
export const tagMusic = 1;
export const tagLanguage = 2;
export const tagCoding = 3;
export const tagTravel = 4;
export const tagBrain = 5;
export const tagStory = 6;
export const tagAnimal = 7;
export const tagDIY = 8;
export const tagProductivity = 9;
export const tagJapan = 10;
export const tagBook = 11;
export const tagOpinion = 12;
export const tagData = {
  [tagMusic]: {
    colorText: "text-tAccent3-300",
    colorBg: "bg-tAccent3-700",
    label: "Music",
    value: tagMusic,
  },
  [tagLanguage]: {
    colorText: "text-tAccent4-300",
    colorBg: "bg-tAccent4-700",
    label: "Language",
    value: tagLanguage,
  },
  [tagCoding]: {
    colorText: "text-tAccent1-800",
    colorBg: "bg-tAccent1-500",
    label: "Coding/Tech",
    value: tagCoding,
  },
  [tagTravel]: {
    colorText: "text-tAccent2-800",
    colorBg: "bg-tAccent1-400",
    label: "Travel",
    value: tagTravel,
  },
  [tagBrain]: {
    colorText: "text-tAccent1-300 ",
    colorBg: "bg-tAccent4-700",
    label: "Brain",
    value: tagBrain,
  },
  [tagStory]: {
    colorText: "text-tAccent2-300",
    colorBg: "bg-tAccent2-700",
    label: "Story",
    value: tagStory,
  },
  [tagAnimal]: {
    colorText: "text-tAccent2-800",
    colorBg: "bg-tAccent2-200",
    label: "Music",
    value: tagAnimal,
  },
  [tagDIY]: {
    colorText: "text-tAccent2-700",
    colorBg: "bg-tAccent4-200",
    label: "DIY",
    value: tagDIY,
  },
  [tagProductivity]: {
    colorText: "text-tAccent1-800",
    colorBg: "bg-tAccent3-500",
    label: "Productivity",
    value: tagProductivity,
  },
  [tagJapan]: {
    colorText: "text-tAccent2-400",
    colorBg: "bg-tAccent1-800",
    label: "Japan",
    value: tagJapan,
  },
  [tagBook]: {
    colorText: "text-tAccent2-700 ",
    colorBg: "bg-tAccent3-200",
    label: "Books",
    value: tagBook,
  },
  [tagOpinion]: {
    colorText: "text-tAccent2-300",
    colorBg: "bg-tAccent4-700",
    label: "Opinion",
    value: tagOpinion,
  },
};

// ===== INFO BLOCKS ======
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
    title: <p className="text-tAccent2-800 dark:text-tAccent2-200">music</p>,
  },
  {
    color: "bg-tAccent4-300/80 dark:bg-tAccent4-700/80",
    content: (
      <p>
        Japanese has been my target language for ~3 years now, though studying
        was inconsistent in the beginning. After passing the JLPT N4 in Dec.
        2023, my current goal is N3.
        <br />I was consistently learning French from 2015 to 2018. I'd love to
        get back into it and take a trip to Canada. More than anything, I'll
        probably start on Chinese next, though.
      </p>
    ),
    title: (
      <p className="text-tAccent4-800 dark:text-tAccent4-200">languages</p>
    ),
  },
  {
    color: "bg-tAccent1-300/80 dark:bg-tAccent1-700/80",
    content: (
      <p>
        At the (kind of late) age of 24, I finally sought out and received an
        ASD diagnosis after nearly a year of researching. Turns out it was also
        ADHD and anxiety.
        <br />
        I'm very passionate about autism acceptance. If I had known what to look
        for at a younger age, it would have saved me SO much turmoil.
      </p>
    ),
    title: (
      <p className="text-tAccent1-800 dark:text-tAccent1-200">autism/adhd</p>
    ),
  },
  {
    color: "bg-tAccent3-300/80 dark:bg-tAccent3-700/80",
    content: (
      <p>
        Creativity calms my hyperactive brain. I really like playing with tons
        of different mediums - poems, writing songs, painting, drawing,
        papercraft, coding, world building, fashion, interior design, and the
        list probably goes on.
      </p>
    ),
    title: (
      <p className="text-tAccent3-800 dark:text-tAccent3-200">creativity</p>
    ),
  },
  {
    content: (
      <img
        alt="skull"
        className="h-full invert-0 dark:invert"
        src={"/public/images/skull_transparent_bg.png"}
      />
    ),
  },
  {
    color: "bg-tAccent4-300/80 dark:bg-tAccent4-700/80",
    content: (
      <p>
        Growing up with N64 and Super Nintendo led to an inevitable obsession
        with Nintendo games, especially Zelda. Outside of Nintendo, my games of
        choice are simple: BG3, some Bethesda, Kingdom Hearts, and dabbling
        otherwise. I've watched many more games be played than I've played
        myself honestly, especially horror/scary games like Fran Bow.
      </p>
    ),
    title: <p className="text-tAccent4-800 dark:text-tAccent4-200">gaming</p>,
  },
  {
    color: "bg-tAccent2-300/80 dark:bg-tAccent2-700/80",
    content: (
      <p>
        Roxas, my bike, is a 2007 Honda Shadow. I've had him since 2019 and have
        taken plenty of day trips as well as a handful of longer ones.
        <br />
        Once, I had to take my dad on the back of my bike in the pouring rain at
        night. He had a full gas canister in his lap. I prefer more leisurely
        rides than that.
      </p>
    ),
    title: (
      <p className="text-tAccent2-800 dark:text-tAccent2-200">motorcycles</p>
    ),
  },
  {
    color: "bg-tAccent1-300/80 dark:bg-tAccent1-700/80",
    content: (
      <p>
        To be as brief as possible, I definitely like to watch shows and movies.
        Cartoons/anime (like Avatar), comedies (like Some Like It Hot),
        horror/thriller (like Hush), and reality (like Big Brother) tend to be
        my go-to's. The most recent interest is Critical Role!
      </p>
    ),
    title: (
      <p className="text-tAccent1-800 dark:text-tAccent1-200">movies/shows</p>
    ),
  },
  {
    color: "bg-tAccent3-300/80 dark:bg-tAccent3-700/80",
    content: (
      <p>
        I mean, I picked my career for a reason. I enjoy the process, the
        challenges, and the results of coding. It <i>does</i> sometimes make me
        forget to eat or sleep because I'm hyperfocused, but what's new. I
        prefer to be more on the UI/design side but remain full-stack.
      </p>
    ),
    title: <p className="text-tAccent3-800 dark:text-tAccent3-200">coding</p>,
  },
];

export const aboutMeImages = [
  {
    altText: "just me",
    descText: "Obligatory selfie ft. Dragon perched on my shoulder",
    src: "/public/images/mother_of_dragon.jpg",
  },
  {
    altText: "art - sun and moon",
    descText: "A painting of mine from 2015.",
    src: "/public/images/art_sun-n-moon.jpg",
  },
  {
    altText: "my lil lady Mykie",
    descText:
      "This is Mykie, aka Mykie Lady. Her hobbies include lounging outdoors or by windows. She only lets you know you're giving her too much attention when she is completely annoyed.",
    src: "/public/images/mykie_box.jpg",
  },
  {
    altText: "my lil boyo Dragon",
    descText:
      "This is Dragon, aka Mr. Dragon. He's a strange guy, sometimes even creepy. His biggest fear is starvation by an empty food bowl.",
    src: "/public/images/creepy_dragon.JPEG",
  },
  {
    altText: "bridges in NYC",
    descText: "Taken from one of the many scenic waterviews in Manhattan.",
    src: "/public/images/bridges_nyc.jpg",
  },
  {
    altText: "my motorcycle Roxas and I",
    descText: "My boy Roxas. He's a stud with that glistening pearl coat.",
    src: "/public/images/RoxasAndMeBeech.JPG",
  },
  {
    altText: "mushrooms",
    descText:
      "Very aesthetically pleasing fly amanita mushrooms in North Carolina",
    src: "/public/images/mushrooms.jpg",
  },
  {
    altText: "cloudy NYC",
    descText: "Just a cloudy day in NYC.",
    src: "/public/images/cloudy_nyc.jpg",
  },
  {
    altText: "bird in the park",
    descText: "Pigeons are very fun to be around (:",
    src: "/public/images/bird_in_bryant.jpg",
  },
  {
    altText: "bird on my foot",
    descText:
      "I can't get over this one - a bird just decided to hang out on my foot while I read! SO CUTE.",
    src: "/public/images/bird_on_foot.jpg",
  },
  {
    altText: "south cove park",
    descText: "Stumbled upon a really neat park in NYC!",
    src: "/public/images/south_cove.jpg",
  },
  {
    altText: "art - hand of time",
    descText:
      'A painting of mine from 2017. Kind of makes me think of the "hand of time" in a weird way.',
    src: "/public/images/art_hand.jpg",
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
        Because this is a personal site and it's not necessarily always fun to
        code in my free time, I haven't implemented a backend yet. But if I want
        this to better represent my skills, I really should at least create and
        call a DB at minimum.
      </p>
    ),
    title: (
      <p className="flex text-tAccent4-800 dark:text-tAccent4-200">
        <ServerIcon className="h-7 w-7 pr-2" />
        backend
      </p>
    ),
  },
  {
    color: "bg-tAccent3-300/80 dark:bg-tAccent3-700/80",
    content: (
      <p>
        I've already gotten around to adding a way to toggle themes, but I still
        need to clean up the process of making and using them. <br />
        As for language, I am a native English speaker learning Japanese and
        eventually I want to pick French back up, and start others. It'd be good
        practice to translate this site.
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
      <p>
        Again, this is just a personal site, so I've not really done much work
        in terms of security. It'd be fun to take some time to make some updates
        in that department, as well as practice some networking by SSHing into
        my Raspberry Pi to start the site up. Stuff like that.
      </p>
    ),
    title: (
      <p className="flex text-tAccent2-800 dark:text-tAccent2-200">
        <TerminalIcon className="h-7 w-7 pr-2" />
        more networking/security
      </p>
    ),
  },
  {
    color: "bg-tAccent1-300/80 dark:bg-tAccent1-700/80",
    content: (
      <p>
        Let's see if this AuDHDer will find the motivation to develop a full
        game independently lol. So far it is still in the design process with
        limited art and music, but I may release some content as I progress. All
        the music, art, and code would be done by me, so it's a really big
        undertaking.
      </p>
    ),
    title: (
      <p className="text-tAccent1-800 dark:text-tAccent1-200">
        <span className="text-xl fa fa-gamepad pr-2" />
        video game project
      </p>
    ),
  },
  {
    color: "bg-tAccent4-300/80 dark:bg-tAccent4-700/80",
    content: (
      <div>
        I am already standing at around 100 pages in my current poetry book I am
        working on, which includes my own art and photos.
        <br />
        It mainly focuses on very vulnerable topics and I'm even considering
        publishing it. It's a bigger project, but it's pretty exciting to me.
        Cathartic, morelike.
      </div>
    ),
    title: (
      <span className="flex text-tAccent2-800 dark:text-tAccent2-200">
        <DocumentTextIcon className="h-7 w-7 pr-2" />
        poem collection
      </span>
    ),
  },
  {
    color: "bg-tBase-300/80 dark:bg-tBase-700/80",
    content: (
      <p>
        (audio, lyrics, download, etc.)
        <br />
        I tend to improv a lot of piano pieces that I think would be worth
        sharing, and I also have completed songs I've worked on consistently.
        <br />
        I've produced one song, but the learning curve feels pretty steep to me.
        So I'm working on album one of three that I've conceptualized!
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
