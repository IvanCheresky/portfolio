import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "../utils/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ backgroundColor: "#000000" }}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
