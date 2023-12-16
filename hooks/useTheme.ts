import { Theme } from "@/types/Theme";
import { useState } from "react";

export const useTheme = (theme_?: 'light' | 'dark' | 'system'): Theme => {
  const [theme, settheme] = useState<'light' | 'dark' | 'system'>(theme_ || 'light')
  return {
    setTheme(theme) {
        settheme(theme)
    },
    theme
  }
}