import React from "react";
import Img_Michi from "../assets/images/michi.JPG";
import Img_Me from "../assets/images/me.jpeg";
import Img_Art_Sun from "../assets/images/art_sun-n-moon.jpg";
import Img_Dragon from "../assets/images/creepy_dragon.JPEG";
import Img_Art_Hand from "../assets/images/art_hand.jpg";
import Img_Window from "../assets/images/brooklyn_window.jpg";
import Img_Mykie from "../assets/images/cute_mykie.JPG";
import Img_Art_Flowers from "../assets/images/art_flowers.jpg";
import Img_Roxas from "../assets/images/RoxasAndMeBeech.JPG";

const AboutMeContent = () => {
  return (
    <>
      <div class="container rel">
        <div class="bg-black">
          <img
            class="bg-img display-block max-w-1250-px"
            src={Img_Michi}
            alt="aesthetic hamster background"
            width="100%"
          />
        </div>
        <h1 class="my-centered">about me</h1>
      </div>

      <div class="bg-5">
        <div class="flex-con flex-center padded">
          <h2>
            hello, bienvenue, and <b>こんにちは!</b>
          </h2>
          {/* <img class="img-right" src="../assets/images/me.jpeg" height="100%" width="30%"> */}
          <div class="justified">
            <p>
              I'm Addi, a software developer from Indiana. I like to be on my
              toes and thrown into unfamiliar things, so I moved straight from
              Indiana to New York City out of college. I have a hodgepodge of
              interests and hobbies and not enough time to tend to them all. I'm
              a motorcyclist, musician, avid tea drinker, and aspiring game
              developer. Cats are pretty great and thankfully I have two: Dragon
              and Mykie (which are featured in pictures below, as any animal
              parent is required to do).
            </p>
          </div>
        </div>
      </div>

      <div class="flex-con flex-center auto-margin">
        <div class="tile__wrap bg-5">
          <div class="tile__description_layer justified">
            <h3>music</h3>
            <p>
              Piano has been my favorite instrument since I watched a Mars
              documentary at an IMAX theater on a fieldtrip. A cool piano melody
              stuck in my head and I've been playing ever since.
              <br />
              I've been singing as long as I can remember as well and have
              pretty much always been involved in a choir.
              <br />
              Guitar is my newest flame. It's been fun to learn and weird to
              build callouses, but so worth it.
            </p>
          </div>
        </div>
        <div class="tile__wrap bg-4">
          <div class="tile__description_layer justified">
            <h3>languages</h3>
            <p>
              I started learning French about seven years ago and studied for
              three years. I'm trying to get back into it and take a trip to
              Canada!
              <br />
              Japanese has been my target language for over a year now, though
              with an intense college schedule, time was hard to find. It's been
              easier to study now that I'm graduated. My long-term goal is to
              get through at least the JLPT5 and JLPT4.
            </p>
          </div>
        </div>
        <div class="tile__wrap bg-6">
          <div class="tile__description_layer justified">
            <h3>motorcycles</h3>
            <p>
              Roxas, my bike, is a 2007 Honda Shadow. I've had him for two
              years. In that time, I've taken plenty of day trips and visited
              places even four hours away. Highly recommend it (if you take
              safety seriously)!
              <br />
              At one point, I had to take my dad on the back of my bike in the
              pouring rain at night. He had a full gas canister in his lap. I
              prefer more leisurely rides than that.
            </p>
          </div>
        </div>
        <div class="tile__wrap bg-7">
          <div class="tile__description_layer justified">
            <h3>creativity</h3>
            <p>
              My left and right brain are both hyperactive most of the time and
              creative things tend to be the best way to calm either side. I
              really like playing with tons of different mediums - poems,
              writing songs, painting, drawing, sculpting, papercraft, and even
              interior design.
              <br />
              Basically, I'm never bored and I highly recommend finding creative
              outlets! It's a game changer if you find yourself stressed or
              disconnected from yourself.
            </p>
          </div>
        </div>
        <div class="tile__wrap bg-1">
          <div class="tile__description_layer justified">
            <h3>video games</h3>
            <p>
              I'm a sucker for Nintendo games. Growing up with N64 and Super
              Nintendo led to a pretty inevitable obsession with Zelda games
              especially. Animal Crossing will always be a soft spot for me.
              <br />
              Outside of Nintendo, my games of choice are predictable: Skyrim,
              Fallout, and dabbling otherwise. I've watched many more games be
              played than I've played myself honestly, the best ones being Fran
              Bow and other horror/spooky games.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-5">
        <div class="padded centered-h">
          <p>Enjoy some random pictures of cats, art, and so on. (:</p>
        </div>
        <div class="flex-con flex-center">
          <div class="img__wrap">
            <img src={Img_Me} alt="just me" height="100%" />
            <div class="img__description_layer">
              <p class="img__description">'Tis little old me.</p>
            </div>
          </div>
          <div class="img__wrap">
            <img src={Img_Art_Sun} alt="art - sun and moon" height="100%" />
            <div class="img__description_layer">
              <p class="img__description">A painting of mine from 2015.</p>
            </div>
          </div>
          <div class="img__wrap">
            <img src={Img_Dragon} alt="my lil boyo Dragon" height="100%" />
            <div class="img__description_layer">
              <p class="img__description justified">
                This is Dragon, aka Mr. Dragon. He's a strange guy, sometimes
                even creepy. His biggest fear is starvation by an empty food
                bowl.
              </p>
            </div>
          </div>
          <div class="img__wrap">
            <img src={Img_Art_Hand} alt="art - hand of time" height="100%" />
            <div class="img__description_layer">
              <p class="img__description">
                A painting of mine from 2017. Kind of makes me think of the
                "hand of time" in a weird way.
              </p>
            </div>
          </div>
          <div class="img__wrap">
            <img src={Img_Window} alt="view from brooklyn apt" height="100%" />
            <div class="img__description_layer">
              <p class="img__description">
                I moved to Brooklyn and the cats have loved the open windows!
              </p>
            </div>
          </div>
          <div class="img__wrap">
            <img src={Img_Mykie} alt="my lil lady Mykie" height="100%" />
            <div class="img__description_layer">
              <p class="img__description">
                This is Mykie, aka Mykie Lady. Her hobbies include lounging
                outdoors or by windows. She only lets you know you're giving her
                too much attention when she is completely annoyed.
              </p>
            </div>
          </div>
          <div class="img__wrap">
            <img
              src={Img_Art_Flowers}
              alt="art - simple flowers"
              height="100%"
            />
            <div class="img__description_layer">
              <p class="img__description">Just some flowers I painted. :)</p>
            </div>
          </div>
          <div class="img__wrap">
            <img
              src={Img_Roxas}
              alt="my motorcycle Roxas and I"
              height="100%"
            />
            <div class="img__description_layer">
              <p class="img__description">
                My boy Roxas. He's a stud with that glistening pearl coat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeContent;
