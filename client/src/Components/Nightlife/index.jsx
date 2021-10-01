import React from 'react';

// Components
import NightlifeCarousal from './NightlifeCarousal';

const Nightlife = () => {
    return (
        <>
            <div>
                <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
                    Collections
                </h1>
                <NightlifeCarousal />
                <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
                    Nightlife Restaurants in Vadodara
                </h1>
            </div>
        </>
    );
};

export default Nightlife;
