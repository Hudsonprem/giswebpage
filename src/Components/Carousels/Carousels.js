import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./carousels.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 
function Carouselbox()  {


    return (    
          
        <Carousel className="carousel"  showArrows={false} showStatus={false} showThumbs={false} dynamicHeight={false}>
              
                <div className="main">
                <Container>
                    <Row>
                        <Col className="content" sm={12} lg={6} sm={{ order: 'last' }} lg={{ order: 'first' }}>Web <b>MAPPING</b> made simple for any domain<br /><br /><a className="buts" href="#"> SIGN UP FOR FREE</a></Col>
                        <Col sm={12} lg={6} ><img src={require("./carousel.svg")} alt="hello" height="300" /></Col>
                    </Row>
                </Container>                   
                </div>

                <div className="main">
                <Container>
                    <Row>
                        <Col className="content" sm={12} lg={6} sm={{ order: 'last' }} lg={{ order: 'first' }}>Configurable <b>MAP INTERFACE</b> and <b>TOOLS</b><br /><br /><a className="buts" href="#"> SIGN UP FOR FREE</a></Col>
                        <Col sm={12} lg={6} ><img src={require("./Carousel1.svg")} alt="hello" height="300" /></Col>
                    </Row>
                </Container>    
                </div>

                <div className="main ">
                <Container>
                    <Row>
                        <Col className="content" sm={12} lg={6} sm={{ order: 'last' }} lg={{ order: 'first' }}>Publish your <b>MAP DATA</b> to web and make it available for public/private users<br /><br /><a className="buts" href="#"> SIGN UP FOR FREE</a></Col>
                        <Col sm={12} lg={6} ><img src={require("./Carousel2.svg")} alt="hello" height="300" /></Col>
                    </Row>
                </Container>    
                </div>

                <div className="main">
                <Container>
                    <Row>
                        <Col className="content" sm={12} lg={6} sm={{ order: 'last' }} lg={{ order: 'first' }}>Perform Analysis on your <b>LOCATION DATA</b> with ease to obtain meaningful business insights<br /><br /><a className="buts" href="#"> SIGN UP FOR FREE</a></Col>
                        <Col sm={12} lg={6} ><img src={require("./Carousel3.svg")} alt="hello" height="300" /></Col>
                    </Row>
                </Container> 
                </div> 
        </Carousel>
            
        )
    }
     
    


export default Carouselbox;
 
