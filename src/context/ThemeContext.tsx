import { createContext, ReactNode, useState } from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  changeTheme: () => void;
};

type ThemeContextProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const changeTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const contextValues = {
    isDarkMode,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
};
