import React from 'react';
import { AiFillStar } from "react-icons/ai";

const RestaurantCard = (props) => {
    return (
        <>
            <div className="bg-white p-4 w-full md:w-1/2 lg:w-1/3 mb-2 rounded-2xl hover:shadow-md transition duration-700 ease-in-out">
                <div className="w-full h-56 lg:h-60 relative">
                    <div className="absolute flex items-end justify-between w-full bottom-2">
                        <div className="flex flex-col gap-2 items-start">
                            {props.isPro && (
                                <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">
                                    Pro extra 10% off
                                </span>
                            )}
                            {props.isOff && (
                                <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                                    ₹{`${props.isOff}`} OFF
                                </span>
                            )}
                        </div>
                        <span className="bg-white bg-opacity-75 p-1 rounded mr-2">
                            {props.durationOfDelivery}
                        </span>
                    </div>
                    <img 
                        src={props.photos.length && props.photos[0]}
                        alt="food"
                        className="w-full h-full rounded-2xl object-cover"
                    />
                </div>
                <div className="flex flex-col gap-2 my-2"> 
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl font-medium">{props.name}</h4>
                        <span className="bg-green-800 text-white text-sm py-1 px-2 rounded flex items-center">
                            {props.restaurantReviewValue} <AiFillStar />
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-gray-500">
                        <p>{props.cuisine.join(", ")}</p>
                        <p>₹ {props.averageCost}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RestaurantCard;
