import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Navbar from "./components/Navbar";
import SingleCategoryProducts from "./page/SingleCategoryProducts";

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/category/:title/:id" element={<SingleCategoryProducts />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;