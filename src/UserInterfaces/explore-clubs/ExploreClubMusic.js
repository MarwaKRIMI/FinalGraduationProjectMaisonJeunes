import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';

import image1 from '../../images/700_ecoledemusique_1_16_11.jpg';
import image2 from '../../images/700_rencontredechorales_1_08_04.jpg';
import image3 from '../../images/25435-161004135746613-01.jpg';
import image4 from '../../images/B9713825998Z.1_20171116101229_000+G70A5OQQ6.1-0.jpg';
import image5 from '../../images/chorale_enfants_c_michel_7799.jpg';
import image6 from '../../images/club-de-musique.jpg';
import image7 from '../../images/COV-3-795x413.jpg';
import './explore-club.css'
import NavBarUser from '../navbar-user/navbar-user'

class ExploreClubMusic extends Component {

  render(){
    return(
      <div style={{marginTop:'5%'}}>
        <NavBarUser/>
        <div>
        <h1 className="title-club" style={{marginTop:'5%'}} >CLUB MUSIQUE</h1>
          </div>
      <div className="container mt-8">
        <div className="row">
          <div className="col-md-12">
            <Carousel 
              activeItem={1}
              length={7}
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
             
              </CarouselInner>
            </Carousel>
          </div>
        </div>
      </div>
      <div >

      
        <p  className='about-club' >

 <h2> <b>Présentation :</b></h2><br/><br/>

   

Notre   Club  des  Amateurs  d'Instruments  et  Musique du  Monde  est  une association créée  en  octobre  2013  par  trois  membres  fondateurs,<br/>
musiciens  amateurs, passionnés de  musique  du monde et désireux de faire  parler leurs  instruments singuliers.<br/>

Il a pour objet de conserver, développer et promouvoir le goût et la connaissance de l’Art Musical,<br/>
en s’appuyant sur l’esprit de solidarité et de camaraderie qui anime ses membres.<br/>

Il propose une ouverture sur la musique et les instruments du monde à toute personne en exprimant le désir.<br/>

Ses projets artistiques sont la pratique de la musique du monde, de mélodies et rythmiques transculturelles,<br/> 
l'animation de conférences et l'organisation de concerts. <br/>



L'idée  est  partie  du  constat que,  bien  souvent,  nous  sommes  formatés  à ne  pouvoir  apprecier que  l'élite  de  ce  que  nous  connaissons  déjà... <br/>
ou  de  ce  qu'une  politique de  majorité aura  choisi  pour  nous... Nos  sociétés  modernes ne laissent que très  peu  de  place  aux  "formations  originales" qui,  sans  doute,<br/> 
ratissent  un  publique  moins  large que les  productions  industrielles...  Nous  avons  souhaité  laisser  la  parole  aux  instruments délaissés  des orchestres  et aux  artistes qui  en ont  fait  leur cheval de  bataille !<br/>
<br/>
<h2><b>Activités :</b></h2><br/>

Cet  espace  d'échange est  destiné  à présenter les  activités  du  club :  concerts,  conférences, stages etc... Vous  y retrouverez  par ailleurs,  nos  influences  et  nos  partis pris musicaux. <br/>


Le  Blog  en est  encore  à ses débuts,  nous  espérons  le  faire  beacoup évoluer dans  les mois  à venir. <br/> 

Surfez, balladez  vous, voyagez !!!



N'hésitez  pas  à nous contacter  ou  nous  laisser  vos  impressions en commentaires<br/>

Nous  vous  remercions vivement pour  l'intérêt que  vous  portez à notre  club.<br/>

        </p>
        </div>
      


        

  
          </div>

    );
  }
}

export default ExploreClubMusic;