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

export const aboutMeTiles = [
  {
    title: "music",
    color: 2,
    content: (
      <p>
        Piano is by far my favorite instrument to play. When I was around 7 or
        8, I started playing by ear and never stopped.
        <br />
        I've been singing as long as I can remember as well and grew up in
        different choirs.
        <br />
        My newest instrument is acoustic guitar, which has only been around a
        year or so. Definitely not super skilled, but still enjoying it!
      </p>
    ),
  },
  {
    title: "languages",
    color: 4,
    content: (
      <p>
        I was consistently learning French from 2015 to 2018. I'd love to get
        back into it and take a trip to Canada.
        <br />
        Japanese has been my target language for around two years now, though
        time was impossible to find the first year of studying. My long-term
        goal is to get through at least the JLPT N5 and N4, ideally N3 too.
      </p>
    ),
  },
  {
    title: "motorcycles",
    color: 1,
    content: (
      <p>
        Roxas, my bike, is a 2007 Honda Shadow. I've had him for four years. In
        that time, I've taken plenty of day trips and even some that require
        four or five hours on the road at a time. Highly recommend it.
        <br />
        At one point, I had to take my dad on the back of my bike in the pouring
        rain at night. He had a full gas canister in his lap. I prefer more
        leisurely rides than that.
      </p>
    ),
  },
  {
    content: <img className="h-full" src={Img_Skull} alt="skull" />,
  },
  {
    title: "creativity",
    color: 3,
    content: (
      <p>
        Creativity calms my hyperactive brain. I really like playing with tons
        of different mediums - poems, writing songs, painting, drawing,
        papercraft, coding, world building, and even interior design.
      </p>
    ),
  },
  {
    title: "video games",
    color: 4,
    content: (
      <p>
        Growing up with N64 and Super Nintendo led to an inevitable obsession
        with Nintendo games, especially Zelda. Outside of Nintendo, my games of
        choice are simple: Skyrim, Fallout, Kingdom Hearts, and dabbling
        otherwise. I've watched many more games be played than I've played
        myself honestly, the best ones being Fran Bow and other horror/spooky
        games.
      </p>
    ),
  },
];

export const aboutMeImages = [
  {
    src: Img_Me,
    altText: "just me",
    descText: "Obligatory selfie ft. Dragon perched on my shoulder",
  },
  {
    src: Img_Art_Sun,
    altText: "art - sun and moon",
    descText: "A painting of mine from 2015.",
  },
  {
    src: Img_Mykie,
    altText: "my lil lady Mykie",
    descText:
      "This is Mykie, aka Mykie Lady. \
  Her hobbies include lounging outdoors or by windows. She only lets you know you're giving her \
  too much attention when she is completely annoyed.",
  },
  {
    src: Img_Dragon,
    altText: "my lil boyo Dragon",
    descText:
      "This is Dragon, aka Mr. Dragon. \
  He's a strange guy, sometimes even creepy. His biggest fear is starvation by an empty food bowl.",
  },
  {
    src: Img_Bridges,
    altText: "bridges in NYC",
    descText: "Taken from one of the many scenic waterviews in Manhattan.",
  },
  {
    src: Img_Roxas,
    altText: "my motorcycle Roxas and I",
    descText: "My boy Roxas. He's a stud with that glistening pearl coat.",
  },
  {
    src: Img_Mushrooms,
    altText: "mushrooms",
    descText:
      "Very aesthetically pleasing fly amanita mushrooms in North Carolina",
  },
  {
    src: Img_Cloudy,
    altText: "cloudy NYC",
    descText: "Just a cloudy day in NYC.",
  },
  {
    src: Img_Bird_Bryant,
    altText: "bird in the park",
    descText: "Pigeons are very fun to be around (:",
  },
  {
    src: Img_Mykie_Sink,
    altText: "mykie in the sink",
    descText: "Sometimes you just want to ~sink~ into a deep sleep, amiright?",
  },
  {
    src: Img_Bird_Foot,
    altText: "bird on my foot",
    descText:
      "I can't get over this one - a bird just decided to hang out on my foot while I read! SO CUTE.",
  },
  {
    src: Img_South_Cove,
    altText: "south cove park",
    descText: "Stumbled upon a really neat park in NYC!",
  },
  {
    src: Img_Art_Hand,
    altText: "art - hand of time",
    descText:
      'A painting of mine from 2017. Kind of makes me think of the "hand of time" in a weird way.',
  },
];
