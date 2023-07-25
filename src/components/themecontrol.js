import React, { createContext, useState, useContext } from 'react';

const themecontrol = createContext();

export function useTheme() {
  return useContext(themecontrol);
}

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = {
    darkMode,
    toggleTheme,
  };

  return <themecontrol.Provider value={theme}>{children}</themecontrol.Provider>;
}
