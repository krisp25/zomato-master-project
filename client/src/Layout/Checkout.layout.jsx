import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Components
import CheckoutNavbar from '../Components/Navbar/checkoutNavbar';

// Redux Actions
import { getCart } from "../Redux/Reducer/Cart/Cart.action";

const CheckoutLayout = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());
    }, []);

    return (
        <>
            <CheckoutNavbar />
            <div className="container mx-auto px-4 lg:px-20">
                {props.children}
            </div>
        </>
    );
};

export default CheckoutLayout;
