import React from 'react'

import '../App.css'



import Propos from './Propos'
import Galery from '../galery'
import Evenement from './Evenement'
import ListInscrits from './ListInscrits'
import DemandesAdherents from './DemandesAdhesions'
import HomePage from './HomePage'
import AddProduct from './AjouterClub'
import EditProduct from './EditProduct'
import AjouterClub from './AjouterClub';
class HomeAdmin extends React.Component{

    render() {
        return <div>
           
         
            
            <Propos/>
      <Galery/>
  <Evenement/>
  <ListInscrits/>
<DemandesAdherents/>
<HomePage/>
<AjouterClub/>
<EditProduct/>
            </div>

    }
}

export default HomeAdmin