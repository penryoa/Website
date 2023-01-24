import {
  SparklesIcon,
  SunIcon,
  ExclamationIcon,
  MapIcon,
} from "@heroicons/react/outline";
import React from "react";

// TODO: move to db
export const articleMetadata = {
  tags: [5, 6],
  title: "Oops I'm Neurodivergent and Gay at 25 (How TF Did I Not Know?)",
  url: "late-bloomer-everything",
  titleImageClassName: "bg-[url('/public/images/milennium_falcon_paper.jpg')]",
  writtenBy: "Addi Penry",
  writtenAt: "2023-01-22",
  content: (
    <div className="blog">
      <p>
        I wasn't 24 until I was diagnosed with ASD Level 1, ADHD, and anxiety.
        Of course, the only reason I was diagnosed with anything is because I
        saved the money for an evaluation and spent a year researching autism
        before even doing anything about it. Then, one year and one heterosexual
        engagement later, I realized I'm a lesbian. These are huge, obvious
        things now, but as I was coming to terms with them, I would find myself
        asking, "<b>how tf did I not know?</b>"
      </p>

      <p>
        I've spent the entirety of my efforts doing just enough to get by in
        every area of my life up until the past few years. My lack of social
        awareness was alluring to harmful people, my anxiety turned me into a
        people easer*, and I was littered with sensory issues I couldn't always
        fix. I had so many problems that felt like they were mine to fix, as I
        felt very alone in facing them. The core of all my solutions came down
        to a simple tennent:
      </p>
      <div className="py-3 flex justify-center items-center gap-3 text-xl text-tAccent2-700 dark:text-tAccent2-300">
        <span className="flex items-baseline">
          ~<SparklesIcon className="h-5 w-5" />
        </span>
        just ignore your body and mind, because everyone else does too
        <span className="flex items-baseline">
          <SparklesIcon className="h-5 w-5" />~
        </span>
      </div>
      <p>
        It wasn't until a long, complicated discussion with a close friend that
        autism was even a consideration. I explained this huge inner debate of
        Human versus Logical sides. The Human side is all the ways I act in
        front of people to make me well-received, whereas the Logical side is
        how I act inside and when I'm alone. I remember expressing hatred and
        stress for the Logical side, as the other side was so much more fun yet
        costly. My friend suggested that I may be autistic, to which I decided
        is impossible since I can socialize. I didn't consider <i>how</i> I
        socialized to be relevant.
      </p>
      <p>
        I looked into it a few years later, and essentially did a deep-dive into
        it. It was all clicking once I learned about masking, and how women
        especially may learn this coping mechanism. So a year passed, and I
        finally sought and received a diagnosis along with ADHD and anxiety,
        both of which I was kind of considering. Diagnosis to me meant helpful
        resources. I was sick of therapists that couldn't help me even though I
        knew that's what I needed.
      </p>
      <p>
        In the beginning of 2022, I started DBT therapy in a small, autistic
        group led by a local autism-geared clinic. It was the first time I was
        learning basic skills that actually help! Distress tolerance, emotional
        regulation, mindfulness, interpersonal skills -{" "}
        <b>how has no one told me this shit before?</b> I learned so much in
        those 6 months and even started sessions with an individual therapist in
        addition to group therapy.
      </p>
      <div className="mt-2 flex gap-2 flex-wrap md:flex-nowrap">
        <div className="flex flex-col gap-1 align-middle items-center text-center w-full md:w-1/3 p-4 rounded-md text-tAccent1-800 dark:text-tAccent1-200 bg-tAccent1-400 dark:bg-tAccent1-600 hover:bg-tAccent1-300 dark:hover:bg-tAccent1-700">
          <SunIcon className="h-8 w-8" />
          Practicing mindfulness makes it possible to actually listen to what my
          body and mind need
        </div>
        <div className="flex flex-col gap-1 align-middle items-center text-center w-full md:w-1/3 p-4 rounded-md text-tAccent2-800 dark:text-tAccent2-200 bg-tAccent2-400 dark:bg-tAccent2-600 hover:bg-tAccent2-300 dark:hover:bg-tAccent2-700">
          <ExclamationIcon className="h-8 w-8" />
          Distress tolerance skills allow me to stop bad emotions from getting
          out of control
        </div>
        <div className="flex flex-col gap-1 align-middle items-center text-center w-full md:w-1/3 p-4 rounded-md text-tAccent3-800 dark:text-tAccent3-200 bg-tAccent3-400 dark:bg-tAccent3-600 hover:bg-tAccent3-300 dark:hover:bg-tAccent3-700">
          <MapIcon className="h-8 w-8" />
          Emotional regulation preaches the importance of identifying your
          values and aligning your decisions with them
        </div>
      </div>
      <p className="text-tAccent3-600 dark:text-tAccent3-400">
        *people easer: a term I created (as far as I know) that indicates the
        tendency to want social interactions to go smoothly, though not
        necessarily to earn favor. The motivation is to avoid making people
        uncomfortable.
      </p>
    </div>
  ),
};
