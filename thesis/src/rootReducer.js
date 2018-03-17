import { combineReducers } from "redux";
import cartReducer from "./ducks/cart";
import productsReducer from "./ducks/products";
import user from "./ducks/user";

export default combineReducers({
	cart: cartReducer,
    products: productsReducer,
    user
})