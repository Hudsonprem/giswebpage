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
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(2);

  function onSignClick()
  {
    if(value === 0)
    {
      setValue(1);
    }
    else{
      setValue(0); 
    }

  }

  function onSignInClick()
  {
    if(value === 2 )
    {
      setValue(0);
    }
    else{
      setValue(2); 
    }
  
  }

  return (
    <div >
      <Navbar  
      id="id1"
      onChanged={onSignClick}
      onChanged1={onSignInClick}
      />

      { value === 0 ? (
        <div>
        <Carouselbox id="id3"
          onChanged={onSignClick}/>
         <Banner />
        <Afeatures />
        <MemberShipCards 
          id="id2"
          onChanged={onSignClick}
        />
        <Tabled />
        <Contact />
        <Footer /> 
     </div>) : ( value === 1 ? ( 
       <div>
      
       <SignUp id="id4"
          onChanged={onSignClick}/>
      <Footer />
       </div>) : (
       <div>
       <Login id="id5"
          onChanged={onSignClick}/>
      <Footer />
       </div>) 
     ) }
     
     
     
    </div>
  );
}

export default App;
