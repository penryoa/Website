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
        <div className="sticky z-11 w-full bg-true-black t-0">
          <Hamburger toggled={isOpen} toggle={setOpen} rounded />
        </div>
        <div className="flex-con flex-start">
          <div
            className={
              "w-full md:w-1/4 sec-collapsed " +
              (isOpen && "sticky flex-sticky z-10 t-50 show md:h-full")
            }
          >
            <MyNavbar isOpen={isOpen} setOpen={setOpen} />
          </div>
          <Switch>
            <Route exact path="/home">
              <div className={"p-1 " + (isOpen && "w-full md:w-3/4")}>
                <HomeContent />
              </div>
            </Route>
            <Route exact path="/about-me">
              <div className={"p-1 " + (isOpen && "w-full md:w-3/4")}>
                <AboutMeContent />
              </div>
            </Route>
            <Route exact path="/about-site">
              <div className={"p-1 " + (isOpen && "w-full md:w-3/4")}>
                <AboutSiteContent />
              </div>
            </Route>
            <Route exact path="/professional-plug">
              <div className={"p-1 " + (isOpen && "w-full md:w-3/4")}>
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
