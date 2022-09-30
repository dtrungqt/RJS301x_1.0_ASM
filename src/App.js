import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Card from "./components/UI/Card";
import Footer from "./components/UI/Footer";
import NavBar from "./components/UI/NavBar";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <React.Fragment>
      <Card>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />}>
            <Route path="/shop/:productId" element={<DetailPage />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Card>
      <Footer />
    </React.Fragment>
  );
}

export default App;
