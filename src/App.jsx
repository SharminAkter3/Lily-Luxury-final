import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;