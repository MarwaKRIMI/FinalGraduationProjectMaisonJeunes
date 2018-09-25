import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Button } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
//qimport 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
                <Navbar  className="navbar"  dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Complexe des jeunes</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="#">Acceuil</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">A propos</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Clubs</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Hébergement</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Faire un don</NavLink>
                          </NavItem>
                        
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem>
                           <Button outline color="amber darken-1"> Se connecter </Button>
                         </NavItem>
                         <NavItem>
                           <Button outline color="amber darken-1"> S'inscrire </Button>
                         </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
           
        );
    }
}
export default NavbarFeatures