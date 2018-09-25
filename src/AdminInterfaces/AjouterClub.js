import React from "react";
import "../App.css";
import { connect } from "react-redux";
import axios from "axios";
import {Link} from 'react-router-dom'
class AjouterClub extends React.Component {
  onAddProduct = () => {
    axios
      .post("/products", this.state)
      .then(() => this.props.onAddProductReducerAction(this.state))
      .catch(err => alert(err));
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="add-product-container">
        <h3>Veuillez entrer les données du club</h3>
        <div className="input-conatiner">
          <label>Nom </label>
          <input name="name" onChange={this.onChange} />
        </div>
        <div className="input-conatiner">
          <label>Image</label>
          <input name="picture" onChange={this.onChange} />
        </div>
        <div className="input-conatiner">
          <label>Instructeur</label>
          <input name="price" onChange={this.onChange} />
        </div>
        <div className="input-conatiner">
          <label>Spécialité</label>
          <input name="categorie" onChange={this.onChange} />
        </div>
        <div className="input-conatiner">
          <label>Description</label>
          <input name="description" onChange={this.onChange} />
        </div>
     <Link to='/home-admin'>
        <button onClick={this.onAddProduct}>Ajouter</button>
        </Link>
     
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispacthToProps = dispatch => {
  return {
    onAddProductReducerAction: product => {
      dispatch({
        type: "ADD_PRODUCT",
        newProduct: product
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(AjouterClub);
