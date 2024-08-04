import React, { useContext } from 'react'
import "./FoodItem.css"
import { IoAddCircle } from "react-icons/io5";
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {
const {cartitems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='food-item bg-slate-900 bg-opacity-60'>
        <div className="food-item-img-container ">
            <img className="food-item-image" src={url+"/images/"+image} alt="" />
            {
              !cartitems[id] ? <img className='add' src="src/assets/add.png" alt="" onClick={()=>addToCart(id)} />
              : <div className='food-item-counter'>
             <img onClick={()=>removeFromCart(id)} src="src/assets/remove.jpg" className=" my-2 h-5 w-5 rounded-full" alt="" />
             <p className='text-lg font-bold font-serif text-white'>{cartitems[id]}</p>
             <img onClick={()=>addToCart(id)} src="src/assets/add.jpg" className="h-5 w-5 rounded-full"  alt="" />
              </div>
            }
        </div>
        <div className='food-item-info'>
            <div className="fooditem-name-rating">
                <p className='text-slate-200'>{name}</p>
                <img src="src/assets/rating_star.png" alt="" className='h-20' />
            </div>
            <p className="food-item-desc text-slate-200">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
