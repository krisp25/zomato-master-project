import React from 'react';

// Components
import CheckoutNavbar from '../Components/Navbar/checkoutNavbar';

const CheckoutLayout = (props) => {
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
