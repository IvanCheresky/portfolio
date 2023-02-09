import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

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

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("white", colors.brand.black)(props),
    },
  }),
};

const theme = extendTheme({ config, colors, styles });

export default theme;
