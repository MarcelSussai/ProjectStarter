import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider, } from 'react-query'
import GlobalStyle from '@/styles/GlobalStyle'
import { rawStringAllCssVars } from '@/styles/makingColorsTheme/colors'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme';
import { useContext, createContext, useState, useEffect } from 'react'
import { GlobalContext } from '@/contexts/globalContext';


const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    // para ligar o tema pela preferência do usuário
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // setIsDarkTheme(isDarkTheme)
  }, [])

  return (
    <>
      <style jsx global>{`
        :root {
          ${rawStringAllCssVars}
          --alpha-texture: ${isDarkTheme ? '1' : '.3'};
          --font-default: 'Montserrat', sans-serif;
          --font-mono: 'Source Code Pro', monospace;
          --font-main: 'MuseoModerno', cursive;
          --color-transparent: #0000;
        }
      `}</style>
      <svg style={{position: 'absolute'}} fill='none'>
        <filter id='noiseFilter'>
          <feTurbulence result='noise'
            type='fractalNoise'
            baseFrequency='32.0389'
            numOctaves='64'/>
          <feDiffuseLighting in='noise' lightingColor='white' surfaceScale='2'>
            <feDistantLight azimuth='45' elevation='60' />
          </feDiffuseLighting>
        </filter>
      </svg>
      <GlobalStyle isDarkTheme={isDarkTheme} />
      <QueryClientProvider client={queryClient}>
        <GlobalContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </QueryClientProvider>
    </>
  )
}
