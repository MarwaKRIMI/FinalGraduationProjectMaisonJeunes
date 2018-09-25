import { combineReducers } from "redux";
import clubsFromData from './data'
const ProductsReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_PRODUCTS_LIST":
      return (state = action.products);
    case "ADD_PRODUCT":
      return state.concat(action.newProduct);
    case "EDIT_PRODUCT":
      return state.map(
        e =>
          e._id === action.editedProduct._id ? (e = action.editedProduct) : e
      );
    case "REMOVE_PRODUCT":
      return state.filter(e => e._id !== action.id);
    default:
      return state;
  }
};

const clubsReducer = (state = clubsFromData, action) => {
  switch(action.type) {
    default : 
    return state
  }
}
const titleFilterReducer = (state = clubsFromData, action) => {
  if(action.type === 'SET_TITLE_FILTER') {
    return state.filter(e=>e.title.toLowerCase().includes(action.title.toLowerCase()))
  }
  return state
}

let Reducers = combineReducers({
  ProductsReducer, clubsReducer, titleFilterReducer
});
export default Reducers;
