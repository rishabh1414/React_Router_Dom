import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar";
import Services from "./pages/Services/Services";
import AdminDetails from "./pages/About/AdminDetails";
import UserDetails from "./pages/About/UserDetails";
import Products from "./pages/Products/Products";
import ProductById from "./pages/Products/ProductById";
import "./App.css";
import ProductsNotFound from "./pages/Products/ProductsNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About}>
            <Route path="/about/admin" Component={AdminDetails} />
            <Route path="/about/user" Component={UserDetails} />
          </Route>
          <Route path="/services" Component={Services} />
          <Route path="/products" Component={Products} />
          <Route path="/products/:id" Component={ProductById} />
          <Route path="/product404" Component={ProductsNotFound} />
          <Route path="*" Component={ProductsNotFound} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
