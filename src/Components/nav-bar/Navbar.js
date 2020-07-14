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
    <div>
     <nav>
        <ul className = "menu">
            <li className="logo"> <h1>GeoMapweb</h1></li>
            <li className="items"> <a href="#"> Home</a>      </li>
            <li className="items"> <a href="#"> Features</a>  </li>
            <li className="items"> <a href="#"> Plans & Pricing</a></li>
            <li className="items"> <a href="#"> Blog</a>       </li>
            <li className="items button signIn"> <a href="#"> Sign In</a>    </li>
            <li className="items button secondary"> <a href="#"> Sign Up</a>    </li>
            <li className="toggle"> <span className="bars">  </span></li>
        </ul>


     
     </nav>
    
     
    </div>
  );
}

export default Navbar;