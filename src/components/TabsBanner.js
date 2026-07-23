import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

/**
 * A banner of horizontal tabs that collapses to a dropdown when in mobile.
 * NOTE: This will only work if each of the tabs are not parents themselves
 * @param {object} params
 * @param {list} params.tabs
 */
export default function TabsBanner({ tabs }) {
  const navigator = useNavigate();
  const currentPath = useLocation().pathname.split("/").pop();

  return (
    <>
      <div className="block sm:hidden">
        <select
          className="my-3 py-2 rounded-md text-lg bg-gradient-to-r dark:from-fuchsia-600 dark:to-fuchsia-700 from-fuchsia-400 to-fuchsia-300 focus:outline-none w-full"
          onChange={(e) => navigator(e.target.value)}
          value={currentPath}
        >
          {tabs.map((tab, idx) => (
            <option
              key={`dropdownTabs.${idx}`}
              value={tab.to}
              className="dark:bg-red-950 dark:hover:bg-fuchsia-200 bg-red-50 hover:bg-fuchsia-800 checked:bg-fuchsia-500"
            >
              {tab.title}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="py-2 my-4 flex justify-center items-baseline gap-4 bg-red-50/80 dark:bg-red-950/80 rounded-lg">
          {tabs.map((tab, idx) => (
            <Link
              key={`horizontalTabs.${idx}`}
              className={`${
                tab.to === currentPath
                  ? "bg-fuchsia-500"
                  : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-fuchsia-700 dark:hover:from-fuchsia-300 hover:to-fuchsia-500 active:text-fuchsia-500 hover:border-fuchsia-600 dark:hover:border-fuchsia-400 active:border-fuchsia-800"
              }  rounded-sm p-2 border-b-2 border-transparent `}
              to={tab.to}
            >
              {tab.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
