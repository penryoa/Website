import _ from "lodash";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../assets/tailwind.config";

export function getTailwindClass(path, defaultValue = "") {
  const fullConfig = resolveConfig(tailwindConfig);
  return _.get(fullConfig, path, defaultValue);
}
