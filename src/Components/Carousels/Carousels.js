import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./carousels.css";

import { Link } from "react-router-dom";

 
function Carouselbox()  {


    return (    
 <Carousel showArrows={false} showStatus={false} showThumbs={false} dynamicHeight={false}>
              
                <div className="main">
                <div className="d-flex justify-content-around p-5 gallary-box">
                    <div className=" align-self-center content">
                         <b>MAPPING</b> made simple for any domain<br /><br />  <Link to="/giswebpage/register" className="buts"> SIGN UP FOR FREE</Link> 
                     </div>
                    <div>
                    <img src={require("./carousel.svg")} alt="hello" height="300" />
                    </div>
                </div>                   
                </div>

                <div className="main">
                <div className="d-flex justify-content-center p-5 gallary-box">
                    <div className=" align-self-center content">
                    Configurable <b>MAP INTERFACE</b> and <b>TOOLS</b><br /><br />  <Link to="/giswebpage/register" className="buts"> SIGN UP FOR FREE</Link>
                     </div>
                    <div>
                    <img src={require("./Carousel1.svg")} alt="hello" height="300" />
                    </div>
                </div>     
                </div>

                <div className="main ">
                <div className="d-flex justify-content-center p-5 gallary-box">
                    <div className=" align-self-center content">
                    Publish your <b>MAP DATA</b> to web and make it available for public/private users<br /><br />  <Link to="/giswebpage/register" className="buts"> SIGN UP FOR FREE</Link>  </div>
                    <div>
                    <img src={require("./Carousel2.svg")} alt="hello" height="300" />
                    </div>
                </div>     
                </div>

                <div className="main">
                <div className="d-flex justify-content-center p-5 gallary-box" >
                    <div className=" align-self-center content">
                    Perform Analysis on your <b>LOCATION DATA</b> with ease to obtain meaningful business insights<br /><br />  <Link to="/giswebpage/register" className="buts"> SIGN UP FOR FREE</Link>  </div>
                    <div>
                    <img src={require("./Carousel3.svg")} alt="hello" height="300" />
                    </div>
                </div>  
                </div> 
        </Carousel>

        )
    }
     
    


export default Carouselbox;
 
