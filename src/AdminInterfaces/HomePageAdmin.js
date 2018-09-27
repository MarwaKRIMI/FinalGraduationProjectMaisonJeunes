import React from 'react'
import '../App.css'
import Propos from './Propos'
import Galery from '../galery'
import Evenement from './Evenement'
import HomePage from './HomePage'
import Example from '../Example'
class HomeAdmin extends React.Component{
    render() {
        return <div>
         
            <Example/>
            <Propos id='propos'/>
            <Galery id='galery'/>
            <Evenement id='evenement'/>
            <HomePage id='club'/>

            </div>
    }
}

export default HomeAdmin