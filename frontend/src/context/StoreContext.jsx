// StoreContext.js
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartitems, setcartitems] = useState({});
    const url = "http://localhost:3000";
    const [token, settoken] = useState("");
    const [food_list, setFoodlist] = useState([]);

    const addToCart = async (itemId) => {
        if (!cartitems[itemId]) {
            setcartitems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    };

    const removeFromCart = async (itemId) => {
        setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartitems[item];
            }
        }
        return totalAmount;
    };

    const fetchFoodlist = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodlist(response.data.data);
    };

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        setcartitems(response.data.cartData);
    };

    useEffect(() => {
        async function loadData() {
            await fetchFoodlist();
            if (localStorage.getItem("token")) {
                settoken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, []);

    const contextValue = {
        food_list,
        cartitems,
        setcartitems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        settoken,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
