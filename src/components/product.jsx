import { useState ,useEffect} from "react"

import Allproducts from "./allproducts"
import "./css/products.css"
import Header from "./header"
import Cart from "./cart"
import globalContext from "./context/context"


function  Product () {
let [products,setProducts] = useState([])
let [a,setA] = useState([])
    

async function fetching(){
    let response = await fetch("https://fakestoreapi.com/products/")
    let data = await response.json()
    // setProducts(data)
let ch = data.map(ele => {
    return{
        ...ele,quantity:1
    }
 })
setProducts(ch)
}

useEffect(()=>{
    fetching();
  },[])


    return (<globalContext.Consumer>
        {(value)=>{

// console.log(value)



   function setcart(elem){
//  console.log(a)
//  setA([...a,elem]);
//   console.log({value})
//     value.carts.push(a)
value.cartset(elem)
// console.log(elem)
// if(value.carts.findIndex(ele=> ele.id === elem.id) === -1){
//     value.cartset({...elem,quantity: elem.quantity= elem.quantity  + 1})
// }else{
//     value.cartset({...elem,quantity: elem.quantity++})
// }
// let inde = value.carts.findIndex((ele) => ele.id === element.id);
// // console.log(inde)
// let quantit = value.carts.map((ele) => {
//   if (ele.id === element.id) {
//     return ele.quantity;
//   }
// })[inde];
// console.log(quantit)

   }

   return(
        <div>
           <Header/>


           <section id="product1" className="section-p1">
 <h2>Featured Products</h2>
  <p>Summer Colllection New Modern Design</p>
  <div className="pro-container">



            {/* <div className="vg"> */}
             {products.length ? products.map(ele => {
            let inde = value.carts.findIndex((ele) => ele.id === element.id);
            // console.log(inde)
            let quantit = value.carts.map((ele) => {
              if (ele.id === element.id) {
                return ele.quantity;
              }
            })[inde];
          console.log(quantit)
              return  <Allproducts cartTo={setcart} element={ele} key={ele.id} />
            }) : <div className="bars"></div>}
            {/* </div> */}

            </div>
</section>











        </div>
    )
       
 }
    }
    </globalContext.Consumer>)
}


export default Product










