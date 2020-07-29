import React from 'react';
import './Navbar.css';
import $ from "jquery";

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
            <li className="logo"> <img src={require("./gwm_web_white.svg")} alt="img" /></li>
            <li className="items"> <a href="#"> HOME</a>      </li>
            <li className="items"> <a href="#"> FEATURES</a>  </li>
            <li className="items"> <a href="#"> PLANS & PRICING</a></li>
            <li className="items"> <a href="#"> BLOG</a>       </li>
            <li className="items button "> <a href="#"> SIGN IN</a>    </li>
            <li className="items button secondary"> <a href="#"> SIGN UP</a>    </li>
            <li className="toggle"> <span className="bars">  </span></li>
        </ul>
     </nav>
    </div>
  );
}

export default Navbar;