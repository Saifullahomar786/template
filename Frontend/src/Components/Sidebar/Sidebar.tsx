import React, { useState } from 'react';
import './Sidebar.css';
// import { UilEstate } from '@iconscout/react-unicons';
import { SidebarData } from '../../Data';
import {FiLogOut} from 'react-icons/fi'

interface SidebarProps{
  selected: number;
  setSelected: (index: number) => void;
}



const Sidebar : React.FC<SidebarProps>= ({selected, setSelected}) => {
  return (
    
    <div className='Sidebar'>
      
     
      <div className='menu'>
       {SidebarData.map((item,index)=>{
        return (
          <div className={selected===index?'menuItem active':'menuItem'} key={index}
          onClick={()=>setSelected(index)} >
            <item.icon/>
            <span>
            {item.heading}
            </span>
          </div>
        )
       })
       }
       <div className='menuItem'>
        <FiLogOut/>
        <span>Sign Out</span>
       </div>
      </div>
    </div>
  )
} 

export default Sidebar;
