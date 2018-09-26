import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';
import"../../App.css"
import image1 from '../../images/5ade02da7aa41_foot47.jpg';
import image2 from '../../images/1911848-214972868700203-252842685-n__n26jr4.jpg'
import image3 from '../../images/6524628_20170104-113641_1000x625.jpg';
import image4 from '../../images/atur3__ob18ek.jpg';
import image5 from '../../images/foot_beja.jpg';
import image6 from '../../images/teaserbox_62453518.jpg';
import image7 from '../../images/tunisiana-foot-academy-04.jpg';


class ExploreClubFoot extends Component {

  render(){
    return(
      <div>
        <div>
        <i> <h1 style={{textAlign:'center',marginTop:'50px', marginBottom:'50px',color:'#1E90FF',
        fontWeight:'bold'}}>CLUB FOOTBALL</h1></i>
          </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <Carousel style={{marginLeft:'5%', marginRight:'5%'}}
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
      <div className='about-peinture' >
      <h4>Instructeur : </h4>
      
        <p  style={{ textAlign: 'justify',marginLeft: '5%',fontSize:'25px',
    marginRight: '5%',   fontFamily: 'Times New Roman',color:'black',border:'1px solid black',padding:'50px',marginTop:'20px'}}>

    Présentation : <br/>

Un club dynamique fort de plus de 40 ans d’expérience dans l’initiation au football, la pratique sportive de loisir et de compétition<br/>

Une équipe professionnelle composée d’un salarié d’un responsable technique pour les équipes à 11 et  pour l’école de football et de 50 bénévoles réunis dans un esprit de convivialité, d’ambition et de développement du club.<br/>

Une équipe fanion jouant en PROMOTION D’HONNEUR REGIONAL cette année.<br/>

Une volonté de structurer le club autour d’un projet club, d’un projet technique ou de formation du jeune footballeur pour cela nous formons <br/>
nos éducateurs par l’intermédiaire des diplômes fédéraux mais aussi sous forme de formation interne afin que nos jeunes évoluent autant sur le plan footballistique que comportemental<br/>

        </p>
        </div>
      
   

       
  
          </div>

    );
  }
}

export default ExploreClubFoot;