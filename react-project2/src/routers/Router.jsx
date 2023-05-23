import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Inventory from "../pages/Inventory";
import Productlist from "../pages/Productlist";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Setting from "../pages/Setting";
import ProductList from "../components/Product/ProductList";
import ProductDetail from "../components/Product/ProductDetail";
import Checkout from "../components/Product/Checkout";
import Checkoutcart from "../pages/component-pages/Checkoutcart";
import Register from "../auth/register";
import CheckoutSuccess from "../pages/component-pages/CheckoutSuccess";
import NotFound from "../pages/NotFound";
import Login from "../auth/Login";
import CreateProduct from "../pages/component-pages/CreateProduct";
import Orders from "../pages/Orders";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={"/product"} element={<ProductList />} />}
      />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/create-product" element={<CreateProduct />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/product" element={<Productlist />} />
      <Route path="/users" element={<Users />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="*" element={<NotFound />} />

      {/* <Route path="/product/:id" element={<Product />} /> */}


      <Route path="product/productlist" element={<ProductList />} />
      <Route path="product/productdetail" element={<ProductDetail />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="checkoutcart" element={<Checkoutcart />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="checkout-success" element={<CheckoutSuccess />} />
    </Routes>
  );
};


export default Router;
