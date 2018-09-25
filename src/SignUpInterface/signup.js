import React, { Component } from 'react';
import './signup.css'
import img from '../images/1.jpg';
import { BrowserRouter as Router, Link } from "react-router-dom";
class SignUp extends Component {
    render() {
        return (
            <div>
                	<div className="image-container fluide" style={{display:'flex'}}>
					<div className="image-container" style={{background:'{img}'}}>
					
					</div>
		            <div className="form-container">
			        <form >
				     <div className="form-style-agile">
				        <h1 style={{textAlign:'center', color:'white'}}>Inscrivez-vous</h1>
					   
					    <div className="input-form">
						<input placeholder="Entrer votre nom" name="Name" type="text" required=""/>
						<span className="glyphicons glyphicons-user" aria-hidden="true"></span>
					    </div>
				        </div>
                        <div className="form-style-agile">
					    
					    <div className="input-form">
						<input placeholder="Entrer votre prénom" name="Name" type="text" required=""/>
						<span className="glyphicons glyphicons-user" aria-hidden="true"></span>
					    </div>
				        </div>
                            <div className="form-style-agile">
					
					<div className="input-form">
						<input placeholder="Entrer votre numéro de carte d'identité nationale" name="Name" type="text" required=""/>
						<span className="glyphicons glyphicons-user" aria-hidden="true"></span>
					</div>
				</div>
                <div className="form-style-agile">
					
					<div className="input-form">
						<input placeholder="Entrer votre age" name="Name" type="text" required=""/>
						<span className="glyphicons glyphicons-user" aria-hidden="true"></span>
					</div>
					</div>
           			<div >
					
						
					<select className="input-sexe" className="option" placeholder="sexe">
                      <option value="homme">Homme</option>
                       <option value="femme">Femme</option>
 
                        </select>
					</div>
				<div className="form-style-agile">
					
					<div className="input-form">
						<input placeholder="Entrer votre email..." name="Email" type="email" required=""/>
						<span className="glyphicons glyphicons-user" aria-hidden="true"></span>
					</div>
				</div>
				<div className="form-style-agile">
					
					<div className="input-form">
						<input placeholder="Mot de passe ..." name="Password" type="password" id="password1" required=""/>
						<span className="glyphicons glyphicons-user" aria-hidden="true"></span>
					</div>
				</div>
				<div className="form-style-agile">
			
					<div className="input-form">
						<input placeholder="Confirmer votre mot de passe ..." name="Confirm Password" type="password" id="password2" required=""/>
						<span className="glyphicons glyphicons-user" aria-hidden="true"></span>
					</div>
				</div>
				<div className="sub-agile">
					<input type="checkbox" id="brand1"  value=""/>
					<label for="brand1">
						<span style={{color:'white'}}>J'accepte les termes & Conditions</span></label>
				</div>
			
				<div className="clear" ></div>
				<input className="inscription-btn" type="submit" value="S'inscrire"/>
				<div >
                <Link to="/">
              			  <input className="connexion-btn" type="button" value="se connecter"/>
			    </Link>
			</div>
		
			</form>
		</div>
	</div>
            </div>
        );
    }
}

export default SignUp;