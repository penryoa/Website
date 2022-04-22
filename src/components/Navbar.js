import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SparklesIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Flowers_Vert from "../assets/images/navbar_img.png";
import { pages } from "../util/constants";
import { DarkModeToggle, ThemeSelector } from "./ThemeHandlers";

export default function Navbar({ open, onClose }) {
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
                      className="rounded-md text-tBase-900 dark:text-tBase-100 hover:text-tBase-950 dark:hover:text-tBase-50 focus:outline-none"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="bg-tBase-50 dark:bg-tBase-950 pt-6 h-screen px-1 font-heading select-none">
                  <div className="pb-3 flex justify-center items-center gap-3">
                    <span className="text-2xl text-tAccent2-700 dark:text-tAccent2-300 flex items-baseline">
                      ~<SparklesIcon className="h-5 w-5" />
                    </span>
                    <a
                      className="text-4xl text-tAccent1-500 hover:text-tAccent1-700 dark:hover:text-tAccent1-300 fa fa-github"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://github.com/penryoa"
                    >
                      <span className="sr-only">GitHub</span>
                    </a>
                    <h2>addi penry</h2>
                    <a
                      className="text-2xl rounded-md px-1 bg-tAccent1-500 text-tBase-50 dark:text-tBase-950 hover:bg-tAccent1-700 dark:hover:bg-tAccent1-300 fa fa-linkedin"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.linkedin.com/in/addi-penry/"
                    >
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <span className="text-2xl text-tAccent2-700 dark:text-tAccent2-300 flex items-baseline">
                      <SparklesIcon className="h-5 w-5" />~
                    </span>
                  </div>
                  {pages.map((page, idx) => (
                    <Link
                      key={`navBarItem.${idx}`}
                      className="block m-2 p-2 h-8 transition-all bg-gradient-to-r from-tBase-300 dark:from-tBase-700 to-tBase-100 dark:to-tBase-900 overflow-hidden whitespace-nowrap visited:text-inherit hover:text-tAccent3-800 dark:hover:text-tAccent3-200 active:text-tAccent3-pop"
                      to={page.to}
                      onClick={onClose}
                    >
                      {page.title}
                    </Link>
                  ))}

                  <div className="flex flex-wrap gap-2 my-3 justify-evenly">
                    <ThemeSelector />
                    <DarkModeToggle />
                  </div>

                  <span className="block">
                    <img
                      src={Flowers_Vert}
                      alt="vertical flowers"
                      width="100%"
                      className="invert dark:invert-0"
                    />
                  </span>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
