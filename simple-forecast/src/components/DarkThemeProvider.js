import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import themes from '../util/themes.js'

const DarkThemeProvider = ({ children }) => {
    const isLight = useSelector(state => state.theme.isLight)

    return (
      <ThemeProvider theme={isLight ? themes.lightTheme : themes.darkTheme}>
        {children}
      </ThemeProvider>
    );
};
  
export default DarkThemeProvider;