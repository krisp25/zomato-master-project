import React from 'react';
import Slider from "react-slick";

// Components
import { NextArrow, PrevArrow } from "../CarousalArrow";

const Brand = (props) => {
    const logos = [
        "https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625165221.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/7e336c2517d560f80ea4a4ef63a77fc1_1620130033.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1576840166.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188442.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/601f1135641a0a579d585ce86bcd0f01_1506081422.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/591906debc1e0abd7faaea69f249f368_1617984305.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613216042.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/879c7e9834f23b71a7e19c928e463638_1621319487.png?output-format=webp",
    ];

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="my-5 mb-32">
            <Slider {...settings}>
                {logos.map((logo) => (
                    <div className="w-32 h-48 mx-10 bg-white shadow">
                        <img
                        src={logo}
                        alt="brand"
                        className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Brand
