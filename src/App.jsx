import { Route, Routes } from "react-router-dom";
import React, { Component, Suspense } from "react";
import { useState, useEffect } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { googleLogout ,GoogleLogin} from '@react-oauth/google';
import { createPortal } from "react-dom";
import "./components/css/loader.css";
import { lazy } from "react";
// import Home from "./components/home";
const Home = lazy(() => import("./components/home"));
const Product = lazy(() => import("./components/product"));
const Cart = lazy(() => import("./components/cart"));
const Allproducts = lazy(() => import("./components/allproducts"));
const Eachproduct = lazy(() => import("./components/Eachproduct"));
const Signup = lazy(() => import("./components/login/signup"));
const SignIn = lazy(() => import("./components/login/signin"));
const Protectedroute = lazy(() => import("./components/protectedroute"));
// import { useState } from "react";

function App() {
  return (

      // <React.Fragment>
      <GoogleOAuthProvider clientId="806061476331-e367sr5arogonlmsrehc9279g00cembk.apps.googleusercontent.com" >
    

          <Suspense fallback={<div className="loadingabc"><div className="bars"></div></div>}>
        <Routes>

            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <Protectedroute>
                  <Product />
                </Protectedroute>
              }
            />
            <Route
              path="/Cart"
              element={
                <Protectedroute>
                  <Cart />
                </Protectedroute>
              }
            />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
            <Route
              path="/products/:id"
              element={
                <Protectedroute>
                  <Eachproduct />
                </Protectedroute>
              }
            />
            <Route path="*" element={<Home />} />
        </Routes>

          </Suspense>

        </GoogleOAuthProvider>
  //   //   // </React.Fragment>
    );
}
export default App;
