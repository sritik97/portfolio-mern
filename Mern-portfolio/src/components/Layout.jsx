import React, { useState } from 'react'
import './Layout.css'
import Home from '../pages/Home/Home';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Menu from './Menu';

function Layout() {
  const [toggle,setToogle] = useState(true)

  const HandleTogle = () =>{
    setToogle(!toggle)
  }
  return (
    <> 
     <div className="sidebar-section">
        <div className= {toggle?"sidebar-toggle sidebar":"sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={HandleTogle}>
            {toggle?( <AiOutlineDoubleLeft size={30} />):(<AiOutlineDoubleRight size={30} />)}
            </p>
          </div>
        <Menu toggle = {toggle}/>
        </div>
        <div className="container">
        <Home/>
        </div>
      </div>
   </>
  )
}

export default Layout
