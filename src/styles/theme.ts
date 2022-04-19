// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const customTheme = {
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
};

export const theme = extendTheme({ customTheme });
