<<<<<<< HEAD
import  { useState } from "react";
import { Routes, Route } from "react-router-dom";
=======
/* eslint-disable no-unused-vars */
import React from "react";
>>>>>>> 725527aac8599734087af87a7cc46e508aa4856f
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
<<<<<<< HEAD
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
=======
      <div className="app">
        <Navbar />
>>>>>>> 725527aac8599734087af87a7cc46e508aa4856f
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
