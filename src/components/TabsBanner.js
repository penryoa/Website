import React from "react";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";

function CustomLink({ tab }) {
  let resolved = useResolvedPath(tab.to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={`${
        match
          ? "bg-tAccent3-500"
          : "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-tAccent3-300 hover:to-tAccent3-500 active:text-tAccent3-pop hover:border-tAccent3-400 active:border-tAccent3-pop"
      }  rounded-sm p-2 border-b-2 border-transparent `}
      to={tab.to}
    >
      {tab.title}
    </Link>
  );
}

export default function TabsBanner({ tabs }) {
  const navigator = useNavigate();
  return (
    <>
      <div className="block sm:hidden">
        <select
          className="my-3 py-2 rounded-md text-lg bg-gradient-to-r from-tAccent3-600 to-tAccent3-700 focus:ring-2 ring-tAccent3-400 focus:outline-none w-full"
          onChange={(e) => {
            navigator(e.target.value);
            return "this.size=1; this.blur();";
          }}
          onBlur="this.size=0;"
          onFocus="this.size=9;"
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
            <CustomLink key={`horizontalTabs.${idx}`} tab={tab} />
          ))}
        </div>
      </div>
    </>
  );
}
