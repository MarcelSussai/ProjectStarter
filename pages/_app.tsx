import type { AppProps } from 'next/app'
import GlobalStyle from '@/styles/GlobalStyle'
import { rawStringAllCssVars } from '@/styles/makingColorsTheme/colors'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme';
import { useContext, createContext, useState, useEffect } from 'react'
import { GlobalContext } from '@/contexts/globalContext';



export default function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // setIsDarkTheme(isDarkTheme)
  }, [])

  return (
    <>
      <style jsx global>{`
        :root {
          --font-montserrat: 'Montserrat', sans-serif;
          --font-ibm-mono: 'IBM Plex Mono', monospace;
          --font-museo-moderno: 'MuseoModerno', cursive;
          ${rawStringAllCssVars}
        }
      `}</style>
      <GlobalStyle isDarkTheme={isDarkTheme} />
      <GlobalContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}
