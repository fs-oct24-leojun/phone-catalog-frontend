 
import React, { useMemo, useState } from "react";
import { Themes } from '../types/Themes';

export const ThemeContext = React.createContext<{
  theme: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
}>({
  theme: Themes.LIGHT,
  setTheme: () => {}
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