import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from 'react-slick';
import { useSelector, useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";

// Components
import MenuCollection from '../../Components/Restaurant/MenuCollection';
import MenuSimilarRestaurantcard from '../../Components/Restaurant/MenuSimilarRestaurantCard';
import { NextArrow, PrevArrow } from "../../Components/CarousalArrow";
import ReviewCard from "../../Components/Restaurant/Reviews/ReviewCard";
import MapView from '../../Components/Restaurant/MapView';

// Redux actions
import { getImage } from "../../Redux/Reducer/Image/Image.action";
import { getReviews } from "../../Redux/Reducer/Reviews/Review.action";

const Overview = () => {
    const [menuImage, setMenuImages] = useState({ images: [] });
    const [Reviews, setReviews] = useState([]);

    const { id } = useParams();

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if (reduxState) {
            dispatch(getImage(reduxState?.menuImage)).then((data) => {
                const images = [];
                data.payload.image.images.map(({ location }) => images.push(location));
                setMenuImages(images);
            });

            dispatch(getReviews(reduxState?._id)).then((data) =>
                setReviews(data.payload.reviews)
            );
        }
    }, []);

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const getLatLong = (mapAddress) => {
        return mapAddress?.split(",").map((item) => parseFloat(item));
    };

    return (
        <>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-8/12">
                    <h2 className="font-semibold text-lg md:text-2xl my-4">About this place</h2>
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-lg md:text-2xl my-4">Menu</h2>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1 text-zomato-400">
                                See all menu <IoMdArrowDropright />
                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <MenuCollection 
                            image={menuImage}
                            menuTitle="Menu"
                            pages="3 Pages"
                        />
                    </div>
                    <h2 className="font-semibold text-lg md:text-2xl my-4">Cuisines</h2>
                    <div className="flex flex-wrap gap-2">
                        {reduxState?.cuisine.map((data) => (
                            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                                {data}
                            </span>
                        ))}
                    </div>
                    <div className="my-4">
                        <h2 className="font-semibold text-lg md:text-2xl">Average Cost</h2>
                        <h6 className="text-base md:text-lg lg:text-xl font-regular">??? {reduxState?.averageCost} for two people (approx.)</h6>
                        <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
                    </div>
                    <div className="my-4">
                        <h2 className="font-semibold text-lg md:text-2xl mb-2">Similar Restaurants</h2>
                    </div>
                    <div>
                        <Slider {...settings}>
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/chains/9/3200059/5a8d239b18402f916130125b8ba9adec_featured_v2.jpg"
                                title="Subway"
                                cuisines="Fast Food, Wraps"
                            />
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/chains/5/19625655/7997feadf7d91275e7926a11db88ec4f_featured_v2.jpg"
                                title="V Cafe"
                                cuisines="Fast Food, Pizza, Burger"
                            />
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/2/19365922/70bbd67031b46bf5928b127dc8bd6277_featured_v2.jpg"
                                title="Burger Bro"
                                cuisines="Burger, Fast Food"
                            />
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/chains/9/3200029/263e5a9cdf0128c15fa06d5990f36be9_featured_v2.jpg"
                                title="KFC"
                                cuisines="Burger, Fast Food, Beverages"
                            />
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/3/19159383/9aae43fe4d65991b788fd6ae4560be42_featured_v2.jpg"
                                title="La Pino'z Pizza"
                                cuisines="Pizza, Italian, Beverages"
                            />
                        </Slider>
                    </div>
                    <div className="my-4">
                        <h2 className="font-semibold text-lg md:text-2xl mb-2">Rate your delivery experience</h2>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="my-4 w-full md:hidden flex flex-col gap-4">
                        <MapView 
                            title={reduxState?.name}
                            phno={`+91${reduxState?.contactNumber}`}
                            mapLocation={getLatLong(reduxState?.mapLocation)}
                            address={reduxState?.address}
                        />
                    </div>
                    <div className="my-4">
                        <h2 className="font-semibold text-lg md:text-2xl mb-2">Review Highlights</h2>
                        <div className="my-4">
                        {Reviews.map((reviewData) => (
                            <ReviewCard {...reviewData} />
                        ))}
                        </div>
                    </div>
                </div>
                <aside 
                    style={{ height: "fit-content" }}
                    className="hidden md:flex md:w-4/12 sticky fixed top-2 bg-white p-3 shadow-xl rounded-xl flex-col gap-4"
                >
                    <MapView 
                        title={reduxState?.name}
                        phno={`+91${reduxState?.contactNumber}`}
                        mapLocation={getLatLong(reduxState?.mapLocation)}
                        address={reduxState?.address}
                    />
                </aside>
            </div>   
        </>
    );
};

export default Overview;
