/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo, useState } from "react";
import { Themes } from '../types/Themes';

export const ThemeContext = React.createContext({
  theme: Themes.LIGHT,
  setTheme: (value: Themes) => {}
});

type Props = {
    children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(Themes.LIGHT);

  const value = useMemo(() => ({
    theme, 
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value = {value}>
      {children}
    </ThemeContext.Provider>
  )
}