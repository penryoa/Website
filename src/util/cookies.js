/**
 * Saves the new theme and mode preferences as cookies
 * @author Addi Penry
 * @param {object} params
 * @param {string} params.themeName the name of the theme
 * @param {string} params.darkMode the dark mode selection, "dark" or "light"
 */
export function setThemeCookie({ themeName, darkMode }) {
  document.cookie = `themeName=${themeName}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
  document.cookie = `darkMode=${darkMode}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}

/**
 * Gets the theme from the saved cookies
 * @author Addi Penry
 */
export function getThemeCookie() {
  const myTheme = { themeName: "hydrangeas", darkMode: "dark" };
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf("themeName=") === 0) {
      myTheme.themeName = c.substring("themeName=".length, c.length);
    }
    if (c.indexOf("darkMode=") === 0) {
      myTheme.darkMode = c.substring("darkMode=".length, c.length);
    }
  }
  return myTheme;
}
