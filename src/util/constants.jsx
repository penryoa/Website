import React from "react";
import {
  CameraIcon,
  DesktopComputerIcon,
  DocumentTextIcon,
  MusicNoteIcon,
  StarIcon,
} from "@heroicons/react/solid";

// ===== ENV VARIABLES =====
// Note: to bring it in here, we need the prefix "REACT_APP". Then, in the vite.config.js, I also bring in these env variables.
export const BASE = process.env.REACT_APP_BASE

// ===== TAILWIND CLASS NAMES =====
export const selectorClassName = "mx-2 px-2 bg-orange-200 dark:bg-amber-600 rounded-xl shadow-sm shadow-fuchsia-800/50 dark:shadow-fuchsia-200/50";

// ===== NAVIGATION =====
export const pages = [
  { to: "/home", title: "Home", isHome: true},
  { to: "/film", title: "Photography & Videography" },
  { to: "/web", title: "Website Development" },
  { to: "/occult", title: "Astrology & Tarot" },
  { to: "/me", title: "Personal Projects" }
];

// ===== INFO BLOCKS ======
export const features = [
  {
    color: "bg-red-300/80 dark:bg-red-700/80",
    content: (
      <p>
        If you’re looking to promote yourself or your business online, I specialize in authentic, professional photos and videos.<br />
        I process them to your liking. If you want a reel for social media, or a headshot for your website, I got you!
      </p>
    ),
    title: (
      <p className="flex text-red-800 dark:text-red-200">
        <CameraIcon className="h-7 w-7 pr-2" />
        photos & videos
      </p>
    ),
  },
  {
    color: "bg-fuchsia-300/80 dark:bg-fuchsia-700/80",
    content: (
      <p>
        I am part traditional medieval astrologer, part modern Western astrologer. I change my tools depending on technique used.<br />
        I do all kind of astrological readings, as well as tarot. I just personally find it a helpful tool for reflection. And I ghost hunt for fun.
      </p>
    ),
    title: (
      <p className="flex text-fuchsia-800 dark:text-fuchsia-200">
        <StarIcon className="h-7 w-7 pr-2" />
        the occult
      </p>
    ),
  },
  {
    color: "bg-mauve-300/80 dark:bg-mauve-700/80",
    content: (
      <p>
        I'm a self-taught pianist and "guitar" player (chords only; way more into piano!). Ever since I was at least in second grade, I've written poetry, sang, and played piano. It's a whole other thing to produce music, but it's a skill I'm working on!
      </p>
    ),
    title: (
      <p className="flex text-mauve-800 dark:text-mauve-200">
        <MusicNoteIcon className="h-7 w-7 pr-2" />
        music & poetry
      </p>
    ),
  },
  {
    color: "bg-purple-300/80 dark:bg-purple-700/80",
    content: (
      <p>
        Not only do I love personal expression, but the grand idea exchange is where it's at. If I pick up any neat skills, knowledge, or just want to document myself trying, I want a place to capture that lifestyle and advice content. And it's just fun!
      </p>
    ),
    title: (
      <p className="flex text-purple-800 dark:text-purple-200">
        <DocumentTextIcon className="h-7 w-7 pr-2" />
        my YouTube channel
      </p>
    ),
  },
  {
    color: "bg-orange-300/80 dark:bg-orange-700/80",
    content: (
      <p>
        This is what I got my degree in: software development. I worked in the industry for 6 years before a sudden medical condition took me out of it.
        I now operate as a freelance web developer, focusing on the personality behind a business and authentic representation.
      </p>
    ),
    title: (
      <p className="flex text-orange-800 dark:text-orange-200">
        <DesktopComputerIcon className="h-7 w-7 pr-2" />
        website development
      </p>
    ),
  },
  {
    color: "bg-red-300/80 dark:bg-red-700/80",
    content: (
      <p>
        Writing is a medium I use all the time. I write poetry, guides on topics I'm knowledgeable in, and even books on topics I want to further explore. I'm a very studious and goal-oriented person, so being able to get down to the nitty gritty and geek out is everything.
      </p>
    ),
    title: (
      <p className="flex text-red-800 dark:text-red-200">
        <DocumentTextIcon className="h-7 w-7 pr-2" />
        written work
      </p>
    ),
  },
];
