import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon } from "@heroicons/react/outline";
import { themes } from "../util/constants";
import { getThemeCookie, setThemeCookie } from "../util/cookies";

/**
 * The dropdown for theme selection, saving the preference as a cookie
 * @author Addi Penry
 */
export function ThemeSelector() {
  return (
    <div className="flex gap-2 items-baseline w-1/2">
      <label>Theme</label>
      <select
        className="flex-grow py-1 font-sans rounded-md bg-gradient-to-r from-tAccent3-300 to-tAccent3-200 dark:from-tAccent3-600 dark:to-tAccent3-700 focus:outline-none"
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

/**
 * The dropdown for toggling dark mode, saving the preference as a cookie
 * @author Addi Penry
 */
export function DarkModeToggle() {
  const [enabled, setEnabled] = useState(getThemeCookie().darkMode === "dark");

  useEffect(() => {
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
            enabled ? "bg-tAccent1-600" : "bg-tAccent1-200"
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
