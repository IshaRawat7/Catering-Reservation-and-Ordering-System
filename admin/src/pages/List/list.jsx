import React, { useEffect, useContext} from "react";
import "./list.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { StoreContext } from "../../context/StoreContext";

const listr = ({url}) => {
  const { token, isLoggedIn } = useContext(StoreContext); 
  const [list, setlist] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if (response.data.success) {
      toast.success(response.data.success);
      setlist(response.data.data);
    } else {
      toast.error("Error ");
    }
  }

  const removeFood = async(foodId)=>{
     const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
     await fetchList();
     if(response.data.success){
      toast.success(response.data.success);
     }
     else{
      toast.error('Error');
     }
  }

  useEffect(() => {
    if (isLoggedIn) {
      fetchList();
    }
  }, [isLoggedIn]);


  if (!isLoggedIn) {
    return <div className="text-center text-red-500">You must be logged in to view the list.</div>;
  }

  return (
  <div className="list add flex-col text-slate-200">
  <p className='text-2xl font-bold text-center font-serif text-red-400'>All Foods List</p>
  <div className='list-table'>
    <div className="list-table-format title text-black">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
    </div>
    {list.map((item,index)=>{
      return (
        <div key={index} className='list-table-format'>
         <img src={`${url}/images/`+ item.image} alt="" />
         <p>{item.name}</p>
         <p>{item.category}</p>
         <p>${item.price}</p>
         <p className='cursor' onClick={()=>removeFood(item._id)}>x</p>
        </div>
      )
    })}
  </div>
  </div>
  );
};

export default listr;
