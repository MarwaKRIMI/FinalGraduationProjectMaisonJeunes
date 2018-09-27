import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';

import image1 from '../../images/201305291157-full.jpg';
import image2 from '../../images/cr.jpg';
import image3 from '../../images/event1.jpg';
import image4 from '../../images/event3.jpg';
import image5 from '../../images/floor.jpg';
import image6 from '../../images/gym-group.jpg';
import image7 from '../../images/img-etirements.jpg';
import image8 from '../../images/little_gym1.jpg';
import image9 from '../../images/registration-960x322.jpg';
import image10 from '../../images/wissem-herzi.jpg';
import image11 from '../../images/1111.jpg';
import NavBarUser from '../navbar-user/navbar-user'
import './explore-club.css'
class ExploreClubGymnastic extends Component {

  render(){
    return(
      <div>
         <NavBarUser/>
        <div style={{marginTop:'5%'}}>
         <h1 className='title-club'>CLUB GYMNASTIQUE</h1>
          </div>
      <div className="container mt-8">
        <div className="row">
          <div className="col-md-12">
            <Carousel 
              activeItem={1}
              length={11}
              showControls={true}
              showIndicators={false}
              className="z-depth-1">
              <CarouselInner>
                <CarouselItem itemId="1">
                <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image1}/>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}src={image2}/>
                   
               
                </CarouselItem>
                <CarouselItem itemId="3">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image3}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="4">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image4}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="5">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image5}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="6">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image6}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="7">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image7}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="8">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image8}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="9">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image9}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="10">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image10}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="11">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image11}/>
                
                  
                </CarouselItem>
                
             
              </CarouselInner>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='about-peinture' >
  

      
      
        <p  className='about-club'>
    <h2><b>Présentation :</b></h2><br/>
la section Gymnastique du complexe des jeunes de Sousse  a su s'imposer grâce à un encadrement compétent.<br/>

Commençant alors avec une quarantaine de membres,la section Gymnastique et propose actuellement diverses activités telles que : <br/>
Gymnastique de Compétition et de Loisirs,<br/>
Baby-Gym, Fitness, Hip-Hop, Ragga et touche un public allant de 15 à 35 ans! et permet aux pratiquants d'évoluer et d'accéder aux filières de Haut Niveau.<br/>

Depuis, chaque année, plusieurs gymnastes représentent le club au niveau national sur les compétitions individuelles et par équipes.<br/>
<br/>
<h2><b>Pratiques compétitives :</b></h2> <br/>


la Gymnastique Artistique Féminine: exercices aux 4 agrès (saut de cheval, barres asymétriques, poutre et sol).<br/>
la Gymnastique Rythmique: pratique gymnique rythmée, chorégraphique et avec le maniement d'engins (le cerceau, la corde, les massues et le ballon).<br/>
Le trampoline : discipline acrobatique par excellence.<br/>
Le Tumbling : discipline acrobatique à grande vitesse<br/>
<br/>
<h2><b>Pratiques de loisirs :</b></h2> <br/>


la Gymnastique Forme Loisir: gymnastique d'entretien pour les adolescent(e)s et les adultes.<br/>
l'école de gym Acro-loisir le mercredi après-midi pour les 6/12 ans.(mixte)<br/>
le trampoline pour les ados et les adultes (deux séances en soirée)<br/>
la Baby-Gym : gymnastique petite enfance pour les 2/6 ans. Notre club a reçu le label petite enfance.<br/>

        </p>
        </div>

   
       


        

  
          </div>

    );
  }
}

export default ExploreClubGymnastic;