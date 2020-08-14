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
            <li className="items"> <Link to="/"> Home </Link>       </li>
            <li className="items"> <a href="#Plans">  FEATURES </a> </li>
            <li className="items"> <a href="#Plans"> PLANS & PRICING</a></li>
            <li className="items"> <a href="#"> BLOG</a>       </li>
            <li className="items button " ><Link to="/login"> SIGN In </Link>   </li>
            <li className="items button secondary" ><Link to="/register">  SIGN UP </Link>    </li>
            <li className="toggle"> <span className="bars">  </span></li>
        </ul>
     </nav>
    </div>
  );
}

export default Navbar;