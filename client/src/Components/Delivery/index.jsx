import React, { useState } from "react";

// Components
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";
import Brand from "./Brand";

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "1234534656",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/3/3201333/cfbda35382090ddbf5128a946c235f74.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            ],
            name: "The Belgian Waffle Co.",
            cuisine: [
                "Desserts",
                "Ice Cream",
                "Fast Food",
            ],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.1,
        },
        {
            _id: "42343464",
            photos: [
                "https://b.zmtcdn.com/data/pictures/9/3202099/38bab076549b7f2f7dfc0fade98d0c4c_o2_featured_v2.jpg?output-format=webp",
            ],
            name: "Tandoori Flames",
            cuisine: [
                "North Indian",
                "Chinese",
            ],
            averageCost: 300,
            isPro: false,
            isOff: 60,
            durationOfDelivery: 40,
            restaurantReviewValue: 4.3,
        },
        {
            _id: "234353533333355",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/1/3200981/e01ffc3a4d1f4a76e63b3250299f4793_o2_featured_v2.jpg?output-format=webp",
            ],
            name: "Burger King",
            cuisine: [
                "Burger",
                "Beverages",
                "Fast Food",
            ],
            averageCost: 300,
            isPro: false,
            isOff: 90,
            durationOfDelivery: 33,
            restaurantReviewValue: 4.3,
        },
        {
            _id: "3253453443535",
            photos: [
                "https://b.zmtcdn.com/data/pictures/5/18943455/0478493cc2833c1bba6ad0e58e661f7c_o2_featured_v2.jpg",
            ],
            name: "China Town",
            cuisine: [
                "Chinese",
            ],
            averageCost: 300,
            isPro: true,
            isOff: 50,
            durationOfDelivery: 38,
            restaurantReviewValue: 3.6,
        },
        {
            _id: "423431545135",
            photos: [
                "https://b.zmtcdn.com/data/pictures/6/18774016/32fcccd0c2cd20622ac3b590d8411ca5_o2_featured_v2.jpg",
            ],
            name: "Shri Guruprasad Restaurant",
            cuisine: [
                "Chinese",
                "Street Food"
            ],
            averageCost: 300,
            isPro: false,
            isOff: 75,
            durationOfDelivery: 24,
            restaurantReviewValue: 4.1,
        },
        {
            _id: "1354613463",
            photos: [
                "https://b.zmtcdn.com/data/pictures/3/19713913/3d4d5011299a0dbc697fec940064eb71.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            ],
            name: "Santushti Shakes",
            cuisine: [
                "Beverages",
                "Ice Cream",
            ],
            averageCost: 200,
            isPro: false,
            isOff: 85,
            durationOfDelivery: 26,
            restaurantReviewValue: 4.4,
        },
        {
            _id: "23243645624",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/6/19295956/d77a315b8a3228b4769035728f5d6859_o2_featured_v2.jpg",
            ],
            name: "Starbucks",
            cuisine: [
                "Cafe",
                "Desserts",
            ],
            averageCost: 350,
            isPro: true,
            isOff: 30,
            durationOfDelivery: 30,
            restaurantReviewValue: 4.4,
        },
    ]);

    return (
        <>
            <DeliveryCarousel />
            {/* <Brand /> */}
            <h1 className="text-xl lg:text-3xl mt-6 font-medium">
                Delivery Restaurants
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