import "./css/home.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Allproducts(props) {
  const { element, cartTo } = props;
  const { title, rating, price, image, id, description, category } = element;
  let [checkj, setCheck] = useState(false);
  function carting() {
    cartTo(element);
    setCheck(true);
    // console.log(check)
  }
  // let vv=

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
      </Link>
      <button onClick={carting}>
        {checkj ? (
          "✔️"
        ) : (
          <span className="material-symbols-outlined cart">shopping_cart</span>
        )}
      </button>
      {/* </a> */}
    </div>
  );
}

export default Allproducts;
