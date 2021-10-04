import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Components
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";
import Brand from "./Brand";

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.restaurants
    );

    useEffect(() => {
        reduxState.restaurants && setRestaurantList(reduxState.restaurants);
    }, [reduxState.restaurants]);

    return (
        <>
            <DeliveryCarousel />
            {/* <Brand /> */}
            <h1 className="text-xl mt-4 mb-2 md:mt-8 md:mb-6 md:text-3xl md:font-semibold">
                Delivery Restaurants in Vadodara
            </h1>
            <div className="flex justify-between flex-wrap my-2">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard { ...restaurant } key={restaurant._id} />
                ))}
            </div>
        </>
    );
};

export default Delivery;