import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Home from "./components/home";
import Product from "./components/product";
import Cart from "./components/cart";
import Allproducts from "./components/allproducts";
import Eachproduct from "./components/Eachproduct";
import Signup from "./components/login/signup";
import SignIn from "./components/login/signin";
import Protectedroute from "./components/protectedroute";
// import { useState } from "react";
import  { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import "./components/css/loader.css"

function App() {



  return (
    <React.Fragment >
    

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/products" element={<Protectedroute><Product /></Protectedroute>} />
        <Route path="/Cart" element={<Protectedroute><Cart /></Protectedroute>} />
        <Route path="/Signup" element={<Signup/>} />
      <Route path="/signin" element={<SignIn/>} />
        <Route path="/products/:id" element={<Protectedroute><Eachproduct /></Protectedroute>} />
<Route path="*" element={<Home/>}/>

      </Routes>
      {/* <h1>hello world</h1> */}
    </React.Fragment>
  );
}

export default App
