import {combineReducers} from 'redux';
import { productsReducer, selectedProductsReducer } from "./product-reducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});

export default reducers;