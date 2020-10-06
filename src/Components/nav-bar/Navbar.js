import React from 'react';
import './Navbar.css';
import $ from "jquery";
import { Link } from "react-router-dom";

function Navbar() {

   


    $(function()
    {
        $(".toggle").on("click", function(){

            if($(".items").hasClass("active"))
            {
                $(".items").removeClass("active");
                $(".secondary").removeClass("active");
            }
            else{
                $(".items").addClass("active");
                $(".secondary").addClass("active");

            }
        })
    })



  return (
    <div className= "box">
     <nav>
        <ul className = "menu">
            <li className="logo"> <img className="main-icon" src={require("./gwm_web_white.svg")} alt="img" /></li>
            <li className="items"> <Link to="/giswebpage/"> Home </Link>       </li>
            <li className="items"> <a href="/giswebpage/#AFeature">  FEATURES </a> </li>
            <li className="items"> <a href="/giswebpage/#Plans"> PLANS & PRICING</a></li>
            <li className="items"> <a href="https://myepicbook.netlify.app/"> BLOG</a>       </li>
            <li className="items button " ><Link to="/giswebpage/login"> SIGN In </Link>   </li>
            <li className="items button secondary" ><Link to="/giswebpage/register">  SIGN UP </Link>    </li>
            <li className="toggle"> <span className="bars">  </span></li>
        </ul>
     </nav>
    </div>
  );
}

export default Navbar;