import { ReactNode, createContext, useState } from 'react'

interface IGlobalContext {
  isDarkTheme?: boolean
  setIsDarkTheme?: (isDarkTheme: boolean) => void
}
const DEFAULT_VALUE_GLOBAL_CTX: IGlobalContext = {
  isDarkTheme: false,
  setIsDarkTheme: () => {}
}
export const GlobalContext = createContext<IGlobalContext>(DEFAULT_VALUE_GLOBAL_CTX)
