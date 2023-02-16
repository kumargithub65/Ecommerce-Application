import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import globalContext from "./context/context";
import "./css/home.css";
import logo from "../assets/img/logo.png";
import { useState } from "react";
import SimpleBadge from "./cartbadge";
import { NavLink } from "react-router-dom";

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
            <div id="fwe" >
          <section id="header">
            <NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to="/">
              <img src={logo} alt="" />
            </NavLink>
            <div>
              <div onClick={change} className="hamburger">
                {a? <i className="fa-solid fa-xmark"></i> :  <i className="fa-solid fa-bars"></i>}
              </div>

              <ul id="navbar">
                <li>
                  <NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to="/products">Shop</NavLink>
                </li>

                {/* <li><a href="about.html" >cart</a></li>
       <li><a href="contact.html">logout</a></li> */}
                {/* <i class="fas fa-shopping-bag"></i>  */}
                <li>
                  <NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to="/cart">
                  <SimpleBadge counttt={value.carts.length}/>    
                  </NavLink>{" "}
                
                </li>
                { Cookies.get("userinfo") &&
                <li>
                    
                    <NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to="/profile">
                  profile 
                    </NavLink>{" "}
                
             
                  </li>
      }
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
                    <NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to="/products">Shop</NavLink>
                  </li>

                  {/* <li><a href="about.html" >cart</a></li>
    <li><a href="contact.html">logout</a></li> */}
                  {/* <i class="fas fa-shopping-bag"></i>  */}
                   { Cookies.get("userinfo") &&
                  <li>
                    
                    <NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to="/profile">
                  profile 
                    </NavLink>{" "}
                
             
                  </li>
      }
                  <li>
                    
                    <NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to="/cart">
                      {/* <span className="material-symbols-outlined">
                        shopping_cart
                      </span>     */}
                      <SimpleBadge counttt={value.carts.length}/>      
                    </NavLink>{" "}
                
             
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
