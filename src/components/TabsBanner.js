import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function TabsBanner({ tabs }) {
  // NOTE: This will only work if each of the child tabs are not parents themselves
  const navigator = useNavigate();
  const currentPath = useLocation().pathname.split("/").pop();

  return (
    <>
      <div className="block sm:hidden">
        <select
          className="my-3 py-2 rounded-md text-lg bg-gradient-to-r from-tAccent3-600 to-tAccent3-700 focus:ring-2 ring-tAccent3-400 focus:outline-none w-full"
          onChange={(e) => navigator(e.target.value)}
          value={currentPath}
        >
          {tabs.map((tab, idx) => (
            <option
              key={`dropdownTabs.${idx}`}
              value={tab.to}
              className="bg-tBase-950 hover:bg-tAccent3-200 checked:bg-tAccent3-500"
            >
              {tab.title}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="py-2 my-4 flex justify-center items-baseline gap-4 bg-tBase-950/80 rounded-lg">
          {tabs.map((tab, idx) => (
            <Link
              key={`horizontalTabs.${idx}`}
              className={`${
                tab.to === currentPath
                  ? "bg-tAccent3-500"
                  : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-tAccent3-300 hover:to-tAccent3-500 active:text-tAccent3-pop hover:border-tAccent3-400 active:border-tAccent3-pop"
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
