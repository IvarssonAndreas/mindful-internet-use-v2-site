import type { AppProps } from 'next/app'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import theme from '../theme'
import { globalStyles } from '../global-styles'

import '@fontsource/comfortaa/300.css'
import '@fontsource/comfortaa/400.css'
import '@fontsource/comfortaa/500.css'
import '@fontsource/comfortaa/700.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default App
