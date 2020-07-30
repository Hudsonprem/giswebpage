import React from 'react';
import './Navbar.css';
import $ from "jquery";

function Navbar(props) {

    function handleClick() {
        props.onChanged();
      }
      function handleClick1() {
        props.onChanged1();
      }


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
            <li className="items"> <a href="#AFeature"> FEATURES</a>  </li>
            <li className="items"> <a href="#Plans"> PLANS & PRICING</a></li>
            <li className="items"> <a href="#"> BLOG</a>       </li>
            <li className="items button " onClick={handleClick1}> <a href="#"> SIGN IN</a>    </li>
            <li className="items button secondary" onClick={handleClick}> <a href="#"> SIGN UP</a>    </li>
            <li className="toggle"> <span className="bars">  </span></li>
        </ul>
     </nav>
    </div>
  );
}

export default Navbar;