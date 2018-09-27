import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';

import NavBarUser from '../navbar-user/navbar-user'
import image1 from '../../images/58debd7d479a4550008b5696.jpg';
import image2 from '../../images/06362fdc-7698-11e3-87ca-cfcd83175838_original.jpg_h380.jpg';
import image3 from '../../images/14390625_10154437529094462_4389508975692741080_n.jpg';
import image4 from '../../images/DSC_0152.JPG';
import image5 from '../../images/DSC01048.JPG';
import image6 from '../../images/jeunesse-et-dynamisme-au-bilan-du-basket-club-basse-loire.jpg';
import './explore-club.css'


class ExploreClubBasket extends Component {

  render(){
    return(
      <div>
        <NavBarUser/>
        <div  style={{marginTop:'5%'}}>
        <h1  className='title-club'>CLUB BASKETBALL</h1>
          </div>
      <div className="container mt-8">
        <div className="row">
          <div className="col-md-12">
            <Carousel 
              activeItem={1}
              length={6}
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
               
             
              </CarouselInner>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='about-peinture' >
  
      
        <p  className='about-club' >
    <h2><b>Présentation:</b></h2><br/>


   Notre club est toujours actif, et a pour vocation de proposer la pratique et <br/>
    l’apprentissage du Basketball, ainsi que la promotion de ce sport dans touts les gouvernerats<br/>

    Sous l’impulsion de ses membres, le  Club vous invite à pratiquer le basketball tout au long de l’année scolaire (de october à juin) dans la catégorie Senior (masculin, féminin et mixte). <br/>
<br/>
      <h2><b>Entrainements:</b></h2><br/>
L'équipe Sénior masculine le mercredi de 20h30 à 22h00.<br/>

L'équipe jeune le mercredi de 19h00 à 20h30.<br/>

Le minibasket le mercredi de 18h00 à 19h00.<br/>
Le minibasket le samedi de 14h00 à 15h30.<br/>

L'équipe Sénior féminine le lundi de 18h00 à 20h00.<br/>

L'équipe Sénior masculine le vendredi de 20h00 à 22h00.<br/>
<br/>
<h2><b>Horaires	Détails</b></h2><br/>
9h – 9h30	Déplacements vers les quatre salles<br/>
9h30-11h30	Entrainements techniques par groupe répartis sur les quatre salles<br/>
12h -14h	Déjeuner commun <br/>
14h-17h	Temps calme + entraînements par équipe ou sortie découverte / ludique<br/>
17h-21h	Match type officiel  de 40 minutes avec arbitre et table de marque pour chaque équipe.<br/>
 Un challenge supplémentaire pour pimenter cette rencontre internationale.<br/>
Après 21h	Retour en famille<br/><br/>
<h2><b>Les conditions</b></h2><br/>
Le montant du camp est de 25DT par joueur et comprend :<br/>

Une tenue complète d’entraînement<br/>
Les séances d’entraînement par des coachs qualifiés<br/>
Les matchs / les déplacements entre 9h et 21h<br/>
Cinq repas du midi<br/>
L’hébergement au sein des familles de club<br/>
Animations


        </p>
        </div>
      


        

  
          </div>

    );
  }
}

export default ExploreClubBasket;