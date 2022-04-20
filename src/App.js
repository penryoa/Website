import React, { useState } from "react";
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
import { aboutMeTabs } from "./util/constants";

const App = () => {
  // const themeHook=useState("navy");
  const [open, setOpen] = useState(false);
  const BodyLayout = () => (
    <div className="max-w-7xl mx-auto px-1 md:px-4 slashed-zero stacked-fractions">
      <button className="fixed top-4 left-4 z-40" onClick={() => setOpen(true)}>
        <SkullIcon />
      </button>
      <Outlet />
    </div>
  );

  const AboutMeLayout = () => (
    <>
      <h1 className="flex items-center justify-center">
        hello there
        <HandIcon className="ml-2 h-8 w-8 text-inherit" />
      </h1>

      <p className="p-4 text-center px-5 bg-tBase-700 rounded-tr-xl rounded-bl-xl">
        I'm Addi, a software developer from Indiana. I like to be on my toes and
        thrown into unfamiliar things, so I moved straight from Indiana to New
        York City out of college. I have a hodgepodge of interests and hobbies
        and not enough time to tend to them all. I'm a motorcyclist, musician,
        avid tea drinker, and aspiring game developer. Cats are pretty great and
        thankfully I have two: Dragon and Mykie (which are featured in pictures
        below, as any animal parent is required to do).
      </p>
      {/* TODO: navbar here */}
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
