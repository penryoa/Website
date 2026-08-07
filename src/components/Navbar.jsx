import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SparklesIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import FlowersVertical from "../assets/svgs/FlowersVertical";
import { pages } from "../util/constants";
import { useDispatch, useSelector } from "react-redux";
import { DarkModeToggle } from "./DarkModeToggle";

/**
 * Customized from Headless UI, this nav bar is a full screen overlay and menu
 * @author Addi Penry, Headless UI
 */
export default function Navbar() {
  // Accessing the Redux store
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.navbar);
  const onClose = () => dispatch({"type":"MENU_TOGGLE"});

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
                      className="rounded-md text-purple-900 dark:text-red-100 hover:text-purple-950 dark:hover:text-red-50 focus:outline-none"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                {/* CUSTOM CODE STARTS HERE */}
                <div className="bg-purple-50 dark:bg-red-950 pt-6 h-screen px-1 font-heading select-none transition-colors duration-600 ease-in-out">
                  <div className="pb-3 flex justify-center items-center gap-3">
                    <span className="text-2xl text-orange-700 dark:text-orange-300 flex items-baseline">
                      ~<SparklesIcon className="h-5 w-5" />
                    </span>
                    <a
                      className="items-baseline"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://github.com/penryoa/Website"
                      >
                      <img src="/images/github.png"  className="h-8 w-8 dark:invert dark:hover:invert-75 invert-0 hover:invert-25" loading="eager" />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <h2>addi penry</h2>
                    <a
                      className="items-baseline"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.linkedin.com/in/addi-penry/"
                      >
                      <img src="/images/linkedin.png"  className="h-8 w-8 dark:invert dark:hover:invert-75 invert-0 hover:invert-25" loading="eager" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <span className="text-2xl text-orange-700 dark:text-orange-300 flex items-baseline">
                      <SparklesIcon className="h-5 w-5" />~
                    </span>
                  </div>
                  {pages.map((page, idx) => (
                    <Link
                      key={`navBarItem.${idx}`}
                      className="block m-2 p-2 h-8 rounded-tl-md rounded-bl-md transition-all bg-linear-to-r from-orange-300 dark:from-orange-700 to-transparent overflow-hidden whitespace-nowrap visited:text-inherit hover:text-fuchsia-800 dark:hover:text-fuchsia-200 active:text-fuchsia-500"
                      to={page.to}
                      onClick={onClose}
                    >
                      {page.title}
                    </Link>
                  ))}
                  <DarkModeToggle />
                  <span className="block">
                    <FlowersVertical />
                  </span>
                </div>
                {/* CUSTOM CODE ENDS HERE */}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
