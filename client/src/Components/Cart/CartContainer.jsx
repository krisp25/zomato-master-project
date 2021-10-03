import React, { useState } from 'react';
import { IoMdArrowDropright, IoMdArrowDropup } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

// Components
import FoodItem from './FoodItem';

const CartSm = ({ toggle }) => {
    return (
        <>
            <div className="flex items-center justify-between py-1 lg:hidden container px-4 mx-auto">
                <div className="flex flex-col items-start">
                    <small className="flex items-center gap-1" onClick={toggle}>
                        1 ITEM <IoMdArrowDropup />
                    </small>
                    <h4>
                        ₹ 300 <sub>(plus taxes)</sub>
                    </h4>
                </div>
                <button
                    // onClick={continueToCheckout}
                    className="flex items-center gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg"
                >
                    Continue <IoMdArrowDropright />
                </button>
            </div>
        </>
    )
};

const CartLg = ({ toggle }) => {
    return (
        <>
            <div className="lg:flex items-center justify-between hidden py-1 container px-20 mx-auto">
                <div className="flex gap-4 items-start">
                    <span className="border bg-white border-gray-300 p-1 rounded" onClick={toggle}>
                        <IoMdArrowDropup />
                    </span>
                    <h4 className="text-lg font-medium">
                        Your Order (1)
                    </h4>
                </div>
                <div className="flex items-center gap-4">
                    <h4 className="text-lg font-medium">
                        Subtotal: ₹ 300
                    </h4>
                    <button
                        // onClick={continueToCheckout}
                        className="flex items-center text-lg font-light h-10 gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg"
                    >
                        Continue <IoMdArrowDropright />
                    </button>
                </div>
            </div>
        </>
    )
};

const CartContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () => setIsOpen(false);

    return (
        <>
            {isOpen && (
                <div className="fixed w-full overflow-y-scroll h-48 bg-white z-10 p-2 bottom-16 px-4 lg:px-20">
                    <div className="flex items-center justify-between md:px-20">
                        <h3 className="text-xl font-semibold">Your Orders</h3>
                        <IoCloseSharp onClick={closeCart} />
                    </div>
                    <hr className="my-2" />
                    <div className="flex flex-col gap-2 md:px-20">
                        <FoodItem 
                            name="Burger veggie"
                            quantity="3"
                            price="90"
                        />
                    </div>
                </div>
            )}
            <div className="fixed bottom-0 w-full bg-white z-10 p-2">
                <CartSm toggle={toggleCart} />
                <CartLg toggle={toggleCart} />
            </div>
        </>
    );
};

export default CartContainer;
