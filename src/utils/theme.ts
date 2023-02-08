import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const colors = {
  brand: {
    black: "#121212",
    orange: "#FF4D00",
    gray: "#878383",
  },
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, colors });

export default theme;
