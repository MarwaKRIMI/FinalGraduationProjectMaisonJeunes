
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
<div>
  <h1 className='msg-title' style={{textAlign:"center", margin:'2%'}}>ENVOIE DES MESSAGES</h1>
      <Form style={{width:"600px", color:'black',marginLeft:'30%',marginTop:'5%'
      ,border:'1px solid black',padding:'100px'}}>
           <FormGroup>
          <Label >Selectionnez un destinataire</Label>
          <Input type="select"  name="select" id="exampleSelect">
            <option>Tous les adhérents</option>
            <option>Club Peinture</option>
            <option>Club Musique</option>
            <option>Club Informatique</option>
            <option>Club Football</option>
            <option>Club Basketball</option>
            <option>Club Handball</option>
            <option>Club Aerobique</option>
            <option>Club Gymnastique</option>
          </Input>
          </FormGroup>
      <FormGroup >
       <Label >Sujet du message</Label>
    <Input type="text" name="text" id="exampleText" />
  
      </FormGroup>   
      
     
        <FormGroup>
          <Label >Ecrivez votre message ici</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label >Ajoutez un fichier supplementaire</Label>
          <Input type="file" name="file" id="exampleFile" />
          
        </FormGroup>
      
        <Button type="submit" style={{marginLeft:'30%'}} color="warning">Envoyer</Button>
       
      </Form>
      </div>
    );
  }
}