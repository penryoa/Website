# How to Make Your Own Theme!

## Colors

All you need for making a new theme is one base color and four accent colors. These are defined as:

- tBase, the range of base colors that make up the main background and the occasional supporting piece. This goes from 50 (lightest) to 950 (darkest).
- tAccent1 through tAccent4, each being a range from 100 (lightest) to 900 (darkest) and one `pop` color. This `pop` color is simply the brightest the color can get, aka no saturation or no shading. `pop` is for an active or hovered element, as I see fit of course.

Once you've decided upon these five core colors. hold on to their RGB values and continue on.

## Making a Custom Theme

In short, we must (1) make a css file, (2) import that css file into our main css, and (3) include the new theme in the theme dropdown. Pretty simple, right?

### 1. Making the CSS File

The hardest part is making the css file, as I do not currently have better ways to generate a file easily. There is a structure that must be followed. A full example is in `default.css`, but in short:

```css
@tailwind base;

@layer base {
  [data-theme=<your theme name here>] {
    <... all color variables here>
  }
}
```

You'll need to define the RGB values for each shade as described above, resulting in something like:

```css
  --tBase-50: R G B,
  --tBase-100: R G B,
  ...
  --tBase-600: R G B,
  ...
  --tAccent2-800: R G B,
  ...
  --tAccent3-pop: R G B,
  ...
```

### 2. Adding the import to our main css

In `src/assets/custom.css`, you should see a section looking like this:

```css
/* IMPORT THEME CSS FILES HERE */
@import "./themes/default.css";
/* --------------------------- */
```

Simply add your css file here in the same style.

## 3. Adding the theme as an option

In `src/util/constants.js`, you should see a section looking like this:

```js
// ===== ADD YOUR THEMES HERE =====
export const themes = ["default"];
// ================================
```

Add your theme to the array, and you're good to go!

## Tips for Generating a Palette

If you have VSCode, the extension [Tailwind Shades](https://marketplace.visualstudio.com/items?itemName=bourhaouta.tailwindshades) can be used to generate an entire shade range from one hex. I recommend trying it out!

I will eventually either create my own theme generator entirely (which is most likely) or make a theme generator utilizing that extension.

## Improvements

Todo:

- Allow fonts and icons to change with themes
- Finalize a theme generator
- Automate steps 1-3 as listed above from a config file with just the theme name and 5 main colors

Done:

- Allow light/dark theme to be toggled, as well as different themes
- Generates the dark and light themes from one file
