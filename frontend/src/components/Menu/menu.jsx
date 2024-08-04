import React from 'react'
import { menu_list } from '../../assets/assets'
import './menu.css'

const menu = ({category,setcategory}) => {

  return (
    <div className='explore' id="explore">
        <h1 className='text-3xl font-bold my-7 font-serif text-red-200'>Explore our Menu</h1>
        <p className='explore-text text-lg font-semibold text-slate-300'>Choose from a diverse menu featuring a delectable array of dishes.</p>
      <div className='menu-list'>
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setcategory(prev =>prev === item.menu_name?"All":item.menu_name)} key={index}
                className='menu-list-items text-white'>           
               <img src={item.menu_image} alt=""  className={category === item.menu_name?"active":""} />  
       
               <p>{item.menu_name}</p>         </div>
            )
        })}
      </div>
      <hr className='m-10 h-[2px] bg-[#e2e2e2] border-none'/>
    </div>
  )
}

export default menu;
