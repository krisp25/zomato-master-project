import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./Restaurant.type";

const INITAL_STATE = {
    restaurants: [],
    selectedRestaurant: {},
};

const RestaurantReducer = (state = INITAL_STATE, action) => {
    switch(action.type) {
        case GET_RESTAURANT: 
            return {
                ...state,
                restaurants: action.payload,
            };
        
        case GET_SPECIFIC_RESTAURANT:
            return {
                ...state,
                selectedRestaurant: action.payload,
            };

        default: 
            return {
                ...state,
            };
    }
};

export default RestaurantReducer;