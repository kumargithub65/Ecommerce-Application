import "./css/profile.css";
import Header from "./header";

import Cookies from "js-cookie";
export default function Profile() {
    
   let token = Cookies.get("userinfo")
    let {name,picture,email} =  JSON.parse(token)
//    console.log(name,picture,email)
  return (
    <div>
      <Header />
      <div className="profilecenter">
      <aside className="profile-card">

        {/* here’s the avatar */}
        <a>
          <img
          style={{width:"100px",height:"100px",margin:"20px"}}
            src={picture}
            className="hoverZoomLink"
          />
        </a>
        {/* the username */}
        <h1 style={{margin:"2px"}}>{name}</h1>
        {/* and role or location */}
        {/* <h2>Better Visuals</h2> */}

        {/* bit of a bio; who are you? */}
        <p style={{margin:"10px",lineHeight:"24px"}} >{email}  </p>

        <p style={{margin:"10px",lineHeight:"24px",textAlign:"center"}}>Welcome to our online store! We're thrilled to have you shopping with us.</p>
        {/* <div className="profile-bio">
          <p>
           {email}fegergferger
          </p>
        </div> */}
        {/* some social links to show off */}
{/*         
        <ul className="profile-social-links">
          <li>
            <a>
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a>
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a>
              <i className="fa fa-github" />
            </a>
          </li>
          <li>
            <a>
              <i className="fa fa-behance" />
            </a>
          </li>
        </ul> */}
      </aside>
      </div>
    </div>
  );
}
