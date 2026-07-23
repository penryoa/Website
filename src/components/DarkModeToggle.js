import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon } from "@heroicons/react/outline";
import { themes } from "../util/constants";
import { useDispatch, useSelector } from "react-redux";

/**
 * The dropdown for toggling dark mode, saving the preference as a cookie
 * @author Addi Penry
 */
export function DarkModeToggle() {
	// Accessing the Redux store
	const dispatch = useDispatch();
	const { darkModeEnabled } = useSelector((state) => state.darkMode);
	const toggleDarkMode = () => dispatch({"type":"DARK_TOGGLE"});

  useEffect(() => {
		document
			.getElementById("mainHTML")
			.setAttribute("class", darkModeEnabled ? "dark" : "light");
  }, [darkModeEnabled]);

  return (
    <Switch.Group>
      <div className="flex items-center gap-2">
        <MoonIcon className="h-6 w-6 text-red-950 dark:text-red-50" />
        <Switch
          checked={darkModeEnabled}
          onChange={toggleDarkMode}
          className={`${
            darkModeEnabled ? "bg-purple-600" : "bg-purple-200"
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none`}
        >
          <span
            className={`${
              darkModeEnabled ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          ></span>
        </Switch>
      </div>
    </Switch.Group>
  );
}