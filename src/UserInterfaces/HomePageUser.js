import React from 'react'
import Club from "./club/club"
import Propos from '../AdminInterfaces/Propos'
import Evenement from '../AdminInterfaces/Evenement'
import Navbar from './navbar-user/navbar-user'
import Banner from'./banner/banner-slider'
class HomeUser extends React.Component{
    render() {
        return <div> User Page
            <Navbar/>
            <Banner/>
              <Propos id='à propos' />
              <Evenement id='evénements'/>
            <Club id='clubs'/>
           
             </div>
    }
}


export default HomeUser