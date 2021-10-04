import { combineReducers } from "redux";

import Restaurant from "./Restaurant/Restaurant.reducer";

const RootReducer = combineReducers({ Restaurant });

export default RootReducer;