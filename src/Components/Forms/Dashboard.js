import React, { useState, useEffect } from 'react';
import "./Form.css";
import {  FaVideo, FaYoutube } from 'react-icons/fa';
import { AiOutlineAudio, AiOutlineBell, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import SideBar from './SideBar';
import Todo from './Todo';
import { Link } from 'react-router-dom';

function Dashboard(props) {
  const [users, setUsers] = useState([]);
  //stores user's list

  let userData = props.userData;
  //stores user data which is passing through props.

  useEffect(() => {
    const storedUsers = localStorage.getItem('regUsers');
    //gets user's list from localstorage and update and store's in state var.

    if (storedUsers) {

      setUsers(JSON.parse(storedUsers));
      //update's users state variable and store's converted object.
      
    }
  }, []);

  const currentUser = localStorage.getItem('currentUser');
  //store's current user data from local storage

   userData = null;
  if (currentUser) {
    //check current user's data is avail or not,
    //  if it is set's currentUser data to this variable
    userData = JSON.parse(currentUser);
  }

  return (
    <div className='dash'>
    
      <div className='top'>
        <div className='left-side'>
          <AiOutlineMenu size="25px" color="grey" />
          <FaYoutube size="30px" color="red" />
          <h3 className='top-youtube'>YouTube</h3>
        </div>
        <div className='top-input-container'>
          <div className='center-input'>
            <input type='text' placeholder='Search' className='top-input' />
            <AiOutlineSearch size="25px" color="grey" className='search-icon' />
          </div>
          <div className='mic-icon-container'>
            <AiOutlineAudio size="25px" color="black" className='mic-icon' />
          </div>
        </div>
        <div className='right-side'>
          <FaVideo size="25px" color="black" className='channel-icon' />
          <AiOutlineBell size="24px" color="black" className='bell-icon' />
        </div>
      </div>

      <SideBar />

    
<div className='container'>
        <div className='row' id='img-prop'>
          <div className='col-lg-3'>
            {userData && (
              <Link to="/userprofile">
                <img src={userData.images} alt='User Image' width="150px" className='img-pro' />
              </Link>
            )}
          </div>
          <div className='col-lg-9'>
            {userData && (
              //This condition check user's data is avail or not if it is it will show user's data
              <>
                <h3>{userData.name} </h3>
                <p>{userData.email}</p>
                <p>{userData.contact}</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className='main-content'>
        <Todo />
      </div>
    </div>
  );
}

export default Dashboard;