import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import globalContext from "./context/context";
import "./css/home.css";
import logo from "../assets/img/logo.png";
import { useState } from "react";
import SimpleBadge from "./cartbadge";


export default function Header() {
  let navx = useNavigate();
  let [a, setA] = useState(false);
  function loggingout() {
    Cookies.remove("token");
    navx("/signup");
  }

  function change() {
    setA(!a);
  }

  return (
    <globalContext.Consumer>
      {(value) => {
        return (
            <div>
          <section id="header">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <div>
              <div onClick={change} className="hamburger">
                {a? <i className="fa-solid fa-xmark"></i> :  <i className="fa-solid fa-bars"></i>}
              </div>

              <ul id="navbar">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Shop</Link>
                </li>

                {/* <li><a href="about.html" >cart</a></li>
       <li><a href="contact.html">logout</a></li> */}
                {/* <i class="fas fa-shopping-bag"></i>  */}
                <li>
                  <Link to="/cart">
                  <SimpleBadge counttt={value.carts.length}/>
                  </Link>{" "}
                
                </li>
              
                <li onClick={loggingout}>
                  {" "}
                  <a>logout</a>
                </li>
              </ul>
            </div>

        
          </section>
              
          {a && (
                <ul id="nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/products">Shop</Link>
                  </li>

                  {/* <li><a href="about.html" >cart</a></li>
    <li><a href="contact.html">logout</a></li> */}
                  {/* <i class="fas fa-shopping-bag"></i>  */}
                  <li>
                    
                    <Link to="/cart">
                      {/* <span className="material-symbols-outlined">
                        shopping_cart
                      </span>     */}
                      <SimpleBadge counttt={value.carts.length}/>
                    </Link>{" "}
                
             
                  </li>
                  <li onClick={loggingout}>
                    {" "}
                    <a>logout</a>
                  </li>
                </ul>
              )}

          </div>
        );
      }}
    </globalContext.Consumer>
  );
}
