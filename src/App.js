import React from 'react';
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

function App() {
  return (
    <div >
      <Navbar />
      { 1 ===1 ? (
        <div>
        <Carouselbox />
         <Banner />
        <Afeatures />
        <MemberShipCards />
        <Tabled />
        <Contact />
        <Footer /> 
     </div>) : (
      <Footer />
     ) }
     
     
     
    </div>
  );
}

export default App;
