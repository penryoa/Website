import React, { useState, useEffect } from "react";
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
    <div className="wrapper">
      <BrowserRouter>
        <div className="sticky w-full bg-3">
          <Hamburger toggled={isOpen} toggle={setOpen} rounded />
        </div>
        <div className="md:flex">
          <div className={isOpen ? "flex-grow-1" : ""}>
            <MyNavbar isOpen={isOpen} setOpen={setOpen} />
          </div>
        </div>
        <Switch>
          <Route exact path="/home">
            <HomeContent />
          </Route>
          <Route exact path="/about-me">
            <AboutMeContent />
          </Route>
          <Route exact path="/about-site">
            <AboutSiteContent />
          </Route>
          <Route exact path="/professional-plug">
            <ResumeContent />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
