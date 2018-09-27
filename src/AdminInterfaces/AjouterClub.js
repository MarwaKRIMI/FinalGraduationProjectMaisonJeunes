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
      <div className="add-product-container"  >
        <h3>Veuillez entrer les données du club à ajouter</h3>
        <div className="input-conatiner" >
          <label>Nom du club </label>
          <input  type='text' className='input-club'name="name" onChange={this.onChange} />
        </div>
        <div className="input-conatiner">
          <label>Image du club</label>
          <input type="text" name="picture" onChange={this.onChange} />
        </div>
        <div className="input-conatiner">
          <label>Responsable du club</label>
          <input type="text" name="price" onChange={this.onChange} />
        </div>
        <div className="input-conatiner">
          <label>Catégorie</label>
          <input  type="text" name="categorie" onChange={this.onChange} />
        </div>
        <div className="input-conatiner">
          <label>Description des activités du club</label>
          <input  type="text" name="description" onChange={this.onChange} />
        </div>
     <Link to='/home-admin'>
        <button className='btn-add-club' onClick={this.onAddProduct}>Ajouter</button>
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
