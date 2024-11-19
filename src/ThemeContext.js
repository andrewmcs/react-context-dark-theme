import { createContext } from "react";
import { useState } from "react";

/*
Step 1
Create a ThemeContext object using React.createContext().

Implement the ThemeProvider component. 
It should accept a children prop and return a ThemeContext.Provider component. 
The ThemeContext.Provider receives an object as its value prop, 
with a theme string and a toggleTheme function.

toggleTheme should toggle the theme between light and dark.
*/


const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  
  return (
    <ThemeContext.Provider
      value={
        {
          theme,
          toggleTheme: setTheme(theme === 'light' ? "dark" : "light")
        }
      }
    >
      {children}
    </ThemeContext.Provider>
  );
};