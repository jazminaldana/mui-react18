const DEFAULT_FONT_SIZE = 2;

const getTheme = (baseSize = 1) => ({
  baseSize,
  spacing: (factor) => `${0.25 * factor}rem`,
  typography: {
    h1: { fontSize: `${DEFAULT_FONT_SIZE * baseSize}rem` },
    h2: { fontSize: `${DEFAULT_FONT_SIZE * 0.75 * baseSize}rem` },
    h3: { fontSize: `${DEFAULT_FONT_SIZE * 0.625 * baseSize}rem` },
    body1: { fontSize: `${baseSize}rem` },
    body2: {
      fontSize: `${DEFAULT_FONT_SIZE * 0.4375 * baseSize}rem`, lineHeight: `${DEFAULT_FONT_SIZE * 0.5 * baseSize}rem`,
    },
    caption: {
      fontSize: `${0.875 * baseSize}rem`,
      lineHeight: `${baseSize}rem`,
    },
  },
});

export default getTheme;