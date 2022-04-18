import React, { useState } from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import HomeContent from "./pages/HomeContent";
import AboutSiteContent from "./pages/AboutSiteContent";
import AboutMeContent from "./pages/AboutMeContent";
import ResumeContent from "./pages/ResumeContent";
import Navbar from "./components/Navbar";
import SkullIcon from "./assets/SkullIcon";

const App = () => {
  // const themeHook=useState("navy");
  const [open, setOpen] = useState(false);
  const BodyElement = ({ children }) => (
    <div className="max-w-7xl px-1 md:px-4 slashed-zero stacked-fractions">
      {children}
    </div>
  );

  return (
    <>
      <BrowserRouter>
        <button
          className="fixed top-4 left-4 z-40"
          onClick={() => setOpen(true)}
        >
          <SkullIcon />
        </button>
        <Navbar open={open} onClose={() => setOpen(false)} />

        <Switch>
          <Route exact path="/">
            <BodyElement>
              <HomeContent />
            </BodyElement>
          </Route>
          <Route exact path="/about-me">
            <BodyElement>
              <AboutMeContent />
            </BodyElement>
          </Route>
          <Route exact path="/about-site">
            <BodyElement>
              <AboutSiteContent />
            </BodyElement>
          </Route>
          <Route exact path="/professional-plug">
            <BodyElement>
              <ResumeContent />
            </BodyElement>
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
