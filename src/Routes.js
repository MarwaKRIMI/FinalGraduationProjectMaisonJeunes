import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductItem from "./ProductItemDisplay";
import AjouterClub from "./AdminInterfaces/AjouterClub";
import EditProduct from "./AdminInterfaces/EditProduct";
import LogIn from "./LoginInterface/login";
import HomeAdmin from './AdminInterfaces/HomePageAdmin'
import SignUp from "./SignUpInterface/signup";
import Club from "./UserInterfaces/club/club"
import UserProfile from"./UserInterfaces/user-profile/user-profile-modal"
import HomePageUser from './UserInterfaces/HomePageUser'
import ModalExampleCloseIcon from "./UserInterfaces/message-box/mesaage-box-modal"
import DemandesAdhesions from './AdminInterfaces/DemandesAdhesions'
import ExploreClubAerobic from "./UserInterfaces/explore-clubs/ExploreClubAerobic"
import ExploreClubBasket from "./UserInterfaces/explore-clubs/ExploreClubBasket"
import ExploreClubFoot from "./UserInterfaces/explore-clubs/ExploreClubFoot"
import ExploreClubGymnastic from "./UserInterfaces/explore-clubs/ExploreClubGymnastic"
import ExploreClubHand from "./UserInterfaces/explore-clubs/ExploreClubHand"
import ExploreClubInformatique from "./UserInterfaces/explore-clubs/ExploreClubInformatique"
import ExploreClubMusic from "./UserInterfaces/explore-clubs/ExploreClubMusic"
import ExploreClubPeinture from "./UserInterfaces/explore-clubs/ExploreClubPeinture"
import ListInscrits from './AdminInterfaces/ListInscrits'



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
        <Route exact path="/add-product" component={AjouterClub} />
          <Route exact path="/demandes-adhesions" component={DemandesAdhesions}/>
        <Route exact path="/club-musique" component={ExploreClubMusic}/>
        <Route exact path="/club-peinture" component={ExploreClubPeinture}/>
        <Route exact path="/club-football" component={ExploreClubFoot}/>
        <Route exact path="/club-handball" component={ExploreClubHand}/>
        <Route exact path="/club-aérobique" component={ExploreClubAerobic}/>
        <Route exact path="/club-informatique" component={ExploreClubInformatique}/>
        <Route exact path="/club-gymnastique" component={ExploreClubGymnastic}/>
        <Route exact path="/club-basketball" component={ExploreClubBasket}/>
        <Route exact path="/ajouter-club" component={AjouterClub}/>
        <Route exact path="/modifier-club" component={EditProduct}/>
        <Route exact path="/list-inscrit"component={ListInscrits}/>
        <Route exact path="/message-box-modal" component={ModalExampleCloseIcon}/>
     
        
      </div>
    );
  }
}
export default Routes;
