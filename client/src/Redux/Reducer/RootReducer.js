import { combineReducers } from "redux";

import restaurant from "./Restaurant/Restaurant.reducer";
import image from "./Image/Image.reducer";

const RootReducer = combineReducers({ 
    restaurant,
    image,
});

export default RootReducer;