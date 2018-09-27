import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import "./message-box-modal.css"

const Propos = () => (
  <Modal style={{maxHeight:"50%"}} trigger={<Button style={{
        position: "relative",
        bottom:"21%",
        backgroundColor: "orange",
        color: "white",
        fontWeight: "100"}}>Explorer</Button>} closeIcon>
    
    <Modal.Content>
      <div>
          <p>
          En chiffre, la maison de jeunes de sousse c'est :<br/>
-1500 jeunes âgés entre 5 et 35 ans<br/>
PLUS DE 50 animatrices et animateurs<br/>
Au-delà de 100 bénévoles<br/>
Rôle et objectifs:<br/>
Promouvoir le concept « maison de jeunes »<br/>
Promouvoir et défendre le respect et les droits des jeunes<br/>
Soutenir le développement personnel des jeunes<br/>
Favoriser l’apprentissage de la citoyenneté<br/>
Être un lieu d’échanges et de rencontres entre les maisons de jeunes<br/>
 

Concrètement, par ses actions quotidiennes, la maison des jeunes de sousse défend un financement adéquat de ces activités pour en assurer le maintien et le développement. Elle 
représente également et protège les intérêts des jeunes partout où cela est nécessaire.<br/>
Permet aux nouvelles maisons de jeunes de puiser dans l’expérience des anciennes et aux anciennes d’être stimulées par le dynamisme des nouveaux projets.<br/>
Permet à des jeunes de milieux différents et de régions diverses de se voir, d’échanger et de travailler ensemble aux grandes orientations du regroupement.<br/>
elle offre, aussi, à l’ensemble de ses membres une vie associative riche et vivante.<br/>
          </p>
      </div>
     
    </Modal.Content>
    
  </Modal>
)

export default Propos