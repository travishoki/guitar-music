import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/common/Header/Header";
import Main from "./components/common/Main";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";
import GuitarModeToggle from "./components/GuitarModeToggle/GuitarModeToggle";
import "./styles/index.less";

const App = () => {
  const [isdarkMode, setIsdarkMode] = useState(true);
  const [isGuitarMode, setIsGuitarMode] = useState(true);

  const onToggleIsDarkMode = () => {
    setIsdarkMode(!isdarkMode);
  };

  const onToggleIsGuitarMode = () => {
    setIsGuitarMode(!isGuitarMode);
  };

  return (
    <div id="container" className={isdarkMode ? "dark-mode" : "light-mode"}>
      <div id="content">
        <Header />
        <div className="top-controls">
          <DarkModeToggle
            isdarkMode={isdarkMode}
            onToggleIsDarkMode={onToggleIsDarkMode}
          />
          <GuitarModeToggle
            isGuitarMode={isGuitarMode}
            onToggleIsGuitarMode={onToggleIsGuitarMode}
          />
        </div>
        <Main isGuitarMode={isGuitarMode} />
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
