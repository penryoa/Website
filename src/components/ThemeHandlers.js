import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon } from "@heroicons/react/outline";
import { themes } from "../util/constants";
import { getThemeCookie, setThemeCookie } from "../util/cookies";

export function ThemeSelector() {
  return (
    <div className="flex gap-2 items-baseline w-1/2">
      <label>Theme</label>
      <select
        className="flex-grow py-1 font-sans rounded-md bg-gradient-to-r dark:from-tAccent3-600 dark:to-tAccent3-700 from-tAccent3-400 to-tAccent3-300 focus:outline-none"
        defaultValue={getThemeCookie().themeName}
        onChange={(e) => {
          setThemeCookie({ ...getThemeCookie(), themeName: e.target.value });
          document
            .getElementById("mainHTML")
            .setAttribute("data-theme", e.target.value);
        }}
      >
        {themes.map((theme, idx) => (
          <option
            key={`themeDropdown.${idx}`}
            className="dark:bg-tBase-950 dark:hover:bg-tAccent3-200 bg-tBase-50 hover:bg-tAccent3-800 checked:bg-tAccent3-500"
          >
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
}

export function DarkModeToggle() {
  const [enabled, setEnabled] = useState(getThemeCookie().darkMode === "dark");

  useEffect(() => {
    console.log("enabled is now", enabled);
    setThemeCookie({
      ...getThemeCookie(),
      darkMode: enabled ? "dark" : "light",
    });
    document
      .getElementById("mainHTML")
      .setAttribute("class", enabled ? "dark" : "light");
  }, [enabled]);

  return (
    <Switch.Group>
      <div className="flex items-center gap-2">
        <MoonIcon className="h-6 w-6 text-tBase-950 dark:text-tBase-50" />
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-tAccent1-500" : "bg-tAccent1-100"
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none`}
        >
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          ></span>
        </Switch>
      </div>
    </Switch.Group>
  );
}
