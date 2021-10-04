import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// components
import Delivery from "../Components/Delivery";
import Dining from "../Components/Dining";
import Nightlife from "../Components/Nightlife";
import Nutrition from "../Components/Nutrition";

// Redux Actions
import { getRestaurant } from "../Redux/Reducer/Restaurant/Restaurant.action";

const Home = () => {
  const { type } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant());
  }, []);

  return (
    <div className="my-5">
      {type === "delivery" && <Delivery />}
      {type === "dining" && <Dining />}
      {type === "nightlife" && <Nightlife />}
      {type === "nutri" && <Nutrition />}
    </div>
  );
};

export default Home;
