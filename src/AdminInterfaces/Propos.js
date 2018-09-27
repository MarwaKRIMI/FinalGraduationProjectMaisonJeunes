import React, { Component } from 'react';
//import {View}from 'react-native-hr-component'
import './propos.css'

import propos from '../images/m.jpg';
import ProposModal from './modal-props';
//import { StyleSheet } from 'react-native';


// const styles = StyleSheet.create({
//   lineStyle:{
//         borderWidth: 0.5,
//         borderColor:'orange',
//         margin:10,
//    }
//  });
class Propos extends Component {
    render() {
        return (
            <div id="à propos">
                   <h1 className='propos-title' >A propos  </h1>
            <div className='container'>
                        <div className='propos-description'>
                        La maison des jeunes de sousse a pour mission de promouvoir le projet
                         
                          maison de jeunes qui vise à aider les jeunes à devenir des citoyens critiques, actifs et responsables.<br/>

                    <ProposModal/>
                        </div>
                        <div >
                            <img src={propos}  style={{width:'70%',height:'70%'}} />
                        </div>
                        <div className="statistics">
                            <div className='student' >
                                <h3>1500</h3>
                                {/* <View style = {styles.lineStyle} /> */}
                                <h4>Membres</h4>
                            </div>
                        
                            <div className='animators'>
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