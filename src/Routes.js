import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductItem from "./ProductItemDisplay";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import LogIn from "./LoginInterface/login";
import HomeAdmin from './AdminInterfaces/HomePageAdmin'
import HomeUser from './UserInterfaces/HomePageUser'
import SignUp from "./SignUpInterface/signup";
import ExploreClub from "./ExploreClub"
import Club from "./UserInterfaces/club/club"
import UserProfile from"./UserInterfaces/user-profile/user-profile"
import HomePageUser from './UserInterfaces/HomePageUser'

import ModalExampleCloseIcon from "./UserInterfaces/message-box/mesaage-box-modal"
class Routes extends React.Component {
  render() {
    return (
      <div>
         <Route exact path="/" render={() => <LogIn/>} />
         <Route exact path='/home-admin' render={() => <HomeAdmin/>}/>
         <Route exact path='/home-user' render={() => <HomePageUser/>}/>
         <Route exact path='/user-profile' render={()=><UserProfile/>}/>
         <Route exact path='/inscription'  render={() => <SignUp/>}/>
        <Route exact path="/products/:name"render={props =>
         (<ProductItem name={props.match.params.name} data={this.props.data}/>)}
        />
        <Route
          exact
          path="/edit-page/:name"
          render={props => <EditProduct name={props.match.params.name} />}
        />
        <Route exact path="/add-product" component={AddProduct} />
        <Route exact path="/explore-club/:name" component={ExploreClub}/>
        
        <Route exact path="/message-box-modal" component={ModalExampleCloseIcon}/>
  
      </div>
    );
  }
}
export default Routes;
