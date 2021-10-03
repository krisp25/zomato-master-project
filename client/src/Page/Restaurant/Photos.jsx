import React, { useState, useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";

// Components
import PhotoCollection from "../../Components/Restaurant/PhotosCollection";

const Photos = () => {
    const [photos, setPhotos] = useState([
        "https://b.zmtcdn.com/data/pictures/chains/3/3200023/5bf90ca580e578d486e619d1487131c7.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/3/3200023/a426fee77e21c8e2033d12b8a0fc8f4f.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/3/3200023/549fa9a4b5709056b5133112ae2cf805.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/3/3200023/15cbbe91f7ccea4b6389aef22e61dc2a.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/3/3200023/fc00130aae8303cdb825dd7570b08e2d.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/3/3200023/916a5dea17bb05a4dbfbb5657c1685e9.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/3/3200023/916a5dea17bb05a4dbfbb5657c1685e9.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/3/3200023/b4ff7d328b94e64aace7eb039adcd0b1.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/3/3200023/7ac53f5df147e104bf2e8cd9c809cbb8.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/3/3200023/2afbb990dbeab06c6e4e3872bedd711f.jpg",
    ]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);

    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                src={photos}
                currentIndex={CurrentImg}
                disableScroll={false}
                onClose={closeViewer}
                />
            )}
            <div className="flex flex-wrap gap-2">
                {photos.map((photo) => (
                <PhotoCollection image={photo} openViewer={openViewer} />
                ))}
            </div>
        </>
    );
};

export default Photos;