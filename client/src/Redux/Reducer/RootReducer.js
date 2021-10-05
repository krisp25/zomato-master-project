import { combineReducers } from "redux";

import restaurant from "./Restaurant/Restaurant.reducer";
import image from "./Image/Image.reducer";
import reviews from "./Reviews/Review.reducer";
import user from "./User/user.reducer";
import food from "./Food/Food.reducer";
import auth from "./Auth/Auth.reducer";

const RootReducer = combineReducers({ 
    restaurant,
    image,
    reviews,
    user,
    food,
    auth,
});

export default RootReducer;