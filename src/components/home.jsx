// import aa from "../assets/images/store_9.jpg"
import "./css/home.css"
import Header from "./header"
import { useNavigate } from "react-router-dom"
import HomeProduct from "./homeproducts"
// import "..img/"
import f1 from "../assets/img/features/f1.png"
import f2 from "../assets/img/features/f2.png"
import f3 from "../assets/img/features/f3.png"
import f4 from "../assets/img/features/f4.png"
import f5 from "../assets/img/features/f5.png"
import f6 from "../assets/img/features/f6.png"



function Home(){
  let navaga = useNavigate()
function shopping(){


  return navaga("/products")
}

    return(
        <div>

 
       <Header/>



       <div>
   

<section id="hero">
    <h4>Trade-in-offer</h4>
    <h2>Super Value Deals</h2>
    <h1>On All deals</h1>
    <p>Save more with coupons & up to 70% off</p>
    <button onClick={shopping}>Shop Now</button>
</section>


<section id="features" className="section-p1">
  <div className="fe-box">
         <img src={f1} alt="free shipping"/>
         <h6> Free Shipping</h6>
  </div>

  <div className="fe-box">
    <img src={f2} alt="free shipping"/>
    <h6>Online Order</h6>
</div>

  <div className="fe-box">
    <img src={f3} alt="free shipping"/>
    <h6> Save Money</h6>
</div>

{/* <div className="fe-box">
  <img src={f4} alt="free shipping" />
  <h6> Promotions</h6>
</div> */}

<div className="fe-box">
  <img src={f5} alt="free shipping" />
  <h6> Happpy Sell</h6>
</div>

<div className="fe-box">
  <img src={f6} alt="free shipping"/>
  <h6>24/7 Support</h6>
</div>
</section>

<HomeProduct/>
</div>



{/* 
        <div classNameName="cc">
            <div >
            <p style={{"width":"400px","height":"100px"}}>
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.
            </p>
            
            <button>View Products</button>
            </div>

           <img src={aa}  alt="kkk" />
         </div>
          */}
        </div>
    )
}


export default Home










