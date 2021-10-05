import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// Components
import MenuListContainer from '../../Components/Restaurant/Order-Online/MenuListContainer';
import FloatingMenuButton from '../../Components/Restaurant/Order-Online/FloatingMenuButton';
import FoodList from '../../Components/Restaurant/Order-Online/FoodList';

// Redux Actions
import { getFoodList } from "../../Redux/Reducer/Food/Food.action";

const OrderOnline = () => {
    const [menu, setMenu] = useState([]);
    const [selected, setSelected] = useState("");

    const onClickHandler = (e) => {
        if (e.target.id) {
            setSelected(e.target.id);
        }
        return;
    };

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );
    
    const dispatch = useDispatch();

    useEffect(() => {
        reduxState &&
            dispatch(getFoodList(reduxState.menu)).then((data) =>
                setMenu(data.payload.menus.menus)
            );
    }, [reduxState]);

    return (
        <>
            <div className="w-full h-screen flex">
                <aside className="hidden md:flex flex-col border-r overflow-y-scroll border-gray-200 gap-3 w-1/4 h-screen">
                {menu.map((item) => (
                    <MenuListContainer
                        {...item}
                        key={item._id}
                        onClickHandler={onClickHandler}
                        selected={selected}
                    />
                ))}
                </aside>
                <div className="w-full md:block md:w-3/4">
                    <div className="pl-3 mt-4">
                        <h2 className="text-lg md:text-2xl font-semibold">Order Online</h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500">
                            <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
                        </h4>
                    </div>
                    <section className="pl-3 my-4">
                        {menu.map((item) => (
                            <FoodList key={item._id} {...item} />
                        ))}
                    </section>
                </div>
            </div>
            <FloatingMenuButton />
        </>
    );
};

export default OrderOnline;
