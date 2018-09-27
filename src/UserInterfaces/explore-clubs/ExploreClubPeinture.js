import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';

import image1 from '../../images/atelier-peinture-dessin-montmagny-2012_1.jpg';
import image2 from '../../images/banner_3.jpg';
import image3 from '../../images/camp_de_jour_artistique_peinture_dessin_2_laval_st-jerome.jpg';
import image4 from '../../images/des-enfants-sinitient-aux-dessins-celtiques.jpg';
import image5 from '../../images/IMG_20170418lt.jpg';
import image6 from '../../images/La-peinture-FB.jpg';
import image7 from '../../images/Enfant-peinture-mains-fotolia-630x0.jpg';
import image8 from '../../images/m-lange-agefac-expos-cours-mamy-noel-309.jpg';
import image9 from '../../images/thumb.jpg';
import './explore-club.css'
import NavBarUser from '../navbar-user/navbar-user'
class ExploreClubPeinture extends Component {

  render(){
    return(
      <div>
        <NavBarUser/>
        <div style={{marginTop:'5%'}}>
        <h1 className="title-club" >CLUB PEINTURE</h1>
          </div>
            <div className="container mt-5">
              <div className="row">
                 <div className="col-md-12">
                    <Carousel style={{marginLeft:'5%', marginRight:'5%'}}
                      activeItem={1}
                      length={9}
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
                <CarouselItem itemId="8">
                  <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}  src={image8}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="9">
                  <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}  src={image9}/>
                
                  
                </CarouselItem>
              </CarouselInner>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='about-peinture' >
 
      
      <p  className='about-club'>
    <h2><b>Présentation :</b></h2> <br/>
    Les cours d'été sont offerts en blocs de 10 cours, en bloc de 5 cours, ou à l'unité.<br/>
Choisissez parmi les dates et horaires proposés, et composez votre calendrier de cours.<br/>
Il est préférable de réserver les cours d'été à l'avance. Le nombre de places est limité.<br/>
<br/>
Ces cours sont offerts pour tous les niveaux : Débutant, intermédiaire, avancé.<br/>
<br/>
<h2><b>Cours offerts :</b></h2><br/>
Dessin<br/>
Peinture à l'huile<br/>
Peinture acrylique<br/>
Pastel sec<br/>
Aquarelle<br/>
Technique mixte<br/>
Nous vous enseignerons à peindre ou dessiner selon votre niveau et vos objectifs.<br/>
Paysage,<br/>
Portrait,<br/>
Floral,<br/>
Nature morte,<br/>
Animaux,<br/>
Abstrait.<br/>
     Groupes de 8 à 10 élèves environ.<br/>
<br/>
<h2><b>Professeur :</b></h2> René Milone.<br/>

<b>Différentes options sont offertes pour le matériel :</b><br/>
Matériel inclus (Le matériel est fourni pour chaque cours, sauf les toiles pour les projets personnels).<br/>
Matériel non inclus (L'étudiant apporte son propre matériel).<br/>
Vous pouvez vous procurer tout le matériel nécessaire à vos cours, directement à l'atelier. (Matériel)<br/>
Nous mettons à votre disposition un poste d'atelier équipé d'un chevalet, une chaise et une table. Les essuie-tout, le solvant et le médium pour la peinture à l'huile sont aussi fournis par l'Atelier.<br/>
        </p>
        </div>
      
 

        
          </div>

    );
  }
}

export default ExploreClubPeinture;