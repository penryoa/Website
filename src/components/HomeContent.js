import React from "react";

const HomeContent = () => {
  return (
    <div>
      <div className="m-auto max-w-full flex-con flex-center p-2">
        <h1 className="word-carousel carousel-h1">
          <div>
            <ul className="word-flip">
              <li>welcome!</li>
              <li>よろしくね!</li>
              <li>bienvenue!</li>
            </ul>
          </div>
        </h1>
        <div className="moon moon-h1" />
      </div>
      <div className="p-2 bg-5 rounded-md font-lg">
        <p>
          I'm a software developer based in NYC.
          <br />
          <br />
          This site is kind of my catalogue of things I care about, my own
          projects, my education/experience, and so on. It's always improving
          and growing, so check back if you're ever curious what some 23
          year-old developer is up to.
          <br />
          <br />
          Explore the menu to see some cool things!
        </p>
      </div>
      <address>Last update: 2021 04 30</address>
    </div>
  );
};

export default HomeContent;
