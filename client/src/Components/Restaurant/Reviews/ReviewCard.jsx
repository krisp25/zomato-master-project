import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import dayjs from "dayjs";


const ReviewCard = () => {
    return (
        <>
            <div className="my-3 mr-3 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full">
                            <img
                            src="https://b.zmtcdn.com/data/user_profile_pictures/d76/cc84183f68cc34027812bdf62585cd76.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                            alt="avatar"
                            className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">Octavia Evans</h3>
                            <small className="text-gray-500">
                                5 Reviews &#8226; 3 Followers
                            </small>
                        </div>
                    </div>
                    <button className="text-zomato-400 border border-zomato-400 py-2 rounded-lg px-4">
                        Follow
                    </button>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
                            3 <TiStarFullOutline />
                        </span>
                        <h5 className="font-regular uppercase">
                            {/* {props.isRestaurantReview ? "Dining" : "Delivery"} */}Delivery
                        </h5>
                        <small className="text-gray-500">
                            {/* {dayjs(props.createdAt).format("DD MMM YYYY")} */}3 Days ago
                        </small>
                    </div>
                    <div className="w-full">
                        <p className="w-full text-gray-600 font-light text-base">
                        Food is okay but packing I didn't expect this way from Macd, burger wraped in cotton and 
                        due to weight all mayonnaise stick to that, I think macd has to put burger in package like KFC do, 
                        Test of Chatpata kabab is okay I think macd can improve in that area too.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewCard;
