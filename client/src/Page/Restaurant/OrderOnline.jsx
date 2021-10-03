import React from 'react';
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// Components
import MenuListContainer from '../../Components/Restaurant/Order-Online/MenuListContainer';
import FloatingMenuButton from '../../Components/Restaurant/Order-Online/FloatingMenuButton';
import FoodList from '../../Components/Restaurant/Order-Online/FoodList';

const OrderOnline = () => {
    return (
        <>
            <div className="w-full h-screen flex">
                <aside className="hidden md:flex flex-col border-r overflow-y-scroll border-gray-200 gap-3 w-1/4 h-screen">
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>
                <div className="w-full md:block md:w-3/4">
                    <div className="pl-3 mt-4">
                        <h2 className="text-lg md:text-2xl font-semibold">Order Online</h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500">
                            <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
                        </h4>
                    </div>
                    <section className="pl-3 my-4">
                        <FoodList 
                            name="Burger"
                            items={[
                                {
                                    image: "https://b.zmtcdn.com/data/dish_photos/658/238007d6fd58713b333633a7c93d2658.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*",
                                    name: "McAloo Tikki Burger With Whole Wheat Bun",
                                    rating: 3,
                                    price: 56.19,
                                    description: "The world's favorite Indian burger! Crunchy potato and peas patty topped with tomatoes and onions. Now with the goodness of whole wheat bun",
                                }
                            ]}
                        />
                    </section>
                </div>
            </div>
            <FloatingMenuButton />
        </>
    );
};

export default OrderOnline;
