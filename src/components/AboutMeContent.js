import React from "react";
import { SquareTile, ImageTile } from "./Tiles";
import Img_Skull from "../assets/images/skull_transparent_bg.png";
import Img_Me from "../assets/images/mother_of_dragon.jpg";
import Img_Art_Sun from "../assets/images/art_sun-n-moon.jpg";
import Img_Dragon from "../assets/images/creepy_dragon.JPEG";
import Img_Art_Hand from "../assets/images/art_hand.jpg";
import Img_Cloudy from "../assets/images/cloudy_nyc.jpg";
import Img_Mykie from "../assets/images/cute_mykie.JPG";
import Img_Mushrooms from "../assets/images/mushrooms.jpg";
import Img_Roxas from "../assets/images/RoxasAndMeBeech.JPG";
import Img_Bridges from "../assets/images/bridges_nyc.jpg";
import Img_South_Cove from "../assets/images/south_cove.jpg";
import Img_Mykie_Sink from "../assets/images/mykie_sink.jpg";
import Img_Bird_Bryant from "../assets/images/bird_in_bryant.jpg";
import Img_Bird_Foot from "../assets/images/bird_on_foot.jpg";

const AboutMeContent = () => {
  return (
    <>
      <div className="m-auto max-w-full flex-con flex-center">
        <h2 className="word-carousel carousel-h2">
          <div>
            <ul className="word-flip">
              <li>hello～</li>
              <li>こんにちは～</li>
              <li>bonjour～</li>
            </ul>
          </div>
        </h2>
        <div className="moon moon-h2" />
      </div>

      <div className="chevron">
        <div className="p-1 rel z-1 text-center px-5">
          <p>
            I'm Addi, a software developer from Indiana. I like to be on my toes
            and thrown into unfamiliar things, so I moved straight from Indiana
            to New York City out of college. I have a hodgepodge of interests
            and hobbies and not enough time to tend to them all. I'm a
            motorcyclist, musician, avid tea drinker, and aspiring game
            developer. Cats are pretty great and thankfully I have two: Dragon
            and Mykie (which are featured in pictures below, as any animal
            parent is required to do).
          </p>
        </div>
      </div>

      <div className="py-2">
        <div className="max-w-md m-auto">
          <div className="flex-con flex-center m-auto">
            <SquareTile
              title="music"
              content={
                <p>
                  Piano is by far my favorite instrument to play. When I was
                  around 7 or 8, I started playing by ear and never stopped.
                  <br />
                  I've been singing as long as I can remember as well and grew
                  up in different choirs.
                  <br />
                  My newest instrument is acoustic guitar, which has only been
                  around a year or so. Definitely not super skilled, but still
                  enjoying it!
                </p>
              }
              bg_color={5}
            />

            <SquareTile
              title="languages"
              content={
                <p>
                  I started learning French about eight years ago and studied
                  for three years. I'd love to get back into it and take a trip
                  to Canada!
                  <br />
                  Japanese has been my target language for around two years now,
                  though time was impossible to find the first year of studying.
                  My long-term goal is to get through at least the JLPT N5 and
                  N4, ideally even N3.
                </p>
              }
              bg_color={4}
            />

            <SquareTile
              title="motorcycles"
              content={
                <p>
                  Roxas, my bike, is a 2007 Honda Shadow. I've had him for three
                  years. In that time, I've taken plenty of day trips and even
                  some that require four or five hours on the road at a time.
                  Highly recommend it.
                  <br />
                  At one point, I had to take my dad on the back of my bike in
                  the pouring rain at night. He had a full gas canister in his
                  lap. I prefer more leisurely rides than that.
                </p>
              }
              bg_color={6}
            />

            <div className="tile__wrap">
              <img src={Img_Skull} alt="skull" height="100%" />
            </div>

            <SquareTile
              title="creativity"
              content={
                <p>
                  My left and right brain are both hyperactive most of the time
                  and creative things tend to be the best way to calm either
                  side. I really like playing with tons of different mediums -
                  poems, writing songs, painting, drawing, papercraft, coding,
                  world building, and even interior design.
                </p>
              }
              bg_color={7}
            />

            <SquareTile
              title="video games"
              content={
                <p>
                  I'm a sucker for Nintendo games. Growing up with N64 and Super
                  Nintendo led to a pretty inevitable obsession with Zelda games
                  especially. Outside of Nintendo, my games of choice are
                  simple: Skyrim, Fallout, Kingdom Hearts, and dabbling
                  otherwise. I've watched many more games be played than I've
                  played myself honestly, the best ones being Fran Bow and other
                  horror/spooky games.
                </p>
              }
              bg_color={1}
            />
          </div>
        </div>
      </div>

      <div className="cool_bg soft-border rounded-md">
        <div className="p-1 text-centered">
          <p>Enjoy some random pictures of things that make me smile (:</p>
        </div>
        <div className="flex-con flex-center">
          {/* ROW 1 */}
          <ImageTile
            img_src={Img_Me}
            alt_text="just me"
            desc_text="Obligatory selfie ft. Dragon perched on my shoulder"
          />
          <ImageTile
            img_src={Img_Art_Sun}
            alt_text="art - sun and moon"
            desc_text="A painting of mine from 2015."
          />
          <ImageTile
            img_src={Img_Mykie}
            alt_text="my lil lady Mykie"
            desc_text="This is Mykie, aka Mykie Lady. Her hobbies include lounging
            outdoors or by windows. She only lets you know you're giving her
            too much attention when she is completely annoyed."
          />
          <ImageTile
            img_src={Img_Dragon}
            alt_text="my lil boyo Dragon"
            desc_text="This is Dragon, aka Mr. Dragon. He's a strange guy, sometimes
            even creepy. His biggest fear is starvation by an empty food
            bowl."
          />

          {/* ROW 2 */}
          <ImageTile
            img_src={Img_Bridges}
            alt_text="bridges in NYC"
            desc_text="Taken from one of the many scenic waterviews in Manhattan."
          />
          <ImageTile
            img_src={Img_Roxas}
            alt_text="my motorcycle Roxas and I"
            desc_text="My boy Roxas. He's a stud with that glistening pearl coat."
          />
          <ImageTile
            img_src={Img_Mushrooms}
            alt_text="mushrooms"
            desc_text="Very aesthetically pleasing fly amanita mushrooms in North
        Carolina"
          />

          {/* ROW 3 */}
          <ImageTile
            img_src={Img_Cloudy}
            alt_text="cloudy NYC"
            desc_text="Just a cloudy day in NYC."
          />
          <ImageTile
            img_src={Img_Bird_Bryant}
            alt_text="bird in the park"
            desc_text="Pigeons are very fun to be around (:"
          />
          <ImageTile
            img_src={Img_Mykie_Sink}
            alt_text="mykie in the sink"
            desc_text="Sometimes you just want to ~sink~ into a deep sleep,
        amiright?"
          />

          {/* ROW 4 */}
          <ImageTile
            img_src={Img_Bird_Foot}
            alt_text="bird on my foot"
            desc_text="I can't get over this one - a bird just decided to hang out on
        my foot while I read! SO CUTE."
          />
          <ImageTile
            img_src={Img_South_Cove}
            alt_text="south cove park"
            desc_text="Stumbled upon a really neat park in NYC!"
          />
          <ImageTile
            img_src={Img_Art_Hand}
            alt_text="art - hand of time"
            desc_text='A painting of mine from 2017. Kind of makes me think of the
        "hand of time" in a weird way.'
          />
        </div>
      </div>
    </>
  );
};

export default AboutMeContent;
