import React from "react";
import { withRouter, Link } from "react-router-dom";
import Flowers_Vert from "../assets/images/navbar_img.png";
import Flowers_Horiz from "../assets/images/navbar_small_img.png";

const MyNavbar = ({ isOpen, setOpen }) => {
  const pages = [
    { to: "/home", title: "Home" },
    { to: "/about-me", title: "About Me" },
    { to: "/about-site", title: "About Site" },
    { to: "/professional-plug", title: "Education and Skills" },
  ];

  return (
    <>
      {isOpen && (
        <div>
          <ul className="bg-secondary [margin-block-start:0] [margin-block-end:0] h-screen navbar__list">
            {pages.map((page, idx) => (
              <li
                key={`navBarItem.${idx}`}
                className="navbar__list_li"
                onClick={() => setOpen(!isOpen)}
              >
                <Link to={page.to}>{page.title}</Link>
              </li>
            ))}

            <li>
              <span className="hidden md:block">
                <img src={Flowers_Vert} alt="vertical flowers" width="100%" />
              </span>
            </li>

            <li>
              <span className="block md:hidden">
                <img src={Flowers_Horiz} alt="horizontal flowers" width="90%" />
              </span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default withRouter(MyNavbar);
