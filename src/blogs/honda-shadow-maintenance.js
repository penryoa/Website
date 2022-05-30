import React from "react";

// TODO: move to db
export const articleMetadata = {
  tags: [8],
  title: "Honda Shadow Maintenance",
  url: "honda-shadow-maintenance",
  titleImageClassName: "bg-[url('/public/images/motorcycle/cover.jpg')]",
  writtenBy: "Addi Penry",
  writtenAt: "2022-05-30",
  content: (
    <div className="blog">
      <p>
        My bike Roxas is a 2007 Honda Shadow. As you may see in the cover photo,
        I've done his windshield the honor of having some cat stickers and the
        best sticker I've been gifted: a D20 with an ass.
      </p>
      <p>
        He spent a year in storage when I was in NYC, then I was busy moving,
        and then it was winter! So he's not gotten the care he's needed.
        Thankfully, my partner and I got him purring again.
      </p>

      <h1>Jumping the Battery</h1>
      <p>
        The main issue I had to fix is the battery needing a jump. I'd replaced
        it a year prior, so he just needs a good startle to get him going again.
      </p>
      <h2>Tools</h2>
      <div className="bg-[url('/public/images/motorcycle/tools.jpg')] [background-size:75%] md:[background-size:30%] mb-10">
        <ul className="star px-4 py-6 bg-tAccent1-300/80 dark:bg-tAccent1-700/80 md:columns-2">
          <li>Rachet</li>
          <li>T40 socket</li>
          <li>
            Jump starter with cables (TACKLIFE T8 800A Peak 18000mAh Car Jump
            Starter)
          </li>
        </ul>
      </div>

      <div className="mb-4 flex flex-col md:flex-row w-full justify-end border-2 border-default border-tAccent3-400 bg-tAccent3-300/50 dark:border-tAccent3-600 dark:bg-tAccent3-700/50">
        <div className="p-6 text-center my-auto w-full ">
          <h2>1. Move the bike out in the open so the fumes won't kill you</h2>
          <p>
            Hopefully this is a given, but if it wasn't pointed out to me, my
            dumbass would've forgotten and had a Sabrina moment.
          </p>
        </div>
        <a
          href="https://www.youtube.com/watch?v=NOl03RP2Fck"
          rel="noreferrer noopener"
          target="_blank"
          alt="Remove bike seat"
        >
          <img
            className="border-default md:max-w-sm"
            src="/public/images/motorcycle/sabrina.gif"
          />
        </a>
      </div>

      <div className="mb-4 flex flex-col md:flex-row-reverse w-full justify-end border-2 border-default border-tAccent1-400 bg-tAccent1-300/50 dark:border-tAccent1-600 dark:bg-tAccent1-700/50">
        <div className="p-6 text-center my-auto w-full ">
          <h2>2. Take off the seat</h2>
          <p>
            Using the T40 socket, take off the screws on either side of the
            seat. The seat itself is wedged in kind of oddly, so you may have to
            work with it.
          </p>
        </div>
        <img
          alt="Remove bike seat"
          className="border-default md:max-w-sm"
          src="/public/images/motorcycle/battery2.jpg"
        />
      </div>

      <div className="mb-4 flex flex-col md:flex-row w-full justify-start border-2 border-default border-tAccent4-400 bg-tAccent4-300/50 dark:border-tAccent4-600 dark:bg-tAccent4-700/50">
        <div className="p-6 text-center my-auto w-full ">
          <h2>3. Access the battery</h2>
          <p>
            The battery is underneath this little tray, so we just kinda flopped
            it over the side of the bike for the time being.
          </p>
        </div>
        <img
          alt="Access the battery"
          className="border-default md:max-w-sm"
          src="/public/images/motorcycle/battery3.jpg"
        />
      </div>

      <div className="mb-4 flex flex-col md:flex-row-reverse w-full justify-end border-2 border-default border-tAccent3-400 bg-tAccent3-300/50 dark:border-tAccent3-600 dark:bg-tAccent3-700/50">
        <div className="p-6 text-center my-auto w-full ">
          <h2>4. Attach the jumper cables and go!</h2>
          <p className="italic">
            (On Roxas in particular, the spot where you attach the red cable is
            really finnicky. Good luck lol.)
          </p>
          <p>
            Once the cables are attached, it's as simple as turning the bike's
            power on, then running the jump starter while trying to start up the
            bike. Once the bike is going for ~10 sec, remove the cables and pull
            out the choke to ensure the bike won't immediately die. At this
            point, I'd recommend stradding the bike to be more comfortable while
            continuing to rev the engine.
          </p>
          <p>
            We kept it running for ~10 min overall (~3-4 min with choke out),
            revving the engine every ~10 sec.
          </p>
        </div>
        <img
          alt="Attach jumper cables"
          className="border-default md:max-w-sm"
          src="/public/images/motorcycle/battery1.jpg"
        />
      </div>

      <div className="mb-4 w-full border-2 border-default border-tAccent2-400 bg-tAccent2-300/50 dark:border-tAccent2-600 dark:bg-tAccent2-700/50">
        <div className="p-6 text-center my-auto w-full">
          <h2>
            5. When all seems well, you're safe to turn the bike off and
            reassemble. You're done!
          </h2>
        </div>
      </div>

      <h1>"Bleeding" the Brakes</h1>
      <p>
        Once my bike was going, I eagerly started riding it out. I very quickly
        noticed the front brakes were out, though thankfully, the back brake was
        fine. So I had to bleed the brakes, as torturous as that sounds. The
        only thing "bleeding" is the brake fluid though, so don't worry.
      </p>
      <h2>Tools</h2>
      <div className="bg-[url('/public/images/motorcycle/tools.jpg')] [background-size:75%] md:[background-size:30%] mb-10">
        <ul className="star px-4 py-6 bg-tAccent1-300/80 dark:bg-tAccent1-700/80 md:columns-2">
          <li>Philips screwdriver</li>
          <li>Rubber hose</li>
          <li>Bottle</li>
          <li>Block of wood</li>
          <li>Brake fluid (DOT 4)</li>
          <li>(Optional) Twist ties</li>
        </ul>
      </div>

      <div className="mb-4 flex flex-col md:flex-row-reverse w-full justify-end border-2 border-default border-tAccent1-400 bg-tAccent1-300/50 dark:border-tAccent1-600 dark:bg-tAccent1-700/50">
        <div className="p-6 text-center my-auto w-full ">
          <h2>1. Prop The Bike Up</h2>
          <p>Use a piece of wood to prop the bike up a bit.</p>
        </div>
        <img
          alt="Bike standing up"
          className="border-default md:max-w-sm"
          src="/public/images/motorcycle/brakes5.jpg"
        />
      </div>

      <div className="mb-4 flex flex-col md:flex-row w-full justify-start border-2 border-default border-tAccent4-400 bg-tAccent4-300/50 dark:border-tAccent4-600 dark:bg-tAccent4-700/50">
        <div className="p-6 text-center my-auto w-full ">
          <h2>
            2. Remove the rubber cap from the brake caliber on the front wheel
          </h2>
          <p>
            It's also pretty oily, so using gloves or a cloth isn't a bad idea.
            Pops off, not twist.
          </p>
        </div>
        <img
          alt="Remove brake cap"
          className="border-default md:max-w-sm"
          src="/public/images/motorcycle/brakes1.jpg"
        />
      </div>

      <div className="mb-4 flex flex-col md:flex-row w-full justify-start border-2 border-default border-tAccent3-400 bg-tAccent3-300/50 dark:border-tAccent3-600 dark:bg-tAccent3-700/50">
        <div className="p-6 text-center my-auto w-full ">
          <h2>
            3. Attach one end of the rubber hose to the brake caliber and have
            the other end pour into a bottle/bucket
          </h2>
          <p>I found I had to use some extra fasteners to keep it steady.</p>
        </div>
        <img
          alt="Attach hose"
          className="border-default md:max-w-sm"
          src="/public/images/motorcycle/brakes4.jpg"
        />
      </div>

      <div className="mb-4 flex flex-col md:flex-row-reverse w-full justify-end border-2 border-default border-tAccent2-400 bg-tAccent2-300/50 dark:border-tAccent2-600 dark:bg-tAccent2-700/50">
        <div className="p-6 text-center my-auto w-full ">
          <h2>
            4. Remove the lid from the brake fluid reservoir (by the front
            brake)
          </h2>
          <p>Use the Philips screwdriver. Pretty self-explanatory. (:</p>
        </div>
        <img
          alt="Remove lid"
          className="border-default md:max-w-sm"
          src="/public/images/motorcycle/brakes3.jpg"
        />
      </div>

      <div className="mb-4 flex flex-col md:flex-row w-full justify-start border-2 border-default border-tAccent1-400 bg-tAccent1-300/50 dark:border-tAccent1-600 dark:bg-tAccent1-700/50">
        <div className="p-6 text-center my-auto w-full ">
          <h2>5. Actually bleed the brakes</h2>
          <p>
            The goal here is to swap out all of the brake fluid as needed until
            the brakes are back in action, or in other words, until the front
            brake has consistent resistance.
          </p>
          <p>
            Loosen the nut on the brake fluid drain so the fluid can move
            through. Rapidly pump the front break to build pressure until you
            meet resistance. Then pull the brake in tightly and smoothly. Pour
            in brake fluid to its container as the old is flushed out.
          </p>
        </div>
        <img
          alt="Attach tubes"
          className="border-default md:max-w-sm"
          src="/public/images/motorcycle/brakes2.jpg"
        />
      </div>

      <div className="mb-4 w-full border-2 border-default border-tAccent3-400 bg-tAccent3-300/50 dark:border-tAccent3-600 dark:bg-tAccent3-700/50">
        <div className="p-6 text-center my-auto w-full">
          <h2>
            6. Replace the brake fluid lid and rubber cap on the front wheel.
            You're done!
          </h2>
        </div>
      </div>

      <h1>Bonus: Breaking Into Your House</h1>
      <p>
        In our eagerness to give him a go, we locked the doors to the house and
        took off! All went swimmingly until we got back and realized neither of
        us had grabbed our keys. So if possible, remember to take your keys with
        you <i>before</i> locking the doors and leaving. Otherwise, you'll have
        to do this optional step as we did.
      </p>
    </div>
  ),
};
