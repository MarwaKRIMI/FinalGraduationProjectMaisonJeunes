import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div >
        <Navbar color="warning" light expand="md" >
          <NavbarBrand href="/"><strong>Maison</strong>Jeunes</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar >
            <NavItem>
                <NavLink href='/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#propos'>A propos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Evenements</NavLink>
              </NavItem>

                    <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret href='#club'>
                  Adherations
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem >
                  Voir les demandes d'adhérations
                  </DropdownItem>
               
                 
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#galery">Galery</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret href='#club'>
                  Messages
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem >
                  Envoyer des messages
                  </DropdownItem>
               
                 
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#">Inscrits</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret href='#club'>
                  Clubs
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem >
                   Ajouter un club
                  </DropdownItem>
                  <DropdownItem>
                    Modifier un club
                  </DropdownItem>
                 
                  <DropdownItem>
                    Voir la liste des clubs
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}