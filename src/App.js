import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Product from "./page/product";
import TentangKami from "./page/tentangKami";

function App() {
  useEffect(() => {
    const closeConsoleWarning = () => {
      console.log("%cSTOP!", "color: red; font-size: 40px; font-weight: bold;");
      console.log(
        "%cThis is a browser feature intended for developers.",
        "font-size: 18px;"
      );
      console.log(
        "%cIf someone told you to copy-paste something here, it is a scam.",
        "font-size: 18px;"
      );
    };

    window.addEventListener("contextmenu", closeConsoleWarning);
    window.addEventListener("keydown", (e) => {
      if (e.key === "F12") {
        closeConsoleWarning();
        e.preventDefault();
      }
    });

    return () => {
      window.removeEventListener("contextmenu", closeConsoleWarning);
      window.removeEventListener("keydown", closeConsoleWarning);
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<TentangKami />} />
      </Routes>
    </Router>
  );
}

export default App;
