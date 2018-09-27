import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';
import"../../App.css"
import image1 from '../../images/3eSpegardiensgarconsUne.jpg';
import image2 from '../../images/Club-africain-handball.jpg';
import image3 from '../../images/DI-final-2016_4.jpg';
import image4 from '../../images/handball_2.jpg';
import image5 from '../../images/kathryn-fudge_2056840b.jpg';
import image6 from '../../images/ptr_ekn_170216handball_01.jpg';
import NavBarUser from '../navbar-user/navbar-user'
import './explore-club.css'


class ExploreClubHand extends Component {

  render(){
    return(
      <div>
         <NavBarUser/>
        <div style={{marginTop:'5%'}}>
      <h1 className='title-club' >CLUB HANDBALL</h1>
          </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <Carousel style={{marginLeft:'10%'}}
              activeItem={1}
              length={6}
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
               
             
              </CarouselInner>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='about-peinture' >
  
      
        <p className='about-club'>
<h2><b>Présentation :</b> </h2> <br/>
Le Handball est le sport collectif français dont les résultats Internationaux sont depuis de nombreuses années les meilleurs.<br/>
Après le départ de joueurs cadres et l'intégration de jeunes très prometteurs, les filles sont en pleine reconstruction.<br/>
Sur le plan National, notre club conduit à l'émergence de nouvelles équipes avec de très grands joueurs qui assurent chaque semaine un spectacle de qualité reconnue.<br/>
Notre club profite pleinement de l’engouement pour le handball et a vu ses effectifs fortement augmenter ces dernières années.<br/>
dont le but est la pratique du HANDBALL en compétition et en loisir.<br/>
Accueil des enfants de l' école primaire grâce au dispositif "liaison école/Club".<br/>
Evènements sportifs réunissant 150/250 personnes chaque week end.<br/>
De fortes relations avec les entreprises misant sur notre développement.<br/>
Une équipe de bénévoles investie et soudée.<br/>
Tout cela fait partie intégrante du club et nous vous accueillons avec grand plaisir en espérant que nous saurons vous faire partager notre passion



Aujourd’hui, le club compte 386 adhérents de 6 à 40 ans qui pratiquent régulièrement le handball au sein de l’association.<br/>
Le club leur propose différentes offres de pratique, compétition, loisir ou HandFit ; l’objectif étant que chacun puisse y trouver son plaisir.<br/>
Pour la saison 2017-2018, <br/>
l’association compte les équipes suivantes sous les couleurs officielles du club :<br/>

4 équipes en compétition adultes : 2 masculines et 2 féminines<br/>
2 équipes loisirs adultes mixtes<br/>
10 équipes en compétition jeunes  : 4 masculines et 6 féminines<br/>
2 équipes loisirs jeunes mixtes : moins de 7 et moins de 9 ans<br/>
1 section HandFit<br/>


        </p>
        </div>
      


        
        
          </div>

    );
  }
}

export default ExploreClubHand;