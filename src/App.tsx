import { type ReactElement } from "react";

import "./index.scss";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";

const theme = createTheme({
  palette: {
    types: {
      bug: "#1C4C27",
      dark: "#040706",
      dragon: "#448B95",
      electric: "#a5a547",
      fairy: "#971944",
      fighting: "#EF6138",
      fire: "#AB1F24",
      flying: "#93B2C7",
      ghost: "#33336B",
      grass: "#1D7B3D",
      ground: "#A9712C",
      ice: "#86D2F5",
      normal: "#826A71",
      poison: "#5E2D88",
      psychic: "#A42A6D",
      steel: "#5F756D",
      rock: "#48180C",
      water: "#1552E2",
    },
  },
});

const App = (): ReactElement => {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </div>
  );
};

export default App;
