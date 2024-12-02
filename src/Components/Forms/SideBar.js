import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineVideoCamera } from 'react-icons/ai';
import { FaTv } from 'react-icons/fa';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

function SideBar() {
   
    const handleLogout = () => {
        // localStorage.clear();
        window.location.href = "/form1";
    };

  return (
    <div className='sidebar'>
        <ul>
            <li>
                <AiOutlineHome size="22px" color="#333"/>
                <span>Home</span>
            </li>
            <li>
                <AiOutlineVideoCamera  size="22px" color="#333"/>
                <span>Shorts</span>
            </li>
            <li>
                <FaTv  size="22px" color="#333"/>
                <span>Subscription</span>
            </li>
            
            <li>
                <AiOutlineUser  size="22px" color="#333"/>
                <span>You</span>
            </li>
            <li onClick={handleLogout}>
                <RiLogoutBoxLine size="22px" color="#333"/>
                <span>Login</span>
            </li>
        </ul>
    </div>
  )
}

export default SideBar
