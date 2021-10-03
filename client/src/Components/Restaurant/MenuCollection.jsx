import React, { useState } from 'react';
import ImageViewer from "react-simple-image-viewer";

const MenuCollection = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);

    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                src={props.image}
                currentIndex={CurrentImg}
                disableScroll={false}
                onClose={closeViewer}
                />
            )}
            <div 
                className="w-32 h-32 md:w-48 md:h-48 flex flex-col rounded-lg" 
                onClick={openViewer}
            >
                <div className="w-full h-full overflow-hidden rounded-lg">
                    <img 
                        src={props.image[0]}
                        alt="menu"
                        className="w-full h-full transform transition duration-400 hover:scale-110"
                    />
                </div>
                <div>
                    <h2 className="text-base md:text-lg font-medium">{props.menuTitle}</h2>
                    <p className="text-sm md:text-base font-light">{props.pages}</p>
                </div>
            </div>     
        </>
    );
};

export default MenuCollection;
