import React, { useEffect } from "react";
import "./MyOrders.css";
import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Myorders = () => {
  const { token, url } = useContext(StoreContext);
  const [data, setdata] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setdata(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);
  return (
    <>
      <Navbar />
      <div className="my-orders p-4">
        <h2 className="font-extrabold text-center text-2xl text-slate-50  py-2">
          My Orders
        </h2>
        <div className="flex justify-center my-4"></div>
        <div className="container mx-auto">
          {data.map((order, index) => (
            <div
              key={index}
              className="my-orders-order bg-white bg-opacity-60 p-4 rounded-lg shadow-md mb-4"
            >
              <img
                src="src/assets/order.png"
                alt="order"
                className="w-16 h-16"
              />
              <p className="text-slate-900">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x" + item.quantity;
                  } else {
                    return item.name + " x" + item.quantity + " ,";
                  }
                })}
              </p>
              <p className="text-slate-900 font-semibold">${order.amount}.00</p>
              <p className="text-slate-900">Items: {order.items.length}</p>
              <p className="text-slate-900">
                <span>●</span> <b>{order.status}</b>
              </p>
              <button
                onClick={fetchOrders}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-200"
              >
                Track Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Myorders;
