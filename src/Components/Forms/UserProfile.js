

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import "./UserPro.css";
import Navigations from './Navigations';


function UserProfile(props) {
  const [users,setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(() => {
      const storedUsers = JSON.parse(localStorage.getItem('regUsers'));
      if (storedUsers) {
        //if any value in storedUsers it will update users state variable
        setUsers(storedUsers);
      }
    }, []); //runs only once when its mount (mount when compo. is first loaded onto the page)
    

  const handleUserClick = (user) => {
    console.log(user);
    setSelectedUser(user);
  };

  return (
    <>
      <Navigations />

      <div className="flex">

        <div className='parent  justify-center pt-5'>
          {users.map((user, index) => (
            <div key={index} className='w-1/2 md:w-1/3 xl:w-1/4 p-4'>
              <div className='card w-1/2 h-128 shadow-lg shadow-black bg-[#F9C072] flex flex-col items-center justify-center  p-5 mt-4 '>
                <img className='w-24 h-24 rounded-full' src={user.images} />
                <h3 className='text-center text-white font-bold mt-3 text-3xl'>{user.name}</h3>
                {/* <h3 className='text-center text-white font-bold mt-3 text-xl pb-5'>{user.designation}</h3> */}
                <AiOutlineEdit className='text-white-500 text-3xl mx-2' />
              </div>
              <div className='card w-5/6 h-128 shadow-lg shadow-black bg-white flex flex-col p-5 mt-4'>
                <div className='row border-b border-grey-300 '>
                  <h3 className='text-[gray] font-weight text-xl border-bottom border-grey-500 pb-1'>information</h3>
                  <div className='col-lg-6 pt-3 pb-3'>
                    <h2 className='text-xl font-bold text-[#576069] pb-2'>Email</h2>
                    <p className='text-[gray]'>{user.email}</p>
                  </div>
                  <div className='col-lg-6 pt-3 pb-3'>
                    <h2 className='text-xl font-bold text-[#576069] pb-2'>Phone</h2>
                    <p className='text-[gray]'>{user.contact}</p>
                  </div>
                </div>
                <div className='row border-b border-grey-300 '>
                  <h3 className='text-[gray] font-weight text-xl border-bottom border-grey-500 pb-1'>Projects</h3>
                  <div className='col-lg-6 pt-3 pb-3'>
                    <h2 className='text-xl font-bold text-[#576069] pb-2'>Recent</h2>
                    <p className='text-[gray]'>Tailwind CSS</p>
                  </div>
                  <div className='col-lg-6 pt-3 pb-3'>
                    <h2 className='text-xl font-bold text-[#576069] pb-2'> Viewed</h2>
                    <p className='text-[gray]'>React.js</p>
                  </div>
                </div>
                <div className='flex justify-left pt-20'>
                  <AiOutlineFacebook className='text-blue-500 text-3xl mx-2' />
                  <AiOutlineTwitter className='text-blue-500 text-3xl mx-2' />
                  <AiOutlineInstagram className='text-blue-500 text-3xl mx-2' />
                </div>
                <div className="flex items-center">
                  <button onClick={() => handleUserClick(user)} className="text-blue-500 hover:text-blue-700 pt-3">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

          {currentUser && (
            //this is short-circuit operator which finds that there is any value in currentUser if it is then this code will run
               <div className="card mx-auto w-1/4 h-1/6 shadow-lg shadow-black bg-white p-3 my-20  flex flex-col items-center h-96">
               <div className="2nd-main">
                 <img className='max-w-sm rounded-full ' src={selectedUser.images} />
                 <h3 className='text-center text-[#212B70] font-bold mt-2 text-xl'>{selectedUser.name}</h3>
                 <h5 className='text-center text-[grey] mt-1'>{selectedUser.email}</h5>
                 <p className='text-center text-[grey]'>{selectedUser.contact}</p>
                 <div className='flex justify-around w-full mt-2'>
                   <button className="bg-[#212A72] hover:bg-[#1a1d41] text-white font-bold py-2 px-6 rounded-full"> Follow </button>
                   <button className="bg-white hover:bg-gray-100 text-[#212A72] font-bold py-2 px-6 rounded-full border border-gray-300"> Message </button>  
                 </div>
               </div>
             </div>
          )}

     </div>
    </>
  );
}
     
export default UserProfile;