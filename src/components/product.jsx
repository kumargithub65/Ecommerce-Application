import { useState, useEffect } from "react";

import Allproducts from "./allproducts";
import "./css/products.css";
import Header from "./header";
import Cart from "./cart";
import globalContext from "./context/context";

function Product() {
  let [products, setProducts] = useState([]);
  let [a, setA] = useState([]);

  // async function fetching(){
  //     let response = await fetch("https://fakestoreapi.com/products/")
  //     let data = await response.json()
  //     // setProducts(data)
  // let ch = data.map(ele => {
  //     return{
  //         ...ele,quantity:1
  //     }
  //  })
  // setProducts(ch)
  // }

  // useEffect(()=>{
  //     fetching();
  //   },[])

  return (
    <globalContext.Consumer>
      {(value) => {
        // console.log(value)

        function setcart(elem) {
          value.cartset(elem);
        }

        function asaad(){
            value.setfetchedapi("https://fakestoreapi.com/products");
       
            return <div className="bars"></div>;
        }

        return (
          <div>
            <Header />

            <section id="product1" className="section-p1">
              <h2>Featured Products</h2>
              <p>Summer Colllection New Modern Design</p>
              <div className="pro-container">
                {/* <div className="vg"> */}
                {value.fetchedapi.length ? (
                  value.fetchedapi.map((ele) => {
                    //     let inde = value.carts.findIndex((ele) => ele.id === element.id);
                    //     // console.log(inde)
                    //     let quantit = value.carts.map((ele) => {
                    //       if (ele.id === element.id) {
                    //         return ele.quantity;
                    //       }
                    //     })[inde];
                    //   console.log(quantit)
                    return (
                      <Allproducts
                        cartTo={setcart}
                        element={ele}
                        key={ele.id}
                      />
                    );
                  })
                ) : (
                  asaad()
                )}
                {/* </div> */}
              </div>
            </section>
          </div>
        );
      }}
    </globalContext.Consumer>
  );
}

export default Product;
