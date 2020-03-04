import React from 'react';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import JiscBanner from './components/JiscBanner'

const theme = createMuiTheme({
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xs: 0,
      sm: 757,
      md: 850,
      lg: 990,
      xl: 1280
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <header>

        <JiscBanner />

      </header>
    </MuiThemeProvider>
  );
}

export default App;
