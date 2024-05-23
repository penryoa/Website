import {
  SparklesIcon,
  ThumbUpIcon,
  SunIcon,
  GlobeIcon,
  MapIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import React from "react";
import { ExpandableTile } from "../components/Tiles";

// TODO: move to db
export const articleMetadata = {
  tags: [5, 9],
  title: "Cooking (For the ND Girles)",
  url: "cooking-for-the-nd-girlies",
  titleImageClassName: "bg-[url('/public/images/food/cherry_sando.jpg')]",
  writtenBy: "Addi Penry",
  writtenAt: "2024-01-28",
  content: (
    <div className="blog">
      <p>
        I actually took some time away from having a job during December of
        2023. I really wanted to reassess what career direction to take, and when I don't have the answer to something, I obsess over it. In this time, I prioritized building emotional intelligence and executive functioning skills, yet what executive functioning skill was still plaguing me?
      </p>
      <div className="py-3 flex justify-center items-center gap-3 text-xl text-tAccent2-700 dark:text-tAccent2-300">
        <span className="flex items-baseline">
          ~<SparklesIcon className="h-5 w-5" />
        </span>
        cooking literally anything
        <span className="flex items-baseline">
          <SparklesIcon className="h-5 w-5" />~
        </span>
      </div>
      <p>
        Don't even <i>get me started</i> on feeding myself. It doesn't come
        naturally to me and it quickly becomes a decision-fatiguing,
        sensory-heavy mess.
      </p>
      <ul className="list-disc ml-6 sm:text-lg pt-2">
        <li>
          There are SO many recipes; what flavor and taste combinations should I
          choose? Which author's version should I make?
        </li>
        <li>
          I'm a woman in STEM - how am I not supposed to optimize cost, health,
          and convenience? Inconceivable.
        </li>
        <li>
          With my exteroception sensitivities, I see knives or graters being
          used and feel it against my skin. The impact of that phantom feeling
          depends on my mental and physical state generally, so if you catch me on a bad day, I am inable to even chop my own
          veggies without risk of an anxiety attack.
        </li>
        <li>
          Speaking of anxiety, I'm prone to burnout and decision fatigue,
          which means my abilities at any given time can severely limit what I
          can do and I have to be extra careful.
        </li>
        <li>Frying on a stovetop? With those crackles? In this economy?</li>
        <li>
          And then AFTER all of that, you have to wash dishes where water will
          run up your forearms unless you're paying close attention?
        </li>
      </ul>
      <p>
        <span className="flex items-end">
          So all that's super cool and fun to work with and not at all an
          inconvenience.
          <ThumbUpIcon className="h-6 w-6 text-tAccent2-pop mb-1" />
        </span>
        Basically, I've been working on finding ways to make cooking not
        actually feel like cooking, you know? So I did what I do best and
        overanalyzed. I came up with some things I know I want to prioritize,
        affectionately forming the acronym CACA, because cooking is shit unless
        I do something about it.
      </p>

      <div className="text-center mt-2 w-full">
        <div className="w-full flex flex-wrap md:flex-nowrap">
          <div className="flex flex-col align-middle items-center w-full md:m-1 md:w-1/2 p-4 rounded-md text-tAccent2-800 dark:text-tAccent2-200 bg-tAccent2-400 dark:bg-tAccent2-600">
            <HeartIcon className="h-8 w-8 animate-pulse" />
            <b>Cravings</b>
            <b />
            <i>what do I find myself actually craving?</i>
          </div>
          <div className="flex flex-col align-middle items-center w-full md:m-1 md:w-1/2 p-4 rounded-md text-tAccent1-800 dark:text-tAccent1-200 bg-tAccent1-400 dark:bg-tAccent1-600">
            <SunIcon className="h-8 w-8 animate-pulse" />
            <b>Aesthetics</b>
            <b />
            <i>if it isn't in a cute bowl, why eat it?</i>
          </div>
        </div>

        <div className="w-full flex flex-wrap md:flex-nowrap">
          <div className="flex flex-col align-middle items-center w-full md:m-1 md:w-1/2 p-4 rounded-md text-tAccent4-800 dark:text-tAccent4-200 bg-tAccent4-400 dark:bg-tAccent4-600">
            <GlobeIcon className="h-8 w-8 animate-pulse" />
            <b>Consciencious</b>
            <b />
            <i>why waste if I could not waste?</i>
          </div>
          <div className="flex flex-col align-middle items-center w-full md:m-1 md:w-1/2 p-4 rounded-md text-tAccent3-800 dark:text-tAccent3-200 bg-tAccent3-400 dark:bg-tAccent3-600">
            <MapIcon className="h-8 w-8 animate-pulse" />
            <b>Assembly</b>
            <b />
            <i>lots of little treats {">"} one big thing</i>
          </div>
        </div>
      </div>

      <p>
        Below are more deets on these core ideas, including images. All except
        the ryokan picture are of things I myself made, which I absolutely say
        out of pride because I am really happy to have "unlocked" this skill
        tree.
      </p>

      <div className="mt-4">
        <ExpandableTile
          color="bg-tAccent2-400 dark:bg-tAccent2-600 text-tAccent2-800 dark:text-tAccent2-100 hover:bg-tAccent2-300 dark:hover:bg-tAccent2-700"
          content={
            <>
              <img
                alt="bean-dinner"
                className="border-default md:max-w-sm"
                src="/public/images/food/simple_bean_dinner.jpg"
              />
              <div className="md:p-4 self-center">
                I literally wrote down a list of foods I tend to crave and foods
                I want to try to incorporate more. It reduced the choices of
                what to eat to these specific items, so less decision power
                wasted. Plus, I get to be excited about everything I eat. All
                around success.
              </div>
            </>
          }
          title="Cravings"
        />

        <ExpandableTile
          color="bg-tAccent1-400 dark:bg-tAccent1-600 text-tAccent1-800 dark:text-tAccent1-100 hover:bg-tAccent1-300 dark:hover:bg-tAccent1-700"
          content={
            <div className="flex flex-col">
              <div className="mb-4 flex flex-col md:flex-row w-full justify-start gap-2">
                <div className="md:p-4 self-center">
                  There's two big realizations I've had with all this: (1) just
                  cut things in cute shapes whenever possible, and (2) put
                  things on cute plates. Now food is an art project, not
                  cooking! Much better.
                </div>
                <img
                  alt="choco-platter"
                  className="border-default md:max-w-sm"
                  src="/public/images/food/fruit_choco_platter.jpg"
                />
              </div>

              <div className="mb-4 flex flex-col md:flex-row w-full justify-start gap-2">
                <img
                  alt="spring-bento"
                  className="border-default md:max-w-sm"
                  src="/public/images/food/spring_bento.jpg"
                />
                <div className="md:p-4 self-center">
                  Plus, I'm thinking about chopping things way less. I don't
                  feel the knife as often or strongly; now I'm wielding a
                  temporary tool that allows me to use cookie cutter shapes.
                  Somehow it tricks my brain and it's amazing.
                </div>
              </div>
            </div>
          }
          title="Aesthetics"
        />

        <ExpandableTile
          color="bg-tAccent4-400 dark:bg-tAccent4-600 text-tAccent4-800 dark:text-tAccent4-100 hover:bg-tAccent4-300 dark:hover:bg-tAccent4-700"
          content={
            <>
              <div className="mb-4 flex flex-col md:flex-row w-full justify-start gap-2">
                <img
                  alt="hotpot-bowl"
                  className="border-default md:max-w-sm"
                  src="/public/images/food/hotpot_bowl.jpg"
                />
                <div className="md:p-4 self-center">
                  I <i>could</i> get a bunch of specific ingredients, or I{" "}
                  <i>could</i> learn to make recipes like hotpot and hummus
                  bagel sandwiches that are very generous with the proteins and
                  veggies included. So now, it's a lot safer to grab the
                  ingredients I crave knowing that I'll find some way to use
                  them all up. And a note on aesthetics: <b>purple hotpot</b>??
                  To die for. Very happy to have discovered that a red cabbage
                  base does that.
                </div>
              </div>
            </>
          }
          title="Consciencious"
        />

        <ExpandableTile
          color="bg-tAccent3-400 dark:bg-tAccent3-600 text-tAccent3-800 dark:text-tAccent3-100 hover:bg-tAccent3-300 dark:hover:bg-tAccent3-700"
          content={
            <div className="flex flex-col">
              <div className="md:p-4">
                I actually have a bit of story on this one. So my main hobby is
                learning Japanese, and I was able to save enough to go on a trip
                to Japan with a friend in October 2023. Amazing time, so much
                fun reading and speaking practice, and I still think about being
                there often even four months later.
              </div>
              <div className="mb-4 flex flex-col md:flex-row w-full justify-start gap-2">
                <div className="md:p-4 self-center">
                  I was especially enthralled by the meal I had at a 旅館
                  (りょかん, ryokan) that showed how fun it was to eat when
                  there's a focus on smaller plates of different items.
                </div>
                <img
                  alt="ryokan-meal"
                  className="border-default md:max-w-sm"
                  src="/public/images/food/ryokan.jpg"
                />
              </div>
              <div className="mb-4 flex flex-col md:flex-row w-full justify-start gap-2">
                <img
                  alt="cat-themed-meal"
                  className="border-default md:max-w-sm"
                  src="/public/images/food/cat_meal.jpg"
                />
                <div className="md:p-4 self-center">
                  Obviously I'd heard of bento boxes, but this concept of a 定食
                  (ていしょく, teishoku) was novel. It makes so much sense to me
                  - I just want a little treat, ideally lots of little treats.
                  And an entire meal based on the idea of little treats? I'm in.
                </div>
              </div>
            </div>
          }
          title="Assembly"
        />
      </div>

      <p>
        I still struggle with pretty much all aspects of being in and around the
        kitchen, but I'm really excited about the progress I've made. I haven't
        even mentioned the tea lattes I've been working on! Point is, something{" "}
        <i>clicked</i> and I'm happy about it.
      </p>
    </div>
  ),
};
