import { ThemeOptions } from "@mui/material/styles";
import { COLORS, FONTSIZES, FONTWEIGHT } from "../constants";

export const bluePeachThemeOption: ThemeOptions = {
  palette: {
    primary: { main: COLORS.primary },
    secondary: { main: COLORS.secondary },
    text: { primary: COLORS.textBlack, secondary: COLORS.textWhite },
  },

  typography: {
    fontFamily: `"Prompt",sans-serif`,
    fontSize: 16,
    h1: {
      fontFamily: `"Prompt",sans-serif`,
      fontSize: FONTSIZES.h1,
      fontWeight: FONTWEIGHT.semibold,
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
    h2: {
      fontFamily: `"Prompt",sans-serif`,
      fontSize: FONTSIZES.h2,
      fontWeight: FONTWEIGHT.medium,
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
    h3: {
      fontFamily: `"Prompt",sans-serif`,
      fontSize: FONTSIZES.h3,
      fontWeight: FONTWEIGHT.semibold,
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
    h4: {
      fontFamily: `"Prompt",sans-serif`,
      fontSize: FONTSIZES.h4,
      fontWeight: FONTWEIGHT.medium,
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
    body1: {
      fontFamily: `"Prompt",sans-serif`,
      fontSize: FONTSIZES.body,
      fontWeight: FONTWEIGHT.regular,
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
    button: {
      fontFamily: `"Prompt",sans-serif`,
      fontSize: FONTSIZES.button,
      fontWeight: FONTWEIGHT.medium,
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
  },
};
