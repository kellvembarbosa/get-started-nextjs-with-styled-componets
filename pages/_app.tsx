import React from 'react'
import { themes } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { GlobalStyle } from '../styles/createGlobal'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themes}>
      <Reset />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
