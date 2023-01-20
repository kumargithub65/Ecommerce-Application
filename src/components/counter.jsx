import { useState } from "react";
import globalContext from "./context/context";


export default function Counter({ elem, kok }) {
  let [va, setVa] = useState(true);
  return (
    <globalContext.Consumer>
      {(value) => {
        // console.log(value.carts);

        // console.log(value.carts)
        let inde = value.carts.findIndex((ele) => ele.id === elem.id);
        // console.log(inde)
        let quantit = value.carts.map((ele) => {
          if (ele.id === elem.id) {
            return ele.quantity;
          }
        })[inde];
        let pp = quantit * elem.price;
        // console.log(quantit)
        // console.log(quantit,value.carts)
        function increase(producttotal) {
          if (va) {
            // kok(elem)
            value.cartset(elem);
            // console.log(elem)

            // value.cartset(elem)
            // console.log("va");
            setVa(false);
          }
          // setCount((count = count + 1));
          // setPrice(elem.price.toFixed(2) * count);
          //  increasetotal(elem.price.toFixed(2),elem,pp);
          value.setincrease(1, elem);
        }

        function decrease() {
          if (quantit > 1) {
            // console.log("dev")
            // setCount((count = count - 1));
            // setPrice(elem.price.toFixed(2) * count);
            // console.log({decrease:elem})
            //  decreasetotal(elem.price.toFixed(2),elem);
            value.setDecrease(1, elem);
          }
        }

        return (
          <div className="quantity-counter">
            <button
              style={{ all: "unset", cursor: "pointer" }}
              onClick={decrease}
              className="decrement-button"
            >
              -
            </button>
            <h2 style={{"color":"black"}} className="quantity-input">{quantit===undefined?0:quantit}</h2>
            <button
              style={{ all: "unset", cursor: "pointer" }}
              onClick={increase}
              className="increment-button"
            >
              +
            </button>
          </div>
        );
      }}
    </globalContext.Consumer>
  );
}
