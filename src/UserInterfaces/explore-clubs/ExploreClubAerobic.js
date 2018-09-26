import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';
import"../../App.css"
import image1 from '../../images/04_9_14_2_1.jpg';
import image2 from '../../images/7d22936d6aa2617ecd6229316f7f43b2.jpg';
import image3 from '../../images/belles-femmes-exercant-a-nice-aerobic-fitness-club-g194ca.jpg';
import image4 from '../../images/fitness-first-aerobic-club-subhash-nagar-dehradun-dance-classes-ipdpnz1.jpg';
import image5 from '../../images/IMG_3837_82141.jpg';
import image6 from '../../images/maxresdefault (1).jpg';
import image7 from '../../images/maxresdefault.jpg';
import image8 from '../../images/step-aerobics.jpg';


class ExploreClubAerobic extends Component {

  render(){
    return(
      <div>
        <div>
        <i> <h1 style={{textAlign:'center',marginTop:'50px', marginBottom:'50px',color:'#1E90FF',
        fontWeight:'bold'}}>CLUB AEROBIQUE</h1></i>
          </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <Carousel style={{marginLeft:'5%', marginRight:'5%'}}
              activeItem={1}
              length={8}
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
             
              </CarouselInner>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='about-aerobic' >

      
        <p  style={{ textAlign: 'justify',marginLeft: '5%',fontSize:'25px',
    marginRight: '5%',   fontFamily: 'Times New Roman',color:'black',border:'1px solid black',padding:'50px',marginTop:'20px'}}>


La Gymnastique Aérobic de compétition se définit comme un exercice qui contient des mouvements continus, avec des éléments<br/>

de force et de souplesse, en se référant aux sept pas de base. L'enchaînement doit être exécuté à un haut niveau de difficultés<br/>

intégrant des combinaisons de pas de base de l'Aérobic, associés à des mouvements de bras, exécutés en musique, afin de créer<br/>

une dynamique et un enchaînement de séquences. Le choix des séquences devrait dégager une intensité plus grande que celle<br/>

nécessaire à la seule action au niveau cardio-vasculaire. Comme le muscle cardiaque devient par la pratique plus fort et<br/>

plus efficace, une plus grande quantité de sang peut être pompée à chaque pulsation. Par conséquent, le corps aura besoin de moins<br/>

de pulsations pour véhiculer le sang dans le corps. Un pratiquant régulier pourra donc travailler ses mouvements plus longtemps,<br/>

de manière plus vigoureuse et récupèrera très vite après la fin d'un exercice.<br/>

 

La Gymnastique Aérobic demande à la fois des mouvements dynamiques, exige de la force, de la souplesse, de la coordination

et un sens musical, tout cela concentré dans un exercice de 1 minute 45. L'exercice est présenté sur une surface de 7 x 7m

et de 10 x 10m pour les Groupes.
        </p>
        </div>
    
          </div>

    );
  }
}

export default ExploreClubAerobic;