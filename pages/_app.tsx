import "../styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/common/theme";
import Navbar from "../src/common/navigation/Navbar";
import NextNProgress from "nextjs-progressbar";
import { Box } from "@mui/system";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vincent | FullStack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=La+Belle+Aurore&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar />
        <NextNProgress height={1} color={theme.palette.primary.main} />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}
