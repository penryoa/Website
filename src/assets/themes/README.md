# How to Make Your Own Theme!


## Decide on Colors and a Name

All you need for making a new theme is one base color and four accent colors. These are extrapolated into:

- tBase, the range of base colors that make up the main background and the occasional supporting piece. This goes from 50 (lightest) to 950 (darkest).
- tAccent1 through tAccent4, each being a range from 100 (lightest) to 900 (darkest) and one `pop` color. This `pop` color is simply the brightest the color can get, aka no saturation or no shading. `pop` is for an active or hovered element, as I see fit of course.

Once you've named your theme and chosen five core colors, hold on to their hex values and continue on.

## Making a Custom Theme

In short, we must (1) add to our css file, and (2) include the new theme in the theme dropdown. Pretty simple, right?

### 1. Updating the CSS File

I do not currently have better ways to generate the values for each shade, but you can see my recommended approach below that I am using for now.

There is a structure that must be followed. If you open up the css file we'll be appending to, `src/assets/themes/themes.css`, you'll see something like this:

```css
@tailwind base;

@layer base {
  [data-theme=<your theme name here>] {
    <... all color variables here>
  }
}
```

You'll need to add anther instance of the `[data-theme="..."]` and the corresponding RGB values for each shade as described above, resulting in something like:

```css
  [data-theme="example"] {
    --tBase-50: R G B,
    --tBase-100: R G B,
    ...
    --tBase-600: R G B,
    ...
    --tAccent2-800: R G B,
    ...
    --tAccent3-pop: R G B,
    ...
  }
```

## 2. Adding the theme as an option

In `src/util/constants.js`, you should see a section looking like this:

```js
// ===== ADD YOUR THEMES HERE =====
export const themes = ["default", ...];
// ================================
```

Add your theme to the array, and you're good to go!

## Tips for Generating a Palette

If VSCode is your IDE of choice, I'd recommend two plugins to help with this: [Tailwind Shades](https://marketplace.visualstudio.com/items?itemName=bourhaouta.tailwindshades), which generates the whole tailwind shade range 100 - 900 for a given hex, and [Hex to RGB](https://marketplace.visualstudio.com/items?itemName=daverik.hextorgb), which changes a hex value to an rgb value.

What I do to best create a theme for now (will eventually be automated):

1. Generally, I like to pull up [coolors](https://coolors.co) to decide upon five colors I like together. Keep in mind that my code will automatically handle using the correct shades, so when you decide upon five colors, use the most medium shade you can get.
2. Copy each hex code into the css file
3. Use _Tailwind Shades_ on each hex code
4. Use _Hex to RGB_ to turn each generated hex into its corresponding RGB value
5. Edit each entry such that:
   (--t) It is a css variable. Use the prefix `--t`, with `--` indicating it's a variable and `t` standing for "theme".
   (--tBase) Append the respective label "Base" or "Accent<number>"
   (--tBase-100) Append the respective shade
   (--tBase-100: 12 240 180;) Set the variable to be the RGB value listed out as three numbers only, no commas.
6. Add in the six entries you must do manually: tBase-50, tBase-950, tAccent1-pop, tAccent2-pop, tAccent3-pop, tAccent4-pop

## Improvements

Todo:

- Allow fonts and icons to change with themes
- Automate steps 1-3 as listed above from a config file with just the theme name and 5 main colors
- Finalize a theme generator

Done:

- Allow light/dark theme to be toggled
- Allow different themes to be selected
- Generate the dark and light themes from one set of colors
