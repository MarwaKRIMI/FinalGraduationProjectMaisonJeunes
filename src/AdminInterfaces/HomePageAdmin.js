import React from 'react'
import '../App.css'


import Banner from'./banner/banner-slider'
import Propos from './Propos'
import Galery from '../galery'
import Evenement from './Evenement'
import HomePage from './HomePage'
import Example from '../Example'
class HomeAdmin extends React.Component{
    render() {
        return <div>
           
         <Banner/>
            
            <Propos/>
      
            <Evenement/>

            <HomePage/>

            </div>
    }
}

export default HomeAdmin