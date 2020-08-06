import React, { useState } from "react";
import './App.css';
import Navbar from "./Components/nav-bar/Navbar";
import Carouselbox from "./Components/Carousels/Carousels";
import Banner from "./Components/logo/banners";
import 'bootstrap/dist/css/bootstrap.min.css';
import MemberShipCards from "./Components/Cards/cards.js";
import Tabled from "./Components/Table/tabled";
import Contact from "./Components/contact/contact";
import Footer from "./Components/footer/Footer";
import Afeatures from "./Components/Afeatures/AFeatures";
import Login from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  const [issignIn, setsignIn] = useState(false);
  const [issignUp, setsignUp] = useState(false);

  function onSignInClick()
  {
    setsignIn(true);
    setsignUp(false);
  }

  function onSignUpClick()
  {
    setsignIn(false);
    setsignUp(true);
  }

  function onClick()
  {
    setsignIn(false);
    setsignUp(false);
  }


  return (
    <div >
      <Navbar  
      id="id1"
      onSignUpChanged={onSignUpClick}
      onSignInChanged={onSignInClick}
      onClicked = {onClick}
      />
       {(issignIn == true) ? 
            (<Login  id="login"
            onSignInChanged={onSignUpClick}/>)
            :(issignUp == true) ? (<SignUp id="register"
            onSignUpChanged={onSignInClick} />) : 
            (
              <div>
              <Carouselbox id="id3"
                onSignUpChanged={onSignUpClick}/>
                <Banner />
              <Afeatures />
              <MemberShipCards 
                id="id2"
                onSignUpChanged={onSignUpClick}
              />
              <Tabled />
              <Contact />
              </div>
            )}      
     
     <Footer />
    </div>
  );
}

export default App;
