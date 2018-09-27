import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';

import NavBarUser from '../navbar-user/navbar-user'
import image1 from '../../images/04_9_14_2_1.jpg'
import image2 from '../../images/7d22936d6aa2617ecd6229316f7f43b2.jpg';
import image3 from '../../images/fitness-first-aerobic-club-subhash-nagar-dehradun-dance-classes-ipdpnz1.jpg';
import image4 from '../../images/IMG_3837_82141.jpg';
import image5 from '../../images/maxresdefault (1).jpg';
import image6 from '../../images/maxresdefault.jpg';
import image7 from '../../images/step-aerobics.jpg';
import './explore-club.css'

class ExploreClubAerobic extends Component {

  render(){
    return(
      <div>
        <NavBarUser/>
        <div style={{marginTop:'5%'}}>
         <h1 className="title-club" >CLUB AEROBIQUE</h1>
          </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <Carousel style={{marginLeft:'10%'}}
              activeItem={1}
              length={7}
              showControls={true}
              showIndicators={false}
              className="z-depth-1">
              <CarouselInner>
                <CarouselItem itemId="1">
                <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}  src={image1}/>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}src={image2}/>
                   
               
                </CarouselItem>
                <CarouselItem itemId="3">
                  <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}  src={image3}/>
                  
                </CarouselItem>
                <CarouselItem itemId="4">
                  <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}  src={image4}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="5">
                  <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}  src={image5}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="6">
                  <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}  src={image6}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="7">
                  <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}  src={image7}/>
                
                  
                </CarouselItem>
              
             
              </CarouselInner>
            </Carousel>
          </div>
        </div>
      </div>
      <div  >

      
        <p  className='about-aerobic
        '>
    <b>Présentation :</b> <br/><br/>

La Gymnastique Aérobic de compétition se définit comme un exercice qui contient des mouvements continus, avec des éléments

de force et de souplesse, en se référant aux sept pas de base. L'enchaînement doit être exécuté à un haut niveau de difficultés

intégrant des combinaisons de pas de base de l'Aérobic, associés à des mouvements de bras, exécutés en musique, afin de créer

une dynamique et un enchaînement de séquences.<br/>
 Le choix des séquences devrait dégager une intensité plus grande que celle

nécessaire à la seule action au niveau cardio-vasculaire.<br/> Comme le muscle cardiaque devient par la pratique plus fort et

plus efficace, une plus grande quantité de sang peut être pompée à chaque pulsation. Par conséquent, le corps aura besoin de moins

de pulsations pour véhiculer le sang dans le corps.<br/> Un pratiquant régulier pourra donc travailler ses mouvements plus longtemps,

de manière plus vigoureuse et récupèrera très vite après la fin d'un exercice.<br/>

La Gymnastique Aérobic demande à la fois des mouvements dynamiques, exige de la force, de la souplesse, de la coordination

et un sens musical, tout cela concentré dans un exercice de 1 minute 45.<br/> L'exercice est présenté sur une surface de 7 x 7m

et de 10 x 10m pour les Groupes.
        </p>
        </div>
    
          </div>

    );
  }
}

export default ExploreClubAerobic;