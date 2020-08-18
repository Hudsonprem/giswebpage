import React from "react";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Carouselbox from "./Components/Carousels/Carousels";
import Banner from "./Components/logo/banners";
import MemberShipCards from "./Components/Cards/cards.js";
import Tabled from "./Components/Table/tabled";
import Contact from "./Components/contact/contact";
import Login from "./Components/Auth/SignIn/SignIn";
import SignUp from "./Components/Auth/SignUp/SignUp";
import Navbar from "./Components/nav-bar/Navbar";
import Footer from "./Components/footer/Footer";
import Afeatures from "./Components/Afeatures/AFeatures";
import 'react-toastify/dist/ReactToastify.css';

import Protected from "./Components/Auth/ProtectorFiles/protected";
import Home from "./Components/Auth/Home";
import { Switch , Route } from "react-router-dom";

function App() {
  function Main() {
    return (
      <div>
           <Carouselbox />
          <Banner />
          <Afeatures />
          <MemberShipCards />
          <Tabled />
          <Contact />
      </div>
    );
  }
 
  return (
    
    <div >
    <Navbar />
   <Switch >
          <Route exact path = "/" component ={Main} />
          <Route exact path = "/login" component ={Login} />
          <Route exact path = "/Register" component ={SignUp} />
          <Protected exact path = "/home" component ={Home} />
      </Switch>
    <Footer />
</div>
      
      
  );
}

export default App;
