import axios from "axios";

// Redux types
import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./Restaurant.type";

export const getRestaurant = () => async (dispatch) => {
    try {
        const restaurantList = await axios({
            method: "GET",
            url: "http://localhost:4000/restaurant/?city=Bangalore",
        });
  
      return dispatch({ type: GET_RESTAURANT, payload: restaurantList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};