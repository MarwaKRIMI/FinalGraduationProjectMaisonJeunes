import React from 'react'
import Club from "./club/club"
import Propos from '../AdminInterfaces/Propos'
import Galery from '../galery'
import Evenement from '../AdminInterfaces/Evenement'
class HomeUser extends React.Component{
    render() {
        return <div> User Page
              <Propos/>
              <Galery/>
            <Club/>
           
            <Evenement/>
          
             </div>
    }
}


export default HomeUser