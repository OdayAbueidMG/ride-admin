import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./config/theme"
import NavBar from "./components/header/NavBar"
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <div dir="rtl">
     <StylesProvider jss={jss}>
      <ThemeProvider theme={theme("rtl")}>
      <NavBar/>
      </ThemeProvider>
     </StylesProvider>
    </div>
  );
}

export default App;
