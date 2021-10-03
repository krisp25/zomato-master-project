import React from 'react';
import ReactStars from "react-rating-stars-component";
import { AiOutlinePlus } from "react-icons/ai";

const FoodItem = (props) => {
    return (
        <>
            <div className="flex items-start w-full gap-2 justify-between">
                <div className="w-3/12 h-24 md:h-36 lg:h-44 px-2 md:px-3">
                    <img 
                        src={props.image}
                        alt="food image"
                        className="w-full h-full rounded-lg"
                    />
                </div>
                <div className="w-3/4 md:w-7/12 flex flex-col md:gap-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm md:text-lg lg:text-2xl font-medium md:font-semibold">{props.name}</h3>
                        <button
                            // onClick={addFoodToCart}
                            // disabled={food.isAddedToCart}
                            className="md:hidden flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg"
                        >
                            {/* {food.isAddedToCart ? (
                                "Added"
                            ) : ( */}
                                <>
                                    <AiOutlinePlus /> Add
                                </>
                            {/* )} */}
                        </button>
                    </div>
                    <ReactStars count={5} value={props.rating} />
                    <h5>₹ {props.price}</h5>
                    <p className="text-xs md:text-lg truncate">{props.description}</p>
                </div>
                <div className="hidden md:block">
                    <button
                        // onClick={addFoodToCart}
                        // disabled={food.isAddedToCart}
                        className="flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg"
                    >
                        {/* {food.isAddedToCart ? (
                           "Added"
                        ) : ( */}
                            <>
                                <AiOutlinePlus /> Add
                            </>
                        {/* )} */}
                    </button>
                </div>
            </div>
        </>
    );
};

export default FoodItem;
