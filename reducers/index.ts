import { combineReducers } from "redux";
import cartReducer from "./cart.reducer";
import customerReducer from "./customer.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  customer: customerReducer,
});

export default rootReducer;
