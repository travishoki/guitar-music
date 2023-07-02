import React, { useState } from "react";
import { render } from "react-dom";
import { MuiThemeProvider } from "material-ui/styles";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/common/Header";
import Main from "./components/common/Main";
import MuiTheme from "./components/common/MuiTheme";
import "./styles/index.less";

const App = () => {
  const [isdarkMode, setIsdarkMode] = useState(true);

  const onToggleIsDarkMode = () => {
    setIsdarkMode(!isdarkMode);
  };

  return (
    <MuiThemeProvider muiTheme={MuiTheme}>
      <div>
        <Header
          isdarkMode={isdarkMode}
          onToggleIsDarkMode={onToggleIsDarkMode}
        />
        <Main />
      </div>
    </MuiThemeProvider>
  );
};

render(
  <BrowserRouter basename="/guitar">
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
