import React, { Component } from "react";
import "./CarouselKitsune.css";  
import Carousel from "react-bootstrap/Carousel"; 

export class CarouselKitsune extends Component {  
        render() {  
        return (  
            <div className='container-fluid' > 
                <div>
                <img class="Carousel_Logo" src="./Img/logo/Asset2Yellow.svg" alt=""></img> 
                </div>
                <Carousel controls={false} fade>  
                    <Carousel.Item style={{'height':"980px"}} >
                            <img style={{'height':"980px", 'opacity': "0.5"}}  className="d-block w-100" src={'./Img/Heroimages/slide1.jpg'} alt="" />  
                        <Carousel.Caption>
                            <h3 className="carouselKitsune_H3">Jouw favoriete films op 1 plek </h3>
                            <p className="carouselKitsune_p">Kitsune TV+ heeft met duizenden films  uit binnen- en buitenland het meest gevarieerde film aanbod. Bij kitsune TV+ kan je het aanbod onder verdelen in uiteenlopende genres, waaronder een groot aantal films voor kinderen

Het aanbod wordt maandelijks aangevuld met onlangs uitgebrachte films, slechts enkele maanden nadat ze in de bioscoop zijn verschenen.
 </p>

                        </Carousel.Caption>  
                    </Carousel.Item  >  
                    <Carousel.Item style={{'height':"980px"}}>
                            <img style={{'height':"980px", 'opacity': "0.5"}}   className="d-block w-100"  src={'./Img/Heroimages/slide2.jpg'}  alt=""  />  
                        <Carousel.Caption>
                            <h3 className="carouselKitsune_H3">Kijk overal waar je ook bent </h3>
                            <p className="carouselKitsune_p">
Kijk altijd en overal waar je ook bent. Log in bij je account om direct online te kijken vanaf je computer met een internetverbinding.</p>
                        </Carousel.Caption>  
                    </Carousel.Item>  
                        <Carousel.Item style={{'height':"980px"}}>
                            <img style={{'height':"980px", 'opacity': "0.5"}}  className="d-block w-100"  src={'./Img/Heroimages/slide3.jpg'} alt="" />  
                        <Carousel.Caption>  
                            <h3 className="carouselKitsune_H3">Films worden nooit verwijderd </h3>
                            <p className="carouselKitsune_p">Bij Kitsune TV+ hebben we een groot aanbod aan films. Dit aanbod kunnen we behouden omdat we geen films verwijderen, hierdoor kan je altijd jouw favoriete films terug kijken wanneer jij dat graag wilt. </p>
                        </Carousel.Caption>  
                    </Carousel.Item>  
                </Carousel>  
            </div>  
        )  
    }  

}  

export default CarouselKitsune

  
