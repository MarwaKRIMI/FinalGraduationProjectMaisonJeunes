import React, { Component } from 'react';
import {Button} from 'mdbreact'
import './user-profile.css'


class UserProfile extends Component {
    render() {
        return (
            
		<div className="profil-container">
			<div className="profil-container-top"></div>
             <div className="profil-image-container">
                <img  className="profil-image" src="https://previews.123rf.com/images/valiza/valiza1607/valiza160700244/60006363-mignon-adolescent-gar%C3%A7on-12-14-ans-avec-schoolbag-posant-%C3%A0-l-ext%C3%A9rieur-.jpg"/>
            </div> 
            <div className="name-container"> <h2>Aymen Garyeni</h2> </div>
        <div className="profil-container-bottom">
            <div className="profile-information">
                <label>Nom:</label>
                <p>Garyeni</p>
            </div>
            <div className="profile-information">
                <label>Prénom:</label>
                <p>Aymen</p>
            </div>
            <div className="profile-information">
                <label>CIN:</label>
                <p>09250658</p>
            </div>
            <div className="profile-information"> 
                <label>Age:</label>
                <p>14 ans</p>
            </div>
            <div className="profile-information">
                <label>Email:</label>
                <p>aymen.gharieni@gmail.com</p>
            </div>

		</div>	
        <input type="button" class="btn " value="Modifier"/>
		</div>
		
		)
}}


export default UserProfile;

