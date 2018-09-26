import React from 'react'
import Club from "./club/club"
import Propos from '../AdminInterfaces/Propos'
import Galery from '../galery'
import Evenement from '../AdminInterfaces/Evenement'
import Navbar from './navbar-user/navbar-user'
class HomeUser extends React.Component{
    render() {
        return <div> User Page
            <Navbar/>
              <Propos id='à propos'/>
              <Evenement id='evénements'/>
              <Galery id='galerie'/>
            <Club id='clubs'/>
           
             </div>
    }
}


export default HomeUser