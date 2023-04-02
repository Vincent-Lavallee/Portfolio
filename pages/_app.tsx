import "../styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/common/theme";
import Navbar from "../src/common/navigation/Navbar";
import NextNProgress from "nextjs-progressbar";
import { Analytics } from "@vercel/analytics/react";
import { IntlProvider } from "react-intl";
import { createContext, useState } from "react";
import SupportedLanguage from "../lang/supportedLanguage";

export const LocalizationContext = createContext({
  selectedLanguage: SupportedLanguage.EN,
  setSelectedLanguage: (value: SupportedLanguage) => {},
});
export default function App({ Component, pageProps }: AppProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(
    SupportedLanguage.EN
  );

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
      <LocalizationContext.Provider
        value={{ setSelectedLanguage, selectedLanguage }}
      >
        <IntlProvider
          messages={require(`../lang/${selectedLanguage}.json`)}
          locale="fr"
          defaultLocale={selectedLanguage}
        >
          <ThemeProvider theme={theme}>
            <Navbar />
            <NextNProgress height={1} color={theme.palette.primary.main} />
            <Component {...pageProps} />
            <Analytics />
          </ThemeProvider>
        </IntlProvider>
      </LocalizationContext.Provider>
    </>
  );
}
