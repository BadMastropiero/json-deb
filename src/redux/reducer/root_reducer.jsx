import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import productListReducer from './product/product_list_reducer';
import productDetailReducer from './product/product_details_reducer';

// import reducer

export default combineReducers ({
    products: productListReducer,
    selectedProduct: productDetailReducer,
    form: formReducer
})