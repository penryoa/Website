import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { themes } from "../util/constants";

export function ThemeSelector() {
  return (
    <div className="flex gap-1 items-baseline w-1/2">
      <label>Theme</label>
      <select
        className="flex-grow py-1 font-sans rounded-md bg-gradient-to-r dark:from-tAccent3-600 dark:to-tAccent3-700 from-tAccent3-400 to-tAccent3-300 focus:outline-none"
        value={document.getElementById("mainHTML").getAttribute("data-theme")}
        onChange={(e) =>
          document
            .getElementById("mainHTML")
            .setAttribute("data-theme", e.target.value)
        }
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
  const classAttr = document.getElementById("mainHTML").getAttribute("class");
  const [enabled, setEnabled] = useState(classAttr && classAttr === "dark");

  useEffect(() => {
    document
      .getElementById("mainHTML")
      .setAttribute("class", enabled ? "dark" : "");
  }, [enabled]);

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4">Dark Mode</Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
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
