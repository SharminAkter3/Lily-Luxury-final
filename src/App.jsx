import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Navbar from "./components/Navbar";
import SingleCategoryProducts from "./page/SingleCategoryProducts";
import ProductDetails from "./page/ProductDetails";
import SearchResultPage from "./page/SearchResultPage";
import AuthPage from "./page/AuthPage";
import axios from "axios";
import { domain, getheader } from "./env";
import { useStateValue } from "./state/stateProvider";
import OrderPage from "./page/OrderPage";
import ProfilePage from "./page/ProfilePage";

const App = () => {
  const [{ profile }, dispatch] = useStateValue();
  useEffect(() => {
    const getprofile = async () => {
      await axios({
        url: `${domain}/api/profile/`,
        method: 'GET',
        headers: getheader
      }).then(response => {
        console.log('App=====', response.data);
        dispatch({
          type: 'PRO',
          value: response.data
        });
      }).catch(_ => {
        dispatch({
          type: 'PRO',
          value: null
        });
      })
    }
    getprofile()
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/category/:title/:id" element={<SingleCategoryProducts />} />
        <Route exact path="/flower/:title/:id" element={<ProductDetails />} />
        <Route exact path="/query/:q" element={<SearchResultPage />} />
        <Route exact path="/login" element={<AuthPage />} />
        {
          profile !== null &&
          <>
            <Route exact path="/orders" element={<OrderPage />} />
            <Route exact path="/profile/:username" element={<ProfilePage />} />
          </>
        }
        <Route exact element={<AuthPage />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;