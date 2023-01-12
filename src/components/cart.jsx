import Header from "./header";
import EachCart from "./eachcart";
import "./css/products.css";
import { useState } from "react";
import globalContext from "./context/context";

function Cart({ eleme }) {
  // let a = eleme.reduce((acc,ele) => acc + ele.price , 0) /

//   let [p, allP] = useState(val);
  return (
    <globalContext.Consumer>


     {(value) => {
        // console.log(value.carts);
        let val = value.carts;
        // // let val = JSON.parse(localStorage.getItem("a"))

        let totalvaluee = value.carts.reduce((acc, ele) => acc + ele.price, 0);
        // console.log(totalvaluee);


        function setincreas(price) {
          value.setincrease(price);
        }

        function setDecreas(price) {
          value.setDecrease(price);
        }

        function removedd(id,pricc) {
          value.removed(id,pricc)
        }

        return (
          <div>
            <Header />
            <div>
              <div className="avas">
                {val.length === 0 ?  
                <div className="aawa">
            <p >
              click this icon  <span className="material-symbols-outlined">
                        shopping_cart
                      </span> for add to cart 
            </p>
            </div>:

         
                 val.map((ele) => (
                  <EachCart
                    elem={ele}
                    key={ele.id}
                    increasetotal={setincreas}
                    decreasetotal={setDecreas}
                    removes={removedd}
                  />
                ))}
              </div>
            </div>
            
            {/* <h1>total price {totalvalue.toFixed(2)}</h1> */}
      <div className="dialog">
  <h2>Cart Total</h2>
  <div className="total">${Math.abs(value.total.toFixed(2))}</div>
  {/* <button>Checkout</button> */}
</div>


          </div>
        );
      }}
    </globalContext.Consumer>
  );
}

export default Cart;









