import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./css/Eachproduct.css";
import Header from "./header";
import globalContext from "./context/context";
import Counter from "./counter";
import "./css/eachcart.css";
export default function Eachproduct() {
  let [datas, setData] = useState([]);
  let [ch,setCh] = useState(false)
  let { id } = useParams();
  // async function fetchin() {
  //   try {
  //     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //     const data = await response.json();
  //     setData(data);
  
  //   } catch (err) {
  //     // console.log("something went wrong");
  //   }
  // }

  // useEffect(()=>{
  //   fetchin();
  // },[])

  return (
    <globalContext.Consumer>
      {(value)=>{

  function cartclick(){
    // console.log("clicked")
    // console.log(value.carts,{...datas,quantity:1})
    value.cartset({...datas,quantity:1})

    setCh(true)
  }

function assasrd(){
  // console.log(id)
let dard = value.fetchedapi.filter(ele => ele.id === Number(id))
      setData(dard[0]);
 

  return(
    <div className="asaas">
    <div className="bars"></div>
    </div>
  )
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
            { ch &&
            <Counter kok={cartclick} elem={{...datas,quantity:1}} />
      }
            <button  onClick={ cartclick} >Add To Cart</button>
          </div>
        </div>
      ) : (
      
        assasrd()
      )}
    </div>
    )}}
    </globalContext.Consumer>
  );
}
