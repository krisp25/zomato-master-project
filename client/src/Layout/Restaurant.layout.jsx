import React from 'react';
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// Components
import RestaurantNavbar from '../Components/Navbar/RestaurantNavbar';
import ImageGrid from "../Components/Restaurant/ImageGrid";
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo';
import InfoButtons from '../Components/Restaurant/InfoButtons';
import TabContainer from '../Components/Restaurant/Tabs';

const RestaurantLayout = (props) => {


    return (
        <>
            <RestaurantNavbar />
            <div className="container mx-auto mt-4 px-4 lg:px-20">
                <ImageGrid 
                    images={[
                        "https://b.zmtcdn.com/data/pictures/1/19277201/98f61bae7f08ccd13f1522c72700c536.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                        "https://b.zmtcdn.com/data/pictures/chains/3/3200023/5bf90ca580e578d486e619d1487131c7.jpg?fit=around|300:273&crop=300:273;*,*",
                        "https://b.zmtcdn.com/data/pictures/chains/3/3200023/549fa9a4b5709056b5133112ae2cf805.jpg?fit=around|300:273&crop=300:273;*,*",
                        "https://b.zmtcdn.com/data/pictures/chains/3/3200023/2afbb990dbeab06c6e4e3872bedd711f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                        "https://b.zmtcdn.com/data/reviews_photos/7b4/40c856ee85731644d2ebae0da8dc67b4_1575720507.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
                    ]} 
                />
                <RestaurantInfo 
                    title="McDonald's"
                    restaurantRating="4.3"
                    deliveryRating="4.4"
                    cuisine="Burger, Fast Food, Beverages"
                    address="Manjalpur, Vadodara"
                />
                <div className="my-4 flex flex-wrap gap-3">
                    <InfoButtons isActive>
                        <TiStarOutline /> Add Review
                    </InfoButtons>
                    <InfoButtons>
                        <RiDirectionLine /> Direction
                    </InfoButtons>
                    <InfoButtons>
                        <BiBookmarkPlus /> Bookmark
                    </InfoButtons>
                    <InfoButtons>
                        <RiShareForwardLine /> Share
                    </InfoButtons>
                </div>
                <div className="my-10">
                    <TabContainer></TabContainer>
                </div>
                <div className="relative">
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default RestaurantLayout;
