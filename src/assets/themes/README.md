# Making a new theme

Think of a theme as a root color, easy on the eyes and the base of all the pages and text.

All you need for making a new theme are six hex colors:

- tNeutral, the range of neutrals from 50 to 900
- tBase, the range of base colors that make up the main background and the occasional supporting piece.
- tAccent1 through tAccent4, each being a range from 100 to 900 and one `pop` color. This `pop` color is simply the brightest the color can get, aka no saturation or no shading. `pop` is for an active or hovered element, as I see fit of course.

## File naming

## Generating a Pallet

## Example JSON file

```json
{
  "tBase": {
    "100": "#yourhex",
    "200": "#yourhex",
    "300": "#yourhex",
    "400": "#yourhex",
    "500": "#yourhex",
    "600": "#yourhex",
    "700": "#yourhex",
    "800": "#yourhex",
    "900": "#yourhex",
    "pop": "#yourhex"
  },
  "tAccent1": {
    "100": "#yourhex",
    "200": "#yourhex",
    "300": "#yourhex",
    "400": "#yourhex",
    "500": "#yourhex",
    "600": "#yourhex",
    "700": "#yourhex",
    "800": "#yourhex",
    "900": "#yourhex",
    "pop": "yourhex"
  },
  "tAccent2": {
    "100": "#071a1a",
    "200": "#0d3433",
    "300": "#144f4d",
    "400": "#1a6966",
    "500": "#218380",
    "600": "#4d9c99",
    "700": "#7ab5b3",
    "800": "#a6cdcc",
    "900": "#d3e6e6",
    "pop": "00a39e"
  },
  "tAccent3": {
    "900": "#f1d9e6",
    "800": "#e4b3cd",
    "700": "#d68cb4",
    "600": "#c9669b",
    "500": "#bb4082",
    "400": "#963368",
    "300": "#70264e",
    "200": "#4b1a34",
    "100": "#250d1a",
    "pop": "#fa0085"
  },
  "tAccent4": {
    "900": "#dcede8",
    "800": "#b9dad2",
    "700": "#96c8bb",
    "600": "#73b5a5",
    "500": "#50a38e",
    "400": "#408272",
    "300": "#306255",
    "200": "#204139",
    "100": "#10211c",
    "pop": "00f5b8"
  }
}
```

## Future Improvements (Involving a parser)

- Generates the dark and light themes from one `theme.json`, allowing for overrides in the `theme.json` file.
- Allow for colors AND fonts to be overridden
- Update icons with themes
