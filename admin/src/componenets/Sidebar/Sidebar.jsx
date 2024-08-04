
import React from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src="https://tse2.mm.bing.net/th?id=OIP.Htj94eX6_dEDeqlmVS9xqQHaHa&pid=Api&P=0&h=180" className=' rounded-full ' alt="items" />
          <p className='text-purple-300'>Add Items</p>
        </NavLink>
        
        <NavLink to ='/list' className="sidebar-option">
          <img src="https://vectorified.com/images/check-list-icon-21.png " className='pr' alt="items" />
          <p className='text-purple-300'>List Items</p>
        </NavLink>
    
        <NavLink to='/orders' className="sidebar-option">
          <img src="https://cdn3.iconfinder.com/data/icons/business-vol-3/72/106-512.png" alt="items" />
          <p className='text-purple-300'>Orders</p>
        </NavLink>
      
      </div>
      
    </div>
  )
}

export default Sidebar;
