import "../global/globalStyles/globals.css";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

const theme = {
  device: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1025px",
    laptopL: "1440px",
    desktop: "1680px",
  },
  colors: {
    white: "#f2f2f2",
    primaryGray: "#1F242C",
    secondaryGray: "#2C3037",
    tertiaryGray: "#444444",
    blue: "#1F87E7",
    blueGray: "#327DA7",
    teal: "#1CFFFF",
  },
  fonts: {
    inter: "'Inter'",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CarbonBlocks</title>

        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.carbonblocks.fi/" />
        <meta property="og:title" content="CarbonBlocks" />
        <meta
          property="og:description"
          content="Creating an on-chain web3 carbon economy"
        />

        <meta property="og:image" content="/images/Carblock.png"></meta>
        <meta name="thumbnail" content="/images/Carblock.png" />
        <link rel="shortcut icon" href="/images/Carblock.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
