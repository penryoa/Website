import React from "react";
import { withRouter, Link } from "react-router-dom";
import Flowers_Vert from "../assets/images/navbar_img.png";
import Flowers_Horiz from "../assets/images/navbar_small_img.png";

const MyNavbar = ({ isOpen, setOpen }) => {
  return (
    <>
      {isOpen && (
        <div>
          <ul className="nav navbar__list">
            <li
              className="navbar__list_li navbar__list_li_left"
              onClick={() => setOpen(!isOpen)}
            >
              <Link to="/home">Home</Link>
            </li>
            <li
              className="navbar__list_li navbar__list_li_left"
              onClick={() => setOpen(!isOpen)}
            >
              <Link to="/about-me">About Me</Link>
            </li>
            <li
              className="navbar__list_li navbar__list_li_left"
              onClick={() => setOpen(!isOpen)}
            >
              <Link to="/about-site">About This Site</Link>
            </li>
            <li
              className="navbar__list_li navbar__list_li_left"
              onClick={() => setOpen(!isOpen)}
            >
              <Link to="/professional-plug">Education and Skills</Link>
            </li>

            <li>
              <span className="d-none md:d-block">
                <img src={Flowers_Vert} alt="vertical flowers" width="100%" />
              </span>
            </li>

            <li>
              <span className="d-block md:d-none">
                <img
                  src={Flowers_Horiz}
                  alt="horizontal flowers"
                  width="100%"
                />
              </span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default withRouter(MyNavbar);
