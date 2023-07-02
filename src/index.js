import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/common/Header/Header";
import Main from "./components/common/Main";
import "./styles/index.less";

const App = () => {
  const [isdarkMode, setIsdarkMode] = useState(true);

  const onToggleIsDarkMode = () => {
    setIsdarkMode(!isdarkMode);
  };

  return (
    <div id="container" className={isdarkMode ? "dark-mode" : "light-mode"}>
      <div id="content">
        <Header
          isdarkMode={isdarkMode}
          onToggleIsDarkMode={onToggleIsDarkMode}
        />
        <Main />
      </div>
    </div>
  );
};

render(
  <BrowserRouter basename="/guitar">
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
