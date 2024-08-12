// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        title="TextEditor"
        About="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route
          path="/"
          element={<TextForm heading="ENTER THE TEXT" mode={mode} />}
        />
      </Routes>
    </>
  );
}

export default App;
