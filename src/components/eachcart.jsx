import { useState } from "react";
import globalContext from "./context/context";
import "./css/eachcart.css";

export default function EachCart({
  elem,
  increasetotal,
  decreasetotal,
  removes,
}) {
  let [count, setCount] = useState(1);
  let [price, setPrice] = useState(elem.price);
  return (
    <globalContext.Consumer>
      {(value) => {
        function increase() {
          setCount((count = count + 1));
          setPrice(elem.price * count);
          increasetotal(elem.price.toFixed(2));
        }

        function decrease() {
          if (count > 1) {
            setCount((count = count - 1));
            setPrice(elem.price * count);

            decreasetotal(elem.price.toFixed(2));
          }
        }

        function rem() {
          removes(elem.id,price);
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
              <p className="quantity-input">{count}</p>
              <button onClick={increase} className="increment-button">
                +
              </button>
            </div>

            <p>{price.toFixed(2)}</p>
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
