import React, { useState } from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import AboutSiteContent from "./components/AboutSiteContent";
import AboutMeContent from "./components/AboutMeContent";
import ResumeContent from "./components/ResumeContent";
import { Turn as Hamburger } from "hamburger-react";

const App = () => {
  // const themeHook=useState("navy");
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <div className="sticky z-30 w-full bg-black t-0">
          <Hamburger toggled={isOpen} toggle={setOpen} rounded />
        </div>
        <div className="flex flex-wrap justify-start">
          <div
            className={
              "w-full md:w-1/4 sec-collapsed " +
              (isOpen && "sticky self-start z-20 top-12 show md:h-full")
            }
          >
            <MyNavbar isOpen={isOpen} setOpen={setOpen} />
          </div>
          <Switch>
            <Route exact path="/home">
              <div className={"w-full p-1 " + (isOpen && "w-full md:w-3/4")}>
                <HomeContent />
              </div>
            </Route>
            <Route exact path="/about-me">
              <div className={"w-full p-1 " + (isOpen && "w-full md:w-3/4")}>
                <AboutMeContent />
              </div>
            </Route>
            <Route exact path="/about-site">
              <div className={"w-full p-1 " + (isOpen && "w-full md:w-3/4")}>
                <AboutSiteContent />
              </div>
            </Route>
            <Route exact path="/professional-plug">
              <div className={"w-full p-1 " + (isOpen && "w-full md:w-3/4")}>
                <ResumeContent />
              </div>
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
