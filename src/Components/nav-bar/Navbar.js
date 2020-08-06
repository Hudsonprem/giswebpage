import React from 'react';
import './Navbar.css';
import $ from "jquery";

function Navbar(props) {

    function handleSignUp() {
        props.onSignUpChanged();
      }
      function handleSignIn() {
        props.onSignInChanged();
      }

      function handleClick()
      {
        props.onClicked();
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
            <li className="logo"> <img className="main-icon" src={require("./gwm_web_white.svg")} alt="img" /></li>
            <li className="items"> <a onClick={handleClick} href="#" pagescroll id> HOME</a>      </li>
            <li className="items"> <a onClick={handleClick} href="#AFeature"> FEATURES</a>  </li>
            <li className="items"> <a onClick={handleClick} href="#Plans"> PLANS & PRICING</a></li>
            <li className="items"> <a onClick={handleClick} href="#"> BLOG</a>       </li>
            <li className="items button " onClick={handleSignIn}> <a href="#"> SIGN IN</a>    </li>
            <li className="items button secondary" onClick={handleSignUp}> <a href="#"> SIGN UP</a>    </li>
            <li className="toggle"> <span className="bars">  </span></li>
        </ul>
     </nav>
    </div>
  );
}

export default Navbar;