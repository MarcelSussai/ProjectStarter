import type { AppProps } from 'next/app'
import GlobalStyle from '@/styles/GlobalStyle'
import { rawStringAllCssVars } from '@/styles/makingColorsTheme/colors'

export default function App({ Component, pageProps }: AppProps) {
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
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
