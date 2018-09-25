import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import {Link} from 'react-router-dom'

import { Container, Row, Col, Input} from 'mdbreact';

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
            
                <Navbar color="blue" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Navbar</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="#">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/envoyer-message"  id="Popover1" onClick={this.toggle}>Envoyer des messages</NavLink>
                              <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
        <Container>
        <Row>
          <Col md="6">
            <form>
              <p className="h5 text-center mb-4"></p>
              <div className="grey-text">
                <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
                <Input label="Your password" icon="lock" group type="password" validate/>
              </div>
              <div className="text-center">
                <Button color="primary">Register</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
        </Popover>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/ajouter-evenement">Evenements</NavLink>
                          </NavItem>
                          <NavItem>
                          <NavLink to="/demandes-adhesions">Demandes d'adhésions</NavLink>
                          </NavItem>
                          <NavItem>
                          <NavLink to="/clubs">Clubs</NavLink>
                          </NavItem>
                          <NavItem>
                          <NavLink to="/ajouter-club">Ajouter des clubs</NavLink>
                          </NavItem>
                          <NavItem>
                          <NavLink to="/list-inscrits">Liste des inscrits</NavLink>
                          </NavItem>
                          <NavItem>
                          <Link to="#"><NavLink to="#" >Galerie</NavLink></Link>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                        
                        </NavbarNav>
                    </Collapse>
                </Navbar>
          
        );
    }
}
export default NavbarFeatures