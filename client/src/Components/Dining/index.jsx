import React from 'react';

// Components
import DiningCarousal from './DiningCarousal';

const Dining = () => {
    return (
        <>
            <div>
                <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
                    Collections
                </h1>
                <DiningCarousal />
                <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
                    Dine-Out Restaurants in Vadodara
                </h1>
            </div>
        </>
    );
};

export default Dining;
