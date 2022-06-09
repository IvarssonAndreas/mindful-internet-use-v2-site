import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import theme from '../theme'
import { globalStyles } from '../global-styles'



function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#002040"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="#002040"/>
        <title>Mindful Internet Use</title>
        <meta
          name="description"
          content="A Chrome Extension that prevents mindless browsing"
        />`
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#002040" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default App
