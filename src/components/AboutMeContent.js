import React from "react";
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
        {/* <img className="img-right" src="../assets/images/me.jpeg" height="100%" width="30%"> */}
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
            <div className="tile__wrap bg-5">
              <div className="tile__description_layer justified">
                <h3>music</h3>
                <p>
                  Piano has been my favorite instrument since I watched a Mars
                  documentary at an IMAX theater on a fieldtrip. A cool piano
                  melody stuck in my head and I've been playing ever since.
                  <br />
                  I've been singing as long as I can remember as well and have
                  pretty much always been involved in a choir.
                  <br />
                  Guitar is my newest flame. It's been fun to learn and weird to
                  build callouses, but so worth it.
                </p>
              </div>
            </div>
            <div className="tile__wrap bg-4">
              <div className="tile__description_layer justified">
                <h3>languages</h3>
                <p>
                  I started learning French about seven years ago and studied
                  for three years. I'm trying to get back into it and take a
                  trip to Canada!
                  <br />
                  Japanese has been my target language for over a year now,
                  though with an intense college schedule, time was hard to
                  find. It's been easier to study now that I'm graduated. My
                  long-term goal is to get through at least the JLPT5 and JLPT4.
                </p>
              </div>
            </div>
            <div className="tile__wrap bg-6">
              <div className="tile__description_layer justified">
                <h3>motorcycles</h3>
                <p>
                  Roxas, my bike, is a 2007 Honda Shadow. I've had him for two
                  years. In that time, I've taken plenty of day trips and
                  visited places even four hours away. Highly recommend it (if
                  you take safety seriously)!
                  <br />
                  At one point, I had to take my dad on the back of my bike in
                  the pouring rain at night. He had a full gas canister in his
                  lap. I prefer more leisurely rides than that.
                </p>
              </div>
            </div>
            <div className="tile__wrap">
              <img src={Img_Skull} alt="skull" height="100%" />
            </div>
            <div className="tile__wrap bg-7">
              <div className="tile__description_layer justified">
                <h3>creativity</h3>
                <p>
                  My left and right brain are both hyperactive most of the time
                  and creative things tend to be the best way to calm either
                  side. I really like playing with tons of different mediums -
                  poems, writing songs, painting, drawing, sculpting,
                  papercraft, and even interior design.
                  <br />
                  Basically, I'm never bored and I highly recommend finding
                  creative outlets! It's a game changer if you find yourself
                  stressed or disconnected from yourself.
                </p>
              </div>
            </div>
            <div className="tile__wrap bg-1">
              <div className="tile__description_layer justified">
                <h3>video games</h3>
                <p>
                  I'm a sucker for Nintendo games. Growing up with N64 and Super
                  Nintendo led to a pretty inevitable obsession with Zelda games
                  especially. Animal Crossing will always be a soft spot for me.
                  <br />
                  Outside of Nintendo, my games of choice are predictable:
                  Skyrim, Fallout, and dabbling otherwise. I've watched many
                  more games be played than I've played myself honestly, the
                  best ones being Fran Bow and other horror/spooky games.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-5 rounded-md">
        <div className="p-1 text-centered">
          <p>Enjoy some random pictures of things that make me smile (:</p>
        </div>
        <div className="flex-con flex-center">
          {/* ROW 1 */}
          <div className="img__wrap">
            <img src={Img_Me} alt="just me" height="100%" />
            <div className="img__description_layer">
              <p className="img__description">
                Obligatory selfie ft. Dragon perched on my shoulder
              </p>
            </div>
          </div>
          <div className="img__wrap">
            <img src={Img_Art_Sun} alt="art - sun and moon" height="100%" />
            <div className="img__description_layer">
              <p className="img__description">A painting of mine from 2015.</p>
            </div>
          </div>
          <div className="img__wrap">
            <img src={Img_Mykie} alt="my lil lady Mykie" height="100%" />
            <div className="img__description_layer">
              <p className="img__description">
                This is Mykie, aka Mykie Lady. Her hobbies include lounging
                outdoors or by windows. She only lets you know you're giving her
                too much attention when she is completely annoyed.
              </p>
            </div>
          </div>
          <div className="img__wrap">
            <img src={Img_Dragon} alt="my lil boyo Dragon" height="100%" />
            <div className="img__description_layer">
              <p className="img__description justified">
                This is Dragon, aka Mr. Dragon. He's a strange guy, sometimes
                even creepy. His biggest fear is starvation by an empty food
                bowl.
              </p>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="img__wrap">
            <img src={Img_Bridges} alt="bridges in NYC" height="100%" />
            <div className="img__description_layer">
              <p className="img__description">
                Taken from one of the many scenic waterviews in Manhattan.
              </p>
            </div>
          </div>
          <div className="img__wrap">
            <img
              src={Img_Roxas}
              alt="my motorcycle Roxas and I"
              height="100%"
            />
            <div className="img__description_layer">
              <p className="img__description">
                My boy Roxas. He's a stud with that glistening pearl coat.
              </p>
            </div>
          </div>
          <div className="img__wrap">
            <img src={Img_Mushrooms} alt="mushrooms" height="100%" />
            <div className="img__description_layer">
              <p className="img__description">
                Very aesthetically pleasing fly amanita mushrooms in North
                Carolina
              </p>
            </div>
          </div>

          {/* ROW 3 */}
          <div className="img__wrap">
            <img src={Img_Cloudy} alt="cloudy NYC" height="100%" />
            <div className="img__description_layer">
              <p className="img__description">Just a cloudy day in NYC.</p>
            </div>
          </div>
          <div className="img__wrap">
            <img src={Img_Bird_Bryant} alt="bird in the park" height="100%" />
            <div className="img__description_layer">
              <p className="img__description">
                Pigeons are very fun to be around (:
              </p>
            </div>
          </div>
          <div className="img__wrap">
            <img src={Img_Mykie_Sink} alt="mykie in the sink" height="100%" />
            <div className="img__description_layer">
              <p className="img__description">
                Sometimes you just want to <b>sink</b> into a deep sleep,
                amiright?
              </p>
            </div>
          </div>

          {/* ROW 4 */}
          <div className="img__wrap">
            <img src={Img_Bird_Foot} alt="bird on my foot" height="100%" />
            <div className="img__description_layer">
              <p className="img__description">
                I can't get over this one - a bird just decided to hang out on
                my foot while I read! SO CUTE.
              </p>
            </div>
          </div>
          <div className="img__wrap">
            <img
              src={Img_South_Cove}
              alt="yet another water photo"
              height="100%"
            />
            <div className="img__description_layer">
              <p className="img__description">
                Stumbled upon a really neat park in NYC!
              </p>
            </div>
          </div>
          <div className="img__wrap">
            <img src={Img_Art_Hand} alt="art - hand of time" height="100%" />
            <div className="img__description_layer">
              <p className="img__description">
                A painting of mine from 2017. Kind of makes me think of the
                "hand of time" in a weird way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeContent;
