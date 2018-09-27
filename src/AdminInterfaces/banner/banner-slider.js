import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';
import"../../App.css"
import "./banner-slider.css"
import image1 from '../../images/04_9_14_2_1.jpg';
import image3 from '../../images/25435-161004135746613-01.jpg';
import image4 from '../../images/fitness-first-aerobic-club-subhash-nagar-dehradun-dance-classes-ipdpnz1.jpg';
import image5 from '../../images/camp_de_jour_artistique_peinture_dessin_2_laval_st-jerome.jpg';
import image6 from '../../images/6524628_20170104-113641_1000x625.jpg';
import image7 from '../../images/maxresdefault.jpg';
import image8 from '../../images/step-aerobics.jpg';


class Banner extends Component {

  render(){
    return(
      <div>
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
                <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/31530715_2141059402590239_1445266815910412288_n.jpg?_nc_cat=104&oh=7d01a0eeeb299279c078b92e53dc06be&oe=5C5EA884"/>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}src="https://media.paperblog.fr/i/555/5556228/randonnee-visite-ksours-beni-khedache-sud-tun-L-lc0FoU.jpeg"/>
                   
               
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
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src="https://scontent.ftun5-1.fna.fbcdn.net/v/t1.0-9/31682412_2141056905923822_7360270873741230080_n.jpg?_nc_cat=111&oh=c763bbf021b2f0e4b5dc73236265cb99&oe=5C5CD997"/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="7">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src="https://scontent.ftun5-1.fna.fbcdn.net/v/t1.0-9/31693187_2141056292590550_1125192783427010560_n.jpg?_nc_cat=104&oh=2692c1e186c2ec4c73b5296f76d734b5&oe=5C19A1AB"/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="8">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src="https://scontent.ftun5-1.fna.fbcdn.net/v/t1.0-9/31655480_2141056532590526_2080474044989177856_n.jpg?_nc_cat=100&oh=f91d7d3b2c8b77296fcb36a472af33de&oe=5C5A93F1"/>
                </CarouselItem>
             
              </CarouselInner>
            </Carousel>
          </div>
        </div>
      </div>

      
    
          </div>

    );
  }
}

export default Banner;