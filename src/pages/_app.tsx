import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/utils/theme";
import { IBM_Plex_Mono } from "@next/font/google";
import Head from "next/head";

const ibm = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={ibm.className}>
      <ChakraProvider theme={theme}>
        <Head>
          <meta
            name="description"
            content="Ivan Cheresky personal portfolio and blog."
            key="desc"
          />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}
