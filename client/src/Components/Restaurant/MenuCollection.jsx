import React from 'react';

const MenuCollection = (props) => {
    return (
        <>
            <div className="w-32 h-32 md:w-48 md:h-48 flex flex-col rounded-lg">
                <div className="w-full h-full overflow-hidden rounded-lg">
                    <img 
                        src={props.image}
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
