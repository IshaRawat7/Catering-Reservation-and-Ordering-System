import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import "./orders.css";
import { StoreContext } from '../../context/StoreContext';

const Orders = ({ url }) => {
  const { token, isLoggedIn } = useContext(StoreContext); 
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error('Error fetching orders');
      }
    } catch (error) {
      toast.error('Error fetching orders');
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(url + "/api/order/status", {
        orderId,
        status: event.target.value
      });
      if (response.data.success) {
        await fetchAllOrders();
      } else {
        toast.error('Error updating status');
      }
    } catch (error) {
      toast.error('Error updating status');
    }
  };

  useEffect(() => {
    if(isLoggedIn){
      fetchAllOrders();
    }
   
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <div className="text-center text-red-500">You must be logged in to view the list.</div>;
  }
  
  return (
    <div className='order add text-slate-200'>
      <h3 className='text-center font-bold text-2xl font-serif text-red-400'>Order Page</h3>
      <div className='order-list'>
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src="https://cdn3.iconfinder.com/data/icons/business-vol-3/72/106-512.png" alt="parcel" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + ' x ' + item.quantity;
                  } else {
                    return item.name + ' x ' + item.quantity + ' ,';
                  }
                })}
              </p>
              <p className='order-item-name text-slate-200'>{order.address.firstName + " " + order.address.lastname}</p>
              <div className="order-item-address text-slate-200">
                <p className='text-slate-200'>{order.address.street + ","}</p>
                <p className='text-slate-200'>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p className='order-item-phone text-slate-200'>{order.address.phone}</p>
            </div>
            <p text-slate-200>Items: {order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className='text-black'>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
