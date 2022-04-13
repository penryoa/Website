import React from "react";

export default function HomeContent() {
  return (
    <div>
      <div className="m-auto max-w-full flex flex-wrap justify-center p-2">
        <h1>welcome!</h1>
        <div className="moon moon-h1" />
      </div>
      <div className="p-2 dark bg-primary rounded-md font-lg">
        <p className="bg-accent-3">
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
}
