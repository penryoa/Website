import React from "react";

// TODO: move to db
export const articleMetadata = {
  tags: [3, 6],
  title: "Building My Own Website From Scratch",
  url: "building-my-own-website-from-scratch",
  titleImageClassName: "bg-[url('/public/images/computer.jpg')]",
  writtenBy: "Addi Penry",
  writtenAt: "2022-05-11",
  content: (
    <div className="blog">
      <p>
        In spring of 2020, people were more eager to pay up for toilet paper
        than a freshly graduated computer science student like myself looking
        for a job. Despite applying to different companies as often as I could,
        I wasn't hearing back from anyone (or those who responded explained how
        The Times™ prevented them from taking anyone new).
      </p>
      <p>
        I took an odd route in college and in the job searching process, to be
        fair. I hated how unauthentic it felt to plead to companies that I am
        worth their time, so any applications I put in were sincere. In a
        similar spirit, I refused to apply for internships when I felt I had to
        take time to focus on myself instead.{" "}
        <b>
          I directed my energy towards therapy and grounding myself instead of
          forcing my way through the rigorous learning and socializing that
          would be required of an internship.{" "}
        </b>
        After all, I attended an insanely-challenging and insanely-priced
        private education - one that will leave me in debt for many years to
        come. Wasn't this enough proof that I can handle whatever is thrown at
        me?
      </p>
      <p>
        Knowing that my resume would <i>appear</i> lacking, I decided that the
        best way to show what I am capable of is to provide a thorough example.
        I also wanted to be as realistic as possible in showcasing who I am and
        what I can do. Then it hit me:
      </p>
      <div className="text-center sm:text-lg text-tBase-800 dark:text-tBase-200">
        I should make my own website.
      </div>
      <p>
        I started with just pure Javascript, HTML, and CSS with no supporting
        libraries. Thankfully, I had a Raspberry Pi lying around from my
        Operating Systems course and repurposed it to be a server for my site.
        Lastly, I bought up a domain name I liked and had it port through my Pi.
      </p>
      <p>
        And it was complete! Obviously with many downsides, and very simple, but
        it worked. It sparked a few realizations for me.
      </p>
      <div className="mt-2 flex gap-2 flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/3 p-4 rounded-md text-tAccent1-800 dark:text-tAccent1-200 bg-tAccent1-400 dark:bg-tAccent1-600 hover:bg-tAccent1-300 dark:hover:bg-tAccent1-700">
          Working on the front end is fulfilling and exciting
        </div>
        <div className="w-full md:w-1/3 p-4 rounded-md text-tAccent2-800 dark:text-tAccent2-200 bg-tAccent2-400 dark:bg-tAccent2-600 hover:bg-tAccent2-300 dark:hover:bg-tAccent2-700">
          I'm in the right field for my strengths and interests
        </div>
        <div className="w-full md:w-1/3 p-4 rounded-md text-tAccent3-800 dark:text-tAccent3-200 bg-tAccent3-400 dark:bg-tAccent3-600 hover:bg-tAccent3-300 dark:hover:bg-tAccent3-700">
          Don't underestimate the power of aesthetics
        </div>
      </div>
      <p>
        So if you happen to wonder if it's worth making your own website,
        whether it be for professional or personal reasons, I'd argue that it's
        worth trying at the very least.
      </p>
    </div>
  ),
};
