import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import "./message-box-modal.css"

const Messages = () => (
  <Modal style={{maxHeight:"50%"}} trigger={<Button style={{
        position: "relative",
        bottom:"21%",
        backgroundColor: "orange",
        color: "white",
        fontWeight: "100"}}>Messages</Button>} closeIcon>
    <Header  icon='envelope' content='Messages:' />
    <Modal.Content>
      <ol>
     <li> <div className="message-content">
        <p>Votre demande d'adhération au club de musique a été acceptée.</p> 
     <button>x</button>
     </div>
     </li>
     <li> <div className="message-content">
        <p>Votre demande d'adhération au club de aérobique a été refusée, capacité limitée.</p> 
     <button>x</button>
     </div>
     </li>
     <li> <div className="message-content">
        <p>La séance d'entrainement du club de musique sera reportée pour samedi 29/10/2018 à 11h.</p> 
     <button>x</button>
     </div>
     </li>
     <li> <div className="message-content">
        <p>La maison de jeunes sermera ses portes de 23/10/2018 au 29/10/2018 à cause des travaux d'entretien</p> 
     <button>x</button>
     </div>
     </li>
      
      </ol>
    </Modal.Content>
    
  </Modal>
)

export default Messages