import { useState } from "react";
import globalContext from "./context/context";
import "./css/eachcart.css";

export default function EachCart({
  elem,
  increasetotal,
  decreasetotal,
  removes,
}) {
  let [count, setCount] = useState(0);
  let [price, setPrice] = useState(elem.price);
  return (
    <globalContext.Consumer>
      {(value) => {
        // console.log(value.carts)
        let inde = value.carts.findIndex((ele) => ele.id === elem.id)
        // console.log(inde)
        let quantit = value.carts.map(ele => {
          if(ele.id === elem.id){
            return ele.quantity
          }
        })[inde]
        let pp = quantit * elem.price
        // console.log(quantit,value.carts)
        function increase(producttotal) {
          // setCount((count = count + 1));
          // setPrice(elem.price.toFixed(2) * count);
          increasetotal(elem.price.toFixed(2),elem,pp);
        }

        function decrease() {
          if (quantit > 1) {
            // console.log("dev")
            // setCount((count = count - 1));
            // setPrice(elem.price.toFixed(2) * count);
            // console.log({decrease:elem})
            decreasetotal(elem.price.toFixed(2),elem);
          }
        }

        function rem() {
          removes(elem.id,pp,price,elem);
        }

        return (
          <div className="cdc">
            <img className="aimg" src={elem.image} />
            {/* <div className="cdcd">
              <button onClick={decrease}>-</button> <p>{ count}</p>
              <button onClick={increase}>+</button>
            </div> */}
            {/* <div className="quantity-counter">
              <button className="decrement-button">-</button>
              <input
                type="text"
                className="quantity-input"
                value="0"
                readonly
              />
              <button className="increment-button">+</button>
            </div> */}

            <div className="quantity-counter">
              <button onClick={decrease} className="decrement-button">
                -
              </button>
              <p className="quantity-input">{quantit}</p>
              <button onClick={increase} className="increment-button">
                +
              </button>
            </div>

            <p>{pp.toFixed(2)}</p>
            <button className="asasa" onClick={rem}>
            {/* <i class="fa-thin fa-trash"></i> */}
            <i className="fa-sharp fa-solid fa-trash"></i>
            </button>
          </div>
        );
      }}
    </globalContext.Consumer>
  );
}
