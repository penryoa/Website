import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { withRouter, Link } from "react-router-dom";
import Flowers_Vert from "../assets/images/navbar_img.png";
import Flowers_Horiz from "../assets/images/navbar_small_img.png";

function Navbar({ open, onClose }) {
  const pages = [
    { to: "/home", title: "Home" },
    { to: "/about-me", title: "About Me" },
    { to: "/about-site", title: "About Site" },
    { to: "/professional-plug", title: "Education and Skills" },
  ];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-50"
        onClose={onClose}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="-left-100"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-500"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-500"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="pointer-events-auto relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-8 flex pt-4 pl-2 sm:-mr-10 sm:pl-4">
                    <button
                      type="button"
                      className="rounded-md text-tBase-100 hover:text-tBase-50 focus:outline-none"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <ul className="bg-tBase-950 pt-6 h-screen list-none px-1 header-font-family">
                  {pages.map((page, idx) => (
                    <li
                      key={`navBarItem.${idx}`}
                      className="block m-2 p-2 h-8 transition-all bg-gradient-to-r from-tBase-700"
                      onClick={onClose}
                    >
                      <Link
                        className="overflow-hidden whitespace-nowrap visited:text-inherit hover:text-tAccent3-200 active:text-tAccent3-pop"
                        to={page.to}
                      >
                        {page.title}
                      </Link>
                    </li>
                  ))}

                  <li>
                    <span className="hidden md:block">
                      <img
                        src={Flowers_Vert}
                        alt="vertical flowers"
                        width="100%"
                      />
                    </span>
                  </li>

                  <li>
                    <span className="block md:hidden">
                      <img
                        src={Flowers_Horiz}
                        alt="horizontal flowers"
                        width="90%"
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default withRouter(Navbar);
