import React, { useEffect, useState } from "react";
import {
  Outlet,
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/AboutMe/Work";
import Hobbies from "./pages/AboutMe/Hobbies";
import Images from "./pages/AboutMe/Images";
import Navbar from "./components/Navbar";
import SkullIcon from "./assets/SkullIcon";
import { HandIcon } from "@heroicons/react/outline";
import TabsBanner from "./components/TabsBanner";
import { aboutMeTabs, pDefault } from "./util/constants";
import { getThemeCookie } from "./util/cookies";
import { ArrowUpIcon } from "@heroicons/react/solid";

const App = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const themeCookie = getThemeCookie();
    console.log("initially getting cookie", themeCookie);
    document
      .getElementById("mainHTML")
      .setAttribute("data-theme", themeCookie.themeName);
    document
      .getElementById("mainHTML")
      .setAttribute("class", themeCookie.darkMode);
  }, []);
  const BodyLayout = () => {
    return (
      <div className="max-w-7xl mx-auto px-1 md:px-4">
        <button
          className="fixed top-4 left-4 z-40"
          onClick={() => setOpen(true)}
        >
          <SkullIcon />
        </button>
        <Outlet />
        <button
          className={`fixed bottom-4 [left:50%] z-40 bg-tAccent1-500/40 group hover:bg-tAccent1-700/40 dark:hover:bg-tAccent1-300/40 rounded-full ${
            document.body.scrollTop > 40 ||
            document.documentElement.scrollTop > 40
              ? "block"
              : "none"
          }`}
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        >
          <ArrowUpIcon className="h-8 w-8 text-tAccent3-500 group-hover:text-tAccent3-pop p-1" />
        </button>
      </div>
    );
  };
  const AboutMeLayout = () => (
    <>
      <h1 className="flex items-center justify-center">
        hello there
        <HandIcon className="ml-2 h-8 w-8 text-inherit" />
      </h1>

      <p className={pDefault}>
        I'm Addi, a software developer from the Midwest who landed in NYC and
        finally NC. I have a hodgepodge of interests and hobbies and not enough
        time to tend to them all. I'm a motorcyclist, musician, avid tea
        drinker, and aspiring game developer.
      </p>
      <TabsBanner tabs={aboutMeTabs} />
      <Outlet />
    </>
  );

  return (
    <BrowserRouter>
      <Navbar open={open} onClose={() => setOpen(false)} />
      <Routes>
        <Route path="/" element={<BodyLayout />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMeLayout />}>
            <Route index element={<Navigate to="/about-me/hobbies" />} />
            <Route path="hobbies" element={<Hobbies />} />
            <Route path="work" element={<Work />} />
            <Route path="images" element={<Images />} />
          </Route>
          <Route path="blog" element={<h1 className="h-screen">To Do!</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
