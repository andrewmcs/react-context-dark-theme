import { createContext, useContext, useState } from "react";


const ThemeContext = createContext(undefined);

/* 
Implement the ThemeProvider component. 
It should accept a children prop and return a ThemeContext.Provider component. 
The ThemeContext.Provider receives an object as its value prop, 
with a theme string and a toggleTheme function.

 toggleTheme should toggle the theme between light and dark.
*/
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider
      value={
        {
          theme,
          toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
        }
      }
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
