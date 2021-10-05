import React from 'react';
import { AiOutlineCamera } from "react-icons/ai";

const ImageGrid = (props) => {
    return (
        <>
            <div className="w-full h-56 md:hidden">
                <img 
                    src={props.images.length && props.images[0].location}
                    alt="restaurant"
                    className="w-full h-full rounded-lg hover:scale-110 transform transition duration-700"
                />
            </div>
            <div className="hidden w-full md:h-64 lg:h-96 md:flex gap-1">
                <div className="w-full h-full overflow-hidden">
                    <img 
                        src={props.images.length && props.images[0].location}
                        alt="restaurant"
                        className="w-full h-full object-cover rounded-lg hover:scale-110 transform transition duration-700"
                    />
                </div>
                <div className="w-1/4 h-full flex flex-col gap-1">
                    <div className=" w-full h-full overflow-hidden">
                        <img 
                            src={props.images.length >= 1 && props.images[1].location}
                            alt="restaurant"
                            className="w-full h-2/4 object-cover rounded-lg hover:scale-110 transform transition duration-700"
                        />
                    </div>
                    <div className="w-full h-full overflow-hidden">
                        <img 
                            src={props.images.length >= 2 && props.images[2].location}
                            alt="restaurant"
                            className="w-full h-2/4 object-cover rounded-lg hover:scale-110 transform transition duration-700"
                        />
                    </div>
                </div>
                <div className="w-1/4 h-full flex flex-col gap-1">
                    <div className="w-full h-2/4 relative overflow-hidden">
                        <img 
                            src={props.images.length >= 3 && props.images[3].location}
                            alt="restaurant"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-opacity-40 bg-black w-full h-full rounded-lg" />
                        <h4 className="absolute z-20 w-full h-full text-center text-white font-semibold inset-y-2/4">View Gallery</h4>
                    </div>
                    <div className="w-full h-2/4 relative overflow-hidden">
                        <img 
                            src={props.images.length >= 4 && props.images[4].location}
                            alt="restaurant"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-opacity-90 bg-gray-400 w-full h-full rounded-lg" />
                        <div className="absolute flex flex-col items-center z-20 w-full h-full text-center text-white font-semibold inset-y-1/3">
                            <div className="bg-black p-3 rounded-full bg-opacity-50">
                                <AiOutlineCamera />
                            </div>
                            <h4>
                                Add Photos
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageGrid;
