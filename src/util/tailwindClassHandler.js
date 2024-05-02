import _ from "lodash";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../assets/tailwind.config.js";

/**
 * Grabs the value of a specific Tailwind setting.
 * Because I use custom themes, this was required to get an SVG drawing working.
 * @author Addi Penry
 * @param {string} path the path of the Tailwind variable
 * @param {string} defaultValue the default value to use in case the path cannot be found
 */
export function getTailwindClass(path, defaultValue = "") {
  const fullConfig = resolveConfig(tailwindConfig);
  return _.get(fullConfig, path, defaultValue);
}
