import { useState, useEffect } from "react";

import Allproducts from "./allproducts";
import "./css/products.css";
import Header from "./header";
import Cart from "./cart";
import globalContext from "./context/context";

function HomeProduct() {
  let [products, setProducts] = useState([]);
  let [a, setA] = useState([]);

  async function fetching() {
    let response = await fetch("https://fakestoreapi.com/products?limit=8");
    let data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    fetching();
  }, []);

  return (
    <globalContext.Consumer>
      {(value) => {
        // console.log(value)

        function setcart(elem) {
          //  console.log(a)
          //  setA([...a,elem]);
          //   console.log({value})
          //     value.carts.push(a)
          value.cartset(elem);
        //   console.log(value);
        }

        function cdcdc() {
          value.setfetchedapi("https://fakestoreapi.com/products");
       
          return <div className="bars"></div>;
        }

        return (
          <div>
            <section id="product1" className="section-p1">
              <h2>Trending Products</h2>
              <p> New Modern Design</p>
              <div className="pro-container">
                {/* <div className="vg"> */}
                {value.fetchedapi.length
                  ? value.fetchedapi.map((ele) => {
                    
                    if(ele.id < 9){
                        // console.log(ele.id)
                      return (
                        <Allproducts
                          cartTo={setcart}
                          element={ele}
                          key={ele.id}
                        />
                      );
                    }
                    })
                  : cdcdc()}
                {/* </div> */}
              </div>
            </section>
          </div>
        );
      }}
    </globalContext.Consumer>
  );
}

export default HomeProduct;
