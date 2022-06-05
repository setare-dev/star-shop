import React from 'react'
import { Routes, Route } from "react-router-dom";

import Header from './components/layouts/header'
import Product from './components/products/product'
import Home from './components/layouts/home'
import Footer from './components/layouts/footer'
import Cart from './components/cart'
import Login from './components/user/login'
import Register from './components/user/register'
import NotFoundPage from './notFoundPage';
const App = () => {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App