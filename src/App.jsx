import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Navbar from "./components/Navbar";
import SingleCategoryProducts from "./page/SingleCategoryProducts";
import ProductDetails from "./page/ProductDetails";
import SearchResultPage from "./page/SearchResultPage";
import AuthPage from "./page/AuthPage";

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/category/:title/:id" element={<SingleCategoryProducts />} />
        <Route exact path="/flower/:title/:id" element={<ProductDetails />} />
        <Route exact path="/query/:q" element={<SearchResultPage />} />
        <Route exact path="/login" element={<AuthPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;