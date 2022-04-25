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

const App = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("new cookie", document.cookie);
    document
      .getElementById("mainHTML")
      .setAttribute("data-theme", getThemeCookie().themeName);
    document
      .getElementById("mainHTML")
      .setAttribute("class", getThemeCookie().darkMode ? "dark" : "");
  }, []);
  const BodyLayout = () => {
    return (
      <div className="max-w-7xl mx-auto px-1 md:px-4 slashed-zero stacked-fractions">
        <button
          className="fixed top-4 left-4 z-40"
          onClick={() => setOpen(true)}
        >
          <SkullIcon />
        </button>
        <Outlet />
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
