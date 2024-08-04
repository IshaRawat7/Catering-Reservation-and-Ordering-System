import { useContext, useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import "./Proceed.css";
import Navbar from '../../components/Navbar';
import axios from "axios";

const Proceed = () => {
  const { getTotalCartAmount, token, food_list, cartitems, url } = useContext(StoreContext);
const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list?.forEach((item) => {
      if (cartitems?.[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartitems[item._id] };
        orderItems.push(itemInfo);
      }
    });
    if(orderItems.length === 0){
      alert("No Item in the Cart");
    }
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    console.log("Order Data:",orderData); // Log order data to verify structure

    try {
      let response = await axios.post(url+"/api/order/place", orderData, { headers: { token } });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error placing order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Error placing order");
    }
  };

  useEffect(() => {
    if(!token){
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0){
      navigate("/cart")
    }
  }, [token]);

  return (
    <>
     <Navbar/>
    <form onSubmit={placeOrder} className='place-order bg-slate-800 bg-opacity-60'>
      <div className="place-order-left">
        <p className='title text-white text-3xl font-bold font-serif'>Delivery Information</p>
        <div className="multi-fields">
          <input required type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First Name' />
          <input required type="text"  name='lastname' onChange={onChangeHandler} value={data.lastname} placeholder='Last Name' />
        </div>
        <input required type="email " name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' />
        <input required type="text"  name='street' onChange={onChangeHandler} value={data.street} placeholder='street'/>
      <div className="multi-fields">
          <input required type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' />
          <input required type="text" placeholder='State' />
        </div>
      <div className="multi-fields">
          <input required type="text"  name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip Code' />
          <input required type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' />
        </div>
        <input required type="text" name='phone' onChange={onChangeHandler} value={data.phone}placeholder='Phone Number' />
        </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
           <div className="cart-total-details">
             <p>SubTotal</p>
             <p>${getTotalCartAmount()}</p>
           </div>
           <hr />
           <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>${getTotalCartAmount===0?0:2}</p>
           </div>
           <hr />
           <div className="cart-total-details">
           <b>Total</b>
           <b>${getTotalCartAmount===0?0:getTotalCartAmount()+2}</b>
           </div>
          </div>
          <button type='submit'>PROCEED TO Pay</button>
        </div>
      </div>
      
    </form>
   
    </>
  )
}

export default Proceed;

