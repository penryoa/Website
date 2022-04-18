import React from "react";

export default function HomeContent() {
  return (
    <div className="h-screen">
      <div className="m-auto max-w-full flex flex-wrap justify-center p-2">
        <h1>welcome!</h1>
        <div className="moon moon-h1" />
      </div>
      <p className="m-2 p-2 bg-tAccent2-400 rounded-sm text-md">
        I'm a software developer based in NYC.
        <br />
        <br />
        This site is kind of my catalogue of things I care about, my own
        projects, my education/experience, and so on. It's always improving and
        growing, so check back if you're ever curious what some 23 year-old
        developer is up to.
        <br />
        <br />
        Explore the menu to see some cool things!
      </p>
      <div className="mt-4 pt-4 border-t border-dashed text-sm">
        Last update: 2021 04 30
      </div>
    </div>
  );
}
