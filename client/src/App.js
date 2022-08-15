import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProdcutList";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Admin from "./Pages/admin";
import Dashboard from "./Pages/admin/Dashboard";
import Command from "./Pages/admin/Command";
import Products from "./Pages/admin/Products";

import { useEffect, useState } from "react";
import AllProduct from "./components/AllProduct";
import Faq from "./components/Faq";
import Pomodoro from "./components/Pomodoro";
import ConfirmationPage from "./Pages/ConfirmationPage";
function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(JSON.parse(user));
    window.addEventListener("storage", () => {
      const user = localStorage.getItem("user");
      setUser(JSON.parse(user));
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<AllProduct />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />

        <Route
          path="/login"
          element={user?.accessToken ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/admin"
          element={user?.accessToken ? <Admin /> : <Login />}
        >
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="command" element={<Command />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
