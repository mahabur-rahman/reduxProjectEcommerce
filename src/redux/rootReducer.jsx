import { combineReducers } from "redux";
// shopping reducer
import shopReducer from "./shopping/shoppingReducer";

const rootReducer = combineReducers({ shop: shopReducer });

export default rootReducer;
