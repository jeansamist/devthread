import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/types/Theme';
import { FunctionComponent, PropsWithChildren, createContext } from 'react'

type defaultType = Theme

const default_:defaultType = {
  setTheme(theme) {
      
  },
  theme: 'light'
}

export const ThemeContext = createContext(default_)

export const ThemeProvider: FunctionComponent<PropsWithChildren<{theme?: 'light' | 'dark' | 'system'}>> = ({ theme = 'light', children }) => {
  const theme_ = useTheme(theme);
  return <ThemeContext.Provider value={theme_}>{children}</ThemeContext.Provider>;
};