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
                        Le Regroupement des maisons de jeunes du Québec a pour mission de promouvoir le projet maison de jeunes qui vise à aider les jeunes à devenir des citoyens critiques, actifs et responsables.<br/>

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
<Propos/>
                        </div>
                        <div >
                            <img src={propos}  style={{width:'100%',height:'70%'}} />
                        </div>
                        <div className="statistics">
                            <div className='student' >
                                <h3>1500</h3><br/>
                                <h4>Membres</h4>
                            </div>
                        
                            <div className='faculty'>
                                <h3>50</h3><br/>
                                <h4>Animateurs</h4>
                            </div>
                    
                        </div>
                    </div>
                </div>
        );
    }
}

export default Propos