import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./css/Eachproduct.css";
import Header from "./header";
import globalContext from "./context/context";
export default function Eachproduct() {
  let [datas, setData] = useState([]);
  let [ch,setCh] = useState(false)
  let { id } = useParams();
  async function fetchin() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setData(data);
  
    } catch (err) {
      console.log("something went wrong");
    }
  }

  useEffect(()=>{
    fetchin();
  },[])

  return (
    <globalContext.Consumer>
      {(value)=>{
  function cartclick(){
    value.cartset(datas)

    setCh(true)
  }






    return(
    <div>
      <Header />
      {datas.length !== 0 ? (
        <div className="card">
          <img src={datas.image} alt="Product Name" />
          <div className="info">
           
            <h3>{datas.title}</h3>
         
            <p>{datas.description}</p>
            <div className="price">${datas.price}</div>
            <button disabled={ch} onClick={ cartclick} >{ ch? "Added to cart":"Add to Cart"}</button>
          </div>
        </div>
      ) : (
        <div className="asaas">
        <div className="bars"></div>
        </div>
      )}
    </div>
    )}}
    </globalContext.Consumer>
  );
}
