import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

function NewCard() {
  return (
    <div className='parent flex justify-center pt-5'>
      <div className='card w-1/6 h-128 shadow-lg shadow-black bg-[#F9C072] flex flex-col items-center justify-center p-5'>
        <img className='w-24 h-24 rounded-full' src="https://i.pinimg.com/originals/96/10/c3/9610c30481c6916a584952b7d2cf5912.jpg"/>
        <h3 className='text-center text-white font-bold mt-3 text-3xl'>Navprit</h3>
        <h3 className='text-center text-white font-bold mt-3 text-xl pb-5'>Web Designer</h3>
        <AiOutlineEdit className='text-white-500 text-3xl mx-2' />
      </div>
      <div className='card w-1/3 h-128 shadow-lg shadow-black bg-white flex flex-col p-5'>
          <div className='row border-b border-grey-300 '>
              <h3 className='text-[gray] font-weight text-xl border-bottom border-grey-500 pb-1'>information</h3>
              <div className='col-lg-6 pt-3 pb-3'>
                  <h2 className='text-xl font-bold text-[#576069] pb-2'>Email</h2>
                  <p className='text-[gray]'>info@example.com</p>
              </div>
              <div className='col-lg-6 pt-3 pb-3'>
                  <h2 className='text-xl font-bold text-[#576069] pb-2'>Phone</h2>
                  <p  className='text-[gray]'>123 456 789</p>
              </div>
          </div>
          <div className='row border-b border-grey-300 '>
              <h3 className='text-[gray] font-weight text-xl border-bottom border-grey-500 pb-1'>Projects</h3>
              <div className='col-lg-6 pt-3 pb-3'>
                  <h2 className='text-xl font-bold text-[#576069] pb-2'>Recent</h2>
                  <p  className='text-[gray]'>Loreum ipsum</p>
              </div>
              <div className='col-lg-6 pt-3 pb-3'>
                  <h2 className='text-xl font-bold text-[#576069] pb-2'>Most Viewed</h2>
                  <p  className='text-[gray]'>Dollar sit amet</p>
              </div>
          </div>
          <div className='flex justify-left pt-20'>
            <AiOutlineFacebook className='text-blue-500 text-3xl mx-2' />
            <AiOutlineTwitter className='text-blue-500 text-3xl mx-2' />
            <AiOutlineInstagram className='text-blue-500 text-3xl mx-2' />
          </div>
      </div>
    </div>
  )
}

export default NewCard;