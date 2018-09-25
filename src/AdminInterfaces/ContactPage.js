import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Fa, Button, Input } from 'mdbreact';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

class Maps extends Component {
    render() {
    const GoogleMapExample = withGoogleMap(props => (
       <GoogleMap
         defaultCenter = { { lat: 35.8403098, lng: 10.6213368 } }
         defaultZoom = { 13 }
       >
       </GoogleMap>
    ));
    return(
       <div>
         <GoogleMapExample
           containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
           mapElement={ <div style={{ height: `100%` }} /> }
         />
       </div>
    );
    }
 };
class ContactPage extends Component {
  render() {
 
    return(
      <Container>
        <section className="my-5" id='section-contact'>
          <h2 className="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
          <p className="text-center w-responsive mx-auto pb-5"></p>
          <Row>
            <Col lg="5" className="lg-0 mb-4">
              <Card>
                <CardBody>
                  <div className="form-header blue accent-1">

                  </div>
                  <p className="dark-grey-text"></p>
                  <div className="md-form">
                    <Input icon="user" label="Nom & Prénom" iconClass="grey-text" type="text" id="form-name" />
                  </div>
                  <div className="md-form">
                    <Input icon="envelope" label="Entrer votre adresse email" iconClass="grey-text" type="text" id="form-email" />
                  </div>
                  <div className="md-form">
                    <Input icon="phone" label="Entrer votre numéro de téléphone" iconClass="grey-text" type="text" id="form-email" />
                  </div>
                  <div className="md-form">
                    <Input icon="tag" label="Subjet" iconClass="grey-text" type="text" id="form-subject" />
                  </div>
                  <div className="md-form">
                    <Input icon="pencil" label="Message" iconClass="grey-text" type="textarea" id="form-text" />
                  </div>
                  <div className="text-center">
                    <Button color="amber">Envoyer</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
            {/*yabda hna*/}

            <Maps/>

            
            {/*youfa hna*/}
            <Row className="text-center">
                <Col md="4">
                  <Button tag="a" floating color="blue" className="accent-1">
                    <Fa icon="map-marker"/>
                  </Button>
                  <p>Khzama, Avenue Taïeb Mehiri</p>
                  <p className="mb-md-0">Sousse</p>
                </Col>
                <Col md="4">
                  <Button tag="a" floating color="blue" className="accent-1">
                    <Fa icon="phone"/>
                  </Button>
                  <p>+216 00 00 00</p>
                  <p className="mb-md-0">lundi - Dimanche<br/> 8:00-19:00</p>
                </Col>
                <Col md="4">
                  <Button tag="a" floating color="blue" className="accent-1">
                    <Fa icon="envelope"/>
                  </Button>
                  <p>info@gmail.com</p>
                  <p className="mb-md-0">Email@exemple.com</p>
                </Col>
              </Row>
            </Col>
          </Row>
    
        </section>
      </Container>
    );
  };
}

export default ContactPage;