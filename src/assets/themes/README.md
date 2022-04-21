# Making a new theme

Think of a theme as a root color, easy on the eyes and the base of all the pages and text.

All you need for making a new theme are five hex colors:

- tBase, the range of base colors that make up the main background and the occasional supporting piece. This goes from 50 to 950, with 50 and 950 being the extreme ends of the scale used for body text and such.
- tAccent1 through tAccent4, each being a range from 100 to 900 and one `pop` color. This `pop` color is simply the brightest the color can get, aka no saturation or no shading. `pop` is for an active or hovered element, as I see fit of course.

## File naming

Each file should be named as `<theme name>_<"dark"/"light">.json`.

## Generating a Palette

If you have VSCode, the extension [Tailwind Shades](https://marketplace.visualstudio.com/items?itemName=bourhaouta.tailwindshades) can be used to generate an entire shade range from one hex. I recommend trying it out!

## Example JSON file

```json
{
  "tBase": {
    "50": "#yourhex",
    "100": "#yourhex",
    "200": "#yourhex",
    // ...
    "900": "#yourhex",
    "950": "#yourhex"
  },
  "tAccent1": {
    "100": "#yourhex",
    "200": "#yourhex",
    // ...
    "900": "#yourhex",
    "pop": "#yourhex"
  },
  "tAccent2": {
    "100": "#yourhex",
    "200": "#yourhex",
    // ...
    "900": "#yourhex",
    "pop": "#yourhex"
  },
  "tAccent3": {
    "100": "#yourhex",
    "200": "#yourhex",
    // ...
    "900": "#yourhex",
    "pop": "#yourhex"
  },
  "tAccent4": {
    "100": "#yourhex",
    "200": "#yourhex",
    // ...
    "900": "#yourhex",
    "pop": "#yourhex"
  }
}
```

## Future Improvements (Involving a parser)

- Generates the dark and light themes from one `theme.json`, allowing for overrides in the `theme.json` file.
- Allow for colors AND fonts to be overridden
- Update icons with themes
