import "./css/home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductBadge from "./productbadge";
import SimpleBadge from "./cartbadge";
import Counter from "./counter";
import globalContext from "./context/context";
function Allproducts(props) {
  const { element, cartTo } = props;
  const { title, rating, price, image, id, description, category,quantity } = element;
  let [checkj, setCheck] = useState(false);
  function carting() {
    // console.log(element)
    cartTo(element);

    setCheck(true);
    // console.log(check)
  }
  // let vv=
return <globalContext.Consumer>
  {value =>{
  let inde = value.carts.findIndex((ele) => ele.id === element.id);
  // console.log(inde)
  let quantit = value.carts.map((ele) => {
    if (ele.id === element.id) {
      return ele.quantity;
    }
  })[inde];
console.log(quantit)
  return (
    <div className="pro">
           <Link to={`/products/${id}`}>
      <div className="abas">
   
          <img src={image} alt="" />
      
      </div>
      <div className="des">
        {/* <span>adidas</span> */}
        <div className="wsww">
        <h5>{title}</h5>
        </div>
        <div className="star">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <h4>${price}</h4>
      </div>
      {/* <a href="#"> */}
    
      {/* <h5 className="ring">1</h5> */}
      {/* <button onClick={carting}> */}
      {/* <button onClick={carting}> */}

        {/* {checkj ? (
          "✔️"
        ) : ( */}
        <div className="cart">

    
        <ProductBadge ere={quantit}/>
        </div>
          <span className="material-symbols-outlined cart">shopping_cart</span>
          {/* <Counter elem={element}/> */}
    
        {/* )} */}
      {/* </button> */}

      </Link>
      {/* <p>{quantity}</p> */}
      {/* </a> */}
    </div>
      )
      }}
 </globalContext.Consumer>
  ;
}

export default Allproducts;
