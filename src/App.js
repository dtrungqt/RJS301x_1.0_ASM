import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Card from "./components/UI/Card";
import Footer from "./components/UI/Footer";
import NavBar from "./components/UI/NavBar";
import HomePage from "./pages/HomePage";
// import CartPage from "./pages/CartPage";
// import CheckoutPage from "./pages/CheckoutPage";
// import DetailPage from "./pages/DetailPage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import ShopPage from "./pages/ShopPage";

const ShopPage = React.lazy(() => import("./pages/ShopPage"));
const DetailPage = React.lazy(() => import("./pages/DetailPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage"));
const CheckoutPage = React.lazy(() => import("./pages/CheckoutPage"));

function App() {
  return (
    <React.Fragment>
      <Card>
        <NavBar />
        <Suspense
          fallback={
            <div>
              <h5>Loading...</h5>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:productId" element={<DetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </Card>
      <Footer />
    </React.Fragment>
  );
}

export default App;

/*
Việc chưa hoàn thành:
1. Lưu sản phẩm được thêm vào giỏ hàng theo tài khoản tương ứng => khi mỗi tài khoản login thì sẽ có 1 giỏ hàng khác nhau
HIỆN TẠI: LOGOUT LÀ SẼ XÓA HẾT DATA CỦA CART
=> VỀ SAU CÓ THGIAN THÌ SẼ LÀM CHỨC NĂNG LƯU CART THEO TỪNG LOGIN USER
2. Bug: Mỗi sản phẩm chỉ được thêm vào giỏ hàng 1 lần. Nếu thêm 1 sp 2 lần trở đi thì sẽ bị lỗi trùng key
=> Khi thêm (add to Cart) lại 1 sp thì sẽ cộng dồn quantity lên
*/
