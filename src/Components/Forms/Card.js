import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function Card() {
  const {currentUser} =useContext(UserContext);
  return (
    <div className="card mx-auto h-22 w-1/4 shadow-lg shadow-black bg-white p-5 flex flex-col items-center">
      <img className='max-w-sm rounded-full ' src='https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg' />
      <h3 className='text-center text-[#212B70] font-bold mt-3 text-xl'>Navprit </h3>
      <h5 className='text-center text-[grey] mt-2'>kaur1234@gamil.com</h5>
      <p className='text-center text-[grey]'>+91 2344567896</p>
      <div className='flex justify-around w-full'>
        <button className="bg-[#212A72] hover:bg-[#1a1d41] text-white font-bold py-2 px-4 mt-3  rounded-full"> Follow </button>
        <button className="bg-white hover:bg-gray-100 text-[#212A72] font-bold py-2 px-4 mt-3 rounded-full border border-gray-300"> Message </button>
      </div>
    </div>
  )
}

export default Card
