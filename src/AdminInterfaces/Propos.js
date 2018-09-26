import React, { Component } from 'react';
import './propos.css'

import propos from '../images/m.jpg';
class Propos extends Component {
    render() {
        return (
            <div id="à propos">
                   <h1 className='propos-title' >A propos  </h1>
            <div className='container'>
                        <div className='propos-description'>
                            <p>
                                Les maisons de jeunes membres du RMJQ sont des associations de<br/>
                                jeunes et d’adultes qui se sont donné pour mission, sur une base<br/>
                                volontaire, dans leur communauté, de tenir un lieu de rencontre<br/>
                                animé où les jeunes de 12 à 17 ans, au contact d’adultes significatifs,<br/>
                                pourront devenir des citoyennes et des citoyens critiques, actifs<br/>
                                et responsables.<br/>
                       
                            </p>
                            



                        </div>
                        <div >
                 
                            <img src={propos}  style={{width:'100%',height:'70%'}} />
                        </div>
                        <div className="statistics">
                            <div className='student' >
                                <h3>7000</h3><br/>
                                <h4>Etudiants</h4>
                            </div>
                        
                            <div className='faculty'>
                                <h3>600</h3><br/>
                                <h4>Facultés</h4>
                            </div>
                    
                        </div>
                    </div>
                </div>
        );
    }
}

export default Propos