import React, { useContext } from 'react'
import "./cart.css"
import Navbar from '../../components/Navbar'
import {  useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const cart = () => {
  const {cartitems,food_list,removeFromCart,getTotalCartAmount,url} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
   
    <>
   <Navbar/>
    <div className='cart bg-slate-700 bg-opacity-50'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p className='text-white font-bold'>Items</p>
          <p className='text-white font-bold'>Title</p>
          <p className='text-white font-bold'>Price</p>
          <p className='text-white font-bold'>Quantity</p>
          <p className='text-white font-bold'>Total</p>
          <p className='text-white font-bold'>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
              if(cartitems[item._id]>0){
                return (
                  <>
                  <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartitems[item._id]}</p>
                  <p>${item.price*cartitems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                  </div>
                  <hr />
                  </>
                )
              }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2 className='text-white font-bold'>Cart Total</h2>
          <div>
           <div className="cart-total-details">
             <p className='text-white font-bold'>SubTotal</p>
             <p>${getTotalCartAmount()}</p>
           </div>
           <hr />
           <div className="cart-total-details">
          <p className='text-white font-bold'>Delivery Fee</p>
          <p>${getTotalCartAmount()===0?0:2}</p>
           </div>
           <hr />
           <div className="cart-total-details">
           <b>Total</b>
           <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
           </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p className='text-slate-200'>If you have a promocode, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promocode' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    
    </>
  )
}

export default cart;
