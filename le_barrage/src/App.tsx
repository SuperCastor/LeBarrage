import styled from "@emotion/styled";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import { useState } from "react";

const MenuItem = styled.div({
  width: "170px",

  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  fontSize: 18,
  fontWeight: 700,
  "&:hover": {
    borderBottom: "solid 1px black",
  },
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <BrowserRouter>
      <header
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <div style={{ display: "flex", height: "60px" }}>
          <MenuItem
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Accueil
          </MenuItem>
          <MenuItem
            onClick={() => {
              window.location.href = "/projects";
            }}
          >
            Mes projets
          </MenuItem>
          <MenuItem
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            Me contacter
          </MenuItem>
          <MenuItem
            onClick={() => {
              window.location.href = "/cv";
            }}
          >
            CV
          </MenuItem>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0px 10px",
            }}
          >
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={50}
            />
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/projects" element={<div>Project</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/cv" element={<div>CV</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
